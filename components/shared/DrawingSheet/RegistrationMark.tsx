"use client"

import React from "react"
import { motion } from "framer-motion"

/**
 * Titik sudut posisi penempatan tanda registrasi CAD
 */
type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right"

const POSITION: Record<Corner, string> = {
  "top-left": "-top-[13px] -left-[13px]",
  "top-right": "-top-[13px] -right-[13px]",
  "bottom-left": "-bottom-[13px] -left-[13px]",
  "bottom-right": "-bottom-[13px] -right-[13px]",
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
export const RegistrationMark: React.FC<{ corner: Corner; delay?: number }> = ({
  corner,
  delay = 0.3,
}) => {
  return (
    <motion.svg
      viewBox="-9 -9 18 18"
      className={`pointer-events-none absolute z-20 h-[25px] w-[25px] text-[#1C1C1A] ${POSITION[corner]}`}
      aria-hidden="true"
      initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Garis horizontal ditarik dari tengah */}
      <motion.line
        x1="-9"
        y1="0"
        x2="9"
        y2="0"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.1 }}
      />

      {/* Garis vertikal ditarik dari tengah */}
      <motion.line
        x1="0"
        y1="-9"
        x2="0"
        y2="9"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      />

      {/* Lingkaran bidik CAD terlukis melingkar */}
      <motion.circle
        cx="0"
        cy="0"
        r="4.5"
        fill="#EBE3D7"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0, fillOpacity: 0 }}
        animate={{ pathLength: 1, fillOpacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.3 }}
      />
    </motion.svg>
  )
}

export default RegistrationMark
