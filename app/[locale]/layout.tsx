import type { Metadata } from "next"
import "../globals.css"
import { hasLocale } from "next-intl"
import { getMessages } from "next-intl/server"
import { routing } from "@/i18n/routing"
import { Providers } from "@/providers/Providers"
import { Navbar } from "@/components/layout/Navbar"
import SmoothScroll from "@/components/layout/SmoothScroll"
import PageTransition from "@/components/layout/PageTransition"
import BackToTop from "@/components/BackToTop"
import TopProgressBar from "@/components/ui/TopProgressBar"
import LanguageTransitionOverlay from "@/components/shared/LanguageTransitionOverlay"

export const metadata: Metadata = {
  title: "Nuril Anwar | Full-Stack & Applied AI Developer",
  description:
    "Architectural portfolio of Nuril Anwar — Informatics Engineering student at Muhammadiyah University of Surakarta (UMS), Dicoding Bootcamp graduate, and Full-Stack & Applied AI Developer.",
}

/**
 * Komponen RootLayout Multi-Bahasa
 * Menampilkan tata letak utama (root layout) aplikasi untuk setiap lokal bahasa:
 * - Memvalidasi parameter `locale` terhadap daftar bahasa yang didukung (`en`, `id`) dengan default `en`
 * - Memuat berkas gaya global (Tailwind CSS dan CSS custom)
 * - Mengambil pesan terjemahan bahasa (`messages`) di tingkat server via `getMessages()`
 * - Menyematkan latar belakang bertekstur kertas (paper texture) yang elegan
 * - Membungkus seluruh aplikasi dengan `Providers`, `SmoothScroll` (Lenis + GSAP), dan `PageTransition`
 * - Menampilkan navigasi utama (`Navbar`) dan konten anak (`children`)
 *
 * @param {Object} props - Properti komponen layout
 * @param {React.ReactNode} props.children - Konten halaman anak yang dirender di dalam layout
 * @param {Promise<{ locale: string }>} props.params - Parameter rute dinamis yang berisi kode bahasa (locale)
 * @returns {Promise<JSX.Element>} Elemen struktur dokumen HTML lengkap dengan wrapper penyedia konteks
 */
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale: rawLocale } = await params
  const locale = hasLocale(routing.locales, rawLocale)
    ? rawLocale
    : routing.defaultLocale
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="relative min-h-screen bg-[#EBE3D7] text-[#1C1C1A] antialiased">
        {/* Tekstur kertas halus dan natural di latar belakang */}
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center opacity-[0.22] mix-blend-multiply"
          style={{ backgroundImage: "url('/paper-texture.jpg')" }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <TopProgressBar />
          <LanguageTransitionOverlay />
          <Providers locale={locale} messages={messages}>
            <SmoothScroll>
              <PageTransition>
                <Navbar />
                {children}
                <BackToTop />
              </PageTransition>
            </SmoothScroll>
          </Providers>
        </div>
      </body>
    </html>
  )
}
