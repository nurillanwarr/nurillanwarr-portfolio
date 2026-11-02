/**
 * Komponen Loading Halaman Tentang (About)
 * Menampilkan indikator pemuatan bertema blueprint arsitektur saat halaman About dimuat
 *
 * @returns {JSX.Element} Elemen indikator pemuatan halaman tentang
 */
export default function AboutLoading() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 bg-transparent px-4">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#1C1C1A]/20 border-t-[#A3724B]" />
      <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[#55534E]">
        PREPARING DOSSIER // SHEET A-201...
      </p>
    </div>
  )
}
