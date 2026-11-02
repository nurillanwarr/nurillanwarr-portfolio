"use client"

import React from "react"
import { Achievement } from "@/data/achievements"

interface CertificateVisualProps {
  achievement: Achievement
  className?: string
}

/**
 * Komponen CertificateVisual
 * Merender sertifikat vektor resolusi tinggi dengan detail visual autentik sesuai Gambar 2:
 * - Brand logo & header organisasi (Dicoding / Samsung / MTE / UMS)
 * - Pita lencana kelulusan (ribbon badge) dengan nomor indeks kompetensi
 * - Kode identitas sertifikat (Credential ID)
 * - Teks persembahan "Diberikan kepada [Nama Mahasiswa]"
 * - Nama kelas atau penghargaan
 * - Tanggal terbit resmi
 * - Tanda tangan CEO / Ketua Komite resmi
 * - QR code verifikasi keaslian dokumen
 */
export const CertificateVisual: React.FC<CertificateVisualProps> = ({
  achievement,
  className = "",
}) => {
  const isDicoding = achievement.issuing_organization.includes("Dicoding")

  return (
    <div
      className={`relative aspect-[1.414/1] w-full select-none overflow-hidden border-2 border-[#1C1C1A] bg-white p-6 text-[#1C1C1A] shadow-md md:p-8 ${className}`}
      style={{
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      }}
    >
      {/* Decorative Outer Hairline Border */}
      <div className="pointer-events-none absolute inset-2.5 border border-[#1C1C1A]/20 sm:inset-3.5" />

      {/* Right Top Ribbon Banner (Khas Sertifikat Gambar 2) */}
      <div className="absolute top-0 right-8 z-10 flex w-20 flex-col items-center bg-[#2B3545] pt-2 pb-5 text-white shadow-md sm:right-12 sm:w-24 md:w-28">
        <span className="text-center font-mono text-[8px] font-bold leading-tight tracking-wider uppercase sm:text-[9.5px]">
          SERTIFIKAT
          <br />
          KOMPETENSI
          <br />
          KELULUSAN
        </span>
        {/* Ribbon Seal Badge */}
        <div className="mt-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-transparent text-white sm:h-11 sm:w-11">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-white/80 font-serif text-sm font-bold sm:h-9 sm:w-9 sm:text-base">
            {isDicoding ? "9" : "★"}
          </div>
        </div>
        {/* Ribbon V-Tail cutout */}
        <div className="absolute -bottom-3 left-0 w-0 border-t-[12px] border-r-[40px] border-l-[40px] border-t-[#2B3545] border-r-transparent border-l-transparent sm:border-r-[48px] sm:border-l-[48px] md:border-r-[56px] md:border-l-[56px]" />
      </div>

      <div className="relative z-0 flex h-full flex-col justify-between pr-24 sm:pr-32">
        {/* 1. Header: Organization Brand Logo & Credential Code */}
        <div>
          <div className="flex items-center gap-2">
            <span className="font-sans text-xl font-black tracking-tight text-[#2B3545] sm:text-2xl md:text-3xl">
              {achievement.issuing_organization.toLowerCase()}
            </span>
            <span className="h-2 w-2 rounded-full bg-[#1C1C1A]" />
          </div>

          <div className="mt-3 inline-block rounded bg-[#2B3545] px-2.5 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-white sm:text-[10px]">
            {achievement.credential_id}
          </div>
        </div>

        {/* 2. Body Text: Recipient Name & Course Title */}
        <div className="my-auto py-2">
          <p className="font-sans text-[10px] font-medium text-[#6B6964] sm:text-xs">
            Diberikan kepada:
          </p>
          <h2 className="mt-0.5 font-serif text-lg font-bold tracking-tight text-[#1C1C1A] sm:text-2xl md:text-3xl">
            {achievement.recipient_name}
          </h2>

          <p className="mt-2 font-sans text-[10px] font-medium text-[#6B6964] sm:text-xs">
            Atas kelulusannya / prestasinya pada:
          </p>
          <h3 className="mt-0.5 font-sans text-xs font-bold leading-snug text-[#006699] sm:text-base md:text-lg">
            {achievement.name}
          </h3>
        </div>

        {/* 3. Footer: Date, Signatory, & QR Verification Seal */}
        <div className="flex items-end justify-between border-t border-[#1C1C1A]/15 pt-3">
          <div>
            <p className="font-mono text-[9px] text-[#736E65] sm:text-[10px]">
              {achievement.issue_date}
            </p>
            {/* Signature flourish simulation */}
            <div className="mt-1 font-serif text-sm italic text-[#1C1C1A] sm:text-base">
              ~ {achievement.signatory_name} ~
            </div>
            <div className="mt-0.5 font-mono text-[8.5px] font-semibold text-[#1C1C1A] sm:text-[9.5px]">
              {achievement.signatory_name}
            </div>
            <div className="font-mono text-[7.5px] text-[#736E65] sm:text-[8.5px]">
              {achievement.signatory_title}
            </div>
          </div>

          {/* QR Verification Seal */}
          <div className="flex flex-col items-center">
            {/* SVG Simulated QR Pattern */}
            <div className="flex h-12 w-12 items-center justify-center border border-[#1C1C1A]/40 bg-white p-1 sm:h-14 sm:w-14">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
                <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4-2h2v2h-2v-2zm4 4h2v2h-2v-2zm-6-2h2v4h-2v-4zm4-2h4v2h-4v-2z" />
              </svg>
            </div>
            <span className="mt-1 font-mono text-[7px] font-bold text-[#736E65] uppercase sm:text-[7.5px]">
              Verifikasi Sertifikat
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CertificateVisual
