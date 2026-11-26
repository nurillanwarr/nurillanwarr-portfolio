import { formatDate } from "./format-date"

/**
 * Mengubah tanggal menjadi format waktu relatif yang lebih ringkas.
 *
 * Ketentuan format:
 * - Kurang dari 1 menit: {detik}dtk / {detik}s
 * - Kurang dari 1 jam: {menit}mnt / {menit}m
 * - Kurang dari 24 jam: {jam}jam / {jam}h
 * - Maksimal 7 hari: {hari}h / {hari}d
 * - Lebih dari 7 hari: Menampilkan tanggal dengan format lokal.
 *
 * @param date - Tanggal dalam bentuk string ISO.
 * @param locale - Kode bahasa yang digunakan ('id' atau 'en').
 * @returns String waktu relatif atau tanggal dengan format lokal.
 */
export const timeAgo = ({
  date,
  locale,
}: {
  date: string
  locale: string
}): string => {
  // Menghitung selisih waktu antara sekarang dan tanggal yang diberikan dalam detik
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  )

  // Menentukan singkatan waktu berdasarkan bahasa
  const labels: Record<
    string,
    { s: string; m: string; h: string; d: string }
  > = {
    id: { s: "dtk", m: "mnt", h: "jam", d: "h" },
    en: { s: "s", m: "m", h: "h", d: "d" },
  }

  // Menggunakan bahasa Inggris jika kode berbahasa tidak tersedia
  const l = labels[locale] || labels.en

  // Jika selisih waktu kurang dari 1 menit, tampilkan dalam detik
  if (seconds < 60) return `${seconds}${l.s}`

  // Menghitung selisih waktu dalam menit
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}${l.m}`

  // Menghitung selisih waktu dalam jam
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}${l.h}`

  // Menghitung selisih waktu dalam hari
  const days = Math.floor(hours / 24)
  if (days <= 7) return `${days}${l.d}`

  // Jika lebih dari 7 hari, tampilkan tanggal dengan format lokal
  return formatDate({
    date,
    locale,
    dateStyle: "medium",
  })
}