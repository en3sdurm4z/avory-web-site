"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function TemplateCard({
  title,
  tag,
  prices,
  desc,
  slug,
}: {
  title: string;
  tag: string;
  prices: { low: number | string; mid: number | string; high: number | string };
  desc: string;
  slug: string;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const bg = useMemo(
    () =>
      `radial-gradient(500px 220px at 20% 15%, rgba(214,178,93,.22), transparent 60%),
       radial-gradient(520px 260px at 80% 0%, rgba(120,140,255,.14), transparent 60%),
       linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))`,
    []
  );

  return (
    <motion.div
      className="lux-card p-5 relative overflow-hidden"
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        background: bg,
      }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        setTilt({
          ry: (px - 0.5) * 7,
          rx: -(py - 0.5) * 7,
        });
      }}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div
        className="pointer-events-none absolute -inset-24 opacity-60 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(214,178,93,.20), transparent 55%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="text-xs rounded-full border border-white/12 bg-white/5 px-3 py-1 lux-muted">
            {tag}
          </span>
          <span className="text-xs lux-muted">Model</span>
        </div>

        <h3 className="mt-4 text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm lux-muted">{desc}</p>

        <div className="mt-4 grid gap-2">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-sm">Başlangıç</span>
            <span className="text-sm lux-muted">{prices.low} TL</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-sm">Standart</span>
            <span className="text-sm lux-muted">{prices.mid} TL</span>
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-sm">Premium</span>
            <span className="text-sm lux-muted">{prices.high} TL</span>
          </div>
        </div>

        <div className="mt-5 flex gap-3">
          <Link href={`/templates/${slug}`} className="lux-btn px-4 py-2 text-sm">
            İncele
          </Link>
          <Link
            href={`/order?template=${slug}&tier=mid`}
            className="px-4 py-2 text-sm rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
