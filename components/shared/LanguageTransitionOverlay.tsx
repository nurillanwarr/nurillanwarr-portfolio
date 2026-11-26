"use client"

import React, { useEffect } from "react"

/**
 * LanguageTransitionOverlay
 * Penanganan transisi pergantian bahasa yang simpel, bersih, dan elegan:
 * - Halaman tetap terlihat sepenuhnya (page is visible, zero obstructive popup/curtain).
 * - Memberikan efek redup lembut (subtle dimming) pada konten saat proses transisi berjalan.
 * - Mengaktifkan Top Progress Bar tipis di tepi paling atas (ala Alvalens / Linear).
 * - Tidak ada overlay layar penuh atau teks berlebihan yang mengganggu kenyamanan visual.
 */
export const LanguageTransitionOverlay: React.FC = () => {
  useEffect(() => {
    const handleStart = (e: Event) => {
      const customEvent = e as CustomEvent<{
        targetLocale: "en" | "id"
        targetPath: string
      }>
      const targetPath = customEvent.detail?.targetPath || ""

      // Berikan efek redup halus pada halaman agar transisi terasa responsif
      const mainEl = document.querySelector("main") || document.body
      mainEl.classList.add("page-loading-dimmed")

      // Navigasi cepat dan mulus setelah transisi singkat (180ms)
      setTimeout(() => {
        if (targetPath) {
          window.location.href = targetPath
        }
      }, 180)
    }

    window.addEventListener("language-switch-start", handleStart)

    return () => {
      window.removeEventListener("language-switch-start", handleStart)
    }
  }, [])

  // Hapus efek redup saat halaman baru selesai dimuat
  useEffect(() => {
    const mainEl = document.querySelector("main") || document.body
    mainEl.classList.remove("page-loading-dimmed")
    mainEl.classList.remove("page-exit-animating")
  }, [])

  return null
}

export default LanguageTransitionOverlay
