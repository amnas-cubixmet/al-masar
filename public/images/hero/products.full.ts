/**
 * AL MASAR full product catalogue data.
 * Variant titles were reset from the official MASAR catalogue (SR.NO. 1–749).
 * Product grouping, images, Arabic labels and descriptions are preserved from the supplied products file.
 */

export type MainCategory =
  | "Conduit & Fittings"
  | "Boxes & Enclosures"
  | "Cable Management"
  | "Glands & Lugs"
  | "Circuit Protection"
  | "Wiring Accessories"
  | "Flexible Conduit"
  | "Tools & Accessories"
  | "Support Systems"
  | "Grounding";

export interface ProductVariant {
  id: number;
  code: string;
  title: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  titleAr?: string;
  category: string;
  categoryAr?: string;
  mainCategory: MainCategory;
  mainCategoryAr?: string;
  image: string;
  description: string;
  descriptionAr?: string;
  variantCount: number;
  variants: ProductVariant[];
  featured?: boolean;
}

/**
 * Wholesale catalogue: one product card + one image.
 * Repeated sizes/specifications are kept under variants.
 */
export const products: Product[] = [
  {
    id: "conduit-pipe",
    slug: "conduit-pipe",
    title: "Conduit Pipe",
    titleAr: "أنبوب كهربائي EMT",
    category: "Conduit Pipe",
    categoryAr: "أنبوب كهربائي",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-1.png",
    description: "Conduit Pipe for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "أنبوب كهربائي عالي الجودة للتوريد والتجهيز بأحجام ومواصفات متعددة.",
    featured: true,
    variantCount: 9,
    variants: [
      {
        id: 1,
        code: "EMT-001",
        title: "EMT CONDUIT PIPE 1/2''",
      },
      {
        id: 2,
        code: "EMT-002",
        title: "EMT CONDUIT PIPE 3/4'' CHINA",
      },
      {
        id: 3,
        code: "EMT-003",
        title: "EMT CONDUIT PIPE 3/4'' ZINC TECH KSA",
      },
      {
        id: 4,
        code: "EMT-004",
        title: "EMT CONDUIT PIPE 1''",
      },
      {
        id: 5,
        code: "EMT-005",
        title: "EMT CONDUIT PIPE 1-1/4''",
      },
      {
        id: 6,
        code: "EMT-006",
        title: "EMT CONDUIT PIPE 1-1/2''",
      },
      {
        id: 7,
        code: "EMT-007",
        title: "EMT CONDUIT PIPE 2''",
      },
      {
        id: 8,
        code: "EMT-008",
        title: "EMT CONDUIT PIPE 2-1/2''",
      },
      {
        id: 9,
        code: "EMT-009",
        title: "EMT CONDUIT PIPE 3''",
      },
    ],
  },
  {
    id: "emt-bend",
    slug: "emt-bend",
    title: "EMT Bend",
    titleAr: "كوع أنبوب EMT",
    category: "EMT Bend",
    categoryAr: "كوع أنبوب",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-10.png",
    description: "EMT Bend for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "كوع أنبوب EMT عالي الجودة متوفر بمقاسات متعددة للمشاريع.",
    featured: true,
    variantCount: 6,
    variants: [
      {
        id: 10,
        code: "EMT-010",
        title: "EMT BEND 1/2''",
      },
      {
        id: 11,
        code: "EMT-011",
        title: "EMT BEND 3/4''",
      },
      {
        id: 12,
        code: "EMT-012",
        title: "EMT BEND 1''",
      },
      {
        id: 13,
        code: "EMT-013",
        title: "EMT BEND 1-1/4''",
      },
      {
        id: 14,
        code: "EMT-014",
        title: "EMT BEND 1-1/2''",
      },
      {
        id: 15,
        code: "EMT-015",
        title: "EMT BEND 2''",
      },
    ],
  },
  {
    id: "clamp",
    slug: "clamp",
    title: "Clamp",
    titleAr: "قفيز وتثبيت الأنابيب",
    category: "Clamp",
    categoryAr: "قفيز تثبيت",
    mainCategory: "Support Systems",
    image: "/images/products/product-16.png",
    description: "Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "مرابط وقفيز تثبيت عالي التحمل بمقاسات مختلفة لتثبيت الكابلات والأنابيب.",
    featured: true,
    variantCount: 16,
    variants: [
      {
        id: 16,
        code: "EMT-016",
        title: "EMT CLAMP 1 HOLE 1/2'' UL",
      },
      {
        id: 17,
        code: "EMT-017",
        title: "EMT CLAMP 1 HOLE 1/2'' CH",
      },
      {
        id: 18,
        code: "EMT-018",
        title: "EMT CLAMP 1 HOLE 3/4'' UL",
      },
      {
        id: 19,
        code: "EMT-019",
        title: "EMT CLAMP 1 HOLE 3/4'' CH",
      },
      {
        id: 20,
        code: "EMT-020",
        title: "EMT CLAMP 1 HOLE 1'' UL",
      },
      {
        id: 21,
        code: "EMT-021",
        title: "EMT CLAMP 1 HOLE 1'' CH",
      },
      {
        id: 22,
        code: "EMT-022",
        title: "EMT CLAMP 1 HOLE 1-1/4''",
      },
      {
        id: 23,
        code: "EMT-023",
        title: "EMT CLAMP 1 HOLE 1-1/2''",
      },
      {
        id: 24,
        code: "EMT-024",
        title: "EMT CLAMP 1 HOLE 2''",
      },
      {
        id: 25,
        code: "EMT-025",
        title: "EMT CLAMP 2 HOLE 1/2'' UL",
      },
      {
        id: 26,
        code: "EMT-026",
        title: "EMT CLAMP 2 HOLE 1/2'' CH",
      },
      {
        id: 27,
        code: "EMT-027",
        title: "EMT CLAMP 2 HOLE 3/4''",
      },
      {
        id: 28,
        code: "EMT-028",
        title: "EMT CLAMP 2 HOLE 1''",
      },
      {
        id: 29,
        code: "EMT-029",
        title: "EMT CLAMP 2 HOLE 1-1/4''",
      },
      {
        id: 30,
        code: "EMT-030",
        title: "EMT CLAMP 2 HOLE 1-1/2''",
      },
      {
        id: 31,
        code: "EMT-031",
        title: "EMT CLAMP 2 HOLE 2''",
      },
    ],
  },
  {
    id: "rigid-clamp",
    slug: "rigid-clamp",
    title: "Rigid Clamp",
    category: "Rigid Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-16.png",
    description: "Rigid Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 14,
    variants: [
      {
        id: 32,
        code: "EMT-032",
        title: "RIGID CLAMP 1 HOLE 3/4''",
      },
      {
        id: 33,
        code: "EMT-033",
        title: "RIGID CLAMP 1 HOLE 1''",
      },
      {
        id: 34,
        code: "EMT-034",
        title: "RIGID CLAMP 2 HOLE 3/4''",
      },
      {
        id: 35,
        code: "EMT-035",
        title: "RIGID CLAMP 2 HOLE 1''",
      },
      {
        id: 36,
        code: "EMT-036",
        title: "RIGID CLAMP 2 HOLE 2''",
      },
      {
        id: 37,
        code: "EMT-037",
        title: "RIGID CLAMP 2 HOLE 2-1/2''",
      },
      {
        id: 130,
        code: "EMT-130",
        title: "RIGID C-CHANNEL CLAMP 3/4''",
      },
      {
        id: 131,
        code: "EMT-131",
        title: "RIGID C-CHANNEL CLAMP 1''",
      },
      {
        id: 132,
        code: "EMT-132",
        title: "RIGID C-CHANNEL CLAMP 2''",
      },
      {
        id: 133,
        code: "EMT-133",
        title: "RIGID C-CHANNEL CLAMP 2-1/2''",
      },
      {
        id: 134,
        code: "EMT-134",
        title: "RIGID CHANNEL CLAMP 3''",
      },
      {
        id: 135,
        code: "EMT-135",
        title: "RIGID CHANNEL CLAMP 4''",
      },
      {
        id: 154,
        code: "EMT-154",
        title: "RIGID BASE CLAMP 2 HOLE 3/4''",
      },
      {
        id: 155,
        code: "EMT-155",
        title: "RIGID BASE CLAMP 2 HOLE 1''",
      },
    ],
  },
  {
    id: "rigid-connector",
    slug: "rigid-connector",
    title: "Rigid Connector",
    category: "Rigid Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-38.png",
    description: "Rigid Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 7,
    variants: [
      {
        id: 38,
        code: "EMT-038",
        title: "RIGID CONNECTOR 3/4'' HUB TYPE",
      },
      {
        id: 39,
        code: "EMT-039",
        title: "RIGID CONNECTOR 1/2'' SCREW TYPE",
      },
      {
        id: 40,
        code: "EMT-040",
        title: "RIGID CONNECTOR 3/4'' SCREW TYPE",
      },
      {
        id: 41,
        code: "EMT-041",
        title: "RIGID CONNECTOR 1'' SCREW TYPE",
      },
      {
        id: 42,
        code: "EMT-042",
        title: "RIGID CONNECTOR 1-1/4'' SCREW TYPE",
      },
      {
        id: 43,
        code: "EMT-043",
        title: "RIGID CONNECTOR 1-1/2'' SCREW TYPE",
      },
      {
        id: 44,
        code: "EMT-044",
        title: "RIGID CONNECTOR 2'' SCREW TYPE",
      },
    ],
  },
  {
    id: "rigid-coupling",
    slug: "rigid-coupling",
    title: "Rigid Coupling",
    category: "Rigid Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-45.png",
    description: "Rigid Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 8,
    variants: [
      {
        id: 45,
        code: "EMT-045",
        title: "RIGID COUPLING 3/4'' SCREW TYPE",
      },
      {
        id: 46,
        code: "EMT-046",
        title: "RIGID COUPLING 1'' SCREW TYPE",
      },
      {
        id: 187,
        code: "EMT-187",
        title: "RIGID COUPLING 1/2''",
      },
      {
        id: 188,
        code: "EMT-188",
        title: "RIGID COUPLING 3/4''",
      },
      {
        id: 189,
        code: "EMT-189",
        title: "RIGID COUPLING 1''",
      },
      {
        id: 190,
        code: "EMT-190",
        title: "RIGID COUPLING 1-1/2''",
      },
      {
        id: 191,
        code: "EMT-191",
        title: "RIGID COUPLING 2''",
      },
      {
        id: 192,
        code: "EMT-192",
        title: "RIGID COUPLING 2-1/2''",
      },
    ],
  },
  {
    id: "reducer",
    slug: "reducer",
    title: "Reducer",
    category: "Reducer",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-47.png",
    description: "Reducer for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 47,
        code: "EMT-047",
        title: "REDUCER 3/4'' X 1/2''",
      },
      {
        id: 48,
        code: "EMT-048",
        title: "REDUCER 1'' X 3/4''",
      },
      {
        id: 49,
        code: "EMT-049",
        title: "REDUCER 1'' X 1/2''",
      },
    ],
  },
  {
    id: "emt-box",
    slug: "emt-box",
    title: "EMT Box",
    category: "EMT Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-50.png",
    description: "EMT Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 16,
    variants: [
      {
        id: 50,
        code: "EMT-050",
        title: "EMT BOX 10X10 - 3/4'' HOLE",
      },
      {
        id: 51,
        code: "EMT-051",
        title: "EMT BOX 10X10 - 1/2'' & 3/4'' HOLE 52151",
      },
      {
        id: 52,
        code: "EMT-052",
        title: "EMT BOX 10X10-3/4\" HOLE 1.6 MM WITH GROUNDING SCREW ITCC MODEL",
      },
      {
        id: 55,
        code: "EMT-055",
        title: "EMT BOX 10X10 CM DEEP 1\" HOLE 52171-1 STEEL CITY MODEL",
      },
      {
        id: 56,
        code: "EMT-056",
        title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE 52171-3/4 STEEL CITY MODEL",
      },
      {
        id: 57,
        code: "EMT-057",
        title: "EMT BOX 10X10 CM DEEP 1\" HOLE ITCC MODEL 52171-1",
      },
      {
        id: 58,
        code: "EMT-058",
        title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE ITCC MODEL 52171-3/4",
      },
      {
        id: 59,
        code: "EMT-059",
        title: "EMT BOX 5X10-3/4\" HOLE",
      },
      {
        id: 60,
        code: "EMT-060",
        title: "EMT BOX 5X10-3/4\" HOLE ITCC/STEEL CITY QUALITY WITH GROUNDING 1.6MM",
      },
      {
        id: 80,
        code: "EMT-080",
        title: "EMT BOX 15X15X10",
      },
      {
        id: 81,
        code: "EMT-081",
        title: "EMT BOX 20X20X5",
      },
      {
        id: 82,
        code: "EMT-082",
        title: "EMT BOX 20X20X10",
      },
      {
        id: 83,
        code: "EMT-083",
        title: "EMT BOX 25X25X10",
      },
      {
        id: 84,
        code: "EMT-084",
        title: "EMT BOX 30X30X5",
      },
      {
        id: 85,
        code: "EMT-085",
        title: "EMT BOX 30X30X10",
      },
      {
        id: 86,
        code: "EMT-086",
        title: "EMT BOX 40X40X10",
      },
    ],
  },
  {
    id: "octogonal-box",
    slug: "octogonal-box",
    title: "Octogonal Box",
    category: "Octogonal Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-53.png",
    description: "Octogonal Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 53,
        code: "EMT-053",
        title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE",
      },
      {
        id: 54,
        code: "EMT-054",
        title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE 1.5 MM THICKNESS ITCC MODEL",
      },
    ],
  },
  {
    id: "ring-box",
    slug: "ring-box",
    title: "Ring Box",
    category: "Ring Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-61.png",
    description: "Ring Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 61,
        code: "EMT-061",
        title: "RING BOX 7X7X3.5 CM HOLE",
      },
      {
        id: 62,
        code: "EMT-062",
        title: "RING BOX 7X14X3.5 CM HOLE",
      },
      {
        id: 63,
        code: "EMT-063",
        title: "RING BOX 9X9X1.6 CM HOLE",
      },
      {
        id: 64,
        code: "EMT-064",
        title: "RING BOX 10X10 - 3/4'' HOLE",
      },
    ],
  },
  {
    id: "water-proof-box",
    slug: "water-proof-box",
    title: "Water Proof Box",
    titleAr: "صندوق حماية مقاوم للمياه",
    category: "Water Proof Box",
    categoryAr: "صندوق مقاوم للمياه",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-65.png",
    description: "Water Proof Box for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "صندوق تجميع وحماية مقاوم للمياه والاتربة ومصمم للظروف الجوية العالية.",
    featured: true,
    variantCount: 12,
    variants: [
      {
        id: 65,
        code: "EMT-065",
        title: "W/P BOX 5 HOLE 10X10 - 3/4''",
      },
      {
        id: 66,
        code: "EMT-066",
        title: "W/P BOX 3 HOLE 10X10 - 3/4''",
      },
      {
        id: 67,
        code: "EMT-067",
        title: "W/P BOX 5X10 CM 3/4\" HOLE 3 HOLE 1G75-3",
      },
      {
        id: 68,
        code: "EMT-068",
        title: "W/P BOX 5X10 CM 1\" HOLE 3 HOLE 1G100-3",
      },
      {
        id: 69,
        code: "EMT-069",
        title: "W/P DEEP BOX 5X10 CM 3/4\" HOLE 3 HOLE 1DG75-3",
      },
      {
        id: 70,
        code: "EMT-070",
        title: "W/P DEEP BOX 5X10 CM 1\" HOLE 3 HOLE 1DG100-3",
      },
      {
        id: 71,
        code: "EMT-071",
        title: "W/P BOX 10X10 CM 3/4\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G75-5X",
      },
      {
        id: 72,
        code: "EMT-072",
        title: "W/P BOX 10X10 CM 1\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G100-5X",
      },
      {
        id: 73,
        code: "EMT-073",
        title: "W/P DEEP BOX 10X10 CM 3/4\" 5 HOLE 2DG75-5",
      },
      {
        id: 74,
        code: "EMT-074",
        title: "W/P DEEP BOX 10X10 CM 1\" 5 HOLE 2DG100-5",
      },
      {
        id: 75,
        code: "EMT-075",
        title: "W/P DEEP BOX 10X10 CM 1\" 7 HOLE 2DG100-7",
      },
      {
        id: 76,
        code: "EMT-076",
        title: "W/P ROUND BOX 10X10 CM 3/4\" HOLE",
      },
    ],
  },
  {
    id: "water-proof-cover",
    slug: "water-proof-cover",
    title: "Water Proof Cover",
    category: "Water Proof Cover",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-77.png",
    description: "Water Proof Cover for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 77,
        code: "EMT-077",
        title: "W/P ROUND BOX COVER 10X10 CM UL",
      },
      {
        id: 78,
        code: "EMT-078",
        title: "WATER PROOF COVER GREY 5X10 CM UL",
      },
      {
        id: 79,
        code: "EMT-079",
        title: "WATER PROOF COVER GREY 10X10 CM UL",
      },
    ],
  },
  {
    id: "c-channel",
    slug: "c-channel",
    title: "C-channel",
    category: "C-Channel",
    mainCategory: "Support Systems",
    image: "/images/products/product-87.png",
    description: "C-channel for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 87,
        code: "EMT-087",
        title: "C-CHANNEL 41X41X1.2 MM",
      },
      {
        id: 88,
        code: "EMT-088",
        title: "C-CHANNEL 41X21X1.2 MM",
      },
      {
        id: 89,
        code: "EMT-089",
        title: "C-CHANNEL 41X41X1.5 MM",
      },
      {
        id: 90,
        code: "EMT-090",
        title: "C-CHANNEL 41X21X1.5 MM",
      },
      {
        id: 91,
        code: "EMT-091",
        title: "C-CHANNEL 41X41X2 MM",
      },
      {
        id: 92,
        code: "EMT-092",
        title: "C-CHANNEL 41X21X2 MM",
      },
    ],
  },
  {
    id: "channel-clamp",
    slug: "channel-clamp",
    title: "Channel Clamp",
    titleAr: "مرابط قناة التثبيت",
    category: "Channel Clamp",
    categoryAr: "مرابط قناة التثبيت",
    mainCategory: "Support Systems",
    image: "/images/products/product-93.png",
    description: "Channel Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    descriptionAr: "مرابط قناة تثبيت عالية القوة لربط ودعم الأنابيب والكابلات.",
    featured: true,
    variantCount: 6,
    variants: [
      {
        id: 93,
        code: "EMT-093",
        title: "EMT CHANNEL CLAMP 1/2''",
      },
      {
        id: 94,
        code: "EMT-094",
        title: "EMT CHANNEL CLAMP 3/4''",
      },
      {
        id: 95,
        code: "EMT-095",
        title: "EMT CHANNEL CLAMP 1''",
      },
      {
        id: 96,
        code: "EMT-096",
        title: "EMT CHANNEL CLAMP 1-1/4''",
      },
      {
        id: 97,
        code: "EMT-097",
        title: "EMT CHANNEL CLAMP 1-1/2''",
      },
      {
        id: 98,
        code: "EMT-098",
        title: "EMT CHANNEL CLAMP 2''",
      },
    ],
  },
  {
    id: "thread-rod",
    slug: "thread-rod",
    title: "Thread Rod",
    category: "Thread Rod",
    mainCategory: "Support Systems",
    image: "/images/products/product-99.png",
    description: "Thread Rod for wholesale electrical supply, available in multiple sizes and specifications.",
    featured: true,
    variantCount: 3,
    variants: [
      {
        id: 99,
        code: "EMT-099",
        title: "THREAD ROD 8 MM X 3 MTR",
      },
      {
        id: 100,
        code: "EMT-100",
        title: "THREAD ROD 10 MM X 3 MTR",
      },
      {
        id: 101,
        code: "EMT-101",
        title: "THREAD ROD 12 MM X 3 MTR",
      },
    ],
  },
  {
    id: "beam-clamp",
    slug: "beam-clamp",
    title: "Beam Clamp",
    category: "Beam Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-102.png",
    description: "Beam Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 102,
        code: "EMT-102",
        title: "BEAM CLAMP 8''",
      },
      {
        id: 103,
        code: "EMT-103",
        title: "BEAM CLAMP 10''",
      },
      {
        id: 104,
        code: "EMT-104",
        title: "BEAM CLAMP 12''",
      },
    ],
  },
  {
    id: "knock-out-seal",
    slug: "knock-out-seal",
    title: "Knock Out Seal",
    category: "Knock Out Seal",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-105.png",
    description: "Knock Out Seal for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 105,
        code: "EMT-105",
        title: "KNOCK OUT SEAL 1/2''",
      },
      {
        id: 106,
        code: "EMT-106",
        title: "KNOCK OUT SEAL 3/4''",
      },
      {
        id: 107,
        code: "EMT-107",
        title: "KNOCK OUT SEAL 1''",
      },
    ],
  },
  {
    id: "insulated-bushing",
    slug: "insulated-bushing",
    title: "Insulated Bushing",
    category: "Insulated Bushing",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-108.png",
    description: "Insulated Bushing for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 108,
        code: "EMT-108",
        title: "INSULATED BUSHING 1/2''",
      },
      {
        id: 109,
        code: "EMT-109",
        title: "INSULATED BUSHING 3/4''",
      },
      {
        id: 110,
        code: "EMT-110",
        title: "INSULATED BUSHING 1''",
      },
      {
        id: 111,
        code: "EMT-111",
        title: "INSULATED BUSHING 1-1/4''",
      },
      {
        id: 112,
        code: "EMT-112",
        title: "INSULATED BUSHING 1-1/2''",
      },
      {
        id: 113,
        code: "EMT-113",
        title: "INSULATED BUSHING 2''",
      },
    ],
  },
  {
    id: "liquid-tight-connector",
    slug: "liquid-tight-connector",
    title: "Liquid Tight Connector",
    category: "Liquid Tight Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-114.png",
    description: "Liquid Tight Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 11,
    variants: [
      {
        id: 114,
        code: "EMT-114",
        title: "LIQUID TIGHT CONNECTOR 1/2''",
      },
      {
        id: 115,
        code: "EMT-115",
        title: "LIQUID TIGHT CONNECTOR 3/4''",
      },
      {
        id: 116,
        code: "EMT-116",
        title: "LIQUID TIGHT CONNECTOR 1''",
      },
      {
        id: 117,
        code: "EMT-117",
        title: "LIQUID TIGHT CONNECTOR 1-1/4''",
      },
      {
        id: 118,
        code: "EMT-118",
        title: "LIQUID TIGHT CONNECTOR 1-1/2''",
      },
      {
        id: 119,
        code: "EMT-119",
        title: "LIQUID TIGHT CONNECTOR 2''",
      },
      {
        id: 120,
        code: "EMT-120",
        title: "LIQUID TIGHT CONNECTOR 2-1/2''",
      },
      {
        id: 121,
        code: "EMT-121",
        title: "LIQUID TIGHT CONNECTOR 3''",
      },
      {
        id: 122,
        code: "EMT-122",
        title: "LIQUID TIGHT CONNECTOR 4''",
      },
      {
        id: 180,
        code: "EMT-180",
        title: "LIQUID TIGHT ANGLE CONNECTOR 1/2''",
      },
      {
        id: 181,
        code: "EMT-181",
        title: "LIQUID TIGHT ANGLE CONNECTOR 3/4''",
      },
    ],
  },
  {
    id: "flexible-coupling",
    slug: "flexible-coupling",
    title: "Flexible Coupling",
    category: "Flexible Coupling",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-123.png",
    description: "Flexible Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 123,
        code: "EMT-123",
        title: "LIQUID TIGHT FLEXIBLE COUPLING 3/4\" UL",
      },
      {
        id: 124,
        code: "EMT-124",
        title: "LIQUID TIGHT FLEXIBLE COUPLING 1\" UL",
      },
    ],
  },
  {
    id: "combination-coupling",
    slug: "combination-coupling",
    title: "Combination Coupling",
    category: "Combination Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-125.png",
    description: "Combination Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 125,
        code: "EMT-125",
        title: "EMT COMBINATION COUPLING 3/4''",
      },
      {
        id: 126,
        code: "EMT-126",
        title: "EMT COMBINATION COUPLING 1''",
      },
    ],
  },
  {
    id: "copper-coupling",
    slug: "copper-coupling",
    title: "Copper Coupling",
    category: "Copper Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-127.png",
    description: "High quality COPPER CORNER COUPLING EMT TO EMT 3/4\\\" UL CCC-075 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 127,
        code: "EMT-127",
        title: "COPPER CORNER COUPLING EMT TO EMT 3/4\" UL CCC-075",
      },
    ],
  },
  {
    id: "hanger-clamp",
    slug: "hanger-clamp",
    title: "Hanger Clamp",
    category: "Hanger Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-128.png",
    description: "Hanger Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 128,
        code: "EMT-128",
        title: "EMT HANGER CLAMP 3/4''",
      },
      {
        id: 129,
        code: "EMT-129",
        title: "EMT HANGER CLAMP 1''",
      },
    ],
  },
  {
    id: "pull-elbow",
    slug: "pull-elbow",
    title: "Pull Elbow",
    category: "Pull Elbow",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-136.png",
    description: "Pull Elbow for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 136,
        code: "EMT-136",
        title: "RIGID PULL ELBOW 3/4''",
      },
      {
        id: 137,
        code: "EMT-137",
        title: "RIGID PULL ELBOW 1''",
      },
      {
        id: 138,
        code: "EMT-138",
        title: "EMT PULL ELBOW 1/2''",
      },
      {
        id: 139,
        code: "EMT-139",
        title: "EMT PULL ELBOW 3/4''",
      },
      {
        id: 140,
        code: "EMT-140",
        title: "EMT PULL ELBOW 1''",
      },
    ],
  },
  {
    id: "emt-bender",
    slug: "emt-bender",
    title: "EMT Bender",
    category: "EMT Bender",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-141.png",
    description: "EMT Bender for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 141,
        code: "EMT-141",
        title: "EMT BENDER 1/2'' WITH HANDLE",
      },
      {
        id: 142,
        code: "EMT-142",
        title: "EMT BENDER 3/4'' WITH HANDLE",
      },
      {
        id: 143,
        code: "EMT-143",
        title: "EMT BENDER 1'' WITH HANDLE",
      },
      {
        id: 144,
        code: "EMT-144",
        title: "EMT BENDER 3/4'' WITH HANDLE BLACK",
      },
    ],
  },
  {
    id: "rigid-bend",
    slug: "rigid-bend",
    title: "Rigid Bend",
    category: "Rigid Bend",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-145.png",
    description: "Rigid Bend for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 145,
        code: "EMT-145",
        title: "RIGID BEND 3/4''",
      },
      {
        id: 146,
        code: "EMT-146",
        title: "RIGID BEND 1''",
      },
      {
        id: 147,
        code: "EMT-147",
        title: "RIGID BEND 2''",
      },
      {
        id: 148,
        code: "EMT-148",
        title: "RIGID BEND 2-1/2''",
      },
    ],
  },
  {
    id: "end-cap",
    slug: "end-cap",
    title: "End Cap",
    category: "End Cap",
    mainCategory: "Support Systems",
    image: "/images/products/product-149.png",
    description: "End Cap for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 149,
        code: "EMT-149",
        title: "END CAP 41X21",
      },
      {
        id: 150,
        code: "EMT-150",
        title: "END CAP 41X41",
      },
    ],
  },
  {
    id: "pvc-bender",
    slug: "pvc-bender",
    title: "PVC Bender",
    category: "PVC Bender",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-151.png",
    description: "PVC Bender for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 151,
        code: "EMT-151",
        title: "PVC SPRING BENDER 20MM",
      },
      {
        id: 152,
        code: "EMT-152",
        title: "PVC SPRING BENDER 25MM",
      },
      {
        id: 153,
        code: "EMT-153",
        title: "PVC SPRING BENDER 32MM",
      },
    ],
  },
  {
    id: "pvc-box",
    slug: "pvc-box",
    title: "PVC Box",
    category: "PVC Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-156.png",
    description: "High quality PVC BOX 7X7 DEEP for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 156,
        code: "EMT-156",
        title: "PVC BOX 7X7 DEEP",
      },
    ],
  },
  {
    id: "pulling-wire",
    slug: "pulling-wire",
    title: "Pulling Wire",
    category: "Pulling Wire",
    mainCategory: "Cable Management",
    image: "/images/products/product-157.png",
    description: "Pulling Wire for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 157,
        code: "EMT-157",
        title: "PULLING WIRE MCS 30MM",
      },
      {
        id: 158,
        code: "EMT-158",
        title: "PULLING WIRE MCS 60MM",
      },
      {
        id: 159,
        code: "EMT-159",
        title: "PULLING WIRE MCS 80MM",
      },
    ],
  },
  {
    id: "pvc-adaptor",
    slug: "pvc-adaptor",
    title: "PVC Adaptor",
    category: "PVC Adaptor",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-160.png",
    description: "PVC Adaptor for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 8,
    variants: [
      {
        id: 160,
        code: "EMT-160",
        title: "PVC ADAPTOR FA 20MM",
      },
      {
        id: 161,
        code: "EMT-161",
        title: "PVC ADAPTOR FA 25MM",
      },
      {
        id: 162,
        code: "EMT-162",
        title: "PVC ADAPTOR FAFA 20MM",
      },
      {
        id: 163,
        code: "EMT-163",
        title: "PVC ADAPTOR FAFA 25MM",
      },
      {
        id: 168,
        code: "EMT-168",
        title: "PVC ADAPTOR 20MM",
      },
      {
        id: 169,
        code: "EMT-169",
        title: "PVC ADAPTOR 25MM",
      },
      {
        id: 170,
        code: "EMT-170",
        title: "PVC ADAPTOR 32MM",
      },
      {
        id: 171,
        code: "EMT-171",
        title: "PVC ADAPTOR 50MM",
      },
    ],
  },
  {
    id: "pvc-coupling",
    slug: "pvc-coupling",
    title: "PVC Coupling",
    category: "PVC Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-164.png",
    description: "PVC Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 164,
        code: "EMT-164",
        title: "PVC COUPLING 20MM",
      },
      {
        id: 165,
        code: "EMT-165",
        title: "PVC COUPLING 25MM",
      },
      {
        id: 166,
        code: "EMT-166",
        title: "PVC COUPLING 32MM",
      },
      {
        id: 167,
        code: "EMT-167",
        title: "PVC COUPLING 50MM",
      },
      {
        id: 172,
        code: "EMT-172",
        title: "PVC COUPLING 20 MM WHITE",
      },
      {
        id: 173,
        code: "EMT-173",
        title: "PVC COUPLING 25 MM WHITE",
      },
    ],
  },
  {
    id: "pvc-bend",
    slug: "pvc-bend",
    title: "PVC Bend",
    category: "PVC Bend",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-174.png",
    description: "PVC Bend for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 174,
        code: "EMT-174",
        title: "PVC LONG BEND 20 MM BLACK",
      },
      {
        id: 175,
        code: "EMT-175",
        title: "PVC BEND 25 MM BLACK",
      },
      {
        id: 176,
        code: "EMT-176",
        title: "PVC BEND 32 MM BLACK",
      },
      {
        id: 177,
        code: "EMT-177",
        title: "PVC BEND 50 MM BLACK",
      },
    ],
  },
  {
    id: "pvc-saddle",
    slug: "pvc-saddle",
    title: "PVC Saddle",
    category: "PVC Saddle",
    mainCategory: "Support Systems",
    image: "/images/products/product-178.png",
    description: "High quality PVC SADLLE WITH BASE 25 MM BLACK for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 178,
        code: "EMT-178",
        title: "PVC SADLLE WITH BASE 25 MM BLACK",
      },
    ],
  },
  {
    id: "sub-duct-coupling",
    slug: "sub-duct-coupling",
    title: "Sub Duct Coupling",
    category: "Sub Duct Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-179.png",
    description: "High quality SUB DUCT COUPLING 32 MM FOR FR3 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 179,
        code: "EMT-179",
        title: "SUB DUCT COUPLING 32 MM FOR FR3",
      },
    ],
  },
  {
    id: "hole-closer",
    slug: "hole-closer",
    title: "Hole Closer",
    category: "Hole Closer",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-182.png",
    description: "Hole Closer for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 182,
        code: "EMT-182",
        title: "HOLE CLOSER 1/2''",
      },
      {
        id: 183,
        code: "EMT-183",
        title: "HOLE CLOSER 3/4''",
      },
      {
        id: 184,
        code: "EMT-184",
        title: "HOLE CLOSER 1''",
      },
    ],
  },
  {
    id: "flexible-connector",
    slug: "flexible-connector",
    title: "Flexible Connector",
    category: "Flexible Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-185.png",
    description: "Flexible Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 9,
    variants: [
      {
        id: 185,
        code: "EMT-185",
        title: "STEEL FLEXIBLE ANGLE CONNECTOR 1/2''",
      },
      {
        id: 186,
        code: "EMT-186",
        title: "STEEL FLEXIBLE ANGLE CONNECTOR 3/4''",
      },
      {
        id: 355,
        code: "EMT-355",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1/2''",
      },
      {
        id: 356,
        code: "EMT-356",
        title: "EMT STEEL FLEXIBLE CONNECTOR 3/4''",
      },
      {
        id: 357,
        code: "EMT-357",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1''",
      },
      {
        id: 358,
        code: "EMT-358",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1-1/2''",
      },
      {
        id: 359,
        code: "EMT-359",
        title: "EMT STEEL FLEXIBLE CONNECTOR 2''",
      },
      {
        id: 360,
        code: "EMT-360",
        title: "EMT STEEL FLEXIBLE CONNECTOR 1/2'' UL ITCC QUALITY",
      },
      {
        id: 361,
        code: "EMT-361",
        title: "EMT STEEL FLEXIBLE CONNECTOR 3/4'' UL ITCC QUALITY",
      },
    ],
  },
  {
    id: "compression-connector",
    slug: "compression-connector",
    title: "Compression Connector",
    category: "Compression Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-193.png",
    description: "Compression Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 193,
        code: "EMT-193",
        title: "EMT COMPRESSION CONNECTOR 3/4''",
      },
      {
        id: 194,
        code: "EMT-194",
        title: "EMT COMPRESSION CONNECTOR 1''",
      },
      {
        id: 195,
        code: "EMT-195",
        title: "EMT COMPRESSION CONNECTOR 2''",
      },
    ],
  },
  {
    id: "compression-coupling",
    slug: "compression-coupling",
    title: "Compression Coupling",
    category: "Compression Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-196.png",
    description: "Compression Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 196,
        code: "EMT-196",
        title: "EMT COMPRESSION COUPLING 3/4''",
      },
      {
        id: 197,
        code: "EMT-197",
        title: "EMT COMPRESSION COUPLING 1''",
      },
      {
        id: 198,
        code: "EMT-198",
        title: "EMT COMPRESSION COUPLING 2''",
      },
    ],
  },
  {
    id: "enlarger",
    slug: "enlarger",
    title: "Enlarger",
    category: "Enlarger",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-199.png",
    description: "Enlarger for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 199,
        code: "EMT-199",
        title: "ENLARGER 1/2'' - 3/4''",
      },
      {
        id: 200,
        code: "EMT-200",
        title: "ENLARGER 1/2'' - 1''",
      },
      {
        id: 201,
        code: "EMT-201",
        title: "ENLARGER 3/4'' - 1''",
      },
    ],
  },
  {
    id: "emt-cover",
    slug: "emt-cover",
    title: "EMT Cover",
    category: "EMT Cover",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-202.png",
    description: "EMT Cover for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 202,
        code: "EMT-202",
        title: "EMT COVER 10X10-3/4\" HOLE 1.6 MM ITCC QUALITY",
      },
      {
        id: 203,
        code: "EMT-203",
        title: "EMT COVER 10X10-3/4\" HOLE",
      },
      {
        id: 204,
        code: "EMT-204",
        title: "EMT COVER 9X9-3/4\" HOLE",
      },
      {
        id: 205,
        code: "EMT-205",
        title: "EMT COVER 7X7 - 1/2'' HOLE",
      },
      {
        id: 206,
        code: "EMT-206",
        title: "EMT COVER 7X7 - 3/4'' HOLE",
      },
    ],
  },
  {
    id: "plastic-gland",
    slug: "plastic-gland",
    title: "Plastic Gland",
    category: "Plastic Gland",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-207.png",
    description: "Plastic Gland for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 207,
        code: "EMT-207",
        title: "PLASTIC GLAND M16",
      },
      {
        id: 208,
        code: "EMT-208",
        title: "PLASTIC GLAND M20",
      },
      {
        id: 209,
        code: "EMT-209",
        title: "PLASTIC GLAND M25",
      },
      {
        id: 210,
        code: "EMT-210",
        title: "PLASTIC GLAND M32",
      },
    ],
  },
  {
    id: "insulator",
    slug: "insulator",
    title: "Insulator",
    category: "Insulator",
    mainCategory: "Grounding",
    image: "/images/products/product-211.png",
    description: "Insulator for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 211,
        code: "EMT-211",
        title: "INSULATOR 25MM",
      },
      {
        id: 212,
        code: "EMT-212",
        title: "INSULATOR 35MM",
      },
      {
        id: 213,
        code: "EMT-213",
        title: "INSULATOR 51MM",
      },
    ],
  },
  {
    id: "steel-cable-tie",
    slug: "steel-cable-tie",
    title: "Steel Cable Tie",
    category: "Steel Cable Tie",
    mainCategory: "Cable Management",
    image: "/images/products/product-214.png",
    description: "Steel Cable Tie for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 7,
    variants: [
      {
        id: 214,
        code: "EMT-214",
        title: "STEEL CABLE TIE 150MM",
      },
      {
        id: 215,
        code: "EMT-215",
        title: "STEEL CABLE TIE 200MM",
      },
      {
        id: 216,
        code: "EMT-216",
        title: "STEEL CABLE TIE 300MM",
      },
      {
        id: 217,
        code: "EMT-217",
        title: "STEEL CABLE TIE 500MM",
      },
      {
        id: 218,
        code: "EMT-218",
        title: "STEEL CABLE PVC COATED PSSCT 150X4.6 MM",
      },
      {
        id: 219,
        code: "EMT-219",
        title: "STEEL CABLE PVC COATED PSSCT 200X4.6 MM",
      },
      {
        id: 220,
        code: "EMT-220",
        title: "STEEL CABLE PVC COATED PSSCT 300X4.6 MM",
      },
    ],
  },
  {
    id: "cable-marker",
    slug: "cable-marker",
    title: "Cable Marker",
    category: "Cable Marker",
    mainCategory: "Cable Management",
    image: "/images/products/product-221.png",
    description: "Cable Marker for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 12,
    variants: [
      {
        id: 221,
        code: "EMT-221",
        title: "CABLE MARKER MS-65 MM BLACK",
      },
      {
        id: 222,
        code: "EMT-222",
        title: "CABLE MARKER MS-100 MM BLACK",
      },
      {
        id: 223,
        code: "EMT-223",
        title: "CABLE MARKER MS-65 MM WHITE",
      },
      {
        id: 224,
        code: "EMT-224",
        title: "CABLE MARKER MS-100 MM WHITE",
      },
      {
        id: 253,
        code: "EMT-253",
        title: "CABLE MARKER ECA-0 MIX (0-9)",
      },
      {
        id: 254,
        code: "EMT-254",
        title: "CABLE MARKER ECA-1 MIX (0-9)",
      },
      {
        id: 255,
        code: "EMT-255",
        title: "CABLE MARKER ECA-2 MIX (0-9)",
      },
      {
        id: 256,
        code: "EMT-256",
        title: "CABLE MARKER ECA-3 MIX (0-9)",
      },
      {
        id: 257,
        code: "EMT-257",
        title: "CABLE MARKER ECA-0 MIX (A-Z)",
      },
      {
        id: 258,
        code: "EMT-258",
        title: "CABLE MARKER ECA-1 MIX (A-Z)",
      },
      {
        id: 259,
        code: "EMT-259",
        title: "CABLE MARKER ECA-2 MIX (A-Z)",
      },
      {
        id: 260,
        code: "EMT-260",
        title: "CABLE MARKER ECA-3 MIX (A-Z)",
      },
    ],
  },
  {
    id: "tie-mount",
    slug: "tie-mount",
    title: "Tie Mount",
    category: "Tie Mount",
    mainCategory: "Cable Management",
    image: "/images/products/product-225.png",
    description: "Tie Mount for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 225,
        code: "EMT-225",
        title: "TIE MOUNT TM-25 MM",
      },
      {
        id: 226,
        code: "EMT-226",
        title: "TIE MOUNT TM-30 MM",
      },
      {
        id: 546,
        code: "EMT-546",
        title: "CAT - 6 CABLE BELDEN COPY 9565",
      },
      {
        id: 547,
        code: "EMT-547",
        title: "FIRE ALARM CABLE 16 AWG",
      },
    ],
  },
  {
    id: "plastic-connector",
    slug: "plastic-connector",
    title: "Plastic Connector",
    category: "Plastic Connector",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-227.png",
    description: "Plastic Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 227,
        code: "EMT-227",
        title: "PLASTIC CONNECTOR PC-10 MM",
      },
      {
        id: 228,
        code: "EMT-228",
        title: "PLASTIC CONNECTOR PC-16 MM",
      },
      {
        id: 229,
        code: "EMT-229",
        title: "PLASTIC CONNECTOR PC-25 MM",
      },
    ],
  },
  {
    id: "plastic-strip-connector",
    slug: "plastic-strip-connector",
    title: "Plastic Strip Connector",
    category: "Plastic Strip Connector",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-230.png",
    description: "Plastic Strip Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 230,
        code: "EMT-230",
        title: "H type PLASTIC STRIP CONNECTOR 6MM WHITE HIGH QUALITY",
      },
      {
        id: 231,
        code: "EMT-231",
        title: "H type PLASTIC STRIP CONNECTOR 10MM WHITE HIGH QUALITY",
      },
      {
        id: 232,
        code: "EMT-232",
        title: "H type PLASTIC STRIP CONNECTOR 16MM WHITE HIGH QUALITY",
      },
      {
        id: 233,
        code: "EMT-233",
        title: "H type PLASTIC STRIP CONNECTOR 25MM WHITE HIGH QUALITY",
      },
      {
        id: 234,
        code: "EMT-234",
        title: "H type PLASTIC STRIP CONNECTOR 40MM BLACK",
      },
      {
        id: 235,
        code: "EMT-235",
        title: "H type PLASTIC STRIP CONNECTOR 40MM BLACK HIGH QUALITY",
      },
    ],
  },
  {
    id: "group-holder",
    slug: "group-holder",
    title: "Group Holder",
    category: "Group Holder",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-236.png",
    description: "Group Holder for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 236,
        code: "EMT-236",
        title: "GROUP HOLDER UBE/D",
      },
      {
        id: 237,
        code: "EMT-237",
        title: "GROUP HOLDER UBE/D N",
      },
    ],
  },
  {
    id: "end-stopper",
    slug: "end-stopper",
    title: "End Stopper",
    category: "End Stopper",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-238.png",
    description: "High quality END STOPPER E/JUK for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 238,
        code: "EMT-238",
        title: "END STOPPER E/JUK",
      },
    ],
  },
  {
    id: "jumber-link",
    slug: "jumber-link",
    title: "Jumber Link",
    category: "Jumber Link",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-239.png",
    description: "Jumber Link for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 239,
        code: "EMT-239",
        title: "JUMBER LINK FLAT TYPE EB10-6",
      },
      {
        id: 240,
        code: "EMT-240",
        title: "JUMBER LINK FLAT TYPE FBS 10- 6",
      },
    ],
  },
  {
    id: "wire-connector",
    slug: "wire-connector",
    title: "Wire Connector",
    category: "Wire Connector",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-241.png",
    description: "Wire Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 241,
        code: "EMT-241",
        title: "WIRE CONNECTOR N102 (100PCS)",
      },
      {
        id: 242,
        code: "EMT-242",
        title: "WIRE CONNECTOR N103 (100PCS)",
      },
      {
        id: 243,
        code: "EMT-243",
        title: "WIRE CONNECTOR N104 (100PCS)",
      },
      {
        id: 244,
        code: "EMT-244",
        title: "WIRE CONNECTOR N102-2 (100PCS)",
      },
      {
        id: 245,
        code: "EMT-245",
        title: "WIRE CONNECTOR N103-2 (100PCS)",
      },
      {
        id: 246,
        code: "EMT-246",
        title: "WIRE CONNECTOR N103-3 (100PCS)",
      },
    ],
  },
  {
    id: "wire-nut",
    slug: "wire-nut",
    title: "Wire Nut",
    category: "Wire Nut",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-247.png",
    description: "Wire Nut for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 247,
        code: "EMT-247",
        title: "WIRE NUT 6.7 MM GREY S-P1 [Bag 100pcs]",
      },
      {
        id: 248,
        code: "EMT-248",
        title: "WIRE NUT 7.4 MM BLUE S-P2 [Bag 100pcs]",
      },
      {
        id: 249,
        code: "EMT-249",
        title: "WIRE NUT 9.9 MM ORANGE S-P3 [Bag 100pcs]",
      },
      {
        id: 250,
        code: "EMT-250",
        title: "WIRE NUT 11 MM YELLOW S-P4 [Bag 100pcs]",
      },
      {
        id: 251,
        code: "EMT-251",
        title: "WIRE NUT 10.5 MM GREY S-P15 [Bag 100pcs]",
      },
      {
        id: 252,
        code: "EMT-252",
        title: "WIRE NUT 12.8 MM BLUE S-P17 [Bag 100pcs]",
      },
    ],
  },
  {
    id: "spiral",
    slug: "spiral",
    title: "Spiral",
    category: "Spiral",
    mainCategory: "Cable Management",
    image: "/images/products/product-261.png",
    description: "Spiral for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 8,
    variants: [
      {
        id: 261,
        code: "EMT-261",
        title: "SPIRAL - 3MM",
      },
      {
        id: 262,
        code: "EMT-262",
        title: "SPIRAL - 6MM",
      },
      {
        id: 263,
        code: "EMT-263",
        title: "SPIRAL - 8MM",
      },
      {
        id: 264,
        code: "EMT-264",
        title: "SPIRAL - 10MM",
      },
      {
        id: 265,
        code: "EMT-265",
        title: "SPIRAL - 12MM",
      },
      {
        id: 266,
        code: "EMT-266",
        title: "SPIRAL - 15MM",
      },
      {
        id: 267,
        code: "EMT-267",
        title: "SPIRAL - 19MM",
      },
      {
        id: 268,
        code: "EMT-268",
        title: "SPIRAL - 24MM",
      },
    ],
  },
  {
    id: "crimping-tool",
    slug: "crimping-tool",
    title: "Crimping Tool",
    category: "Crimping Tool",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-269.png",
    description: "Crimping Tool for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 10,
    variants: [
      {
        id: 269,
        code: "EMT-269",
        title: "TERMINAL LUGS CRIMPER 1.5MM - 6MM TH-03C",
      },
      {
        id: 270,
        code: "EMT-270",
        title: "TERMINAL LUGS CRIMPER 0.25MM - 6MM THC8 6-6",
      },
      {
        id: 271,
        code: "EMT-271",
        title: "TERMINAL LUGS CRIMPER 0.25MM - 10MM THC8 6-4",
      },
      {
        id: 272,
        code: "EMT-272",
        title: "BOOT LUGS CRIMPING TOOLS HSC8 6-6",
      },
      {
        id: 273,
        code: "EMT-273",
        title: "BOOT LUGS CRIMPING TOOLS WMC10 16-6",
      },
      {
        id: 274,
        code: "EMT-274",
        title: "BOOT LUGS CRIMPING TOOLS VSC9 10-6A HIGH QUALITY",
      },
      {
        id: 275,
        code: "EMT-275",
        title: "TERMINAL LUGS CRIMPING TOOLS HS-30J",
      },
      {
        id: 276,
        code: "EMT-276",
        title: "CABLE LUGS CRIMPING TOOLS (10-50MM) HX-50B",
      },
      {
        id: 277,
        code: "EMT-277",
        title: "CABLE LUGS CRIMPING TOOLS (10-120MM) HX-120B",
      },
      {
        id: 279,
        code: "EMT-279",
        title: "CAT-6 CABLE CRIMPING TOOL RJ-45",
      },
    ],
  },
  {
    id: "wire-stripper",
    slug: "wire-stripper",
    title: "Wire Stripper",
    category: "Wire Stripper",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-278.png",
    description: "High quality WIRE STRIPPER HS-D2 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 278,
        code: "EMT-278",
        title: "WIRE STRIPPER HS-D2",
      },
    ],
  },
  {
    id: "hydraulic-crimping-tool",
    slug: "hydraulic-crimping-tool",
    title: "Hydraulic Crimping Tool",
    category: "Hydraulic Crimping Tool",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-280.png",
    description: "High quality HYDRUALIC CRIMPING TOOLS 10-300 MM YQK-300 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 280,
        code: "EMT-280",
        title: "HYDRUALIC CRIMPING TOOLS 10-300 MM YQK-300",
      },
    ],
  },
  {
    id: "floor-box",
    slug: "floor-box",
    title: "Floor Box",
    category: "Floor Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-281.png",
    description: "Floor Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 281,
        code: "EMT-281",
        title: "STEEL FLOOR BOX 2 SOCKET ONE FOR ELECTRIC ONE FOR DATA",
      },
      {
        id: 282,
        code: "EMT-282",
        title: "STEEL FLOOR BOX 4 SOCKET TWO FOR ELECTRIC TWO FOR DATA",
      },
    ],
  },
  {
    id: "din-rail",
    slug: "din-rail",
    title: "DIN Rail",
    category: "DIN Rail",
    mainCategory: "Support Systems",
    image: "/images/products/product-283.png",
    description: "DIN Rail for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 283,
        code: "EMT-283",
        title: "DIN RAIL 0.8 MM",
      },
      {
        id: 284,
        code: "EMT-284",
        title: "DIN RAIL 1.0 MM",
      },
      {
        id: 628,
        code: "EMT-628",
        title: "WATERPROOF STEEL ENCLOUSER BOX 30X25X15 CM",
      },
    ],
  },
  {
    id: "shrink-tube",
    slug: "shrink-tube",
    title: "Shrink Tube",
    category: "Shrink Tube",
    mainCategory: "Cable Management",
    image: "/images/products/product-285.png",
    description: "Shrink Tube for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 21,
    variants: [
      {
        id: 285,
        code: "EMT-285",
        title: "SHRINK TUBE 4.5 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 286,
        code: "EMT-286",
        title: "SHRINK TUBE 6 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 287,
        code: "EMT-287",
        title: "SHRINK TUBE 10 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 288,
        code: "EMT-288",
        title: "SHRINK TUBE 12 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 289,
        code: "EMT-289",
        title: "SHRINK TUBE 16 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 290,
        code: "EMT-290",
        title: "SHRINK TUBE 20 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 291,
        code: "EMT-291",
        title: "SHRINK TUBE 25 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 292,
        code: "EMT-292",
        title: "SHRINK TUBE 30 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 293,
        code: "EMT-293",
        title: "SHRINK TUBE 40 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 294,
        code: "EMT-294",
        title: "SHRINK TUBE 50 MM - 25 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 295,
        code: "EMT-295",
        title: "SHRINK TUBE 70 MM - 25 MTR/ROLL (RD/BLK/BL/YLW)",
      },
      {
        id: 296,
        code: "EMT-296",
        title: "SHRINK TUBE 4.5 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 297,
        code: "EMT-297",
        title: "SHRINK TUBE 6 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 298,
        code: "EMT-298",
        title: "SHRINK TUBE 10 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 299,
        code: "EMT-299",
        title: "SHRINK TUBE 12 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 300,
        code: "EMT-300",
        title: "SHRINK TUBE 16 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 301,
        code: "EMT-301",
        title: "SHRINK TUBE 20 MM - 100 MTR/ROLL Y/G",
      },
      {
        id: 302,
        code: "EMT-302",
        title: "SHRINK TUBE 25 MM - 50 MTR/ROLL Y/G",
      },
      {
        id: 303,
        code: "EMT-303",
        title: "SHRINK TUBE 30 MM - 50 MTR/ROLL Y/G",
      },
      {
        id: 304,
        code: "EMT-304",
        title: "SHRINK TUBE 40 MM - 50 MTR/ROLL Y/G",
      },
      {
        id: 305,
        code: "EMT-305",
        title: "SHRINK TUBE 50 MM - 25 MTR/ROLL Y/G",
      },
    ],
  },
  {
    id: "marking-tube",
    slug: "marking-tube",
    title: "Marking Tube",
    category: "Marking Tube",
    mainCategory: "Cable Management",
    image: "/images/products/product-306.png",
    description: "Marking Tube for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 15,
    variants: [
      {
        id: 306,
        code: "EMT-306",
        title: "FERROLING MARKING TUBE 3.5 MM WHITE 200 MTR",
      },
      {
        id: 307,
        code: "EMT-307",
        title: "FERROLING MARKING TUBE 3.5 MM RED 200 MTR",
      },
      {
        id: 308,
        code: "EMT-308",
        title: "FERROLING MARKING TUBE 3.5 MM YELLOW 200 MTR",
      },
      {
        id: 309,
        code: "EMT-309",
        title: "FERROLING MARKING TUBE 4 MM WHITE 200 MTR",
      },
      {
        id: 310,
        code: "EMT-310",
        title: "FERROLING MARKING TUBE 4 MM RED 200 MTR",
      },
      {
        id: 311,
        code: "EMT-311",
        title: "FERROLING MARKING TUBE 4 MM YELLOW 200 MTR",
      },
      {
        id: 312,
        code: "EMT-312",
        title: "FERROLING MARKING TUBE 4.5 MM WHITE 200 MTR",
      },
      {
        id: 313,
        code: "EMT-313",
        title: "FERROLING MARKING TUBE 4.5 MM RED 200 MTR",
      },
      {
        id: 314,
        code: "EMT-314",
        title: "FERROLING MARKING TUBE 4.5 MM YELLOW 200 MTR",
      },
      {
        id: 315,
        code: "EMT-315",
        title: "FERROLING MARKING TUBE 5.5 MM WHITE 100 MTR",
      },
      {
        id: 316,
        code: "EMT-316",
        title: "FERROLING MARKING TUBE 5.5 MM RED 100 MTR",
      },
      {
        id: 317,
        code: "EMT-317",
        title: "FERROLING MARKING TUBE 5.5 MM YELLOW 100 MTR",
      },
      {
        id: 318,
        code: "EMT-318",
        title: "FERROLING MARKING TUBE 6.2 MM WHITE 100 MTR",
      },
      {
        id: 319,
        code: "EMT-319",
        title: "FERROLING MARKING TUBE 6.2 MM RED 100 MTR",
      },
      {
        id: 320,
        code: "EMT-320",
        title: "FERROLING MARKING TUBE 6.2 MM YELLOW 100 MTR",
      },
    ],
  },
  {
    id: "earth-rod",
    slug: "earth-rod",
    title: "Earth Rod",
    category: "Earth Rod",
    mainCategory: "Grounding",
    image: "/images/products/product-321.png",
    description: "Earth Rod for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 321,
        code: "EMT-321",
        title: "EARTH ROD 16MM X 1.2 MTR",
      },
      {
        id: 322,
        code: "EMT-322",
        title: "EARTH ROD 16MM X 1.5 MTR",
      },
      {
        id: 323,
        code: "EMT-323",
        title: "EARTH ROD 19MM X 1.5 MTR",
      },
      {
        id: 324,
        code: "EMT-324",
        title: "EARTH ROD 19MM X 3 MTR",
      },
    ],
  },
  {
    id: "u-bolt-clamp",
    slug: "u-bolt-clamp",
    title: "U Bolt Clamp",
    category: "U Bolt Clamp",
    mainCategory: "Support Systems",
    image: "/images/products/product-325.png",
    description: "High quality U BOLT CLAMP CR-705 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 325,
        code: "EMT-325",
        title: "U BOLT CLAMP CR-705",
      },
    ],
  },
  {
    id: "copper-clamp",
    slug: "copper-clamp",
    title: "Copper Clamp",
    category: "Copper Clamp",
    mainCategory: "Grounding",
    image: "/images/products/product-326.png",
    description: "Copper Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 326,
        code: "EMT-326",
        title: "COPPER CLAMP ONE HOLE CLIP 35 MM",
      },
      {
        id: 327,
        code: "EMT-327",
        title: "COPPER CLAMP ONE HOLE CLIP 50 MM",
      },
      {
        id: 328,
        code: "EMT-328",
        title: "COPPER CLAMP ONE HOLE CLIP 70 MM",
      },
      {
        id: 329,
        code: "EMT-329",
        title: "COPPER CLAMP ONE HOLE CLIP 120 MM",
      },
    ],
  },
  {
    id: "earth-plate",
    slug: "earth-plate",
    title: "Earth Plate",
    category: "Earth Plate",
    mainCategory: "Grounding",
    image: "/images/products/product-330.png",
    description: "High quality COPPER BONDED EARTH PLATE 50X50X3 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 330,
        code: "EMT-330",
        title: "COPPER BONDED EARTH PLATE 50X50X3",
      },
    ],
  },
  {
    id: "earth-rod-clamp",
    slug: "earth-rod-clamp",
    title: "Earth Rod Clamp",
    category: "Earth Rod Clamp",
    mainCategory: "Grounding",
    image: "/images/products/product-331.png",
    description: "Earth Rod Clamp for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 331,
        code: "EMT-331",
        title: "EARTH ROD CLAMP O TYPE 5/8'' - 16MM",
      },
      {
        id: 332,
        code: "EMT-332",
        title: "EARTH ROD CLAMP G TYPE 5/8'' - 16MM",
      },
      {
        id: 333,
        code: "EMT-333",
        title: "EARTH ROD CLAMP G TYPE 3/4'' - 19MM",
      },
    ],
  },
  {
    id: "brass-base",
    slug: "brass-base",
    title: "Brass Base",
    category: "Brass Base",
    mainCategory: "Grounding",
    image: "/images/products/product-334.png",
    description: "Brass Base for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 334,
        code: "EMT-334",
        title: "BRASS AIR BASE ROUND WITH COPPER PLATING 5/8\" SD-105",
      },
      {
        id: 335,
        code: "EMT-335",
        title: "BRASS MULTI POINT ROUND WITH COPPER PLATING 5/8\" RS-600 INDIA",
      },
    ],
  },
  {
    id: "neutral-link",
    slug: "neutral-link",
    title: "Neutral Link",
    category: "Neutral Link",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-336.png",
    description: "High quality NEUTRAL LINK 6 MM (SMALL SIZE) for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 336,
        code: "EMT-336",
        title: "NEUTRAL LINK 6 MM (SMALL SIZE)",
      },
    ],
  },
  {
    id: "emt-connector",
    slug: "emt-connector",
    title: "EMT Connector",
    category: "EMT Connector",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-337.png",
    description: "EMT Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 9,
    variants: [
      {
        id: 337,
        code: "EMT-337",
        title: "EMT CONNECTOR W/UL MARK 1/2'' UL",
      },
      {
        id: 338,
        code: "EMT-338",
        title: "EMT CONNECTOR W/UL MARK 1/2'' CH",
      },
      {
        id: 339,
        code: "EMT-339",
        title: "EMT CONNECTOR W/UL MARK 3/4'' UL",
      },
      {
        id: 340,
        code: "EMT-340",
        title: "EMT CONNECTOR W/UL MARK 3/4'' CH",
      },
      {
        id: 341,
        code: "EMT-341",
        title: "EMT CONNECTOR W/UL MARK 1''",
      },
      {
        id: 342,
        code: "EMT-342",
        title: "EMT CONNECTOR W/UL MARK 1-1/4''",
      },
      {
        id: 343,
        code: "EMT-343",
        title: "EMT CONNECTOR W/UL MARK 2''",
      },
      {
        id: 344,
        code: "EMT-344",
        title: "EMT CONNECTOR W/UL MARK 2-1/2''",
      },
      {
        id: 345,
        code: "EMT-345",
        title: "EMT CONNECTOR W/UL MARK 3''",
      },
    ],
  },
  {
    id: "emt-coupling",
    slug: "emt-coupling",
    title: "EMT Coupling",
    category: "EMT Coupling",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-346.png",
    description: "EMT Coupling for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 9,
    variants: [
      {
        id: 346,
        code: "EMT-346",
        title: "EMT COUPLING W/UL MARK 1/2'' UL",
      },
      {
        id: 347,
        code: "EMT-347",
        title: "EMT COUPLING W/UL MARK 1/2'' CH",
      },
      {
        id: 348,
        code: "EMT-348",
        title: "EMT COUPLING W/UL MARK 3/4'' UL",
      },
      {
        id: 349,
        code: "EMT-349",
        title: "EMT COUPLING W/UL MARK 3/4'' CH",
      },
      {
        id: 350,
        code: "EMT-350",
        title: "EMT COUPLING W/UL MARK 1''",
      },
      {
        id: 351,
        code: "EMT-351",
        title: "EMT COUPLING W/UL MARK 1-1/2''",
      },
      {
        id: 352,
        code: "EMT-352",
        title: "EMT COUPLING W/UL MARK 2''",
      },
      {
        id: 353,
        code: "EMT-353",
        title: "EMT COUPLING W/UL MARK 2-1/2''",
      },
      {
        id: 354,
        code: "EMT-354",
        title: "EMT COUPLING W/UL MARK 3''",
      },
    ],
  },
  {
    id: "zinc-locknut",
    slug: "zinc-locknut",
    title: "Zinc Locknut",
    category: "Zinc Locknut",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-362.png",
    description: "Zinc Locknut for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 362,
        code: "EMT-362",
        title: "ZINC LOCKNUT 1/2''",
      },
      {
        id: 363,
        code: "EMT-363",
        title: "ZINC LOCKNUT 3/4''",
      },
      {
        id: 364,
        code: "EMT-364",
        title: "ZINC LOCKNUT 1''",
      },
      {
        id: 365,
        code: "EMT-365",
        title: "ZINC LOCKNUT 2''",
      },
    ],
  },
  {
    id: "chase-nipple",
    slug: "chase-nipple",
    title: "Chase Nipple",
    category: "Chase Nipple",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-366.png",
    description: "Chase Nipple for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 366,
        code: "EMT-366",
        title: "CHASE NIPPLE 3/4\" ZINC DIE CAST",
      },
      {
        id: 367,
        code: "EMT-367",
        title: "CHASE NIPPLE 1\" ZINC DIE CAST",
      },
    ],
  },
  {
    id: "mcb-breaker-box",
    slug: "mcb-breaker-box",
    title: "MCB Breaker Box",
    category: "MCB Breaker Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-368.png",
    description: "MCB Breaker Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 368,
        code: "EMT-368",
        title: "PVC MCB BREAKER BOX 5 WAY HT-2",
      },
      {
        id: 369,
        code: "EMT-369",
        title: "PVC MCB BREAKER BOX 5 WAY HT-5",
      },
      {
        id: 370,
        code: "EMT-370",
        title: "PVC MCB BREAKER BOX 8 WAY HT-8",
      },
      {
        id: 371,
        code: "EMT-371",
        title: "PVC MCB BREAKER BOX 12 WAY HT-12",
      },
    ],
  },
  {
    id: "angle-bracket",
    slug: "angle-bracket",
    title: "Angle Bracket",
    category: "Angle Bracket",
    mainCategory: "Support Systems",
    image: "/images/products/product-372.png",
    description: "Angle Bracket for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 372,
        code: "EMT-372",
        title: "ANGLE L TYPE 2 HOLE",
      },
      {
        id: 373,
        code: "EMT-373",
        title: "ANGLE L TYPE 4 HOLE",
      },
    ],
  },
  {
    id: "base-plate",
    slug: "base-plate",
    title: "Base Plate",
    category: "Base Plate",
    mainCategory: "Support Systems",
    image: "/images/products/product-374.png",
    description: "Base Plate for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 374,
        code: "EMT-374",
        title: "BASE PLATE 15X15 CM",
      },
      {
        id: 375,
        code: "EMT-375",
        title: "BASE PLATE 8X15 CM",
      },
    ],
  },
  {
    id: "cable-lugs",
    slug: "cable-lugs",
    title: "Cable Lugs",
    category: "Cable Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-376.png",
    description: "Cable Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 50,
    variants: [
      {
        id: 376,
        code: "EMT-376",
        title: "CABLE LUGS 6-6",
      },
      {
        id: 377,
        code: "EMT-377",
        title: "CABLE LUGS 6-8",
      },
      {
        id: 378,
        code: "EMT-378",
        title: "CABLE LUGS 6-10",
      },
      {
        id: 379,
        code: "EMT-379",
        title: "CABLE LUGS 10-6",
      },
      {
        id: 380,
        code: "EMT-380",
        title: "CABLE LUGS 10-8",
      },
      {
        id: 381,
        code: "EMT-381",
        title: "CABLE LUGS 10-10",
      },
      {
        id: 382,
        code: "EMT-382",
        title: "CABLE LUGS 16-8",
      },
      {
        id: 383,
        code: "EMT-383",
        title: "CABLE LUGS 16-10",
      },
      {
        id: 384,
        code: "EMT-384",
        title: "CABLE LUGS 16-12",
      },
      {
        id: 385,
        code: "EMT-385",
        title: "CABLE LUGS 25-8",
      },
      {
        id: 386,
        code: "EMT-386",
        title: "CABLE LUGS 25-10",
      },
      {
        id: 387,
        code: "EMT-387",
        title: "CABLE LUGS 25-12",
      },
      {
        id: 388,
        code: "EMT-388",
        title: "CABLE LUGS 35-8 (ECONOMIC)",
      },
      {
        id: 389,
        code: "EMT-389",
        title: "CABLE LUGS 35-10 (ECONOMIC)",
      },
      {
        id: 390,
        code: "EMT-390",
        title: "CABLE LUGS 35-12 (ECONOMIC)",
      },
      {
        id: 391,
        code: "EMT-391",
        title: "CABLE LUGS 50-8 (ECONOMIC)",
      },
      {
        id: 392,
        code: "EMT-392",
        title: "CABLE LUGS 50-10 (ECONOMIC)",
      },
      {
        id: 393,
        code: "EMT-393",
        title: "CABLE LUGS 50-12 (ECONOMIC)",
      },
      {
        id: 394,
        code: "EMT-394",
        title: "CABLE LUGS 70-8 (ECONOMIC)",
      },
      {
        id: 395,
        code: "EMT-395",
        title: "CABLE LUGS 70-10 (ECONOMIC)",
      },
      {
        id: 396,
        code: "EMT-396",
        title: "CABLE LUGS 70-12 (ECONOMIC)",
      },
      {
        id: 397,
        code: "EMT-397",
        title: "CABLE LUGS 95-8 (ECONOMIC)",
      },
      {
        id: 398,
        code: "EMT-398",
        title: "CABLE LUGS 95-10 (ECONOMIC)",
      },
      {
        id: 399,
        code: "EMT-399",
        title: "CABLE LUGS 95-12 (ECONOMIC)",
      },
      {
        id: 400,
        code: "EMT-400",
        title: "CABLE LUGS 120-8 (ECONOMIC)",
      },
      {
        id: 401,
        code: "EMT-401",
        title: "CABLE LUGS 120-10 (ECONOMIC)",
      },
      {
        id: 402,
        code: "EMT-402",
        title: "CABLE LUGS 120-12 (ECONOMIC)",
      },
      {
        id: 403,
        code: "EMT-403",
        title: "CABLE LUGS 150-10 (ECONOMIC)",
      },
      {
        id: 404,
        code: "EMT-404",
        title: "CABLE LUGS 150-12 (ECONOMIC)",
      },
      {
        id: 405,
        code: "EMT-405",
        title: "CABLE LUGS 185-10 (ECONOMIC)",
      },
      {
        id: 406,
        code: "EMT-406",
        title: "CABLE LUGS 185-12 (ECONOMIC)",
      },
      {
        id: 407,
        code: "EMT-407",
        title: "CABLE LUGS 240-10 (ECONOMIC)",
      },
      {
        id: 408,
        code: "EMT-408",
        title: "CABLE LUGS 240-12 (ECONOMIC)",
      },
      {
        id: 409,
        code: "EMT-409",
        title: "CABLE LUGS 240-14 (ECONOMIC)",
      },
      {
        id: 410,
        code: "EMT-410",
        title: "CABLE LUGS 240-16 (ECONOMIC)",
      },
      {
        id: 411,
        code: "EMT-411",
        title: "CABLE LUGS 300-10 (ECONOMIC)",
      },
      {
        id: 412,
        code: "EMT-412",
        title: "CABLE LUGS 300-12 (ECONOMIC)",
      },
      {
        id: 413,
        code: "EMT-413",
        title: "CABLE LUGS 300-14 (ECONOMIC)",
      },
      {
        id: 414,
        code: "EMT-414",
        title: "CABLE LUGS 300-16 (ECONOMIC)",
      },
      {
        id: 415,
        code: "EMT-415",
        title: "CABLE LUGS 630-12 (ECONOMIC)",
      },
      {
        id: 416,
        code: "EMT-416",
        title: "CABLE LUGS 630-14 (ECONOMIC)",
      },
      {
        id: 424,
        code: "EMT-424",
        title: "CABLE LUGS 240/12 (STANDARD)",
      },
      {
        id: 425,
        code: "EMT-425",
        title: "CABLE LUGS 300/12 (STANDARD)",
      },
      {
        id: 426,
        code: "EMT-426",
        title: "CABLE LUGS 16-10 MM 2 HOLE",
      },
      {
        id: 427,
        code: "EMT-427",
        title: "CABLE LUGS 25-10 MM 2 HOLE",
      },
      {
        id: 428,
        code: "EMT-428",
        title: "CABLE LUGS 35-10 MM 2 HOLE",
      },
      {
        id: 429,
        code: "EMT-429",
        title: "CABLE LUGS 50-10 MM 2 HOLE",
      },
      {
        id: 430,
        code: "EMT-430",
        title: "CABLE LUGS 70-10 MM 2 HOLE",
      },
      {
        id: 431,
        code: "EMT-431",
        title: "CABLE LUGS 95-10 MM 2 HOLE",
      },
      {
        id: 432,
        code: "EMT-432",
        title: "CABLE LUGS 120-12 MM 2 HOLE",
      },
    ],
  },
  {
    id: "pin-type-lugs",
    slug: "pin-type-lugs",
    title: "Pin Type Lugs",
    category: "Pin Type Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-417.png",
    description: "Pin Type Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 7,
    variants: [
      {
        id: 417,
        code: "EMT-417",
        title: "PIN TYPE LUGS 10 MM - FLAT TYPE",
      },
      {
        id: 418,
        code: "EMT-418",
        title: "PIN TYPE LUGS 16 MM - FLAT TYPE",
      },
      {
        id: 419,
        code: "EMT-419",
        title: "PIN TYPE LUGS 25 MM - FLAT TYPE",
      },
      {
        id: 420,
        code: "EMT-420",
        title: "PIN TYPE LUGS 35 MM - FLAT TYPE",
      },
      {
        id: 421,
        code: "EMT-421",
        title: "PIN TYPE LUGS 50 MM - FLAT TYPE",
      },
      {
        id: 422,
        code: "EMT-422",
        title: "PIN TYPE LUGS 70 MM - FLAT TYPE",
      },
      {
        id: 423,
        code: "EMT-423",
        title: "PIN TYPE LUGS 95 MM - FLAT TYPE",
      },
    ],
  },
  {
    id: "split-bolt",
    slug: "split-bolt",
    title: "Split Bolt",
    category: "Split Bolt",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-433.png",
    description: "Split Bolt for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 12,
    variants: [
      {
        id: 433,
        code: "EMT-433",
        title: "CABLE LUGS 150-12 MM 2 HOLE",
      },
      {
        id: 434,
        code: "EMT-434",
        title: "CABLE LUGS 185-12 MM 2 HOLE",
      },
      {
        id: 435,
        code: "EMT-435",
        title: "CABLE LUGS 240-12 MM 2 HOLE",
      },
      {
        id: 436,
        code: "EMT-436",
        title: "CABLE LUGS 300-12 MM 2 HOLE",
      },
      {
        id: 437,
        code: "EMT-437",
        title: "CABLE LUGS 240-12 MM 4 HOLE",
      },
      {
        id: 438,
        code: "EMT-438",
        title: "CABLE LUGS 300-12 MM 4 HOLE",
      },
      {
        id: 439,
        code: "EMT-439",
        title: "CABLE LUGS 400-14 MM 4 HOLE",
      },
      {
        id: 440,
        code: "EMT-440",
        title: "CABLE LUGS 500-14 MM 4 HOLE",
      },
      {
        id: 441,
        code: "EMT-441",
        title: "CABLE LUGS 630/14 MM 4 HOLE HOLE TO HOLE 45 MM NEMA PAD",
      },
      {
        id: 442,
        code: "EMT-442",
        title: "ALUMINIUM CABLE LUGS 70-12 MM TIN PLATING",
      },
      {
        id: 443,
        code: "EMT-443",
        title: "MCB BREAKER CABLE LUGS 35-6 MM",
      },
      {
        id: 444,
        code: "EMT-444",
        title: "MCB BREAKER CABLE LUGS 50-6 MM",
      },
    ],
  },
  {
    id: "aluminium-lugs",
    slug: "aluminium-lugs",
    title: "Aluminium Lugs",
    category: "Aluminium Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-445.png",
    description: "Aluminium Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 10,
    variants: [
      {
        id: 445,
        code: "EMT-445",
        title: "MCB BREAKER CABLE LUGS 50-8 MM",
      },
      {
        id: 446,
        code: "EMT-446",
        title: "MCB BREAKER CABLE LUGS 70-6 MM",
      },
      {
        id: 447,
        code: "EMT-447",
        title: "MCB BREAKER CABLE LUGS 70-8 MM",
      },
      {
        id: 448,
        code: "EMT-448",
        title: "MCB BREAKER CABLE LUGS 70-10 MM",
      },
      {
        id: 449,
        code: "EMT-449",
        title: "MCB BREAKER CABLE LUGS 95-8 MM",
      },
      {
        id: 450,
        code: "EMT-450",
        title: "MCB BREAKER CABLE LUGS 95-10 MM",
      },
      {
        id: 451,
        code: "EMT-451",
        title: "MCB BREAKER CABLE LUGS 120-8 MM",
      },
      {
        id: 452,
        code: "EMT-452",
        title: "MCB BREAKER CABLE LUGS 120-10 MM",
      },
      {
        id: 453,
        code: "EMT-453",
        title: "MCB BREAKER CABLE LUGS 185-10 MM",
      },
      {
        id: 454,
        code: "EMT-454",
        title: "MCB BREAKER CABLE LUGS 240-10 MM",
      },
    ],
  },
  {
    id: "bi-metal-lugs",
    slug: "bi-metal-lugs",
    title: "Bi Metal Lugs",
    category: "Bi Metal Lugs",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-455.png",
    description: "Bi Metal Lugs for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 10,
    variants: [
      {
        id: 455,
        code: "EMT-455",
        title: "MCB BREAKER CABLE LUGS 3000-10 MM",
      },
      {
        id: 456,
        code: "EMT-456",
        title: "BIMETALIC CABLE LUGS DTL-2-10-10",
      },
      {
        id: 457,
        code: "EMT-457",
        title: "BIMETALIC CABLE LUGS DTL-2-16-10",
      },
      {
        id: 458,
        code: "EMT-458",
        title: "BIMETALIC CABLE LUGS DTL-2-16-12",
      },
      {
        id: 459,
        code: "EMT-459",
        title: "BIMETALIC CABLE LUGS DTL-2-25-10",
      },
      {
        id: 460,
        code: "EMT-460",
        title: "BIMETALIC CABLE LUGS DTL-2-25-12",
      },
      {
        id: 461,
        code: "EMT-461",
        title: "BIMETALIC CABLE LUGS DTL-2-35-10",
      },
      {
        id: 462,
        code: "EMT-462",
        title: "BIMETALIC CABLE LUGS DTL-2-35-12",
      },
      {
        id: 463,
        code: "EMT-463",
        title: "BIMETALIC CABLE LUGS DTL-2-50-10",
      },
      {
        id: 464,
        code: "EMT-464",
        title: "BIMETALIC CABLE LUGS DTL-2-50-12",
      },
    ],
  },
  {
    id: "inline-connector",
    slug: "inline-connector",
    title: "Inline Connector",
    category: "Inline Connector",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-465.png",
    description: "Inline Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 20,
    variants: [
      {
        id: 465,
        code: "EMT-465",
        title: "BIMETALIC CABLE LUGS DTL-2-70-10",
      },
      {
        id: 466,
        code: "EMT-466",
        title: "BIMETALIC CABLE LUGS DTL-2-70-12",
      },
      {
        id: 467,
        code: "EMT-467",
        title: "BIMETALIC CABLE LUGS DTL-2-95-10",
      },
      {
        id: 468,
        code: "EMT-468",
        title: "BIMETALIC CABLE LUGS DTL-2-95-12",
      },
      {
        id: 469,
        code: "EMT-469",
        title: "BIMETALIC CABLE LUGS DTL-2-120-12",
      },
      {
        id: 470,
        code: "EMT-470",
        title: "BIMETALIC CABLE LUGS DTL-2-150-12",
      },
      {
        id: 471,
        code: "EMT-471",
        title: "BIMETALIC CABLE LUGS DTL-2-185-12",
      },
      {
        id: 472,
        code: "EMT-472",
        title: "BIMETALIC CABLE LUGS DTL-2-240-12",
      },
      {
        id: 473,
        code: "EMT-473",
        title: "BIMETALIC CABLE LUGS DTL-2-300-12",
      },
      {
        id: 474,
        code: "EMT-474",
        title: "BIMETALIC CABLE LUGS DTL-2-400-12",
      },
      {
        id: 475,
        code: "EMT-475",
        title: "BIMETALIC CABLE LUGS DTL-2-500-12",
      },
      {
        id: 476,
        code: "EMT-476",
        title: "BIMETALIC CABLE LUGS DTL-2-600-14",
      },
      {
        id: 477,
        code: "EMT-477",
        title: "COMPRESSION SLEEVE LUGS 10 MM HC-10L",
      },
      {
        id: 478,
        code: "EMT-478",
        title: "COMPRESSION SLEEVE LUGS 16 MM HC-16L",
      },
      {
        id: 479,
        code: "EMT-479",
        title: "COMPRESSION SLEEVE LUGS 25 MM HC-25L",
      },
      {
        id: 480,
        code: "EMT-480",
        title: "COMPRESSION SLEEVE LUGS 35 MM HC-35L",
      },
      {
        id: 481,
        code: "EMT-481",
        title: "COMPRESSION SLEEVE LUGS 50 MM HC-50L",
      },
      {
        id: 482,
        code: "EMT-482",
        title: "COMPRESSION SLEEVE LUGS 70 MM HC-70L",
      },
      {
        id: 483,
        code: "EMT-483",
        title: "COMPRESSION SLEEVE LUGS 95 MM HC-95L",
      },
      {
        id: 484,
        code: "EMT-484",
        title: "COMPRESSION SLEEVE LUGS 120 MM HC-120L",
      },
    ],
  },
  {
    id: "copper-ferrule",
    slug: "copper-ferrule",
    title: "Copper Ferrule",
    category: "Copper Ferrule",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-485.png",
    description: "Copper Ferrule for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 17,
    variants: [
      {
        id: 485,
        code: "EMT-485",
        title: "COMPRESSION SLEEVE LUGS 150 MM HC-150L",
      },
      {
        id: 486,
        code: "EMT-486",
        title: "COMPRESSION SLEEVE LUGS 185 MM HC-185L",
      },
      {
        id: 487,
        code: "EMT-487",
        title: "COMPRESSION SLEEVE LUGS 240 MM HC-240L",
      },
      {
        id: 488,
        code: "EMT-488",
        title: "COMPRESSION SLEEVE LUGS 300 MM HC-300L",
      },
      {
        id: 489,
        code: "EMT-489",
        title: "BRASS CABLE GLAND A2 - 20L",
      },
      {
        id: 490,
        code: "EMT-490",
        title: "BRASS CABLE GLAND A2 - 20S",
      },
      {
        id: 491,
        code: "EMT-491",
        title: "BRASS CABLE GLAND A2 - 25S",
      },
      {
        id: 492,
        code: "EMT-492",
        title: "BRASS CABLE GLAND A2 - 25L",
      },
      {
        id: 493,
        code: "EMT-493",
        title: "BRASS CABLE GLAND A2 - 32S",
      },
      {
        id: 494,
        code: "EMT-494",
        title: "BRASS CABLE GLAND A2 - 32L",
      },
      {
        id: 495,
        code: "EMT-495",
        title: "BRASS CABLE GLAND A2 - 40S",
      },
      {
        id: 496,
        code: "EMT-496",
        title: "BRASS CABLE GLAND A2 - 40L",
      },
      {
        id: 497,
        code: "EMT-497",
        title: "BRASS CABLE GLAND A2 - 50S",
      },
      {
        id: 498,
        code: "EMT-498",
        title: "BRASS CABLE GLAND A2 - 50L",
      },
      {
        id: 499,
        code: "EMT-499",
        title: "BRASS CABLE GLAND A2 - 63S",
      },
      {
        id: 500,
        code: "EMT-500",
        title: "BRASS CABLE GLAND A2 - 63L",
      },
      {
        id: 501,
        code: "EMT-501",
        title: "BRASS CABLE GLAND A2 - 75S",
      },
    ],
  },
  {
    id: "double-ferrule",
    slug: "double-ferrule",
    title: "Double Ferrule",
    category: "Double Ferrule",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-489.png",
    description: "Double Ferrule for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 502,
        code: "EMT-502",
        title: "BRASS CABLE GLAND A2 - 75L",
      },
      {
        id: 503,
        code: "EMT-503",
        title: "BRASS CABLE GLAND CW - 20L",
      },
      {
        id: 504,
        code: "EMT-504",
        title: "BRASS CABLE GLAND CW - 20S",
      },
      {
        id: 505,
        code: "EMT-505",
        title: "BRASS CABLE GLAND CW - 25L",
      },
      {
        id: 506,
        code: "EMT-506",
        title: "BRASS CABLE GLAND CW - 25S",
      },
      {
        id: 507,
        code: "EMT-507",
        title: "BRASS CABLE GLAND CW - 32L",
      },
    ],
  },
  {
    id: "pin-terminal",
    slug: "pin-terminal",
    title: "Pin Terminal",
    category: "Pin Terminal",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-503.png",
    description: "Pin Terminal for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 508,
        code: "EMT-508",
        title: "BRASS CABLE GLAND CW - 32S",
      },
      {
        id: 509,
        code: "EMT-509",
        title: "BRASS CABLE GLAND CW - 40S",
      },
      {
        id: 510,
        code: "EMT-510",
        title: "BRASS CABLE GLAND CW - 40L",
      },
    ],
  },
  {
    id: "fork-terminal",
    slug: "fork-terminal",
    title: "Fork Terminal",
    category: "Fork Terminal",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-503.png",
    description: "Fork Terminal for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 511,
        code: "EMT-511",
        title: "BRASS CABLE GLAND CW - 50S",
      },
      {
        id: 512,
        code: "EMT-512",
        title: "BRASS CABLE GLAND CW - 50L",
      },
      {
        id: 513,
        code: "EMT-513",
        title: "BRASS CABLE GLAND CW - 63S",
      },
    ],
  },
  {
    id: "ring-terminal",
    slug: "ring-terminal",
    title: "Ring Terminal",
    category: "Ring Terminal",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-503.png",
    description: "Ring Terminal for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 8,
    variants: [
      {
        id: 514,
        code: "EMT-514",
        title: "BRASS CABLE GLAND CW - 63L",
      },
      {
        id: 515,
        code: "EMT-515",
        title: "BRASS CABLE GLAND CW - 75S",
      },
      {
        id: 516,
        code: "EMT-516",
        title: "BRASS CABLE GLAND CW - 75L",
      },
      {
        id: 523,
        code: "EMT-523",
        title: "BRASS SS CABLE GLAND PG-21",
      },
      {
        id: 524,
        code: "EMT-524",
        title: "EMT FLEXIBLE HOSE 1/2'' UP",
      },
      {
        id: 525,
        code: "EMT-525",
        title: "EMT FLEXIBLE HOSE 3/4'' UP",
      },
      {
        id: 526,
        code: "EMT-526",
        title: "EMT FLEXIBLE HOSE 1/2'' CH",
      },
      {
        id: 527,
        code: "EMT-527",
        title: "EMT FLEXIBLE HOSE 3/4'' CH",
      },
    ],
  },
  {
    id: "disconnect-terminal",
    slug: "disconnect-terminal",
    title: "Disconnect Terminal",
    category: "Disconnect Terminal",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-517.png",
    description: "Disconnect Terminal for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 517,
        code: "EMT-517",
        title: "BRASS SS CABLE GLAND M16X1.5",
      },
      {
        id: 518,
        code: "EMT-518",
        title: "BRASS SS CABLE GLAND M20X1.5",
      },
      {
        id: 519,
        code: "EMT-519",
        title: "BRASS SS CABLE GLAND M25X1.5",
      },
      {
        id: 520,
        code: "EMT-520",
        title: "BRASS SS CABLE GLAND M32X1.5",
      },
      {
        id: 521,
        code: "EMT-521",
        title: "BRASS SS CABLE GLAND PG-13.5",
      },
      {
        id: 522,
        code: "EMT-522",
        title: "BRASS SS CABLE GLAND PG-16",
      },
    ],
  },
  {
    id: "cable-tie",
    slug: "cable-tie",
    title: "Cable Tie",
    category: "Cable Tie",
    mainCategory: "Cable Management",
    image: "/images/products/product-524.png",
    description: "Cable Tie for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 18,
    variants: [
      {
        id: 528,
        code: "EMT-528",
        title: "EMT FLEXIBLE HOSE 1''",
      },
      {
        id: 529,
        code: "EMT-529",
        title: "EMT FLEXIBLE HOSE 1-1/4''",
      },
      {
        id: 530,
        code: "EMT-530",
        title: "EMT FLEXIBLE HOSE 1-1/2''",
      },
      {
        id: 531,
        code: "EMT-531",
        title: "EMT FLEXIBLE HOSE 2''",
      },
      {
        id: 532,
        code: "EMT-532",
        title: "EMT FLEXIBLE 3/4\" UL LISTED 30 MTR VISION PANASONIC QUALITY",
      },
      {
        id: 533,
        code: "EMT-533",
        title: "EMT FLEXIBLE 1/2\" UL LISTED 30 MTR VISION PANASONIC QUALITY",
      },
      {
        id: 534,
        code: "EMT-534",
        title: "EMT FLEXIBLE 1\" UL LISTED 15 MTR VISION PANASONIC QUALITY",
      },
      {
        id: 535,
        code: "EMT-535",
        title: "LIQUID TIGHT FLEXIBLE HOSE 1/2\"",
      },
      {
        id: 536,
        code: "EMT-536",
        title: "LIQUID TIGHT FLEXIBLE HOSE 3/4\"",
      },
      {
        id: 537,
        code: "EMT-537",
        title: "LIQUID TIGHT FLEXIBLE HOSE 1/2\" VISION GOOD QUALITY",
      },
      {
        id: 538,
        code: "EMT-538",
        title: "LIQUID TIGHT FLEXIBLE HOSE 3/4\" VISION GOOD QUALITY",
      },
      {
        id: 539,
        code: "EMT-539",
        title: "LIQUID TIGHT FLEXIBLE HOSE 1\"",
      },
      {
        id: 540,
        code: "EMT-540",
        title: "LIQUID TIGHT FLEXIBLE HOSE 1-1/4\"",
      },
      {
        id: 541,
        code: "EMT-541",
        title: "LIQUID TIGHT FLEXIBLE HOSE 1-1/2\"",
      },
      {
        id: 542,
        code: "EMT-542",
        title: "LIQUID TIGHT FLEXIBLE HOSE 2\"",
      },
      {
        id: 543,
        code: "EMT-543",
        title: "LIQUID TIGHT FLEXIBLE HOSE 2-1/2\"",
      },
      {
        id: 544,
        code: "EMT-544",
        title: "LIQUID TIGHT FLEXIBLE HOSE 3\"",
      },
      {
        id: 545,
        code: "EMT-545",
        title: "LIQUID TIGHT FLEXIBLE HOSE 4\"",
      },
    ],
  },
  {
    id: "spiral-wrapping",
    slug: "spiral-wrapping",
    title: "Spiral Wrapping",
    category: "Spiral Wrapping",
    mainCategory: "Cable Management",
    image: "/images/products/product-548.png",
    description: "Spiral Wrapping for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 548,
        code: "EMT-548",
        title: "FTTH WIFI FIBER CABLE 4 CORE 2000 MTR WHITE",
      },
      {
        id: 549,
        code: "EMT-549",
        title: "PVC FLEXIBLE HOSE ORANGE 50 MTR FR3 TURKIYE - FIRE RETARDANT 25MM",
      },
      {
        id: 550,
        code: "EMT-550",
        title: "PVC FLEXIBLE HOSE ORANGE 50 MTR FR3 TURKIYE - FIRE RETARDANT 32MM",
      },
      {
        id: 551,
        code: "EMT-551",
        title: "RIGID COMPRESSION CONNECTOR 3/4'' ITCC MODEL",
      },
      {
        id: 552,
        code: "EMT-552",
        title: "RIGID COMPRESSION CONNECTOR 1'' ITCC MODEL",
      },
    ],
  },
  {
    id: "wiring-duct",
    slug: "wiring-duct",
    title: "Wiring Duct",
    category: "Wiring Duct",
    mainCategory: "Cable Management",
    image: "/images/products/product-551.png",
    description: "Wiring Duct for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 9,
    variants: [
      {
        id: 553,
        code: "EMT-553",
        title: "RIGID COMPRESSION CONNECTOR 2'' ITCC MODEL",
      },
      {
        id: 554,
        code: "EMT-554",
        title: "RIGID COMPRESSION COUPLING 3/4'' ITCC MODEL",
      },
      {
        id: 555,
        code: "EMT-555",
        title: "RIGID COMPRESSION COUPLING 1'' ITCC MODEL",
      },
      {
        id: 556,
        code: "EMT-556",
        title: "PVC TRUNKING WHITE WITH RED STICKER 16X16 MM",
      },
      {
        id: 557,
        code: "EMT-557",
        title: "PVC TRUNKING WHITE WITH RED STICKER 25X16 MM",
      },
      {
        id: 558,
        code: "EMT-558",
        title: "PVC TRUNKING 25X25 MM 3 MTR WHITE",
      },
      {
        id: 559,
        code: "EMT-559",
        title: "PVC TRUNKING 38X25 MM 3 MTR WHITE",
      },
      {
        id: 560,
        code: "EMT-560",
        title: "PVC TRUNKING 50X50 MM 3 MTR WHITE",
      },
      {
        id: 561,
        code: "EMT-561",
        title: "PVC TRUNKING 75X50 MM 3 MTR WHITE",
      },
    ],
  },
  {
    id: "flexible-conduit",
    slug: "flexible-conduit",
    title: "Flexible Conduit",
    category: "Flexible Conduit",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-556.png",
    description: "Flexible Conduit for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 562,
        code: "EMT-562",
        title: "PVC TRUNKING 75X75 MM 3 MTR WHITE",
      },
      {
        id: 563,
        code: "EMT-563",
        title: "PVC TRUNKING 100X50 MM 3 MTR WHITE",
      },
      {
        id: 564,
        code: "EMT-564",
        title: "PVC TRUNKING 100X100 MM 3 MTR WHITE",
      },
      {
        id: 565,
        code: "EMT-565",
        title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 25X10 MM",
      },
      {
        id: 566,
        code: "EMT-566",
        title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 35X15 MM",
      },
      {
        id: 567,
        code: "EMT-567",
        title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 50X15 MM",
      },
    ],
  },
  {
    id: "flexible-conduit-connector",
    slug: "flexible-conduit-connector",
    title: "Flexible Conduit Connector",
    category: "Flexible Conduit Connector",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-565.png",
    description: "Flexible Conduit Connector for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 568,
        code: "EMT-568",
        title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 70X20 MM",
      },
      {
        id: 569,
        code: "EMT-569",
        title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 100X30 MM",
      },
      {
        id: 570,
        code: "EMT-570",
        title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 25X10 MM",
      },
      {
        id: 571,
        code: "EMT-571",
        title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 35X15 MM",
      },
      {
        id: 572,
        code: "EMT-572",
        title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 50X15 MM",
      },
      {
        id: 573,
        code: "EMT-573",
        title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 70X20 MM",
      },
    ],
  },
  {
    id: "flexible-conduit-adaptor",
    slug: "flexible-conduit-adaptor",
    title: "Flexible Conduit Adaptor",
    category: "Flexible Conduit Adaptor",
    mainCategory: "Flexible Conduit",
    image: "/images/products/product-565.png",
    description: "Flexible Conduit Adaptor for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 574,
        code: "EMT-574",
        title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 100X30 MM",
      },
      {
        id: 575,
        code: "EMT-575",
        title: "PVC SLOTED TRUNKING 30HX30W 2 MTR GREY",
      },
      {
        id: 576,
        code: "EMT-576",
        title: "PVC SLOTED TRUNKING 40HX30W 2 MTR GREY",
      },
      {
        id: 577,
        code: "EMT-577",
        title: "PVC SLOTED TRUNKING 40HX40W 2 MTR GREY",
      },
      {
        id: 578,
        code: "EMT-578",
        title: "PVC SLOTED TRUNKING 50HX50W 2 MTR GREY",
      },
      {
        id: 579,
        code: "EMT-579",
        title: "PVC SLOTED TRUNKING 60HX40W 2 MTR GREY",
      },
    ],
  },
  {
    id: "conduit-saddle",
    slug: "conduit-saddle",
    title: "Conduit Saddle",
    category: "Conduit Saddle",
    mainCategory: "Support Systems",
    image: "/images/products/product-575.png",
    description: "Conduit Saddle for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 580,
        code: "EMT-580",
        title: "PVC SLOTED TRUNKING 60HX60W 2 MTR GREY",
      },
      {
        id: 581,
        code: "EMT-581",
        title: "PVC SLOTED TRUNKING 100HX60W 2 MTR GREY",
      },
      {
        id: 582,
        code: "EMT-582",
        title: "PVC SLOTED TRUNKING 100HX100W 2 MTR GREY",
      },
      {
        id: 583,
        code: "EMT-583",
        title: "PVC JUNCTION BOX 3 WAY 20 MM BLACK",
      },
      {
        id: 584,
        code: "EMT-584",
        title: "PVC JUNCTION BOX 3 WAY 25 MM BLACK",
      },
      {
        id: 585,
        code: "EMT-585",
        title: "PVC JUNCTION BOX 4 WAY 20 MM BLACK",
      },
    ],
  },
  {
    id: "nylon-gland",
    slug: "nylon-gland",
    title: "Nylon Gland",
    category: "Nylon Gland",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-583.png",
    description: "Nylon Gland for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 10,
    variants: [
      {
        id: 586,
        code: "EMT-586",
        title: "PVC JUNCTION BOX 4 WAY 25 MM BLACK",
      },
      {
        id: 587,
        code: "EMT-587",
        title: "CABLE TIE 100X2.5 MM BLACK PKT 100 PCS V-100B",
      },
      {
        id: 588,
        code: "EMT-588",
        title: "CABLE TIE 100X2.5 MM NATURAL PKT 100 PCS V-100W",
      },
      {
        id: 589,
        code: "EMT-589",
        title: "CABLE TIE 150X2.5 MM BLACK PKT 100 PCS V-150B",
      },
      {
        id: 590,
        code: "EMT-590",
        title: "CABLE TIE 150X2.5 MM NATURAL PKT 100 PCS V-150W",
      },
      {
        id: 591,
        code: "EMT-591",
        title: "CABLE TIE 200X3.6 MM BLACK PKT 100 PCS V-200B",
      },
      {
        id: 592,
        code: "EMT-592",
        title: "CABLE TIE 200X3.6 MM NATURAL PKT 100 PCS V-200W",
      },
      {
        id: 593,
        code: "EMT-593",
        title: "CABLE TIE 200X4.8 MM NATURAL PKT 100 PCS V-200W",
      },
      {
        id: 594,
        code: "EMT-594",
        title: "CABLE TIE 250X3.6 MM BLACK PKT 100 PCS V-250B",
      },
      {
        id: 595,
        code: "EMT-595",
        title: "CABLE TIE 250X3.6 MM NATURAL PKT 100 PCS V-250W",
      },
    ],
  },
  {
    id: "metal-gland",
    slug: "metal-gland",
    title: "Metal Gland",
    category: "Metal Gland",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-587.png",
    description: "Metal Gland for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 596,
        code: "EMT-596",
        title: "CABLE TIE 300X4.8 MM BLACK PKT 100 PCS V-300B",
      },
      {
        id: 597,
        code: "EMT-597",
        title: "CABLE TIE 300X4.8 MM NATURAL PKT 100 PCS V-300W",
      },
      {
        id: 598,
        code: "EMT-598",
        title: "CABLE TIE 300X7.6 MM BLACK PKT 100 PCS V-300B",
      },
      {
        id: 599,
        code: "EMT-599",
        title: "CABLE TIE 300X7.6 MM NATURAL PKT 100 PCS V-300W",
      },
      {
        id: 600,
        code: "EMT-600",
        title: "CABLE TIE 370X4.8 MM BLACK PKT 100 PCS V-370B",
      },
      {
        id: 601,
        code: "EMT-601",
        title: "CABLE TIE 370X4.8 MM NATURAL PKT 100 PCS V-370W",
      },
    ],
  },
  {
    id: "brass-locknut",
    slug: "brass-locknut",
    title: "Brass Locknut",
    category: "Brass Locknut",
    mainCategory: "Conduit & Fittings",
    image: "/images/products/product-587.png",
    description: "Brass Locknut for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 602,
        code: "EMT-602",
        title: "CABLE TIE 432X4.8 MM BLACK PKT 100 PCS V-432B",
      },
      {
        id: 603,
        code: "EMT-603",
        title: "CABLE TIE 432X4.8 MM NATURAL PKT 100 PCS V-432W",
      },
      {
        id: 604,
        code: "EMT-604",
        title: "CABLE TIE 450X7.6 MM BLACK PKT 100 PCS V-450B",
      },
      {
        id: 605,
        code: "EMT-605",
        title: "CABLE TIE 450X7.6 MM NATURAL PKT 100 PCS V-450W",
      },
      {
        id: 606,
        code: "EMT-606",
        title: "CABLE TIE 550X7.6 MM BLACK PKT 100 PCS V-550B",
      },
      {
        id: 607,
        code: "EMT-607",
        title: "CABLE TIE 550X7.6 MM NATURAL PKT 100 PCS V-550W",
      },
    ],
  },
  {
    id: "earth-tag",
    slug: "earth-tag",
    title: "Earth Tag",
    category: "Earth Tag",
    mainCategory: "Glands & Lugs",
    image: "/images/products/product-608.png",
    description: "Earth Tag for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 6,
    variants: [
      {
        id: 608,
        code: "EMT-608",
        title: "CONDUIT BODY 3/4\" LB ALUMINUIM THREAD TYPE UL",
      },
      {
        id: 609,
        code: "EMT-609",
        title: "CONDUIT BODY 3/4\" LL ALUMINUIM THREAD TYPE UL",
      },
      {
        id: 610,
        code: "EMT-610",
        title: "CONDUIT BODY 3/4\" LR ALUMINUIM THREAD TYPE UL",
      },
      {
        id: 611,
        code: "EMT-611",
        title: "CONDUIT BODY 1\" LB ALUMINUIM THREAD TYPE UL",
      },
      {
        id: 612,
        code: "EMT-612",
        title: "CONDUIT BODY 1\" LR ALUMINUIM THREAD TYPE UL",
      },
      {
        id: 613,
        code: "EMT-613",
        title: "CONDUIT BODY 1\" LL ALUMINUIM THREAD TYPE UL",
      },
    ],
  },
  {
    id: "junction-box",
    slug: "junction-box",
    title: "Junction Box",
    category: "Junction Box",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-608.png",
    description: "Junction Box for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 4,
    variants: [
      {
        id: 614,
        code: "EMT-614",
        title: "ALUMINIUM CONDUIT BODY (T TYPE) 3/4\"",
      },
      {
        id: 615,
        code: "EMT-615",
        title: "ALUMINIUM CONDUIT BODY (T TYPE) 1\"",
      },
      {
        id: 616,
        code: "EMT-616",
        title: "RIGID/EMT CONDUIT BODY 3/4\" LB",
      },
      {
        id: 617,
        code: "EMT-617",
        title: "RIGID/EMT CONDUIT BODY 3/4\" LL",
      },
    ],
  },
  {
    id: "weatherproof-switch",
    slug: "weatherproof-switch",
    title: "Weatherproof Switch",
    category: "Weatherproof Switch",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-616.png",
    description: "Weatherproof Switch for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 618,
        code: "EMT-618",
        title: "RIGID/EMT CONDUIT BODY 3/4\" LR",
      },
      {
        id: 619,
        code: "EMT-619",
        title: "RIGID CONDUIT BODY (TB TYPE) 3/4\" UL",
      },
    ],
  },
  {
    id: "weatherproof-socket",
    slug: "weatherproof-socket",
    title: "Weatherproof Socket",
    category: "Weatherproof Socket",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-616.png",
    description: "Weatherproof Socket for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 620,
        code: "EMT-620",
        title: "RIGID/EMT CONDUIT BODY 1\" LB",
      },
      {
        id: 621,
        code: "EMT-621",
        title: "RIGID/EMT CONDUIT BODY 1\" LL",
      },
    ],
  },
  {
    id: "industrial-plug",
    slug: "industrial-plug",
    title: "Industrial Plug",
    category: "Industrial Plug",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-616.png",
    description: "Industrial Plug for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 622,
        code: "EMT-622",
        title: "RIGID/EMT CONDUIT BODY 1\" LR",
      },
      {
        id: 624,
        code: "EMT-624",
        title: "ELECTRICAL CABLE ROLLER 150 MM",
      },
    ],
  },
  {
    id: "industrial-socket",
    slug: "industrial-socket",
    title: "Industrial Socket",
    category: "Industrial Socket",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-616.png",
    description: "Industrial Socket for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 623,
        code: "EMT-623",
        title: "RIGID CONDUIT BODY (TB TYPE) 1\" UL",
      },
      {
        id: 625,
        code: "EMT-625",
        title: "ELECTRICAL CABLE ROLLER 3 WAY",
      },
    ],
  },
  {
    id: "panel-lock",
    slug: "panel-lock",
    title: "Panel Lock",
    category: "Panel Lock",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-626.png",
    description: "High quality PANEL LOCK 22 MM for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 626,
        code: "EMT-626",
        title: "WATERPROOF STEEL ENCLOUSER BOX 20X20X15 CM",
      },
    ],
  },
  {
    id: "panel-hinge",
    slug: "panel-hinge",
    title: "Panel Hinge",
    category: "Panel Hinge",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-626.png",
    description: "High quality PANEL HINGE STEEL for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 627,
        code: "EMT-627",
        title: "WATERPROOF STEEL ENCLOUSER BOX 25X20X15 CM",
      },
    ],
  },
  {
    id: "din-rail-accessories",
    slug: "din-rail-accessories",
    title: "DIN Rail Accessories",
    category: "DIN Rail Accessories",
    mainCategory: "Support Systems",
    image: "/images/products/product-626.png",
    description: "High quality END CLAMP FOR DIN RAIL for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 629,
        code: "EMT-629",
        title: "WATERPROOF STEEL ENCLOUSER BOX 40X30X15 CM",
      },
    ],
  },
  {
    id: "terminal-block",
    slug: "terminal-block",
    title: "Terminal Block",
    category: "Terminal Block",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-626.png",
    description: "Terminal Block for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 630,
        code: "EMT-630",
        title: "WATERPROOF STEEL ENCLOUSER BOX 40X30X20 CM",
      },
      {
        id: 631,
        code: "EMT-631",
        title: "WATERPROOF STEEL ENCLOUSER BOX 40X40X15 CM",
      },
      {
        id: 632,
        code: "EMT-632",
        title: "WATERPROOF STEEL ENCLOUSER BOX 50X40X20 CM",
      },
      {
        id: 633,
        code: "EMT-633",
        title: "WATERPROOF STEEL ENCLOUSER BOX 60X40X15 CM",
      },
      {
        id: 634,
        code: "EMT-634",
        title: "WATERPROOF STEEL ENCLOUSER BOX 60X40X20 CM",
      },
    ],
  },
  {
    id: "terminal-block-accessories",
    slug: "terminal-block-accessories",
    title: "Terminal Block Accessories",
    category: "Terminal Block Accessories",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-626.png",
    description: "Terminal Block Accessories for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 635,
        code: "EMT-635",
        title: "WATERPROOF STEEL ENCLOUSER BOX 70X50X20 CM",
      },
      {
        id: 636,
        code: "EMT-636",
        title: "WATERPROOF STEEL ENCLOUSER BOX 80X60X20 CM",
      },
    ],
  },
  {
    id: "push-button",
    slug: "push-button",
    title: "Push Button",
    category: "Push Button",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-626.png",
    description: "Push Button for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 637,
        code: "EMT-637",
        title: "WATERPROOF STEEL ENCLOUSER BOX 80X60X25 CM",
      },
      {
        id: 638,
        code: "EMT-638",
        title: "DISCONNECTOR UKF 20A 3POLE",
      },
      {
        id: 639,
        code: "EMT-639",
        title: "DISCONNECTOR UKF 32A 3POLE",
      },
    ],
  },
  {
    id: "emergency-button",
    slug: "emergency-button",
    title: "Emergency Button",
    category: "Emergency Button",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-638.png",
    description: "High quality EMERGENCY STOP BUTTON for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 640,
        code: "EMT-640",
        title: "DISCONNECTOR UKF 63A 3POLE",
      },
    ],
  },
  {
    id: "selector-switch",
    slug: "selector-switch",
    title: "Selector Switch",
    category: "Selector Switch",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-641.png",
    description: "Selector Switch for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 641,
        code: "EMT-641",
        title: "W/P SOCKET BOX BG-1 WITHOUT SOCKET",
      },
      {
        id: 642,
        code: "EMT-642",
        title: "W/P SOCKET BOX BG-1 WITH SOCKET",
      },
    ],
  },
  {
    id: "pilot-light",
    slug: "pilot-light",
    title: "Pilot Light",
    category: "Pilot Light",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-641.png",
    description: "Pilot Light for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 643,
        code: "EMT-643",
        title: "W/P SOCKET BOX BG-2 WITHOUT SOCKET",
      },
      {
        id: 644,
        code: "EMT-644",
        title: "W/P SOCKET BOX BG-2 WITH SOCKET",
      },
      {
        id: 645,
        code: "EMT-645",
        title: "WATERPROOF PVC BOX 80X80X5 CM",
      },
    ],
  },
  {
    id: "digital-timer",
    slug: "digital-timer",
    title: "Digital Timer",
    category: "Digital Timer",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-645.png",
    description: "High quality DIGITAL TIMER 220V for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 646,
        code: "EMT-646",
        title: "WATERPROOF PVC BOX 10X10X7 CM",
      },
    ],
  },
  {
    id: "digital-counter",
    slug: "digital-counter",
    title: "Digital Counter",
    category: "Digital Counter",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-645.png",
    description: "High quality DIGITAL COUNTER 220V for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 647,
        code: "EMT-647",
        title: "WATERPROOF PVC BOX 15X15X7 CM",
      },
    ],
  },
  {
    id: "current-transformer",
    slug: "current-transformer",
    title: "Current Transformer",
    category: "Current Transformer",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-645.png",
    description: "Current Transformer for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 648,
        code: "EMT-648",
        title: "WATERPROOF PVC BOX 20X20X8 CM",
      },
      {
        id: 649,
        code: "EMT-649",
        title: "WATERPROOF PVC BOX 25X20X8 CM",
      },
      {
        id: 650,
        code: "EMT-650",
        title: "WATERPROOF PVC BOX 30X25X12 CM",
      },
    ],
  },
  {
    id: "voltmeter",
    slug: "voltmeter",
    title: "Voltmeter",
    category: "Voltmeter",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-651.png",
    description: "High quality ANALOG VOLTMETER 96X96 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 651,
        code: "EMT-651",
        title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 12 MM WHITE",
      },
    ],
  },
  {
    id: "ammeter",
    slug: "ammeter",
    title: "Ammeter",
    category: "Ammeter",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-651.png",
    description: "High quality ANALOG AMMETER 96X96 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 652,
        code: "EMT-652",
        title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 16 MM WHITE/BLACK",
      },
    ],
  },
  {
    id: "digital-meter",
    slug: "digital-meter",
    title: "Digital Meter",
    category: "Digital Meter",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-651.png",
    description: "High quality DIGITAL MULTIFUNCTION METER for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 653,
        code: "EMT-653",
        title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 20 MM WHITE/BLACK",
      },
    ],
  },
  {
    id: "cooling-fan",
    slug: "cooling-fan",
    title: "Cooling Fan",
    category: "Cooling Fan",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-651.png",
    description: "Cooling Fan for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 654,
        code: "EMT-654",
        title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 25 MM WHITE/BLACK",
      },
      {
        id: 655,
        code: "EMT-655",
        title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 32 MM WHITE/BLACK",
      },
      {
        id: 656,
        code: "EMT-656",
        title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 50 MM WHITE/BLACK",
      },
    ],
  },
  {
    id: "panel-ac",
    slug: "panel-ac",
    title: "Panel Ac",
    category: "Panel AC",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-657.png",
    description: "Panel Ac for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 657,
        code: "EMT-657",
        title: "PLASTIC CABLE GLAND PG-7 WHITE",
      },
      {
        id: 658,
        code: "EMT-658",
        title: "PLASTIC CABLE GLAND PG-11 WHITE",
      },
    ],
  },
  {
    id: "panel-heater",
    slug: "panel-heater",
    title: "Panel Heater",
    category: "Panel Heater",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-657.png",
    description: "Panel Heater for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 659,
        code: "EMT-659",
        title: "PLASTIC CABLE GLAND PG-13.5 WHITE",
      },
      {
        id: 660,
        code: "EMT-660",
        title: "PLASTIC CABLE GLAND PG-16 WHITE",
      },
    ],
  },
  {
    id: "thermostat",
    slug: "thermostat",
    title: "Thermostat",
    category: "Thermostat",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-657.png",
    description: "Thermostat for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 661,
        code: "EMT-661",
        title: "PLASTIC CABLE GLAND PG-21 WHITE",
      },
      {
        id: 662,
        code: "EMT-662",
        title: "PLASTIC CABLE GLAND PG-25 WHITE",
      },
    ],
  },
  {
    id: "panel-light",
    slug: "panel-light",
    title: "Panel Light",
    category: "Panel Light",
    mainCategory: "Wiring Accessories",
    image: "/images/products/product-657.png",
    description: "High quality LED PANEL LIGHT 24V for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 663,
        code: "EMT-663",
        title: "PLASTIC CABLE GLAND PG-29 WHITE",
      },
    ],
  },
  {
    id: "smps",
    slug: "smps",
    title: "SMPS",
    category: "SMPS",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-657.png",
    description: "SMPS for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 664,
        code: "EMT-664",
        title: "PLASTIC CABLE GLAND PG-36 WHITE",
      },
      {
        id: 665,
        code: "EMT-665",
        title: "PLASTIC CABLE GLAND PG-42 WHITE",
      },
      {
        id: 666,
        code: "EMT-666",
        title: "PLASTIC CABLE GLAND PG-48 WHITE",
      },
    ],
  },
  {
    id: "control-transformer",
    slug: "control-transformer",
    title: "Control Transformer",
    category: "Control Transformer",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-657.png",
    description: "Control Transformer for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 667,
        code: "EMT-667",
        title: "PLASTIC CABLE GLAND PG-63 WHITE",
      },
      {
        id: 668,
        code: "EMT-668",
        title: "HOOK TYPE LUGS 1.5 MM LB1-3V (RF-PPL30) TAIWAN",
      },
      {
        id: 669,
        code: "EMT-669",
        title: "HOOK TYPE LUGS 2.5 MM LB2-3V (BF-PPL30) TAIWAN",
      },
    ],
  },
  {
    id: "mcb",
    slug: "mcb",
    title: "MCB",
    category: "MCB",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-668.png",
    description: "MCB for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 14,
    variants: [
      {
        id: 670,
        code: "EMT-670",
        title: "HOOK TYPE LUGS 4-6 MM LB5-3V (GF-PPL30) TAIWAN",
      },
      {
        id: 671,
        code: "EMT-671",
        title: "FLAT BLADE TYPE 1.5 MM BT1-14SV (RF-PP12/23) TAIWAN",
      },
      {
        id: 672,
        code: "EMT-672",
        title: "FLAT BLADE TYPE 1.5 MM BT1-18V (RF-PP16/23) TAIWAN",
      },
      {
        id: 673,
        code: "EMT-673",
        title: "FLAT BLADE TYPE 2.5 MM BT2-13V (BF-PP12/25) TAIWAN",
      },
      {
        id: 674,
        code: "EMT-674",
        title: "FLAT BLADE TYPE 2.5 MM BT2-18V (BF-PP16/25) TAIWAN",
      },
      {
        id: 675,
        code: "EMT-675",
        title: "FLAT BLADE TYPE 4-6 MM BT5-18V (GF-PP17) TAIWAN",
      },
      {
        id: 676,
        code: "EMT-676",
        title: "PIN TYPE LUGS 1.5 MM PT1-12V (RF-P12) TAIWAN",
      },
      {
        id: 677,
        code: "EMT-677",
        title: "PIN TYPE LUGS 2.5 MM PT2-12V (BF-P12) TAIWAN",
      },
      {
        id: 678,
        code: "EMT-678",
        title: "PIN TYPE LUGS 4-6 MM PT5-13V (GF-P12) TAIWAN",
      },
      {
        id: 679,
        code: "EMT-679",
        title: "RING TYPE LUGS 1.5 MM R1-4LV (RF-M4) TAIWAN",
      },
      {
        id: 680,
        code: "EMT-680",
        title: "RING TYPE LUGS 1.5 MM R1-6V (RF-M6) TAIWAN",
      },
      {
        id: 681,
        code: "EMT-681",
        title: "RING TYPE LUGS 2.5 MM R2-4LV (BF-M4) TAIWAN",
      },
      {
        id: 682,
        code: "EMT-682",
        title: "RING TYPE LUGS 2.5 MM R2-6V (BF-M6) TAIWAN",
      },
      {
        id: 683,
        code: "EMT-683",
        title: "RING TYPE LUGS 4-6 MM R5-4LV (GF-M4) TAIWAN",
      },
    ],
  },
  {
    id: "contactor",
    slug: "contactor",
    title: "Contactor",
    category: "Contactor",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-679.png",
    description: "Contactor for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 7,
    variants: [
      {
        id: 684,
        code: "EMT-684",
        title: "RING TYPE LUGS 4-6 MM R5-6V (GF-M6) TAIWAN",
      },
      {
        id: 685,
        code: "EMT-685",
        title: "U TYPE LUGS 1.5 MM S1-3SV (RF-U3) TAIWAN",
      },
      {
        id: 686,
        code: "EMT-686",
        title: "U TYPE LUGS 1.5 MM S1-4SV (RF-U4) TAIWAN",
      },
      {
        id: 687,
        code: "EMT-687",
        title: "U TYPE LUGS 2.5 MM S2-3SV (BF-U3) TAIWAN",
      },
      {
        id: 688,
        code: "EMT-688",
        title: "U TYPE LUGS 2.5 MM S2-4SV (BF-U4) TAIWAN",
      },
      {
        id: 689,
        code: "EMT-689",
        title: "U TYPE LUGS 4-6 MM S5-4SV (GF-U4) TAIWAN",
      },
      {
        id: 690,
        code: "EMT-690",
        title: "CORD END TERNMINALS CE015010 1.5 MM (PKE-1510) BLACK TAIWAN",
      },
    ],
  },
  {
    id: "thermal-overload-relay",
    slug: "thermal-overload-relay",
    title: "Thermal Overload Relay",
    category: "Thermal Overload Relay",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-690.png",
    description: "Thermal Overload Relay for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 691,
        code: "EMT-691",
        title: "CORD END TERNMINALS CE025012 2.5 MM (PKE-2512) GREY TAIWAN",
      },
      {
        id: 692,
        code: "EMT-692",
        title: "CORD END TERNMINALS CE040012 4MM (PKE-4012) ORANGE TAIWAN",
      },
      {
        id: 693,
        code: "EMT-693",
        title: "CORD END TERNMINALS CE060012 6MM (PKE-612) GREEN TAIWAN",
      },
    ],
  },
  {
    id: "motor-starter",
    slug: "motor-starter",
    title: "Motor Starter",
    category: "Motor Starter",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-690.png",
    description: "Motor Starter for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 694,
        code: "EMT-694",
        title: "CORD END TERNMINALS CT215012 2X1.5 MM (PKE-2*1512) BLACK TAIWAN",
      },
      {
        id: 695,
        code: "EMT-695",
        title: "CORD END TERNMINALS CT225013 2X2.5 MM (PKE-2*2512) GREY TAIWAN",
      },
      {
        id: 696,
        code: "EMT-696",
        title: "CORD END TERNMINALS 0.50 MM PKE-0510 WHITE CHINA",
      },
    ],
  },
  {
    id: "changeover-switch",
    slug: "changeover-switch",
    title: "Changeover Switch",
    category: "Changeover Switch",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-696.png",
    description: "Changeover Switch for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 697,
        code: "EMT-697",
        title: "CORD END TERNMINALS 0.75 MM PKE-7510 WHITE CHINA",
      },
      {
        id: 698,
        code: "EMT-698",
        title: "CORD END TERNMINALS 1.0 MM PKE-1010 RED CHINA",
      },
      {
        id: 699,
        code: "EMT-699",
        title: "CORD END TERNMINALS 1.50 MM PKE-1510 BLACK CHINA",
      },
    ],
  },
  {
    id: "mccb",
    slug: "mccb",
    title: "MCCB",
    category: "MCCB",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-696.png",
    description: "MCCB for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 700,
        code: "EMT-700",
        title: "CORD END TERNMINALS 2.50 MM PKE-2512 GREY CHINA",
      },
      {
        id: 701,
        code: "EMT-701",
        title: "CORD END TERNMINALS 4.0 MM PKE-4012 ORANGE CHINA",
      },
      {
        id: 702,
        code: "EMT-702",
        title: "CORD END TERNMINALS 6.0 MM PKE-6012 GREEN CHINA",
      },
      {
        id: 703,
        code: "EMT-703",
        title: "CORD END TERNMINALS 10 MM PKE-1012 CHINA",
      },
      {
        id: 704,
        code: "EMT-704",
        title: "CORD END TERNMINALS 16 MM PKE-1618 CHINA",
      },
    ],
  },
  {
    id: "acb",
    slug: "acb",
    title: "ACB",
    category: "ACB",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-696.png",
    description: "ACB for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 705,
        code: "EMT-705",
        title: "CORD END TERNMINALS 25 MM PKE-2518 CHINA",
      },
      {
        id: 706,
        code: "EMT-706",
        title: "CORD END TERNMINALS 35 MM PKE-3525 CHINA",
      },
    ],
  },
  {
    id: "spd",
    slug: "spd",
    title: "SPD",
    category: "SPD",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-707.png",
    description: "SPD for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 707,
        code: "EMT-707",
        title: "STEEL HOLE SAW 16 MM",
      },
      {
        id: 708,
        code: "EMT-708",
        title: "STEEL HOLE SAW 20 MM",
      },
      {
        id: 709,
        code: "EMT-709",
        title: "STEEL HOLE SAW 22 MM",
      },
    ],
  },
  {
    id: "protection-relay",
    slug: "protection-relay",
    title: "Protection Relay",
    category: "Protection Relay",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-707.png",
    description: "Protection Relay for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 710,
        code: "EMT-710",
        title: "STEEL HOLE SAW 25 MM",
      },
      {
        id: 711,
        code: "EMT-711",
        title: "STEEL HOLE SAW 27 MM",
      },
    ],
  },
  {
    id: "relay",
    slug: "relay",
    title: "Relay",
    category: "Relay",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-707.png",
    description: "High quality TIMER RELAY for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 712,
        code: "EMT-712",
        title: "STEEL HOLE SAW 32 MM",
      },
    ],
  },
  {
    id: "auxiliary-relay",
    slug: "auxiliary-relay",
    title: "Auxiliary Relay",
    category: "Auxiliary Relay",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-707.png",
    description: "Auxiliary Relay for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 713,
        code: "EMT-713",
        title: "STEEL HOLE SAW 35 MM",
      },
      {
        id: 714,
        code: "EMT-714",
        title: "STEEL HOLE SAW 40 MM",
      },
    ],
  },
  {
    id: "relay-socket",
    slug: "relay-socket",
    title: "Relay Socket",
    category: "Relay Socket",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-707.png",
    description: "Relay Socket for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 715,
        code: "EMT-715",
        title: "STEEL HOLE SAW 50 MM",
      },
      {
        id: 716,
        code: "EMT-716",
        title: "STEEL HOLE SAW 60 MM",
      },
    ],
  },
  {
    id: "limit-switch",
    slug: "limit-switch",
    title: "Limit Switch",
    category: "Limit Switch",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-707.png",
    description: "High quality LIMIT SWITCH for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 717,
        code: "EMT-717",
        title: "STEEL HOLE SAW 75 MM",
      },
    ],
  },
  {
    id: "proximity-sensor",
    slug: "proximity-sensor",
    title: "Proximity Sensor",
    category: "Proximity Sensor",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-707.png",
    description: "Proximity Sensor for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 718,
        code: "EMT-718",
        title: "STEEL HOLE SAW 90 MM",
      },
      {
        id: 719,
        code: "EMT-719",
        title: "HSS STAINLESS STEEL DRILL BITS 3 MM",
      },
    ],
  },
  {
    id: "photo-sensor",
    slug: "photo-sensor",
    title: "Photo Sensor",
    category: "Photo Sensor",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-719.png",
    description: "High quality PHOTO SENSOR for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 720,
        code: "EMT-720",
        title: "HSS STAINLESS STEEL DRILL BITS 3.5 MM",
      },
    ],
  },
  {
    id: "float-switch",
    slug: "float-switch",
    title: "Float Switch",
    category: "Float Switch",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-719.png",
    description: "High quality FLOAT SWITCH for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 721,
        code: "EMT-721",
        title: "HSS STAINLESS STEEL DRILL BITS 4 MM",
      },
    ],
  },
  {
    id: "level-controller",
    slug: "level-controller",
    title: "Level Controller",
    category: "Level Controller",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-719.png",
    description: "High quality LEVEL CONTROLLER for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 722,
        code: "EMT-722",
        title: "HSS STAINLESS STEEL DRILL BITS 6 MM",
      },
    ],
  },
  {
    id: "vfd",
    slug: "vfd",
    title: "VFD",
    category: "VFD",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-719.png",
    description: "VFD for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 723,
        code: "EMT-723",
        title: "HSS STAINLESS STEEL DRILL BITS 8 MM",
      },
      {
        id: 724,
        code: "EMT-724",
        title: "HSS STAINLESS STEEL DRILL BITS 10 MM",
      },
      {
        id: 725,
        code: "EMT-725",
        title: "HSS STAINLESS STEEL DRILL BITS 12 MM",
      },
    ],
  },
  {
    id: "plc",
    slug: "plc",
    title: "PLC",
    category: "PLC",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-726.png",
    description: "PLC for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 726,
        code: "EMT-726",
        title: "HILTI HAMMER CONCRETE DRILL BITS M6X110 MM",
      },
      {
        id: 727,
        code: "EMT-727",
        title: "HILTI HAMMER CONCRETE DRILL BITS M8X160 MM",
      },
    ],
  },
  {
    id: "hmi",
    slug: "hmi",
    title: "HMI",
    category: "HMI",
    mainCategory: "Circuit Protection",
    image: "/images/products/product-726.png",
    description: "HMI for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 728,
        code: "EMT-728",
        title: "HILTI HAMMER CONCRETE DRILL BITS M10X210 MM",
      },
      {
        id: 729,
        code: "EMT-729",
        title: "HILTI HAMMER CONCRETE DRILL BITS M12X210 MM",
      },
    ],
  },
  {
    id: "ethernet-switch",
    slug: "ethernet-switch",
    title: "Ethernet Switch",
    category: "Ethernet Switch",
    mainCategory: "Cable Management",
    image: "/images/products/product-730.png",
    description: "Ethernet Switch for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 730,
        code: "EMT-730",
        title: "CUTTING DISC 4.5\" X 1.0 MM",
      },
      {
        id: 731,
        code: "EMT-731",
        title: "W/P CONNECTOR IP68 2 PIN YSN11-2",
      },
    ],
  },
  {
    id: "network-cabinet",
    slug: "network-cabinet",
    title: "Network Cabinet",
    category: "Network Cabinet",
    mainCategory: "Boxes & Enclosures",
    image: "/images/products/product-731.png",
    description: "Network Cabinet for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 3,
    variants: [
      {
        id: 732,
        code: "EMT-732",
        title: "W/P CONNECTOR IP68 3 PIN YSN11-3",
      },
      {
        id: 733,
        code: "EMT-733",
        title: "W/P CONNECTOR IP68 4 PIN YSN11-4",
      },
      {
        id: 734,
        code: "EMT-734",
        title: "W/P CONNECTOR T TYPE IP68 2 PIN YST-2",
      },
    ],
  },
  {
    id: "patch-panel",
    slug: "patch-panel",
    title: "Patch Panel",
    category: "Patch Panel",
    mainCategory: "Cable Management",
    image: "/images/products/product-731.png",
    description: "High quality PATCH PANEL 24 PORT for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 735,
        code: "EMT-735",
        title: "W/P CONNECTOR T TYPE IP68 3 PIN YST-3",
      },
    ],
  },
  {
    id: "keystone-jack",
    slug: "keystone-jack",
    title: "Keystone Jack",
    category: "Keystone Jack",
    mainCategory: "Cable Management",
    image: "/images/products/product-736.png",
    description: "High quality CAT6 KEYSTONE JACK for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 736,
        code: "EMT-736",
        title: "W/P JUNCTION BOX IP68 2 WAY M686-2",
      },
    ],
  },
  {
    id: "rj45-connector",
    slug: "rj45-connector",
    title: "RJ45 Connector",
    category: "RJ45 Connector",
    mainCategory: "Cable Management",
    image: "/images/products/product-736.png",
    description: "High quality RJ45 CONNECTOR CAT6 for industrial electrical applications.",
    variantCount: 1,
    variants: [
      {
        id: 737,
        code: "EMT-737",
        title: "W/P JUNCTION BOX IP68 3 WAY M686-3",
      },
    ],
  },
  {
    id: "testing-equipment",
    slug: "testing-equipment",
    title: "Testing Equipment",
    category: "Testing Equipment",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-736.png",
    description: "Testing Equipment for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 738,
        code: "EMT-738",
        title: "W/P JUNCTION BOX IP68 4 WAY M686-4A",
      },
      {
        id: 739,
        code: "EMT-739",
        title: "BROTHER CATRIDGE 9 MM WHITE/BLACK",
      },
      {
        id: 740,
        code: "EMT-740",
        title: "BROTHER CATRIDGE 9 MM YELLOW/BLACK",
      },
      {
        id: 741,
        code: "EMT-741",
        title: "BROTHER CATRIDGE 12 MM WHITE/BLACK",
      },
      {
        id: 742,
        code: "EMT-742",
        title: "BROTHER CATRIDGE 12 MM YELLOW/BLACK",
      },
    ],
  },
  {
    id: "tools",
    slug: "tools",
    title: "Tools",
    category: "Tools",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-743.png",
    description: "Tools for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 5,
    variants: [
      {
        id: 743,
        code: "EMT-743",
        title: "CASIO CATRIDGE 9 MM WHITE/BLACK",
      },
      {
        id: 744,
        code: "EMT-744",
        title: "CASIO CATRIDGE 9 MM YELLOW/BLACK",
      },
      {
        id: 745,
        code: "EMT-745",
        title: "CASIO CATRIDGE 12 MM WHITE/BLACK",
      },
      {
        id: 746,
        code: "EMT-746",
        title: "CASIO CATRIDGE 12 MM YELLOW/BLACK",
      },
      {
        id: 747,
        code: "EMT-747",
        title: "CABLE JOINT KIT M11",
      },
    ],
  },
  {
    id: "safety-equipment",
    slug: "safety-equipment",
    title: "Safety Equipment",
    category: "Safety Equipment",
    mainCategory: "Tools & Accessories",
    image: "/images/products/product-747.png",
    description: "Safety Equipment for wholesale electrical supply, available in multiple sizes and specifications.",
    variantCount: 2,
    variants: [
      {
        id: 748,
        code: "EMT-748",
        title: "CABLE JOINT KIT M12",
      },
      {
        id: 749,
        code: "EMT-749",
        title: "CABLE JOINT KIT M13",
      },
    ],
  },
];

export const totalProductFamilies = products.length;
export const totalProductVariants = products.reduce(
  (total, product) => total + product.variantCount,
  0
);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductsByMainCategory(mainCategory: MainCategory) {
  return products.filter((product) => product.mainCategory === mainCategory);
}

export function getProductVariantByCode(code: string) {
  const normalized = code.trim().toLowerCase();
  for (const product of products) {
    const variant = product.variants.find(
      (item) => item.code.toLowerCase() === normalized
    );
    if (variant) return { product, variant };
  }
  return undefined;
}

export function searchProducts(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return products;
  return products.filter((product) => {
    const productMatch = [
      product.title,
      product.category,
      product.mainCategory,
      product.description,
    ].some((value) => value.toLowerCase().includes(normalized));
    const variantMatch = product.variants.some((variant) =>
      [variant.title, variant.code].some((value) =>
        value.toLowerCase().includes(normalized)
      )
    );
    return productMatch || variantMatch;
  });
}
