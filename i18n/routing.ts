import { defineRouting } from "next-intl/routing"

/**
 * Konfigurasi Routing Internasionalisasi (routing)
 * Menentukan skema perutean multi-bahasa aplikasi berbasis next-intl:
 * - Mendaftarkan bahasa yang didukung (`locales`: English 'en', Indonesia 'id', Mandarin 'zh')
 * - Menentukan bahasa standar (`defaultLocale`: 'en')
 * - Mewajibkan prefix bahasa pada setiap segmen URL (`localePrefix`: 'always')
 */
export const routing = defineRouting({
  locales: ["en", "id", "zh"],
  defaultLocale: "en",
  localePrefix: "always",
})
