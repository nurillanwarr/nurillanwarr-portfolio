"use client"

import React, { useRef, useState } from "react"
import {
  DEFAULT_BRAND_SUBTITLE,
  DEFAULT_DRAWER_ITEMS,
  DEFAULT_LOGO_TEXT,
  DEFAULT_NAV_ITEMS,
  DEFAULT_PALETTE,
  DEFAULT_SOCIAL_ITEMS,
} from "./constants"
import { MenuBackdrop } from "./MenuBackdrop"
import { MenuHeader } from "./MenuHeader"
import { MenuPanel } from "./MenuPanel"
import { MenuStyle } from "./MenuStyle"
import { NavbarProps } from "./types"
import { useMenuAnimations } from "./useMenuAnimations"

/**
 * Komponen Navbar
 * Menampilkan bilah navigasi utama bergaya arsitektural blueprint:
 * - Mengintegrasikan header floating berkapsul dengan identitas brand, navigasi desktop, jam & cuaca real-time Surakarta
 * - Menyediakan drawer menu responsif untuk perangkat mobile dengan animasi tirai berlapis (prelayers) berbasis GSAP
 * - Menangani interaksi buka/tutup menu, transisi ikon hamburger (= ke ×), dan pengguliran halus menuju anchor section
 *
 * @param {NavbarProps} props Konfigurasi navigasi, logo, warna tombol, dan tautan sosial
 * @returns {JSX.Element} Elemen pembungkus navigasi utama
 */
export const Navbar: React.FC<NavbarProps> = (props) => {
  const {
    position = "right",
    colors = DEFAULT_PALETTE,
    items = DEFAULT_NAV_ITEMS,
    socialItems = DEFAULT_SOCIAL_ITEMS,
    displaySocials = true,
    displayItemNumbering = true,
    className = "",
    logoUrl,
    logoText = DEFAULT_LOGO_TEXT,
    brandSubtitle = DEFAULT_BRAND_SUBTITLE,
    menuButtonColor = "#1C1C1A",
    openMenuButtonColor = "#F2EFE8",
    accentColor = "#B7835A",
    isFixed = true,
    changeMenuColorOnOpen = true,
  } = props

  const [open, setOpen] = useState(false)
  const openRef = useRef(false)

  const {
    rootRef,
    panelRef,
    preLayersRef,
    toggleBtnRef,
    plusHRef,
    plusVRef,
    iconRef,
    textInnerRef,
    textWrapRef,
    textLines,
    toggleMenu,
    closeMenu,
    handleItemClick,
  } = useMenuAnimations({
    ...props,
    items,
    socialItems,
    position,
    menuButtonColor,
    openMenuButtonColor,
    changeMenuColorOnOpen,
    openRef,
    setOpen,
  })

  return (
    <div
      ref={rootRef}
      className={`staggered-menu-wrapper ${isFixed ? "sm-fixed" : ""} ${className}`}
      style={{ "--sm-accent": accentColor } as React.CSSProperties}
    >
      <MenuStyle />
      <MenuHeader
        visible={true}
        open={open}
        logoUrl={logoUrl}
        logoText={logoText}
        brandSubtitle={brandSubtitle}
        items={items}
        toggleBtnRef={toggleBtnRef}
        textWrapRef={textWrapRef}
        textInnerRef={textInnerRef}
        textLines={textLines}
        iconRef={iconRef}
        plusHRef={plusHRef}
        plusVRef={plusVRef}
        toggleMenu={toggleMenu}
        handleItemClick={handleItemClick}
      />
      <MenuBackdrop
        preLayersRef={preLayersRef}
        open={open}
        colors={colors}
        closeMenu={closeMenu}
      />
      <MenuPanel
        panelRef={panelRef}
        open={open}
        position={position}
        items={DEFAULT_DRAWER_ITEMS}
        socialItems={socialItems}
        displaySocials={displaySocials}
        displayItemNumbering={displayItemNumbering}
        accentColor={accentColor}
        closeMenu={closeMenu}
        handleItemClick={handleItemClick}
      />
    </div>
  )
}

export default Navbar
export * from "./constants"
export * from "./types"
