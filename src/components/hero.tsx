"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/65" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative p-6 md:p-10">
        <div className="lux-card p-6 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs lux-muted">
            Avory Web • Kurulum + Teslim
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-semibold leading-tight">
            Site kurmak zor değil.
            <span className="block mt-2 lux-gold">
              Zor olan: temiz, güven veren bir düzen kurmak.
            </span>
          </h1>

          <p className="mt-4 lux-muted text-sm md:text-base max-w-2xl leading-relaxed">
            Hazır şablon satmıyoruz. Seçtiğin modele göre sayfalarını kuruyor, içeriklerini yerleştiriyor,
            mobil uyumunu düzenliyor ve teslim ediyoruz.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Link
              href="/templates"
              className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-5 py-3 text-sm font-medium text-center"
            >
              Modelleri Gör
            </Link>
            <Link href="/contact" className="lux-btn px-5 py-3 text-sm font-medium text-center">
              Hemen Yaz (Teklif Al)
            </Link>
          </div>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Düzenli kurulum</div>
              <p className="mt-1 text-sm lux-muted">
                Menü, butonlar, boşluklar ve bölümler “derli toplu” görünür.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Mobil uyum</div>
              <p className="mt-1 text-sm lux-muted">
                Telefon ekranında taşma/kayma olmadan okunaklı bir düzen.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-semibold">Teslim sonrası</div>
              <p className="mt-1 text-sm lux-muted">
                İçerik güncelleme ve ek sayfalarda birlikte ilerleyebiliriz.
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs lux-muted">
            Not: Fiyat, içerik ve sayfa sayısına göre netleşir. Önce ihtiyacı anlayıp net bir çerçeve çıkarıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}
