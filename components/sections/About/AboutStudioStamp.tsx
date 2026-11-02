"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion"
import { STUDIO_STAMP_CONFIG } from "./constants"

/**
 * Menghasilkan 36 garis derajat (setiap 10°) di sekeliling tepi dalam lingkaran kompas (r = 42).
 * Arah mata angin utama (0°, 90°, 180°, 270°) memiliki garis yang lebih panjang.
 */
const COMPASS_TICKS = Array.from({ length: 36 }, (_, i) => {
  const deg = i * 10
  const rad = ((deg - 90) * Math.PI) / 180
  const isCardinal = deg % 90 === 0
  const outerR = 42
  const innerR = isCardinal ? 36.5 : 39.2

  return {
    deg,
    isCardinal,
    x1: (50 + outerR * Math.cos(rad)).toFixed(2),
    y1: (50 + outerR * Math.sin(rad)).toFixed(2),
    x2: (50 + innerR * Math.cos(rad)).toFixed(2),
    y2: (50 + innerR * Math.sin(rad)).toFixed(2),
  }
})

/**
 * Komponen AboutStudioStamp — Architectural Sun-Path Compass
 * - Menggambar kompas azimut arsitektur dengan denah bangunan di pusat (50, 50)
 * - Memiliki busur lintasan matahari putus-putus dari W (Barat) -> S (Selatan) -> E (Timur)
 * - Saat di-scroll turun:
 *   1. Seluruh kompas meluncur turun mengikuti tinggi kolom manifesto
 *   2. Titik matahari tembaga bergerak mulus menyusuri garis busur putus-putus dari W -> S -> E
 */
