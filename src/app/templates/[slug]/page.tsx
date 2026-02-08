import Navbar from "@/components/navbar";
import { templates } from "@/data/templates";
import Link from "next/link";

const tierName: Record<"low" | "mid", string> = {
  low: "Düşük",
  mid: "Orta",
};

function isTier(v: string | undefined): v is "low" | "mid" {
  return v === "low" || v === "mid";
}

export default async function TemplateDetailPage({
  params,
  searchParams,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
  searchParams?: { tier?: string } | Promise<{ tier?: string }>;
}) {
  const { slug } = await Promise.resolve(params);
  const sp = await Promise.resolve(searchParams ?? {});

  const tier: "low" | "mid" = isTier(sp.tier) ? sp.tier : "mid";

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

  const img =
    t.previewByTier?.[tier] ||
    t.previewByTier?.mid ||
    t.previewByTier?.low ||
    "";

  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14">
        <div className="lux-card overflow-hidden">
          
          {/* ✅ GÖRSEL ALANI – KIRPMA YOK */}
          <div className="h-[300px] md:h-[420px] bg-black/25">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: img ? `url('${img}')` : undefined,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <div className="text-xs lux-muted">{t.category}</div>
                <h1 className="mt-2 text-2xl md:text-3xl font-semibold">
                  {t.title}
                </h1>
                <p className="lux-muted mt-2 text-sm">{t.description}</p>
              </div>

              <div className="lux-card p-4">
                <div className="text-xs lux-muted">Seçim</div>
                <div className="mt-2 text-sm">
                  Paket: <span className="text-white">{tierName[tier]}</span>
                </div>
                <div className="mt-1 text-sm">
                  Fiyat:{" "}
                  <span className="lux-gold font-semibold">{price} TL</span>
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

            {/* Paket seçimi */}
            <div className="mt-6">
              <div className="text-xs lux-muted mb-2">Paketler</div>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href={`/templates/${t.slug}?tier=low`}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    tier === "low"
                      ? "border-white/25 bg-white/12"
                      : "border-white/12 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  Düşük
                </Link>
                <Link
                  href={`/templates/${t.slug}?tier=mid`}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    tier === "mid"
                      ? "border-white/25 bg-white/12"
                      : "border-white/12 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  Orta
                </Link>
              </div>
            </div>

            {/* Paket içeriği */}
            <div className="mt-6 lux-card p-5">
              <div className="text-sm font-semibold">Paket İçeriği</div>
              <p className="mt-1 text-xs lux-muted">
                Seçtiğin pakete göre teslim edilen içerik listesi:
              </p>

              <ul className="mt-4 space-y-2">
                {t.included[tier].map((item) => (
                  <li key={item} className="flex gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300/80" />
                    <span className="lux-muted">{item}</span>
                  </li>
                ))}
              </ul>
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
