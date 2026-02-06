"use client";

import Link from "next/link";
import { Template, Tier } from "@/data/templates";
import { useState } from "react";

const tierLabel: Record<Tier, string> = {
  low: "Düşük",
  mid: "Orta",
  high: "Yüksek",
};

export default function TemplateDetailClient({ t }: { t: Template }) {
  const [tier, setTier] = useState<Tier>("mid");

  const price = t.prices[tier];
  const features = t.features[tier];

  return (
    <section className="mx-auto max-w-6xl pt-10 md:pt-14">
      <div className="lux-card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">{t.title}</h1>
            <p className="lux-muted mt-2 max-w-2xl">{t.shortDesc}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full border border-white/12 bg-white/5 px-3 py-1 lux-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lux-card p-5 w-full md:w-[380px]">
            <div className="text-sm lux-muted">Paket seç</div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {(["low", "mid", "high"] as Tier[]).map((k) => {
                const active = tier === k;
                return (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setTier(k)}
                    className={
                      active
                        ? "lux-btn px-3 py-2 text-sm font-medium"
                        : "rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-3 py-2 text-sm"
                    }
                  >
                    {tierLabel[k]}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm lux-muted">Seçili paket</div>
              <div className="text-sm font-semibold">
                {tierLabel[tier]} • <span className="lux-gold">{price} TL</span>
              </div>
            </div>

            <Link
              href={`/order?template=${t.slug}&tier=${tier}`}
              className="lux-btn block mt-5 px-4 py-3 text-sm font-medium text-center"
            >
              Bu paketle teklif al
            </Link>

            <div className="mt-3 text-xs lux-muted">
              * Paket içeriği işine göre netleştirilir.
            </div>
          </div>
        </div>

        <div className="mt-6 h-56 rounded-2xl border border-white/10 bg-white/5" />

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="lux-card p-5">
            <div className="lux-gold font-semibold">
              {tierLabel[tier]} Paket İçeriği
            </div>
            <ul className="mt-3 space-y-2 text-sm lux-muted">
              {features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <div className="mt-4 text-xs lux-muted">
              Teslim süresi:{" "}
              <span className="text-white">
                {tier === "low" ? "1-2 gün" : tier === "mid" ? "2-4 gün" : "4-7 gün"}
              </span>
            </div>
          </div>

          <div className="lux-card p-5">
            <div className="lux-gold font-semibold">Süreç</div>
            <ol className="mt-3 space-y-2 text-sm lux-muted">
              <li>1) Tasarımı ve paketi seç</li>
              <li>2) İçerik/isteklerini ilet</li>
              <li>3) İlk taslağı gönderelim</li>
              <li>4) Siteyi yayına alalım</li>
            </ol>

            <div className="mt-4 rounded-2xl border border-white/12 bg-white/5 p-4 text-sm lux-muted">
              “Şablon satmıyoruz — seçtiğin modele göre siteni biz kurup teslim ediyoruz.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
