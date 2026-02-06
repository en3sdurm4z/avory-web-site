export type Level = "low" | "mid";

export type ShowcaseItem = {
  id: string;
  title: string;
  level: Level;
  price: number;
  image: string;
  note: string;
  features?: string[];
};

export type ShowcaseCategory = {
  key: string;
  title: string;
  description: string;
  badge?: string;
  items: ShowcaseItem[];
};

export const showcase: ShowcaseCategory[] = [
  {
    key: "general",
    title: "Genel Web Sitesi",
    description:
      "Kurumsal, kişisel veya proje amaçlı web siteleri. Temiz, hızlı ve anlaşılır yapı.",
    items: [
      {
        id: "general-low",
        title: "Genel Site — Düşük",
        level: "low",
        price: 1000,
        image: "/previews/general-low.jpg",
        note: "Tek sayfa, sade tasarım. Küçük işletmeler için ideal.",
        features: ["Tek sayfa", "Mobil uyum", "WhatsApp/İletişim bağlantısı"],
      },
      {
        id: "general-mid",
        title: "Genel Site — Orta",
        level: "mid",
        price: 2100,
        image: "/previews/general-mid.jpg",
        note: "Daha zengin bölüm yapısı ve daha güçlü görsel düzen.",
        features: ["Daha fazla bölüm", "Temel SEO", "Daha güçlü görsel düzen"],
      },
    ],
  },
  {
    key: "love",
    title: "Aşk Hikâyesi — Sevgiliye Özel",
    badge: "14 Şubat",
    description:
      "Fotoğraflar, küçük notlar ve anılarla hazırlanmış özel bir sayfa. Sevgilin için unutulmaz bir hediye.",
    items: [
      {
        id: "love-low",
        title: "Aşk Hikâyesi — Düşük",
        level: "low",
        price: 850,
        image: "/previews/love-low.jpg",
        note: "Fotoğraflar ve kısa metinlerle hazırlanan sade bir aşk sayfası.",
        features: ["Foto alanı", "Kısa notlar", "Mobil uyum"],
      },
      {
        id: "love-mid",
        title: "Aşk Hikâyesi — Orta",
        level: "mid",
        price: 1650,
        image: "/previews/love-mid.jpg",
        note: "Foto galeri + daha zengin anlatım + daha özel his.",
        features: ["Galeri", "Daha zengin metin alanı", "Daha güçlü tasarım"],
      },
    ],
  },
];
