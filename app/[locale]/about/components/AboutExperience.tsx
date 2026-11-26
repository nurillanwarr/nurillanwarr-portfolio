"use client"

import React, { useState, useRef } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
} from "framer-motion"
import { useLocale } from "next-intl"

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

const LOCALIZED_EXPERIENCES: Record<
  string,
  {
    position: { en: string; id: string }
    type: { en: string; id: string }
    description: { en: string; id: string }
  }
> = {
  "exp-01": {
    position: {
      en: "Fullstack Web Developer Intern",
      id: "Pengembang Web Fullstack Magang",
    },
    type: { en: "Enterprise Internship", id: "Magang Perusahaan" },
    description: {
      en: "Developed a paperless web-based document & correspondence management system (SIPAS / SIPASI) using Next.js 16, React 19, PostgreSQL, and Prisma ORM. Designed multi-role dashboards (Admin, Dispatcher, Staff), intelligent document disposition workflows, dynamic QR Code digital signatures embedded directly into PDFs, and comprehensive security audit logging.",
      id: "Mengembangkan sistem informasi persuratan dan disposisi dinas digital bebas kertas (SIPASI) berbasis Next.js 16, React 19, PostgreSQL, dan Prisma ORM. Merancang dashboard multi-peran (Admin, Pengagendakan, Staf), alur kerja disposisi dokumen cerdas, pembubuhan tanda tangan digital QR Code otomatis pada PDF, serta sistem rekam jejak audit keamanan forensik permanen.",
    },
  },
  "exp-02": {
    position: {
      en: "Fullstack & AI Engineer",
      id: "Pengembang Fullstack & Rekayasa AI",
    },
    type: { en: "Hackathon X Digdaya", id: "Kompetisi Hackathon X Digdaya" },
    description: {
      en: "Engineered an AI-driven investment analysis platform democratizing institutional-grade market data for Indonesian retail investors. Built a FastAPI backend serving real-time yfinance market feeds, architected a ChromaDB + Gemini 1.5 Flash RAG pipeline for context-aware financial Q&A, and integrated a fine-tuned IndoBERT model for financial news sentiment classification.",
      id: "Merekayasa platform analisis investasi bertenaga kecerdasan buatan untuk mendemokratisasi data pasar modal berstandar institusi bagi investor ritel Indonesia. Membangun backend FastAPI untuk streaming data pasar real-time yfinance, merancang pipeline RAG ChromaDB + Gemini 1.5 Flash untuk konsultasi portofolio kontekstual, dan mengintegrasikan model IndoBERT untuk klasifikasi sentimen berita keuangan.",
    },
  },
  "exp-03": {
    position: {
      en: "Lead Undergraduate Researcher",
      id: "Peneliti Utama Skripsi S1",
    },
    type: { en: "Undergraduate Thesis", id: "Riset Skripsi Tugas Akhir" },
    description: {
      en: "Researched and built a privacy-preserving collaborative healthcare platform for early diabetes detection across distributed hospital nodes using PyTorch, FedAvg, and Opacus Differential Privacy. Integrated Ethereum Smart Contracts (Solidity, Web3.py) to cryptographically verify model aggregation rounds, and developed interactive Explainable AI (SHAP & Captum) dashboards in Next.js.",
      id: "Meneliti dan membangun platform diagnosis kesehatan kolaboratif berbasis privasi untuk deteksi dini diabetes di berbagai rumah sakit menggunakan PyTorch, FedAvg, dan Opacus Differential Privacy. Mengintegrasikan Smart Contract Ethereum (Solidity, Web3.py) guna memverifikasi konsensus agregasi bobot model secara on-chain, serta merancang dashboard Explainable AI (SHAP & Captum) interaktif di Next.js.",
    },
  },
  "exp-04": {
    position: {
      en: "Mobile & Backend Developer",
      id: "Pengembang Mobile & Backend",
    },
    type: { en: "MTE Malaysia & I2ASPO", id: "Pameran & Kompetisi Internasional" },
    description: {
      en: "Co-developed an integrated mobile telerehabilitation and monitoring ecosystem for post-stroke patients. Built a cross-platform Flutter application featuring guided motor exercise routines, motion tracking sensors, and direct patient-doctor teleconsultation channels, backed by a high-throughput NestJS microservices backend with Supabase Realtime synchronization.",
      id: "Mengembangkan ekosistem aplikasi telerehabilitasi dan pemantauan terpadu untuk pasien pasca-stroke. Membangun aplikasi mobile multiplatform Flutter dengan panduan latihan motorik terstruktur, sensor pelacakan gerak, dan telekonsultasi dokter secara langsung, didukung backend microservices NestJS berkinerja tinggi serta sinkronisasi Supabase Realtime.",
    },
  },
  "exp-05": {
    position: {
      en: "Mobile & Computer Vision Engineer",
      id: "Pengembang Mobile & Computer Vision",
    },
    type: { en: "Samsung Innovation Campus", id: "Program Inovasi Samsung" },
    description: {
      en: "Architected a gamified exergame mobile application encouraging daily physical activity and motor health for children through interactive motion-sensing games. Integrated on-device camera pose detection (MediaPipe Pose), level-progression mechanics, streak rewards, and cloud score telemetry.",
      id: "Merancang aplikasi mobile exergame tergamifikasi untuk mendorong aktivitas fisik harian dan kesehatan motorik anak melalui permainan interaktif berbasis deteksi gerak. Mengintegrasikan pose detection kamera pada perangkat (MediaPipe Pose), mekanika progres level, reward konsistensi bermain, dan telemetri skor cloud.",
    },
  },
  "exp-06": {
    position: {
      en: "Social Community Staff — HIMATIF UMS",
      id: "Staf Ahli Pengabdian Masyarakat — HIMATIF UMS",
    },
    type: { en: "Student Organization", id: "Organisasi Mahasiswa" },
    description: {
      en: "Served as an expert staff member in the Social Community division of the Informatics Engineering Student Association (HIMATIF) UMS. Spearheaded social outreach initiatives, tech literacy workshops for rural communities, educational donation campaigns, and inter-organizational media partnerships.",
      id: "Menjabat sebagai staf ahli divisi Pengabdian Masyarakat di Himpunan Mahasiswa Teknik Informatika (HIMATIF) UMS. Memimpin inisiatif bakti sosial, workshop literasi teknologi untuk masyarakat desa, penggalangan donasi pendidikan, serta kemitraan media lintas organisasi kampus.",
    },
  },
}

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
      "ChromaDB",
      "IndoBERT",
      "Next.js",
      "Docker",
    ],
  },
  {
    id: "exp-03",
    code: "LOG // 03",
    company: "Decentralized Healthcare — FedHealth Web3",
    position: "Lead Undergraduate Researcher",
    type: "Undergraduate Thesis (Skripsi)",
    startDate: "Oct 2025",
    endDate: "Mar 2026",
    location: "Surakarta, ID",
    description:
      "Researched and built a privacy-preserving collaborative healthcare platform for early diabetes detection across distributed hospital nodes using PyTorch, FedAvg, and Opacus Differential Privacy. Integrated Ethereum Smart Contracts (Solidity, Web3.py) to cryptographically verify model aggregation rounds, and developed interactive Explainable AI (SHAP & Captum) dashboards in Next.js.",
    skills: [
      "PyTorch",
      "Federated Learning",
      "Differential Privacy",
      "Solidity",
      "Web3.py",
      "FastAPI",
      "Next.js",
      "SHAP",
    ],
  },
  {
    id: "exp-04",
    code: "LOG // 04",
    company: "Synexa — Smart Stroke Healthcare System",
    position: "Mobile & Backend Developer",
    type: "MTE Malaysia & I2ASPO",
    startDate: "Jul 2024",
    endDate: "Nov 2024",
    location: "Yogyakarta, ID",
    description:
      "Co-developed an integrated mobile telerehabilitation and monitoring ecosystem for post-stroke patients. Built a cross-platform Flutter application featuring guided motor exercise routines, motion tracking sensors, and direct patient-doctor teleconsultation channels, backed by a high-throughput NestJS microservices backend with Supabase Realtime synchronization.",
    skills: [
      "Flutter",
      "Dart",
      "NestJS",
      "Supabase Realtime",
      "PostgreSQL",
      "Telehealth API",
    ],
  },
  {
    id: "exp-05",
    code: "LOG // 05",
    company: "SEGER — Gamified Exergame for Children",
    position: "Mobile & Computer Vision Engineer",
    type: "Samsung Innovation Campus",
    startDate: "Jan 2024",
    endDate: "Jun 2024",
    location: "Surakarta, ID",
    description:
      "Architected a gamified exergame mobile application encouraging daily physical activity and motor health for children through interactive motion-sensing games. Integrated on-device camera pose detection (MediaPipe Pose), level-progression mechanics, streak rewards, and cloud score telemetry.",
    skills: [
      "Flutter",
      "MediaPipe Pose",
      "Firebase FCM",
      "Cloud Firestore",
      "Gamification Engine",
    ],
  },
  {
    id: "exp-06",
    code: "LOG // 06",
    company: "HIMATIF UMS — Department of Informatics",
    position: "Social Community Staff",
    type: "Student Organization",
    startDate: "Dec 2023",
    endDate: "Present",
    location: "Surakarta, ID",
    description:
      "Served as an active social community staff member executing organizational work programs, community development outreach, and social dedication initiatives representing the student body of Informatics Engineering at Muhammadiyah University of Surakarta.",
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
  isId: boolean
}

