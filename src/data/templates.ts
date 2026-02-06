export type Tier = "low" | "mid";
export type Category = "Genel" | "Özel";

export type Template = {
  slug: string;
  title: string;
  category: Category;
  description: string;
  tags: string[];
  previewByTier: Record<Tier, string>;
  prices: Record<Tier, number>;
  badge?: { text: string; note?: string };
};

export const templates: Template[] = [
  {
    slug: "general",
    title: "Genel Tanıtım",
    category: "Genel",
    description:
      "İşletme / hizmet / kişisel tanıtım için temiz vitrin. Hızlı iletişim + net anlatım.",
    tags: ["Vitrin", "Hizmet", "İletişim"],
    previewByTier: {
      low: "/previews/general-low.jpg",
      mid: "/previews/general-mid.jpg",
    },
    prices: {
      low: 1490,
      mid: 2490,
    },
  },
  {
    slug: "ask-hikayesi",
    title: "Aşk Hikayesi",
    category: "Özel",
    description:
      "Sevdiğine özel mini site: fotoğraflar, kısa notlar, zaman çizgisi ve sürpriz bölüm.",
    tags: ["Anı", "Galeri", "Sürpriz"],
    previewByTier: {
      low: "/previews/love-low.jpg",
      mid: "/previews/love-mid.jpg",
    },
    prices: {
      low: 1690,
      mid: 2790,
    },
    badge: {
      text: "NEW",
      note: "14 Şubat’a özel: küçük bir sürpriz ekleyelim mi?",
    },
  },
];
