"use client"

import React, { useState, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion"

export interface AboutExperienceItem {
  id: string
  code: string
  company: string
  position: string
  type: string
  startDate: string
  endDate: string
  location: string
  description: string
  skills: string[]
}

/**
 * Rekam jejak kerja, riset, dan proyek nyata Nuril Anwar sesuai CV terbaru (CV_Nuril baru.pdf):
 * 1. PDAM Tirta Makmur Surakarta — Fullstack Web Developer Intern (SIPASI PDAM)
 * 2. NusaTerminal — AI-Powered Bloomberg Terminal for Retail Investors (Hackathon X Digdaya)
 * 3. Decentralized Healthcare Platform (Diabetes Detection) — Undergraduate Thesis (Skripsi)
 * 4. Synexa Apps — Stroke Management System (MTE Malaysia & UGM Competition)
 * 5. SEGER — Gamified Exergame Application for Children (Samsung Innovation)
 * 6. Himpunan Mahasiswa Teknik Informatika (HIMATIF) UMS — Expert Staff, Social Community
 */
export const EXPERIENCE_DATA: AboutExperienceItem[] = [
  {
    id: "exp-01",
    code: "LOG // 01",
    company: "PDAM Tirta Makmur Surakarta — SIPASI PDAM",
    position: "Fullstack Web Developer Intern",
    type: "Enterprise Internship",
    startDate: "Apr 2026",
    endDate: "May 2026",
    location: "Surakarta, ID",
    description:
      "Developed a paperless web-based document & correspondence management system (SIPAS / SIPASI) using Next.js 16, React 19, PostgreSQL, and Prisma ORM. Designed multi-role dashboards (Admin, Dispatcher, Staff), intelligent document disposition workflows, dynamic QR Code digital signatures embedded directly into PDFs, and comprehensive security audit logging.",
    skills: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "QR Digital Signature",
    ],
  },
  {
    id: "exp-02",
    code: "LOG // 02",
    company: "NusaTerminal — AI Investor Terminal",
    position: "Fullstack & AI Engineer",
    type: "Hackathon X Digdaya",
    startDate: "Feb 2026",
    endDate: "Sep 2026",
    location: "Indonesia",
    description:
      "Engineered an AI-driven investment analysis platform democratizing institutional-grade market data for Indonesian retail investors. Built a FastAPI backend serving real-time yfinance market feeds, architected a ChromaDB + Gemini 1.5 Flash RAG pipeline for context-aware financial Q&A, and integrated a fine-tuned IndoBERT model for financial news sentiment classification.",
    skills: [
      "Python",
      "FastAPI",
      "Gemini 1.5 Flash",
      "ChromaDB (RAG)",
      "IndoBERT",
      "yfinance",
      "Uvicorn",
    ],
  },
  {
    id: "exp-03",
    code: "LOG // 03",
    company: "Decentralized Healthcare Platform (Diabetes Detection)",
    position: "AI Engineer & Full-Stack Developer",
    type: "Undergraduate Thesis (Skripsi)",
    startDate: "2025",
    endDate: "Present",
    location: "UMS Surakarta",
    description:
      "Architected an integrated healthcare platform utilizing Federated Learning (PyTorch, FedAvg, Opacus Differential Privacy) to collaboratively train diabetes detection models across multiple hospitals without exposing raw patient records. Developed Ethereum Smart Contracts (Solidity, Web3.py) for cryptographic KTP identity verification and integrated Explainable AI (SHAP/Captum) in a Next.js dashboard.",
    skills: [
      "Python",
      "FastAPI",
      "PyTorch (FedAvg)",
      "Opacus DP",
      "Solidity",
      "Web3.py",
      "Next.js",
      "Explainable AI (SHAP)",
    ],
  },
  {
    id: "exp-04",
    code: "LOG // 04",
    company: "Synexa Apps — Stroke Management System",
    position: "Mobile & Backend Developer",
    type: "MTE Malaysia & UGM Competition",
    startDate: "2024",
    endDate: "2025",
    location: "Surakarta, ID",
    description:
      "Built a cross-platform mobile healthcare solution in Flutter & Dart providing stroke patients and caregivers with an accessible rehabilitation tracking interface. Engineered a scalable NestJS & TypeScript backend API for low-latency data synchronization, secure user management, and real-time caregiver telemetry.",
    skills: [
      "Flutter",
      "Dart",
      "NestJS",
      "TypeScript",
      "Node.js",
      "Clean Architecture",
    ],
  },
  {
    id: "exp-05",
    code: "LOG // 05",
    company: "SEGER — Gamified Exergame for Children",
    position: "Fullstack & AI Engineer",
    type: "Samsung Innovation",
    startDate: "2024",
    endDate: "2025",
    location: "Surakarta, ID",
    description:
      "Developed an interactive cross-platform mobile exergame in Flutter designed to encourage physical activity among children through real-time movement detection. Integrated native Android and iOS Camera APIs to track physical exercises on-device, paired with custom gamification counters and automated widget testing.",
    skills: [
      "Flutter",
      "Dart",
      "Android/iOS Camera APIs",
      "Motion Detection",
      "Widget Testing",
    ],
  },
  {
    id: "exp-06",
    code: "LOG // 06",
    company: "Informatics Student Association (HIMATIF) UMS",
    position: "Expert Staff, Social Community",
    type: "Organizational Experience",
    startDate: "Dec 2023",
    endDate: "Dec 2025",
    location: "Surakarta, ID",
    description:
      "Planned and executed internal & external student development programs at Universitas Muhammadiyah Surakarta. Coordinated media partnerships across internal and external campus organizations and collaborated with regional student associations.",
    skills: [
      "Leadership",
      "Media Partnership",
      "Community Programs",
      "Team Collaboration",
    ],
  },
]

