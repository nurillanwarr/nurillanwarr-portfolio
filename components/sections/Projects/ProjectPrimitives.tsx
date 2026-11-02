import React from "react"
import { ProjectStatusType } from "./constants"

/**
 * Merender simbol titik status sesuai tipe proses & asal proyek:
 * - internship: Titik pulsing amber (#A3724B) — Magang Industri (Proses)
 * - competition: Titik pulsing terracotta (#8C5E38) — Lomba & Hackathon (Proses)
 * - thesis: Target lingkaran konsentris arsitektur (#1C1C1A) — Skripsi / Riset (Proses)
 * - coursework: Kotak padat presisi arsitektural (#1C1C1A) — Tugas Kuliah (Proses)
 */
export const StatusDot: React.FC<{ type: ProjectStatusType }> = ({ type }) => {
  if (type === "internship" || (type as string) === "onsite") {
    return (
      <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#A3724B] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#A3724B]" />
      </span>
    )
  }
  if (type === "competition") {
    return (
      <span className="relative flex h-2.5 w-2.5 shrink-0 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C5E38] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8C5E38]" />
      </span>
    )
  }
  if (type === "thesis" || (type as string) === "indesign") {
    return (
      <span className="inline-flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full border border-[#1C1C1A]">
        <span className="h-1 w-1 rounded-full bg-[#1C1C1A]" />
      </span>
    )
  }
  // coursework & completed / in-process default
  return (
    <span className="inline-block h-2 w-2 shrink-0 rounded-xs bg-[#1C1C1A]" />
  )
}

/**
 * Simbol Target Reticle CAD (⊕) di sudut bingkai gambar
 */
export const CadReticle: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
    className={`pointer-events-none h-4 w-4 text-[#1C1C1A]/75 ${className}`}
  >
    <circle cx="10" cy="10" r="4.2" />
    <line x1="10" y1="1" x2="10" y2="19" />
    <line x1="1" y1="10" x2="19" y2="10" />
  </svg>
)
