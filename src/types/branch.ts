export type Branch = {
  id: string;
  name: string;
  label?: string;
  city: string;
  address: string;
  phones: string[];
  whatsapp?: string;
  mapUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};
