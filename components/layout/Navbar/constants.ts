import { NavItem, NavSocialItem } from "./types"

/**
 * Teks logo bawaan untuk identitas navbar
 */
export const DEFAULT_LOGO_TEXT = "N28/Labs"

/**
 * Subjudul brand bawaan di bawah teks logo
 */
export const DEFAULT_BRAND_SUBTITLE = "Portfolio"

/**
 * Daftar item menu navigasi bawaan untuk tampilan desktop (header)
 * Menyajikan About, Projects, Process, Achievements, dan Contact
 */
export const DEFAULT_NAV_ITEMS: NavItem[] = [
  { num: "02", label: "About", ariaLabel: "Tentang Nuril Anwar", link: "/#about" },
  { num: "03", label: "Projects", ariaLabel: "Galeri Portofolio Proyek", link: "/#projects" },
  { num: "04", label: "Process", ariaLabel: "Proses Pengembangan Sistem", link: "/#process" },
  { num: "05", label: "Achievements", ariaLabel: "Sertifikasi & Prestasi", link: "/achievements" },
  { num: "06", label: "Contact", ariaLabel: "Hubungi Saya", link: "/#contact" },
]

/**
 * Daftar item menu navigasi bawaan di dalam drawer mobile
 * Berisi daftar lengkap dari nomor 01 (Home) hingga 06 (Contact)
 */
export const DEFAULT_DRAWER_ITEMS: NavItem[] = [
  { num: "01", label: "Home", ariaLabel: "Kembali ke Beranda", link: "/#home" },
  ...DEFAULT_NAV_ITEMS,
]

/**
 * Daftar tautan akun media sosial bawaan untuk footer drawer navigasi
 */
export const DEFAULT_SOCIAL_ITEMS: NavSocialItem[] = [
  { label: "GitHub", link: "https://github.com/nurillanwarr" },
  { label: "LinkedIn", link: "https://linkedin.com/in/nurillanwarr" },
  { label: "Instagram", link: "https://instagram.com/nurillanwarr" },
]

/**
 * Palet warna arsitektural bawaan untuk transisi tirai/prelayer drawer navigasi
 */
export const DEFAULT_PALETTE = ["#1C1C1A", "#8C5E38", "#B7835A", "#C9D2D6"]
