"use client"

import React, { useEffect, useRef } from "react"
import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslations } from "next-intl"
import { HIGHLIGHT_KEYWORDS } from "./constants"

/**
 * Komponen AboutManifesto Terpadu
 * Menggabungkan kekuatan tipografi IntroStatement (serif italic tembaga) dan AboutManifesto
 * (kata demi kata menyala mengikuti scroll + tombol eksplorasi /about).
 */
export const AboutManifesto: React.FC = () => {
  const t = useTranslations("about")
  const containerRef = useRef<HTMLDivElement>(null)
  const leadRef = useRef<HTMLParagraphElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      if (leadRef.current) {
        gsap.fromTo(
          leadRef.current,
          {
            opacity: 0.2,
            y: 20,
            filter: "blur(3px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "power3.out",
            scrollTrigger: {
              trigger: leadRef.current,
              start: "top 88%",
              end: "top 58%",
              scrub: 0.45,
            },
          }
        )
      }

      if (paragraphRef.current) {
        const wordSpans =
          paragraphRef.current.querySelectorAll(".manifesto-word")

        gsap.fromTo(
          wordSpans,
          {
            opacity: 0.22,
            y: 6,
            filter: "blur(2.5px)",
            color: "#8C877E",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            color: "#1C1C1A",
            stagger: 0.025,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 86%",
              end: "top 44%",
              scrub: 0.35,
            },
          }
        )
      }

      ScrollTrigger.refresh()
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const description = t("description")
  const words = description.split(" ")

  return (
    <div ref={containerRef} className="relative z-10 lg:col-span-10">
      {/* Baris Utama Pernyataan Visi dengan Sorotan Serif Miring Tembaga */}
      <div className="max-w-4xl">
        <p
          ref={leadRef}
          className="text-2xl font-normal leading-[1.32] tracking-[-0.025em] text-[#1C1C1A] md:text-4xl lg:text-[40px]"
        >
          {t("leadPrefix")}{" "}
          <span className="font-serif italic text-[#A3724B]">
            {t("leadHighlight")}
          </span>
          {t("leadSuffix")}
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 h-[2px] w-24 origin-left bg-[#A3724B]"
        />
      </div>

      {/* Paragraf Manifesto Kedua (GSAP Scroll-Reveal per Kata dengan Kata Kunci Tegas) */}
      <div className="my-6 max-w-4xl">
        <p
          ref={paragraphRef}
          className="text-lg font-light leading-[1.6] tracking-[-0.01em] text-[#1C1C1A]/90 md:text-2xl lg:text-[26px] lg:leading-[1.52]"
        >
          {words.map((word, idx) => {
            const cleanWord = word.replace(/[^a-zA-Z-]/g, "")
            const isHighlight = HIGHLIGHT_KEYWORDS.includes(cleanWord)

            return (
              <span
                key={idx}
                className={`manifesto-word mr-[0.28em] inline-block whitespace-nowrap will-change-[transform,opacity,filter] ${
                  isHighlight
                    ? "font-medium !text-[#8C5E38] underline decoration-[#A3724B]/35 decoration-1 underline-offset-4"
                    : ""
                }`}
              >
                {word}
              </span>
            )
          })}
        </p>
      </div>

      {/* Baris Stempel Kredensial Monospace + Tombol Pill Eksplorasi */}
      <div className="mt-7 flex flex-col items-start justify-between gap-5 border-t border-[#1C1C1A]/10 pt-5 md:flex-row md:items-center">
        <p className="font-mono text-[11px] tracking-wider text-[#1C1C1A]/60 md:text-xs">
          {t("caption")}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-[#1C1C1A] bg-[#1C1C1A] py-2 pr-2 pl-6 font-mono text-xs font-medium uppercase tracking-wider text-[#FAF8F5] transition-all duration-300 hover:border-[#8C5E38] hover:bg-[#8C5E38] hover:shadow-md"
          >
            <span>{t("cta")}</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FAF8F5] text-[#1C1C1A] transition-transform duration-300 ease-out group-hover:-rotate-45">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutManifesto
