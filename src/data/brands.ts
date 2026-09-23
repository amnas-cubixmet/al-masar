export interface Brand {
  id: number;
  name: string;
  logo: string;
  category: string;
  description: string;
  country: string;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Schneider Electric",
    logo: "/images/brands/schneider-electric.png",
    category: "Power Distribution",
    description:
      "Global leader in energy management and industrial automation solutions.",
    country: "France",
  },

  {
    id: 2,
    name: "Siemens",
    logo: "/images/brands/siemens.png",
    category: "Industrial Automation",
    description:
      "Advanced industrial technology and electrical engineering solutions.",
    country: "Germany",
  },

  {
    id: 3,
    name: "ABB",
    logo: "/images/brands/abb.png",
    category: "Electrical Components",
    description:
      "Innovative electrical and automation technologies for industries.",
    country: "Switzerland",
  },

  {
    id: 4,
    name: "Legrand",
    logo: "/images/brands/legrand.png",
    category: "Electrical Infrastructure",
    description:
      "Premium electrical systems and cable management solutions.",
    country: "France",
  },

  {
    id: 5,
    name: "Eaton",
    logo: "/images/brands/eaton.png",
    category: "Power Management",
    description:
      "Reliable power management and industrial electrical products.",
    country: "USA",
  },

  {
    id: 6,
    name: "Phoenix Contact",
    logo: "/images/brands/phoenix-contact.png",
    category: "Terminal Blocks",
    description:
      "High-quality industrial connection and automation technologies.",
    country: "Germany",
  },

  {
    id: 7,
    name: "Rittal",
    logo: "/images/brands/rittal.png",
    category: "Enclosures",
    description:
      "Premium industrial enclosures and thermal management systems.",
    country: "Germany",
  },

  {
    id: 8,
    name: "LS Electric",
    logo: "/images/brands/ls-electric.png",
    category: "Industrial Power",
    description:
      "Industrial automation and electrical power distribution solutions.",
    country: "South Korea",
  },

  {
    id: 9,
    name: "Alfanar",
    logo: "/images/brands/alfanar.png",
    category: "Electrical Manufacturing",
    description:
      "Saudi-based electrical manufacturing and energy solutions provider.",
    country: "Saudi Arabia",
  },

  {
    id: 10,
    name: "Hager",
    logo: "/images/brands/hager.png",
    category: "Electrical Systems",
    description:
      "Modern electrical installation and energy distribution products.",
    country: "Germany",
  },

  {
    id: 11,
    name: "Weidmüller",
    logo: "/images/brands/weidmuller.png",
    category: "Industrial Connectivity",
    description:
      "Reliable industrial connectivity and interface solutions.",
    country: "Germany",
  },

  {
    id: 12,
    name: "Omron",
    logo: "/images/brands/omron.png",
    category: "Control Components",
    description:
      "Industrial automation and smart sensing technologies.",
    country: "Japan",
  },
];