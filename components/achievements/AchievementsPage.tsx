"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ACHIEVEMENTS, Achievement } from "@/data/achievements"
import { AchievementCard } from "./AchievementCard"
import { AchievementModal } from "./AchievementModal"

/**
 * Komponen AchievementsPage
 * Menampilkan halaman katalog seluruh sertifikasi, kompetensi, dan penghargaan Nuril Anwar
 * dengan tema kertas vellum arsitektur portofolio (#EBE3D7 & #FAF6F0):
 * - Header editorial arsitektural bernuansa kertas sketsa
 * - Filter kategori interaktif (All, Courses, Awards)
 * - Grid kartu sertifikat responsif
 * - Pop-up modal interaktif berfitur zoom & kredensial resmi sesuai Gambar 2
 */
export const AchievementsPage: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] =
    useState<Achievement | null>(null)
  const [filterType, setFilterType] = useState<string>("all")

  const filteredAchievements = ACHIEVEMENTS.filter((item) => {
    if (filterType === "all") return true
    return item.type === filterType
  })

  return (
    <div className="min-h-screen bg-[#EBE3D7] text-[#1C1C1A] pt-20 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
        {/* Breadcrumb Back Link */}
        <div className="mb-8">
          <Link
            href="/#about"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider text-[#736E65] uppercase transition-colors hover:text-[#1C1C1A]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            <span>Return to Portfolio</span>
          </Link>
        </div>

        {/* Section Header */}
        <div className="border-b border-[#1C1C1A]/20 pb-8 sm:flex sm:items-end sm:justify-between sm:gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-[10.5px] tracking-[0.24em] text-[#8C5E38] uppercase">
              <span>(ACHIEVEMENTS)</span>
              <span>VERIFIED COMPETENCY // ARCHIVE</span>
            </div>
            <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight text-[#1C1C1A] sm:text-6xl md:text-7xl">
              Certifications &amp; Awards
            </h1>
          </div>
          <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-[#55534E] sm:mt-0 sm:text-right">
            Verified credentials, expert bootcamps, and national innovation awards
            demonstrating technical rigor and engineering excellence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="my-8 flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "ALL CREDENTIALS" },
            { id: "course", label: "BOOTCAMPS & COURSES" },
            { id: "award", label: "AWARDS & COMPETITIONS" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilterType(tab.id)}
              className={`rounded-full px-4 py-2 font-mono text-xs font-semibold tracking-wider transition-all duration-200 ${
                filterType === tab.id
                  ? "bg-[#1C1C1A] text-[#FAF6F0] shadow-xs font-bold"
                  : "border border-[#1C1C1A]/20 bg-[#FAF6F0] text-[#55534E] hover:border-[#8C5E38] hover:text-[#1C1C1A]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((item) => (
            <AchievementCard
              key={item.id}
              achievement={item}
              onSelect={setSelectedAchievement}
            />
          ))}
        </div>

        {/* Interactive Modal Pop-Up (Gambar 2) */}
        <AchievementModal
          isOpen={selectedAchievement !== null}
          onClose={() => setSelectedAchievement(null)}
          achievement={selectedAchievement}
        />
      </div>
    </div>
  )
}

export default AchievementsPage
