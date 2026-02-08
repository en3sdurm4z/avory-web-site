export type Tier = "low" | "mid" | "high";
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

  // ✅ Yeni: paket içerikleri
  included: Record<"low" | "mid", string[]>;
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
      high: "/previews/general-mid.jpg",
    },
    prices: {
      low: 1490,
      mid: 2490,
      high: 3490,
    },
    included: {
      low: [
        "Tek sayfa vitrin (anasayfa)",
        "WhatsApp + telefon + konum bağlantısı",
        "1 görsel/kapak düzeni",
        "Mobil uyum (temel)",
        "Kurulum + teslim (yayına hazır)",
      ],
      mid: [
        "3 sayfa: Anasayfa + Hakkında + İletişim",
        "Daha zengin bölüm yapısı (hizmetler/alanlar)",
        "Google Maps gömme + iletişim alanı",
        "Temel SEO: başlıklar + meta açıklama",
        "Daha güçlü tasarım + hız düzeni",
      ],
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
      high: "/previews/love-mid.jpg",
    },
    prices: {
      low: 1690,
      mid: 2790,
      high: 3890,
    },
    badge: {
      text: "NEW",
      note: "14 Şubat’a özel: küçük bir sürpriz ekleyelim mi?",
    },
    included: {
      low: ["Tek sayfa akış", "3–5 foto alanı", "1 özel mesaj bölümü", "Mobil uyum (temel)"],
      mid: [
        "Galeri + zaman çizgisi",
        "8–15 foto alanı",
        "2–3 özel mesaj/sürpriz bölümü",
        "Daha güçlü tasarım + animasyon dokunuşları",
      ],
    },
  },
];
