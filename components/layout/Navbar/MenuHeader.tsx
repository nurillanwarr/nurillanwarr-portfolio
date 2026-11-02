"use client"

import React from "react"
import { DEFAULT_BRAND_SUBTITLE, DEFAULT_LOGO_TEXT } from "./constants"
import { NavbarBrand } from "./NavbarBrand"
import { NavbarMobileToggle } from "./NavbarMobileToggle"
import { NavbarNav } from "./NavbarNav"
import { NavbarStatus } from "./NavbarStatus"
import { NavItem } from "./types"
import { useLiveWeatherClock } from "./useLiveWeatherClock"

/**
 * Properti untuk komponen MenuHeader
 */
interface MenuHeaderProps {
  /** Menentukan apakah header sedang terlihat di viewport */
  visible: boolean
  /** Status menu mobile apakah sedang terbuka */
  open: boolean
  /** URL gambar logo kustom jika ada */
  logoUrl?: string
  /** Teks nama brand/logo (default: N28/Labs) */
  logoText: string
  /** Subjudul brand (default: Portfolio) */
  brandSubtitle?: string
  /** Daftar item navigasi desktop */
  items?: NavItem[]
  /** Referensi DOM ke tombol toggle mobile */
  toggleBtnRef: React.RefObject<HTMLButtonElement | null>
  /** Referensi DOM ke wrapper teks label menu */
  textWrapRef: React.RefObject<HTMLSpanElement | null>
  /** Referensi DOM ke elemen teks internal */
  textInnerRef: React.RefObject<HTMLSpanElement | null>
  /** Array teks transisi tombol menu (misal: ["Menu", "Close"]) */
  textLines: string[]
  /** Referensi DOM ke kontainer ikon tombol */
  iconRef: React.RefObject<HTMLSpanElement | null>
  /** Referensi DOM ke garis horizontal atas ikon tombol */
  plusHRef: React.RefObject<HTMLSpanElement | null>
  /** Referensi DOM ke garis horizontal bawah ikon tombol */
  plusVRef: React.RefObject<HTMLSpanElement | null>
  /** Fungsi untuk mengaktifkan atau menonaktifkan status buka/tutup menu */
  toggleMenu: () => void
  /** Fungsi callback saat salah satu item navigasi diklik */
  handleItemClick: (event: React.MouseEvent<HTMLAnchorElement>, link: string) => void
}

/**
 * Komponen MenuHeader
 * Menampilkan bilah kapsul navigasi atas (fixed header) dan tombol pengalih mobile:
 * - Menampung logo brand (`NavbarBrand`), daftar tautan desktop (`NavbarNav`), dan widget status cuaca live (`NavbarStatus`)
 * - Menggunakan gaya kapsul kaca kertas vellum arsitektural yang konsisten (#EBE3D7) di seluruh halaman
 * - Menyediakan spacer otomatis pada aliran dokumen agar konten halaman awal tidak tertutup bilah tetap
 * - Merender layer pengalih menu mobile (`NavbarMobileToggle`) pada z-index tinggi yang tetap presisi di posisinya
 */
export const MenuHeader: React.FC<MenuHeaderProps> = ({
  visible,
  open,
  logoUrl,
  logoText = DEFAULT_LOGO_TEXT,
  brandSubtitle = DEFAULT_BRAND_SUBTITLE,
  items,
  toggleBtnRef,
  plusHRef,
  plusVRef,
  toggleMenu,
  handleItemClick,
}) => {
  const { city, time, weather, isLoading } = useLiveWeatherClock("Surakarta")

  return (
    <>
      {/* Spacer di document flow supaya konten tidak tertutup Navbar fixed */}
      <div className="h-[74px] sm:h-[78px] md:h-[84px]" aria-hidden="true" />

      {/* Layer 1 (z-30): Kapsul Navbar utama */}
      <header
        className={`staggered-menu-header fixed top-0 left-0 z-30 w-full px-3 pt-3 transition-all duration-300 pointer-events-auto md:px-6 md:pt-3.5 ${
          !visible && !open ? "sm-header-hidden" : ""
        }`}
        aria-label="Main architectural navigation header"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 rounded-2xl border border-[#D5CBB9] bg-[#EBE3D7]/80 px-4 py-3 shadow-[0_4px_16px_rgba(28,28,26,0.04)] backdrop-blur-md md:px-6 md:py-3.5">
          <NavbarBrand
            logoUrl={logoUrl}
            logoText={logoText}
            brandSubtitle={brandSubtitle}
            handleItemClick={handleItemClick}
            isDark={false}
          />

          <NavbarNav
            items={items}
            handleItemClick={handleItemClick}
            isDark={false}
          />

          <div className="flex items-center gap-3 sm:gap-5">
            <NavbarStatus
              city={city}
              time={time}
              weather={weather}
              isLoading={isLoading}
              isDark={false}
            />
            {/* Ruang penahan agar posisi tombol =/× yang stay tepat di sisi kanan kapsul */}
            <div className="h-10 w-10 shrink-0 sm:h-11 sm:w-11 lg:hidden" aria-hidden="true" />
          </div>
        </div>
      </header>

      {/* Layer 2 (z-[60]): Tombol =/× yang STAY di tempat */}
      <NavbarMobileToggle
        open={open}
        toggleBtnRef={toggleBtnRef}
        plusHRef={plusHRef}
        plusVRef={plusVRef}
        toggleMenu={toggleMenu}
      />
    </>
  )
}

export default MenuHeader
