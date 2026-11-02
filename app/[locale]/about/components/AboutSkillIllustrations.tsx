"use client"

import React from "react"
import { motion } from "framer-motion"

/**
 * 1. Ilustrasi Web Development (Miniatur Browser & Dashboard UI)
 * Animasi aktif terus-menerus:
 * - Grafik batang analitik naik-turun secara independen
 * - Kursor arsitektur melayang di atas dashboard dan melakukan efek klik
 * - Indikator bar metrik berkedip halus
 */
export function WebIllustration() {
  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border border-[#1C1C1A]/15 bg-[#EBE3D7] p-3 oda-mm-grid-fine">
      {/* Jendela Browser */}
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative h-34 w-52 rounded-lg border border-[#1C1C1A]/35 bg-[#F5F2EB] p-2.5 shadow-[0_6px_18px_rgba(28,28,26,0.08)]"
      >
        {/* Top Bar Browser (3 Titik + Address Bar) */}
        <div className="flex items-center justify-between border-b border-[#1C1C1A]/15 pb-1.5">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#A3724B]" />
            <span className="h-2 w-2 rounded-full bg-[#D49B6A]" />
            <span className="h-2 w-2 rounded-full bg-[#1C1C1A]/40" />
          </div>
          <div className="h-1.5 w-16 rounded-full bg-[#1C1C1A]/10" />
          <div className="flex gap-1">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-3 rounded-full bg-[#A3724B]"
            />
            <span className="h-1.5 w-3 rounded-full bg-[#1C1C1A]/15" />
          </div>
        </div>

        {/* Isi Dashboard (Sidebar + Main Area) */}
        <div className="mt-2 grid grid-cols-12 gap-2">
          {/* Sidebar */}
          <div className="col-span-3 space-y-1.5 border-r border-[#1C1C1A]/10 pr-1.5">
            <div className="h-5 w-full rounded bg-[#1C1C1A]/10" />
            <motion.div
              animate={{ width: ["100%", "70%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 rounded-full bg-[#A3724B]/60"
            />
            <div className="h-1.5 w-3/4 rounded-full bg-[#1C1C1A]/15" />
            <div className="h-1.5 w-5/6 rounded-full bg-[#1C1C1A]/15" />
          </div>

          {/* Konten Kanan */}
          <div className="col-span-9 space-y-2">
            {/* 3 Kartu Metrik Atas */}
            <div className="grid grid-cols-3 gap-1">
              <div className="h-5 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-1">
                <div className="mt-2 h-1 w-full rounded-full bg-[#1C1C1A]" />
              </div>
              <motion.div
                animate={{
                  borderColor: [
                    "rgba(163,114,75,0.3)",
                    "rgba(163,114,75,0.9)",
                    "rgba(163,114,75,0.3)",
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                className="h-5 rounded border bg-[#A3724B]/15 p-1"
              >
                <div className="mt-2 h-1 w-full rounded-full bg-[#A3724B]" />
              </motion.div>
              <div className="h-5 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-1">
                <div className="mt-2 h-1 w-full rounded-full bg-[#8C5E38]" />
              </div>
            </div>

            {/* Area Grafik Batang Hidup + List Baris */}
            <div className="grid grid-cols-12 gap-1.5 pt-0.5">
              {/* Grafik Batang Bergerak Otomatis */}
              <div className="col-span-5 flex h-11 items-end justify-between rounded border border-[#1C1C1A]/15 bg-[#EBE3D7]/60 px-1.5 pb-1">
                <motion.span
                  animate={{ height: ["35%", "75%", "45%", "35%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 rounded-t bg-[#1C1C1A]/50"
                />
                <motion.span
                  animate={{ height: ["80%", "40%", "90%", "80%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 rounded-t bg-[#A3724B]"
                />
                <motion.span
                  animate={{ height: ["50%", "85%", "35%", "50%"] }}
                  transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 rounded-t bg-[#8C5E38]"
                />
                <motion.span
                  animate={{ height: ["65%", "35%", "80%", "65%"] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 rounded-t bg-[#1C1C1A]"
                />
              </div>

              {/* List Item Kanan */}
              <div className="col-span-7 space-y-1.5">
                <div className="flex items-center gap-1 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7]/50 p-1">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#A3724B]/60" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 w-3/4 rounded-full bg-[#1C1C1A]/40" />
                    <div className="h-1 w-1/2 rounded-full bg-[#1C1C1A]/20" />
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7]/50 p-1">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#1C1C1A]/30" />
                  <div className="flex-1 space-y-1">
                    <div className="h-1 w-2/3 rounded-full bg-[#1C1C1A]/40" />
                    <div className="h-1 w-1/3 rounded-full bg-[#1C1C1A]/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ikon Kursor Arsitektur Bergerak Otomatis */}
        <motion.svg
          viewBox="0 0 24 24"
          animate={{
            x: [0, -22, -10, 0],
            y: [0, -14, -4, 0],
            scale: [1, 0.9, 1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-6 bottom-3 h-4 w-4 fill-[#1C1C1A] stroke-[#F5F2EB] stroke-1 drop-shadow-xs"
        >
          <path d="M4 4l16 6.5-7 2-2 7L4 4z" />
        </motion.svg>
      </motion.div>
    </div>
  )
}

/**
 * 2. Ilustrasi Backend & API (Flowchart Server, REST API Node & Database)
 * Animasi aktif terus-menerus:
 * - Paket data (titik tembaga) mengalir di sepanjang jalur konektor menuju API Gateway dan Database
 * - Indikator status server berkedip dan spinner autentikasi berputar
 */
export function BackendIllustration() {
  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border border-[#1C1C1A]/15 bg-[#EBE3D7] p-3 oda-mm-grid-fine">
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative h-34 w-52 rounded-lg border border-[#1C1C1A]/35 bg-[#F5F2EB] p-2.5 shadow-[0_6px_18px_rgba(28,28,26,0.08)]"
      >
        {/* Top Bar */}
        <div className="flex items-center gap-1 border-b border-[#1C1C1A]/15 pb-1.5">
          <span className="h-2 w-2 rounded-full bg-[#A3724B]" />
          <span className="h-2 w-2 rounded-full bg-[#D49B6A]" />
          <span className="h-2 w-2 rounded-full bg-[#1C1C1A]/40" />
          <span className="ml-auto font-mono text-[7px] tracking-widest text-[#736E65]">
            API // ARCH
          </span>
        </div>

        {/* Diagram Arsitektur Node */}
        <div className="relative mt-2 flex h-24 flex-col items-center justify-between">
          {/* Baris Atas: Client Request & Auth Node */}
          <div className="z-10 flex w-full items-center justify-between px-1.5">
            <motion.div
              animate={{ y: [0, -1.5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded border border-[#1C1C1A]/30 bg-[#EBE3D7] px-2 py-1"
            >
              <div className="h-1 w-7 rounded-full bg-[#A3724B]" />
              <div className="mt-1 h-1 w-4 rounded-full bg-[#1C1C1A]/40" />
            </motion.div>
            <div className="flex h-6 w-8 items-center justify-center rounded border border-[#1C1C1A]/30 bg-[#EBE3D7]">
              <span className="h-2.5 w-2.5 animate-spin rounded-full border border-[#A3724B] border-t-transparent" />
            </div>
          </div>

          {/* Garis Konektor SVG + Paket Data Mengalir */}
          <svg
            viewBox="0 0 180 96"
            className="pointer-events-none absolute inset-0 h-full w-full stroke-[#1C1C1A]/35"
            fill="none"
          >
            <path d="M 28 22 L 28 46 L 90 46" strokeWidth="1.2" />
            <path d="M 152 22 L 152 46 L 90 46" strokeWidth="1.2" />
            <path
              d="M 90 54 L 90 76"
              strokeWidth="1.2"
              strokeDasharray="2.5 2.5"
            />

            {/* Titik Paket Data Mengalir Kiri -> Tengah */}
            <motion.circle
              r="2.3"
              fill="#A3724B"
              stroke="none"
              animate={{
                cx: [28, 28, 90],
                cy: [22, 46, 46],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Titik Paket Data Mengalir Tengah -> Database */}
            <motion.circle
              r="2.3"
              fill="#1C1C1A"
              stroke="none"
              animate={{
                cx: [90, 90],
                cy: [52, 76],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                delay: 0.8,
                ease: "easeInOut",
              }}
            />
          </svg>

          {/* Baris Tengah: Main Server / NestJS Gateway */}
          <div className="z-10 flex w-28 items-center justify-between rounded border border-[#1C1C1A] bg-[#1C1C1A] px-2.5 py-1.5 text-[#F5F2EB] shadow-xs">
            <div className="space-y-1">
              <div className="h-1 w-11 rounded-full bg-[#F5F2EB]/85" />
              <div className="h-1 w-7 rounded-full bg-[#F5F2EB]/40" />
            </div>
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A3724B]" />
              <motion.span
                animate={{ opacity: [1, 0.25, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-[#16A34A]"
              />
            </div>
          </div>

          {/* Baris Bawah: Silinder Database (PostgreSQL / Supabase) */}
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="z-10 flex h-6 w-20 flex-col items-center justify-center rounded-full border border-[#1C1C1A]/50 bg-[#E2D9CB] shadow-2xs"
          >
            <div className="h-1 w-10 rounded-full bg-[#1C1C1A]/50" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

/**
 * 3. Ilustrasi AI & Machine Learning (Hub Orbits & LLM Pipeline)
 * Animasi aktif terus-menerus:
 * - Cincin orbit putus-putus beserta satelit titik tembaga berputar 360 derajat tanpa henti
 * - Inti Gemini AI di tengah berdenyut (pulsing)
 * - Grafik gelombang di node kiri bergerak naik-turun
 */
export function AiIllustration() {
  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border border-[#1C1C1A]/15 bg-[#EBE3D7] p-3 oda-mm-grid-fine">
      <motion.div
        whileHover={{ y: -3, scale: 1.02 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative h-34 w-52 rounded-lg border border-[#1C1C1A]/35 bg-[#F5F2EB] p-2.5 shadow-[0_6px_18px_rgba(28,28,26,0.08)]"
      >
        {/* Top Bar */}
        <div className="flex items-center gap-1 border-b border-[#1C1C1A]/15 pb-1.5">
          <span className="h-2 w-2 rounded-full bg-[#A3724B]" />
          <span className="h-2 w-2 rounded-full bg-[#D49B6A]" />
          <span className="h-2 w-2 rounded-full bg-[#1C1C1A]/40" />
          <span className="ml-auto font-mono text-[7px] tracking-widest text-[#A3724B]">
            GEMINI // LLM
          </span>
        </div>

        {/* Area Lingkaran Orbit & Node AI */}
        <div className="relative mt-1.5 flex h-24 items-center justify-center">
          {/* Cincin Orbit Berputar 360 Derajat Beserta Titik Satelit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="relative h-20 w-20 rounded-full border border-dashed border-[#1C1C1A]/35"
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#A3724B] shadow-xs" />
            <span className="absolute bottom-1 left-1 h-1.5 w-1.5 rounded-full bg-[#1C1C1A]/60" />
          </motion.div>

          {/* Inti Tengah (AI Core) Berdenyut */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute flex h-9 w-9 items-center justify-center rounded-lg border border-[#1C1C1A] bg-[#1C1C1A] text-[#F5F2EB] shadow-sm"
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="font-serif text-sm italic text-[#D49B6A]"
            >
              ✦
            </motion.span>
          </motion.div>

          {/* 4 Node Satelit (Atas, Bawah, Kiri, Kanan) */}
          <div className="absolute top-0 flex h-5 w-6 items-center justify-center rounded border border-[#1C1C1A]/25 bg-[#EBE3D7] font-mono text-[8px] font-bold text-[#A3724B]">
            {"<>"}
          </div>
          <div className="absolute bottom-0 flex h-5 w-6 items-center justify-center rounded border border-[#1C1C1A]/25 bg-[#EBE3D7] font-mono text-[8px] text-[#1C1C1A]">
            ≡
          </div>
          <div className="absolute left-7 flex h-5 w-6 items-end justify-center gap-0.5 rounded border border-[#1C1C1A]/25 bg-[#EBE3D7] p-1">
            <motion.span
              animate={{ height: ["35%", "90%", "35%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 bg-[#1C1C1A]"
            />
            <motion.span
              animate={{ height: ["90%", "40%", "90%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 bg-[#A3724B]"
            />
            <motion.span
              animate={{ height: ["50%", "85%", "50%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 bg-[#8C5E38]"
            />
          </div>
          <div className="absolute right-7 flex h-5 w-6 items-center justify-center rounded border border-[#1C1C1A]/25 bg-[#EBE3D7]">
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="h-2.5 w-2.5 rounded-full border border-dashed border-[#A3724B]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/**
 * 4. Ilustrasi Mobile Development (Mockup Smartphone & App Analytics)
 * Animasi aktif terus-menerus:
 * - 5 grafik batang di dalam layar smartphone bergerak naik-turun
 * - Kartu notifikasi bawah berdenyut halus
 */
export function MobileIllustration() {
  return (
    <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border border-[#1C1C1A]/15 bg-[#EBE3D7] p-3 oda-mm-grid-fine">
      {/* Bodi Smartphone */}
      <motion.div
        whileHover={{ y: -4, rotate: -1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative flex h-36 w-24 flex-col justify-between rounded-xl border border-[#1C1C1A]/45 bg-[#F5F2EB] p-2 shadow-[0_6px_18px_rgba(28,28,26,0.08)]"
      >
        {/* Speaker Notch & Status Bar */}
        <div>
          <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-[#1C1C1A]/30" />
          <div className="flex items-center justify-between border-b border-[#1C1C1A]/10 pb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#A3724B]" />
            <span className="h-1 w-3 rounded-full bg-[#1C1C1A]/30" />
          </div>
        </div>

        {/* 3 Widget Atas */}
        <div className="grid grid-cols-3 gap-1">
          <div className="h-4 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-0.5">
            <div className="mt-2 h-0.5 w-full bg-[#1C1C1A]" />
          </div>
          <div className="h-4 rounded border border-[#A3724B]/40 bg-[#A3724B]/15 p-0.5">
            <div className="mt-2 h-0.5 w-full bg-[#A3724B]" />
          </div>
          <div className="h-4 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-0.5">
            <div className="mt-2 h-0.5 w-full bg-[#8C5E38]" />
          </div>
        </div>

        {/* Grafik Batang Mobile Hidup di Tengah */}
        <div className="flex h-10 items-end justify-between rounded border border-[#1C1C1A]/15 bg-[#EBE3D7]/70 px-1.5 pb-1">
          <motion.span
            animate={{ height: ["35%", "70%", "35%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 rounded-t bg-[#1C1C1A]/50"
          />
          <motion.span
            animate={{ height: ["75%", "40%", "75%"] }}
            transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 rounded-t bg-[#A3724B]"
          />
          <motion.span
            animate={{ height: ["45%", "85%", "45%"] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 rounded-t bg-[#8C5E38]"
          />
          <motion.span
            animate={{ height: ["85%", "45%", "85%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 rounded-t bg-[#1C1C1A]"
          />
          <motion.span
            animate={{ height: ["55%", "90%", "55%"] }}
            transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 rounded-t bg-[#D49B6A]"
          />
        </div>

        {/* Card Notifikasi Bawah & Navigasi Android/iOS */}
        <div className="space-y-1.5">
          <motion.div
            animate={{ x: [0, 1.5, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-1 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-1"
          >
            <span className="h-2 w-2 rounded-xs bg-[#A3724B]" />
            <div className="h-1 w-8 rounded-full bg-[#1C1C1A]/40" />
          </motion.div>
          <div className="flex justify-around pt-0.5 text-[6px] text-[#1C1C1A]/40">
            <span>◀</span>
            <span>●</span>
            <span>■</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
