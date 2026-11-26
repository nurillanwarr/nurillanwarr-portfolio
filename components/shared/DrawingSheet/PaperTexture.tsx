import React from "react"

/**
 * Properti untuk komponen PaperTexture
 */
interface PaperTextureProps {
  /** Path gambar tekstur kertas di folder /public (default: "/paper-texture.jpg") */
  src?: string
  /** Nilai opasitas tekstur antara 0 sampai 1 (default: 0.35) */
  opacity?: number
  /** Menentukan apakah grid milimeter CAD ditampilkan di atas tekstur (default: true) */
  withGrid?: boolean
  /** Kelas CSS tambahan */
  className?: string
}

/**
 * Komponen PaperTexture
 * Menampilkan lapisan latar belakang tekstur kertas sketsa dan garis kisi milimeter CAD:
 * - Menggunakan mode blend `mix-blend-multiply` untuk memadukan serat kertas alami dengan warna latar
 * - Menyertakan lapisan grid milimeter (`oda-mm-grid`) bergaya kertas milimeter kalkir arsitektur
 * - Bersifat non-interaktif (`pointer-events-none`) dan tersembunyi dari pembaca layar (`aria-hidden="true"`)
 *
 * @param {PaperTextureProps} props Properti konfigurasi path gambar tekstur, nilai opasitas, dan opsi grid
 * @returns {JSX.Element} Elemen div dekoratif lapisan tekstur kertas
 */
export const PaperTexture: React.FC<PaperTextureProps> = ({
  src = "/paper-texture.jpg",
  opacity = 0.25,
  withGrid = true,
  className = "",
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <div
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply"
        style={{
          backgroundImage: `url('${src}')`,
          opacity,
        }}
      />
      {withGrid && <div className="oda-mm-grid absolute inset-0 opacity-30" />}
    </div>
  )
}

export default PaperTexture
