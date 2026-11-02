import React from "react"

/**
 * Properti untuk komponen SectionHeading
 */
interface SectionHeadingProps {
  /** Nomor indeks seksi berformat blueprint arsitektur (misal: "02", "03") */
  num: string
  /** Label kategori huruf kapital (misal: "ABOUT", "EXPERIENCE") */
  label: string
  /** Judul utama seksi yang ditampilkan dalam ukuran besar */
  title: string
}

/**
 * Komponen SectionHeading
 * Menampilkan judul bagian (section heading) dengan estetika gambar kerja teknik (CAD blueprint):
 * - Menyajikan baris penanda nomor indeks `(num)` beraksen terakota, label kategori, dan garis horizontal pemisah
 * - Menampilkan judul utama (`<h2>`) dengan tipografi serif/sans arsitektural yang elegan dan proporsional
 * - Memberikan hierarki visual yang jelas dan konsisten di seluruh bagian halaman portofolio
 *
 * @param {SectionHeadingProps} props Nomor seksi, label deskriptor, dan teks judul utama
 * @returns {JSX.Element} Elemen div penampung judul bagian
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({ num, label, title }) => {
  return (
    <div className="mb-8">
      <div className="mb-4 flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase">
        <span className="text-[#A3724B]">({num})</span>
        <span className="text-[#1C1C1A]">{label}</span>
        <span className="h-px flex-1 bg-[#D8D4CA]" />
      </div>
      <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#1C1C1A] md:text-5xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