function TimelineItemCard({ exp, index, isId }: TimelineItemCardProps) {
  const isEven = index % 2 === 1
  const loc = LOCALIZED_EXPERIENCES[exp.id]

  const position = isId && loc ? loc.position.id : exp.position
  const type = isId && loc ? loc.type.id : exp.type
  const description = isId && loc ? loc.description.id : exp.description

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
              {isId ? "Mulai" : "Start"}
            </div>
          </div>
          <div className="h-6 w-px bg-[#F5F2EB]/20" />
          <div className="text-center font-mono">
            <div className="text-xs font-bold text-[#D49B6A]">{exp.endDate}</div>
            <div className="text-[9px] tracking-wider uppercase text-[#F5F2EB]/60">
              {isId ? "Selesai" : "End"}
            </div>
          </div>
          <div className="h-6 w-px bg-[#F5F2EB]/20" />
          <div className="text-center font-mono">
            <div className="text-xs font-medium">{exp.location}</div>
            <div className="text-[9px] tracking-wider uppercase text-[#F5F2EB]/60">
              {isId ? "Lokasi" : "Location"}
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
            <span>{type}</span>
          </div>

          <div className="mb-3">
            <h3 className="text-xl font-medium text-[#1C1C1A]">{exp.company}</h3>
            <h4 className="mt-1 font-mono text-xs font-semibold tracking-wide text-[#8C5E38] uppercase">
              {position}
            </h4>
          </div>

          <p className="mb-5 text-justify text-sm leading-relaxed text-[#4A4742] md:text-[15px]">
            {description}
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

interface AboutExperienceProps {
  locale?: string
}

export default function AboutExperience({
  locale: localeProp,
}: AboutExperienceProps) {
  const hookLocale = useLocale()
  const locale = localeProp || hookLocale || "en"
  const isId = locale === "id"
  const [isExpanded, setIsExpanded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const initialExperiences = EXPERIENCE_DATA.slice(0, 3)
  const extraExperiences = EXPERIENCE_DATA.slice(3)

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative mx-auto w-full max-w-[1440px] px-4 pt-10 pb-16 md:px-8 md:pt-12 md:pb-24 lg:px-12"
    >
      {/* Garis Pembatas CAD Atas */}
      <div className="mb-12 flex items-center justify-between border-t border-[#1C1C1A] pt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#A3724B]">(04)</span>
          <span>{isId ? "RIWAYAT PROFESIONAL" : "PROFESSIONAL LOG"}</span>
        </div>
        <div className="hidden md:block text-[10px] text-[#736E65]/80">
          {isId ? "REKAM JEJAK PROYEK, RISET & INOVASI" : "ON INDUSTRY INTERNSHIP, THESIS & INVENTIONS"}
        </div>
        <div>
          <span>SHEET A-204</span>
        </div>
      </div>

      {/* Header Judul Seksi */}
      <motion.div
        className="mb-16 flex flex-col items-start justify-between gap-6 border-b border-[#1C1C1A]/15 pb-8 md:flex-row md:items-end"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <div className="mb-2 font-mono text-[11px] tracking-widest text-[#A3724B]">
            / / / / / / / {isId ? "KRONOLOGI REKAYASA" : "ENGINEERING CHRONOLOGY"}
          </div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#1C1C1A] md:text-5xl">
            {isId ? "Pengalaman & " : "Experience & "}
            <span className="font-serif italic font-normal text-[#A3724B]">
              {isId ? "Rekam Jejak" : "Projects"}
            </span>
          </h2>
        </div>
        <p className="max-w-md font-mono text-xs leading-relaxed text-[#55534E] md:text-right">
          {isId
            ? "PERJALANAN MAGANG ENTERPRISE, PROYEK INOVASI NASIONAL/INTERNASIONAL, SERTA RISET AKADEMIK."
            : "JOURNEY ACROSS ENTERPRISE INTERNSHIPS, NATIONAL/INTERNATIONAL COMPETITIONS, AND ACADEMIC RESEARCH."}
        </p>
      </motion.div>

      {/* Timeline Zig-Zag Vertikal Interaktif */}
      <div className="relative">
        {/* Garis Vertikal Latar Belakang */}
        <div className="absolute top-0 bottom-0 left-4 w-[2px] -translate-x-1/2 bg-[#1C1C1A]/15 md:left-1/2" />

        {/* Garis Vertikal Progres Aktif */}
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 bottom-0 left-4 w-[2px] -translate-x-1/2 origin-top bg-[#A3724B] md:left-1/2"
        />

        {/* 3 Pengalaman Pertama (Selalu Tampil) */}
        <div className="space-y-12 md:space-y-16">
          {initialExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <TimelineItemCard exp={exp} index={index} isId={isId} />
            </motion.div>
          ))}
        </div>

        {/* Pengalaman Tambahan (Dapat Di-expand / Collapse Satu per Satu) */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
              {extraExperiences.map((exp, extraIdx) => {
                const actualIndex = 3 + extraIdx
                const reverseIdx = extraExperiences.length - 1 - extraIdx

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, height: 0, y: 24 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      y: 0,
                      transition: {
                        opacity: { duration: 0.45, delay: extraIdx * 0.14 },
                        height: {
                          duration: 0.45,
                          delay: extraIdx * 0.14,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        y: {
                          duration: 0.45,
                          delay: extraIdx * 0.14,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      },
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                      y: -20,
                      transition: {
                        opacity: { duration: 0.25, delay: reverseIdx * 0.16 },
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
                    className="overflow-hidden"
                  >
                    <TimelineItemCard exp={exp} index={actualIndex} isId={isId} />
                  </motion.div>
                )
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Tombol Interaktif Expand / Collapse (Show More / Less) */}
        {extraExperiences.length > 0 && (
          <motion.div
            className="mt-16 flex justify-center pl-10 md:pl-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative inline-flex cursor-pointer items-center gap-3 border border-[#1C1C1A] bg-[#1C1C1A] px-7 py-3 font-mono text-xs font-medium uppercase tracking-wider text-[#FAF8F5] shadow-sm transition-all duration-300 hover:border-[#8C5E38] hover:bg-[#8C5E38] hover:shadow-md active:scale-98"
            >
              <span>
                {isExpanded
                  ? `- ${isId ? "TUTUP" : "SHOW LESS"}`
                  : `+ ${isId ? "TAMPILKAN LAINNYA" : "SHOW MORE"} (${extraExperiences.length})`}
              </span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-y-0.5">
                {isExpanded ? "↑" : "↓"}
              </span>
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
