"use client"

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"
import {
  DEFAULT_LOGO_TEXT,
  DEFAULT_PALETTE,
  DEFAULT_SOCIAL_ITEMS,
} from "./constants"
import { MenuBackdrop } from "./MenuBackdrop"
import { MenuHeader } from "./MenuHeader"
import { MenuPanel } from "./MenuPanel"
import { MenuStyle } from "./MenuStyle"
import { NavbarProps, NavItem } from "./types"
import { useMenuAnimations } from "./useMenuAnimations"

/**
 * Komponen Navbar
 * Menampilkan bilah navigasi utama bergaya arsitektural blueprint:
 * - Mengintegrasikan header floating berkapsul dengan identitas brand, navigasi desktop, jam & cuaca real-time Surakarta
 * - Menyediakan drawer menu responsif untuk perangkat mobile dengan animasi tirai berlapis (prelayers) berbasis GSAP
 * - Menangani interaksi buka/tutup menu, transisi ikon hamburger (= ke ×), dan pengguliran halus menuju anchor section
 * - Terintegrasi penuh dengan multi-bahasa next-intl (English & Indonesian)
 */
export const Navbar: React.FC<NavbarProps> = (props) => {
  const t = useTranslations("navbar")

  const localizedNavItems: NavItem[] = [
    { num: "02", label: t("nav.about"), ariaLabel: "About", link: "/#about" },
    { num: "03", label: t("nav.projects"), ariaLabel: "Projects", link: "/#projects" },
    { num: "04", label: t("nav.process"), ariaLabel: "Process", link: "/#process" },
    { num: "05", label: t("nav.achievements"), ariaLabel: "Achievements", link: "/achievements" },
    { num: "06", label: t("nav.contact"), ariaLabel: "Contact", link: "/#contact" },
  ]

  const localizedDrawerItems: NavItem[] = [
    { num: "01", label: t("nav.home"), ariaLabel: "Home", link: "/#home" },
    ...localizedNavItems,
  ]

  const {
    position = "right",
    colors = DEFAULT_PALETTE,
    items = localizedNavItems,
    socialItems = DEFAULT_SOCIAL_ITEMS,
    displaySocials = true,
    displayItemNumbering = true,
    className = "",
    logoUrl,
    logoText = DEFAULT_LOGO_TEXT,
    brandSubtitle = t("brandSubtitle"),
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
        items={localizedDrawerItems}
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
