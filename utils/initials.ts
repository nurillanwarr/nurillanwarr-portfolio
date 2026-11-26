/**
 * Mengambil huruf inisial dari nama lengkap pengguna
 * untuk digunakan sebagai pengganti foto profil.
 *
 * Fungsi ini dapat menangani nama yang terdiri dari satu kata,
 * beberapa kata, maupun nama yang panjang.
 *
 * @param name - Nama lengkap pengguna.
 * @returns String berisi 1 hingga 2 huruf inisial dalam huruf kapital.
 *
 * @example
 * getInitials("Nuril") // Menghasilkan "N"
 * getInitials("Nuril Anwar") // Menghasilkan "NA"
 * getInitials("A B C D E") // Menghasilkan "AB"
 *
 * @logic
 * - 1 kata: Mengambil huruf pertama dari kata tersebut.
 * - 2-3 kata: Mengambil huruf pertama dari kata pertama dan terakhir.
 * - 4 kata atau lebih: Mengambil huruf pertama dari dua kata pertama.
 */
export const getInitials = (name: string) => {
  // Memeriksa apakah nama kosong.
  if (!name) return ""

  // Menghapus spasi di awal dan akhir, kemudian memisahkan nama
  // berdasarkan satu atau lebih karakter spasi.
  const words = name.trim().split(/\s+/)

  // Menyiapkan variabel untuk menyimpan huruf inisial.
  let initials = ""

  // Jika nama hanya terdiri dari satu kata,
  // ambil huruf pertama dari kata tersebut.
  if (words.length === 1) {
    initials = words[0]?.[0] ?? ""

    // Jika nama terdiri dari 2 atau 3 kata,
    // ambil huruf pertama dari kata pertama dan terakhir.
  } else if (words.length <= 3) {
    initials = (words[0]?.[0] ?? "") + (words[words.length - 1]?.[0] ?? "")

    // Jika nama terdiri dari 4 kata atau lebih,
    // ambil huruf pertama dari dua kata pertama.
  } else {
    initials = (words[0]?.[0] ?? "") + (words[1]?.[0] ?? "")
  }

  // Mengubah seluruh huruf inisial menjadi huruf kapital.
  return initials.toUpperCase()
}
