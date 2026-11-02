"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

/**
 * Komponen AboutDetails ("Who Am I?")
 * Menggabungkan kolase 3 foto Alvalens dengan tata letak arsitektural Oda Arkitekter:
 * - Garis pembatas CAD (02) IDENTITY & BACKGROUND — SHEET A-202
 * - Kolase 3 bingkai gambar kerja bertumpuk dengan GSAP ScrollTrigger parallax
 * - Narasi lengkap Nuril Anwar (Informatika UMS, Full-Stack & Mobile, Gemini 2.0 Flash, Synexa, Girantra, ASEAN Challenge, Dicoding)
 *
 * @returns {JSX.Element} Elemen seksi rincian "Who Am I?"
 */
export default function AboutDetails() {
  const collageRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const collageEl = collageRef.current
    if (!collageEl) return

    const ctx = gsap.context(() => {
      if (card1Ref.current) {
        gsap.to(card1Ref.current, {
          yPercent: -8,
          rotate: -2,
          ease: "none",
          scrollTrigger: {
            trigger: collageEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        })
      }

      if (card2Ref.current) {
        gsap.to(card2Ref.current, {
          yPercent: 10,
          rotate: 3,
          ease: "none",
          scrollTrigger: {
            trigger: collageEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        })
      }

      if (card3Ref.current) {
        gsap.to(card3Ref.current, {
          yPercent: -12,
          rotate: 1.5,
          ease: "none",
          scrollTrigger: {
            trigger: collageEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5,
          },
        })
      }
    }, collageEl)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="who-am-i"
      className="relative mx-auto w-full max-w-[1440px] px-4 py-16 md:px-8 md:py-24 lg:px-12"
    >
      {/* Garis Pembatas CAD Atas (Gaya Oda Arkitekter) */}
      <div className="mb-12 flex items-center justify-between border-t border-[#1C1C1A] pt-3 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#A3724B]">(02)</span>
          <span>IDENTITY &amp; BACKGROUND</span>
        </div>
        <div className="hidden md:block text-[10px] text-[#736E65]/80">
          WHO AM I • FULL-STACK, MOBILE &amp; APPLIED AI
        </div>
        <div>
          <span>SHEET A-202</span>
        </div>
      </div>

      {/* Judul Seksi Kombinasi Oda x Alvalens */}
      <div className="mb-12">
        <div className="mb-2 font-mono text-[11px] tracking-widest text-[#A3724B]">
          / / / / / / / ARCHITECTURAL PROFILE
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-medium tracking-[-0.03em] text-[#1C1C1A] md:text-5xl"
        >
          Who Am{" "}
          <span className="font-serif italic font-normal text-[#A3724B]">
            I?
          </span>
        </motion.h2>
      </div>

      {/* Grid 2-Kolom: Kolase 3 Foto di Kiri + Narasi Lengkap di Kanan */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Kolom Kiri: Kolase 3 Foto Bertumpuk (Alvalens Collage + Oda Blueprint Plates) */}
        <div className="lg:col-span-5">
          <div
            ref={collageRef}
            className="relative mx-auto aspect-square w-full max-w-[440px]"
          >
            {/* Bingkai Foto 1 (Kiri Tengah - Utama) */}
            <div ref={card1Ref} className="absolute top-20 left-4 z-20 w-[54%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: 60 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 40 }}
                className="group aspect-square w-full cursor-pointer border border-[#1C1C1A]/30 bg-[#F5F2EB] p-2.5 shadow-sm transition-colors duration-300 hover:border-[#A3724B]"
              >
                <div className="relative h-full w-full overflow-hidden border border-[#1C1C1A]/15 bg-[#E6DEC8] grayscale transition-all duration-500 group-hover:grayscale-0">
                  <Image
                    src="/profile.jpg"
                    alt="Nuril Anwar — Informatics Engineering UMS"
                    fill
                    sizes="(max-width: 768px) 50vw, 240px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none"
                    }}
                  />
                  <div className="flex h-full w-full flex-col items-center justify-center p-4 text-center">
                    <span className="font-mono text-[10px] tracking-widest text-[#A3724B]">
                      FIG. 02A
                    </span>
                    <span className="mt-1 font-serif text-2xl italic text-[#1C1C1A]">
                      Informatics
                    </span>
                  </div>
                </div>
                <div className="mt-1.5 flex justify-between font-mono text-[8.5px] uppercase text-[#736E65]">
                  <span>FIG. A</span>
                  <span>UMS SURAKARTA</span>
                </div>
              </motion.div>
            </div>

            {/* Bingkai Foto 2 (Kanan Atas) */}
            <div ref={card2Ref} className="absolute top-6 right-8 z-10 w-[38%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: -60 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.18,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                whileHover={{ scale: 1.07, rotate: 0, zIndex: 40 }}
                className="group aspect-square w-full cursor-pointer border border-[#1C1C1A]/30 bg-[#F5F2EB] p-2 shadow-sm transition-colors duration-300 hover:border-[#A3724B]"
              >
                <div className="relative h-full w-full overflow-hidden border border-[#1C1C1A]/15 bg-[#DED6C6] grayscale transition-all duration-500 group-hover:grayscale-0">
                  <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center">
                    <span className="font-mono text-[9px] tracking-widest text-[#A3724B]">
                      FIG. 02B
                    </span>
                    <span className="mt-1 font-serif text-lg italic text-[#1C1C1A]">
                      Full-Stack
                    </span>
                  </div>
                </div>
                <div className="mt-1 flex justify-between font-mono text-[8px] uppercase text-[#736E65]">
                  <span>FIG. B</span>
                  <span>WEB &amp; MOBILE</span>
                </div>
              </motion.div>
            </div>

            {/* Bingkai Foto 3 (Kanan Bawah) */}
            <div
              ref={card3Ref}
              className="absolute right-6 bottom-8 z-20 w-[44%]"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.32,
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                whileHover={{ scale: 1.06, rotate: 0, zIndex: 40 }}
                className="group aspect-square w-full cursor-pointer border border-[#1C1C1A]/30 bg-[#F5F2EB] p-2 shadow-sm transition-colors duration-300 hover:border-[#A3724B]"
              >
                <div className="relative h-full w-full overflow-hidden border border-[#1C1C1A]/15 bg-[#EAE3D5] grayscale transition-all duration-500 group-hover:grayscale-0">
                  <div className="flex h-full w-full flex-col items-center justify-center p-3 text-center">
                    <span className="font-mono text-[9px] tracking-widest text-[#A3724B]">
                      FIG. 02C
                    </span>
                    <span className="mt-1 font-serif text-xl italic text-[#1C1C1A]">
                      Applied AI
                    </span>
                  </div>
                </div>
                <div className="mt-1 flex justify-between font-mono text-[8px] uppercase text-[#736E65]">
                  <span>FIG. C</span>
                  <span>GEMINI 2.0</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Biografi Lengkap & Kartu Fokus Aktif */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="mb-2 font-mono text-xs tracking-[0.16em] uppercase text-[#A3724B]">
            MOBILE &amp; WEB DEV • APPLIED AI
          </div>
          <h3 className="mb-5 text-2xl font-medium tracking-tight text-[#1C1C1A] md:text-3xl">
            Nuril Anwar
          </h3>

          <div className="space-y-4 text-justify text-base leading-relaxed text-[#4A4742] md:text-lg">
            <p>
              I am an{" "}
              <span className="font-medium text-[#1C1C1A]">
                Informatics Engineering student at Universitas Muhammadiyah
                Surakarta (UMS)
              </span>{" "}
              focusing on building reliable{" "}
              <span className="font-medium text-[#1C1C1A]">
                Full-stack Developer
              </span>{" "}
              mobile and web software, as well as{" "}
              <span className="font-medium text-[#A3724B]">
                applied AI products
              </span>
              . Experienced in both frontend and backend web and mobile
              development, including building responsive interfaces,{" "}
              <span className="font-medium text-[#1C1C1A]">
                RESTful APIs, and system integration
              </span>
              .
            </p>

            <p>
              Passionate about exploring emerging technologies, specifically
              integrating{" "}
              <span className="font-medium text-[#1C1C1A]">
                Large Language Models (such as Gemini)
              </span>{" "}
              into mobile and web ecosystems to deliver real, positive impact —
              demonstrated through competition projects like{" "}
              <span className="font-medium text-[#1C1C1A]">
                Smart Stroke &quot;Synexa&quot; (MTE Malaysia &amp; I2ASPO)
              </span>
              ,{" "}
              <span className="font-medium text-[#1C1C1A]">
                Girantra AI Agri Marketplace
              </span>
              , and the{" "}
              <span className="font-medium text-[#1C1C1A]">
                ASEAN Challenge
              </span>
              . Equipped with full-stack development skills gained through{" "}
              <span className="font-medium text-[#1C1C1A]">
                Dicoding Bootcamp (Frontend &amp; Backend Development)
              </span>{" "}
              and practical project experiences, I am ready to contribute to an{" "}
              <span className="font-medium text-[#1C1C1A]">
                innovative, collaborative, and solution-oriented tech team
              </span>
              .
            </p>
          </div>

          {/* Kartu Status Aktif — Gaya Lembar Spesifikasi Oda */}
          <div className="mt-8 border border-[#1C1C1A]/20 bg-[#F5F2EB] p-4 transition-colors hover:border-[#A3724B]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center border border-[#1C1C1A] bg-[#1C1C1A] text-[#F5F2EB]">
                  <div className="flex h-4 items-end gap-1">
                    <span className="h-full w-1 animate-[pulse_0.8s_ease-in-out_infinite] bg-[#A3724B]" />
                    <span className="h-2.5 w-1 animate-[pulse_1.1s_ease-in-out_infinite] bg-[#F5F2EB]" />
                    <span className="h-3.5 w-1 animate-[pulse_0.9s_ease-in-out_infinite] bg-[#A3724B]" />
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#A3724B]">
                    CURRENT TECH ECOSYSTEM
                  </div>
                  <div className="text-sm font-medium text-[#1C1C1A] md:text-base">
                    Flutter • Next.js &amp; NestJS • Supabase • Gemini 2.0 Flash
                  </div>
                </div>
              </div>

              <span className="hidden border border-[#1C1C1A]/20 bg-[#EBE3D7] px-3 py-1 font-mono text-[10px] uppercase text-[#55534E] sm:inline-block">
                SURAKARTA, ID
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
