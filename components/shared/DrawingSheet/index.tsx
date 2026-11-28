"use client"

import React from "react"
import { motion } from "framer-motion"
import { PaperTexture } from "./PaperTexture"
import { RegistrationMark } from "./RegistrationMark"

/**
 * Properti untuk komponen DrawingSheet
 */
interface DrawingSheetProps {
  /** Elemen anak atau konten yang berada di dalam lembar gambar */
  children: React.ReactNode
  /** Path gambar tekstur kertas yang dipakai sebagai latar belakang lembar */
  paperSrc?: string
  /** Identifier unik opsional untuk elemen section */
  id?: string
  /** Kelas CSS tambahan untuk styling luar */
  className?: string
  /**
   * Variasi tampilan bingkai lembar kerja arsitektur:
   * - "default": Bingkai ganda klasik dengan 4 tanda bidik lingkaran (RegistrationMark) di sudut (dipakai pada Hero & AboutHero)
   * - "second": Bingkai spesifikasi vellum dengan siku L presisi tembaga, mistar skala samping, dan garis lipat CAD (dipakai pada Home About)
   */
  variant?: "default" | "second" | "third"
  /** Tema tampilan lembar: "light" (kertas gambar terang) atau "dark" (kertas sketsa grafit arsitektur gelap) */
  theme?: "light" | "dark"
}

// Durasi & Easing tarikan garis khas gambar teknik arsitektural
const drawTransition = {
  duration: 0.85,
  ease: [0.16, 1, 0.3, 1] as const,
}

/**
 * Komponen Siku Sudut Teknis (Corner L-Bracket) khusus varian "editorial"
 */
const EditorialCornerBracket: React.FC<{
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right"
  theme?: "light" | "dark"
}> = ({ position, theme = "light" }) => {
  const isDark = theme === "dark"
  const posClasses = {
    "top-left": "-top-[3px] -left-[3px] border-t-2 border-l-2",
    "top-right": "-top-[3px] -right-[3px] border-t-2 border-r-2",
    "bottom-left": "-bottom-[3px] -left-[3px] border-b-2 border-l-2",
    "bottom-right": "-bottom-[3px] -right-[3px] border-b-2 border-r-2",
  }[position]

  const dotClasses = {
    "top-left": "-top-[5px] -left-[5px]",
    "top-right": "-top-[5px] -right-[5px]",
    "bottom-left": "-bottom-[5px] -left-[5px]",
    "bottom-right": "-bottom-[5px] -right-[5px]",
  }[position]

  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-20 h-5 w-5 transition-colors duration-500 ${
          isDark ? "border-[#FAF6F0]" : "border-[#1C1C1A]"
        } ${posClasses}`}
      />
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute z-20 h-1.5 w-1.5 transition-colors duration-500 ${
          isDark ? "bg-[#D48B47]" : "bg-[#A3724B]"
        } ${dotClasses}`}
      />
    </>
  )
}

/**
 * Komponen DrawingSheet
 * Menampilkan lembar kerja arsitektural (architectural drafting sheet) dengan presisi gambar teknik:
 * - Varian "default": Garis tepi ditarik animasi berseri (top -> right -> bottom -> left) dan 4 tanda registrasi CAD di setiap sudutnya
 * - Varian "second": Lembar spesifikasi teknis dengan siku L tembaga, bar skala mistar CAD, dan tekstur vellum
 */
