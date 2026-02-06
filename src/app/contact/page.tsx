import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <main className="px-5 md:px-10">
      <Navbar />

      <section className="mx-auto max-w-6xl pt-10 md:pt-14">
        <div className="lux-card p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-semibold">İletişim</h1>
          <p className="lux-muted mt-2">
            Kısaca ne istediğini yaz — aynı gün dönüş yaparım.
          </p>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <div className="lux-card p-5">
              <div className="text-sm lux-muted">Hızlı İletişim</div>
              <div className="mt-3 text-sm">
                WhatsApp: <span className="lux-gold font-semibold">+90 538 431 06 23</span>
              </div>
              <div className="mt-3 text-xs lux-muted">
                Mesaj atarken: “Genel / Aşk Hikayesi + Düşük/Orta” yazarsan direkt anlarım.
              </div>
            </div>

            <div className="lux-card p-5">
              <div className="text-sm lux-muted">Not</div>
              <div className="mt-3 text-sm lux-muted">
                Fiyat ve teslim süresi; içerik, sayfa sayısı ve isteklerine göre netleşir.
              </div>
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
