import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TemplateGrid from "@/components/template-grid";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14 space-y-6">
        <Hero />

        <TemplateGrid />

        <section className="lux-card p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-semibold">
            Net bir süreç, temiz bir sonuç
          </h2>
          <p className="mt-2 lux-muted text-sm leading-relaxed">
            Önce örneklerden birini seçiyorsun. Sonra sayfaları ve içerikleri
            belirliyoruz. Kurulum bittikten sonra bağlantıları, iletişim alanlarını
            ve mobil düzeni kontrol edip teslim ediyoruz.
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
