export type Branch = {
  id: string;
  name: string;
  nameAr?: string;
  label?: string;
  labelAr?: string;
  city: string;
  cityAr?: string;
  address: string;
  addressAr?: string;
  phones: string[];
  whatsapp?: string;
  mapUrl: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
};
