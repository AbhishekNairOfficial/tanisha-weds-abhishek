import { createClient } from "@supabase/supabase-js";
import { SaveRSVPInputProps, GetWishesResponse } from "./types";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

const rsvpTableName = import.meta.env.VITE_TABLE_NAME;
const guestBookTableName = import.meta.env.VITE_GUESTBOOK_TABLE_NAME;

export const saveRSVP = async (data: SaveRSVPInputProps): Promise<boolean> => {
  const payload = {
    ...data,
    created_at: new Date().toISOString().replace("T", " ").replace("Z", ""),
  };
  try {
    const response = await supabase
      .from(rsvpTableName)
      .upsert([payload], { onConflict: "phone_number" });
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
      .upsert([payload], { onConflict: "phone_number" });
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
