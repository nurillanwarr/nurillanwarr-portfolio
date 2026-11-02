"use client"

import React, { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CONTACT_METADATA } from "./constants"

gsap.registerPlugin(ScrollTrigger, useGSAP)

/**
 * Komponen ContactCta
 * Menampilkan seksi Call-to-Action utama yang terinspirasi dari referensi Iqmal & Oda:
 * - Live ticking WIB Clock untuk Surakarta, Indonesia
 * - Background watermark "COLLABORATE" dengan efek parallax subtil
 * - Headline monumental "LET'S WORK TOGETHER" dengan animasi reveal kata per kata (GSAP)
 * - Subtitle pengantar ketersediaan kolaborasi engineering
 * - Tombol interaktif Salin Email dengan tooltip "Email Copied! ✓"
 * - Tombol unduh Resume / CV
 */
export const ContactCta: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [timeString, setTimeString] = useState<string>("--:--:-- WIB")
  const [copied, setCopied] = useState<boolean>(false)

  // Live ticking clock untuk Surakarta, ID (Asia/Jakarta / WIB)
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
        setTimeString(`${formatter.format(now)} WIB`)
      } catch {
        const now = new Date()
        const hh = String(now.getHours()).padStart(2, "0")
        const mm = String(now.getMinutes()).padStart(2, "0")
        const ss = String(now.getSeconds()).padStart(2, "0")
        setTimeString(`${hh}:${mm}:${ss} WIB`)
      }
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Clipboard copy handler
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_METADATA.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    } catch {
      window.location.href = `mailto:${CONTACT_METADATA.email}`
    }
  }

  // GSAP scroll animations
  useGSAP(
    () => {
      if (!containerRef.current) return

      // Word reveal animation untuk "LET'S WORK TOGETHER"
      gsap.from(".unified-hero-word", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        rotateX: -20,
        stagger: 0.12,
        duration: 1.1,
        ease: "power3.out",
      })

      // Parallax subtil pada teks watermark di latar belakang
      gsap.to(".unified-watermark-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
        y: -35,
        ease: "none",
      })
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className="relative mb-16 flex flex-col items-center overflow-hidden text-center md:mb-24"
    >
      {/* Subtle Background Watermark "COLLABORATE" */}
      <div
        aria-hidden="true"
        className="unified-watermark-text pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex select-none justify-center overflow-hidden text-center opacity-100"
      >
        <span className="text-[17vw] font-black leading-none tracking-tighter text-[#1C1C1A]/[0.03] lg:text-[18vw]">
          COLLABORATE
        </span>
      </div>

      {/* Live Clock & Location Status Bar */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C5E38] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8C5E38]" />
          </span>
          <span className="font-mono text-[11px] font-semibold tracking-[0.26em] text-[#8C5E38] uppercase sm:text-xs">
            {CONTACT_METADATA.subheading}
          </span>
        </div>

        <div className="font-mono text-xs tracking-widest text-[#6B6964] sm:text-sm">
          <span>{CONTACT_METADATA.timezoneCity}</span>
          <span className="mx-2 text-[#9E9B93]">/</span>
          <span className="tabular-nums font-semibold text-[#1C1C1A]">
            {timeString}
          </span>
        </div>
      </div>

      {/* Bold Editorial Headline "LET'S WORK TOGETHER" */}
      <h2 className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-serif text-5xl font-normal tracking-tight text-[#1C1C1A] sm:text-7xl md:mt-12 md:text-8xl lg:text-9xl">
        {CONTACT_METADATA.headlineWords.map((word, idx) => (
          <span
            key={idx}
            className="unified-hero-word inline-block will-change-transform"
          >
            {word}
          </span>
        ))}
      </h2>

      {/* Subtitle statement */}
      <p className="relative z-10 mt-4 max-w-xl font-mono text-xs leading-relaxed text-[#55534E] sm:text-sm">
        Open for software engineering roles, fullstack consulting, and applied AI
        product development.
      </p>

      {/* Interactive Action Buttons: Email Copy Pill & Download CV */}
      <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 md:mt-10">
        {/* Email Copy Pill */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className="group relative inline-flex items-center gap-3.5 rounded-full bg-[#1C1C1A] py-3 pr-3 pl-6 text-[#F2ECE1] shadow-md transition-all duration-300 hover:bg-[#8C5E38] hover:shadow-lg active:scale-95 sm:py-3.5 sm:pr-3.5 sm:pl-7"
          aria-label={`Copy email address ${CONTACT_METADATA.email}`}
        >
          <span className="font-mono text-xs tracking-tight sm:text-sm md:text-base">
            {CONTACT_METADATA.email}
          </span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F2ECE1] text-[#1C1C1A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </span>

          {/* Copied Tooltip Badge */}
          <span
            className={`absolute -top-9 left-1/2 -translate-x-1/2 rounded-md bg-[#8C5E38] px-3 py-1 font-mono text-[11px] font-medium tracking-wider text-[#F2ECE1] uppercase shadow-lg transition-all duration-300 ${
              copied
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-90 opacity-0"
            }`}
          >
            Email Copied! ✓
          </span>
        </button>

        {/* Download Resume / CV Pill */}
        <a
          href={CONTACT_METADATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border border-[#1C1C1A]/30 bg-[#FAF6F0] px-5 py-3 font-mono text-xs font-semibold tracking-wider text-[#1C1C1A] uppercase transition-all duration-300 hover:border-[#8C5E38] hover:bg-[#EBE3D7] hover:text-[#8C5E38] sm:px-6 sm:py-3.5 sm:text-sm"
        >
          <span>Resume / CV</span>
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>
      </div>
    </div>
  )
}

export default ContactCta
