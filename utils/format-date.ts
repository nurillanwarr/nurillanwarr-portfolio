type FormatDateParams = {
  date: Date | string | number
  locale?: string
  options?: Intl.DateTimeFormatOptions
  dateStyle?: "full" | "long" | "medium" | "short"
}

/**
 * Mengubah nilai tanggal menjadi teks dengan format yang disesuaikan
 * berdasarkan bahasa dan wilayah (locale) yang ditentukan.
 *
 * Menggunakan API bawaan JavaScript, yaitu Intl.DateTimeFormat,
 * sehingga tidak memerlukan library tambahan.
 * Mendukung format tanggal bawaan maupun pengaturan format secara khusus.
 *
 * @param {FormatDateParams} params - Objek konfigurasi yang berisi tanggal,
 * bahasa atau wilayah, serta pilihan format tanggal.
 *
 * @returns {string} Tanggal yang telah diubah menjadi teks
 * sesuai dengan format dan wilayah yang ditentukan.
 *
 * @example
 * // Penggunaan standar: "April 9, 2026"
 * formatDate({
 *   date: '2026-04-09',
 *   locale: 'en-US',
 *   dateStyle: 'long'
 * });
 *
 * @example
 * // Format khusus Bulan-Tahun: "Apr 2026"
 * formatDate({
 *   date: '2026-04-09',
 *   locale: 'en-US',
 *   options: { month: 'short', year: 'numeric' }
 * });
 */
export const formatDate = ({
  date,
  locale,
  dateStyle = "long",
  options,
}: FormatDateParams): string => {
  let dateObj: Date

  // Memeriksa apakah nilai tanggal sudah berupa objek Date.
  if (date instanceof Date) {
    dateObj = date
  } else {
    // Mengubah nilai tanggal menjadi string agar dapat diproses.
    let dateString = String(date)

    // Memeriksa format tanggal yang menggunakan tanda hubung (-)
    if (typeof date === "string" && dateString.includes("-")) {
      const parts = dateString.split("-")

      // Jika format tanggal memiliki tiga bagian dan tahun tidak
      // berada di bagian pertama, susun ulang menjadi format YYYY-MM-DD.
      if (parts.length === 3 && parts[0].length !== 4) {
        dateString = `${parts[2]}-${parts[1]}-${parts[0]}`
      }
    }

    // Mengubah string atau angka menjadi objek Date.
    dateObj = new Date(dateString)
  }

  // Memeriksa apakah tanggal yang diberikan valid.
  if (isNaN(dateObj.getTime())) {
    console.warn(`Invalid date provided to formatDate: ${date}`)
    return "N/A"
  }

  // Menggunakan opsi format khusus jika tersedia.
  // Jika tidak, gunakan format tanggal bawaan berdasarkan dateStyle.
  const formatOptions: Intl.DateTimeFormatOptions = options || {
    dateStyle,
  }

  // Menghasilkan teks tanggal sesuai bahasa dan wilayah yang ditentukan.
  return new Intl.DateTimeFormat(locale, formatOptions).format(dateObj)
}