"use client"

import React, { useState, useEffect } from "react"
import { useLocale } from "next-intl"
import { Achievement } from "@/data/achievements"
import { CertificateVisual } from "./CertificateVisual"

interface AchievementModalProps {
  isOpen: boolean
  onClose: () => void
  achievement: Achievement | null
}

/**
 * Komponen AchievementModal
 * Menampilkan jendela modal pop-up "Detail Achievement",
 * diselaraskan dengan estetika kertas vellum arsitektur portofolio (#FAF6F0 & #EBE3D7)
 * dan dukungan dwibahasa penuh.
 */
export const AchievementModal: React.FC<AchievementModalProps> = ({
  isOpen,
  onClose,
  achievement,
}) => {
  const locale = useLocale()
  const isId = locale === "id"
  const [zoomScale, setZoomScale] = useState<number>(1)
  const [copiedId, setCopiedId] = useState<boolean>(false)

  // Reset zoom on close
  useEffect(() => {
    if (!isOpen) {
      setZoomScale(1)
      setCopiedId(false)
    }
  }, [isOpen])

  // ESC key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !achievement) return null

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(achievement.credential_id)
      setCopiedId(true)
      setTimeout(() => setCopiedId(false), 2000)
    } catch {
      // fallback
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#1C1C1A]/65 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-achievement-title"
        className="relative z-10 flex h-full max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#1C1C1A]/20 bg-[#FAF6F0] text-[#1C1C1A] shadow-2xl md:max-h-[85vh]"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-[#1C1C1A]/10 bg-[#FAF6F0] px-5 py-3.5 sm:px-6">
          <h3
            id="modal-achievement-title"
            className="font-sans text-sm font-semibold tracking-wide text-[#1C1C1A] sm:text-base"
          >
            {isId ? "Detail Kredensial" : "Detail Achievement"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label={isId ? "Tutup modal" : "Close modal"}
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#736E65] transition-colors hover:bg-[#EBE3D7] hover:text-[#1C1C1A]"
          >
            ✕
          </button>
        </div>

        {/* Modal Body: Left Visual Preview & Right Metadata Panel */}
        <div className="flex flex-1 flex-col overflow-y-auto md:flex-row md:overflow-hidden">
          {/* --- SISI KIRI: JENDELA VISUAL SERTIFIKAT DENGAN ZOOM --- */}
          <div className="group/preview relative flex min-h-[300px] flex-1 items-center justify-center overflow-hidden bg-[#EFE9DF] p-4 sm:p-6 md:p-8">
            <div
              className="relative max-h-full max-w-full origin-center transition-transform duration-200 ease-out"
              style={{ transform: `scale(${zoomScale})` }}
            >
              <CertificateVisual
                achievement={achievement}
                className="max-h-[65vh] w-auto max-w-[850px] shadow-lg"
              />
            </div>

            {/* Floating Zoom Controls Bar */}
            <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#1C1C1A]/20 bg-[#FAF6F0]/95 px-3 py-1.5 shadow-lg backdrop-blur-md">
              <button
                type="button"
                onClick={() => setZoomScale((prev) => Math.max(0.75, prev - 0.25))}
                disabled={zoomScale <= 0.75}
                className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-[#1C1C1A] transition-colors hover:bg-[#EBE3D7] disabled:opacity-30 cursor-pointer"
                aria-label="Zoom out"
              >
                −
              </button>
              <span className="min-w-[48px] text-center font-mono text-xs font-semibold text-[#1C1C1A]">
                {Math.round(zoomScale * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomScale((prev) => Math.min(2.5, prev + 0.25))}
                disabled={zoomScale >= 2.5}
                className="flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold text-[#1C1C1A] transition-colors hover:bg-[#EBE3D7] disabled:opacity-30 cursor-pointer"
                aria-label="Zoom in"
              >
                +
              </button>
            </div>
          </div>

          {/* --- SISI KANAN: PANEL METADATA KREDENSIAL LENGKAP --- */}
          <div className="flex w-full shrink-0 flex-col justify-between border-t border-[#1C1C1A]/10 bg-[#FAF6F0] p-5 sm:p-6 md:w-[340px] md:border-t-0 md:border-l lg:w-[380px]">
            <div className="space-y-5">
              {/* Issuing Organization Brand */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EBE3D7] border border-[#1C1C1A]/15 font-sans text-xl font-bold text-[#8C5E38]">
                  {achievement.issuing_organization[0]}
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-[#1C1C1A]">
                    {achievement.issuing_organization}
                  </h4>
                  <p className="font-mono text-[11px] text-[#736E65]">
                    {isId ? "Otoritas Penerbit Terverifikasi" : "Verified Issuing Authority"}
                  </p>
                </div>
              </div>

              {/* Credential ID Bar */}
              <div>
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[#736E65] uppercase">
                  {isId ? "ID KREDENSIAL" : "CREDENTIAL ID"}
                </p>
                <div className="mt-1.5 flex items-center justify-between rounded-lg border border-[#1C1C1A]/15 bg-[#EFE9DF] px-3 py-2 font-mono text-xs text-[#1C1C1A]">
                  <span className="truncate">{achievement.credential_id}</span>
                  <button
                    type="button"
                    onClick={handleCopyId}
                    aria-label="Salin ID Kredensial"
                    className="ml-2 flex items-center gap-1 rounded bg-[#FAF6F0] border border-[#1C1C1A]/15 px-2 py-0.5 text-[10px] font-bold text-[#55534E] transition-colors hover:bg-[#EBE3D7] hover:text-[#1C1C1A] cursor-pointer"
                  >
                    {copiedId ? (isId ? "Tersalin!" : "Copied!") : (isId ? "Salin" : "Copy")}
                  </button>
                </div>
              </div>

              {/* Type & Level Badges */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#736E65] uppercase">
                    {isId ? "TIPE" : "TYPE"}
                  </p>
                  <div className="mt-1.5">
                    <span className="inline-block rounded-md bg-[#EBE3D7] border border-[#1C1C1A]/15 px-2.5 py-1 font-mono text-xs font-semibold text-[#1C1C1A] capitalize">
                      {achievement.type}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#736E65] uppercase">
                    {isId ? "TINGKAT" : "LEVEL"}
                  </p>
                  <div className="mt-1.5">
                    <span className="inline-flex items-center gap-1 rounded-md bg-[#8C5E38]/12 border border-[#8C5E38]/30 px-2.5 py-1 font-mono text-xs font-bold text-[#8C5E38]">
                      <span>👑</span>
                      <span>{achievement.level}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Issue Date & Expiration Date */}
              <div className="grid grid-cols-2 gap-3 border-t border-[#1C1C1A]/10 pt-4">
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#736E65] uppercase">
                    {isId ? "TANGGAL TERBIT" : "ISSUE DATE"}
                  </p>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#1C1C1A]">
                    {achievement.issue_date}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-wider text-[#736E65] uppercase">
                    {isId ? "KEDALUWARSA" : "EXPIRATION DATE"}
                  </p>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#1C1C1A]">
                    {achievement.expiration_date || (isId ? "Tanpa Kedaluwarsa" : "No Expiration")}
                  </p>
                </div>
              </div>

              {/* Categories Pills */}
              <div className="border-t border-[#1C1C1A]/10 pt-4">
                <p className="font-mono text-[10px] font-semibold tracking-wider text-[#736E65] uppercase">
                  {isId ? "KATEGORI" : "CATEGORIES"}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {achievement.categories.map((cat, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-[#1C1C1A]/15 bg-[#EBE3D7] px-2.5 py-1 font-mono text-xs text-[#3D3A35]"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action: View Credential External Link */}
            <div className="mt-6 border-t border-[#1C1C1A]/10 pt-4">
              <a
                href={achievement.credential_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C1C1A] py-3 text-center font-mono text-xs font-bold tracking-wider text-[#FAF6F0] uppercase transition-all hover:bg-[#8C5E38] shadow-md active:scale-[0.99]"
              >
                <span>📜</span>
                <span>{isId ? "Lihat Kredensial Resmi!" : "View credential!"}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AchievementModal
