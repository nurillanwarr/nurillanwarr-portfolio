import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"
import createMDX from "@next/mdx"

/**
 * Plugin Inisialisasi next-intl
 * Menjalankan integrasi konfigurasi request server-side internasionalisasi:
 * - Menghubungkan file konfigurasi permintaan lokal (`./i18n/request.ts`)
 * - Menyediakan pesan terjemahan ke seluruh komponen Next.js
 */
const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

/**
 * Plugin Inisialisasi MDX (@next/mdx)
 * Mengintegrasikan parser MDX untuk rendering halaman dan komponen dokumen .mdx
 */
const withMDX = createMDX({
  // Ekstensi atau plugin remark/rehype opsional dapat ditambahkan di sini
})

/**
 * Konfigurasi Utama Next.js
 * Menentukan opsi build, optimasi aset, ekstensi halaman MDX, dan server Next.js:
 */
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

/**
 * Ekspor Konfigurasi Next.js Terintegrasi
 * Menggabungkan konfigurasi Next.js dengan plugin `next-intl` dan `@next/mdx`
 *
 * @returns {NextConfig} Konfigurasi akhir Next.js yang siap dieksekusi
 */
export default withNextIntl(withMDX(nextConfig))
