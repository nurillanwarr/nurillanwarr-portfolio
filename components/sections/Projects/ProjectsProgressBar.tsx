import React from "react"

interface ProjectsProgressBarProps {
  progressFillRef: React.RefObject<HTMLDivElement | null>
  activeIndex: number
  totalSheets: number
}

/**
 * Komponen ProjectsProgressBar
 * Menampilkan baris indikator garis kemajuan di bagian bawah seksi Projects (Gambar 1 & 2):
 * - Label "SCROLL TO LEAF THROUGH" di sisi kiri
 * - Garis indikator horizontal yang memanjang mengikuti progress scroll
 * - Nomor lembar aktif "01 / 06" di sisi kanan
 */
export const ProjectsProgressBar: React.FC<ProjectsProgressBarProps> = ({
  progressFillRef,
  activeIndex,
  totalSheets,
}) => {
  return (
    <div className="mt-6 flex items-center gap-4 pt-2 font-mono text-[10px] tracking-[0.16em] uppercase text-[#55534E]">
      <span className="shrink-0">SCROLL TO LEAF THROUGH</span>

      {/* Garis Indikator Progress */}
      <div className="relative h-[1px] flex-1 bg-[#1C1C1A]/18">
        <div
          ref={progressFillRef}
          style={{ width: "4%" }}
          className="absolute inset-y-0 left-0 h-[1.5px] -translate-y-[0.25px] bg-[#1C1C1A] transition-[width] duration-75 ease-out"
        />
      </div>

      {/* Nomor Lembar Aktif (01 / 06) */}
      <span className="shrink-0 font-semibold text-[#1C1C1A]">
        {String(activeIndex).padStart(2, "0")} /{" "}
        {String(totalSheets).padStart(2, "0")}
      </span>
    </div>
  )
}

export default ProjectsProgressBar
