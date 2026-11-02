/**
 * Komponen Loading Global Lokal
 * Menampilkan indikator pemuatan (loading state) saat transisi rute atau pengambilan data:
 * - Menempati tinggi layar penuh (`min-h-screen`) dengan estetika lembar gambar arsitektur
 * - Menampilkan spinner tembaga/grafit dan teks status monospaced
 *
 * @returns {JSX.Element} Elemen antarmuka penanda proses pemuatan halaman
 */
export default function Loading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 bg-transparent px-4">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#1C1C1A]/20 border-t-[#A3724B]" />
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#55534E]">
        LOADING ARCHITECTURAL SHEET...
      </p>
    </div>
  )
}
