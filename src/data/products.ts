import turmericPolished from "@/assets/turmeric-polished.jpg";
import turmericUnpolished from "@/assets/turmeric-unpolished.jpg";
import basmatiRice from "@/assets/basmati-rice.jpg";
import p1 from "@/assets/p1.jpeg";
import p2 from "@/assets/p2.jpeg";
import p3 from "@/assets/p3.jpeg";
import p4 from "@/assets/p4.jpeg";
import p5 from "@/assets/p5.jpeg";
import p6 from "@/assets/p6.jpeg";
import p7 from "@/assets/p7.jpeg";
import p8 from "@/assets/p8.jpeg";
import p9 from "@/assets/p9.jpeg";
import p10 from "@/assets/p10.jpeg";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  priceRange?: string;
  unit: string;
  minOrder: string;
  image: string;
  gallery: string[];
  category: "turmeric" | "rice";
  details: string[];
  curcuminContent?: string;
}

export const products: Product[] = [
  {
    id: "turmeric-dp-35",
    name: "Turmeric Double Polish > 3.5% Curcumin",
    description: "Premium double-polished turmeric fingers with high curcumin content exceeding 3.5%, ideal for extraction and export markets.",
    price: "$2,300 - $2,800",
    priceRange: "2300-2800",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: p1,
    gallery: [p1, p2],
    category: "turmeric",
    curcuminContent: "> 3.5%",
    details: [
      "High curcumin content (> 3.5%)",
      "Double polished finish",
      "Low moisture content",
      "EU MRL compliant",
      "ETO-free material",
      "Lab tested with certificates",
    ],
  },
  {
    id: "turmeric-dp-23",
    name: "Turmeric Double Polish > 2.3% Curcumin",
    description: "Quality double-polished turmeric fingers with curcumin content exceeding 2.3%, suitable for food processing and export.",
    price: "$2,150",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: p3,
    gallery: [p3, p5],
    category: "turmeric",
    curcuminContent: "> 2.3%",
    details: [
      "Curcumin content > 2.3%",
      "Double polished finish",
      "Properly dried material",
      "Pre-shipment inspection available",
      "Aflatoxin & residue lab reports",
      "Bulk container supply",
    ],
  },
  {
    id: "turmeric-unpolished",
    name: "Unpolished Turmeric > 3.5% Curcumin)",
    description: "Natural unpolished turmeric fingers, raw and unprocessed, ideal for industrial extraction and Ayurvedic applications.",
    price: "$1,960",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: p6,
    gallery: [p6, p4],
    category: "turmeric",
    details: [
      "Raw unprocessed turmeric",
      "Suitable for curcumin extraction",
      "Oleoresin manufacturing grade",
      "Year-round sourcing",
      "Lot-wise quality verification",
      "Container load capability",
    ],
  },
  {
    id: "basmati-rice",
    name: "Basmati Rice 1121",
    description: "Premium long-grain Basmati 1121 rice, aromatic and aged, meeting international export standards.",
    price: "$880 - $1,200",
    priceRange: "880-1200",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: p8,
    gallery: [p8, p7],
    category: "rice",
    details: [
      "Premium Basmati 1121 variety",
      "Long grain aromatic rice",
      "Clean and graded",
      "Proper moisture control",
      "Export-compliant documentation",
      "Residue compliance (EU standards)",
    ],
  },
  {
    id: "sona-masuri",
    name: "Sona Masuri Rice",
    description: "High-quality Sona Masuri rice, a popular Indian medium-grain variety known for its lightweight and aromatic qualities.",
    price: "$510 -$580",
    priceRange: "510-580",
    unit: "1 MTN (FOB)",
    minOrder: "10 MTN",
    image: p10,
    gallery: [p10, p9],
    category: "rice",
    details: [
      "Premium Sona Masuri variety",
      "Medium grain rice",
      "Clean and properly graded",
      "Moisture controlled",
      "Bulk container supply",
      "Stable long-term supply",
    ],
  },

  // ── Basmati 1121 Grades (linked from /basmati-1121 page) ──
  {
    id: "basmati-1121-white",
    name: "1121 White / Raw",
    description: "Unprocessed Basmati 1121 with best aroma & soft texture. Extra long grain, 8.35mm+. Most popular for fine dining & EU retail.",
    price: "$1,060",
    unit: "1 MT (FOB)",
    minOrder: "1 FCL (25 MT)",
    image: basmatiRice,
    gallery: [basmatiRice],
    category: "rice",
    details: [
      "Grain Length: 8.35mm+",
      "Elongation: 2.5x+",
      "Moisture: Max 12-13%",
      "Purity: 95%+",
      "Broken: Max 1-3%",
      "APEDA & FDA Certified",
    ],
  },
  {
    id: "basmati-1121-steam",
    name: "1121 Steam",
    description: "Steamed in husk, durable white color, firm texture. Most traded Basmati grade globally for GCC & food service.",
    price: "$1,050",
    unit: "1 MT (FOB)",
    minOrder: "1 FCL (25 MT)",
    image: basmatiRice,
    gallery: [basmatiRice],
    category: "rice",
    details: [
      "Grain Length: 8.35mm+",
      "Steamed in husk process",
      "Moisture: Max 12-13%",
      "Purity: 95%+",
      "Broken: Max 1-3%",
      "APEDA & FDA Certified",
    ],
  },
  {
    id: "basmati-1121-white-sella",
    name: "1121 White Sella",
    description: "Parboiled Basmati 1121, resistant to overcooking. Ideal for large-scale catering & institutions.",
    price: "$930",
    unit: "1 MT (FOB)",
    minOrder: "1 FCL (25 MT)",
    image: basmatiRice,
    gallery: [basmatiRice],
    category: "rice",
    details: [
      "Grain Length: 8.35mm+",
      "Parboiled process",
      "Moisture: Max 12-13%",
      "Purity: 95%+",
      "Broken: Max 1-3%",
      "APEDA & FDA Certified",
    ],
  },
  {
    id: "basmati-1121-golden",
    name: "1121 Golden Sella",
    description: "Deep golden hue, nutty flavor, maximum shelf life. Preferred in Middle East markets for biryani.",
    price: "$1,060",
    unit: "1 MT (FOB)",
    minOrder: "1 FCL (25 MT)",
    image: basmatiRice,
    gallery: [basmatiRice],
    category: "rice",
    details: [
      "Grain Length: 8.30mm+",
      "Golden parboiled process",
      "Moisture: Max 12-13%",
      "Purity: 95%+",
      "Extended shelf life",
      "APEDA & FDA Certified",
    ],
  },
];