export const DrawingSheet: React.FC<DrawingSheetProps> = ({
  children,
  paperSrc,
  id,
  className = "",
  variant = "default",
  theme = "light",
}) => {
  if (variant === "second") {
    const isDark = theme === "dark"

    return (
      <section
        id={id}
        className={`relative mx-auto w-full max-w-[2800px] scroll-mt-24 px-3 md:px-6 ${className}`}
      >
        {/* Bingkai Luar Editorial Spesifikasi dengan Siku L Tembaga */}
        <div
          className={`relative border p-2 md:p-3 transition-colors duration-500 ${
            isDark
              ? "border-[#FAF6F0]/25 bg-[#1F1E1B]/95 shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
              : "border-[#1C1C1A]/50 bg-[#E6DDD0]/60"
          }`}
        >
          <EditorialCornerBracket position="top-left" theme={theme} />
          <EditorialCornerBracket position="top-right" theme={theme} />
          <EditorialCornerBracket position="bottom-left" theme={theme} />
          <EditorialCornerBracket position="bottom-right" theme={theme} />

          {/* Bar Indikator Mistar Skala Atas */}
          <div
            aria-hidden="true"
            className={`mb-2 hidden items-center justify-between px-2 font-mono text-[9px] tracking-[0.22em] uppercase transition-colors duration-500 md:flex ${
              isDark ? "text-[#A8A399]" : "text-[#736E65]"
            }`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`inline-block h-2 w-2 rounded-full transition-colors duration-500 ${
                  isDark ? "bg-[#D48B47]" : "bg-[#A3724B]"
                }`}
              />
              <span>CAD // SPEC-INSERT REV 2.4</span>
            </div>
            <div className="flex items-center gap-6 opacity-60">
              <span>00</span>
              <span>|</span>
              <span>25</span>
              <span>|</span>
              <span>50</span>
              <span>|</span>
              <span>75</span>
              <span>|</span>
              <span>100 MM</span>
            </div>
            <span>SCALE 1 : 100</span>
          </div>

          {/* Kertas Vellum Dalam dengan Garis Tepi Putus-putus Teknis di Samping */}
          <div
            className={`relative overflow-hidden border transition-colors duration-500 ${
              isDark
                ? "border-[#FAF6F0]/20 bg-[#161514] shadow-[inset_0_0_60px_rgba(0,0,0,0.55)]"
                : "border-[#1C1C1A]/80 bg-[#F2ECE1] shadow-[inset_0_0_40px_rgba(28,28,26,0.03)]"
            }`}
          >
            <PaperTexture
              src={paperSrc ?? "/paper-texture-2.jpg"}
              opacity={isDark ? 0.14 : 0.25}
            />

            {/* Aksen Garis Lipat Vertikal Kiri & Kanan (Blueprint Fold Margin) */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 left-3 z-10 hidden w-px border-l border-dashed lg:block ${
                isDark ? "border-[#FAF6F0]/15" : "border-[#1C1C1A]/20"
              }`}
            />
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 right-3 z-10 hidden w-px border-r border-dashed lg:block ${
                isDark ? "border-[#FAF6F0]/15" : "border-[#1C1C1A]/20"
              }`}
            />

            <div className="relative z-10">{children}</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[2800px] scroll-mt-24 px-3 md:px-6 ${className}`}
    >
      {/* Bingkai Luar dengan Garis yang Ditarik Otomatis (Line-Drawing Animation) */}
      <div className="relative p-[14px]">
        {/* 1. Garis Atas: ditarik dari kiri ke kanan */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ ...drawTransition, delay: 0.1 }}
          style={{ originX: 0 }}
          className="absolute inset-x-0 top-0 h-[1px] bg-[#1C1C1A]"
        />

        {/* 2. Garis Kanan: ditarik dari atas ke bawah */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ ...drawTransition, delay: 0.35 }}
          style={{ originY: 0 }}
          className="absolute inset-y-0 right-0 w-[1px] bg-[#1C1C1A]"
        />

        {/* 3. Garis Bawah: ditarik dari kanan ke kiri */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ ...drawTransition, delay: 0.6 }}
          style={{ originX: 1 }}
          className="absolute inset-x-0 bottom-0 h-[1px] bg-[#1C1C1A]"
        />

        {/* 4. Garis Kiri: ditarik dari bawah ke atas */}
        <motion.span
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ ...drawTransition, delay: 0.85 }}
          style={{ originY: 1 }}
          className="absolute inset-y-0 left-0 w-[1px] bg-[#1C1C1A]"
        />

        {/* Tanda Bidik Sudut CAD (Registration Marks) dengan delay sinkron per sudut */}
        <RegistrationMark corner="top-left" delay={0.15} />
        <RegistrationMark corner="top-right" delay={0.4} />
        <RegistrationMark corner="bottom-right" delay={0.65} />
        <RegistrationMark corner="bottom-left" delay={0.9} />

        {/* Garis Tepi Dalam + Tekstur Kertas dengan kemunculan halus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.995 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border border-[#1C1C1A]/40 bg-[#EBE3D7]"
        >
          <PaperTexture src={paperSrc} />
          <div className="relative z-10">{children}</div>
        </motion.div>
      </div>
    </section>
  )
}

export { PaperTexture, RegistrationMark }
export default DrawingSheet
