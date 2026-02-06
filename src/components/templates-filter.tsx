"use client";

import { Category } from "@/data/templates";

const fieldClass =
  "w-full rounded-2xl border border-white/20 bg-white/85 px-4 py-3 text-sm " +
  "text-neutral-900 placeholder:text-neutral-500 outline-none " +
  "focus:border-white/40 focus:bg-white transition";

export default function TemplatesFilter({
  q,
  setQ,
  cat,
  setCat,
  tag,
  setTag,
  allTags,
}: {
  q: string;
  setQ: (v: string) => void;
  cat: Category | "all";
  setCat: (v: Category | "all") => void;
  tag: string;
  setTag: (v: string) => void;
  allTags: string[];
}) {
  return (
    <div className="lux-card p-5 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm mb-1 lux-muted">Arama</label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Örn: kuaför, portfolyo, sürpriz..."
            className={fieldClass}
          />
        </div>

        <div>
          <label className="block text-sm mb-1 lux-muted">Kategori</label>
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value as Category | "all")}
            className={fieldClass}
          >
            <option value="all">Hepsi</option>
            <option value="business">İşletme</option>
            <option value="love">Özel</option>
            <option value="portfolio">Kişisel</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1 lux-muted">Etiket</label>
          <select
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className={fieldClass}
          >
            <option value="">Tümü</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={() => {
            setQ("");
            setCat("all");
            setTag("");
          }}
          className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
        >
          Filtreyi Sıfırla
        </button>
      </div>
    </div>
  );
}