interface TimelineItemCardProps {
  exp: AboutExperienceItem
  index: number
}

/**
 * Komponen item tunggal pada timeline pengalaman (digunakan untuk item utama maupun item tambahan)
 */
function TimelineItemCard({ exp, index }: TimelineItemCardProps) {
  const isEven = index % 2 === 1

  return (
    <div className="relative">
      {/* Titik Simpul (Node) di Garis Tengah */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
          delay: 0.08,
        }}
        className="absolute top-5 left-4 z-30 h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-[#EBE3D7] bg-[#1C1C1A] ring-2 ring-[#A3724B] md:top-4 md:left-1/2"
      />

      {/* Lencana Waktu & Lokasi (Start | End | Location) */}
      <div
        className={`mb-4 flex pl-10 md:pl-0 ${
          isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12"
        }`}
      >
        <div className="inline-flex items-center gap-5 border border-[#1C1C1A] bg-[#1C1C1A] px-6 py-2.5 text-[#F5F2EB] shadow-xs">
          <div className="text-center font-mono">
            <div className="text-xs font-bold">{exp.startDate}</div>
            <div className="text-[9px] tracking-wider uppercase text-[#F5F2EB]/60">
              Start
            </div>
          </div>
          <div className="h-6 w-px bg-[#F5F2EB]/20" />
          <div className="text-center font-mono">
            <div className="text-xs font-bold text-[#D49B6A]">{exp.endDate}</div>
            <div className="text-[9px] tracking-wider uppercase text-[#F5F2EB]/60">
              End
            </div>
          </div>
          <div className="h-6 w-px bg-[#F5F2EB]/20" />
          <div className="text-center font-mono">
            <div className="text-xs font-medium">{exp.location}</div>
            <div className="text-[9px] tracking-wider uppercase text-[#F5F2EB]/60">
              Location
            </div>
          </div>
        </div>
      </div>

      {/* Kartu Detail Pengalaman — Kertas #F5F2EB dengan Garis CAD */}
      <div
        className={`relative group pl-10 md:w-1/2 ${
          isEven
            ? "md:ml-auto md:pl-12"
            : "md:mr-auto md:pl-0 md:pr-12"
        }`}
      >
        <div className="border border-[#1C1C1A]/20 bg-[#F5F2EB] p-6 shadow-2xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A3724B] hover:shadow-md">
          <div className="mb-3 flex items-center justify-between border-b border-[#1C1C1A]/10 pb-2.5 font-mono text-[10px] tracking-[0.16em] uppercase text-[#736E65]">
            <span className="font-semibold text-[#A3724B]">{exp.code}</span>
            <span>{exp.type}</span>
          </div>

          <div className="mb-3">
            <h3 className="text-xl font-medium text-[#1C1C1A]">{exp.company}</h3>
            <h4 className="mt-1 font-mono text-xs font-semibold tracking-wide text-[#8C5E38] uppercase">
              {exp.position}
            </h4>
          </div>

          <p className="mb-5 text-justify text-sm leading-relaxed text-[#4A4742] md:text-[15px]">
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#1C1C1A]/20 bg-[#EBE3D7] px-3 py-1 font-mono text-[11px] font-medium text-[#1C1C1A] transition-colors hover:border-[#A3724B] hover:bg-[#1C1C1A] hover:text-[#F5F2EB]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Komponen AboutExperience ("Professional & Project Experience")
 * Menggabungkan timeline vertikal zig-zag Alvalens dengan palet kertas & garis CAD Oda Arkitekter:
 * - Garis sumbu vertikal menggambar turun mengikuti posisi scroll pengguna (useScroll + useSpring)
 *   dan terus memanjang solid sampai menyentuh tombol "View All / Show Less" tanpa menghilang
 * - Animasi bertahap (staggered) satu per satu saat "View All" ditekan, dan melipat bertahap saat "Show Less" ditekan
 *
 * @returns {JSX.Element} Elemen seksi Timeline Experience halaman About
 */
export default function AboutExperience() {
  const [showAll, setShowAll] = useState(false)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Melacak posisi scroll terhadap kontainer timeline (dari kartu pertama hingga tombol di bawah)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 80%"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  })

  const initialExperiences = EXPERIENCE_DATA.slice(0, 3)
  const extraExperiences = EXPERIENCE_DATA.slice(3)

  return (
    <section
      id="experience-timeline"
      className="relative mx-auto w-full max-w-[1440px] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24 lg:px-12"
    >
      {/* Garis Pembatas CAD Atas (Gaya Oda Arkitekter) */}
      <div className="mb-12 flex items-center justify-between border-t border-[#1C1C1A] pt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#A3724B]">(04)</span>
          <span>CHRONOLOGICAL ENGINEERING LOG</span>
        </div>
        <div className="hidden md:block text-[10px] text-[#736E65]/80">
          ON COMPETITIONS, APPLIED AI PRODUCTS &amp; ORGANIZATION
        </div>
        <div>
          <span>SHEET A-204</span>
        </div>
      </div>

      {/* Judul Seksi Kombinasi Oda x Alvalens */}
      <div className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-[#1C1C1A]/15 pb-8 md:flex-row md:items-end">
        <div>
          <div className="mb-2 font-mono text-[11px] tracking-widest text-[#A3724B]">
            / / / / / / / PROJECT &amp; CAREER ARCHIVE
          </div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#1C1C1A] md:text-5xl">
            Professional &amp;{" "}
            <span className="font-serif italic font-normal text-[#A3724B]">
              Project Experience
            </span>
          </h2>
        </div>
        <p className="max-w-md font-mono text-xs leading-relaxed text-[#55534E] md:text-right">
          SELECTED MILESTONES ACROSS HEALTHCARE AI, AGRI-TECH MARKETPLACES,
          HIMATIF UMS &amp; DICODING BOOTCAMP.
        </p>
      </div>

      {/* Kontainer Timeline Vertikal (Garis Mengikuti Posisi Scroll Sampai Menyentuh Tombol) */}
      <div ref={timelineRef} className="relative mx-auto max-w-5xl">
        {/* Garis Jalur Dasar Tipis (Dari Node Pertama Sampai Tepat Menyentuh Tombol) */}
        <div className="pointer-events-none absolute top-5 bottom-5 left-4 z-10 w-[2px] bg-[#1C1C1A]/15 md:left-1/2 md:-translate-x-1/2" />

        {/* Garis Aktif Solid yang Menggambar Turun Mengikuti Posisi Scroll Tanpa Menghilang */}
        <motion.div
          style={{ scaleY }}
          className="pointer-events-none absolute top-5 bottom-5 left-4 z-10 w-[2.5px] origin-top bg-gradient-to-b from-[#1C1C1A] via-[#A3724B] to-[#8C5E38] md:left-1/2 md:-translate-x-1/2"
        />

        {/* Area Daftar Kartu Pengalaman */}
        <div className="relative z-20">
          {/* 3 Item Pertama (Selalu Tampil) */}
          <div className="space-y-12 md:space-y-16">
            {initialExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <TimelineItemCard exp={exp} index={index} />
              </motion.div>
            ))}
          </div>

          {/* Item Tambahan (Muncul & Melipat Secara Bertahap Satu per Satu Saat View All / Show Less Ditekan) */}
          <AnimatePresence initial={false}>
            {showAll &&
              extraExperiences.map((exp, extraIdx) => {
                const actualIndex = initialExperiences.length + extraIdx
                const reverseIdx = extraExperiences.length - 1 - extraIdx

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, height: 0, y: 28 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                      transition: {
                        height: {
                          duration: 0.45,
                          delay: extraIdx * 0.22,
                          ease: [0.16, 1, 0.3, 1],
                        },
                        opacity: {
                          duration: 0.4,
                          delay: extraIdx * 0.22 + 0.08,
                        },
                        y: {
                          duration: 0.45,
                          delay: extraIdx * 0.22,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: -20,
                      transition: {
                        opacity: {
                          duration: 0.28,
                          delay: reverseIdx * 0.2,
                        },
                        y: {
                          duration: 0.35,
                          delay: reverseIdx * 0.2,
                          ease: [0.4, 0, 0.2, 1],
                        },
                        height: {
                          duration: 0.4,
                          delay: reverseIdx * 0.2 + 0.06,
                          ease: [0.4, 0, 0.2, 1],
                        },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-12 md:pt-16">
                      <TimelineItemCard exp={exp} index={actualIndex} />
                    </div>
                  </motion.div>
                )
              })}
          </AnimatePresence>
        </div>

        {/* Tombol View All / Show Less — Tepat di Ujung Bawah Garis */}
        {EXPERIENCE_DATA.length > 3 && (
          <div className="relative z-30 mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="flex cursor-pointer items-center gap-2.5 border border-[#1C1C1A] bg-[#1C1C1A] px-7 py-3 font-mono text-xs uppercase tracking-wider text-[#F5F2EB] shadow-sm transition-all duration-300 hover:border-[#8C5E38] hover:bg-[#8C5E38]"
            >
              <span>
                {showAll
                  ? "Show Less Experience"
                  : `View All ${EXPERIENCE_DATA.length} Experiences`}
              </span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
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
          </div>
        )}
      </div>
    </section>
  )
}
