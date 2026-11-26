"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { DrawingSheet } from "@/components/shared/DrawingSheet"
import { useLocale } from "next-intl"

const QUOTE_LINE_1_EN = '"There are no limits to what you can accomplish'.split(" ")
const QUOTE_LINE_2_EN = 'except the limits you place on your own thinking."'.split(" ")

const QUOTE_LINE_1_ID = '"Tidak ada batasan untuk apa yang dapat Anda capai'.split(" ")
const QUOTE_LINE_2_ID = 'kecuali batasan yang Anda tempatkan pada pikiran Anda sendiri."'.split(" ")

interface AboutQuoteProps {
  locale?: string
}

/**
 * Komponen AboutQuote ("Closing Philosophy")
 * Menampilkan kutipan penutup dwibahasa dengan animasi blur-to-sharp di dalam bingkai DrawingSheet.
 */
export default function AboutQuote({ locale: localeProp }: AboutQuoteProps) {
  const hookLocale = useLocale()
  const locale = localeProp || hookLocale || "en"
  const isId = locale === "id"

  const line1 = isId ? QUOTE_LINE_1_ID : QUOTE_LINE_1_EN
  const line2 = isId ? QUOTE_LINE_2_ID : QUOTE_LINE_2_EN

  return (
    <DrawingSheet id="about-quote" className="mt-6 mb-16">
      <div className="px-6 py-14 text-center md:px-12 md:py-20">
        <div className="mb-8 flex items-center justify-between border-b border-[#1C1C1A]/15 pb-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#736E65]">
          <span className="font-semibold text-[#A3724B]">(06) {isId ? "EPILOG" : "EPILOGUE"}</span>
          <span>{isId ? "FILOSOFI REKAYASA" : "ENGINEERING PHILOSOPHY"}</span>
          <span>SHEET A-206</span>
        </div>

        {/* Kalimat Kutipan Baris 1 */}
        <h3 className="mx-auto max-w-3xl text-2xl font-normal leading-snug tracking-tight text-[#1C1C1A] md:text-4xl">
          {line1.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 14, filter: "blur(6px)", scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.06,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h3>

        {/* Kalimat Kutipan Baris 2 */}
        <p className="mx-auto mt-3 max-w-2xl font-serif text-xl italic text-[#A3724B] md:text-3xl">
          {line2.map((word, index) => (
            <motion.span
              key={index + line1.length}
              initial={{ opacity: 0, y: 14, filter: "blur(6px)", scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: (line1.length + index) * 0.06,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mr-[0.28em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </p>

        {/* Tombol Navigasi Penutup */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-[#1C1C1A] bg-[#1C1C1A] px-7 py-3 font-mono text-xs font-medium uppercase tracking-wider text-[#FAF8F5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8C5E38] hover:bg-[#8C5E38] hover:shadow-md"
          >
            <span>{isId ? "Mulai Kolaborasi" : "Start A Collaboration"}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/#about"
            className="inline-flex items-center gap-2 rounded-full border border-[#1C1C1A]/25 bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#1C1C1A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1C1C1A] hover:bg-[#1C1C1A]/5"
          >
            <span>{isId ? "← Kembali ke Beranda" : "← Back to Home"}</span>
          </Link>
        </motion.div>
      </div>
    </DrawingSheet>
  )
}
