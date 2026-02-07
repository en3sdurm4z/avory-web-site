"use client";

import Link from "next/link";
import { templates, Tier } from "@/data/templates";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const PHONE = "905384310623"; // 90 ile başlasın (TR)

const tierLabel: Record<Tier, string> = {
  low: "Düşük",
  mid: "Orta",
  high: "Yüksek",
};

function isTier(v: string | null): v is Tier {
  return v === "low" || v === "mid" || v === "high";
}

export default function OrderClient() {
  const sp = useSearchParams();

  const rawTier = sp.get("tier");
  const tier: Tier = isTier(rawTier) ? rawTier : "mid";

  const rawTemplate = sp.get("template");
  const fallbackSlug = templates[0]?.slug || "";
  const templateSlug = rawTemplate && rawTemplate.trim() ? rawTemplate : fallbackSlug;

  const t = templates.find((x) => x.slug === templateSlug) ?? templates[0];

  if (!t) {
    return (
      <section className="mx-auto max-w-6xl pt-10 md:pt-14">
        <div className="lux-card p-6 md:p-8">
          <h1 className="text-2xl font-semibold">Şu an model bulunamadı</h1>
          <p className="lux-muted mt-2">
            Template listesi boş görünüyor. Lütfen /data/templates dosyanı kontrol et.
          </p>
          <Link href="/templates" className="lux-btn inline-block mt-4 px-5 py-3 text-sm font-medium">
            Tasarımlara dön
          </Link>
        </div>
      </section>
    );
  }

  const price = t.prices[tier];

  const [name, setName] = useState("");
  const [project, setProject] = useState("");
  const [note, setNote] = useState("");

  const message = useMemo(() => {
    const lines = [
      "Merhaba, Avory Web üzerinden teklif almak istiyorum.",
      "",
      `• Seçtiğim model: ${t.title}`,
      `• Paket: ${tierLabel[tier]}`,
      `• Fiyat: ${price} TL`,
      "",
      "Bu modele göre web sitemin kurulmasını istiyorum.",
      "",
      `Ad Soyad: ${name || "-"}`,
      `İş/Proje: ${project || "-"}`,
      `Not: ${note || "-"}`,
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [t.title, tier, price, name, project, note]);

  const waLink = `https://api.whatsapp.com/send?phone=${PHONE}&text=${message}`;

  return (
    <section className="mx-auto max-w-6xl pt-10 md:pt-14">
      <div className="lux-card p-6 md:p-8">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Teklif Al</h1>
            <p className="lux-muted mt-2">
              Şablon satmıyoruz — seçtiğin modele göre web siteni kurup teslim ediyoruz.
            </p>
          </div>

          <Link
            href="/templates"
            className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm font-medium"
          >
            Model değiştir
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="lux-card p-5">
            <div className="text-sm lux-muted">Seçimin</div>
            <div className="mt-2 text-lg font-semibold">{t.title}</div>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border border-white/12 bg-white/5 px-3 py-1 lux-muted">
                Paket: {tierLabel[tier]}
              </span>
              <span className="text-xs rounded-full border border-white/12 bg-white/5 px-3 py-1 lux-muted">
                Fiyat: <span className="text-white">{price} TL</span>
              </span>
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm lux-muted">
              İstersen bilgileri doldur, WhatsApp mesajı otomatik hazırlanacak.
            </div>

            <div className="mt-4 text-xs lux-muted">
              * Paket içeriği ve teslim süresi işine göre netleştirilir.
            </div>
          </div>

          <div className="lux-card p-5">
            <label className="block text-sm lux-muted">Ad Soyad (opsiyonel)</label>
            <input
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25 transition"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Örn: Enes Durmaz"
            />

            <label className="block text-sm lux-muted mt-4">İş / Proje (opsiyonel)</label>
            <input
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25 transition"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Örn: İşletme / Portfolyo / Sevgiliye Özel"
            />

            <label className="block text-sm lux-muted mt-4">Not (opsiyonel)</label>
            <textarea
              className="mt-2 w-full min-h-[120px] rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25 transition"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Sayfa sayısı, renkler, örnek site, özel istek..."
            />

            <a
              className="lux-btn block mt-5 px-5 py-3 text-sm font-medium text-center"
              href={waLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan Teklif İste
            </a>

            <div className="mt-3 text-xs lux-muted">
              * WhatsApp mesajı otomatik hazırlanır.
            </div>
          </div>
        </div>
      </div>

      <footer className="py-14 lux-muted text-sm mx-auto max-w-6xl">
        © {new Date().getFullYear()} Avory Web
      </footer>
    </section>
  );
}
