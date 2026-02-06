import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-black/35 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-5 md:px-10 py-4 flex items-center justify-between">
          <Link href="/" className="brand" aria-label="Avory Web Ana Sayfa">
            <span className="brand-mark" aria-hidden />
            <span className="brand-text">
              <span className="brand-avory">Avory</span>
              <span className="brand-web">Web</span>
            </span>
          </Link>

          <nav className="flex items-center gap-5 text-sm">
            <Link href="/templates" className="text-white/80 hover:text-white transition">
              Tasarımlar
            </Link>
            <Link href="/pricing" className="text-white/80 hover:text-white transition">
              Paketler
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-white transition">
              İletişim
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
