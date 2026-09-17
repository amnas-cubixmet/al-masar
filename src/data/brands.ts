export type Brand = {
  id: string;
  name: string;
  logo?: string;
  placeholderText?: string;
};

export const brands: Brand[] = [
  {
    id: "brand-01",
    name: "Schneider Electric",
    placeholderText: "BRAND 01",
    logo: "/images/brands/schneider.png",
  },
  {
    id: "brand-02",
    name: "ABB Industrial",
    placeholderText: "BRAND 02",
    logo: "/images/brands/abb.png",
  },
  {
    id: "brand-03",
    name: "Legrand",
    placeholderText: "BRAND 03",
    logo: "/images/brands/legrand.png",
  },
  {
    id: "brand-04",
    name: "Eaton Power",
    placeholderText: "BRAND 04",
    logo: "/images/brands/eaton.png",
  },
  {
    id: "brand-05",
    name: "Siemens",
    placeholderText: "BRAND 05",
    logo: "/images/brands/siemens.png",
  },
  {
    id: "brand-06",
    name: "Furse Grounding",
    placeholderText: "BRAND 06",
    logo: "/images/brands/furse.png",
  },
  {
    id: "brand-07",
    name: "CMP Tech",
    placeholderText: "BRAND 07",
    logo: "/images/brands/cmp.png",
  },
  {
    id: "brand-08",
    name: "Unistrut",
    placeholderText: "BRAND 08",
    logo: "/images/brands/unistrut.png",
  },
];
