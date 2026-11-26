/**
 * Mengubah string menjadi format snake_case.
 * Umumnya digunakan untuk penamaan kolom database
 * atau key pada backend.
 *
 * @param str - Teks yang akan diubah.
 * @returns String dengan huruf kecil dan pemisah underscore.
 *
 * @example
 * toSnakeCase("Full Name") // "full_name"
 * toSnakeCase("User Profile Name") // "user_profile_name"
 */
export function toSnakeCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w_]/g, "")
}

/**
 * Mengubah string menjadi format kebab-case.
 * Berguna untuk membuat slug URL, nama class CSS,
 * atau nama file komponen.
 *
 * @param str - Teks yang akan diubah.
 * @returns String dengan huruf kecil dan pemisah tanda hubung.
 *
 * @example
 * toKebabCase("UserProfile") // "user-profile"
 * toKebabCase("hello world") // "hello-world"
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase()
    .replace(/[^\w-]/g, "")
}