import { defineRouting } from "next-intl/routing"

/**
 * Konfigurasi Routing Internasionalisasi (routing)
 * Menentukan skema perutean multi-bahasa aplikasi berbasis next-intl:
 * - Mendaftarkan bahasa yang didukung (`locales`: English 'en', Indonesia 'id')
 * - Menentukan bahasa standar (`defaultLocale`: 'en')
 * - Mewajibkan prefix bahasa pada setiap segmen URL (`localePrefix`: 'always')
 */
export const routing = defineRouting({
  locales: ["en", "id"],
  defaultLocale: "en",
  localePrefix: "always",
})
