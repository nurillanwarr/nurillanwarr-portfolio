/**
 * Representasi struktur item tautan menu navigasi
 */
export interface NavItem {
  /** Nomor indeks arsitektural (misal: "01", "02") */
  num: string
  /** Label teks yang ditampilkan ke pengguna */
  label: string
  /** Label aksesibilitas pembaca layar (screen reader) */
  ariaLabel?: string
  /** Tautan tujuan (URL eksternal atau ID anchor seperti "#about") */
  link: string
}

/**
 * Representasi tautan akun media sosial
 */
export interface NavSocialItem {
  /** Nama platform sosial media (misal: "GitHub", "LinkedIn") */
  label: string
  /** Tautan URL lengkap menuju profil media sosial */
  link: string
}

/**
 * Properti konfigurasi untuk komponen utama Navbar
 */
export interface NavbarProps {
  /** Posisi drawer mobile saat muncul ("left" atau "right", default: "right") */
  position?: "left" | "right"
  /** Palet warna untuk transisi tirai latar belakang drawer */
  colors?: string[]
  /** Daftar item navigasi utama */
  items?: NavItem[]
  /** Daftar tautan sosial media di dalam drawer */
  socialItems?: NavSocialItem[]
  /** Menampilkan atau menyembunyikan bagian sosial media di drawer */
  displaySocials?: boolean
  /** Menampilkan atau menyembunyikan penomoran indeks pada item drawer */
  displayItemNumbering?: boolean
  /** Kelas CSS tambahan untuk elemen wrapper navbar */
  className?: string
  /** URL gambar logo kustom jika tidak menggunakan ikon SVG bawaan */
  logoUrl?: string
  /** Teks nama brand/logo (default: "N28/Labs") */
  logoText?: string
  /** Subjudul di bawah logo teks (default: "Portfolio") */
  brandSubtitle?: string
  /** Warna tombol toggle menu saat menu tertutup */
  menuButtonColor?: string
  /** Warna tombol toggle menu saat menu terbuka */
  openMenuButtonColor?: string
  /** Warna aksen untuk sorotan navigasi dan penomoran */
  accentColor?: string
  /** Menentukan apakah posisi navbar menempel tetap di bagian atas (fixed) */
  isFixed?: boolean
  /** Mengaktifkan animasi perubahan warna tombol saat drawer terbuka */
  changeMenuColorOnOpen?: boolean
  /** Menutup menu ketika pengguna mengklik area luar menu */
  closeOnClickAway?: boolean
  /** Callback yang dipanggil sesaat setelah menu dibuka */
  onMenuOpen?: () => void
  /** Callback yang dipanggil sesaat setelah menu ditutup */
  onMenuClose?: () => void
}
