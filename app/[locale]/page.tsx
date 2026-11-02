import { AboutSection } from "@/components/sections/About"
import { ContactSection } from "@/components/sections/Contact"
import { HeroSection } from "@/components/sections/Hero"
import { ProjectsSection } from "@/components/sections/Projects"

/**
 * Komponen HomePage (Halaman Beranda Utama)
 * Menampilkan struktur lengkap halaman depan portofolio satu halaman (single-page experience):
 * - HeroSection (01): Bagian pembuka dengan perkenalan singkat dan visual profil
 * - AboutSection (02): Lembar spesifikasi terpadu (Intro + About + Giant Watermark + Marquee + Metrics)
 * - ProjectsSection (03): Galeri horizontal 6 lembar proyek ("Six sheets from the plan chest")
 * - ContactSection (04): Bagian ajakan kolaborasi dan informasi kontak komunikasi
 *
 * @returns {JSX.Element} Halaman utama portofolio yang menggabungkan seluruh seksi profil
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-transparent text-[#1C1C1A]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
