"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10">
      {/* Clean, image-free background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-400/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative px-5 md:px-10 py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-white/12 bg-black/35 backdrop-blur-lg p-5 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300/90" />
              Avory Web • Kurulum + Teslim
            </div>

            <h1 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight text-white">
              Web siteni birlikte <span className="lux-gold">toparlayalım</span>.
            </h1>

            <p className="mt-3 text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
              Model seç, biz aynı tarzda siteni kurup teslim edelim. Hazır “şablon satışı” değil; ihtiyaç odaklı kurulum.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/templates"
                className="rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition px-5 py-3 text-sm font-semibold text-white/95 text-center"
              >
                Tasarımlara Bak
              </Link>

              <Link
                href="/contact"
                className="lux-btn inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white/95"
              >
                Teklif Al
              </Link>
            </div>

            <p className="mt-4 text-xs text-white/55">
              Not: Fiyat ve teslim süresi içerik/sayfa sayısına göre netleşir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
