import Link from "next/link";
import { templates, type Template } from "@/data/templates";

const categoryLabelFallback: Record<string, string> = {
  corporate: "Kurumsal",
  personal: "Kişisel",
  ecommerce: "E-Ticaret",
  event: "Özel Gün",
};

export default function TemplateGrid() {
  const top3 = templates.slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold">Tasarım modelleri</h2>
          <p className="lux-muted text-sm mt-1">
            Temiz bir başlangıç için üç öneri. Beğendiğin stile göre kurup teslim edelim.
          </p>
        </div>

        <Link
          href="/templates"
          className="hidden md:inline-flex rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          Tümünü gör
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5 pt-6">
        {top3.map((t: Template) => {
          const cat = categoryLabelFallback[t.category] ?? t.category ?? "Kategori";

          return (
            <div key={t.slug} className="lux-card p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs rounded-full border border-white/12 bg-white/5 px-3 py-1 lux-muted">
                  {cat}
                </span>
                <span className="text-xs lux-muted">Model</span>
              </div>

              <h3 className="mt-4 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm lux-muted">{t.description}</p>

              {/* ✅ Paketler başlığı */}
              <div className="mt-4">
                <div className="text-xs lux-muted mb-2">Paketler</div>

                <div className="grid gap-2">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                    <span className="text-sm">Düşük</span>
                    <span className="text-sm lux-muted">{t.prices.low} TL</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
                    <span className="text-sm">Orta</span>
                    <span className="text-sm lux-muted">{t.prices.mid} TL</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex gap-3">
                <Link
                  href={`/templates/${t.slug}`}
                  className="lux-btn px-4 py-2 text-sm font-medium"
                >
                  İncele
                </Link>
                <Link
                  href={`/order?template=${t.slug}&tier=mid`}
                  className="px-4 py-2 text-sm font-medium rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition"
                >
                  Teklif Al
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden mt-5">
        <Link href="/templates" className="lux-btn inline-block px-5 py-3 text-sm font-medium">
          Tüm tasarımları gör
        </Link>
      </div>
    </section>
  );
}
