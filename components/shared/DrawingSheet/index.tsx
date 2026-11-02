import React from "react"
import { PaperTexture } from "./PaperTexture"
import { RegistrationMark } from "./RegistrationMark"

/**
 * Properti untuk komponen DrawingSheet
 */
interface DrawingSheetProps {
  /** Elemen anak atau konten yang berada di dalam lembar gambar */
  children: React.ReactNode
  /** Path gambar tekstur kertas yang dipakai sebagai latar belakang lembar */
  paperSrc?: string
  /** Identifier unik opsional untuk elemen section */
  id?: string
  /** Kelas CSS tambahan untuk styling luar */
  className?: string
  /**
   * Variasi tampilan bingkai lembar kerja arsitektur:
   * - "default": Bingkai ganda klasik dengan 4 tanda bidik lingkaran (RegistrationMark) di sudut (dipakai pada Hero)
   * - "editorial": Bingkai spesifikasi vellum dengan siku L presisi tembaga, mistar skala samping, dan garis lipat CAD (dipakai pada About)
   */
  variant?: "default" | "editorial"
}

/**
 * Komponen Siku Sudut Teknis (Corner L-Bracket) khusus varian "editorial"
 */
const EditorialCornerBracket: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
}> = ({ position }) => {
  const posClasses = {
    "top-left": "-top-[3px] -left-[3px] border-t-2 border-l-2",
    "top-right": "-top-[3px] -right-[3px] border-t-2 border-r-2",
    "bottom-left": "-bottom-[3px] -left-[3px] border-b-2 border-l-2",
    "bottom-right": "-bottom-[3px] -right-[3px] border-b-2 border-r-2",
  }[position]

  const dotClasses = {
    "top-left": "-top-[5px] -left-[5px]",
    "top-right": "-top-[5px] -right-[5px]",
    "bottom-left": "-bottom-[5px] -left-[5px]",
    "bottom-right": "-bottom-[5px] -right-[5px]",
  }[position]

  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-20 h-5 w-5 border-[#1C1C1A] ${posClasses}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-20 h-1.5 w-1.5 bg-[#A3724B] ${dotClasses}`}
      />
    </>
  )
}

/**
 * Komponen DrawingSheet
 * Menampilkan lembar kerja arsitektural (architectural drafting sheet) dengan presisi gambar teknik:
 * - Varian "default": Garis tepi ganda (double border) dan 4 tanda registrasi lingkaran CAD di setiap sudutnya
 * - Varian "editorial": Lembar spesifikasi teknis dengan siku L tembaga, bar skala mistar CAD, dan tekstur vellum
 */
export const DrawingSheet: React.FC<DrawingSheetProps> = ({
  children,
  paperSrc,
  id,
  className = "",
  variant = "default",
}) => {
  if (variant === "editorial") {
    return (
      <section
        id={id}
        className={`relative mx-auto w-full max-w-[1440px] scroll-mt-24 px-3 md:px-6 ${className}`}
      >
        {/* Bingkai Luar Editorial Spesifikasi dengan Siku L Tembaga */}
        <div className="relative border border-[#1C1C1A]/60 bg-[#E6DDD0]/60 p-2 md:p-3">
          <EditorialCornerBracket position="top-left" />
          <EditorialCornerBracket position="top-right" />
          <EditorialCornerBracket position="bottom-left" />
          <EditorialCornerBracket position="bottom-right" />

          {/* Bar Indikator Mistar Skala Atas */}
          <div
            aria-hidden="true"
            className="mb-2 hidden items-center justify-between px-2 font-mono text-[9px] tracking-[0.22em] uppercase text-[#736E65] md:flex"
          >
            <div className="flex items-center gap-3">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#A3724B]" />
              <span>CAD // SPEC-INSERT REV 2.4</span>
            </div>
            <div className="flex items-center gap-6 opacity-60">
              <span>00</span>
              <span>|</span>
              <span>25</span>
              <span>|</span>
              <span>50</span>
              <span>|</span>
              <span>75</span>
              <span>|</span>
              <span>100 MM</span>
            </div>
            <span>SCALE 1 : 100</span>
          </div>

          {/* Kertas Vellum Dalam dengan Garis Tepi Putus-putus Teknis di Samping */}
          <div className="relative overflow-hidden border border-[#1C1C1A]/80 bg-[#F2ECE1] shadow-[inset_0_0_40px_rgba(28,28,26,0.03)]">
            <PaperTexture
              src={paperSrc ?? "/paper-texture-2.jpg"}
              opacity={0.35}
            />

            {/* Aksen Garis Lipat Vertikal Kiri & Kanan (Blueprint Fold Margin) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-3 z-10 hidden w-px border-l border-dashed border-[#1C1C1A]/20 lg:block"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-3 z-10 hidden w-px border-r border-dashed border-[#1C1C1A]/20 lg:block"
            />

            <div className="relative z-10">{children}</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[1440px] scroll-mt-24 px-3 md:px-6 ${className}`}
    >
      {/* Garis tepi luar */}
      <div className="relative border border-[#1C1C1A] p-[14px]">
        <RegistrationMark corner="top-left" />
        <RegistrationMark corner="top-right" />
        <RegistrationMark corner="bottom-left" />
        <RegistrationMark corner="bottom-right" />

        {/* Garis tepi dalam + kertas */}
        <div className="relative overflow-hidden border border-[#1C1C1A]/40 bg-[#EBE3D7]">
          <PaperTexture src={paperSrc} />
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </section>
  )
}

export { PaperTexture, RegistrationMark }
export default DrawingSheet
