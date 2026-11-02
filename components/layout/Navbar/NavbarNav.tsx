"use client"

import React from "react"
import { Link } from "@/i18n/navigation"
import { NavItem } from "./types"

/**
 * Properti untuk komponen NavbarNav
 */
interface NavbarNavProps {
  /** Daftar item navigasi utama yang ditampilkan di desktop */
  items?: NavItem[]
  /** Handler saat item navigasi diklik */
  handleItemClick: (event: React.MouseEvent<HTMLAnchorElement>, link: string) => void
  /** Apakah sedang dalam mode gelap */
  isDark?: boolean
}

/**
 * Komponen NavbarNav
 * Menampilkan menu navigasi horizontal khusus layar desktop (layar besar/lg ke atas):
 * - Menyajikan tautan navigasi dengan nomor indeks blueprint arsitektur (02 About s.d. 05 Contact)
 * - Menyediakan efek transisi warna hover serta pergeseran vertikal halus pada angka nomor indeks
 * - Menangani event klik dengan dukungan routing lokal next-intl
 */
export const NavbarNav: React.FC<NavbarNavProps> = ({
  items,
  handleItemClick,
  isDark = false,
}) => {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Primary Drawing Index" className="hidden items-center gap-7 lg:flex">
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          onClick={(e) => handleItemClick(e, item.link)}
          className={`group flex items-baseline gap-1.5 text-[14px] font-medium transition-colors ${
            isDark
              ? "text-zinc-300 hover:text-white"
              : "text-[#1C1C1A] hover:text-[#A3724B]"
          }`}
        >
          <span
            className={`font-mono text-[11px] transition-transform group-hover:-translate-y-0.5 ${
              isDark ? "text-amber-400" : "text-[#A3724B]"
            }`}
          >
            {item.num}
          </span>
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )
}

export default NavbarNav
