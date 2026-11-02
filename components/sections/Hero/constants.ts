/**
 * Konstanta konfigurasi dan konten teks untuk Section 01 — Hero
 * Mengumpulkan seluruh data perkenalan, identitas, tombol aksi, potret foto, tautan sosial media, dan tech stack.
 */

/**
 * Data stempel badge arsitektur lembar kerja
 * Menampilkan kode lembar dan keterangan identitas singkat.
 */
export const HERO_BADGE = {
  code: "A-101",
  caption: "NURIL ANWAR — FULLSTACK DEVELOPER, SURAKARTA",
}

/**
 * Konfigurasi teks judul utama (Headline) Hero
 * Mendukung judul statis dan daftar dinamis untuk efek mesin ketik
 */
export const HERO_HEADLINE = {
  greeting: "Hi, I'm",
  name: "Nuril",
  roles: [
    "Full-Stack Web Developer",
    "Applied AI Developer",
    "Informatics @UMS",
    "Dicoding Bootcamp Alum",
  ],
}

/**
 * Konfigurasi informasi kartu potret foto profil Hero
 * Menampung jalur sumber gambar, teks alternatif, figur label gambar, nama, peran, dan status ketersediaan kerja.
 */
export const HERO_PORTRAIT = {
  // Kosongkan string ini bila belum meletakkan foto di /public/profile.jpg agar tidak error di server Next.js.
  // Jika sudah ada foto, isi dengan: "/profile.jpg"
  src: "",
  alt: "Foto Nuril Anwar",
  fig: "FIG. 01 — PORTRAIT",
  name: "Nuril Anwar",
  role: "Full-stack & AI Developer",
  status: "Available for work",
}

/**
 * Daftar tautan profil media sosial dan portofolio publik
 */
export const HERO_SOCIALS = [
  { label: "GitHub", href: "https://github.com/nurillanwarr" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nurilanwar/" },
  { label: "Instagram", href: "https://www.instagram.com/nurill.anwarrr?utm_source=qr&obrf=c2NuNTRrcmhtaHEw" },
]

/**
 * Daftar teknologi dan framework utama yang disorot pada footer Hero
 */
export const HERO_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "REST APIs",
  "Gemini LLM",
  "Tailwind CSS",
]

/**
 * Konfigurasi tombol aksi utama (Call to Action)
 * Berisi tombol penjelajahan proyek dan inisiasi diskusi kontak.
 */
export const HERO_ACTIONS = {
  primary: { label: "Resume", href: "/resume.pdf" },
  secondary: { label: "Tell me about your idea", href: "#contact" },
}