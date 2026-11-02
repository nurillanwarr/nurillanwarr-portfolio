import React from "react"
import { HERO_ACTIONS } from "./constants"

/**
 * Komponen HeroActions
 * Menampilkan sepasang tombol aksi (Call to Action) berdesain pil khas arsitektur minimalis:
 * - Tombol utama (Primary): Latar hitam pekat dengan transisi hover cokelat tembaga
 * - Tombol sekunder (Secondary): Garis tepi (outline border) dengan transisi hover krem lembut
 * - Efek animasi garis bawah teks yang melebar dari tengah ke sisi kanan dan kiri saat disentuh (hover)
 * - Ikon lingkaran panah yang berotasi halus dari posisi mendatar (→) menjadi serong ke atas (↗) saat kursor hover
 *
 * @returns {JSX.Element} Elemen grup tombol aksi Hero
 */
export const HeroActions: React.FC = () => {
  const { primary, secondary } = HERO_ACTIONS

  return (
    <div className="mt-7 flex flex-wrap items-center gap-3">
      {/* Tombol Utama (Hitam) */}
      <a
        href={primary.href}
        className="group inline-flex items-center gap-4 rounded-full bg-[#1C1C1A] py-2 pr-2 pl-6 text-[15px] font-medium text-[#F2EFE8] transition-colors duration-300 hover:bg-[#8C5E38]"
      >
        <span className="relative py-0.5">
          {primary.label}
          {/* Garis bawah animasi dari tengah ke kanan & kiri */}
          <span
            className="pointer-events-none absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-current transition-all duration-300 ease-out group-hover:w-full"
            aria-hidden="true"
          />
        </span>

        {/* Lingkaran panah: lurus ke kanan (→) berputar ke serong atas (↗) saat hover */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2EFE8] text-[#1C1C1A] transition-colors duration-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-45"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </a>

      {/* Tombol Sekunder (Border Garis) */}
      <a
        href={secondary.href}
        className="group inline-flex items-center gap-4 rounded-full border border-[#1C1C1A] py-2 pr-2 pl-6 text-[15px] font-medium text-[#1C1C1A] transition-colors duration-300 hover:bg-[#E2D9CB]"
      >
        <span className="relative py-0.5">
          {secondary.label}
          {/* Garis bawah animasi dari tengah ke kanan & kiri */}
          <span
            className="pointer-events-none absolute bottom-0 left-1/2 h-[1.5px] w-0 -translate-x-1/2 bg-current transition-all duration-300 ease-out group-hover:w-full"
            aria-hidden="true"
          />
        </span>

        {/* Lingkaran panah: lurus ke kanan (→) berputar ke serong atas (↗) saat hover */}
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C1C1A] text-[#F2EFE8] transition-colors duration-300">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-rotate-45"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </a>
    </div>
  )
}

export default HeroActions
