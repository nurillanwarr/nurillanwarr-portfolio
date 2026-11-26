/**
 * Mengubah teks menjadi slug yang ramah untuk URL.
 * Mengubah huruf menjadi lowercase, menghapus karakter khusus,
 * dan mengganti spasi dengan tanda hubung (-).
 *
 * @param text - Teks asli yang akan diubah menjadi slug.
 * @returns String yang sudah dibersihkan dan aman digunakan pada URL.
 *
 * @example
 * slugify("Hello World!!!") // "hello-world"
 * slugify("Fitur Baru: Login User") // "fitur-baru-login-user"
 * slugify("  Extra   Spaces  ") // "extra-spaces"
 */
export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}

/**
 * Membuat slug unik dengan menambahkan ID alfanumerik acak.
 * Berguna untuk mengurangi kemungkinan duplikasi slug di database.
 *
 * @param text - Teks dasar yang akan dijadikan slug, biasanya judul.
 * @param length - Jumlah karakter ID acak (default: 5).
 * @returns Slug yang dilengkapi dengan ID acak.
 *
 * @example
 * generateUniqueSlug("My Card") // "my-card-x8j2k"
 * generateUniqueSlug("Task", 3) // "task-a1b"
 */
export const generateUniqueSlug = (
  text: string,
  length: number = 5
): string => {
  // Mengubah teks menjadi slug terlebih dahulu
  const baseSlug = slugify(text)
  
  // Menghasilkan ID acak menggunakan karakter alfanumerik
  const randomId = Math.random()
    .toString(36)
    .substring(2, 2 + length)

  // Menggabungkan slug utama dengan ID acak
  return `${baseSlug}-${randomId}`
} 