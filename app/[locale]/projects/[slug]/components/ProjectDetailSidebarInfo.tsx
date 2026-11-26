"use client"

import React, { useState } from "react"
import { ProjectData } from "@/components/sections/Projects/constants"
import { useLocale } from "next-intl"

interface ProjectDetailSidebarInfoProps {
  project: ProjectData
  locale?: string
}

/**
 * Komponen ProjectDetailSidebarInfo
 * Menampilkan panel side informasi proyek di kolom kanan (sticky)
 * selaras dengan struktur layout studi kasus Arsaludin:
 * - Kode Lembar & Status Proyek
 * - Metadata Organisasi, Peran, Tahun, dan Disiplin
 * - Ringkasan Tech Stack
 * - Tombol Tautan Aksi Cepat (Live Demo & Source Code)
 */
export const ProjectDetailSidebarInfo: React.FC<ProjectDetailSidebarInfoProps> = ({
  project,
  locale: localeProp,
}) => {
  const hookLocale = useLocale()
  const locale = localeProp || hookLocale || "en"
  const isId = locale === "id"
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }
    } catch {
      // fallback
    }
  }

  return (
    <div className="rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-5 shadow-xs space-y-5">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-[#1C1C1A]/10 pb-3">
        <span className="font-mono text-[10.5px] font-bold tracking-[0.18em] text-[#8C5E38] uppercase">
          // {isId ? "INFO PROYEK" : "PROJECT INFO"}
        </span>
        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-[#1C1C1A]/5 text-[#1C1C1A] border border-[#1C1C1A]/10">
          {project.sheetCode}
        </span>
      </div>

      {/* Detail Spesifikasi */}
      <dl className="space-y-3 font-sans text-xs">
        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-[#736E65]">
            {isId ? "Status" : "Status"}
          </dt>
          <dd className="mt-0.5">
            <span className="inline-flex items-center gap-1 rounded-md bg-[#8C5E38]/10 border border-[#8C5E38]/25 px-2 py-0.5 font-mono text-[10.5px] font-semibold text-[#8C5E38]">
              <span>★</span>
              <span>
                {project.statusType === "internship"
                  ? isId
                    ? "Magang · Dalam Proses"
                    : "Internship · In Progress"
                  : project.statusType === "competition"
                  ? isId
                    ? "Kompetisi · Finalis"
                    : "Competition · Finalist"
                  : project.statusType === "thesis"
                  ? isId
                    ? "Skripsi · Riset"
                    : "Thesis · R&D"
                  : isId
                  ? "Proyek Pilihan"
                  : "Featured Project"}
              </span>
            </span>
          </dd>
        </div>

        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-[#736E65]">
            {isId ? "Organisasi / Kemitraan" : "Organization"}
          </dt>
          <dd className="mt-0.5 font-medium text-[#1C1C1A]">
            {project.experienceLabel}
          </dd>
        </div>

        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-[#736E65]">
            {isId ? "Peran" : "Role"}
          </dt>
          <dd className="mt-0.5 font-medium text-[#1C1C1A]">{project.role}</dd>
        </div>

        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-[#736E65]">
            {isId ? "Tahun Rilis" : "Timeline"}
          </dt>
          <dd className="mt-0.5 font-mono text-[#1C1C1A]">{project.year}</dd>
        </div>

        <div>
          <dt className="font-mono text-[10px] uppercase tracking-wider text-[#736E65]">
            {isId ? "Kategori" : "Category"}
          </dt>
          <dd className="mt-0.5 font-medium text-[#1C1C1A]">
            {project.categoryLabel}
          </dd>
        </div>
      </dl>

      {/* Tech Stack Pills */}
      <div className="border-t border-[#1C1C1A]/10 pt-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#736E65] block mb-2">
          {isId ? "Teknologi Utama" : "Core Tech Stack"}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 6).map((tech, idx) => (
            <span
              key={idx}
              className="rounded-md border border-[#1C1C1A]/10 bg-[#EBE3D7]/60 px-2 py-0.5 font-mono text-[10.5px] text-[#4A4742]"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="rounded-md border border-[#1C1C1A]/10 bg-[#EBE3D7]/40 px-1.5 py-0.5 font-mono text-[10px] text-[#736E65]">
              +{project.techStack.length - 6}
            </span>
          )}
        </div>
      </div>

      {/* Tombol Aksi Cepat */}
      <div className="border-t border-[#1C1C1A]/10 pt-3 space-y-2">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C1C1A] py-2.5 font-mono text-xs font-semibold text-[#FAF6F0] transition-colors hover:bg-[#8C5E38]"
          >
            <span>{isId ? "Demo Langsung" : "Live Demo"}</span>
            <span>↗</span>
          </a>
        )}

        <a
          href={project.repoUrl || "https://github.com/nurillanwarr"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#1C1C1A]/20 bg-[#FAF6F0] py-2.5 font-mono text-xs font-semibold text-[#1C1C1A] transition-colors hover:border-[#8C5E38] hover:text-[#8C5E38]"
        >
          <span>{isId ? "Lihat Kode Sumber" : "View Source"}</span>
          <span>↗</span>
        </a>

        <button
          type="button"
          onClick={handleShare}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#1C1C1A]/15 bg-transparent py-2 font-mono text-[11px] text-[#736E65] transition-colors hover:text-[#1C1C1A]"
        >
          <span>{copied ? "✓ " + (isId ? "Tautan Tersalin" : "Link Copied") : (isId ? "Bagikan Proyek" : "Share Project")}</span>
        </button>
      </div>
    </div>
  )
}
export default ProjectDetailSidebarInfo
