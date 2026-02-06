"use client";

import Navbar from "@/components/navbar";
import { templates, Tier } from "@/data/templates";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function TemplatesPage() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return templates;
    return templates.filter((t) =>
      [t.title, t.description, t.category, t.tags.join(" ")].join(" ").toLowerCase().includes(s)
    );
  }, [q]);

  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14">
        <div className="lux-card p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Tasarımlar</h1>
          <p className="lux-muted mt-2">
            Model seç → biz kurup teslim edelim. Şablon satışı yok.
          </p>

          <div className="mt-5 flex flex-col md:flex-row gap-3">
            <input
              className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-white/25 transition"
              placeholder="Model ara (genel, aşk, vitrin, galeri...)"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {list.map((t) => (
            <div key={t.slug} className="lux-card overflow-hidden">
              <div
                className="h-[200px]"
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,.70)), url('${t.previewByTier.mid}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs lux-muted">{t.category}</div>
                    <div className="mt-1 text-lg font-semibold">{t.title}</div>
                  </div>

                  {t.badge && (
                    <div className="text-right">
                      <div className="inline-flex items-center text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5">
                        <span className="lux-gold font-semibold">{t.badge.text}</span>
                      </div>
                      {t.badge.note && (
                        <div className="mt-2 text-xs lux-muted max-w-[220px]">
                          {t.badge.note}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <p className="mt-3 text-sm lux-muted">{t.description}</p>

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

                <div className="mt-5 flex gap-3">
                  <Link
                    href={`/templates/${t.slug}?tier=mid`}
                    className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm font-medium"
                  >
                    İncele
                  </Link>

                  <Link
                    href={`/order?template=${t.slug}&tier=mid`}
                    className="lux-btn px-4 py-2 text-sm font-medium"
                  >
                    Teklif Al
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer className="py-14 lux-muted text-sm mx-auto max-w-6xl">
          © {new Date().getFullYear()} Avory Web
        </footer>
      </section>
    </main>
  );
}
