export type SaveRSVPInputProps = {
  [key: string]: FormDataEntryValue;
};

export type GetWishesResponse = {
  name: string;
  message: string;
  id: number;
  created_at: string;
  approved: boolean;
};

export type RSVPResponse = {
  name: string;
  noOfGuests: number;
};
