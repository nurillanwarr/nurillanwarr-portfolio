"use client"

import React, { useState, useEffect } from "react"
import { useTranslations } from "next-intl"

/**
 * Komponen HeroHeadline
 * Menampilkan tajuk utama perkenalan dan ringkasan profil pengantar:
 * - Judul utama elegan dengan aksen titik warna tanah
 * - Animasi mesin ketik mekanikal (Typewriter) yang berganti peran secara otomatis
 * - Kursor blok solid █ yang berkedip khas terminal / CAD spec
 * - Mendukung multi-bahasa terpadu (English & Indonesian)
 */
export const HeroHeadline: React.FC = () => {
  const t = useTranslations("hero")
  const roles: string[] = t.raw("roles") || [
    "Full-Stack Web Developer",
    "Applied AI Developer",
    "Informatics @UMS",
    "Dicoding Bootcamp Alum",
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = roles[roleIndex] || roles[0]

    if (!isDeleting && text === currentWord) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true)
      }, 2200)
      return () => clearTimeout(pauseTimer)
    }

    if (isDeleting && text === "") {
      const switchTimer = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
      }, 350)
      return () => clearTimeout(switchTimer)
    }

    const stepSpeed = isDeleting ? 45 : 80
    const stepTimer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      )
    }, stepSpeed)

    return () => clearTimeout(stepTimer)
  }, [text, isDeleting, roleIndex, roles])

  return (
    <div>
      {/* Definisi keyframe Animasi Kursor */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typewriting-cursor {
          animation: cursorBlink 0.9s steps(2, start) infinite;
        }
      `}</style>

      {/* Label Sub-Heading */}
      <div className="mb-3 flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-[#736E65]">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
        <span>{t("locationStatus")}</span>
      </div>

      {/* Headline Nama Utama */}
      <h1 className="text-[clamp(2.8rem,5.8vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.04em] text-[#1C1C1A]">
        {t("greeting")}{" "}
        <span className="font-serif italic font-normal text-[#A3724B]">
          {t("name")}
        </span>
        <span className="text-[#B7835A]">.</span>
      </h1>

      {/* Subtitle Animasi Mesin Ketik */}
      <div className="mt-4 flex items-center font-mono text-lg text-[#3A3834] sm:text-xl md:text-2xl">
        <span className="min-h-[1.5em] text-[#A3724B]">{text}</span>
        <span className="architect-cursor ml-1 inline-block h-[1.15em] w-2.5 bg-[#A3724B]" />
      </div>
    </div>
  )
}

export default HeroHeadline
