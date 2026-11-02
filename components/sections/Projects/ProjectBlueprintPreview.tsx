import React from "react"
import { ProjectData, SubSheetData } from "./constants"

interface HeroPreviewProps {
  project: ProjectData
}

/**
 * Komponen HeroProjectPreview
 * Merender visualisasi UI & Arsitektur Sistem yang dirancang khusus untuk ke-6 proyek asli Nuril Anwar
 * (menggantikan foto bangunan arsitektur dari gambar referensi dengan tampilan aplikasi & sistem nyata).
 */
export const HeroProjectPreview: React.FC<HeroPreviewProps> = ({ project }) => {
  switch (project.previewTheme) {
    case "sipasi-pdam":
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-[#1C1C1A] p-3.5 text-[#F5F2EB] sm:p-5 md:p-6">
          {/* Browser Top Bar */}
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-2.5 font-mono text-[9px] tracking-wider text-[#F5F2EB]/70 sm:text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#A3724B]" />
              <span className="h-2 w-2 rounded-full bg-[#F5F2EB]/30" />
              <span className="h-2 w-2 rounded-full bg-[#F5F2EB]/30" />
              <span className="ml-2 text-[#F5F2EB]">
                sipasi.pdam-surakarta.id/dashboard
              </span>
            </div>
            <span className="rounded bg-[#A3724B]/25 px-2 py-0.5 text-[8.5px] text-[#D49B6A]">
              NEXT.JS 16 · PRISMA · POSTGRESQL
            </span>
          </div>

          {/* Main Dashboard Grid */}
          <div className="my-auto grid grid-cols-12 gap-3 py-3 sm:gap-4">
            {/* Left: Disposition Table & Multi-Role Workflow */}
            <div className="col-span-12 flex flex-col justify-between rounded border border-[#F5F2EB]/15 bg-[#252422] p-3 sm:col-span-8 sm:p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[8.5px] tracking-[0.16em] uppercase text-[#D49B6A]">
                    PDAM TIRTA MAKMUR SURAKARTA
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-[#F5F2EB] sm:text-base">
                    Multi-Role Correspondence &amp; Disposition
                  </div>
                </div>
                <span className="border border-[#D49B6A]/40 bg-[#D49B6A]/10 px-2 py-0.5 font-mono text-[8.5px] text-[#D49B6A]">
                  ROLE: SEKRETARIAT / ADMIN
                </span>
              </div>

              {/* Disposition Rows */}
              <div className="mt-3 space-y-1.5 font-mono text-[9.5px]">
                <div className="flex items-center justify-between rounded bg-[#1C1C1A]/80 px-2.5 py-1.5">
                  <span className="text-[#F5F2EB]">
                    #SRT-0412 · Disposisi Direksi Utama
                  </span>
                  <span className="text-[#D49B6A]">● QR SIGNED</span>
                </div>
                <div className="flex items-center justify-between rounded bg-[#1C1C1A]/80 px-2.5 py-1.5">
                  <span className="text-[#F5F2EB]/85">
                    #SRT-0413 · Permohonan Teknis Distribusi
                  </span>
                  <span className="text-[#F5F2EB]/60">→ KABAG TEKNIK</span>
                </div>
                <div className="hidden items-center justify-between rounded bg-[#1C1C1A]/80 px-2.5 py-1.5 sm:flex">
                  <span className="text-[#F5F2EB]/85">
                    #SRT-0414 · Laporan Audit Internal Bulanan
                  </span>
                  <span className="text-emerald-400">✓ ARCHIVED</span>
                </div>
              </div>

              {/* Metrics Strip */}
              <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#F5F2EB]/10 pt-2.5 font-mono text-[9px]">
                <div>
                  <div className="text-[#F5F2EB]/50">WORKFLOW</div>
                  <div className="text-[#F5F2EB]">100% Paperless</div>
                </div>
                <div>
                  <div className="text-[#F5F2EB]/50">ORM ENGINE</div>
                  <div className="text-[#F5F2EB]">Prisma + PG</div>
                </div>
                <div>
                  <div className="text-[#F5F2EB]/50">SECURITY</div>
                  <div className="text-[#D49B6A]">Audit Logged</div>
                </div>
              </div>
            </div>

            {/* Right: Dynamic QR Digital Signature PDF Card */}
            <div className="col-span-12 hidden flex-col justify-between rounded border border-[#D49B6A]/40 bg-[#F5F2EB] p-3.5 text-[#1C1C1A] sm:col-span-4 sm:flex">
              <div className="flex items-center justify-between border-b border-[#1C1C1A]/15 pb-1.5 font-mono text-[8.5px] uppercase">
                <span className="font-semibold">PDF QR STAMP</span>
                <span className="text-[#8C5E38]">VERIFIED</span>
              </div>

              {/* Simulated QR Matrix */}
              <div className="my-2 flex flex-col items-center justify-center">
                <div className="grid h-16 w-16 grid-cols-5 gap-1 border border-[#1C1C1A] bg-white p-1.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <span
                      key={i}
                      className={
                        [0, 1, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 21, 23, 24].includes(
                          i
                        )
                          ? "bg-[#1C1C1A]"
                          : "bg-[#EBE3D7]"
                      }
                    />
                  ))}
                </div>
                <div className="mt-2 font-mono text-[8.5px] tracking-wider text-[#55534E]">
                  SHA256 // E-SIGN PDAM
                </div>
              </div>

              <div className="border-t border-[#1C1C1A]/15 pt-1.5 font-mono text-[8px] text-[#55534E]">
                Embedded directly into official PDF disposition sheets.
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex items-center justify-between border-t border-[#F5F2EB]/15 pt-2 font-mono text-[8.5px] tracking-widest uppercase text-[#F5F2EB]/60">
            <span>INTERNSHIP BUILD · APR – MEI 2026</span>
            <span>MULTI-ROLE RBAC · QR SIGNATURE</span>
          </div>
        </div>
      )

    case "nusa-terminal":
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-[#161615] p-3.5 text-[#F5F2EB] sm:p-5 md:p-6">
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-2.5 font-mono text-[9px] tracking-wider">
            <div className="flex items-center gap-2">
              <span className="bg-[#A3724B] px-1.5 py-0.5 font-bold text-[#F5F2EB]">
                NUSA//TERMINAL
              </span>
              <span className="text-[#F5F2EB]/70">
                IDX RETAIL BLOOMBERG · FASTAPI + RAG
              </span>
            </div>
            <span className="text-[#D49B6A]">IHSG 7,482.10 (+1.18%)</span>
          </div>

          {/* Main Content: Market Chart + IndoBERT & Gemini RAG */}
          <div className="my-auto grid grid-cols-12 gap-3 py-3 sm:gap-4">
            {/* Left: Candlestick / Signal Feed */}
            <div className="col-span-12 flex flex-col justify-between rounded border border-[#F5F2EB]/15 bg-[#1F1E1C] p-3 sm:col-span-7 sm:p-4">
              <div className="flex items-center justify-between font-mono text-[9px]">
                <span className="text-[#D49B6A]">
                  REAL-TIME YFINANCE STREAM &amp; SIGNALS
                </span>
                <span className="text-emerald-400">● FASTAPI LIVE</span>
              </div>

              {/* SVG Market Trend Curve */}
              <div className="my-2">
                <svg viewBox="0 0 260 70" className="h-16 w-full overflow-visible">
                  <path
                    d="M 0 58 L 35 48 L 70 52 L 105 34 L 140 38 L 175 22 L 215 26 L 260 8"
                    fill="none"
                    stroke="#D49B6A"
                    strokeWidth="2"
                  />
                  <path
                    d="M 0 58 L 35 48 L 70 52 L 105 34 L 140 38 L 175 22 L 215 26 L 260 8 L 260 68 L 0 68 Z"
                    fill="#A3724B"
                    fillOpacity="0.18"
                  />
                </svg>
              </div>

              {/* IndoBERT Sentiment Badges */}
              <div className="space-y-1 font-mono text-[9px]">
                <div className="flex items-center justify-between rounded bg-[#141413] px-2.5 py-1">
                  <span>INDOBERT // BBCA.JK News Flow</span>
                  <span className="text-emerald-400">BULLISH (0.94)</span>
                </div>
                <div className="flex items-center justify-between rounded bg-[#141413] px-2.5 py-1">
                  <span>INDOBERT // BMRI.JK Macro Report</span>
                  <span className="text-[#D49B6A]">ACCUMULATE (0.87)</span>
                </div>
              </div>
            </div>

            {/* Right: ChromaDB + Gemini 1.5 Flash RAG Assistant */}
            <div className="col-span-12 hidden flex-col justify-between rounded border border-[#D49B6A]/35 bg-[#252320] p-3.5 sm:col-span-5 sm:flex">
              <div className="font-mono text-[8.5px] tracking-widest uppercase text-[#D49B6A]">
                GEMINI 1.5 FLASH · CHROMADB RAG
              </div>
              <div className="my-2 rounded border border-[#F5F2EB]/10 bg-[#181715] p-2.5 font-mono text-[9px] leading-relaxed text-[#F5F2EB]/85">
                <div className="text-[#D49B6A]">&gt; Query: Banking Q3 Sentiment?</div>
                <p className="mt-1 text-[8.5px] text-[#F5F2EB]/75">
                  Retrieved 14 IDX filings via ChromaDB. IndoBERT classifies
                  82% positive credit growth momentum.
                </p>
              </div>
              <div className="flex items-center justify-between font-mono text-[8px] text-[#F5F2EB]/55">
                <span>VECTOR TOP-K: 5</span>
                <span>HACKATHON X DIGDAYA</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#F5F2EB]/15 pt-2 font-mono text-[8.5px] tracking-widest uppercase text-[#F5F2EB]/60">
            <span>PYTHON · FASTAPI · CHROMADB · INDOBERT</span>
            <span>FEB – SEP 2026</span>
          </div>
        </div>
      )

    case "fed-healthcare":
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-[#1D1C1A] p-3.5 text-[#F5F2EB] sm:p-5 md:p-6">
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-2.5 font-mono text-[9px] tracking-wider">
            <span className="text-[#D49B6A]">
              FEDERATED LEARNING + ETHEREUM SMART CONTRACT (SKRIPSI)
            </span>
            <span className="rounded border border-[#F5F2EB]/20 px-2 py-0.5 text-[8.5px]">
              OPACUS DP · SHAP XAI
            </span>
          </div>

          <div className="my-auto grid grid-cols-12 gap-3 py-3 sm:gap-4">
            {/* Left: Federated Hospital Nodes -> Global Aggregator */}
            <div className="col-span-12 flex flex-col justify-between rounded border border-[#F5F2EB]/15 bg-[#262522] p-3 sm:col-span-7 sm:p-4">
              <div className="font-mono text-[9px] uppercase text-[#D49B6A]">
                PRIVACY-PRESERVING DIABETES DETECTION (PYTORCH FEDAVG)
              </div>

              <div className="my-2.5 grid grid-cols-3 gap-2 font-mono text-[8.5px]">
                <div className="rounded border border-[#F5F2EB]/15 bg-[#1B1A18] p-2 text-center">
                  <div className="text-[#D49B6A]">HOSPITAL #01</div>
                  <div className="mt-0.5 text-[#F5F2EB]/70">Local PyTorch</div>
                  <div className="mt-1 text-[8px] text-emerald-400">
                    ΔW Encrypted
                  </div>
                </div>
                <div className="rounded border border-[#F5F2EB]/15 bg-[#1B1A18] p-2 text-center">
                  <div className="text-[#D49B6A]">HOSPITAL #02</div>
                  <div className="mt-0.5 text-[#F5F2EB]/70">Local PyTorch</div>
                  <div className="mt-1 text-[8px] text-emerald-400">
                    ΔW Encrypted
                  </div>
                </div>
                <div className="rounded border border-[#F5F2EB]/15 bg-[#1B1A18] p-2 text-center">
                  <div className="text-[#D49B6A]">HOSPITAL #03</div>
                  <div className="mt-0.5 text-[#F5F2EB]/70">Local PyTorch</div>
                  <div className="mt-1 text-[8px] text-emerald-400">
                    ΔW Encrypted
                  </div>
                </div>
              </div>

              <div className="rounded border border-[#D49B6A]/40 bg-[#181715] px-3 py-2 font-mono text-[9px]">
                <div className="flex items-center justify-between">
                  <span>FASTAPI GLOBAL AGGREGATOR (FedAvg)</span>
                  <span className="text-[#D49B6A]">RAW DATA EXPOSED: 0%</span>
                </div>
              </div>
            </div>

            {/* Right: Solidity KTP Hash + SHAP Explainable AI */}
            <div className="col-span-12 hidden flex-col justify-between rounded border border-[#F5F2EB]/20 bg-[#F5F2EB] p-3.5 text-[#1C1C1A] sm:col-span-5 sm:flex">
              <div>
                <div className="font-mono text-[8.5px] font-semibold tracking-wider uppercase text-[#8C5E38]">
                  SOLIDITY KTP IDENTITY &amp; SHAP XAI
                </div>
                <div className="mt-1 font-mono text-[8.5px] text-[#55534E]">
                  Contract: 0x7F3C...91A4 (Web3.py)
                </div>
              </div>

              {/* SHAP Feature Attribution Bars */}
              <div className="my-2 space-y-1.5 font-mono text-[8.5px]">
                <div>
                  <div className="flex justify-between">
                    <span>Glucose (SHAP +0.42)</span>
                    <span className="font-semibold text-[#8C5E38]">High</span>
                  </div>
                  <div className="mt-0.5 h-1.5 w-full bg-[#1C1C1A]/15">
                    <div className="h-full w-[86%] bg-[#8C5E38]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>BMI Index (SHAP +0.28)</span>
                    <span>Moderate</span>
                  </div>
                  <div className="mt-0.5 h-1.5 w-full bg-[#1C1C1A]/15">
                    <div className="h-full w-[64%] bg-[#1C1C1A]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>HbA1c Level (SHAP +0.35)</span>
                    <span className="font-semibold text-[#8C5E38]">High</span>
                  </div>
                  <div className="mt-0.5 h-1.5 w-full bg-[#1C1C1A]/15">
                    <div className="h-full w-[76%] bg-[#8C5E38]" />
                  </div>
                </div>
              </div>

              <div className="border-t border-[#1C1C1A]/15 pt-1.5 font-mono text-[8px] text-[#55534E]">
                Clinically interpretable AI via Captum &amp; SHAP.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#F5F2EB]/15 pt-2 font-mono text-[8.5px] tracking-widest uppercase text-[#F5F2EB]/60">
            <span>PYTORCH · FASTAPI · SOLIDITY · NEXT.JS</span>
            <span>UNDERGRADUATE THESIS // UMS</span>
          </div>
        </div>
      )

    case "synexa-stroke":
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-[#1F1E1C] p-3.5 text-[#F5F2EB] sm:p-5 md:p-6">
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-2.5 font-mono text-[9px] tracking-wider">
            <span className="text-[#D49B6A]">
              SYNEXA APPS // STROKE MANAGEMENT &amp; REHAB SYSTEM
            </span>
            <span>MTE MALAYSIA &amp; UGM COMPETITION</span>
          </div>

          <div className="my-auto grid grid-cols-12 gap-3 py-3 sm:gap-4">
            {/* Mobile Rehab App Mockup */}
            <div className="col-span-12 flex flex-col justify-between rounded border border-[#D49B6A]/45 bg-[#F5F2EB] p-3.5 text-[#1C1C1A] sm:col-span-5">
              <div className="flex items-center justify-between font-mono text-[8.5px]">
                <span className="font-semibold text-[#8C5E38]">
                  FLUTTER MOBILE CLIENT
                </span>
                <span>CLEAN ARCH</span>
              </div>

              <div className="my-2 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-2.5">
                <div className="font-mono text-[8.5px] uppercase text-[#736E65]">
                  DAILY MOTOR THERAPY
                </div>
                <div className="mt-0.5 text-sm font-semibold">
                  Upper-Limb Flexion #04
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#1C1C1A]/15">
                  <div className="h-full w-[84%] bg-[#8C5E38]" />
                </div>
                <div className="mt-1 flex justify-between font-mono text-[8.5px] text-[#55534E]">
                  <span>Progress: 84%</span>
                  <span>Caregiver Synced</span>
                </div>
              </div>

              <div className="font-mono text-[8px] text-[#55534E]">
                Accessible UI for stroke survivors &amp; caregivers.
              </div>
            </div>

            {/* NestJS Backend API & Telemetry */}
            <div className="col-span-12 hidden flex-col justify-between rounded border border-[#F5F2EB]/15 bg-[#282623] p-3.5 sm:col-span-7 sm:flex">
              <div className="flex items-center justify-between font-mono text-[9px]">
                <span className="text-[#D49B6A]">
                  NESTJS + TYPESCRIPT BACKEND SERVICE
                </span>
                <span className="text-emerald-400">● LOW-LATENCY SYNC</span>
              </div>

              <div className="my-2 space-y-1.5 font-mono text-[9px]">
                <div className="flex items-center justify-between rounded bg-[#181715] px-2.5 py-1.5">
                  <span>POST /api/v1/rehab/telemetry</span>
                  <span className="text-emerald-400">201 CREATED (18ms)</span>
                </div>
                <div className="flex items-center justify-between rounded bg-[#181715] px-2.5 py-1.5">
                  <span>FCM // Caregiver Milestone Dispatch</span>
                  <span className="text-[#D49B6A]">DELIVERED</span>
                </div>
                <div className="flex items-center justify-between rounded bg-[#181715] px-2.5 py-1.5">
                  <span>GET /api/v1/patient/schedule</span>
                  <span className="text-[#F5F2EB]/70">SYNCED</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#F5F2EB]/10 pt-2 font-mono text-[8.5px] text-[#F5F2EB]/60">
                <span>DART (FRONTEND) · TYPESCRIPT (BACKEND)</span>
                <span>SUPABASE + FCM</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#F5F2EB]/15 pt-2 font-mono text-[8.5px] tracking-widest uppercase text-[#F5F2EB]/60">
            <span>FLUTTER · DART · NESTJS · TYPESCRIPT</span>
            <span>HEALTHCARE TELEMETRY</span>
          </div>
        </div>
      )

    case "seger-exergame":
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-[#1B1A18] p-3.5 text-[#F5F2EB] sm:p-5 md:p-6">
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-2.5 font-mono text-[9px] tracking-wider">
            <span className="text-[#D49B6A]">
              SEGER // GAMIFIED MOTION-DETECTION EXERGAME
            </span>
            <span>SAMSUNG INNOVATION</span>
          </div>

          <div className="my-auto grid grid-cols-12 gap-3 py-3 sm:gap-4">
            {/* Left: Camera Pose Skeleton Detection Viewport */}
            <div className="col-span-12 flex flex-col justify-between rounded border border-[#D49B6A]/40 bg-[#252320] p-3.5 sm:col-span-7">
              <div className="flex items-center justify-between font-mono text-[9px]">
                <span className="text-emerald-400">
                  ● CAMERA STREAM ACTIVE (ANDROID / iOS)
                </span>
                <span className="text-[#D49B6A]">REAL-TIME POSE</span>
              </div>

              {/* Stylized Motion Detection Frame */}
              <div className="my-2 flex items-center justify-around rounded border border-dashed border-[#F5F2EB]/25 bg-[#161514] py-3">
                <svg viewBox="0 0 100 70" className="h-16 w-24">
                  {/* Pose Skeleton Lines */}
                  <circle cx="50" cy="14" r="5" fill="#D49B6A" />
                  <line
                    x1="50"
                    y1="19"
                    x2="50"
                    y2="42"
                    stroke="#F5F2EB"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="25"
                    x2="28"
                    y2="14"
                    stroke="#D49B6A"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="25"
                    x2="72"
                    y2="14"
                    stroke="#D49B6A"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="42"
                    x2="34"
                    y2="64"
                    stroke="#F5F2EB"
                    strokeWidth="2"
                  />
                  <line
                    x1="50"
                    y1="42"
                    x2="66"
                    y2="64"
                    stroke="#F5F2EB"
                    strokeWidth="2"
                  />
                </svg>
                <div className="space-y-1 font-mono text-[9px]">
                  <div className="text-[#D49B6A]">QUEST: STAR JUMPS</div>
                  <div className="text-base font-bold text-[#F5F2EB]">
                    REP COUNTER: 18 / 20
                  </div>
                  <div className="text-[8px] text-emerald-400">
                    MOTION CONFIDENCE: 96.4%
                  </div>
                </div>
              </div>

              <div className="font-mono text-[8.5px] text-[#F5F2EB]/65">
                Hardware camera lifecycle &amp; permission guard verified.
              </div>
            </div>

            {/* Right: Gamification & Widget Testing */}
            <div className="col-span-12 hidden flex-col justify-between rounded border border-[#F5F2EB]/20 bg-[#F5F2EB] p-3.5 text-[#1C1C1A] sm:col-span-5 sm:flex">
              <div className="font-mono text-[8.5px] font-semibold uppercase text-[#8C5E38]">
                GAMIFICATION &amp; QA ENGINE
              </div>
              <div className="space-y-2 font-mono text-[9px]">
                <div className="rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-2">
                  <div className="text-[8px] text-[#736E65]">DAILY STREAK</div>
                  <div className="font-semibold">★ 7-Day Active Kid Badge</div>
                </div>
                <div className="rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-2">
                  <div className="text-[8px] text-[#736E65]">TEST SUITE</div>
                  <div className="font-semibold">Flutter Widget Tests Pass</div>
                </div>
              </div>
              <div className="font-mono text-[8px] text-[#55534E]">
                Encouraging pediatric physical activity through active play.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#F5F2EB]/15 pt-2 font-mono text-[8.5px] tracking-widest uppercase text-[#F5F2EB]/60">
            <span>FLUTTER · DART · ANDROID/iOS CAMERA APIS</span>
            <span>SAMSUNG INNOVATION</span>
          </div>
        </div>
      )

    case "girantra-ai":
    default:
      return (
        <div className="relative flex h-full w-full flex-col justify-between bg-[#1C1B19] p-3.5 text-[#F5F2EB] sm:p-5 md:p-6">
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-2.5 font-mono text-[9px] tracking-wider">
            <span className="text-[#D49B6A]">
              GIRANTRA AGRI-AI &amp; MONEY TRACKER ECOSYSTEM
            </span>
            <span>GEMINI 2.0 FLASH · SUPABASE</span>
          </div>

          <div className="my-auto grid grid-cols-12 gap-3 py-3 sm:gap-4">
            {/* Left: Girantra AI Marketplace */}
            <div className="col-span-12 flex flex-col justify-between rounded border border-[#F5F2EB]/15 bg-[#262421] p-3.5 sm:col-span-7">
              <div className="flex items-center justify-between font-mono text-[9px]">
                <span className="text-[#D49B6A]">
                  GIRANTRA // AI AGRICULTURAL MARKETPLACE
                </span>
                <span>FLUTTER + GEMINI 2.0</span>
              </div>

              <div className="my-2 space-y-1.5 font-mono text-[9px]">
                <div className="rounded bg-[#181715] p-2.5">
                  <div className="text-[#D49B6A]">
                    ✦ Gemini 2.0 Smart Crop Recommendation
                  </div>
                  <div className="mt-1 text-[8.5px] text-[#F5F2EB]/80">
                    Matched Central Java Arabica &amp; Shallot harvest lots with
                    3 verified regional off-takers via Supabase Realtime.
                  </div>
                </div>
                <div className="flex items-center justify-between rounded bg-[#181715] px-2.5 py-1.5">
                  <span>Direct Farmer-to-Buyer Escrow</span>
                  <span className="text-emerald-400">● SUPABASE SYNC</span>
                </div>
              </div>

              <div className="font-mono text-[8.5px] text-[#F5F2EB]/60">
                UI/UX &amp; Applied AI Competition Solution.
              </div>
            </div>

            {/* Right: Cross-Platform Money Tracker */}
            <div className="col-span-12 hidden flex-col justify-between rounded border border-[#D49B6A]/40 bg-[#F5F2EB] p-3.5 text-[#1C1C1A] sm:col-span-5 sm:flex">
              <div className="font-mono text-[8.5px] font-semibold uppercase text-[#8C5E38]">
                MONEY TRACKER (NEXT.JS + FLUTTER)
              </div>
              <div className="my-2 rounded border border-[#1C1C1A]/15 bg-[#EBE3D7] p-2.5 font-mono text-[9px]">
                <div className="text-[8px] text-[#736E65]">
                  UNIFIED SUPABASE LEDGER
                </div>
                <div className="mt-1 text-xs font-bold text-[#1C1C1A]">
                  Web &amp; Mobile Cashflow Sync
                </div>
                <div className="mt-2 flex justify-between text-[8.5px] text-[#8C5E38]">
                  <span>Next.js Dashboard</span>
                  <span>⇄</span>
                  <span>Flutter Wallet</span>
                </div>
              </div>
              <div className="font-mono text-[8px] text-[#55534E]">
                Shared PostgreSQL schema with Row-Level Security.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-[#F5F2EB]/15 pt-2 font-mono text-[8.5px] tracking-widest uppercase text-[#F5F2EB]/60">
            <span>FLUTTER · NEXT.JS · GEMINI 2.0 FLASH · SUPABASE</span>
            <span>FULL-STACK &amp; APPLIED AI</span>
          </div>
        </div>
      )
  }
}

interface SubSheetPreviewProps {
  sheet: SubSheetData
  projectTitle: string
}

/**
 * Komponen SubSheetModulePreview
 * Merender skema modul teknis di dalam 2 kartu portrait pendamping (PRJ-0X.A & PRJ-0X.B)
 * pada halaman detail `/projects/[slug]`.
 */
export const SubSheetModulePreview: React.FC<SubSheetPreviewProps> = ({
  sheet,
  projectTitle,
}) => {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#1C1C1A] p-4 text-[#F5F2EB] sm:p-6">
      {/* Header Modul */}
      <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-3 font-mono text-[9px] tracking-[0.14em] uppercase">
        <span className="bg-[#A3724B] px-2 py-0.5 font-semibold text-[#F5F2EB]">
          {sheet.code}
        </span>
        <span className="truncate pl-2 text-[#D49B6A]">{projectTitle}</span>
      </div>

      {/* Tengah: Visualisasi Arsitektur Modul & Highlight Poin Teknis */}
      <div className="my-auto py-4">
        <div className="font-mono text-[9.5px] tracking-[0.16em] uppercase text-[#D49B6A]">
          TECHNICAL MODULE SPECIFICATION
        </div>
        <h3 className="mt-1.5 text-lg font-medium tracking-tight text-[#F5F2EB] sm:text-xl">
          {sheet.label}
        </h3>

        {/* Daftar Komponen Inti di Dalam Modul */}
        <div className="mt-5 space-y-2.5">
          {sheet.highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 rounded border border-[#F5F2EB]/12 bg-[#262522] px-3 py-2.5 font-mono text-[10px] text-[#F5F2EB]/90"
            >
              <span className="font-semibold text-[#D49B6A]">0{idx + 1}.</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Skema */}
      <div className="border-t border-[#F5F2EB]/15 pt-3">
        <p className="font-mono text-[9.5px] leading-relaxed text-[#F5F2EB]/70">
          {sheet.caption}
        </p>
      </div>
    </div>
  )
}
