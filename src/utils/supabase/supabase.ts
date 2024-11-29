import { createClient } from "@supabase/supabase-js";
import { SaveRSVPInputProps, GetWishesResponse, RSVPResponse } from "./types";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

const rsvpTableName = import.meta.env.VITE_TABLE_NAME;
const guestBookTableName = import.meta.env.VITE_GUESTBOOK_TABLE_NAME;
const imagesBucketName = import.meta.env.VITE_PHOTOS_BUCKET_NAME;

export const saveRSVP = async (data: SaveRSVPInputProps): Promise<boolean> => {
  const payload = {
    ...data,
    created_at: new Date().toISOString().replace("T", " ").replace("Z", ""),
  };
  try {
    const response = await supabase
      .from(rsvpTableName)
      // .upsert([payload], { onConflict: "phoneNumber" });
      .insert([payload]);
    if (response.error) {
      throw new Error("Error while saving");
    }
    return true;
  } catch (error) {
    console.error({ error });
    return false;
  }
};

export const saveGuestBook = async (
  data: SaveRSVPInputProps
): Promise<boolean> => {
  const payload = {
    ...data,
    created_at: new Date().toISOString().replace("T", " ").replace("Z", ""),
  };
  try {
    const response = await supabase
      .from(guestBookTableName)
      // .upsert([payload], { onConflict: "phoneNumber" });
      .insert([payload]);
    if (response.error) {
      throw new Error("Error while saving");
    }
    return true;
  } catch (error) {
    console.error({ error });
    return false;
  }
};

export const getWishes = async (): Promise<GetWishesResponse[]> => {
  const { data, error } = await supabase
    .from(guestBookTableName)
    .select()
    .eq("approved", true);

  if (error) {
    console.error(error);
    return [];
  }
  return data;
};

export const getRSVP = async (): Promise<RSVPResponse[]> => {
  const { data, error } = await supabase
    .from(rsvpTableName)
    .select()
    .eq("attendance", true);

  if (error) {
    console.error(error);
    return [];
  }
  return data;
};

export const uploadImages = async (files: File[]): Promise<boolean> => {
  let allUploadsSuccessful = true;

  for (const file of files) {
    const fileName = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from(imagesBucketName)
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Upload failed:", error);
      allUploadsSuccessful = false;
    }
  }

  return allUploadsSuccessful;
};
