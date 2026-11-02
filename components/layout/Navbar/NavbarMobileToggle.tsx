import React from "react"

/**
 * Properti untuk komponen NavbarMobileToggle
 */
interface NavbarMobileToggleProps {
  /** Status menu mobile apakah sedang terbuka */
  open: boolean
  /** Referensi DOM ke tombol toggle untuk manipulasi warna oleh GSAP */
  toggleBtnRef: React.RefObject<HTMLButtonElement | null>
  /** Referensi DOM ke garis atas ikon yang bermutasi dari '=' ke '×' */
  plusHRef: React.RefObject<HTMLSpanElement | null>
  /** Referensi DOM ke garis bawah ikon yang bermutasi dari '=' ke '×' */
  plusVRef: React.RefObject<HTMLSpanElement | null>
  /** Fungsi callback untuk memicu aksi buka/tutup menu */
  toggleMenu: () => void
}

/**
 * Komponen NavbarMobileToggle
 * Menampilkan tombol pengalih menu (hamburger/close toggle) mobile pada layer independen:
 * - Ditempatkan pada layer paling atas (z-index 60) sehingga posisinya tetap statis saat drawer terbuka
 * - Menggunakan dua bilah garis geometris yang beranimasi halus dari ikon sama dengan (=) menjadi tanda silang (×)
 * - Menyediakan umpan balik visual terhadap status menu dan aksesibilitas ARIA yang lengkap
 *
 * @param {NavbarMobileToggleProps} props Properti status buka menu, referensi DOM untuk animasi GSAP, dan callback toggle
 * @returns {JSX.Element} Elemen container fixed pembungkus tombol pengalih mobile
 */
export const NavbarMobileToggle: React.FC<NavbarMobileToggleProps> = ({
  open,
  toggleBtnRef,
  plusHRef,
  plusVRef,
  toggleMenu,
}) => {
  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[60] w-full px-3 pt-3 md:px-6 md:pt-3.5 lg:hidden">
      <div className="mx-auto flex max-w-[1440px] items-center justify-end px-4 py-3 md:px-6 md:py-3.5">
        <button
          ref={toggleBtnRef}
          className={`sm-toggle pointer-events-auto relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border transition-colors duration-500 select-none sm:h-11 sm:w-11 ${
            open
              ? "border-[#353532] bg-[#1C1C1A]/80 hover:bg-[#353532]"
              : "border-[#D8D4CA] bg-transparent hover:bg-[#EAE6DC]/60"
          }`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span
            className="pointer-events-none relative flex h-4 w-5 items-center justify-center"
            aria-hidden="true"
          >
            <span
              ref={plusHRef}
              className="sm-bar-top absolute h-[1.8px] w-[18px] rounded-full bg-current [will-change:transform]"
            />
            <span
              ref={plusVRef}
              className="sm-bar-bottom absolute h-[1.8px] w-[18px] rounded-full bg-current [will-change:transform]"
            />
          </span>
        </button>
      </div>
    </div>
  )
}

export default NavbarMobileToggle
