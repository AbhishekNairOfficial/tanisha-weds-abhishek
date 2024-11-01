import { createClient } from "@supabase/supabase-js";
import { SaveRSVPInputProps } from "./types";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLIC_KEY
);

const tableName = import.meta.env.VITE_TABLE_NAME;

export const saveRSVP = async (data: SaveRSVPInputProps): Promise<boolean> => {
  const payload = {
    ...data,
    created_at: new Date().toISOString().replace("T", " ").replace("Z", ""),
  };
  try {
    const response = await supabase.from(tableName).insert([payload]);
    if (response.error) {
      throw new Error("Error while saving");
    }
    return true;
  } catch (error) {
    console.error({ error });
    return false;
  }
};
