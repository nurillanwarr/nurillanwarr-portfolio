"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocale } from "next-intl"
import { SKILL_DOMAIN_CARDS, type SkillDomainCardData } from "./constants"

function CrownIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  )
}

const SMOOTH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

const LOCALIZED_SKILLS: Record<
  string,
  {
    title: { en: string; id: string }
    level: { en: string; id: string }
    description: { en: string; id: string }
  }
> = {
  web: {
    title: {
      en: "Front-End & Web Development",
      id: "Pengembangan Front-End & Web",
    },
    level: { en: "Expert", id: "Mahir" },
    description: {
      en: "Crafting intuitive, responsive, and high-performance web interfaces using modern React and Next.js architectures.",
      id: "Merancang antarmuka web yang intuitif, responsif, dan berkinerja tinggi menggunakan arsitektur modern React dan Next.js.",
    },
  },
  api: {
    title: {
      en: "Back-End & API Architecture",
      id: "Arsitektur Back-End & API",
    },
    level: { en: "Expert", id: "Mahir" },
    description: {
      en: "Developing robust, secure, and scalable server-side RESTful APIs, real-time cloud backends, and relational database schemas.",
      id: "Membangun RESTful API sisi server yang tangguh, aman, dan terukur, backend cloud real-time, serta skema basis data relasional.",
    },
  },
  mobile: {
    title: {
      en: "Mobile App Development",
      id: "Pengembangan Aplikasi Mobile",
    },
    level: { en: "Expert", id: "Mahir" },
    description: {
      en: "Engineering cross-platform mobile applications with Clean Architecture, real-time health/agri monitoring, and cloud notifications.",
      id: "Merekayasa aplikasi mobile lintas platform dengan Clean Architecture, pemantauan real-time, dan notifikasi cloud.",
    },
  },
  ai: {
    title: {
      en: "Applied AI & LLM Integration",
      id: "Integrasi Applied AI & LLM",
    },
    level: { en: "Core Focus", id: "Fokus Utama" },
    description: {
      en: "Embedding Large Language Models and intelligent recommendation pipelines directly into web and mobile product ecosystems.",
      id: "Mengintegrasikan Large Language Models dan pipeline rekomendasi cerdas langsung ke dalam ekosistem produk web dan mobile.",
    },
  },
}

