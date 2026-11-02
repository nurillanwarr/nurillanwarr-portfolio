import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

/**
 * Plugin Inisialisasi next-intl
 * Menjalankan integrasi konfigurasi request server-side internasionalisasi:
 * - Menghubungkan file konfigurasi permintaan lokal (`./i18n/request.ts`)
 * - Menyediakan pesan terjemahan ke seluruh komponen Next.js
 */
const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

/**
 * Konfigurasi Utama Next.js
 * Menentukan opsi build, optimasi aset, dan server Next.js:
 * - Opsi konfigurasi aplikasi Next.js
 */
const nextConfig: NextConfig = {
  /* config options here */
}

/**
 * Ekspor Konfigurasi Next.js Terintegrasi
 * Menggabungkan konfigurasi Next.js dengan plugin `next-intl`
 *
 * @returns {NextConfig} Konfigurasi akhir Next.js yang siap dieksekusi
 */
export default withNextIntl(nextConfig)
