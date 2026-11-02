import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Fungsi cn (Classnames Merger)
 * Menjalankan penggabungan dan rekonsiliasi class CSS Tailwind secara dinamis:
 * - Menggunakan `clsx` untuk memproses class bersyarat (objek kondisi, array, atau ekspresi logika)
 * - Menggunakan `tailwind-merge` untuk menyelesaikan bentrok class utilitas Tailwind (misal `px-2` ditimpa `px-4`)
 * - Menghasilkan string class Tailwind bersih tanpa konflik duplikasi style
 *
 * @param {...ClassValue[]} inputs Daftar nama kelas, kondisi boolean, array, atau ekspresi class lainnya
 * @returns {string} Gabungan string nama class CSS yang telah dioptimasi
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
