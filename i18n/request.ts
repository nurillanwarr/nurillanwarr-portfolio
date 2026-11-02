import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "next-intl"
import { routing } from "./routing"

/**
 * Konfigurasi Request i18n Server (getRequestConfig)
 * Menyediakan konfigurasi resolusi bahasa dan pemuatan kamus translasi per-request pada sisi server:
 * - Menunggu resolusi parameter `requestLocale` dari segment rute Next.js
 * - Memverifikasi validitas locale terhadap daftar `routing.locales` yang didukung
 * - Menerapkan fallback otomatis ke `routing.defaultLocale` jika locale tidak valid
 * - Memuat berkas terjemahan JSON secara dinamis dari direktori `messages/[locale].json`
 *
 * @param {Object} context Konteks konfigurasi permintaan dari next-intl/server
 * @param {Promise<string | undefined>} context.requestLocale Promise berisi kode bahasa yang diminta
 * @returns {Promise<{ locale: string, messages: any }>} Konfigurasi locale aktif dan kamus pesan terjemahan
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale

  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
