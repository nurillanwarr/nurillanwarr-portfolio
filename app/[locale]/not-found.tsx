import { Link } from "@/i18n/navigation"
import { DrawingSheet } from "@/components/shared/DrawingSheet"

/**
 * Komponen Halaman 404 (Not Found)
 * Menampilkan pemberitahuan bergaya lembar gambar arsitektur ketika rute tidak ditemukan
 *
 * @returns {JSX.Element} Elemen tampilan pesan kesalahan 404
 */
export default function NotFound() {
  return (
    <main className="min-h-[80vh] py-10">
      <DrawingSheet id="not-found" className="mt-4">
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center md:py-28">
          <span className="border border-[#1C1C1A] bg-[#1C1C1A] px-3 py-1 font-mono text-[11px] tracking-[0.18em] uppercase text-[#F5F2EB]">
            ERR // 404 — SHEET NOT FOUND
          </span>
          <h2 className="mt-6 text-4xl font-medium tracking-tight text-[#1C1C1A] md:text-6xl">
            Halaman Tidak{" "}
            <span className="font-serif italic font-normal text-[#A3724B]">
              Ditemukan
            </span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#55534E] md:text-base">
            Lembar kerja arsitektur atau tautan yang Anda cari tidak tersedia di
            dalam arsip portofolio.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1C1C1A] px-7 py-3 font-mono text-xs uppercase tracking-wider text-[#F5F2EB] transition-colors hover:bg-[#8C5E38]"
          >
            <span>← Kembali ke Beranda</span>
          </Link>
        </div>
      </DrawingSheet>
    </main>
  )
}
