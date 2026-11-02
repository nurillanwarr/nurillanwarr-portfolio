import { ImageResponse } from 'next/og'

/**
 * Teks alternatif untuk gambar Open Graph (OG)
 */
export const alt = 'Nurillanwarr Portfolio'

/**
 * Dimensi standar gambar Open Graph (1200x630 piksel)
 */
export const size = { width: 1200, height: 630 }

/**
 * Tipe konten MIME untuk gambar Open Graph
 */
export const contentType = 'image/png'

/**
 * Komponen Pembangkit Gambar Open Graph Dinamis
 * Menampilkan / Menjalankan pembuatan gambar banner pratinjau sosial media secara dinamis:
 * - Menggunakan generator gambar `next/og` berbasis JSX dan font fleksibel
 * - Menampilkan nama dan identitas profil dengan tata letak minimalis terpusat
 * - Menghasilkan gambar rasio 1.91:1 yang optimal untuk pratinjau tautan media sosial
 *
 * @returns {ImageResponse} Respons gambar terformat PNG untuk metadata OG
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F2EFE8',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ fontSize: 64, color: '#1C1C1A', fontWeight: 'bold' }}>
          Nuril Anwar Portfolio
        </div>
      </div>
    ),
    { ...size }
  )
}
