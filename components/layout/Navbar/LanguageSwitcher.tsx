"use client"

import React, { useState, useRef, useEffect, useTransition } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MiracleRadio from "@/components/miracle/Radio"
import MiracleLoader from "@/components/miracle/Loader"
import { cn } from "@/lib/utils"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import { useRouter, usePathname } from "@/i18n/navigation"
import { LuLanguages, LuChevronDown } from "react-icons/lu"

export interface LanguageSwitcherProps {
  className?: string
  isDark?: boolean
}

const LOCALES_DATA = [
  {
    value: "en",
    label: "English",
    iconStart: "/flag/en.svg",
  },
  {
    value: "id",
    label: "Indonesia",
    iconStart: "/flag/id.svg",
  },
]

/**
 * LanguageSwitcher Component:
 * - Tidak membuka saat cursor hover (hanya keluar ke bawah saat ditekan/diklik).
 * - Animasi meluncur ke bawah (downward slide + scale + fade) menggunakan Framer Motion.
 * - Tombol pemicu dengan indikator panah chevron interaktif (rotasi 180° saat terbuka).
 * - Menutup otomatis saat memilih opsi bahasa, menekan tombol Escape, atau mengklik di luar area.
 */
export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className,
  isDark = false,
}) => {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("components.header.toggle")
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isPending, startTransition] = useTransition()
  const containerRef = useRef<HTMLDivElement>(null)

  // Tutup dropdown jika pengguna mengklik di luar komponen
  useEffect(() => {
    if (!isOpen) return

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const handleLocaleChange = (nextLocale: string) => {
    setIsOpen(false)
    if (nextLocale === locale) return

    // Bersihkan pathname dan susun URL target dengan prefix bahasa baru
    const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`
    const targetUrl = `/${nextLocale}${cleanPath === "/" ? "" : cleanPath}${typeof window !== "undefined" ? window.location.hash : ""}`

    // Picu event status bar & overlay loading page transisi arsitektural
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("language-switch-start", {
          detail: {
            targetLocale: nextLocale as "en" | "id",
            targetPath: targetUrl,
          },
        })
      )
    }
  }

  return (
    <div ref={containerRef} className="relative inline-flex">
      {/* Tombol Pemicu: Hanya bereaksi saat DITEKAN/DIKLIK, BUKAN hover */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label={t("ariaLabel.language")}
        disabled={isPending}
        className={cn(
          "relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 transition-all duration-200 cursor-pointer border select-none",
          isDark
            ? "border-[#353532] bg-[#22211F] text-zinc-300 hover:border-[#8C5E38] hover:text-white"
            : "border-[#D5CBB9] bg-[#FAF6F0] text-[#1C1C1A] hover:border-[#8C5E38] hover:bg-white shadow-2xs",
          isOpen && (isDark ? "border-[#8C5E38] bg-[#2C2B28]" : "border-[#8C5E38] bg-white ring-1 ring-[#8C5E38]/20"),
          isPending && "opacity-70 pointer-events-none",
          className
        )}
      >
        {isPending ? (
          <MiracleLoader size={18} />
        ) : (
          <>
            <LuLanguages size={18} className="text-[#8C5E38] shrink-0" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1C1C1A] dark:text-zinc-200">
              {locale.toUpperCase()}
            </span>
            <LuChevronDown
              size={13}
              className={cn(
                "text-[#8C5E38] transition-transform duration-250 ease-out shrink-0",
                isOpen && "rotate-180 text-[#1C1C1A] dark:text-[#FAF6F0]"
              )}
            />
          </>
        )}
      </button>

      {/* Menu Dropdown yang meluncur ke bawah dengan animasi saat ditekan */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="language-dropdown-menu"
            initial={{ opacity: 0, y: -10, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.94 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "absolute top-full mt-2.5 right-0 z-[100] min-w-[160px] rounded-xl border p-2 shadow-xl backdrop-blur-md origin-top-right",
              isDark
                ? "border-[#353532] bg-[#22211F] text-[#FAF6F0] shadow-black/50"
                : "border-[#D5CBB9] bg-[#FAF6F0] text-[#1C1C1A] shadow-black/15"
            )}
          >
            {/* Indikator segitiga/panah kecil di atas dropdown */}
            <div
              className={cn(
                "absolute -top-[5px] right-4 h-2.5 w-2.5 rotate-45 border-t border-l",
                isDark
                  ? "border-[#353532] bg-[#22211F]"
                  : "border-[#D5CBB9] bg-[#FAF6F0]"
              )}
            />

            <div
              className={cn(
                "relative z-10 flex flex-col gap-1.5",
                isPending && "pointer-events-none opacity-60"
              )}
            >
              {LOCALES_DATA.map((localeData) => (
                <MiracleRadio
                  key={localeData.value}
                  className="rounded-lg"
                  name="language"
                  value={localeData.value}
                  checked={localeData.value === locale}
                  invers
                  iconStart={
                    <Image
                      className="shrink-0 rounded-xs border border-black/10 dark:border-white/10"
                      src={localeData.iconStart}
                      alt={`${localeData.label} Flag`}
                      width={20}
                      height={15}
                      priority
                    />
                  }
                  onChange={() => handleLocaleChange(localeData.value)}
                >
                  {localeData.label}
                </MiracleRadio>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default LanguageSwitcher
