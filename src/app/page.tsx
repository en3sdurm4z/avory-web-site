import Navbar from "@/components/navbar";
import TemplateGrid from "@/components/template-grid";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14 space-y-6">
        {/* HERO (görselsiz, premium, insan işi metin) */}
        <section className="relative overflow-hidden rounded-3xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/60" />
          <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

          <div className="relative p-6 md:p-10">
            <div className="lux-card p-6 md:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs lux-muted">
                Avory Web • Kurulum + Teslim
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-semibold leading-tight">
                İyi görünen bir site, güven verir.
                <span className="block mt-2 lux-gold">Biz onu düzenli ve sağlam kuruyoruz.</span>
              </h1>

              <p className="mt-4 lux-muted text-sm md:text-base max-w-2xl leading-relaxed">
                Hazır şablonları “satıp geçmiyoruz”. Seçtiğin modele göre sayfalarını kuruyor, içeriklerini yerleştiriyor,
                mobil uyumunu düzenliyor ve teslim ediyoruz. İstersen sonrasında birlikte geliştirmeye devam ederiz.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/templates"
                  className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-5 py-3 text-sm font-medium text-center"
                >
                  Tasarımları Gör
                </Link>
                <Link
                  href="/contact"
                  className="lux-btn px-5 py-3 text-sm font-medium text-center"
                >
                  Kısa bir mesaj bırak
                </Link>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-sm font-semibold">Düzenli kurulum</div>
                  <p className="mt-1 text-sm lux-muted">
                    Sayfa yapısı, menüler, butonlar ve boşluklar “derli toplu” görünür.
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
                    İçerik güncellemeleri ve ek sayfalar için birlikte ilerleyebiliriz.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs lux-muted">
                Not: Fiyat, içerik ve sayfa sayısına göre netleşir. Önce ihtiyacı anlayıp net bir çerçeve çıkarıyoruz.
              </p>
            </div>
          </div>
        </section>

        {/* Model seçimi */}
        <TemplateGrid />

        {/* Alt güven metni */}
        <section className="lux-card p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-semibold">Net bir süreç, temiz bir sonuç</h2>
          <p className="mt-2 lux-muted text-sm leading-relaxed">
            Önce örneklerden birini seçiyorsun. Sonra sayfaları ve içerikleri belirliyoruz. Kurulum bittikten sonra
            bağlantıları, iletişim alanlarını ve mobil düzeni kontrol edip teslim ediyoruz.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/pricing"
              className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-5 py-3 text-sm font-medium text-center"
            >
              Paketleri İncele
            </Link>
            <Link
              href="/contact"
              className="lux-btn px-5 py-3 text-sm font-medium text-center"
            >
              İhtiyacı yaz, dönüş yapalım
            </Link>
          </div>
        </section>

        <footer className="py-10 lux-muted text-sm">
          © {new Date().getFullYear()} Avory Web • Profesyonel web site kurulumu
        </footer>
      </section>
    </main>
  );
}
