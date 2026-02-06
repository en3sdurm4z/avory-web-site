import Navbar from "@/components/navbar";
import { templates, Tier } from "@/data/templates";
import Link from "next/link";

const tierName: Record<Tier, string> = {
  low: "Düşük",
  mid: "Orta",
};

export default async function TemplateDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ tier?: Tier }>;
}) {
  const { slug } = await params;
  const sp = (await searchParams) || {};

  const rawTier = sp.tier as Tier | undefined;
  const tier: Tier = rawTier === "low" || rawTier === "mid" ? rawTier : "mid";

  const t = templates.find((x) => x.slug === slug);

  if (!t) {
    return (
      <main className="px-5 md:px-10">
        <Navbar />
        <section className="mx-auto max-w-6xl pt-10 md:pt-14">
          <div className="lux-card p-6">
            <h1 className="text-xl font-semibold">Model bulunamadı</h1>
            <p className="lux-muted mt-2">Link eski olabilir. Tasarımlara geri dön.</p>
            <Link
              href="/templates"
              className="lux-btn inline-block mt-4 px-4 py-2 text-sm font-medium"
            >
              Tasarımlara dön
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const price = t.prices[tier];
  const img = t.previewByTier?.[tier] || t.previewByTier?.mid;

  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14">
        <div className="lux-card overflow-hidden">
          <div
            className="h-[300px] md:h-[420px]"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.10), rgba(0,0,0,.75)), url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="text-xs lux-muted">{t.category}</div>
                <h1 className="mt-2 text-2xl md:text-3xl font-semibold">{t.title}</h1>
                <p className="lux-muted mt-2 text-sm">{t.description}</p>
              </div>

              <div className="lux-card p-4">
                <div className="text-xs lux-muted">Seçim</div>
                <div className="mt-2 text-sm">
                  Paket: <span className="text-white">{tierName[tier]}</span>
                </div>
                <div className="mt-1 text-sm">
                  Fiyat: <span className="lux-gold font-semibold">{price} TL</span>
                </div>

                <Link
                  href={`/order?template=${t.slug}&tier=${tier}`}
                  className="lux-btn inline-block mt-4 px-4 py-2 text-sm font-medium"
                >
                  Teklif Al
                </Link>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs rounded-full border border-white/12 bg-white/5 px-3 py-1 lux-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href={`/templates/${t.slug}?tier=low`}
                className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm font-medium"
              >
                Düşük Önizleme
              </Link>
              <Link
                href={`/templates/${t.slug}?tier=mid`}
                className="rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition px-4 py-2 text-sm font-medium"
              >
                Orta Önizleme
              </Link>
            </div>
          </div>
        </div>

        <footer className="py-14 lux-muted text-sm mx-auto max-w-6xl">
          © {new Date().getFullYear()} Avory Web
        </footer>
      </section>
    </main>
  );
}
