/**
 * Mengubah angka menjadi format yang lebih ringkas,
 * seperti 1K untuk 1.000 dan 1.5M untuk 1.500.000.
 *
 * Fungsi ini terutama digunakan untuk menampilkan jumlah interaksi
 * pengguna, seperti reaksi, komentar, dan aktivitas lainnya.
 *
 * @param value - Nilai angka yang akan diformat.
 * @returns String berisi angka yang telah disederhanakan.
 *
 * @example
 * formatCompactNumber(999) // "999"
 * formatCompactNumber(1500) // "1.5K"
 * formatCompactNumber(1000000) // "1M"
 */
export const formatCompactNumber = (value: number): string => {
  if (value < 1000) return value.toString()

  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 1,
  }).format(value)
}


/**
 * Menangani nilai jumlah interaksi yang kosong atau nol
 * agar dapat ditampilkan dengan format yang sesuai pada UI.
 *
 * @param count - Jumlah interaksi pengguna, seperti reaksi atau komentar.
 * @returns String "0" jika nilai count null, undefined, atau kurang dari
 * atau sama dengan nol. Jika nilainya lebih dari nol, angka akan diformat
 * menggunakan format ringkas.
 */
export const formatCount = (count: number | null | undefined): string => {
  if (!count || count <= 0) return "0"
  return formatCompactNumber(count)
}