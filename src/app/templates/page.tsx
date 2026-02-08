import Navbar from "@/components/navbar";
import TemplateGrid from "@/components/template-grid";
import Link from "next/link";

const EMAIL = "info@avoryweb.com";

export default function HomePage() {
  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14 space-y-6">
        {/* HERO */}
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
                <Link href="/contact" className="lux-btn px-5 py-3 text-sm font-medium text-center">
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

        {/* Süreç (kısa güven metni) */}
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
            <Link href="/contact" className="lux-btn px-5 py-3 text-sm font-medium text-center">
              İhtiyacı yaz, dönüş yapalım
            </Link>
          </div>
        </section>

        {/* ✅ Nasıl çalışıyoruz */}
        <section id="process" className="lux-card p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-lg md:text-xl font-semibold">Nasıl çalışıyoruz?</h2>
              <p className="mt-2 lux-muted text-sm leading-relaxed max-w-2xl">
                Kafa karıştırmadan, net bir süreç. İşi büyütmek istersen sonrasında da beraber geliştiririz.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm font-medium"
            >
              Hemen yaz
            </Link>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs lux-muted">1. Adım</div>
              <div className="mt-1 text-base font-semibold">Modeli seç</div>
              <p className="mt-2 text-sm lux-muted">
                Tasarımlar arasından bir stil seçiyorsun. Sektörüne göre uyarlıyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs lux-muted">2. Adım</div>
              <div className="mt-1 text-base font-semibold">İçeriği netleştir</div>
              <p className="mt-2 text-sm lux-muted">
                Sayfalar, metinler, görseller, iletişim bilgileri… Hepsini düzenli hale getiriyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-xs lux-muted">3. Adım</div>
              <div className="mt-1 text-base font-semibold">Kurup teslim edelim</div>
              <p className="mt-2 text-sm lux-muted">
                Mobil uyum + son kontrol + yayın hazırlığı. Teslim sonrası güncellemelerde de yanındayız.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              href="/templates"
              className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-5 py-3 text-sm font-medium text-center"
            >
              Modelleri incele
            </Link>
            <Link href="/contact" className="lux-btn px-5 py-3 text-sm font-medium text-center">
              Teklif al
            </Link>
          </div>
        </section>

        {/* ✅ Güven / Hakkımızda mini */}
        <section className="lux-card p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-semibold">Kısa not</h2>
          <p className="mt-2 lux-muted text-sm leading-relaxed">
            Avory Web, “şablon satıp geçmez”. Seçtiğin modele göre siteni kurar, düzenler ve teslim eder.
            İletişimde hızlıyız — genelde <span className="text-white">24 saat</span> içinde dönüş yaparız.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-5 py-3 text-sm font-medium"
            >
              Mail: {EMAIL}
            </a>

            <Link href="/contact" className="lux-btn px-5 py-3 text-sm font-medium text-center">
              İletişime geç
            </Link>
          </div>
        </section>

        <footer className="py-10 lux-muted text-sm">
          © {new Date().getFullYear()} Avory Web • Profesyonel web site kurulumu •{" "}
          <a className="underline underline-offset-4 hover:text-white transition" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </footer>
      </section>
    </main>
  );
}
