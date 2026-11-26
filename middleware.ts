import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

/**
 * Modul Middleware Internasionalisasi (next-intl)
 * Menjalankan penanganan pengalihan bahasa dan routing multi-bahasa:
 * - Mendeteksi preferensi bahasa pengguna (locale negotiation)
 * - Mengarahkan rute sesuai konfigurasi lokal yang didukung ('en', 'id') dengan default 'en'
 * - Mempertahankan prefix lokal pada URL secara konsisten
 *
 * @returns {Function} Handler middleware Next.js untuk internasionalisasi
 */
export default createMiddleware(routing)

/**
 * Konfigurasi Matcher Middleware
 * Menentukan pola rute URL yang diproses oleh middleware:
 * - Mencocokkan semua path halaman (termasuk /about, /projects, dll.) agar selalu memiliki prefix locale yang valid
 * - Mengabaikan file statis, API routes, dan aset publik (_next, favicon, gambar)
 */
export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
}
