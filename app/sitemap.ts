import { MetadataRoute } from 'next'

/**
 * Modul Pembangkit Sitemap XML
 * Menjalankan penyusunan daftar URL situs untuk indexing mesin pencari (SEO):
 * - Mendaftarkan tautan URL beranda utama
 * - Menyematkan cap waktu modifikasi terakhir (`lastModified`) secara dinamis
 *
 * @returns {MetadataRoute.Sitemap} Array daftar entri URL peta situs (sitemap)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://localhost:3000',
      lastModified: new Date(),
    },
  ]
}