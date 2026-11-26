import { twMerge } from "tailwind-merge"
import { clsx, type ClassValue } from "clsx"

/**
 * Fungsi pembantu untuk menggabungkan class CSS secara dinamis.
 * Menggunakan clsx untuk mengelola class secara kondisional
 * dan tailwind-merge untuk menghapus class Tailwind yang saling bertentangan,
 * sehingga hasil penggabungan class lebih konsisten.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}