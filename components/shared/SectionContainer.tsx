import React from "react"

/**
 * Properti untuk komponen SectionContainer
 */
interface SectionContainerProps {
  /** Identifier unik section untuk penargetan anchor navigasi (misal: "about", "projects") */
  id: string
  /** Elemen anak / konten yang berada di dalam section */
  children: React.ReactNode
  /** Kelas CSS tambahan untuk memodifikasi padding atau layout */
  className?: string
}

/**
 * Komponen SectionContainer
 * Menampilkan kontainer pembungkus standar untuk setiap bagian (section) halaman:
 * - Menetapkan batas lebar maksimal konsisten (max-w-[1440px]) dan padding responsif
 * - Menyediakan offset pengguliran (`scroll-mt-24`) agar judul section tidak tertutup bilah navigasi tetap
 * - Memastikan semantik HTML5 menggunakan tag `<section>` dengan atribut `id` untuk aksesibilitas anchor
 *
 * @param {SectionContainerProps} props Properti kontainer section (id, children, className)
 * @returns {JSX.Element} Elemen section pembungkus konten
 */
export const SectionContainer: React.FC<SectionContainerProps> = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`mx-auto max-w-[1440px] scroll-mt-24 px-5 py-20 md:px-10 ${className}`}>
      {children}
    </section>
  )
}

export default SectionContainer
