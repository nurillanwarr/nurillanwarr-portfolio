import React from "react"
import type { Metadata } from "next"
import AboutHero from "./components/AboutHero"
import AboutDetails from "./components/AboutDetails"
import AboutSkills from "./components/AboutSkills"
import AboutExperience from "./components/AboutExperience"
import AboutEducation from "./components/AboutEducation"
import AboutQuote from "./components/AboutQuote"

export const metadata: Metadata = {
  title: "About | Nuril Anwar — Full-Stack & Applied AI Developer",
  description:
    "Learn more about Nuril Anwar's journey as an Informatics Engineering student at UMS, Dicoding Bootcamp graduate, and Full-Stack & Applied AI Developer.",
}

/**
 * Komponen Halaman Tentang Saya (About Page - /about)
 * Mengadaptasi struktur halaman About lengkap milik Alvalens ke dalam tema
 * lembar kerja arsitektur (Architectural Blueprint & Paper Theme):
 * - 01. AboutHero: Pengenalan awal, judul besar, potret interaktif, dan tombol Scroll Down
 * - 02. AboutDetails ("Who Am I?"): Kolase 3 bingkai foto bertumpuk, biografi lengkap, dan kartu fokus R&D aktif
 * - 03. AboutSkills ("Skills & Expertise"): Matriks seleksi 4 kategori keahlian interaktif beserta Technology Stack & Tools
 * - 04. AboutExperience ("Professional Experience"): Timeline vertikal zig-zag riwayat proyek dan Dicoding Bootcamp
 * - 05. AboutEducation ("Education & Credentials"): Profil akademik S1 Teknik Informatika UMS (galeri 3-panel akordion) & daftar sertifikasi
 * - 06. AboutQuote ("Epilogue"): Kutipan penutup dengan animasi kata blur-to-sharp
 *
 * @returns {JSX.Element} Halaman lengkap About Me
 */
export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-[#1C1C1A]">
      {/* 01. Hero Section */}
      <AboutHero />

      {/* 02. Who Am I? (3-Photo Collage + Full Narrative + Active Focus Card) */}
      <AboutDetails />

      {/* 03. Interactive Skills & Expertise Matrix */}
      <AboutSkills />

      {/* 04. Alternating Experience Timeline */}
      <AboutExperience />

      {/* 05. Education (UMS Accordion Gallery) & Certifications */}
      <AboutEducation />

      {/* 06. Closing Blur-to-Sharp Quote */}
      <AboutQuote />
    </main>
  )
}
