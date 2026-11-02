"use client"

import * as React from "react"
import { ThemeProvider } from "./ThemeProvider"
import { NextIntlClientProvider } from "next-intl"

type ProvidersProps = {
  children: React.ReactNode
  locale: string
  messages: Record<string, unknown>
}

/**
 * Provider Providers (Root Providers Wrapper)
 * Menyediakan pembungkus konteks global terpadu untuk seluruh hierarki aplikasi Next.js:
 * - Menjalankan `NextIntlClientProvider` untuk penyediaan kamus terjemahan dan locale di komponen client
 * - Menginisialisasi `ThemeProvider` (`next-themes`) dengan atribut class dan tema kertas terang yang terkontrol
 *
 * @param {ProvidersProps} props Properti wrapper provider
 * @param {React.ReactNode} props.children Komponen anak atau subtree halaman yang dibungkus
 * @param {string} props.locale Kode bahasa aktif (misal "en", "id", "zh")
 * @param {Record<string, unknown>} props.messages Objek kamus pesan translasi untuk locale yang bersangkutan
 * @returns {React.JSX.Element} Elemen pohon provider komposit yang membungkus children
 */
export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        forcedTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
