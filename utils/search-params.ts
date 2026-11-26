/**
 * Menyeragamkan parameter pencarian URL menjadi array string
 * yang telah dibersihkan dari spasi dan nilai kosong.
 *
 * Fungsi ini dapat menangani input berupa satu string,
 * array string, maupun beberapa nilai yang dipisahkan dengan koma.
 *
 * @param param - Nilai parameter mentah yang diperoleh dari URL.
 * @returns Array string yang sudah dibersihkan dan tidak kosong.
 *          Mengembalikan undefined jika tidak ada nilai yang valid.
 */
export const normalizeArrayParam = (
  param: string | string[] | undefined
): string[] | undefined => {
  // Memeriksa apakah parameter tersedia.
  // Jika nilainya kosong atau undefined, kembalikan undefined.
  if (!param) return undefined

  // Memeriksa tipe parameter.
  // Jika sudah berupa array, gunakan langsung.
  // Jika berupa string, pisahkan berdasarkan tanda koma.
  const arr = Array.isArray(param) ? param : param.split(",")

  // Menghapus spasi di awal dan akhir setiap elemen,
  // kemudian membuang elemen yang memiliki nilai kosong.
  const filtered = arr.map((item) => item.trim()).filter(Boolean)

  // Jika masih terdapat elemen yang valid, kembalikan array.
  // Jika tidak ada elemen yang valid, kembalikan undefined.
  return filtered.length > 0 ? filtered : undefined
}