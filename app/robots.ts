import { MetadataRoute } from 'next'

/**
 * Modul Konfigurasi Robots.txt
 * Menjalankan pembuatan instruksi perayapan (crawling) bagi mesin pencari (web crawlers):
 * - Mengizinkan semua user agent (`*`) untuk merayapi seluruh halaman (`/`)
 * - Menentukan lokasi berkas sitemap XML untuk mempermudah indeksasi situs
 *
 * @returns {MetadataRoute.Robots} Objek konfigurasi robots.txt untuk Next.js Metadata Route
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
  }
}