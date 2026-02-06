import Navbar from "@/components/navbar";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14">
        <div className="lux-card p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">Paketler</h1>
          <p className="lux-muted mt-2">
            Düşük = hızlı kurulum, Orta = daha dolu içerik + daha premium detaylar.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <div className="lux-card p-6">
              <div className="text-sm lux-muted">Düşük Paket</div>
              <div className="mt-2 text-2xl font-semibold">1.490 TL+</div>
              <ul className="mt-4 text-sm lux-muted space-y-2">
                <li>• Tek sayfa / mini vitrin</li>
                <li>• WhatsApp / iletişim yönlendirme</li>
                <li>• Temel SEO (başlık/açıklama)</li>
              </ul>
            </div>

            <div className="lux-card p-6">
              <div className="text-sm lux-muted">Orta Paket</div>
              <div className="mt-2 text-2xl font-semibold">2.490 TL+</div>
              <ul className="mt-4 text-sm lux-muted space-y-2">
                <li>• Daha dolu içerik yapısı</li>
                <li>• Galeri / bölümler / ekstra sayfalar</li>
                <li>• Daha premium animasyon & düzen</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Link href="/templates" className="lux-btn px-5 py-3 text-sm font-medium">
              Tasarımları İncele
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-5 py-3 text-sm font-medium"
            >
              Fiyatı netleştirelim
            </Link>
          </div>
        </div>

        <footer className="py-14 lux-muted text-sm mx-auto max-w-6xl">
          © {new Date().getFullYear()} Avory Web
        </footer>
      </section>
    </main>
  );
}
