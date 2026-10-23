/**
 * AL MASAR product catalogue — product-family reset.
 *
 * IMPORTANT DATA MODEL:
 * - Catalogue item IDs are VARIANTS / measurements / specifications.
 * - They are NOT 749 separate product cards.
 * - `products` contains real product families such as `EMT CLAMP 1 HOLE`.
 * - `variants` contains size/spec options such as `1/2'' UL`, `3/4'' CH`, etc.
 * - `fullTitle` keeps the exact official catalogue wording for search/reference.
 * - Variant images still follow the supplied catalogue-image mapping.
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
  /** Official catalogue SR.NO. */
  id: number;
  code: string;
  /** Only the selectable size / model / measurement / specification. */
  specification: string;
  /** Exact official catalogue item description. */
  fullTitle: string;
  /** Kept for backward compatibility with existing UI/search code. */
  title: string;
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  /** Product-family name shown on the product card. */
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

type CatalogueItem = Readonly<{ id: number; title: string }>;
type ImageRange = Readonly<{
  start: number;
  end: number;
  image: string;
  mainCategory: MainCategory;
}>;
type ProductGroup = Readonly<{
  id: string;
  slug: string;
  title: string;
  variantIds: readonly number[];
  featured?: boolean;
}>;

const catalogue: readonly CatalogueItem[] = [
  { id: 1, title: "EMT CONDUIT PIPE 1/2''" },
  { id: 2, title: "EMT CONDUIT PIPE 3/4'' CHINA" },
  { id: 3, title: "EMT CONDUIT PIPE 3/4'' ZINC TECH KSA" },
  { id: 4, title: "EMT CONDUIT PIPE 1''" },
  { id: 5, title: "EMT CONDUIT PIPE 1-1/4''" },
  { id: 6, title: "EMT CONDUIT PIPE 1-1/2''" },
  { id: 7, title: "EMT CONDUIT PIPE 2''" },
  { id: 8, title: "EMT CONDUIT PIPE 2-1/2''" },
  { id: 9, title: "EMT CONDUIT PIPE 3''" },
  { id: 10, title: "EMT BEND 1/2''" },
  { id: 11, title: "EMT BEND 3/4''" },
  { id: 12, title: "EMT BEND 1''" },
  { id: 13, title: "EMT BEND 1-1/4''" },
  { id: 14, title: "EMT BEND 1-1/2''" },
  { id: 15, title: "EMT BEND 2''" },
  { id: 16, title: "EMT CLAMP 1 HOLE 1/2'' UL" },
  { id: 17, title: "EMT CLAMP 1 HOLE 1/2'' CH" },
  { id: 18, title: "EMT CLAMP 1 HOLE 3/4'' UL" },
  { id: 19, title: "EMT CLAMP 1 HOLE 3/4'' CH" },
  { id: 20, title: "EMT CLAMP 1 HOLE 1'' UL" },
  { id: 21, title: "EMT CLAMP 1 HOLE 1'' CH" },
  { id: 22, title: "EMT CLAMP 1 HOLE 1-1/4''" },
  { id: 23, title: "EMT CLAMP 1 HOLE 1-1/2''" },
  { id: 24, title: "EMT CLAMP 1 HOLE 2''" },
  { id: 25, title: "EMT CLAMP 2 HOLE 1/2'' UL" },
  { id: 26, title: "EMT CLAMP 2 HOLE 1/2'' CH" },
  { id: 27, title: "EMT CLAMP 2 HOLE 3/4''" },
  { id: 28, title: "EMT CLAMP 2 HOLE 1''" },
  { id: 29, title: "EMT CLAMP 2 HOLE 1-1/4''" },
  { id: 30, title: "EMT CLAMP 2 HOLE 1-1/2''" },
  { id: 31, title: "EMT CLAMP 2 HOLE 2''" },
  { id: 32, title: "RIGID CLAMP 1 HOLE 3/4''" },
  { id: 33, title: "RIGID CLAMP 1 HOLE 1''" },
  { id: 34, title: "RIGID CLAMP 2 HOLE 3/4''" },
  { id: 35, title: "RIGID CLAMP 2 HOLE 1''" },
  { id: 36, title: "RIGID CLAMP 2 HOLE 2''" },
  { id: 37, title: "RIGID CLAMP 2 HOLE 2-1/2''" },
  { id: 38, title: "RIGID CONNECTOR 3/4'' HUB TYPE" },
  { id: 39, title: "RIGID CONNECTOR 1/2'' SCREW TYPE" },
  { id: 40, title: "RIGID CONNECTOR 3/4'' SCREW TYPE" },
  { id: 41, title: "RIGID CONNECTOR 1'' SCREW TYPE" },
  { id: 42, title: "RIGID CONNECTOR 1-1/4'' SCREW TYPE" },
  { id: 43, title: "RIGID CONNECTOR 1-1/2'' SCREW TYPE" },
  { id: 44, title: "RIGID CONNECTOR 2'' SCREW TYPE" },
  { id: 45, title: "RIGID COUPLING 3/4'' SCREW TYPE" },
  { id: 46, title: "RIGID COUPLING 1'' SCREW TYPE" },
  { id: 47, title: "REDUCER 3/4'' X 1/2''" },
  { id: 48, title: "REDUCER 1'' X 3/4''" },
  { id: 49, title: "REDUCER 1'' X 1/2''" },
  { id: 50, title: "EMT BOX 10X10 - 3/4'' HOLE" },
  { id: 51, title: "EMT BOX 10X10 - 1/2'' & 3/4'' HOLE 52151" },
  { id: 52, title: "EMT BOX 10X10-3/4\" HOLE 1.6 MM WITH GROUNDING SCREW ITCC MODEL" },
  { id: 53, title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE" },
  { id: 54, title: "EMT OCTOGONAL BOX 9X9 CM 3/4\" HOLE 1.5 MM THICKNESS ITCC MODEL" },
  { id: 55, title: "EMT BOX 10X10 CM DEEP 1\" HOLE 52171-1 STEEL CITY MODEL" },
  { id: 56, title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE 52171-3/4 STEEL CITY MODEL" },
  { id: 57, title: "EMT BOX 10X10 CM DEEP 1\" HOLE ITCC MODEL 52171-1" },
  { id: 58, title: "EMT BOX 10X10 CM DEEP 3/4\" HOLE ITCC MODEL 52171-3/4" },
  { id: 59, title: "EMT BOX 5X10-3/4\" HOLE" },
  { id: 60, title: "EMT BOX 5X10-3/4\" HOLE ITCC/STEEL CITY QUALITY WITH GROUNDING 1.6MM" },
  { id: 61, title: "RING BOX 7X7X3.5 CM HOLE" },
  { id: 62, title: "RING BOX 7X14X3.5 CM HOLE" },
  { id: 63, title: "RING BOX 9X9X1.6 CM HOLE" },
  { id: 64, title: "RING BOX 10X10 - 3/4'' HOLE" },
  { id: 65, title: "W/P BOX 5 HOLE 10X10 - 3/4''" },
  { id: 66, title: "W/P BOX 3 HOLE 10X10 - 3/4''" },
  { id: 67, title: "W/P BOX 5X10 CM 3/4\" HOLE 3 HOLE 1G75-3" },
  { id: 68, title: "W/P BOX 5X10 CM 1\" HOLE 3 HOLE 1G100-3" },
  { id: 69, title: "W/P DEEP BOX 5X10 CM 3/4\" HOLE 3 HOLE 1DG75-3" },
  { id: 70, title: "W/P DEEP BOX 5X10 CM 1\" HOLE 3 HOLE 1DG100-3" },
  { id: 71, title: "W/P BOX 10X10 CM 3/4\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G75-5X" },
  { id: 72, title: "W/P BOX 10X10 CM 1\" HOLE 5 HOLE ALL SIDE SINGLE HOLE 2G100-5X" },
  { id: 73, title: "W/P DEEP BOX 10X10 CM 3/4\" 5 HOLE 2DG75-5" },
  { id: 74, title: "W/P DEEP BOX 10X10 CM 1\" 5 HOLE 2DG100-5" },
  { id: 75, title: "W/P DEEP BOX 10X10 CM 1\" 7 HOLE 2DG100-7" },
  { id: 76, title: "W/P ROUND BOX 10X10 CM 3/4\" HOLE" },
  { id: 77, title: "W/P ROUND BOX COVER 10X10 CM UL" },
  { id: 78, title: "WATER PROOF COVER GREY 5X10 CM UL" },
  { id: 79, title: "WATER PROOF COVER GREY 10X10 CM UL" },
  { id: 80, title: "EMT BOX 15X15X10" },
  { id: 81, title: "EMT BOX 20X20X5" },
  { id: 82, title: "EMT BOX 20X20X10" },
  { id: 83, title: "EMT BOX 25X25X10" },
  { id: 84, title: "EMT BOX 30X30X5" },
  { id: 85, title: "EMT BOX 30X30X10" },
  { id: 86, title: "EMT BOX 40X40X10" },
  { id: 87, title: "C-CHANNEL 41X41X1.2 MM" },
  { id: 88, title: "C-CHANNEL 41X21X1.2 MM" },
  { id: 89, title: "C-CHANNEL 41X41X1.5 MM" },
  { id: 90, title: "C-CHANNEL 41X21X1.5 MM" },
  { id: 91, title: "C-CHANNEL 41X41X2 MM" },
  { id: 92, title: "C-CHANNEL 41X21X2 MM" },
  { id: 93, title: "EMT CHANNEL CLAMP 1/2''" },
  { id: 94, title: "EMT CHANNEL CLAMP 3/4''" },
  { id: 95, title: "EMT CHANNEL CLAMP 1''" },
  { id: 96, title: "EMT CHANNEL CLAMP 1-1/4''" },
  { id: 97, title: "EMT CHANNEL CLAMP 1-1/2''" },
  { id: 98, title: "EMT CHANNEL CLAMP 2''" },
  { id: 99, title: "THREAD ROD 8 MM X 3 MTR" },
  { id: 100, title: "THREAD ROD 10 MM X 3 MTR" },
  { id: 101, title: "THREAD ROD 12 MM X 3 MTR" },
  { id: 102, title: "BEAM CLAMP 8''" },
  { id: 103, title: "BEAM CLAMP 10''" },
  { id: 104, title: "BEAM CLAMP 12''" },
  { id: 105, title: "KNOCK OUT SEAL 1/2''" },
  { id: 106, title: "KNOCK OUT SEAL 3/4''" },
  { id: 107, title: "KNOCK OUT SEAL 1''" },
  { id: 108, title: "INSULATED BUSHING 1/2''" },
  { id: 109, title: "INSULATED BUSHING 3/4''" },
  { id: 110, title: "INSULATED BUSHING 1''" },
  { id: 111, title: "INSULATED BUSHING 1-1/4''" },
  { id: 112, title: "INSULATED BUSHING 1-1/2''" },
  { id: 113, title: "INSULATED BUSHING 2''" },
  { id: 114, title: "LIQUID TIGHT CONNECTOR 1/2''" },
  { id: 115, title: "LIQUID TIGHT CONNECTOR 3/4''" },
  { id: 116, title: "LIQUID TIGHT CONNECTOR 1''" },
  { id: 117, title: "LIQUID TIGHT CONNECTOR 1-1/4''" },
  { id: 118, title: "LIQUID TIGHT CONNECTOR 1-1/2''" },
  { id: 119, title: "LIQUID TIGHT CONNECTOR 2''" },
  { id: 120, title: "LIQUID TIGHT CONNECTOR 2-1/2''" },
  { id: 121, title: "LIQUID TIGHT CONNECTOR 3''" },
  { id: 122, title: "LIQUID TIGHT CONNECTOR 4''" },
  { id: 123, title: "LIQUID TIGHT FLEXIBLE COUPLING 3/4\" UL" },
  { id: 124, title: "LIQUID TIGHT FLEXIBLE COUPLING 1\" UL" },
  { id: 125, title: "EMT COMBINATION COUPLING 3/4''" },
  { id: 126, title: "EMT COMBINATION COUPLING 1''" },
  { id: 127, title: "COPPER CORNER COUPLING EMT TO EMT 3/4\" UL CCC-075" },
  { id: 128, title: "EMT HANGER CLAMP 3/4''" },
  { id: 129, title: "EMT HANGER CLAMP 1''" },
  { id: 130, title: "RIGID C-CHANNEL CLAMP 3/4''" },
  { id: 131, title: "RIGID C-CHANNEL CLAMP 1''" },
  { id: 132, title: "RIGID C-CHANNEL CLAMP 2''" },
  { id: 133, title: "RIGID C-CHANNEL CLAMP 2-1/2''" },
  { id: 134, title: "RIGID CHANNEL CLAMP 3''" },
  { id: 135, title: "RIGID CHANNEL CLAMP 4''" },
  { id: 136, title: "RIGID PULL ELBOW 3/4''" },
  { id: 137, title: "RIGID PULL ELBOW 1''" },
  { id: 138, title: "EMT PULL ELBOW 1/2''" },
  { id: 139, title: "EMT PULL ELBOW 3/4''" },
  { id: 140, title: "EMT PULL ELBOW 1''" },
  { id: 141, title: "EMT BENDER 1/2'' WITH HANDLE" },
  { id: 142, title: "EMT BENDER 3/4'' WITH HANDLE" },
  { id: 143, title: "EMT BENDER 1'' WITH HANDLE" },
  { id: 144, title: "EMT BENDER 3/4'' WITH HANDLE BLACK" },
  { id: 145, title: "RIGID BEND 3/4''" },
  { id: 146, title: "RIGID BEND 1''" },
  { id: 147, title: "RIGID BEND 2''" },
  { id: 148, title: "RIGID BEND 2-1/2''" },
  { id: 149, title: "END CAP 41X21" },
  { id: 150, title: "END CAP 41X41" },
  { id: 151, title: "PVC SPRING BENDER 20MM" },
  { id: 152, title: "PVC SPRING BENDER 25MM" },
  { id: 153, title: "PVC SPRING BENDER 32MM" },
  { id: 154, title: "RIGID BASE CLAMP 2 HOLE 3/4''" },
  { id: 155, title: "RIGID BASE CLAMP 2 HOLE 1''" },
  { id: 156, title: "PVC BOX 7X7 DEEP" },
  { id: 157, title: "PULLING WIRE MCS 30MM" },
  { id: 158, title: "PULLING WIRE MCS 60MM" },
  { id: 159, title: "PULLING WIRE MCS 80MM" },
  { id: 160, title: "PVC ADAPTOR FA 20MM" },
  { id: 161, title: "PVC ADAPTOR FA 25MM" },
  { id: 162, title: "PVC ADAPTOR FAFA 20MM" },
  { id: 163, title: "PVC ADAPTOR FAFA 25MM" },
  { id: 164, title: "PVC COUPLING 20MM" },
  { id: 165, title: "PVC COUPLING 25MM" },
  { id: 166, title: "PVC COUPLING 32MM" },
  { id: 167, title: "PVC COUPLING 50MM" },
  { id: 168, title: "PVC ADAPTOR 20MM" },
  { id: 169, title: "PVC ADAPTOR 25MM" },
  { id: 170, title: "PVC ADAPTOR 32MM" },
  { id: 171, title: "PVC ADAPTOR 50MM" },
  { id: 172, title: "PVC COUPLING 20 MM WHITE" },
  { id: 173, title: "PVC COUPLING 25 MM WHITE" },
  { id: 174, title: "PVC LONG BEND 20 MM BLACK" },
  { id: 175, title: "PVC BEND 25 MM BLACK" },
  { id: 176, title: "PVC BEND 32 MM BLACK" },
  { id: 177, title: "PVC BEND 50 MM BLACK" },
  { id: 178, title: "PVC SADLLE WITH BASE 25 MM BLACK" },
  { id: 179, title: "SUB DUCT COUPLING 32 MM FOR FR3" },
  { id: 180, title: "LIQUID TIGHT ANGLE CONNECTOR 1/2''" },
  { id: 181, title: "LIQUID TIGHT ANGLE CONNECTOR 3/4''" },
  { id: 182, title: "HOLE CLOSER 1/2''" },
  { id: 183, title: "HOLE CLOSER 3/4''" },
  { id: 184, title: "HOLE CLOSER 1''" },
  { id: 185, title: "STEEL FLEXIBLE ANGLE CONNECTOR 1/2''" },
  { id: 186, title: "STEEL FLEXIBLE ANGLE CONNECTOR 3/4''" },
  { id: 187, title: "RIGID COUPLING 1/2''" },
  { id: 188, title: "RIGID COUPLING 3/4''" },
  { id: 189, title: "RIGID COUPLING 1''" },
  { id: 190, title: "RIGID COUPLING 1-1/2''" },
  { id: 191, title: "RIGID COUPLING 2''" },
  { id: 192, title: "RIGID COUPLING 2-1/2''" },
  { id: 193, title: "EMT COMPRESSION CONNECTOR 3/4''" },
  { id: 194, title: "EMT COMPRESSION CONNECTOR 1''" },
  { id: 195, title: "EMT COMPRESSION CONNECTOR 2''" },
  { id: 196, title: "EMT COMPRESSION COUPLING 3/4''" },
  { id: 197, title: "EMT COMPRESSION COUPLING 1''" },
  { id: 198, title: "EMT COMPRESSION COUPLING 2''" },
  { id: 199, title: "ENLARGER 1/2'' - 3/4''" },
  { id: 200, title: "ENLARGER 1/2'' - 1''" },
  { id: 201, title: "ENLARGER 3/4'' - 1''" },
  { id: 202, title: "EMT COVER 10X10-3/4\" HOLE 1.6 MM ITCC QUALITY" },
  { id: 203, title: "EMT COVER 10X10-3/4\" HOLE" },
  { id: 204, title: "EMT COVER 9X9-3/4\" HOLE" },
  { id: 205, title: "EMT COVER 7X7 - 1/2'' HOLE" },
  { id: 206, title: "EMT COVER 7X7 - 3/4'' HOLE" },
  { id: 207, title: "PLASTIC GLAND M16" },
  { id: 208, title: "PLASTIC GLAND M20" },
  { id: 209, title: "PLASTIC GLAND M25" },
  { id: 210, title: "PLASTIC GLAND M32" },
  { id: 211, title: "INSULATOR 25MM" },
  { id: 212, title: "INSULATOR 35MM" },
  { id: 213, title: "INSULATOR 51MM" },
  { id: 214, title: "STEEL CABLE TIE 150MM" },
  { id: 215, title: "STEEL CABLE TIE 200MM" },
  { id: 216, title: "STEEL CABLE TIE 300MM" },
  { id: 217, title: "STEEL CABLE TIE 500MM" },
  { id: 218, title: "STEEL CABLE PVC COATED PSSCT 150X4.6 MM" },
  { id: 219, title: "STEEL CABLE PVC COATED PSSCT 200X4.6 MM" },
  { id: 220, title: "STEEL CABLE PVC COATED PSSCT 300X4.6 MM" },
  { id: 221, title: "CABLE MARKER STRIP MS-65 MM BLACK" },
  { id: 222, title: "CABLE MARKER STRIP MS-100 MM BLACK" },
  { id: 223, title: "CABLE MARKER STRIP MS-65 MM WHITE" },
  { id: 224, title: "CABLE MARKER STRIP MS-100 MM WHITE" },
  { id: 225, title: "TIE MOUNT TM-25 MM" },
  { id: 226, title: "TIE MOUNT TM-30 MM" },
  { id: 227, title: "PLASTIC CONNECTOR PC-10 MM" },
  { id: 228, title: "PLASTIC CONNECTOR PC-16 MM" },
  { id: 229, title: "PLASTIC CONNECTOR PC-25 MM" },
  { id: 230, title: "H type PLASTIC STRIP CONNECTOR 6MM WHITE HIGH QUALITY" },
  { id: 231, title: "H type PLASTIC STRIP CONNECTOR 10MM WHITE HIGH QUALITY" },
  { id: 232, title: "H type PLASTIC STRIP CONNECTOR 16MM WHITE HIGH QUALITY" },
  { id: 233, title: "H type PLASTIC STRIP CONNECTOR 25MM WHITE HIGH QUALITY" },
  { id: 234, title: "H type PLASTIC STRIP CONNECTOR 40MM BLACK" },
  { id: 235, title: "H type PLASTIC STRIP CONNECTOR 40MM BLACK HIGH QUALITY" },
  { id: 236, title: "GROUP HOLDER UBE/D" },
  { id: 237, title: "GROUP HOLDER UBE/D N" },
  { id: 238, title: "END STOPPER E/JUK" },
  { id: 239, title: "JUMBER LINK FLAT TYPE EB10-6" },
  { id: 240, title: "JUMBER LINK FLAT TYPE FBS 10- 6" },
  { id: 241, title: "WIRE CONNECTOR N102 (100PCS)" },
  { id: 242, title: "WIRE CONNECTOR N103 (100PCS)" },
  { id: 243, title: "WIRE CONNECTOR N104 (100PCS)" },
  { id: 244, title: "WIRE CONNECTOR N102-2 (100PCS)" },
  { id: 245, title: "WIRE CONNECTOR N103-2 (100PCS)" },
  { id: 246, title: "WIRE CONNECTOR N103-3 (100PCS)" },
  { id: 247, title: "WIRE NUT 6.7 MM GREY S-P1 [Bag 100pcs]" },
  { id: 248, title: "WIRE NUT 7.4 MM BLUE S-P2 [Bag 100pcs]" },
  { id: 249, title: "WIRE NUT 9.9 MM ORANGE S-P3 [Bag 100pcs]" },
  { id: 250, title: "WIRE NUT 11 MM YELLOW S-P4 [Bag 100pcs]" },
  { id: 251, title: "WIRE NUT 10.5 MM GREY S-P15 [Bag 100pcs]" },
  { id: 252, title: "WIRE NUT 12.8 MM BLUE S-P17 [Bag 100pcs]" },
  { id: 253, title: "CABLE MARKER ECA-0 MIX (0-9)" },
  { id: 254, title: "CABLE MARKER ECA-1 MIX (0-9)" },
  { id: 255, title: "CABLE MARKER ECA-2 MIX (0-9)" },
  { id: 256, title: "CABLE MARKER ECA-3 MIX (0-9)" },
  { id: 257, title: "CABLE MARKER ECA-0 MIX (A-Z)" },
  { id: 258, title: "CABLE MARKER ECA-1 MIX (A-Z)" },
  { id: 259, title: "CABLE MARKER ECA-2 MIX (A-Z)" },
  { id: 260, title: "CABLE MARKER ECA-3 MIX (A-Z)" },
  { id: 261, title: "SPIRAL - 3MM" },
  { id: 262, title: "SPIRAL - 6MM" },
  { id: 263, title: "SPIRAL - 8MM" },
  { id: 264, title: "SPIRAL - 10MM" },
  { id: 265, title: "SPIRAL - 12MM" },
  { id: 266, title: "SPIRAL - 15MM" },
  { id: 267, title: "SPIRAL - 19MM" },
  { id: 268, title: "SPIRAL - 24MM" },
  { id: 269, title: "TERMINAL LUGS CRIMPER 1.5MM - 6MM TH-03C" },
  { id: 270, title: "TERMINAL LUGS CRIMPER 0.25MM - 6MM THC8 6-6" },
  { id: 271, title: "TERMINAL LUGS CRIMPER 0.25MM - 10MM THC8 6-4" },
  { id: 272, title: "BOOT LUGS CRIMPING TOOLS HSC8 6-6" },
  { id: 273, title: "BOOT LUGS CRIMPING TOOLS WMC10 16-6" },
  { id: 274, title: "BOOT LUGS CRIMPING TOOLS VSC9 10-6A HIGH QUALITY" },
  { id: 275, title: "TERMINAL LUGS CRIMPING TOOLS HS-30J" },
  { id: 276, title: "CABLE LUGS CRIMPING TOOLS (10-50MM) HX-50B" },
  { id: 277, title: "CABLE LUGS CRIMPING TOOLS (10-120MM) HX-120B" },
  { id: 278, title: "WIRE STRIPPER HS-D2" },
  { id: 279, title: "CAT-6 CABLE CRIMPING TOOL RJ-45" },
  { id: 280, title: "HYDRUALIC CRIMPING TOOLS 10-300 MM YQK-300" },
  { id: 281, title: "STEEL FLOOR BOX 2 SOCKET ONE FOR ELECTRIC ONE FOR DATA" },
  { id: 282, title: "STEEL FLOOR BOX 4 SOCKET TWO FOR ELECTRIC TWO FOR DATA" },
  { id: 283, title: "DIN RAIL 0.8 MM" },
  { id: 284, title: "DIN RAIL 1.0 MM" },
  { id: 285, title: "SHRINK TUBE 4.5 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 286, title: "SHRINK TUBE 6 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 287, title: "SHRINK TUBE 10 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 288, title: "SHRINK TUBE 12 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 289, title: "SHRINK TUBE 16 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 290, title: "SHRINK TUBE 20 MM - 100 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 291, title: "SHRINK TUBE 25 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 292, title: "SHRINK TUBE 30 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 293, title: "SHRINK TUBE 40 MM - 50 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 294, title: "SHRINK TUBE 50 MM - 25 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 295, title: "SHRINK TUBE 70 MM - 25 MTR/ROLL (RD/BLK/BL/YLW)" },
  { id: 296, title: "SHRINK TUBE 4.5 MM - 100 MTR/ROLL Y/G" },
  { id: 297, title: "SHRINK TUBE 6 MM - 100 MTR/ROLL Y/G" },
  { id: 298, title: "SHRINK TUBE 10 MM - 100 MTR/ROLL Y/G" },
  { id: 299, title: "SHRINK TUBE 12 MM - 100 MTR/ROLL Y/G" },
  { id: 300, title: "SHRINK TUBE 16 MM - 100 MTR/ROLL Y/G" },
  { id: 301, title: "SHRINK TUBE 20 MM - 100 MTR/ROLL Y/G" },
  { id: 302, title: "SHRINK TUBE 25 MM - 50 MTR/ROLL Y/G" },
  { id: 303, title: "SHRINK TUBE 30 MM - 50 MTR/ROLL Y/G" },
  { id: 304, title: "SHRINK TUBE 40 MM - 50 MTR/ROLL Y/G" },
  { id: 305, title: "SHRINK TUBE 50 MM - 25 MTR/ROLL Y/G" },
  { id: 306, title: "FERROLING MARKING TUBE 3.5 MM WHITE 200 MTR" },
  { id: 307, title: "FERROLING MARKING TUBE 3.5 MM RED 200 MTR" },
  { id: 308, title: "FERROLING MARKING TUBE 3.5 MM YELLOW 200 MTR" },
  { id: 309, title: "FERROLING MARKING TUBE 4 MM WHITE 200 MTR" },
  { id: 310, title: "FERROLING MARKING TUBE 4 MM RED 200 MTR" },
  { id: 311, title: "FERROLING MARKING TUBE 4 MM YELLOW 200 MTR" },
  { id: 312, title: "FERROLING MARKING TUBE 4.5 MM WHITE 200 MTR" },
  { id: 313, title: "FERROLING MARKING TUBE 4.5 MM RED 200 MTR" },
  { id: 314, title: "FERROLING MARKING TUBE 4.5 MM YELLOW 200 MTR" },
  { id: 315, title: "FERROLING MARKING TUBE 5.5 MM WHITE 100 MTR" },
  { id: 316, title: "FERROLING MARKING TUBE 5.5 MM RED 100 MTR" },
  { id: 317, title: "FERROLING MARKING TUBE 5.5 MM YELLOW 100 MTR" },
  { id: 318, title: "FERROLING MARKING TUBE 6.2 MM WHITE 100 MTR" },
  { id: 319, title: "FERROLING MARKING TUBE 6.2 MM RED 100 MTR" },
  { id: 320, title: "FERROLING MARKING TUBE 6.2 MM YELLOW 100 MTR" },
  { id: 321, title: "EARTH ROD 16MM X 1.2 MTR" },
  { id: 322, title: "EARTH ROD 16MM X 1.5 MTR" },
  { id: 323, title: "EARTH ROD 19MM X 1.5 MTR" },
  { id: 324, title: "EARTH ROD 19MM X 3 MTR" },
  { id: 325, title: "U BOLT CLAMP CR-705" },
  { id: 326, title: "COPPER CLAMP ONE HOLE CLIP 35 MM" },
  { id: 327, title: "COPPER CLAMP ONE HOLE CLIP 50 MM" },
  { id: 328, title: "COPPER CLAMP ONE HOLE CLIP 70 MM" },
  { id: 329, title: "COPPER CLAMP ONE HOLE CLIP 120 MM" },
  { id: 330, title: "COPPER BONDED EARTH PLATE 50X50X3" },
  { id: 331, title: "EARTH ROD CLAMP O TYPE 5/8'' - 16MM" },
  { id: 332, title: "EARTH ROD CLAMP G TYPE 5/8'' - 16MM" },
  { id: 333, title: "EARTH ROD CLAMP G TYPE 3/4'' - 19MM" },
  { id: 334, title: "BRASS AIR BASE ROUND WITH COPPER PLATING 5/8\" SD-105" },
  { id: 335, title: "BRASS MULTI POINT ROUND WITH COPPER PLATING 5/8\" RS-600 INDIA" },
  { id: 336, title: "NEUTRAL LINK 6 MM (SMALL SIZE)" },
  { id: 337, title: "EMT CONNECTOR W/UL MARK 1/2'' UL" },
  { id: 338, title: "EMT CONNECTOR W/UL MARK 1/2'' CH" },
  { id: 339, title: "EMT CONNECTOR W/UL MARK 3/4'' UL" },
  { id: 340, title: "EMT CONNECTOR W/UL MARK 3/4'' CH" },
  { id: 341, title: "EMT CONNECTOR W/UL MARK 1''" },
  { id: 342, title: "EMT CONNECTOR W/UL MARK 1-1/4''" },
  { id: 343, title: "EMT CONNECTOR W/UL MARK 2''" },
  { id: 344, title: "EMT CONNECTOR W/UL MARK 2-1/2''" },
  { id: 345, title: "EMT CONNECTOR W/UL MARK 3''" },
  { id: 346, title: "EMT COUPLING W/UL MARK 1/2'' UL" },
  { id: 347, title: "EMT COUPLING W/UL MARK 1/2'' CH" },
  { id: 348, title: "EMT COUPLING W/UL MARK 3/4'' UL" },
  { id: 349, title: "EMT COUPLING W/UL MARK 3/4'' CH" },
  { id: 350, title: "EMT COUPLING W/UL MARK 1''" },
  { id: 351, title: "EMT COUPLING W/UL MARK 1-1/2''" },
  { id: 352, title: "EMT COUPLING W/UL MARK 2''" },
  { id: 353, title: "EMT COUPLING W/UL MARK 2-1/2''" },
  { id: 354, title: "EMT COUPLING W/UL MARK 3''" },
  { id: 355, title: "EMT STEEL FLEXIBLE CONNECTOR 1/2''" },
  { id: 356, title: "EMT STEEL FLEXIBLE CONNECTOR 3/4''" },
  { id: 357, title: "EMT STEEL FLEXIBLE CONNECTOR 1''" },
  { id: 358, title: "EMT STEEL FLEXIBLE CONNECTOR 1-1/2''" },
  { id: 359, title: "EMT STEEL FLEXIBLE CONNECTOR 2''" },
  { id: 360, title: "EMT STEEL FLEXIBLE CONNECTOR 1/2'' UL ITCC QUALITY" },
  { id: 361, title: "EMT STEEL FLEXIBLE CONNECTOR 3/4'' UL ITCC QUALITY" },
  { id: 362, title: "ZINC LOCKNUT 1/2''" },
  { id: 363, title: "ZINC LOCKNUT 3/4''" },
  { id: 364, title: "ZINC LOCKNUT 1''" },
  { id: 365, title: "ZINC LOCKNUT 2''" },
  { id: 366, title: "CHASE NIPPLE 3/4\" ZINC DIE CAST" },
  { id: 367, title: "CHASE NIPPLE 1\" ZINC DIE CAST" },
  { id: 368, title: "PVC MCB BREAKER BOX 5 WAY HT-2" },
  { id: 369, title: "PVC MCB BREAKER BOX 5 WAY HT-5" },
  { id: 370, title: "PVC MCB BREAKER BOX 8 WAY HT-8" },
  { id: 371, title: "PVC MCB BREAKER BOX 12 WAY HT-12" },
  { id: 372, title: "ANGLE L TYPE 2 HOLE" },
  { id: 373, title: "ANGLE L TYPE 4 HOLE" },
  { id: 376, title: "CABLE LUGS 6-6" },
  { id: 377, title: "CABLE LUGS 6-8" },
  { id: 378, title: "CABLE LUGS 6-10" },
  { id: 379, title: "CABLE LUGS 10-6" },
  { id: 380, title: "CABLE LUGS 10-8" },
  { id: 381, title: "CABLE LUGS 10-10" },
  { id: 382, title: "CABLE LUGS 16-8" },
  { id: 383, title: "CABLE LUGS 16-10" },
  { id: 384, title: "CABLE LUGS 16-12" },
  { id: 385, title: "CABLE LUGS 25-8" },
  { id: 386, title: "CABLE LUGS 25-10" },
  { id: 387, title: "CABLE LUGS 25-12" },
  { id: 388, title: "CABLE LUGS 35-8 (ECONOMIC)" },
  { id: 389, title: "CABLE LUGS 35-10 (ECONOMIC)" },
  { id: 390, title: "CABLE LUGS 35-12 (ECONOMIC)" },
  { id: 391, title: "CABLE LUGS 50-8 (ECONOMIC)" },
  { id: 392, title: "CABLE LUGS 50-10 (ECONOMIC)" },
  { id: 393, title: "CABLE LUGS 50-12 (ECONOMIC)" },
  { id: 394, title: "CABLE LUGS 70-8 (ECONOMIC)" },
  { id: 395, title: "CABLE LUGS 70-10 (ECONOMIC)" },
  { id: 396, title: "CABLE LUGS 70-12 (ECONOMIC)" },
  { id: 397, title: "CABLE LUGS 95-8 (ECONOMIC)" },
  { id: 398, title: "CABLE LUGS 95-10 (ECONOMIC)" },
  { id: 399, title: "CABLE LUGS 95-12 (ECONOMIC)" },
  { id: 400, title: "CABLE LUGS 120-8 (ECONOMIC)" },
  { id: 401, title: "CABLE LUGS 120-10 (ECONOMIC)" },
  { id: 402, title: "CABLE LUGS 120-12 (ECONOMIC)" },
  { id: 403, title: "CABLE LUGS 150-10 (ECONOMIC)" },
  { id: 404, title: "CABLE LUGS 150-12 (ECONOMIC)" },
  { id: 405, title: "CABLE LUGS 185-10 (ECONOMIC)" },
  { id: 406, title: "CABLE LUGS 185-12 (ECONOMIC)" },
  { id: 407, title: "CABLE LUGS 240-10 (ECONOMIC)" },
  { id: 408, title: "CABLE LUGS 240-12 (ECONOMIC)" },
  { id: 409, title: "CABLE LUGS 240-14 (ECONOMIC)" },
  { id: 410, title: "CABLE LUGS 240-16 (ECONOMIC)" },
  { id: 411, title: "CABLE LUGS 300-10 (ECONOMIC)" },
  { id: 412, title: "CABLE LUGS 300-12 (ECONOMIC)" },
  { id: 413, title: "CABLE LUGS 300-14 (ECONOMIC)" },
  { id: 414, title: "CABLE LUGS 300-16 (ECONOMIC)" },
  { id: 415, title: "CABLE LUGS 630-12 (ECONOMIC)" },
  { id: 416, title: "CABLE LUGS 630-14 (ECONOMIC)" },
  { id: 417, title: "PIN TYPE LUGS 10 MM - FLAT TYPE" },
  { id: 418, title: "PIN TYPE LUGS 16 MM - FLAT TYPE" },
  { id: 419, title: "PIN TYPE LUGS 25 MM - FLAT TYPE" },
  { id: 420, title: "PIN TYPE LUGS 35 MM - FLAT TYPE" },
  { id: 421, title: "PIN TYPE LUGS 50 MM - FLAT TYPE" },
  { id: 422, title: "PIN TYPE LUGS 70 MM - FLAT TYPE" },
  { id: 423, title: "PIN TYPE LUGS 95 MM - FLAT TYPE" },
  { id: 424, title: "CABLE LUGS 240/12 (STANDARD)" },
  { id: 425, title: "CABLE LUGS 300/12 (STANDARD)" },
  { id: 426, title: "CABLE LUGS 16-10 MM 2 HOLE" },
  { id: 427, title: "CABLE LUGS 25-10 MM 2 HOLE" },
  { id: 428, title: "CABLE LUGS 35-10 MM 2 HOLE" },
  { id: 429, title: "CABLE LUGS 50-10 MM 2 HOLE" },
  { id: 430, title: "CABLE LUGS 70-10 MM 2 HOLE" },
  { id: 431, title: "CABLE LUGS 95-10 MM 2 HOLE" },
  { id: 432, title: "CABLE LUGS 120-12 MM 2 HOLE" },
  { id: 433, title: "CABLE LUGS 150-12 MM 2 HOLE" },
  { id: 434, title: "CABLE LUGS 185-12 MM 2 HOLE" },
  { id: 435, title: "CABLE LUGS 240-12 MM 2 HOLE" },
  { id: 436, title: "CABLE LUGS 300-12 MM 2 HOLE" },
  { id: 437, title: "CABLE LUGS 240-12 MM 4 HOLE" },
  { id: 438, title: "CABLE LUGS 300-12 MM 4 HOLE" },
  { id: 439, title: "CABLE LUGS 400-14 MM 4 HOLE" },
  { id: 440, title: "CABLE LUGS 500-14 MM 4 HOLE" },
  { id: 441, title: "CABLE LUGS 630/14 MM 4 HOLE HOLE TO HOLE 45 MM NEMA PAD" },
  { id: 442, title: "ALUMINIUM CABLE LUGS 70-12 MM TIN PLATING" },
  { id: 443, title: "MCB BREAKER CABLE LUGS 35-6 MM" },
  { id: 444, title: "MCB BREAKER CABLE LUGS 50-6 MM" },
  { id: 445, title: "MCB BREAKER CABLE LUGS 50-8 MM" },
  { id: 446, title: "MCB BREAKER CABLE LUGS 70-6 MM" },
  { id: 447, title: "MCB BREAKER CABLE LUGS 70-8 MM" },
  { id: 448, title: "MCB BREAKER CABLE LUGS 70-10 MM" },
  { id: 449, title: "MCB BREAKER CABLE LUGS 95-8 MM" },
  { id: 450, title: "MCB BREAKER CABLE LUGS 95-10 MM" },
  { id: 451, title: "MCB BREAKER CABLE LUGS 120-8 MM" },
  { id: 452, title: "MCB BREAKER CABLE LUGS 120-10 MM" },
  { id: 453, title: "MCB BREAKER CABLE LUGS 185-10 MM" },
  { id: 454, title: "MCB BREAKER CABLE LUGS 240-10 MM" },
  { id: 455, title: "MCB BREAKER CABLE LUGS 3000-10 MM" },
  { id: 456, title: "BIMETALIC CABLE LUGS DTL-2-10-10" },
  { id: 457, title: "BIMETALIC CABLE LUGS DTL-2-16-10" },
  { id: 458, title: "BIMETALIC CABLE LUGS DTL-2-16-12" },
  { id: 459, title: "BIMETALIC CABLE LUGS DTL-2-25-10" },
  { id: 460, title: "BIMETALIC CABLE LUGS DTL-2-25-12" },
  { id: 461, title: "BIMETALIC CABLE LUGS DTL-2-35-10" },
  { id: 462, title: "BIMETALIC CABLE LUGS DTL-2-35-12" },
  { id: 463, title: "BIMETALIC CABLE LUGS DTL-2-50-10" },
  { id: 464, title: "BIMETALIC CABLE LUGS DTL-2-50-12" },
  { id: 465, title: "BIMETALIC CABLE LUGS DTL-2-70-10" },
  { id: 466, title: "BIMETALIC CABLE LUGS DTL-2-70-12" },
  { id: 467, title: "BIMETALIC CABLE LUGS DTL-2-95-10" },
  { id: 468, title: "BIMETALIC CABLE LUGS DTL-2-95-12" },
  { id: 469, title: "BIMETALIC CABLE LUGS DTL-2-120-12" },
  { id: 470, title: "BIMETALIC CABLE LUGS DTL-2-150-12" },
  { id: 471, title: "BIMETALIC CABLE LUGS DTL-2-185-12" },
  { id: 472, title: "BIMETALIC CABLE LUGS DTL-2-240-12" },
  { id: 473, title: "BIMETALIC CABLE LUGS DTL-2-300-12" },
  { id: 474, title: "BIMETALIC CABLE LUGS DTL-2-400-12" },
  { id: 475, title: "BIMETALIC CABLE LUGS DTL-2-500-12" },
  { id: 476, title: "BIMETALIC CABLE LUGS DTL-2-600-14" },
  { id: 477, title: "COMPRESSION SLEEVE LUGS 10 MM HC-10L" },
  { id: 478, title: "COMPRESSION SLEEVE LUGS 16 MM HC-16L" },
  { id: 479, title: "COMPRESSION SLEEVE LUGS 25 MM HC-25L" },
  { id: 480, title: "COMPRESSION SLEEVE LUGS 35 MM HC-35L" },
  { id: 481, title: "COMPRESSION SLEEVE LUGS 50 MM HC-50L" },
  { id: 482, title: "COMPRESSION SLEEVE LUGS 70 MM HC-70L" },
  { id: 483, title: "COMPRESSION SLEEVE LUGS 95 MM HC-95L" },
  { id: 484, title: "COMPRESSION SLEEVE LUGS 120 MM HC-120L" },
  { id: 485, title: "COMPRESSION SLEEVE LUGS 150 MM HC-150L" },
  { id: 486, title: "COMPRESSION SLEEVE LUGS 185 MM HC-185L" },
  { id: 487, title: "COMPRESSION SLEEVE LUGS 240 MM HC-240L" },
  { id: 488, title: "COMPRESSION SLEEVE LUGS 300 MM HC-300L" },
  { id: 489, title: "BRASS CABLE GLAND A2 - 20L" },
  { id: 490, title: "BRASS CABLE GLAND A2 - 20S" },
  { id: 491, title: "BRASS CABLE GLAND A2 - 25S" },
  { id: 492, title: "BRASS CABLE GLAND A2 - 25L" },
  { id: 493, title: "BRASS CABLE GLAND A2 - 32S" },
  { id: 494, title: "BRASS CABLE GLAND A2 - 32L" },
  { id: 495, title: "BRASS CABLE GLAND A2 - 40S" },
  { id: 496, title: "BRASS CABLE GLAND A2 - 40L" },
  { id: 497, title: "BRASS CABLE GLAND A2 - 50S" },
  { id: 498, title: "BRASS CABLE GLAND A2 - 50L" },
  { id: 499, title: "BRASS CABLE GLAND A2 - 63S" },
  { id: 500, title: "BRASS CABLE GLAND A2 - 63L" },
  { id: 501, title: "BRASS CABLE GLAND A2 - 75S" },
  { id: 502, title: "BRASS CABLE GLAND A2 - 75L" },
  { id: 503, title: "BRASS CABLE GLAND CW - 20L" },
  { id: 504, title: "BRASS CABLE GLAND CW - 20S" },
  { id: 505, title: "BRASS CABLE GLAND CW - 25L" },
  { id: 506, title: "BRASS CABLE GLAND CW - 25S" },
  { id: 507, title: "BRASS CABLE GLAND CW - 32L" },
  { id: 508, title: "BRASS CABLE GLAND CW - 32S" },
  { id: 509, title: "BRASS CABLE GLAND CW - 40S" },
  { id: 510, title: "BRASS CABLE GLAND CW - 40L" },
  { id: 511, title: "BRASS CABLE GLAND CW - 50S" },
  { id: 512, title: "BRASS CABLE GLAND CW - 50L" },
  { id: 513, title: "BRASS CABLE GLAND CW - 63S" },
  { id: 514, title: "BRASS CABLE GLAND CW - 63L" },
  { id: 515, title: "BRASS CABLE GLAND CW - 75S" },
  { id: 516, title: "BRASS CABLE GLAND CW - 75L" },
  { id: 517, title: "BRASS SS CABLE GLAND M16X1.5" },
  { id: 518, title: "BRASS SS CABLE GLAND M20X1.5" },
  { id: 519, title: "BRASS SS CABLE GLAND M25X1.5" },
  { id: 520, title: "BRASS SS CABLE GLAND M32X1.5" },
  { id: 521, title: "BRASS SS CABLE GLAND PG-13.5" },
  { id: 522, title: "BRASS SS CABLE GLAND PG-16" },
  { id: 523, title: "BRASS SS CABLE GLAND PG-21" },
  { id: 524, title: "EMT FLEXIBLE HOSE 1/2'' UP" },
  { id: 525, title: "EMT FLEXIBLE HOSE 3/4'' UP" },
  { id: 526, title: "EMT FLEXIBLE HOSE 1/2'' CH" },
  { id: 527, title: "EMT FLEXIBLE HOSE 3/4'' CH" },
  { id: 528, title: "EMT FLEXIBLE HOSE 1''" },
  { id: 529, title: "EMT FLEXIBLE HOSE 1-1/4''" },
  { id: 530, title: "EMT FLEXIBLE HOSE 1-1/2''" },
  { id: 531, title: "EMT FLEXIBLE HOSE 2''" },
  { id: 532, title: "EMT FLEXIBLE 3/4\" UL LISTED 30 MTR VISION PANASONIC QUALITY" },
  { id: 533, title: "EMT FLEXIBLE 1/2\" UL LISTED 30 MTR VISION PANASONIC QUALITY" },
  { id: 534, title: "EMT FLEXIBLE 1\" UL LISTED 15 MTR VISION PANASONIC QUALITY" },
  { id: 535, title: "LIQUID TIGHT FLEXIBLE HOSE 1/2\"" },
  { id: 536, title: "LIQUID TIGHT FLEXIBLE HOSE 3/4\"" },
  { id: 537, title: "LIQUID TIGHT FLEXIBLE HOSE 1/2\" VISION GOOD QUALITY" },
  { id: 538, title: "LIQUID TIGHT FLEXIBLE HOSE 3/4\" VISION GOOD QUALITY" },
  { id: 539, title: "LIQUID TIGHT FLEXIBLE HOSE 1\"" },
  { id: 540, title: "LIQUID TIGHT FLEXIBLE HOSE 1-1/4\"" },
  { id: 541, title: "LIQUID TIGHT FLEXIBLE HOSE 1-1/2\"" },
  { id: 542, title: "LIQUID TIGHT FLEXIBLE HOSE 2\"" },
  { id: 543, title: "LIQUID TIGHT FLEXIBLE HOSE 2-1/2\"" },
  { id: 544, title: "LIQUID TIGHT FLEXIBLE HOSE 3\"" },
  { id: 545, title: "LIQUID TIGHT FLEXIBLE HOSE 4\"" },
  { id: 546, title: "CAT - 6 CABLE BELDEN COPY 9565" },
  { id: 547, title: "FIRE ALARM CABLE 16 AWG" },
  { id: 548, title: "FTTH WIFI FIBER CABLE 4 CORE 2000 MTR WHITE" },
  { id: 549, title: "PVC FLEXIBLE HOSE ORANGE 50 MTR FR3 TURKIYE - FIRE RETARDANT 25MM" },
  { id: 550, title: "PVC FLEXIBLE HOSE ORANGE 50 MTR FR3 TURKIYE - FIRE RETARDANT 32MM" },
  { id: 551, title: "RIGID COMPRESSION CONNECTOR 3/4'' ITCC MODEL" },
  { id: 552, title: "RIGID COMPRESSION CONNECTOR 1'' ITCC MODEL" },
  { id: 553, title: "RIGID COMPRESSION CONNECTOR 2'' ITCC MODEL" },
  { id: 554, title: "RIGID COMPRESSION COUPLING 3/4'' ITCC MODEL" },
  { id: 555, title: "RIGID COMPRESSION COUPLING 1'' ITCC MODEL" },
  { id: 556, title: "PVC TRUNKING WHITE WITH RED STICKER 16X16 MM" },
  { id: 557, title: "PVC TRUNKING WHITE WITH RED STICKER 25X16 MM" },
  { id: 558, title: "PVC TRUNKING 25X25 MM 3 MTR WHITE" },
  { id: 559, title: "PVC TRUNKING 38X25 MM 3 MTR WHITE" },
  { id: 560, title: "PVC TRUNKING 50X50 MM 3 MTR WHITE" },
  { id: 561, title: "PVC TRUNKING 75X50 MM 3 MTR WHITE" },
  { id: 562, title: "PVC TRUNKING 75X75 MM 3 MTR WHITE" },
  { id: 563, title: "PVC TRUNKING 100X50 MM 3 MTR WHITE" },
  { id: 564, title: "PVC TRUNKING 100X100 MM 3 MTR WHITE" },
  { id: 565, title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 25X10 MM" },
  { id: 566, title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 35X15 MM" },
  { id: 567, title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 50X15 MM" },
  { id: 568, title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 70X20 MM" },
  { id: 569, title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER 100X30 MM" },
  { id: 570, title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 25X10 MM" },
  { id: 571, title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 35X15 MM" },
  { id: 572, title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 50X15 MM" },
  { id: 573, title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 70X20 MM" },
  { id: 574, title: "PVC FLOOR TRUNKING GREY WITH RED STICKER 100X30 MM" },
  { id: 575, title: "PVC SLOTED TRUNKING 30HX30W 2 MTR GREY" },
  { id: 576, title: "PVC SLOTED TRUNKING 40HX30W 2 MTR GREY" },
  { id: 577, title: "PVC SLOTED TRUNKING 40HX40W 2 MTR GREY" },
  { id: 578, title: "PVC SLOTED TRUNKING 50HX50W 2 MTR GREY" },
  { id: 579, title: "PVC SLOTED TRUNKING 60HX40W 2 MTR GREY" },
  { id: 580, title: "PVC SLOTED TRUNKING 60HX60W 2 MTR GREY" },
  { id: 581, title: "PVC SLOTED TRUNKING 100HX60W 2 MTR GREY" },
  { id: 582, title: "PVC SLOTED TRUNKING 100HX100W 2 MTR GREY" },
  { id: 583, title: "PVC JUNCTION BOX 3 WAY 20 MM BLACK" },
  { id: 584, title: "PVC JUNCTION BOX 3 WAY 25 MM BLACK" },
  { id: 585, title: "PVC JUNCTION BOX 4 WAY 20 MM BLACK" },
  { id: 586, title: "PVC JUNCTION BOX 4 WAY 25 MM BLACK" },
  { id: 587, title: "CABLE TIE 100X2.5 MM BLACK PKT 100 PCS V-100B" },
  { id: 588, title: "CABLE TIE 100X2.5 MM NATURAL PKT 100 PCS V-100W" },
  { id: 589, title: "CABLE TIE 150X2.5 MM BLACK PKT 100 PCS V-150B" },
  { id: 590, title: "CABLE TIE 150X2.5 MM NATURAL PKT 100 PCS V-150W" },
  { id: 591, title: "CABLE TIE 200X3.6 MM BLACK PKT 100 PCS V-200B" },
  { id: 592, title: "CABLE TIE 200X3.6 MM NATURAL PKT 100 PCS V-200W" },
  { id: 593, title: "CABLE TIE 200X4.8 MM NATURAL PKT 100 PCS V-200W" },
  { id: 594, title: "CABLE TIE 250X3.6 MM BLACK PKT 100 PCS V-250B" },
  { id: 595, title: "CABLE TIE 250X3.6 MM NATURAL PKT 100 PCS V-250W" },
  { id: 596, title: "CABLE TIE 300X4.8 MM BLACK PKT 100 PCS V-300B" },
  { id: 597, title: "CABLE TIE 300X4.8 MM NATURAL PKT 100 PCS V-300W" },
  { id: 598, title: "CABLE TIE 300X7.6 MM BLACK PKT 100 PCS V-300B" },
  { id: 599, title: "CABLE TIE 300X7.6 MM NATURAL PKT 100 PCS V-300W" },
  { id: 600, title: "CABLE TIE 370X4.8 MM BLACK PKT 100 PCS V-370B" },
  { id: 601, title: "CABLE TIE 370X4.8 MM NATURAL PKT 100 PCS V-370W" },
  { id: 602, title: "CABLE TIE 432X4.8 MM BLACK PKT 100 PCS V-432B" },
  { id: 603, title: "CABLE TIE 432X4.8 MM NATURAL PKT 100 PCS V-432W" },
  { id: 604, title: "CABLE TIE 450X7.6 MM BLACK PKT 100 PCS V-450B" },
  { id: 605, title: "CABLE TIE 450X7.6 MM NATURAL PKT 100 PCS V-450W" },
  { id: 606, title: "CABLE TIE 550X7.6 MM BLACK PKT 100 PCS V-550B" },
  { id: 607, title: "CABLE TIE 550X7.6 MM NATURAL PKT 100 PCS V-550W" },
  { id: 608, title: "CONDUIT BODY 3/4\" LB ALUMINUIM THREAD TYPE UL" },
  { id: 609, title: "CONDUIT BODY 3/4\" LL ALUMINUIM THREAD TYPE UL" },
  { id: 610, title: "CONDUIT BODY 3/4\" LR ALUMINUIM THREAD TYPE UL" },
  { id: 611, title: "CONDUIT BODY 1\" LB ALUMINUIM THREAD TYPE UL" },
  { id: 612, title: "CONDUIT BODY 1\" LR ALUMINUIM THREAD TYPE UL" },
  { id: 613, title: "CONDUIT BODY 1\" LL ALUMINUIM THREAD TYPE UL" },
  { id: 614, title: "ALUMINIUM CONDUIT BODY (T TYPE) 3/4\"" },
  { id: 615, title: "ALUMINIUM CONDUIT BODY (T TYPE) 1\"" },
  { id: 616, title: "RIGID/EMT CONDUIT BODY 3/4\" LB" },
  { id: 617, title: "RIGID/EMT CONDUIT BODY 3/4\" LL" },
  { id: 618, title: "RIGID/EMT CONDUIT BODY 3/4\" LR" },
  { id: 619, title: "RIGID CONDUIT BODY (TB TYPE) 3/4\" UL" },
  { id: 620, title: "RIGID/EMT CONDUIT BODY 1\" LB" },
  { id: 621, title: "RIGID/EMT CONDUIT BODY 1\" LL" },
  { id: 622, title: "RIGID/EMT CONDUIT BODY 1\" LR" },
  { id: 623, title: "RIGID CONDUIT BODY (TB TYPE) 1\" UL" },
  { id: 624, title: "ELECTRICAL CABLE ROLLER 150 MM" },
  { id: 625, title: "ELECTRICAL CABLE ROLLER 3 WAY" },
  { id: 626, title: "WATERPROOF STEEL ENCLOUSER BOX 20X20X15 CM" },
  { id: 627, title: "WATERPROOF STEEL ENCLOUSER BOX 25X20X15 CM" },
  { id: 628, title: "WATERPROOF STEEL ENCLOUSER BOX 30X25X15 CM" },
  { id: 629, title: "WATERPROOF STEEL ENCLOUSER BOX 40X30X15 CM" },
  { id: 630, title: "WATERPROOF STEEL ENCLOUSER BOX 40X30X20 CM" },
  { id: 631, title: "WATERPROOF STEEL ENCLOUSER BOX 40X40X15 CM" },
  { id: 632, title: "WATERPROOF STEEL ENCLOUSER BOX 50X40X20 CM" },
  { id: 633, title: "WATERPROOF STEEL ENCLOUSER BOX 60X40X15 CM" },
  { id: 634, title: "WATERPROOF STEEL ENCLOUSER BOX 60X40X20 CM" },
  { id: 635, title: "WATERPROOF STEEL ENCLOUSER BOX 70X50X20 CM" },
  { id: 636, title: "WATERPROOF STEEL ENCLOUSER BOX 80X60X20 CM" },
  { id: 637, title: "WATERPROOF STEEL ENCLOUSER BOX 80X60X25 CM" },
  { id: 638, title: "DISCONNECTOR UKF 20A 3POLE" },
  { id: 639, title: "DISCONNECTOR UKF 32A 3POLE" },
  { id: 640, title: "DISCONNECTOR UKF 63A 3POLE" },
  { id: 641, title: "W/P SOCKET BOX BG-1 WITHOUT SOCKET" },
  { id: 642, title: "W/P SOCKET BOX BG-1 WITH SOCKET" },
  { id: 643, title: "W/P SOCKET BOX BG-2 WITHOUT SOCKET" },
  { id: 644, title: "W/P SOCKET BOX BG-2 WITH SOCKET" },
  { id: 645, title: "WATERPROOF PVC BOX 80X80X5 CM" },
  { id: 646, title: "WATERPROOF PVC BOX 10X10X7 CM" },
  { id: 647, title: "WATERPROOF PVC BOX 15X15X7 CM" },
  { id: 648, title: "WATERPROOF PVC BOX 20X20X8 CM" },
  { id: 649, title: "WATERPROOF PVC BOX 25X20X8 CM" },
  { id: 650, title: "WATERPROOF PVC BOX 30X25X12 CM" },
  { id: 651, title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 12 MM WHITE" },
  { id: 652, title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 16 MM WHITE/BLACK" },
  { id: 653, title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 20 MM WHITE/BLACK" },
  { id: 654, title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 25 MM WHITE/BLACK" },
  { id: 655, title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 32 MM WHITE/BLACK" },
  { id: 656, title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE 50 MM WHITE/BLACK" },
  { id: 657, title: "PLASTIC CABLE GLAND PG-7 WHITE" },
  { id: 658, title: "PLASTIC CABLE GLAND PG-11 WHITE" },
  { id: 659, title: "PLASTIC CABLE GLAND PG-13.5 WHITE" },
  { id: 660, title: "PLASTIC CABLE GLAND PG-16 WHITE" },
  { id: 661, title: "PLASTIC CABLE GLAND PG-21 WHITE" },
  { id: 662, title: "PLASTIC CABLE GLAND PG-25 WHITE" },
  { id: 663, title: "PLASTIC CABLE GLAND PG-29 WHITE" },
  { id: 664, title: "PLASTIC CABLE GLAND PG-36 WHITE" },
  { id: 665, title: "PLASTIC CABLE GLAND PG-42 WHITE" },
  { id: 666, title: "PLASTIC CABLE GLAND PG-48 WHITE" },
  { id: 667, title: "PLASTIC CABLE GLAND PG-63 WHITE" },
  { id: 668, title: "HOOK TYPE LUGS 1.5 MM LB1-3V (RF-PPL30) TAIWAN" },
  { id: 669, title: "HOOK TYPE LUGS 2.5 MM LB2-3V (BF-PPL30) TAIWAN" },
  { id: 670, title: "HOOK TYPE LUGS 4-6 MM LB5-3V (GF-PPL30) TAIWAN" },
  { id: 671, title: "FLAT BLADE TYPE 1.5 MM BT1-14SV (RF-PP12/23) TAIWAN" },
  { id: 672, title: "FLAT BLADE TYPE 1.5 MM BT1-18V (RF-PP16/23) TAIWAN" },
  { id: 673, title: "FLAT BLADE TYPE 2.5 MM BT2-13V (BF-PP12/25) TAIWAN" },
  { id: 674, title: "FLAT BLADE TYPE 2.5 MM BT2-18V (BF-PP16/25) TAIWAN" },
  { id: 675, title: "FLAT BLADE TYPE 4-6 MM BT5-18V (GF-PP17) TAIWAN" },
  { id: 676, title: "PIN TYPE LUGS 1.5 MM PT1-12V (RF-P12) TAIWAN" },
  { id: 677, title: "PIN TYPE LUGS 2.5 MM PT2-12V (BF-P12) TAIWAN" },
  { id: 678, title: "PIN TYPE LUGS 4-6 MM PT5-13V (GF-P12) TAIWAN" },
  { id: 679, title: "RING TYPE LUGS 1.5 MM R1-4LV (RF-M4) TAIWAN" },
  { id: 680, title: "RING TYPE LUGS 1.5 MM R1-6V (RF-M6) TAIWAN" },
  { id: 681, title: "RING TYPE LUGS 2.5 MM R2-4LV (BF-M4) TAIWAN" },
  { id: 682, title: "RING TYPE LUGS 2.5 MM R2-6V (BF-M6) TAIWAN" },
  { id: 683, title: "RING TYPE LUGS 4-6 MM R5-4LV (GF-M4) TAIWAN" },
  { id: 684, title: "RING TYPE LUGS 4-6 MM R5-6V (GF-M6) TAIWAN" },
  { id: 685, title: "U TYPE LUGS 1.5 MM S1-3SV (RF-U3) TAIWAN" },
  { id: 686, title: "U TYPE LUGS 1.5 MM S1-4SV (RF-U4) TAIWAN" },
  { id: 687, title: "U TYPE LUGS 2.5 MM S2-3SV (BF-U3) TAIWAN" },
  { id: 688, title: "U TYPE LUGS 2.5 MM S2-4SV (BF-U4) TAIWAN" },
  { id: 689, title: "U TYPE LUGS 4-6 MM S5-4SV (GF-U4) TAIWAN" },
  { id: 690, title: "CORD END TERNMINALS CE015010 1.5 MM (PKE-1510) BLACK TAIWAN" },
  { id: 691, title: "CORD END TERNMINALS CE025012 2.5 MM (PKE-2512) GREY TAIWAN" },
  { id: 692, title: "CORD END TERNMINALS CE040012 4MM (PKE-4012) ORANGE TAIWAN" },
  { id: 693, title: "CORD END TERNMINALS CE060012 6MM (PKE-612) GREEN TAIWAN" },
  { id: 694, title: "CORD END TERNMINALS CT215012 2X1.5 MM (PKE-2*1512) BLACK TAIWAN" },
  { id: 695, title: "CORD END TERNMINALS CT225013 2X2.5 MM (PKE-2*2512) GREY TAIWAN" },
  { id: 696, title: "CORD END TERNMINALS 0.50 MM PKE-0510 WHITE CHINA" },
  { id: 697, title: "CORD END TERNMINALS 0.75 MM PKE-7510 WHITE CHINA" },
  { id: 698, title: "CORD END TERNMINALS 1.0 MM PKE-1010 RED CHINA" },
  { id: 699, title: "CORD END TERNMINALS 1.50 MM PKE-1510 BLACK CHINA" },
  { id: 700, title: "CORD END TERNMINALS 2.50 MM PKE-2512 GREY CHINA" },
  { id: 701, title: "CORD END TERNMINALS 4.0 MM PKE-4012 ORANGE CHINA" },
  { id: 702, title: "CORD END TERNMINALS 6.0 MM PKE-6012 GREEN CHINA" },
  { id: 703, title: "CORD END TERNMINALS 10 MM PKE-1012 CHINA" },
  { id: 704, title: "CORD END TERNMINALS 16 MM PKE-1618 CHINA" },
  { id: 705, title: "CORD END TERNMINALS 25 MM PKE-2518 CHINA" },
  { id: 706, title: "CORD END TERNMINALS 35 MM PKE-3525 CHINA" },
  { id: 707, title: "STEEL HOLE SAW 16 MM" },
  { id: 708, title: "STEEL HOLE SAW 20 MM" },
  { id: 709, title: "STEEL HOLE SAW 22 MM" },
  { id: 710, title: "STEEL HOLE SAW 25 MM" },
  { id: 711, title: "STEEL HOLE SAW 27 MM" },
  { id: 712, title: "STEEL HOLE SAW 32 MM" },
  { id: 713, title: "STEEL HOLE SAW 35 MM" },
  { id: 714, title: "STEEL HOLE SAW 40 MM" },
  { id: 715, title: "STEEL HOLE SAW 50 MM" },
  { id: 716, title: "STEEL HOLE SAW 60 MM" },
  { id: 717, title: "STEEL HOLE SAW 75 MM" },
  { id: 718, title: "STEEL HOLE SAW 90 MM" },
  { id: 719, title: "HSS STAINLESS STEEL DRILL BITS 3 MM" },
  { id: 720, title: "HSS STAINLESS STEEL DRILL BITS 3.5 MM" },
  { id: 721, title: "HSS STAINLESS STEEL DRILL BITS 4 MM" },
  { id: 722, title: "HSS STAINLESS STEEL DRILL BITS 6 MM" },
  { id: 723, title: "HSS STAINLESS STEEL DRILL BITS 8 MM" },
  { id: 724, title: "HSS STAINLESS STEEL DRILL BITS 10 MM" },
  { id: 725, title: "HSS STAINLESS STEEL DRILL BITS 12 MM" },
  { id: 726, title: "HILTI HAMMER CONCRETE DRILL BITS M6X110 MM" },
  { id: 727, title: "HILTI HAMMER CONCRETE DRILL BITS M8X160 MM" },
  { id: 728, title: "HILTI HAMMER CONCRETE DRILL BITS M10X210 MM" },
  { id: 729, title: "HILTI HAMMER CONCRETE DRILL BITS M12X210 MM" },
  { id: 730, title: "CUTTING DISC 4.5\" X 1.0 MM" },
  { id: 731, title: "W/P CONNECTOR IP68 2 PIN YSN11-2" },
  { id: 732, title: "W/P CONNECTOR IP68 3 PIN YSN11-3" },
  { id: 733, title: "W/P CONNECTOR IP68 4 PIN YSN11-4" },
  { id: 734, title: "W/P CONNECTOR T TYPE IP68 2 PIN YST-2" },
  { id: 735, title: "W/P CONNECTOR T TYPE IP68 3 PIN YST-3" },
  { id: 736, title: "W/P JUNCTION BOX IP68 2 WAY M686-2" },
  { id: 737, title: "W/P JUNCTION BOX IP68 3 WAY M686-3" },
  { id: 738, title: "W/P JUNCTION BOX IP68 4 WAY M686-4A" },
  { id: 739, title: "BROTHER CATRIDGE 9 MM WHITE/BLACK" },
  { id: 740, title: "BROTHER CATRIDGE 9 MM YELLOW/BLACK" },
  { id: 741, title: "BROTHER CATRIDGE 12 MM WHITE/BLACK" },
  { id: 742, title: "BROTHER CATRIDGE 12 MM YELLOW/BLACK" },
  { id: 743, title: "CASIO CATRIDGE 9 MM WHITE/BLACK" },
  { id: 744, title: "CASIO CATRIDGE 9 MM YELLOW/BLACK" },
  { id: 745, title: "CASIO CATRIDGE 12 MM WHITE/BLACK" },
  { id: 746, title: "CASIO CATRIDGE 12 MM YELLOW/BLACK" },
  { id: 747, title: "CABLE JOINT KIT M11" },
  { id: 748, title: "CABLE JOINT KIT M12" },
  { id: 749, title: "CABLE JOINT KIT M13" },
  { id: 750, title: "PVC FLEXIBLE ADAPTOR 25MM AD-25 [DPA3-25]" },
  { id: 751, title: "PIN TYPE LUGS 10 MM BLACK WITH INSULATED" },
  { id: 752, title: "COMPACT SPLICING CONNECTOR PCT-412" },
  { id: 753, title: "COMPACT SPLICING CONNECTOR PCT-413" },
  { id: 754, title: "COMPACT SPLICING CONNECTOR PCT-414" },
  { id: 755, title: "NEWTRAL LINK 8WAY 8X12 WITH BASE 10HOLES" },
  { id: 756, title: "NEWTRAL LINK 8WAY 8X12 WITHOUT BASE 23 HOLES" },
  { id: 757, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 350/9.3 [1x35]" },
  { id: 758, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 500/13.4 [1x50]" },
  { id: 759, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 500/16.5 [1x70]" },
  { id: 760, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 750/22.6 [1x95]" },
  { id: 761, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 1100/28.6 [4x10.6]" },
  { id: 762, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 1300/33.8 [4x25]" },
  { id: 763, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 1500/38.12 [4x35]" },
  { id: 764, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 1700/43.12 [4x50]" },
  { id: 765, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 2000/55.16 [4x70]" },
  { id: 766, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 2700/65.19 [4x120]" },
  { id: 767, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 2700/75.22 [4x150]" },
  { id: 768, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 3500/85.25 [4x240]" },
  { id: 769, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 3500/95.30 [4x240]" },
  { id: 770, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 4000/105.30 [4x300]" },
  { id: 771, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 4700/120.39 [4x400]" },
  { id: 772, title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR 5000/130.40 [630 RED]" },
  { id: 773, title: "ALUMINIUM CABLE CLEAT ATC 30-40" },
  { id: 774, title: "ALUMINIUM CABLE CLEAT ATC 40-50" },
  { id: 775, title: "ALUMINIUM CABLE CLEAT ATC 51-57" },
  { id: 776, title: "ALUMINIUM CABLE CLEAT ATC 57-64" },
  { id: 777, title: "ALUMINIUM CABLE CLEAT ATC 64-70" },
  { id: 778, title: "ALUMINIUM CABLE CLEAT ATC 70-76" },
  { id: 779, title: "ALUMINIUM CABLE CLEAT ATC 76-83" },
  { id: 780, title: "ALUMINIUM CABLE CLEAT ATC 95-101" },
  { id: 781, title: "ALUMINIUM TREFOIL CABLE CLEAT ATFC 45-60" },
  { id: 782, title: "ALUMINIUM TREFOIL CABLE CLEAT ATFC 60-75" },
  { id: 783, title: "PVC GROMMET 20 MM WHITE GM-20" },
  { id: 784, title: "PVC GROMMET25 MM WHITE GM-25" },
  { id: 785, title: "PVC GROMMET 32 MM WHITE GM-32" },
  { id: 786, title: "PRINTER C-280T" },
  { id: 787, title: "RIBBON LB-280 BLACK" },
  { id: 788, title: "SHRINK TUBE END CAP WSEM-12 [6-35] SINGLE" },
  { id: 789, title: "SHRINK TUBE END CAP WRSFM-16" },
  { id: 790, title: "SHRINK TUBE END CAP WRSFM-20" },
  { id: 791, title: "SHRINK TUBE END CAP WRSFM-25" },
  { id: 792, title: "SHRINK TUBE END CAP WRSFM-30 [50-240] SINGLE" },
  { id: 793, title: "SHRINK TUBE END CAP WRSFM-35" },
  { id: 794, title: "SHRINK TUBE END CAP WRSFM-40 [300] SINGLE" },
  { id: 795, title: "SHRINK TUBE END CAP WRSFM-55 [630] SINGLE" },
  { id: 796, title: "SHRINK TUBE END CAP WRSFM-75 [94-240] 4 CORE" },
  { id: 797, title: "SHRINK TUBE END CAP WRSFM-100 [300] 4 CORE" },
  { id: 798, title: "SHRINK TUBE END CAP WRSFM-120 [630] RED" },
  { id: 799, title: "SHRINK TUBE END CAP WRSFM-140 [630] RED" },
  { id: 800, title: "BASE PLATE 15X15 CM" },
  { id: 801, title: "BASE PLATE 8X15 CM" },
  { id: 802, title: "BASE PLATE DOUBLE CHANNEL 12 HOLE" },
  // Source industrial-socket reference rows 27–30; assigned unique website IDs 803–806.
  { id: 803, title: "INDUSTRIAL SOCKET MALE N-013 16 AMP 3PIN" },
  { id: 804, title: "INDUSTRIAL SOCKET FEMALE N-213 16 AMP 3PIN" },
  { id: 805, title: "INDUSTRIAL SOCKET MALE N-023 32 AMP 3PIN" },
  { id: 806, title: "INDUSTRIAL SOCKET FEMALE N-223 32 AMP 3PIN" },
];

/**
 * Image boundaries come from the supplied product-image set.
 * They are intentionally independent from logical product-family boundaries.
 */
const imageRanges: readonly ImageRange[] = [
  { start: 1, end: 9, image: "/images/products/product-1.jpg", mainCategory: "Conduit & Fittings" },
  { start: 10, end: 15, image: "/images/products/product-10.jpg", mainCategory: "Conduit & Fittings" },
  { start: 16, end: 24, image: "/images/products/product-16.jpg", mainCategory: "Support Systems" },
  { start: 25, end: 31, image: "/images/products/product-25.jpg", mainCategory: "Support Systems" },
  { start: 32, end: 33, image: "/images/products/product-32.jpg", mainCategory: "Support Systems" },
  { start: 34, end: 37, image: "/images/products/product-34.jpg", mainCategory: "Support Systems" },
  { start: 38, end: 38, image: "/images/products/product-38.jpg", mainCategory: "Conduit & Fittings" },
  { start: 39, end: 44, image: "/images/products/product-39.jpg", mainCategory: "Conduit & Fittings" },
  { start: 45, end: 46, image: "/images/products/product-45.jpg", mainCategory: "Conduit & Fittings" },
  { start: 47, end: 49, image: "/images/products/product-47.jpg", mainCategory: "Conduit & Fittings" },
  { start: 50, end: 52, image: "/images/products/product-50.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 53, end: 54, image: "/images/products/product-53.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 55, end: 58, image: "/images/products/product-55.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 59, end: 60, image: "/images/products/product-59.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 61, end: 64, image: "/images/products/product-61.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 65, end: 75, image: "/images/products/product-65.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 76, end: 76, image: "/images/products/product-76.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 77, end: 77, image: "/images/products/product-77.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 78, end: 79, image: "/images/products/product-78.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 80, end: 86, image: "/images/products/product-80.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 87, end: 92, image: "/images/products/product-87.jpg", mainCategory: "Support Systems" },
  { start: 93, end: 98, image: "/images/products/product-93.jpg", mainCategory: "Support Systems" },
  { start: 99, end: 101, image: "/images/products/product-99.jpg", mainCategory: "Support Systems" },
  { start: 102, end: 104, image: "/images/products/product-102.jpg", mainCategory: "Support Systems" },
  { start: 105, end: 107, image: "/images/products/product-105.jpg", mainCategory: "Conduit & Fittings" },
  { start: 108, end: 113, image: "/images/products/product-108.jpg", mainCategory: "Conduit & Fittings" },
  { start: 114, end: 122, image: "/images/products/product-114.jpg", mainCategory: "Flexible Conduit" },
  { start: 123, end: 124, image: "/images/products/product-123.jpg", mainCategory: "Flexible Conduit" },
  { start: 125, end: 126, image: "/images/products/product-125.jpg", mainCategory: "Conduit & Fittings" },
  { start: 127, end: 127, image: "/images/products/product-127.jpg", mainCategory: "Conduit & Fittings" },
  { start: 128, end: 135, image: "/images/products/product-128.jpg", mainCategory: "Support Systems" },
  { start: 136, end: 137, image: "/images/products/product-136.jpg", mainCategory: "Conduit & Fittings" },
  { start: 138, end: 140, image: "/images/products/product-138.jpg", mainCategory: "Conduit & Fittings" },
  { start: 141, end: 143, image: "/images/products/product-141.jpg", mainCategory: "Tools & Accessories" },
  { start: 144, end: 144, image: "/images/products/product-144.jpg", mainCategory: "Tools & Accessories" },
  { start: 145, end: 148, image: "/images/products/product-145.jpg", mainCategory: "Conduit & Fittings" },
  { start: 149, end: 150, image: "/images/products/product-149.jpg", mainCategory: "Support Systems" },
  { start: 151, end: 153, image: "/images/products/product-151.jpg", mainCategory: "Tools & Accessories" },
  { start: 154, end: 155, image: "/images/products/product-154.jpg", mainCategory: "Support Systems" },
  { start: 156, end: 156, image: "/images/products/product-156.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 157, end: 159, image: "/images/products/product-157.jpg", mainCategory: "Cable Management" },
  { start: 160, end: 161, image: "/images/products/product-160.jpg", mainCategory: "Conduit & Fittings" },
  { start: 162, end: 163, image: "/images/products/product-162.jpg", mainCategory: "Conduit & Fittings" },
  { start: 750, end: 750, image: "/images/products/product-750.jpg", mainCategory: "Flexible Conduit" },
  { start: 164, end: 171, image: "/images/products/product-164.jpg", mainCategory: "Conduit & Fittings" },
  { start: 172, end: 173, image: "/images/products/product-172.jpg", mainCategory: "Conduit & Fittings" },
  { start: 174, end: 177, image: "/images/products/product-174.jpg", mainCategory: "Conduit & Fittings" },
  { start: 178, end: 178, image: "/images/products/product-178.jpg", mainCategory: "Support Systems" },
  { start: 179, end: 179, image: "/images/products/product-179.jpg", mainCategory: "Conduit & Fittings" },
  { start: 180, end: 181, image: "/images/products/product-180.jpg", mainCategory: "Flexible Conduit" },
  { start: 182, end: 184, image: "/images/products/product-182.jpg", mainCategory: "Conduit & Fittings" },
  { start: 185, end: 186, image: "/images/products/product-185.jpg", mainCategory: "Flexible Conduit" },
  { start: 187, end: 192, image: "/images/products/product-187.jpg", mainCategory: "Conduit & Fittings" },
  { start: 193, end: 195, image: "/images/products/product-193.jpg", mainCategory: "Conduit & Fittings" },
  { start: 196, end: 198, image: "/images/products/product-196.jpg", mainCategory: "Conduit & Fittings" },
  { start: 199, end: 201, image: "/images/products/product-199.jpg", mainCategory: "Conduit & Fittings" },
  { start: 202, end: 206, image: "/images/products/product-202.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 207, end: 210, image: "/images/products/product-207.jpg", mainCategory: "Glands & Lugs" },
  { start: 211, end: 213, image: "/images/products/product-211.jpg", mainCategory: "Grounding" },
  { start: 214, end: 217, image: "/images/products/product-214.jpg", mainCategory: "Cable Management" },
  { start: 218, end: 220, image: "/images/products/product-218.jpg", mainCategory: "Cable Management" },
  { start: 221, end: 222, image: "/images/products/product-221.jpg", mainCategory: "Cable Management" },
  { start: 223, end: 224, image: "/images/products/product-223.jpg", mainCategory: "Cable Management" },
  { start: 225, end: 226, image: "/images/products/product-225.jpg", mainCategory: "Support Systems" },
  { start: 227, end: 229, image: "/images/products/product-227.jpg", mainCategory: "Conduit & Fittings" },
  { start: 230, end: 235, image: "/images/products/product-230.jpg", mainCategory: "Conduit & Fittings" },
  { start: 236, end: 237, image: "/images/products/product-236.jpg", mainCategory: "Wiring Accessories" },
  { start: 238, end: 238, image: "/images/products/product-238.jpg", mainCategory: "Wiring Accessories" },
  { start: 239, end: 240, image: "/images/products/product-239.jpg", mainCategory: "Wiring Accessories" },
  { start: 241, end: 246, image: "/images/products/product-241.jpg", mainCategory: "Wiring Accessories" },
  { start: 247, end: 252, image: "/images/products/product-247.jpg", mainCategory: "Wiring Accessories" },
  { start: 253, end: 260, image: "/images/products/product-253.jpg", mainCategory: "Cable Management" },
  { start: 261, end: 268, image: "/images/products/product-261.jpg", mainCategory: "Cable Management" },
  { start: 269, end: 269, image: "/images/products/product-269.jpg", mainCategory: "Tools & Accessories" },
  { start: 270, end: 270, image: "/images/products/product-751.jpg", mainCategory: "Tools & Accessories" },
  { start: 271, end: 271, image: "/images/products/product-752.jpg", mainCategory: "Tools & Accessories" },
  { start: 272, end: 274, image: "/images/products/product-272.jpg", mainCategory: "Tools & Accessories" },
  { start: 275, end: 275, image: "/images/products/product-275.jpg", mainCategory: "Tools & Accessories" },
  { start: 276, end: 277, image: "/images/products/product-276.jpg", mainCategory: "Tools & Accessories" },
  { start: 278, end: 278, image: "/images/products/product-278.jpg", mainCategory: "Tools & Accessories" },
  { start: 279, end: 279, image: "/images/products/product-279.jpg", mainCategory: "Tools & Accessories" },
  { start: 280, end: 280, image: "/images/products/product-280.jpg", mainCategory: "Tools & Accessories" },
  { start: 281, end: 282, image: "/images/products/product-281.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 283, end: 284, image: "/images/products/product-283.jpg", mainCategory: "Support Systems" },
  { start: 285, end: 295, image: "/images/products/product-285.jpg", mainCategory: "Cable Management" },
  { start: 296, end: 305, image: "/images/products/product-296.jpg", mainCategory: "Cable Management" },
  { start: 306, end: 320, image: "/images/products/product-306.jpg", mainCategory: "Cable Management" },
  { start: 321, end: 324, image: "/images/products/product-321.jpg", mainCategory: "Grounding" },
  { start: 325, end: 325, image: "/images/products/product-325.jpg", mainCategory: "Support Systems" },
  { start: 326, end: 329, image: "/images/products/product-326.jpg", mainCategory: "Grounding" },
  { start: 330, end: 330, image: "/images/products/product-330.jpg", mainCategory: "Grounding" },
  { start: 331, end: 331, image: "/images/products/product-331.jpg", mainCategory: "Grounding" },
  { start: 332, end: 333, image: "/images/products/product-332.jpg", mainCategory: "Grounding" },
  { start: 334, end: 334, image: "/images/products/product-334.jpg", mainCategory: "Grounding" },
  { start: 335, end: 335, image: "/images/products/product-335.jpg", mainCategory: "Grounding" },
  { start: 336, end: 336, image: "/images/products/product-336.jpg", mainCategory: "Wiring Accessories" },
  { start: 337, end: 345, image: "/images/products/product-337.jpg", mainCategory: "Conduit & Fittings" },
  { start: 346, end: 354, image: "/images/products/product-346.jpg", mainCategory: "Conduit & Fittings" },
  { start: 355, end: 361, image: "/images/products/product-355.jpg", mainCategory: "Flexible Conduit" },
  { start: 362, end: 365, image: "/images/products/product-362.jpg", mainCategory: "Conduit & Fittings" },
  { start: 366, end: 367, image: "/images/products/product-366.jpg", mainCategory: "Conduit & Fittings" },
  { start: 368, end: 371, image: "/images/products/product-368.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 372, end: 373, image: "/images/products/product-372.jpg", mainCategory: "Support Systems" },
  { start: 376, end: 416, image: "/images/products/product-376.jpg", mainCategory: "Glands & Lugs" },
  { start: 417, end: 423, image: "/images/products/product-417.jpg", mainCategory: "Glands & Lugs" },
  { start: 424, end: 425, image: "/images/products/product-424.jpg", mainCategory: "Glands & Lugs" },
  { start: 426, end: 436, image: "/images/products/product-426.jpg", mainCategory: "Glands & Lugs" },
  { start: 437, end: 441, image: "/images/products/product-437.jpg", mainCategory: "Glands & Lugs" },
  { start: 442, end: 442, image: "/images/products/product-442.jpg", mainCategory: "Glands & Lugs" },
  { start: 443, end: 455, image: "/images/products/product-443.jpg", mainCategory: "Glands & Lugs" },
  { start: 456, end: 476, image: "/images/products/product-456.jpg", mainCategory: "Glands & Lugs" },
  { start: 477, end: 488, image: "/images/products/product-477.jpg", mainCategory: "Glands & Lugs" },
  { start: 489, end: 516, image: "/images/products/product-489.jpg", mainCategory: "Glands & Lugs" },
  { start: 517, end: 523, image: "/images/products/product-517.jpg", mainCategory: "Glands & Lugs" },
  { start: 524, end: 534, image: "/images/products/product-524.jpg", mainCategory: "Flexible Conduit" },
  { start: 535, end: 545, image: "/images/products/product-535.jpg", mainCategory: "Flexible Conduit" },
  { start: 546, end: 546, image: "/images/products/product-546.jpg", mainCategory: "Cable Management" },
  { start: 547, end: 547, image: "/images/products/product-547.jpg", mainCategory: "Cable Management" },
  { start: 548, end: 548, image: "/images/products/product-548.jpg", mainCategory: "Cable Management" },
  { start: 549, end: 550, image: "/images/products/product-549.jpg", mainCategory: "Flexible Conduit" },
  { start: 551, end: 553, image: "/images/products/product-551.jpg", mainCategory: "Conduit & Fittings" },
  { start: 554, end: 555, image: "/images/products/product-554.jpg", mainCategory: "Conduit & Fittings" },
  { start: 556, end: 557, image: "/images/products/product-556.jpg", mainCategory: "Cable Management" },
  { start: 558, end: 564, image: "/images/products/product-558.jpg", mainCategory: "Cable Management" },
  { start: 565, end: 569, image: "/images/products/product-565.jpg", mainCategory: "Cable Management" },
  { start: 570, end: 574, image: "/images/products/product-570.jpg", mainCategory: "Cable Management" },
  { start: 575, end: 582, image: "/images/products/product-575.jpg", mainCategory: "Cable Management" },
  { start: 583, end: 586, image: "/images/products/product-583.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 587, end: 607, image: "/images/products/product-587.jpg", mainCategory: "Cable Management" },
  { start: 608, end: 623, image: "/images/products/product-608.jpg", mainCategory: "Conduit & Fittings" },
  { start: 624, end: 624, image: "/images/products/product-624.jpg", mainCategory: "Tools & Accessories" },
  { start: 625, end: 625, image: "/images/products/product-625.jpg", mainCategory: "Tools & Accessories" },
  { start: 626, end: 637, image: "/images/products/product-626.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 638, end: 640, image: "/images/products/product-638.jpg", mainCategory: "Circuit Protection" },
  { start: 641, end: 644, image: "/images/products/product-641.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 645, end: 650, image: "/images/products/product-645.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 651, end: 656, image: "/images/products/product-651.jpg", mainCategory: "Flexible Conduit" },
  { start: 657, end: 667, image: "/images/products/product-657.jpg", mainCategory: "Glands & Lugs" },
  { start: 668, end: 670, image: "/images/products/product-668.jpg", mainCategory: "Glands & Lugs" },
  { start: 671, end: 675, image: "/images/products/product-671.jpg", mainCategory: "Glands & Lugs" },
  { start: 676, end: 678, image: "/images/products/product-676.jpg", mainCategory: "Glands & Lugs" },
  { start: 679, end: 684, image: "/images/products/product-679.jpg", mainCategory: "Glands & Lugs" },
  { start: 685, end: 689, image: "/images/products/product-685.jpg", mainCategory: "Glands & Lugs" },
  { start: 690, end: 695, image: "/images/products/product-690.jpg", mainCategory: "Glands & Lugs" },
  { start: 696, end: 706, image: "/images/products/product-696.jpg", mainCategory: "Glands & Lugs" },
  { start: 707, end: 718, image: "/images/products/product-707.jpg", mainCategory: "Tools & Accessories" },
  { start: 719, end: 725, image: "/images/products/product-719.jpg", mainCategory: "Tools & Accessories" },
  { start: 726, end: 729, image: "/images/products/product-726.jpg", mainCategory: "Tools & Accessories" },
  { start: 730, end: 730, image: "/images/products/product-730.jpg", mainCategory: "Tools & Accessories" },
  { start: 731, end: 733, image: "/images/products/product-731.jpg", mainCategory: "Conduit & Fittings" },
  { start: 734, end: 735, image: "/images/products/product-734.jpg", mainCategory: "Conduit & Fittings" },
  { start: 736, end: 738, image: "/images/products/product-736.jpg", mainCategory: "Boxes & Enclosures" },
  { start: 739, end: 742, image: "/images/products/product-739.jpg", mainCategory: "Tools & Accessories" },
  { start: 743, end: 746, image: "/images/products/product-743.jpg", mainCategory: "Tools & Accessories" },
  { start: 747, end: 749, image: "/images/products/product-747.jpg", mainCategory: "Conduit & Fittings" },
  { start: 751, end: 751, image: "/images/products/product-753.jpg", mainCategory: "Glands & Lugs" },
  { start: 752, end: 752, image: "/images/products/product-754.jpg", mainCategory: "Wiring Accessories" },
  { start: 753, end: 753, image: "/images/products/product-755.jpg", mainCategory: "Wiring Accessories" },
  { start: 754, end: 754, image: "/images/products/product-756.jpg", mainCategory: "Wiring Accessories" },
  { start: 755, end: 755, image: "/images/products/product-757.jpg", mainCategory: "Wiring Accessories" },
  { start: 756, end: 756, image: "/images/products/product-758.jpg", mainCategory: "Wiring Accessories" },
  { start: 757, end: 772, image: "/images/products/product-759.jpg", mainCategory: "Cable Management" },
  { start: 773, end: 780, image: "/images/products/product-760.jpg", mainCategory: "Support Systems" },
  { start: 781, end: 782, image: "/images/products/product-761.jpg", mainCategory: "Support Systems" },
  { start: 783, end: 785, image: "/images/products/product-762.jpg", mainCategory: "Wiring Accessories" },
  { start: 786, end: 786, image: "/images/products/product-763.jpg", mainCategory: "Tools & Accessories" },
  { start: 787, end: 787, image: "/images/products/product-764.jpg", mainCategory: "Tools & Accessories" },
  { start: 788, end: 799, image: "/images/products/product-765.jpg", mainCategory: "Cable Management" },
  { start: 800, end: 800, image: "/images/products/product-766.jpg", mainCategory: "Support Systems" },
  { start: 801, end: 801, image: "/images/products/product-767.jpg", mainCategory: "Support Systems" },
  { start: 802, end: 802, image: "/images/products/product-768.jpg", mainCategory: "Support Systems" },
  { start: 803, end: 806, image: "/images/categories/wiring-accessories.png", mainCategory: "Wiring Accessories" },
];

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

/**
 * Logical product families.
 * Example: EMT CLAMP 1 HOLE = one product; 1/2'' UL, 3/4'' CH, etc. = variants.
 */
const groups: readonly ProductGroup[] = [

  { id: "emt-conduit-pipe", slug: "emt-conduit-pipe", title: "EMT CONDUIT PIPE", variantIds: [...range(1, 9)], featured: true },

  { id: "emt-bend", slug: "emt-bend", title: "EMT BEND", variantIds: [...range(10, 15)], featured: true },

  { id: "emt-clamp-1-hole", slug: "emt-clamp-1-hole", title: "EMT CLAMP 1 HOLE", variantIds: [...range(16, 24)], featured: true },

  { id: "emt-clamp-2-hole", slug: "emt-clamp-2-hole", title: "EMT CLAMP 2 HOLE", variantIds: [...range(25, 31)] },

  { id: "rigid-clamp-1-hole", slug: "rigid-clamp-1-hole", title: "RIGID CLAMP 1 HOLE", variantIds: [...range(32, 33)] },

  { id: "rigid-clamp-2-hole", slug: "rigid-clamp-2-hole", title: "RIGID CLAMP 2 HOLE", variantIds: [...range(34, 37)] },

  { id: "rigid-connector-hub-type", slug: "rigid-connector-hub-type", title: "RIGID CONNECTOR HUB TYPE", variantIds: [38] },

  { id: "rigid-connector-screw-type", slug: "rigid-connector-screw-type", title: "RIGID CONNECTOR SCREW TYPE", variantIds: [...range(39, 44)] },

  { id: "rigid-coupling-screw-type", slug: "rigid-coupling-screw-type", title: "RIGID COUPLING SCREW TYPE", variantIds: [...range(45, 46)] },

  { id: "rigid-coupling", slug: "rigid-coupling", title: "RIGID COUPLING", variantIds: [...range(187, 192)] },

  { id: "reducer", slug: "reducer", title: "REDUCER", variantIds: [...range(47, 49)] },

  { id: "emt-box-10x10", slug: "emt-box-10x10", title: "EMT BOX 10X10", variantIds: [...range(50, 52)] },

  { id: "emt-box-10x10-deep", slug: "emt-box-10x10-deep", title: "EMT BOX 10X10 CM DEEP", variantIds: [...range(55, 58)] },

  { id: "emt-box-5x10", slug: "emt-box-5x10", title: "EMT BOX 5X10", variantIds: [...range(59, 60)] },

  { id: "emt-box", slug: "emt-box", title: "EMT BOX", variantIds: [...range(80, 86)] },


  { id: "emt-octogonal-box", slug: "emt-octogonal-box", title: "EMT OCTOGONAL BOX", variantIds: [...range(53, 54)] },

  { id: "ring-box", slug: "ring-box", title: "RING BOX", variantIds: [...range(61, 64)] },

  { id: "w-p-box", slug: "w-p-box", title: "W/P BOX", variantIds: [...range(65, 75)], featured: true },

  { id: "w-p-round-box", slug: "w-p-round-box", title: "W/P ROUND BOX", variantIds: [76] },

  { id: "w-p-round-box-cover", slug: "w-p-round-box-cover", title: "W/P ROUND BOX COVER", variantIds: [77] },

  { id: "water-proof-cover", slug: "water-proof-cover", title: "WATER PROOF COVER", variantIds: [...range(78, 79)] },

  { id: "c-channel", slug: "c-channel", title: "C-CHANNEL", variantIds: [...range(87, 92)] },

  { id: "emt-channel-clamp", slug: "emt-channel-clamp", title: "EMT CHANNEL CLAMP", variantIds: [...range(93, 98)], featured: true },

  { id: "thread-rod", slug: "thread-rod", title: "THREAD ROD", variantIds: [...range(99, 101)], featured: true },

  { id: "beam-clamp", slug: "beam-clamp", title: "BEAM CLAMP", variantIds: [...range(102, 104)] },

  { id: "knock-out-seal", slug: "knock-out-seal", title: "KNOCK OUT SEAL", variantIds: [...range(105, 107)] },

  { id: "insulated-bushing", slug: "insulated-bushing", title: "INSULATED BUSHING", variantIds: [...range(108, 113)] },

  { id: "liquid-tight-connector", slug: "liquid-tight-connector", title: "LIQUID TIGHT CONNECTOR", variantIds: [...range(114, 122)] },

  { id: "liquid-tight-flexible-coupling", slug: "liquid-tight-flexible-coupling", title: "LIQUID TIGHT FLEXIBLE COUPLING", variantIds: [...range(123, 124)] },

  { id: "emt-combination-coupling", slug: "emt-combination-coupling", title: "EMT COMBINATION COUPLING", variantIds: [...range(125, 126)] },

  { id: "copper-corner-coupling", slug: "copper-corner-coupling", title: "COPPER CORNER COUPLING", variantIds: [127] },

  { id: "emt-hanger-clamp", slug: "emt-hanger-clamp", title: "EMT HANGER CLAMP", variantIds: [...range(128, 129)] },

  { id: "rigid-c-channel-clamp", slug: "rigid-c-channel-clamp", title: "RIGID C-CHANNEL CLAMP", variantIds: [...range(130, 133)] },

  { id: "rigid-channel-clamp", slug: "rigid-channel-clamp", title: "RIGID CHANNEL CLAMP", variantIds: [...range(134, 135)] },

  { id: "rigid-pull-elbow", slug: "rigid-pull-elbow", title: "RIGID PULL ELBOW", variantIds: [...range(136, 137)] },

  { id: "emt-pull-elbow", slug: "emt-pull-elbow", title: "EMT PULL ELBOW", variantIds: [...range(138, 140)] },

  { id: "emt-bender", slug: "emt-bender", title: "EMT BENDER", variantIds: [...range(141, 143)] },

  { id: "emt-bender-black", slug: "emt-bender-black", title: "EMT BENDER BLACK", variantIds: [144] },


  { id: "rigid-bend", slug: "rigid-bend", title: "RIGID BEND", variantIds: [...range(145, 148)] },

  { id: "end-cap", slug: "end-cap", title: "END CAP", variantIds: [...range(149, 150)] },

  { id: "pvc-spring-bender", slug: "pvc-spring-bender", title: "PVC SPRING BENDER", variantIds: [...range(151, 153)] },

  { id: "rigid-base-clamp", slug: "rigid-base-clamp", title: "RIGID BASE CLAMP", variantIds: [...range(154, 155)] },

  { id: "pvc-box", slug: "pvc-box", title: "PVC BOX", variantIds: [156] },

  { id: "pulling-wire-mcs", slug: "pulling-wire-mcs", title: "PULLING WIRE MCS", variantIds: [...range(157, 159)] },

  { id: "pvc-adaptor-fa", slug: "pvc-adaptor-fa", title: "PVC ADAPTOR FA", variantIds: [...range(160, 161)] },

  { id: "pvc-adaptor-fafa", slug: "pvc-adaptor-fafa", title: "PVC ADAPTOR FAFA", variantIds: [...range(162, 163)] },

{ id: "pvc-flexible-adaptor-ad-25", slug: "pvc-flexible-adaptor-ad-25", title: "PVC FLEXIBLE ADAPTOR", variantIds: [750] },

  { id: "pvc-adaptor", slug: "pvc-adaptor", title: "PVC ADAPTOR", variantIds: [...range(168, 171)] },


  { id: "pvc-coupling", slug: "pvc-coupling", title: "PVC COUPLING", variantIds: [...range(164, 167)] },

  { id: "pvc-coupling-white", slug: "pvc-coupling-white", title: "PVC COUPLING WHITE", variantIds: [...range(172, 173)] },


  { id: "pvc-bend", slug: "pvc-bend", title: "PVC BEND", variantIds: [...range(174, 177)] },

  { id: "pvc-sadlle-with-base", slug: "pvc-sadlle-with-base", title: "PVC SADLLE WITH BASE", variantIds: [178] },

  { id: "sub-duct-coupling", slug: "sub-duct-coupling", title: "SUB DUCT COUPLING", variantIds: [179] },

  { id: "liquid-tight-angle-connector", slug: "liquid-tight-angle-connector", title: "LIQUID TIGHT ANGLE CONNECTOR", variantIds: [...range(180, 181)] },

  { id: "hole-closer", slug: "hole-closer", title: "HOLE CLOSER", variantIds: [...range(182, 184)] },

  { id: "steel-flexible-angle-connector", slug: "steel-flexible-angle-connector", title: "STEEL FLEXIBLE ANGLE CONNECTOR", variantIds: [...range(185, 186)] },

  { id: "emt-compression-connector", slug: "emt-compression-connector", title: "EMT COMPRESSION CONNECTOR", variantIds: [...range(193, 195)] },

  { id: "emt-compression-coupling", slug: "emt-compression-coupling", title: "EMT COMPRESSION COUPLING", variantIds: [...range(196, 198)] },

  { id: "enlarger", slug: "enlarger", title: "ENLARGER", variantIds: [...range(199, 201)] },

  { id: "emt-cover", slug: "emt-cover", title: "EMT COVER", variantIds: [...range(202, 206)] },

  { id: "plastic-gland", slug: "plastic-gland", title: "PLASTIC GLAND", variantIds: [...range(207, 210)] },

  { id: "insulator", slug: "insulator", title: "INSULATOR", variantIds: [...range(211, 213)] },

  { id: "steel-cable-tie", slug: "steel-cable-tie", title: "STEEL CABLE TIE", variantIds: [...range(214, 217)] },

  { id: "steel-cable-pvc-coated-pssct", slug: "steel-cable-pvc-coated-pssct", title: "STEEL CABLE PVC COATED PSSCT", variantIds: [...range(218, 220)] },

{ id: "cable-marker-strip-black", slug: "cable-marker-strip-black", title: "CABLE MARKER STRIP BLACK", variantIds: [...range(221, 222)] },

{ id: "cable-marker-strip-white", slug: "cable-marker-strip-white", title: "CABLE MARKER STRIP WHITE", variantIds: [...range(223, 224)] },


  { id: "tie-mount", slug: "tie-mount", title: "TIE MOUNT", variantIds: [...range(225, 226)] },

  { id: "plastic-connector", slug: "plastic-connector", title: "PLASTIC CONNECTOR", variantIds: [...range(227, 229)] },

  { id: "h-type-plastic-strip-connector", slug: "h-type-plastic-strip-connector", title: "H type PLASTIC STRIP CONNECTOR", variantIds: [...range(230, 235)] },

  { id: "group-holder", slug: "group-holder", title: "GROUP HOLDER", variantIds: [...range(236, 237)] },

  { id: "end-stopper", slug: "end-stopper", title: "END STOPPER", variantIds: [238] },

  { id: "jumber-link-flat-type", slug: "jumber-link-flat-type", title: "JUMBER LINK FLAT TYPE", variantIds: [...range(239, 240)] },

  { id: "wire-connector", slug: "wire-connector", title: "WIRE CONNECTOR", variantIds: [...range(241, 246)] },

  { id: "wire-nut", slug: "wire-nut", title: "WIRE NUT", variantIds: [...range(247, 252)] },

  { id: "cable-marker", slug: "cable-marker", title: "CABLE MARKER", variantIds: [...range(253, 260)] },

  { id: "spiral", slug: "spiral", title: "SPIRAL", variantIds: [...range(261, 268)] },

{ id: "terminal-lugs-crimper-th-03c", slug: "terminal-lugs-crimper-th-03c", title: "TERMINAL LUGS CRIMPER TH-03C", variantIds: [269] },

{ id: "terminal-lugs-crimper-thc8-6-6", slug: "terminal-lugs-crimper-thc8-6-6", title: "TERMINAL LUGS CRIMPER THC8 6-6", variantIds: [270] },

{ id: "terminal-lugs-crimper-thc8-6-4", slug: "terminal-lugs-crimper-thc8-6-4", title: "TERMINAL LUGS CRIMPER THC8 6-4", variantIds: [271] },

  { id: "boot-lugs-crimping-tools", slug: "boot-lugs-crimping-tools", title: "BOOT LUGS CRIMPING TOOLS", variantIds: [...range(272, 274)] },

  { id: "terminal-lugs-crimping-tools", slug: "terminal-lugs-crimping-tools", title: "TERMINAL LUGS CRIMPING TOOLS", variantIds: [275] },

  { id: "cable-lugs-crimping-tools", slug: "cable-lugs-crimping-tools", title: "CABLE LUGS CRIMPING TOOLS", variantIds: [...range(276, 277)] },

  { id: "wire-stripper", slug: "wire-stripper", title: "WIRE STRIPPER", variantIds: [278] },

  { id: "cat-6-cable-crimping-tool", slug: "cat-6-cable-crimping-tool", title: "CAT-6 CABLE CRIMPING TOOL", variantIds: [279] },

  { id: "hydrualic-crimping-tools", slug: "hydrualic-crimping-tools", title: "HYDRUALIC CRIMPING TOOLS", variantIds: [280] },

  { id: "steel-floor-box", slug: "steel-floor-box", title: "STEEL FLOOR BOX", variantIds: [...range(281, 282)] },

  { id: "din-rail", slug: "din-rail", title: "DIN RAIL", variantIds: [...range(283, 284)] },

  { id: "shrink-tube", slug: "shrink-tube", title: "SHRINK TUBE", variantIds: [...range(285, 295)] },

  { id: "shrink-tube-yg", slug: "shrink-tube-yg", title: "SHRINK TUBE Y/G", variantIds: [...range(296, 305)] },


  { id: "ferroling-marking-tube", slug: "ferroling-marking-tube", title: "FERROLING MARKING TUBE", variantIds: [...range(306, 320)] },

  { id: "earth-rod", slug: "earth-rod", title: "EARTH ROD", variantIds: [...range(321, 324)] },

  { id: "u-bolt-clamp", slug: "u-bolt-clamp", title: "U BOLT CLAMP", variantIds: [325] },

  { id: "copper-clamp-one-hole-clip", slug: "copper-clamp-one-hole-clip", title: "COPPER CLAMP ONE HOLE CLIP", variantIds: [...range(326, 329)] },

  { id: "copper-bonded-earth-plate", slug: "copper-bonded-earth-plate", title: "COPPER BONDED EARTH PLATE", variantIds: [330] },

  { id: "earth-rod-clamp-o-type", slug: "earth-rod-clamp-o-type", title: "EARTH ROD CLAMP O TYPE", variantIds: [331] },

  { id: "earth-rod-clamp-g-type", slug: "earth-rod-clamp-g-type", title: "EARTH ROD CLAMP G TYPE", variantIds: [...range(332, 333)] },


  { id: "brass-air-base", slug: "brass-air-base", title: "BRASS AIR BASE", variantIds: [334] },

  { id: "brass-multi-point", slug: "brass-multi-point", title: "BRASS MULTI POINT", variantIds: [335] },

  { id: "neutral-link", slug: "neutral-link", title: "NEUTRAL LINK", variantIds: [336] },

  { id: "emt-connector-w-ul-mark", slug: "emt-connector-w-ul-mark", title: "EMT CONNECTOR W/UL MARK", variantIds: [...range(337, 345)] },

  { id: "emt-coupling-w-ul-mark", slug: "emt-coupling-w-ul-mark", title: "EMT COUPLING W/UL MARK", variantIds: [...range(346, 354)] },

  { id: "emt-steel-flexible-connector", slug: "emt-steel-flexible-connector", title: "EMT STEEL FLEXIBLE CONNECTOR", variantIds: [...range(355, 361)] },

  { id: "zinc-locknut", slug: "zinc-locknut", title: "ZINC LOCKNUT", variantIds: [...range(362, 365)] },

  { id: "chase-nipple", slug: "chase-nipple", title: "CHASE NIPPLE", variantIds: [...range(366, 367)] },

  { id: "pvc-mcb-breaker-box", slug: "pvc-mcb-breaker-box", title: "PVC MCB BREAKER BOX", variantIds: [...range(368, 371)] },

  { id: "angle-l-type", slug: "angle-l-type", title: "ANGLE L TYPE", variantIds: [...range(372, 373)] },

  { id: "cable-lugs", slug: "cable-lugs", title: "CABLE LUGS", variantIds: [...range(376, 416)] },

  { id: "cable-lugs-standard", slug: "cable-lugs-standard", title: "CABLE LUGS STANDARD", variantIds: [...range(424, 425)] },

  { id: "cable-lugs-2-hole", slug: "cable-lugs-2-hole", title: "CABLE LUGS 2 HOLE", variantIds: [...range(426, 436)] },

  { id: "cable-lugs-4-hole", slug: "cable-lugs-4-hole", title: "CABLE LUGS 4 HOLE", variantIds: [...range(437, 441)] },


  { id: "pin-type-lugs-flat-type", slug: "pin-type-lugs-flat-type", title: "PIN TYPE LUGS - FLAT TYPE", variantIds: [...range(417, 423)] },

  { id: "aluminium-cable-lugs", slug: "aluminium-cable-lugs", title: "ALUMINIUM CABLE LUGS", variantIds: [442] },

  { id: "mcb-breaker-cable-lugs", slug: "mcb-breaker-cable-lugs", title: "MCB BREAKER CABLE LUGS", variantIds: [...range(443, 455)] },

  { id: "bimetalic-cable-lugs", slug: "bimetalic-cable-lugs", title: "BIMETALIC CABLE LUGS", variantIds: [...range(456, 476)] },

  { id: "compression-sleeve-lugs", slug: "compression-sleeve-lugs", title: "COMPRESSION SLEEVE LUGS", variantIds: [...range(477, 488)] },

  { id: "brass-cable-gland", slug: "brass-cable-gland", title: "BRASS CABLE GLAND", variantIds: [...range(489, 516)] },

  { id: "brass-ss-cable-gland", slug: "brass-ss-cable-gland", title: "BRASS SS CABLE GLAND", variantIds: [...range(517, 523)] },

  { id: "emt-flexible-hose", slug: "emt-flexible-hose", title: "EMT FLEXIBLE HOSE", variantIds: [...range(524, 534)] },

  {
    id: "liquid-tight-flexible-hose",
    slug: "liquid-tight-flexible-hose",
    title: "LIQUID TIGHT FLEXIBLE HOSE",
    variantIds: [...range(535, 545)]
  },

  {
    id: "cat-6-cable-belden-copy-9565",
    slug: "cat-6-cable-belden-copy-9565",
    title: "CAT - 6 CABLE BELDEN COPY 9565",
    variantIds: [546]
  },

  { id: "fire-alarm-cable", slug: "fire-alarm-cable", title: "FIRE ALARM CABLE", variantIds: [547] },

  { id: "ftth-wifi-fiber-cable", slug: "ftth-wifi-fiber-cable", title: "FTTH WIFI FIBER CABLE", variantIds: [548] },

  { id: "pvc-flexible-hose-orange", slug: "pvc-flexible-hose-orange", title: "PVC FLEXIBLE HOSE ORANGE", variantIds: [...range(549, 550)] },

  { id: "rigid-compression-connector", slug: "rigid-compression-connector", title: "RIGID COMPRESSION CONNECTOR", variantIds: [...range(551, 553)] },

  { id: "rigid-compression-coupling", slug: "rigid-compression-coupling", title: "RIGID COMPRESSION COUPLING", variantIds: [...range(554, 555)] },

  {
    id: "pvc-trunking-white-with-red-sticker",
    slug: "pvc-trunking-white-with-red-sticker",
    title: "PVC TRUNKING WHITE WITH RED STICKER",
    variantIds: [556, 557]
  },

  {
    id: "pvc-trunking-3-mtr-white",
    slug: "pvc-trunking-3-mtr-white",
    title: "PVC TRUNKING 3 MTR WHITE",
    variantIds: [...range(558, 564)]
  },

  {
    id: "pvc-floor-trunking-white-with-red-sticker",
    slug: "pvc-floor-trunking-white-with-red-sticker",
    title: "PVC FLOOR TRUNKING WHITE WITH RED STICKER",
    variantIds: [...range(565, 569)]
  },

  {
    id: "pvc-floor-trunking-grey-with-red-sticker",
    slug: "pvc-floor-trunking-grey-with-red-sticker",
    title: "PVC FLOOR TRUNKING GREY WITH RED STICKER",
    variantIds: [...range(570, 574)]
  },


  { id: "pvc-sloted-trunking", slug: "pvc-sloted-trunking", title: "PVC SLOTED TRUNKING", variantIds: [...range(575, 582)] },

  { id: "pvc-junction-box", slug: "pvc-junction-box", title: "PVC JUNCTION BOX", variantIds: [...range(583, 586)] },

  { id: "cable-tie", slug: "cable-tie", title: "CABLE TIE", variantIds: [...range(587, 607)] },

  {
    id: "conduit-body",
    slug: "conduit-body",
    title: "CONDUIT BODY",
    variantIds: [...range(608, 623)]
  },

  {
    id: "electrical-cable-roller-150-mm",
    slug: "electrical-cable-roller-150-mm",
    title: "ELECTRICAL CABLE ROLLER 150 MM",
    variantIds: [624]
  },

  {
    id: "electrical-cable-roller-3-way",
    slug: "electrical-cable-roller-3-way",
    title: "ELECTRICAL CABLE ROLLER 3 WAY",
    variantIds: [625]
  },

  { id: "waterproof-steel-enclouser-box", slug: "waterproof-steel-enclouser-box", title: "WATERPROOF STEEL ENCLOUSER BOX", variantIds: [...range(626, 637)] },

  { id: "disconnector-ukf", slug: "disconnector-ukf", title: "DISCONNECTOR UKF", variantIds: [...range(638, 640)] },

  { id: "w-p-socket-box", slug: "w-p-socket-box", title: "W/P SOCKET BOX", variantIds: [...range(641, 644)] },

  { id: "waterproof-pvc-box", slug: "waterproof-pvc-box", title: "WATERPROOF PVC BOX", variantIds: [...range(645, 650)] },

  { id: "pvc-flexible-adaptor-for-italy-alayed-flexible", slug: "pvc-flexible-adaptor-for-italy-alayed-flexible", title: "PVC FLEXIBLE ADAPTOR FOR ITALY,ALAYED FLEXIBLE", variantIds: [...range(651, 656)] },

  { id: "plastic-cable-gland", slug: "plastic-cable-gland", title: "PLASTIC CABLE GLAND", variantIds: [...range(657, 667)] },

  { id: "hook-type-lugs", slug: "hook-type-lugs", title: "HOOK TYPE LUGS", variantIds: [...range(668, 670)] },

  { id: "flat-blade-type", slug: "flat-blade-type", title: "FLAT BLADE TYPE", variantIds: [...range(671, 675)] },

  { id: "pin-type-lugs", slug: "pin-type-lugs", title: "PIN TYPE LUGS", variantIds: [...range(676, 678)] },

  { id: "ring-type-lugs", slug: "ring-type-lugs", title: "RING TYPE LUGS", variantIds: [...range(679, 684)] },

  { id: "u-type-lugs", slug: "u-type-lugs", title: "U TYPE LUGS", variantIds: [...range(685, 689)] },

  { id: "cord-end-ternminals-taiwan", slug: "cord-end-ternminals-taiwan", title: "CORD END TERNMINALS TAIWAN", variantIds: [...range(690, 695)] },

  { id: "cord-end-ternminals-china", slug: "cord-end-ternminals-china", title: "CORD END TERNMINALS CHINA", variantIds: [...range(696, 706)] },


  { id: "steel-hole-saw", slug: "steel-hole-saw", title: "STEEL HOLE SAW", variantIds: [...range(707, 718)] },

  { id: "hss-stainless-steel-drill-bits", slug: "hss-stainless-steel-drill-bits", title: "HSS STAINLESS STEEL DRILL BITS", variantIds: [...range(719, 725)] },

  { id: "hilti-hammer-concrete-drill-bits", slug: "hilti-hammer-concrete-drill-bits", title: "HILTI HAMMER CONCRETE DRILL BITS", variantIds: [...range(726, 729)] },

  { id: "cutting-disc", slug: "cutting-disc", title: "CUTTING DISC", variantIds: [730] },

  { id: "w-p-connector-ip68", slug: "w-p-connector-ip68", title: "W/P CONNECTOR IP68", variantIds: [...range(731, 733)] },

  { id: "w-p-connector-t-type-ip68", slug: "w-p-connector-t-type-ip68", title: "W/P CONNECTOR T TYPE IP68", variantIds: [...range(734, 735)] },

  { id: "w-p-junction-box-ip68", slug: "w-p-junction-box-ip68", title: "W/P JUNCTION BOX IP68", variantIds: [...range(736, 738)] },

  { id: "brother-catridge", slug: "brother-catridge", title: "BROTHER CATRIDGE", variantIds: [...range(739, 742)] },

  { id: "casio-catridge", slug: "casio-catridge", title: "CASIO CATRIDGE", variantIds: [...range(743, 746)] },

  { id: "cable-joint-kit", slug: "cable-joint-kit", title: "CABLE JOINT KIT", variantIds: [...range(747, 749)] },

  {
    id: "pin-type-lugs-black-insulated",
    slug: "pin-type-lugs-black-insulated",
    title: "PIN TYPE LUGS BLACK INSULATED",
    variantIds: [751],
  },

  { id: "compact-splicing-connector-pct-412", slug: "compact-splicing-connector-pct-412", title: "COMPACT SPLICING CONNECTOR PCT-412", variantIds: [752] },
  { id: "compact-splicing-connector-pct-413", slug: "compact-splicing-connector-pct-413", title: "COMPACT SPLICING CONNECTOR PCT-413", variantIds: [753] },
  { id: "compact-splicing-connector-pct-414", slug: "compact-splicing-connector-pct-414", title: "COMPACT SPLICING CONNECTOR PCT-414", variantIds: [754] },
  { id: "newtral-link-8way-with-base", slug: "newtral-link-8way-with-base", title: "NEWTRAL LINK 8WAY 8X12 WITH BASE", variantIds: [755] },
  { id: "newtral-link-8way-without-base", slug: "newtral-link-8way-without-base", title: "NEWTRAL LINK 8WAY 8X12 WITHOUT BASE", variantIds: [756] },
  { id: "shrink-tube-heavy-duty-hv-mv", slug: "shrink-tube-heavy-duty-hv-mv", title: "SHRINK TUBE HEAVY DUTY HV/MV 1.22 MTR", variantIds: [...range(757, 772)] },
  { id: "aluminium-cable-cleat-atc", slug: "aluminium-cable-cleat-atc", title: "ALUMINIUM CABLE CLEAT ATC", variantIds: [...range(773, 780)] },
  { id: "aluminium-trefoil-cable-cleat-atfc", slug: "aluminium-trefoil-cable-cleat-atfc", title: "ALUMINIUM TREFOIL CABLE CLEAT ATFC", variantIds: [...range(781, 782)] },
  { id: "pvc-grommet", slug: "pvc-grommet", title: "PVC GROMMET", variantIds: [...range(783, 785)] },
  { id: "printer-c-280t", slug: "printer-c-280t", title: "PRINTER C-280T", variantIds: [786] },
  { id: "ribbon-lb-280-black", slug: "ribbon-lb-280-black", title: "RIBBON LB-280 BLACK", variantIds: [787] },
  { id: "shrink-tube-end-cap", slug: "shrink-tube-end-cap", title: "SHRINK TUBE END CAP", variantIds: [...range(788, 799)] },
  { id: "base-plate-15x15-cm", slug: "base-plate-15x15-cm", title: "BASE PLATE 15X15 CM", variantIds: [800] },
  { id: "base-plate-8x15-cm", slug: "base-plate-8x15-cm", title: "BASE PLATE 8X15 CM", variantIds: [801] },
  { id: "base-plate-double-channel", slug: "base-plate-double-channel", title: "BASE PLATE DOUBLE CHANNEL", variantIds: [802] },
  { id: "industrial-socket-male", slug: "industrial-socket-male", title: "INDUSTRIAL SOCKET MALE", variantIds: [803, 805] },
  { id: "industrial-socket-female", slug: "industrial-socket-female", title: "INDUSTRIAL SOCKET FEMALE", variantIds: [804, 806] },
];
const catalogueById = new Map(catalogue.map((item) => [item.id, item]));

function getImageMeta(id: number) {
  const match = imageRanges.find((item) => id >= item.start && id <= item.end);
  if (!match) throw new Error(`Missing image/category mapping for SR.NO. ${id}`);
  return match;
}

function getSpecification(fullTitle: string, productTitle: string) {
  const full = fullTitle.trim();
  const product = productTitle.trim();
  if (full.toLowerCase().startsWith(product.toLowerCase())) {
    return full.slice(product.length).trim().replace(/^[-–—:]\s*/, "");
  }

  // A few catalogue families use spelling/word-order variations.
  // Keep the exact catalogue title rather than guessing or deleting information.
  return full;
}

const industrialSocketCodes = new Map<number, string>([
  [803, "N-013"],
  [804, "N-213"],
  [805, "N-023"],
  [806, "N-223"],
]);

const removedDuplicateIds = new Set([374, 375]);

function validateGroups() {
  const ids = groups.flatMap((group) => [...group.variantIds]);

  if (ids.length !== 804) {
    throw new Error(`Expected 804 active catalogue variants, received ${ids.length}`);
  }

  const unique = new Set(ids);

  if (unique.size !== 804) {
    throw new Error("Duplicate SR.NO. found in product groups");
  }

  for (let id = 1; id <= 806; id += 1) {
    if (removedDuplicateIds.has(id)) continue;

    if (!unique.has(id)) {
      throw new Error(`SR.NO. ${id} is not assigned to a product family`);
    }
  }

  for (const removedId of removedDuplicateIds) {
    if (unique.has(removedId)) {
      throw new Error(`Removed duplicate SR.NO. ${removedId} is still assigned`);
    }
  }
}

validateGroups();

export const products: Product[] = groups.map((group) => {
  const variants: ProductVariant[] = group.variantIds.map((id) => {
    const item = catalogueById.get(id);
    if (!item) throw new Error(`Missing AL MASAR catalogue item for SR.NO. ${id}`);
    const meta = getImageMeta(id);
    const specification = getSpecification(item.title, group.title);

    return {
      id,
      code: industrialSocketCodes.get(id) ?? `EMT-${String(id).padStart(3, "0")}`,
      specification,
      fullTitle: item.title,
      title: item.title,
      image: meta.image,
    };
  });

  const firstVariant = variants[0];
  if (!firstVariant) throw new Error(`Product family ${group.title} has no variants`);
  const mainCategory = getImageMeta(firstVariant.id).mainCategory;

  return {
    id: group.id,
    slug: group.slug,
    title: group.title,
    category: group.title,
    mainCategory,
    image: firstVariant.image,
    description: `${group.title} available in multiple catalogue sizes and specifications.`,
    variantCount: variants.length,
    variants,
    ...(group.featured ? { featured: true } : {}),
  };
});

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

export function getProductVariantById(id: number) {
  for (const product of products) {
    const variant = product.variants.find((item) => item.id === id);
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
      [variant.specification, variant.fullTitle, variant.code].some((value) =>
        value.toLowerCase().includes(normalized)
      )
    );

    return productMatch || variantMatch;
  });
}
