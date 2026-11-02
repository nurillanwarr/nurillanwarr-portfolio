"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export type AchievementIconType = "trophy" | "medal" | "award"

export interface AchievementItem {
  id: string
  year: string
  code: string
  icon: AchievementIconType
  title: string
  subtitle: string
  date: string
  accentBg: string
}

/**
 * Komponen ikon SVG inline untuk kartu pencapaian (Trophy, Medal, Award)
 * Menggunakan palet warna hangat kertas & tembaga arsitektural (tanpa warna neon).
 */
function AchievementBadgeIcon({ type }: { type: AchievementIconType }) {
  if (type === "trophy") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }

  if (type === "award") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  )
}

/**
 * Daftar pencapaian, kompetisi internasional/nasional, dan sertifikasi nyata Nuril Anwar (sesuai CV).
 * Seluruh warna badge diselaraskan dengan palet Oda Arkitekter (#1C1C1A, #A3724B, #8C5E38, #55534E).
 */
export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-01",
    year: "2024",
    code: "HON-01",
    icon: "trophy",
    title: "International Exhibition & Competition — MTE Malaysia & I2ASPO",
    subtitle:
      "Developed 'Synexa' Smart Stroke Healthcare Rehab App (Flutter, NestJS, Supabase)",
    date: "2024 • INTERNATIONAL EXHIBITION",
    accentBg: "bg-[#A3724B] text-[#F5F2EB] border-[#8C5E38]",
  },
  {
    id: "ach-02",
    year: "2024",
    code: "HON-02",
    icon: "medal",
    title: "ASEAN Challenge — Digital Innovation Competition",
    subtitle:
      "ASEAN-Scale Software Development with TypeScript & Next.js/React Ecosystem",
    date: "2024 • ASEAN COMPETITION",
    accentBg: "bg-[#1C1C1A] text-[#F5F2EB] border-[#1C1C1A]",
  },
  {
    id: "ach-03",
    year: "2024",
    code: "HON-03",
    icon: "award",
    title: "Girantra — AI Agri Marketplace & UI/UX Competition",
    subtitle:
      "Intelligent Agricultural Marketplace powered by Gemini 2.0 Flash & Flutter",
    date: "2024 • APPLIED AI & UI/UX",
    accentBg: "bg-[#8C5E38] text-[#F5F2EB] border-[#734B2B]",
  },
  {
    id: "ach-04",
    year: "2024",
    code: "HON-04",
    icon: "medal",
    title: "IT Fest & Samsung Innovation Programs",
    subtitle:
      "Active Participant in National & International Tech Innovation Competitions",
    date: "2024 • NATIONAL INNOVATION",
    accentBg: "bg-[#4A4742] text-[#F5F2EB] border-[#1C1C1A]",
  },
  {
    id: "ach-05",
    year: "2023",
    code: "CERT-01",
    icon: "award",
    title: "Dicoding Bootcamp (Frontend & Backend Development)",
    subtitle:
      "Completed Comprehensive Full-Stack Web & RESTful API Engineering Training",
    date: "2023 — 2024 • CERTIFIED TRACK",
    accentBg: "bg-[#A3724B] text-[#F5F2EB] border-[#8C5E38]",
  },
  {
    id: "ach-06",
    year: "2023",
    code: "ORG-01",
    icon: "medal",
    title: "Social Community Staff — HIMATIF UMS",
    subtitle:
      "Himpunan Mahasiswa Teknik Informatika Universitas Muhammadiyah Surakarta",
    date: "DEC 2023 — PRESENT • ORGANIZATION",
    accentBg: "bg-[#1C1C1A] text-[#F5F2EB] border-[#1C1C1A]",
  },
]

const EDUCATION_PANELS = [
  {
    fig: "PLATE 01",
    code: "UMS // S1",
    title: "Informatics UMS",
    sub: "Bachelor of Informatics Engineering",
    detail: "Focusing on Full-Stack Web, Mobile & Applied AI Engineering",
  },
  {
    fig: "PLATE 02",
    code: "ORG // 23",
    title: "HIMATIF UMS",
    sub: "Social Community Staff",
    detail: "Executing work programs & student developer community initiatives",
  },
  {
    fig: "PLATE 03",
    code: "R&D // AI",
    title: "Applied AI & Mobile",
    sub: "Synexa • Girantra • ASEAN",
    detail: "Building competition-grade Flutter, Next.js & Gemini LLM apps",
  },
]

/**
 * Komponen AboutEducation ("Education & Achievements")
 * Menggabungkan interaksi Alvalens (3-panel akordion & daftar pencapaian) dengan
 * estetika editorial arsitektural Oda Arkitekter (#EBE3D7, #F5F2EB, #1C1C1A, #A3724B):
 * - Transisi 3-panel akordion instan (250ms CSS flex transition) yang langsung kembali ke Gambar 1 saat kursor keluar
 * - Warna 100% selaras dengan tema kertas arsitektur & tembaga tanpa warna neon
 *
 * @returns {JSX.Element} Elemen seksi Education & Achievements
 */
