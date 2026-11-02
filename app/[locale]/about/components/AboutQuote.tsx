"use client"

import React from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { DrawingSheet } from "@/components/shared/DrawingSheet"

const QUOTE_LINE_1 = '"There are no limits to what you can accomplish'.split(" ")
const QUOTE_LINE_2 = 'except the limits you place on your own thinking."'.split(" ")

/**
 * Komponen AboutQuote ("Closing Philosophy")
 * Mengadaptasi komponen Quote milik Alvalens dengan animasi word-by-word blur-to-sharp + 3D y-rise
 * di dalam bingkai lembar kerja arsitektur DrawingSheet:
 * - Kata demi kata muncul dari kondisi blur(6px) + y(14px) menjadi tajam saat masuk viewport
 * - Dilengkapi tombol navigasi kembali ke beranda atau inisiasi kolaborasi
 *
 * @returns {JSX.Element} Elemen seksi penutup Quote halaman About
 */
export default function AboutQuote() {
  return (
    <DrawingSheet id="about-quote" className="mt-6 mb-16">
      <div className="px-6 py-14 text-center md:px-12 md:py-20">
        <div className="mb-8 flex items-center justify-between border-b border-[#1C1C1A]/15 pb-3 font-mono text-[10.5px] tracking-[0.16em] uppercase text-[#736E65]">
          <span className="font-semibold text-[#A3724B]">(06) EPILOGUE</span>
          <span>ENGINEERING PHILOSOPHY</span>
          <span>SHEET A-206</span>
        </div>

        {/* Kalimat Kutipan Baris 1 (Blur-to-Sharp + Vertical Rise Word Reveal) */}
        <h3 className="mx-auto max-w-3xl text-2xl font-normal leading-snug tracking-tight text-[#1C1C1A] md:text-4xl">
          {QUOTE_LINE_1.map((word, index) => (
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
          {QUOTE_LINE_2.map((word, index) => (
            <motion.span
              key={index + QUOTE_LINE_1.length}
              initial={{ opacity: 0, y: 14, filter: "blur(6px)", scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: (QUOTE_LINE_1.length + index) * 0.06,
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
            <span>Start A Collaboration</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/#about"
            className="inline-flex items-center gap-2 rounded-full border border-[#1C1C1A]/25 bg-transparent px-6 py-3 font-mono text-xs uppercase tracking-wider text-[#1C1C1A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1C1C1A] hover:bg-[#1C1C1A]/5"
          >
            <span>← Back to Home</span>
          </Link>
        </motion.div>
      </div>
    </DrawingSheet>
  )
}
