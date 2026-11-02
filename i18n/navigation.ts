import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

/**
 * Modul Navigasi i18n
 * Menyediakan utilitas dan hook navigasi terintegrasi dengan perutean multi-bahasa (next-intl):
 * - `Link`: Komponen tautan navigasi yang menyematkan prefix locale secara otomatis
 * - `redirect`: Fungsi redirect server-side maupun client-side dengan preservasi locale
 * - `usePathname`: Hook untuk membaca pathname URL aktif sesuai konfigurasi routing
 * - `useRouter`: Hook navigasi programatik (push, replace, prefetch) dengan penanganan locale
 * - `getPathname`: Fungsi helper untuk mengonversi rute internal menjadi pathname terlokalisasi
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)