export default function AboutEducation() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [activePlate, setActivePlate] = useState<number>(0)

  const initialAchievements = ACHIEVEMENTS_DATA.slice(0, 4)
  const extraAchievements = ACHIEVEMENTS_DATA.slice(4)
  const hasMoreAchievements = ACHIEVEMENTS_DATA.length > 4

  return (
    <section
      id="education"
      className="relative mx-auto w-full max-w-[1440px] px-4 py-16 md:px-8 md:py-24 lg:px-12"
    >
      {/* Garis Pembatas CAD Atas (Gaya Oda Arkitekter) */}
      <div className="mb-12 flex items-center justify-between border-t border-[#1C1C1A] pt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#A3724B]">(05)</span>
          <span>ACADEMIC &amp; HONORS RECORD</span>
        </div>
        <div className="hidden md:block text-[10px] text-[#736E65]/80">
          ON COMPUTER SCIENCE, ORGANIZATIONAL LEADERSHIP &amp; COMPETITIONS
        </div>
        <div>
          <span>SHEET A-205</span>
        </div>
      </div>

      {/* Heading Editorial Kombinasi Alvalens x Oda Arkitekter */}
      <motion.div
        className="mb-14 flex flex-col items-start justify-between gap-6 border-b border-[#1C1C1A]/15 pb-8 md:flex-row md:items-end"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <div className="mb-2 font-mono text-[11px] tracking-widest text-[#A3724B]">
            / / / / / / / ACADEMIC ARCHITECTURE
          </div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#1C1C1A] md:text-5xl">
            Education &amp;{" "}
            <span className="font-serif italic font-normal text-[#A3724B]">
              Achievements
            </span>
          </h2>
        </div>
        <p className="max-w-md font-mono text-xs leading-relaxed text-[#55534E] md:text-right">
          ACADEMIC FOUNDATION AT UNIVERSITAS MUHAMMADIYAH SURAKARTA (UMS) &amp;
          INTERNATIONAL / NATIONAL COMPETITION MILESTONES.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
        {/* Kolom Kiri (7 Kolom): Pendidikan UMS + 3-Panel Akordion Responsif Instan */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="border border-[#1C1C1A]/20 bg-[#F5F2EB] p-6 md:p-8">
            {/* Header Kartu Kampus */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#1C1C1A]/15 pb-4">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#A3724B]">
                  <span>SEP 2023 — PRESENT</span>
                  <span>•</span>
                  <span>SURAKARTA, ID</span>
                </div>
                <h3 className="mt-1 text-2xl font-medium tracking-tight text-[#1C1C1A] md:text-3xl">
                  Universitas Muhammadiyah Surakarta (UMS)
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-[#736E65]">
                  S1 Teknik Informatika | Bachelor of Informatics Engineering
                </p>
              </div>

              <span className="border border-[#1C1C1A] bg-[#1C1C1A] px-3 py-1 font-mono text-[10px] tracking-widest uppercase text-[#F5F2EB]">
                GPA 3.24 / 4.00
              </span>
            </div>

            {/* Galeri 3-Panel Akordion Interaktif — Transisi CSS Instan & Otomatis Kembali ke Gambar 1 */}
            <div
              onMouseLeave={() => setActivePlate(0)}
              className="my-6 flex h-[230px] items-stretch gap-3 md:h-[260px]"
            >
              {EDUCATION_PANELS.map((panel, idx) => {
                const isActive = activePlate === idx
                return (
                  <div
                    key={panel.fig}
                    onMouseEnter={() => setActivePlate(idx)}
                    onClick={() => setActivePlate(idx)}
                    className={`group relative cursor-pointer overflow-hidden border p-4 transition-[flex,background-color,border-color,color] duration-250 ease-out ${isActive
                      ? "flex-[2.8] border-[#1C1C1A] bg-[#1C1C1A] text-[#F5F2EB]"
                      : "flex-[1] border-[#1C1C1A]/20 bg-[#E6DEC8] text-[#1C1C1A] hover:border-[#A3724B]"
                      }`}
                  >
                    {/* Grid Blueprint Halus */}
                    <div
                      className="pointer-events-none absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: isActive
                          ? "linear-gradient(to right, rgba(245,242,235,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,242,235,0.14) 1px, transparent 1px)"
                          : "linear-gradient(to right, rgba(28,28,26,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(28,28,26,0.14) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Ornamen Sudut Tembaga */}
                    <span
                      className={`pointer-events-none absolute top-2 right-2 font-mono text-[10px] ${isActive ? "text-[#A3724B]" : "text-[#736E65]/60"
                        }`}
                    >
                      +
                    </span>

                    <div className="relative z-10 flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
                        <span className="font-semibold text-[#A3724B]">
                          {panel.fig}
                        </span>
                        <span
                          className={`hidden sm:inline ${isActive ? "text-[#F5F2EB]/60" : "text-[#736E65]"
                            }`}
                        >
                          {panel.code}
                        </span>
                      </div>

                      <div>
                        <div className="font-serif text-lg italic leading-snug md:text-2xl">
                          {panel.title}
                        </div>
                        <div
                          className={`mt-1 font-mono text-[10px] uppercase tracking-wider ${isActive ? "text-[#A3724B]" : "text-[#55534E]"
                            }`}
                        >
                          {panel.sub}
                        </div>
                        <p
                          className={`mt-2 text-xs leading-relaxed transition-opacity duration-200 ${isActive
                            ? "block opacity-90 text-[#F5F2EB]/85"
                            : "hidden opacity-0"
                            }`}
                        >
                          {panel.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Deskripsi Pendidikan Sesuai CV */}
            <div className="space-y-4 text-justify text-sm leading-relaxed text-[#4A4742] md:text-base">
              <p>
                Currently pursuing a Bachelor&apos;s degree in{" "}
                <span className="font-medium text-[#1C1C1A]">
                  Informatics Engineering at Universitas Muhammadiyah Surakarta
                  (UMS)
                </span>
                , focusing on building reliable{" "}
                <span className="font-medium text-[#1C1C1A]">
                  mobile and web software
                </span>{" "}
                as well as{" "}
                <span className="font-medium text-[#A3724B]">
                  applied AI products
                </span>
                .
              </p>
              <p>
                Actively involved in{" "}
                <span className="font-medium text-[#1C1C1A]">
                  Himpunan Mahasiswa Teknik Informatika (HIMATIF) UMS
                </span>{" "}
                as Social Community Staff (Dec 2023 – Present), executing
                organizational work programs and fostering community
                development. Beyond campus, completed intensive training in{" "}
                <span className="font-medium text-[#1C1C1A]">
                  Dicoding Bootcamp (Frontend &amp; Backend Development)
                </span>{" "}
                and represented in international &amp; national competitions
                including{" "}
                <span className="font-medium text-[#1C1C1A]">
                  MTE Malaysia, I2ASPO, IT Fest, ASEAN Challenge, and Samsung
                  Innovation Programs
                </span>
                .
              </p>
            </div>

            {/* Baris Spesifikasi Pendidikan (Gaya Oda Metrik) */}
            <div className="mt-6 grid grid-cols-1 gap-3 border-t border-[#1C1C1A]/15 pt-5 sm:grid-cols-3">
              <div className="border border-[#1C1C1A]/15 bg-[#EBE3D7] px-3.5 py-2.5">
                <div className="font-mono text-[9.5px] uppercase text-[#736E65]">
                  ACADEMIC STANDING
                </div>
                <div className="mt-0.5 font-mono text-xs font-semibold text-[#1C1C1A]">
                  Current GPA: 3.24 / 4.00
                </div>
              </div>
              <div className="border border-[#1C1C1A]/15 bg-[#EBE3D7] px-3.5 py-2.5">
                <div className="font-mono text-[9.5px] uppercase text-[#736E65]">
                  ORGANIZATION
                </div>
                <div className="mt-0.5 font-mono text-xs font-semibold text-[#1C1C1A]">
                  HIMATIF UMS Staff
                </div>
              </div>
              <div className="border border-[#1C1C1A]/15 bg-[#EBE3D7] px-3.5 py-2.5">
                <div className="font-mono text-[9.5px] uppercase text-[#736E65]">
                  PREVIOUS DIPLOMA
                </div>
                <div className="mt-0.5 font-mono text-xs font-semibold text-[#1C1C1A]">
                  SMAN 1 Surakarta
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan (5 Kolom): Daftar Achievements & Certifications dengan Warna Arsitektur */}
        <motion.div
          className="flex flex-col justify-start lg:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mb-5 flex items-end justify-between border-b border-[#1C1C1A]/15 pb-3">
            <div>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#A3724B]">
                INDEX // CREDENTIALS
              </span>
              <h3 className="text-xl font-medium text-[#1C1C1A] md:text-2xl">
                Achievements &amp; Certifications
              </h3>
            </div>
            <span className="font-mono text-[10px] text-[#736E65]">
              01 — 0{ACHIEVEMENTS_DATA.length}
            </span>
          </div>

          <div className="relative">
            {/* 4 Pencapaian Pertama (Selalu Tampil) */}
            <div className="space-y-3.5">
              {initialAchievements.map((achievement, index) => {
                const showYear =
                  index === 0 ||
                  initialAchievements[index - 1]?.year !== achievement.year
                return (
                  <motion.div
                    key={achievement.id}
                    className="group"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    {showYear && (
                      <div className="mt-2 mb-3 flex items-center gap-3">
                        <span className="border border-[#1C1C1A] bg-[#1C1C1A] px-3 py-0.5 font-mono text-[10.5px] font-semibold tracking-wider text-[#F5F2EB]">
                          {achievement.year}
                        </span>
                        <div className="h-px flex-1 bg-[#1C1C1A]/20" />
                        <span className="font-mono text-[9.5px] tracking-widest text-[#A3724B]">
                          / / / /
                        </span>
                      </div>
                    )}

                    <div className="border border-[#1C1C1A]/20 bg-[#F5F2EB] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A3724B] hover:bg-[#FAF8F5]">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center border ${achievement.accentBg} transition-transform duration-300 group-hover:scale-105`}
                        >
                          <AchievementBadgeIcon type={achievement.icon} />
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="text-sm font-medium leading-snug text-[#1C1C1A] md:text-base">
                              {achievement.title}
                            </h4>
                            <span className="shrink-0 font-mono text-[9.5px] font-semibold text-[#A3724B]">
                              {achievement.code}
                            </span>
                          </div>
                          <p className="mt-1 text-xs leading-relaxed text-[#4A4742]">
                            {achievement.subtitle}
                          </p>
                          <div className="mt-2 font-mono text-[10px] tracking-wider uppercase text-[#736E65]">
                            {achievement.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Pencapaian Tambahan (Muncul & Melipat Secara Bertahap Satu per Satu) */}
            <AnimatePresence initial={false}>
              {isExpanded &&
                extraAchievements.map((achievement, extraIdx) => {
                  const actualIndex = initialAchievements.length + extraIdx
                  const reverseIdx = extraAchievements.length - 1 - extraIdx
                  const showYear =
                    ACHIEVEMENTS_DATA[actualIndex - 1]?.year !==
                    achievement.year

                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, height: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                        transition: {
                          height: {
                            duration: 0.4,
                            delay: extraIdx * 0.18,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          opacity: {
                            duration: 0.35,
                            delay: extraIdx * 0.18 + 0.06,
                          },
                          y: {
                            duration: 0.4,
                            delay: extraIdx * 0.18,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -16,
                        transition: {
                          opacity: {
                            duration: 0.25,
                            delay: reverseIdx * 0.16,
                          },
                          y: {
                            duration: 0.3,
                            delay: reverseIdx * 0.16,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          height: {
                            duration: 0.35,
                            delay: reverseIdx * 0.16 + 0.05,
                            ease: [0.4, 0, 0.2, 1],
                          },
                        },
                      }}
                      className="group overflow-hidden"
                    >
                      <div className="pt-3.5">
                        {showYear && (
                          <div className="mt-2 mb-3 flex items-center gap-3">
                            <span className="border border-[#1C1C1A] bg-[#1C1C1A] px-3 py-0.5 font-mono text-[10.5px] font-semibold tracking-wider text-[#F5F2EB]">
                              {achievement.year}
                            </span>
                            <div className="h-px flex-1 bg-[#1C1C1A]/20" />
                            <span className="font-mono text-[9.5px] tracking-widest text-[#A3724B]">
                              / / / /
                            </span>
                          </div>
                        )}

                        <div className="border border-[#1C1C1A]/20 bg-[#F5F2EB] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A3724B] hover:bg-[#FAF8F5]">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center border ${achievement.accentBg} transition-transform duration-300 group-hover:scale-105`}
                            >
                              <AchievementBadgeIcon type={achievement.icon} />
                            </div>

                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2">
                                <h4 className="text-sm font-medium leading-snug text-[#1C1C1A] md:text-base">
                                  {achievement.title}
                                </h4>
                                <span className="shrink-0 font-mono text-[9.5px] font-semibold text-[#A3724B]">
                                  {achievement.code}
                                </span>
                              </div>
                              <p className="mt-1 text-xs leading-relaxed text-[#4A4742]">
                                {achievement.subtitle}
                              </p>
                              <div className="mt-2 font-mono text-[10px] tracking-wider uppercase text-[#736E65]">
                                {achievement.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </AnimatePresence>

            {hasMoreAchievements && (
              <motion.div layout className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="group flex cursor-pointer items-center gap-2.5 border border-[#1C1C1A] bg-[#1C1C1A] px-6 py-2.5 font-mono text-xs uppercase tracking-wider text-[#F5F2EB] transition-all duration-300 hover:border-[#8C5E38] hover:bg-[#8C5E38]"
                >
                  <span>
                    {isExpanded
                      ? "Show Less"
                      : `Show ${ACHIEVEMENTS_DATA.length - 4} More`}
                  </span>
                  <svg
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
