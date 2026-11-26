"use client"

import React from "react"
import { useLocale } from "next-intl"
import { Achievement } from "@/data/achievements"
import { CertificateVisual } from "./CertificateVisual"

interface AchievementCardProps {
  achievement: Achievement
  onSelect: (achievement: Achievement) => void
}

/**
 * Komponen AchievementCard
 * Menampilkan kartu sertifikat dalam grid galeri halaman /achievements bernuansa kertas vellum arsitektural:
 * - Miniatur visual sertifikat beresolusi tinggi dengan hover effect
 * - Informasi penerbit (Dicoding, Samsung, MTE, UMS) beraksen tembaga arsitektur (#8C5E38)
 * - Tingkat sertifikasi (👑 Expert / Winner)
 * - Kode kredensial dan tanggal penerbitan
 * - Ketika diklik, memicu pop-up AchievementModal
 */
export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  onSelect,
}) => {
  const locale = useLocale()
  const isId = locale === "id"

  return (
    <div
      onClick={() => onSelect(achievement)}
      className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-[#1C1C1A]/20 bg-[#FAF6F0] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8C5E38] hover:shadow-xl"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onSelect(achievement)
        }
      }}
      aria-label={`${isId ? "Lihat detail sertifikat" : "Inspect certificate"} ${achievement.name}`}
    >
      {/* Thumbnail Certificate Preview */}
      <div className="relative overflow-hidden bg-[#EFE9DF] p-3.5 border-b border-[#1C1C1A]/10 transition-transform duration-500 ease-out sm:p-4 group-hover:scale-[1.01]">
        <CertificateVisual
          achievement={achievement}
          className="pointer-events-none w-full"
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#1C1C1A]/40 opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-[#FAF6F0] px-4 py-2 font-mono text-xs font-bold text-[#1C1C1A] shadow-lg border border-[#1C1C1A]/20">
            {isId ? "Buka Sertifikat ↗" : "Inspect Certificate ↗"}
          </span>
        </div>
      </div>

      {/* Metadata Bottom Card */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10.5px] font-semibold tracking-wider text-[#8C5E38] uppercase">
              {achievement.issuing_organization}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-[#8C5E38]/12 border border-[#8C5E38]/30 px-2 py-0.5 font-mono text-[10px] font-bold text-[#8C5E38] uppercase">
              <span>👑</span>
              <span>{achievement.level}</span>
            </span>
          </div>

          <h3 className="mt-2 text-base font-bold tracking-tight text-[#1C1C1A] transition-colors group-hover:text-[#8C5E38] sm:text-lg">
            {achievement.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-[#55534E]">
            {achievement.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[#1C1C1A]/10 pt-3 font-mono text-[10.5px] text-[#736E65]">
          <span>ID: {achievement.credential_id}</span>
          <span>{achievement.issue_date}</span>
        </div>
      </div>
    </div>
  )
}

export default AchievementCard
