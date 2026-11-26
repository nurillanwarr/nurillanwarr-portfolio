"use client"

import Image from "next/image"
import React from "react"
import { Link } from "@/i18n/navigation"
import { DEFAULT_BRAND_SUBTITLE, DEFAULT_LOGO_TEXT } from "./constants"

/**
 * Properti untuk komponen NavbarBrand
 */
interface NavbarBrandProps {
  /** URL gambar logo kustom (opsional) */
  logoUrl?: string
  /** Teks judul brand atau logo (default: N28/Labs) */
  logoText?: string
  /** Teks subjudul brand (default: Portfolio) */
  brandSubtitle?: string
  /** Handler saat brand diklik untuk melakukan navigasi halus ke anchor #home */
  handleItemClick: (event: React.MouseEvent<HTMLAnchorElement>, link: string) => void
  /** Apakah sedang dalam mode gelap */
  isDark?: boolean
}

/**
 * Komponen NavbarBrand
 * Menampilkan identitas visual brand pada sisi kiri bilah navigasi:
 * - Merender ikon grafis lingkaran origami N atau gambar logo kustom
 * - Menampilkan nama brand utama ("N28/Labs") dan subjudul monospaced ("Portfolio")
 * - Berfungsi sebagai tombol tautan pintas menuju bagian awal halaman (`/#home`) dengan dukungan lokalisasi next-intl
 */
export const NavbarBrand: React.FC<NavbarBrandProps> = ({
  logoUrl,
  logoText = DEFAULT_LOGO_TEXT,
  brandSubtitle = DEFAULT_BRAND_SUBTITLE,
  handleItemClick,
  isDark = false,
}) => {
  return (
    <Link
      href="/#home"
      className={`group flex items-center gap-3 select-none focus:outline-none ${isDark ? "text-white" : "text-[#1C1C1A]"
        }`}
      onClick={(event) => handleItemClick(event, "/#home")}
      aria-label="01 Home - Nuril Portfolio"
    >
      {logoUrl ? (
        <Image
          src={logoUrl}
          alt={logoText}
          className="block h-8 w-auto object-contain"
          draggable={false}
          width={110}
          height={24}
        />
      ) : (
        <svg
          viewBox="0 0 100 100"
          className="h-7 w-7 sm:h-8 sm:w-8 shrink-0 fill-none transition-transform duration-300 group-hover:scale-[1.05]"
          aria-hidden="true"
        >
          {/* Lingkaran Hitam */}
          <circle cx="50" cy="50" r="50" fill="#111111" />
          {/* Kaki Kiri Putih */}
          <polygon points="33.3,26 44.8,26 34.6,74 23.1,74" fill="#FFFFFF" />
          {/* Kaki Kanan Putih */}
          <polygon points="65.4,26 76.9,26 66.7,74 55.2,74" fill="#FFFFFF" />
          {/* Lipatan Origami Diagonal Teal */}
          <polygon points="44.8,26 58.7,56.5 55.2,74 41.3,43.5" fill="#FFFFFF" />
        </svg>
      )}

      <div className="flex flex-col leading-none italic">
        <span
          className={`font-mono text-[20px] font-semibold tracking-[-0.03em] ${isDark ? "text-white" : "text-[#1C1C1A]"
            }`}
        >
          {logoText}
        </span>
        {brandSubtitle && (
          <span
            className={`font-mono text-[9px] font-medium uppercase tracking-[0.16em] ${isDark ? "text-zinc-400" : "text-[#8B8983]"
              }`}
          >
            {brandSubtitle}
          </span>
        )}
      </div>
    </Link>
  )
}

export default NavbarBrand
