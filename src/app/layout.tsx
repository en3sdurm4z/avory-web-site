import "./globals.css";
import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-brand",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Avory Web",
  description: "Model seç → biz kurup teslim edelim. Hazır şablon satışı yok.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="lux-vignette">
        {children}
      </body>
    </html>
  );
}
