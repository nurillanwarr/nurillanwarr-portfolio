import { MetadataRoute } from 'next'

/**
 * Modul Manifest Web App (PWA)
 * Menjalankan pembuatan metadata Progressive Web App untuk browser dan perangkat mobile:
 * - Mendefinisikan nama aplikasi, nama singkat, dan deskripsi situs
 * - Mengatur URL awal (`start_url`) dan mode tampilan (`standalone`)
 * - Menentukan warna latar belakang (`background_color`) dan tema bilah browser (`theme_color`)
 *
 * @returns {MetadataRoute.Manifest} Objek konfigurasi Web App Manifest standar
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nurillanwarr Portfolio',
    short_name: 'Portfolio',
    description: 'Portfolio website',
    start_url: '/',
    display: 'standalone',
    background_color: '#F2EFE8',
    theme_color: '#B7835A',
    icons: [],
  }
}