export const AboutStudioStamp: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null)
  const stampRef = useRef<HTMLDivElement>(null)
  const sunDotRef = useRef<SVGCircleElement>(null)
  const sunRayRef = useRef<SVGLineElement>(null)
  const [maxTravel, setMaxTravel] = useState(140)

  // Mengukur jarak luncur vertikal maksimum di dalam kolom kiri
  useEffect(() => {
    const track = trackRef.current
    const stamp = stampRef.current
    if (!track || !stamp) return

    const updateBounds = () => {
      const travel = Math.max(0, track.offsetHeight - stamp.offsetHeight - 8)
      setMaxTravel(travel)
    }

    updateBounds()

    const observer = new ResizeObserver(updateBounds)
    observer.observe(track)
    observer.observe(stamp)

    return () => observer.disconnect()
  }, [])

  // Melacak progress scroll seksi manifesto secara langsung & responsif
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 25%"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  })

  // 1. Posisi Y kompas meluncur turun dari atas (0px) ke bawah kolom (maxTravel)
  const translateY = useTransform(smoothProgress, [0, 1], [0, maxTravel])

  // 2. Menggerakkan titik matahari & garis sinar di sepanjang busur elips: x = 50 + 42*cos(θ), y = 50 + 30*sin(θ)
  useMotionValueEvent(smoothProgress, "change", (progress) => {
    // Menyapu dari Barat (θ = 0.92π) melewati Selatan (θ = 0.5π) menuju Timur-Tenggara (θ = 0.08π)
    const startAngle = Math.PI * 0.92
    const endAngle = Math.PI * 0.08
    const theta = startAngle + (endAngle - startAngle) * progress

    const sunX = (50 + 42 * Math.cos(theta)).toFixed(2)
    const sunY = (50 + 30 * Math.sin(theta)).toFixed(2)

    if (sunDotRef.current) {
      sunDotRef.current.setAttribute("cx", sunX)
      sunDotRef.current.setAttribute("cy", sunY)
    }
    if (sunRayRef.current) {
      sunRayRef.current.setAttribute("x2", sunX)
      sunRayRef.current.setAttribute("y2", sunY)
    }
  })

  return (
    <div ref={trackRef} className="hidden lg:col-span-2 lg:block">
      <div className="relative h-full">
        <motion.div
          ref={stampRef}
          style={{ y: translateY }}
          className="inline-flex flex-col items-start space-y-3 will-change-transform"
        >
          {/* SVG Diagram Kompas Lintasan Matahari (Architectural Sun-Path) */}
          <svg
            width="96"
            height="96"
            viewBox="0 0 100 100"
            fill="none"
            className="overflow-visible text-[#1C1C1A]"
            aria-label="Architectural Sun-Path Compass"
          >
            {/* 1. Lingkaran Luar Kompas Utama */}
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="currentColor"
              strokeWidth="1.2"
            />

            {/* 2. Garis-Garis Derajat (36 Tick Marks setiap 10° menggunakan innerR) */}
            {COMPASS_TICKS.map((tick) => (
              <line
                key={tick.deg}
                x1={tick.x1}
                y1={tick.y1}
                x2={tick.x2}
                y2={tick.y2}
                stroke="currentColor"
                strokeWidth={tick.isCardinal ? "1.1" : "0.75"}
                strokeOpacity={tick.isCardinal ? "0.9" : "0.55"}
              />
            ))}

            {/* 3. Lingkaran Referensi Dalam Tipis */}
            <circle
              cx="50"
              cy="50"
              r="27"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeOpacity="0.18"
            />

            {/* 4. Label Mata Angin (N, E, S, W) */}
            <text
              x="50"
              y="21"
              textAnchor="middle"
              className="fill-[#1C1C1A]/75 font-mono text-[7.5px] font-medium"
            >
              N
            </text>
            <text
              x="80"
              y="52.5"
              textAnchor="middle"
              className="fill-[#1C1C1A]/75 font-mono text-[7.5px] font-medium"
            >
              E
            </text>
            <text
              x="50"
              y="84"
              textAnchor="middle"
              className="fill-[#1C1C1A]/75 font-mono text-[7.5px] font-medium"
            >
              S
            </text>
            <text
              x="20"
              y="52.5"
              textAnchor="middle"
              className="fill-[#1C1C1A]/75 font-mono text-[7.5px] font-medium"
            >
              W
            </text>

            {/* 5. Busur Lintasan Matahari Putus-Putus Tembaga (Dari W ke E melewati S) */}
            <path
              d="M 8 50 A 42 30 0 0 0 92 50"
              stroke="#A3724B"
              strokeWidth="1"
              strokeDasharray="2.5 2.5"
            />

            {/* 6. Denah Bangunan di Titik Pusat (50, 50) */}
            <rect
              x="42"
              y="45.5"
              width="16"
              height="9"
              stroke="currentColor"
              strokeWidth="1.25"
              fill="#F2ECE1"
            />
            <line
              x1="42"
              y1="50"
              x2="58"
              y2="50"
              stroke="currentColor"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />

            {/* 7. Garis Sinar Matahari dari Pusat (50, 50) ke Titik Matahari */}
            <line
              ref={sunRayRef}
              x1="50"
              y1="50"
              x2="9.32"
              y2="57.46"
              stroke="#A3724B"
              strokeWidth="1.1"
            />

            {/* 8. Titik Bulat Matahari Tembaga pada Busur */}
            <circle
              ref={sunDotRef}
              cx="9.32"
              cy="57.46"
              r="3.6"
              fill="#A3724B"
            />
          </svg>

          {/* Teks Keterangan di Bawah Kompas */}
          <div className="space-y-0.5 pl-1">
            <div className="font-mono text-[9px] font-semibold tracking-[0.2em] uppercase text-[#A3724B]">
              {STUDIO_STAMP_CONFIG.code}
            </div>
            <p className="font-mono text-[10px] leading-relaxed tracking-[0.14em] uppercase text-[#736E65]">
              {STUDIO_STAMP_CONFIG.line1}
              <br />
              {STUDIO_STAMP_CONFIG.line2}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutStudioStamp
