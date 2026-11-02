import React from "react"
import { DEFAULT_PALETTE } from "./constants"

/**
 * Properti untuk komponen MenuBackdrop
 */
interface MenuBackdropProps {
  /** Referensi DOM container untuk lapisan transisi tirai warna (prelayers) */
  preLayersRef: React.RefObject<HTMLDivElement | null>
  /** Status keterbukaan menu navigasi mobile */
  open: boolean
  /** Daftar kode warna hex untuk lapisan tirai animasi pembuka */
  colors?: string[]
  /** Fungsi callback untuk menutup menu saat backdrop diklik */
  closeMenu: () => void
}

/**
 * Komponen MenuBackdrop
 * Menampilkan latar belakang transparan dan lapisan tirai animasi untuk drawer mobile:
 * - Menghadirkan backdrop kabur (backdrop-blur) dengan overlay tekstur kertas kalkir (`/paper-texture-2.jpg`)
 * - Menampung container elemen tirai transisi (prelayers) yang digerakkan oleh GSAP sebelum panel menu muncul
 * - Menangani event klik pengguna untuk menutup menu drawer navigasi
 *
 * @param {MenuBackdropProps} props Properti status pembukaan, referensi layer animasi, dan callback penutup
 * @returns {JSX.Element} Elemen fragmen berisi backdrop tombol dan container prelayers
 */
export const MenuBackdrop: React.FC<MenuBackdropProps> = ({
  preLayersRef,
  open,
  colors,
  closeMenu,
}) => {
  return (
    <>
      {open && (
        <button
          type="button"
          className="sm-backdrop pointer-events-auto fixed inset-0 z-40 cursor-default overflow-hidden border-0 bg-[#EBE3D7]/75 backdrop-blur-md transition-opacity lg:hidden"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        >
          {/* Tekstur kertas kalkir kedua (/paper-texture-2.jpg) menyatu lembut dengan halaman */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-45 mix-blend-multiply"
            style={{ backgroundImage: "url('/paper-texture-2.jpg')" }}
          />
        </button>
      )}
      <div
        ref={preLayersRef}
        className="sm-prelayers fixed top-0 right-0 bottom-0 pointer-events-none z-[45] lg:hidden"
        aria-hidden="true"
        style={{ visibility: "hidden" }}
      >
        {(() => {
          const raw =
            colors && colors.length
              ? colors.slice(0, 4)
              : DEFAULT_PALETTE
          const arr = [...raw]
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2)
            arr.splice(mid, 1)
          }
          return arr.map((c, i) => (
            <div
              key={i}
              className="sm-prelayer absolute top-0 right-0 h-full translate-x-0"
              style={{ background: c }}
            />
          ))
        })()}
      </div>
    </>
  )
}

export default MenuBackdrop
