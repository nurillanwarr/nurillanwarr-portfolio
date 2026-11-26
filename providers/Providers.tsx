"use client"

import * as React from "react"
import { NextIntlClientProvider } from "next-intl"

type ProvidersProps = {
  children: React.ReactNode
  locale: string
  messages: Record<string, unknown>
}

/**
 * Root Providers Wrapper
 *
 * Menyediakan konteks internasionalisasi (i18n)
 * untuk seluruh hierarki komponen aplikasi.
 *
 * @param props Properti wrapper provider
 * @param props.children Komponen anak yang dibungkus
 * @param props.locale Kode bahasa aktif, misalnya "id" atau "en"
 * @param props.messages Kumpulan pesan terjemahan sesuai locale
 * @returns Komponen provider yang membungkus seluruh halaman aplikasi
 */
export function Providers({ children, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
}