function SkillDomainCard({
  item,
  isId,
}: {
  item: SkillDomainCardData
  isId: boolean
}) {
  const [expanded, setExpanded] = useState(false)
  const [isCollapsing, setIsCollapsing] = useState(false)
  const [isElevated, setIsElevated] = useState(false)
  const [targetHeight, setTargetHeight] = useState<number | "auto">("auto")
  const [collapsedCardHeight, setCollapsedCardHeight] = useState<
    number | undefined
  >(undefined)

  const cardRef = useRef<HTMLElement>(null)
  const sizerRef = useRef<HTMLDivElement>(null)
  const Illustration = item.illustration

  const loc = LOCALIZED_SKILLS[item.id]
  const cardTitle = isId && loc ? loc.title.id : item.title
  const cardLevel = isId && loc ? loc.level.id : item.level
  const cardDesc = isId && loc ? loc.description.id : item.description

  const initialTags = item.tags.slice(0, item.initialVisibleCount)
  const extraTags = item.tags.slice(item.initialVisibleCount)
  const hiddenCount = extraTags.length
  const sizerTags = expanded ? item.tags : initialTags

  // Mengukur tinggi kartu saat kondisi tertutup agar slot grid tetap terkunci dan tidak mendorong seksi di bawahnya
  useEffect(() => {
    const cardEl = cardRef.current
    if (!cardEl || expanded || isCollapsing || isElevated) return

    const updateCardHeight = () => {
      if (!expanded && !isCollapsing && !isElevated) {
        setCollapsedCardHeight(cardEl.offsetHeight)
      }
    }

    updateCardHeight()

    const observer = new ResizeObserver(updateCardHeight)
    observer.observe(cardEl)

    return () => observer.disconnect()
  }, [expanded, isCollapsing, isElevated])

  // Mengukur tinggi target area tag secara instan dari sizer bayangan
  useEffect(() => {
    const el = sizerRef.current
    if (!el) return

    const updateHeight = () => {
      setTargetHeight(el.offsetHeight)
    }

    updateHeight()

    const observer = new ResizeObserver(updateHeight)
    observer.observe(el)

    return () => observer.disconnect()
  }, [expanded])

  const handleExpand = () => {
    if (cardRef.current && !isElevated) {
      setCollapsedCardHeight(cardRef.current.offsetHeight)
    }
    setIsElevated(true)
    setIsCollapsing(false)
    setExpanded(true)
  }

  const handleCollapse = () => {
    setIsCollapsing(true)
    setExpanded(false)
  }

  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{
        height: isElevated && collapsedCardHeight ? collapsedCardHeight : "100%",
      }}
    >
      <article
        ref={cardRef}
        className={`group flex w-full flex-col justify-between rounded-2xl border bg-[#F5F2EB] p-5 transition-[border-color,box-shadow] duration-300 ${
          isElevated
            ? "absolute inset-x-0 top-0 z-30 h-auto min-h-full border-[#1C1C1A] shadow-[0_20px_48px_rgba(28,28,26,0.14)]"
            : "relative z-10 h-full border-[#1C1C1A]/20 shadow-[0_6px_24px_rgba(28,28,26,0.04)] hover:border-[#1C1C1A]"
        }`}
      >
        <div className="flex flex-1 flex-col">
          {/* 1. Area Ilustrasi Miniatur Atas (Tinggi Seragam h-44) */}
          <Illustration />

          {/* 2. Baris Badge Level (Expert / Core Focus) & Kode CAD */}
          <div className="mt-4 flex h-6 items-center justify-between gap-2">
            {item.levelVariant === "expert" ? (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#A3724B]/40 bg-[#A3724B]/15 px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-[#8C5E38]">
                <CrownIcon />
                <span>{cardLevel}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#1C1C1A]/25 bg-[#1C1C1A] px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-[#F5F2EB]">
                <span className="text-[#D49B6A]">✦</span>
                <span>{cardLevel}</span>
              </span>
            )}

            <span className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#736E65]">
              {item.code}
            </span>
          </div>

          {/* 3. Judul & Deskripsi (Tinggi Terkunci Sejajar Antar 4 Kartu) */}
          <h3 className="mt-3 flex min-h-[3rem] items-start text-lg font-semibold leading-snug tracking-tight text-[#1C1C1A] xl:text-xl">
            {cardTitle}
          </h3>
          <p className="mt-2 min-h-[64px] text-xs leading-relaxed text-[#55534E] xl:text-[13px]">
            {cardDesc}
          </p>
        </div>

        {/* 4. Daftar Pil Teknologi + Tombol +N / Less − (Terkunci di Bagian Bawah Seragam) */}
        <div className="relative mt-auto border-t border-[#1C1C1A]/10 pt-3.5">
          {/* Sizer Tak Terlihat untuk Mengukur Target Tinggi Secara Instan Saat Expand / Collapse */}
          <div
            ref={sizerRef}
            aria-hidden="true"
            className="pointer-events-none invisible absolute inset-x-0 top-3.5 -z-10 flex flex-wrap items-center gap-1.5 py-0.5"
          >
            {sizerTags.map((tag) => (
              <span
                key={`sizer-${tag.name}`}
                className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[11px]"
              >
                <span className="h-1.5 w-1.5 rounded-full" />
                <span>{tag.name}</span>
              </span>
            ))}
            {hiddenCount > 0 && (
              <span className="inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium">
                {expanded ? (isId ? "Tutup −" : "Less −") : `+${hiddenCount}`}
              </span>
            )}
          </div>

          {/* Kontainer Animasi Tinggi yang Meluncur Mulus Mengikuti Gelombang Tag */}
          <motion.div
            initial={false}
            animate={{ height: targetHeight }}
            onAnimationComplete={() => {
              if (!expanded) {
                setIsElevated(false)
              }
            }}
            transition={{
              height: {
                duration: expanded ? 0.46 : 0.48,
                delay: expanded ? 0 : 0.03,
                ease: SMOOTH_EASE,
              },
            }}
            className="-mx-0.5 overflow-hidden px-0.5"
          >
            <div className="flex flex-wrap items-center gap-1.5 py-0.5">
              {/* Tag Utama (Selalu Tampil & Terkunci Stabil Tanpa Geser) */}
              {initialTags.map((tag) => (
                <span
                  key={tag.name}
                  className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[11px] transition-colors ${
                    tag.featured
                      ? "border-[#1C1C1A]/25 bg-[#EBE3D7] font-medium text-[#1C1C1A] hover:border-[#A3724B]"
                      : "border-[#1C1C1A]/15 bg-[#EBE3D7]/55 text-[#55534E] hover:border-[#1C1C1A]/35 hover:text-[#1C1C1A]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      tag.featured ? "bg-[#A3724B]" : "bg-[#1C1C1A]/35"
                    }`}
                  />
                  <span>{tag.name}</span>
                </span>
              ))}

              {/* Tombol +N (Muncul Halus di Baris ke-3 Saat Tertutup & Selesai Melipat) */}
              <AnimatePresence initial={false}>
                {!expanded && !isCollapsing && hiddenCount > 0 && (
                  <motion.button
                    key="btn-more"
                    type="button"
                    onClick={handleExpand}
                    initial={{ opacity: 0, scale: 0.82, filter: "blur(3px)" }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: { duration: 0.22, ease: SMOOTH_EASE },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.82,
                      filter: "blur(3px)",
                      transition: { duration: 0.12, ease: [0.4, 0, 1, 1] },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    className="inline-flex cursor-pointer items-center rounded-md border border-[#1C1C1A] bg-[#1C1C1A] px-2.5 py-1 font-mono text-[11px] font-medium text-[#F5F2EB] transition-colors duration-200 hover:border-[#8C5E38] hover:bg-[#8C5E38]"
                    aria-expanded={false}
                    aria-label={
                      isId
                        ? `Tampilkan ${hiddenCount} keahlian lainnya`
                        : `Show ${hiddenCount} more skills`
                    }
                  >
                    +{hiddenCount}
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Gelombang Tag Tambahan + Tombol Less − (Staggered Expand & Reverse-Wave Collapse) */}
              <AnimatePresence
                initial={false}
                onExitComplete={() => setIsCollapsing(false)}
              >
                {expanded &&
                  extraTags.map((tag, extraIdx) => {
                    const reverseIdx = extraTags.length - 1 - extraIdx
                    return (
                      <motion.span
                        key={tag.name}
                        initial={{
                          opacity: 0,
                          scale: 0.86,
                          y: 7,
                          filter: "blur(3px)",
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: {
                            duration: 0.36,
                            delay: extraIdx * 0.036,
                            ease: SMOOTH_EASE,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0.86,
                          y: -5,
                          filter: "blur(3px)",
                          transition: {
                            duration: 0.22,
                            delay: 0.02 + reverseIdx * 0.025,
                            ease: [0.4, 0, 0.2, 1],
                          },
                        }}
                        className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 font-mono text-[11px] transition-colors ${
                          tag.featured
                            ? "border-[#1C1C1A]/25 bg-[#EBE3D7] font-medium text-[#1C1C1A] hover:border-[#A3724B]"
                            : "border-[#1C1C1A]/15 bg-[#EBE3D7]/55 text-[#55534E] hover:border-[#1C1C1A]/35 hover:text-[#1C1C1A]"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            tag.featured ? "bg-[#A3724B]" : "bg-[#1C1C1A]/35"
                          }`}
                        />
                        <span>{tag.name}</span>
                      </motion.span>
                    )
                  })}

                {expanded && hiddenCount > 0 && (
                  <motion.button
                    key="btn-less"
                    type="button"
                    onClick={handleCollapse}
                    initial={{
                      opacity: 0,
                      scale: 0.86,
                      y: 7,
                      filter: "blur(3px)",
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: 0.36,
                        delay: extraTags.length * 0.036,
                        ease: SMOOTH_EASE,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.84,
                      y: -5,
                      filter: "blur(3px)",
                      transition: {
                        duration: 0.18,
                        delay: 0,
                        ease: [0.4, 0, 0.2, 1],
                      },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    className="inline-flex cursor-pointer items-center rounded-md border border-[#8C5E38] bg-[#8C5E38] px-2.5 py-1 font-mono text-[11px] font-medium text-[#F5F2EB] transition-colors duration-200 hover:border-[#1C1C1A] hover:bg-[#1C1C1A]"
                    aria-expanded={true}
                    aria-label={
                      isId ? "Tampilkan lebih sedikit" : "Show fewer skills"
                    }
                  >
                    {isId ? "Tutup −" : "Less −"}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
}

interface AboutSkillsProps {
  locale?: string
}

export default function AboutSkills({ locale: localeProp }: AboutSkillsProps) {
  const hookLocale = useLocale()
  const locale = localeProp || hookLocale || "en"
  const isId = locale === "id"

  return (
    <section
      id="skills"
      className="relative z-20 mx-auto w-full max-w-[1440px] px-4 pt-16 pb-10 md:px-8 md:pt-24 md:pb-12 lg:px-12"
    >
      {/* Garis Pembatas CAD Atas */}
      <div className="mb-12 flex items-center justify-between border-t border-[#1C1C1A] pt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#A3724B]">(03)</span>
          <span>{isId ? "KAPABILITAS TEKNIS" : "TECHNICAL CAPABILITIES"}</span>
        </div>
        <div className="hidden md:block text-[10px] text-[#736E65]/80">
          {isId
            ? "ARSITEKTUR WEB, BACKEND, MOBILE & APPLIED AI"
            : "ON WEB, BACKEND, MOBILE & APPLIED AI ARCHITECTURE"}
        </div>
        <div>
          <span>SHEET A-203</span>
        </div>
      </div>

      {/* Header Judul Seksi */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mb-12 flex flex-col items-start justify-between gap-6 border-b border-[#1C1C1A]/15 pb-8 md:flex-row md:items-end"
      >
        <div>
          <div className="mb-2 font-mono text-[11px] tracking-widest text-[#A3724B]">
            / / / / / / / {isId ? "MATRIKS SPESIFIKASI" : "SPECIFICATION MATRIX"}
          </div>
          <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#1C1C1A] md:text-5xl">
            {isId ? "Keahlian & " : "Skills & "}
            <span className="font-serif italic font-normal text-[#A3724B]">
              {isId ? "Kompetensi" : "Expertise"}
            </span>
          </h2>
        </div>
        <p className="max-w-md font-mono text-xs leading-relaxed text-[#55534E] md:text-right">
          {isId
            ? "RINCIAN ARSITEKTUR LINTAS WEB FULL-STACK, API BACKEND TERUKUR, APLIKASI FLUTTER, SERTA APPLIED GEMINI AI."
            : "ARCHITECTURAL BREAKDOWN ACROSS FULL-STACK WEB, SCALABLE BACKEND APIs, FLUTTER MOBILE APPS, AND APPLIED GEMINI AI."}
        </p>
      </motion.div>

      {/* Grid 4 Kolom Sejajar pada Layar Besar (lg:grid-cols-4) — items-stretch untuk ketinggian seragam */}
      <div className="mb-4 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
        {SKILL_DOMAIN_CARDS.map((item, idx) => (
          <motion.div
            key={item.id}
            className="flex h-full flex-col"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
          >
            <SkillDomainCard item={item} isId={isId} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
