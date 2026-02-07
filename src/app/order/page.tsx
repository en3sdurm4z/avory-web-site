import Navbar from "@/components/navbar";
import { Suspense } from "react";
import OrderClient from "./order-client";

export default function OrderPage() {
  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <Suspense
        fallback={
          <section className="mx-auto max-w-6xl pt-10 md:pt-14">
            <div className="lux-card p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-semibold">Teklif Al</h1>
              <p className="lux-muted mt-2">Sayfa hazırlanıyor…</p>
            </div>
          </section>
        }
      >
        <OrderClient />
      </Suspense>
    </main>
  );
}
