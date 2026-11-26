"use client"

import React from "react"
import { Link } from "@/i18n/navigation"
import { DEFAULT_DRAWER_ITEMS } from "./constants"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { NavItem, NavSocialItem } from "./types"
import { useLiveWeatherClock } from "./useLiveWeatherClock"

/**
 * Properti untuk komponen MenuPanel
 */
interface MenuPanelProps {
  /** Referensi DOM ke panel drawer yang dianimasikan oleh GSAP */
  panelRef: React.RefObject<HTMLDivElement | null>
  /** Status apakah drawer sedang terbuka */
  open: boolean
  /** Posisi kemunculan drawer ("left" atau "right", default: "right") */
  position?: "left" | "right"
  /** Daftar item navigasi utama di dalam drawer */
  items?: NavItem[]
  /** Daftar tautan profil sosial media */
  socialItems?: NavSocialItem[]
  /** Menentukan apakah tautan media sosial ditampilkan di bagian bawah drawer */
  displaySocials?: boolean
  /** Menentukan apakah nomor indeks urutan item navigasi (01, 02, dst.) ditampilkan */
  displayItemNumbering?: boolean
  /** Kode warna aksen untuk styling item aktif / sorotan */
  accentColor?: string
  /** Callback untuk menutup drawer menu */
  closeMenu: () => void
  /** Callback saat pengguna mengklik item menu atau navigasi anchor */
  handleItemClick: (event: React.MouseEvent<HTMLAnchorElement>, link: string) => void
}

/**
 * Komponen MenuPanel
 * Menampilkan panel laci navigasi (drawer panel) mobile bernuansa arsitektur:
 * - Menampilkan indikator lokasi, jam digital berkedip, dan informasi cuaca real-time di bagian atas panel
 * - Menyajikan daftar navigasi utama bernomor indeks arsitektur (01. Home s.d. 05. Contact) dengan animasi teks bertingkat
 * - Menyertakan bagian footer tautan media sosial (GitHub, LinkedIn, Instagram) dengan efek hover interaktif
 *
 * @param {MenuPanelProps} props Properti konfigurasi panel, item navigasi, referensi DOM, dan handler klik
 * @returns {JSX.Element} Elemen aside panel laci navigasi mobile
 */
export const MenuPanel: React.FC<MenuPanelProps> = ({
  panelRef,
  position = "right",
  items = DEFAULT_DRAWER_ITEMS,
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  handleItemClick,
}) => {
  const { city, time, weather } = useLiveWeatherClock("Surakarta")

  return (
    <aside
      ref={panelRef}
      id="staggered-menu-panel"
      className={`sm-panel fixed top-0 bottom-0 z-50 pointer-events-auto lg:hidden ${
        position === "left" ? "sm-panel-left left-0" : "sm-panel-right right-0"
      }`}
      style={{ visibility: "hidden" }}
      aria-label="Navigation drawer"
    >
      <div>
        {/* Header Drawer: Lokasi + Waktu sejajar dengan tombol =/× yang stay di kanan atas */}
        <div className="flex min-h-10 items-center justify-between border-b border-[#353532] pb-4 sm:min-h-11">
          <div className="font-mono text-[11px] text-[#A3724B]">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#B7835A]" />
            <span>{city}</span> ·{" "}
            <span className="tabular-nums">
              {time.hh}
              <span
                className="mx-[1px] inline-block transition-opacity duration-150 select-none"
                style={{ opacity: time.showColon ? 1 : 0.15 }}
                aria-hidden="true"
              >
                :
              </span>
              {time.mm}
            </span>
          </div>
          {/* Ruang tempat mendaratnya tombol =/× yang stay (z-60) */}
          <div className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" aria-hidden="true" />
        </div>

        <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#8B8983]">
          <span className="capitalize">{weather}</span>
          <LanguageSwitcher isDark={true} />
        </div>

        {/* Daftar Navigasi (01. Home - 05. Contact) */}
        <nav className="sm-panel-nav mt-8" aria-label="Main menu navigation">
          <ul className="sm-panel-list">
            {items.map((item, idx) => (
              <li key={idx} className="sm-panel-item">
                {displayItemNumbering && (
                  <span className="sm-panel-itemNum" aria-hidden="true">
                    {item.num}.
                  </span>
                )}
                <Link
                  href={item.link}
                  aria-label={item.ariaLabel || item.label}
                  onClick={(e) => handleItemClick(e, item.link)}
                  className="sm-panel-itemLink"
                >
                  <span className="sm-panel-itemLabel">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Footer Drawer: Socials */}
      {displaySocials && socialItems && socialItems.length > 0 && (
        <div className="sm-panel-right sm-socials border-t border-[#353532] pt-6">
          <span className="sm-socials-title">SOCIALS</span>
          <ul className="sm-socials-list">
            {socialItems.map((soc, idx) => (
              <li key={idx}>
                <a
                  href={soc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm-socials-link"
                >
                  {soc.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  )
}

export default MenuPanel
