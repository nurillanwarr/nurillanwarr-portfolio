"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface AboutLanyardBadgeProps {
  photoSrc?: string
}

export const AboutLanyardBadge: React.FC<AboutLanyardBadgeProps> = ({
  photoSrc = "/profile.jpg",
}) => {
  const t = useTranslations("about.lanyard")
  const containerRef = useRef<HTMLDivElement>(null)

  const title = t.has("title") ? t("title") : "ARCHITECT // 2026"
  const status = t.has("status") ? t("status") : "VERIFIED"
  const role = t.has("role") ? t("role") : "FULL-STACK & APPLIED AI"
  const affiliation = t.has("affiliation") ? t("affiliation") : "UMS // INFORMATICS ENGINEERING"
  const code = t.has("code") ? t("code") : "ID: N28-SURAKARTA"

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 18 })
  const dropY = useTransform(smoothProgress, [0, 1], [-80, 0])
  const rotateSwing = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [-8, 6, -2, 0])

  return (
    <div ref={containerRef} className="relative flex flex-col items-center select-none">
      <motion.div
        style={{ y: dropY }}
        className="relative flex flex-col items-center"
      >
        <div className="h-16 w-4 shadow-md flex items-center justify-center bg-[#1C1C1A]">
          <div className="h-full w-px bg-white/20" />
        </div>

        <div className="h-4 w-6 rounded-[2px] border border-[#736E65] bg-gradient-to-b from-[#D5CBB9] to-[#8A857B] shadow-inner flex items-center justify-center">
          <div className="h-2 w-1 bg-[#1C1C1A]" />
        </div>
      </motion.div>

      <motion.div
        style={{ y: dropY, rotate: rotateSwing }}
        whileHover={{ scale: 1.03, rotateY: 8, rotateX: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-56 sm:w-60 rounded-md border border-[#1C1C1A]/40 bg-[#F4EFEA]/95 p-3.5 shadow-xl backdrop-blur-sm"
      >
        <div className="mx-auto -mt-1.5 mb-2.5 h-1.5 w-7 rounded-full bg-[#1C1C1A]/30 border border-[#1C1C1A]/50" />
        <div className="flex items-center justify-between border-b border-[#1C1C1A]/20 pb-2 font-mono text-[8px] uppercase tracking-wider text-[#736E65]">
          <span>{title}</span>
          <span className="font-bold text-[#A3724B]">{status}</span>
        </div>

        <div className="relative mt-3 aspect-square w-full overflow-hidden rounded border border-[#1C1C1A]/30 bg-[#EBE3D7]">
          <Image
            src={photoSrc}
            alt="Nuril Anwar"
            fill
            className="object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
            sizes="240px"
          />
          <div className="pointer-events-none absolute top-1 left-1 font-mono text-[7px] text-white/80">+</div>
          <div className="pointer-events-none absolute top-1 right-1 font-mono text-[7px] text-white/80">+</div>
          <div className="pointer-events-none absolute bottom-1 left-1 font-mono text-[7px] text-white/80">+</div>
          <div className="pointer-events-none absolute bottom-1 right-1 font-mono text-[7px] text-white/80">+</div>
        </div>

        <div className="mt-3 font-mono leading-tight">
          <div className="font-bold tracking-tight text-[12px] text-[#1C1C1A]">
            NURIL ANWAR
          </div>
          <div className="font-medium tracking-wide text-[9px] text-[#A3724B]">
            {role}
          </div>
          <div className="mt-1 uppercase text-[7.5px] text-[#736E65]">
            {affiliation}
          </div>
        </div>

        <div className="mt-3 pt-2 border-t flex items-center justify-between border-[#1C1C1A]/15">
          <div className="font-mono tracking-widest text-[7.5px] text-[#8B8983]">
            ||||| | |||| || |||
          </div>
          <span className="font-mono text-[7px] text-[#1C1C1A]/60">
            {code}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutLanyardBadge
