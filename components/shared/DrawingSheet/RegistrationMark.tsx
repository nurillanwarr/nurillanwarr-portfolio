import React from "react"

/**
 * Titik sudut posisi penempatan tanda registrasi CAD
 */
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right"

const POSITION: Record<Corner, string> = {
  "top-left": "-top-[23px] -left-[23px]",
  "top-right": "-top-[23px] -right-[23px]",
  "bottom-left": "-bottom-[23px] -left-[23px]",
  "bottom-right": "-bottom-[23px] -right-[23px]",
}

/**
 * Komponen RegistrationMark
 * Menampilkan tanda registrasi cetak/CAD (lingkaran bidik dengan garis silang) pada sudut lembar gambar:
 * - Meniru penanda registrasi alignment pada lembar cetak biru teknik arsitektural
 * - Diposisikan secara absolut tepat di perpotongan sudut luar bingkai lembar gambar
 * - Dioptimalkan sebagai grafis SVG vektor dekoratif tanpa mengganggu interaksi mouse
 *
 * @param {{ corner: Corner }} props Posisi sudut tempat tanda registrasi diletakkan
 * @returns {JSX.Element} Elemen SVG tanda registrasi
 */
export const RegistrationMark: React.FC<{ corner: Corner }> = ({ corner }) => {
  return (
    <svg
      viewBox="-9 -9 18 18"
      className={`pointer-events-none absolute z-20 h-[45px] w-[45px] text-[#1C1C1A] ${POSITION[corner]}`}
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="4.5" fill="#EBE3D7" stroke="currentColor" strokeWidth="1" />
      <line x1="-9" y1="0" x2="9" y2="0" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="-9" x2="0" y2="9" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

export default RegistrationMark
