"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ProjectData } from "@/components/sections/Projects/constants"
import { HeroProjectPreview } from "@/components/sections/Projects/ProjectBlueprintPreview"

interface ProjectDetailHeroNewProps {
  project: ProjectData
}

/**
 * Komponen ProjectDetailHeroNew
 * Menampilkan tata letak kaya khas studi kasus profesional yang disesuaikan dengan tema kertas arsitektur portofolio (#EBE3D7 & #FAF6F0):
 * 1. Breadcrumbs navigasi: Home > Projects > [Project Name]
 * 2. Banner Pratinjau Sistem visual berskala aspect-video
 * 3. Kartu Metadata Menumpuk (Overlapping Card dengan margin negatif):
 *    - Latar belakang kertas sketsa hangat (#FAF6F0 dengan garis batas presisi border-[#1C1C1A]/20)
 *    - Lencana status proyek warna tembaga arsitektur (#8C5E38)
 *    - Judul proyek besar bertinta pekat (#1C1C1A) & tombol Share
 *    - Indikator statistik tayangan & estimasi waktu baca (views & reading time)
 *    - Ringkasan deskripsi sistem bertinta grafit (#55534E)
 *    - Banner peringatan kerahasiaan ("Internal & Confidential Project" / NDA Notice)
 *    - Blok identitas Author (M. Nuril Anwar) & Tanggal rilis
 *    - Kumpulan badge Kategori bernuansa blueprint
 *    - Kumpulan badge Tech Stack bernuansa kertas kerja (#EFE9DF)
 *    - Tombol aksi Live Demo & Source Code
 *    - Tombol interaksi Reactions (Heart) & Comments
 */
export const ProjectDetailHeroNew: React.FC<ProjectDetailHeroNewProps> = ({
  project,
}) => {
  const [copiedShare, setCopiedShare] = useState<boolean>(false)
  const [likes, setLikes] = useState<number>(24)
  const [hasLiked, setHasLiked] = useState<boolean>(false)

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href)
        setCopiedShare(true)
        setTimeout(() => setCopiedShare(false), 2200)
      }
    } catch {
      // fallback
    }
  }

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1)
      setHasLiked(true)
    } else {
      setLikes((prev) => prev - 1)
      setHasLiked(false)
    }
  }

  return (
    <div className="w-full">
      {/* 1. Breadcrumbs Navigasi (Home > Projects > Title) */}
      <nav
        aria-label="Breadcrumbs"
        className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs text-[#736E65]"
      >
        <Link
          href="/"
          className="flex items-center gap-1.5 transition-colors hover:text-[#1C1C1A]"
        >
          <span>⌂</span>
          <span>Home</span>
        </Link>
        <span className="text-[#A8A49C]">›</span>
        <Link
          href="/#projects"
          className="transition-colors hover:text-[#1C1C1A]"
        >
          Projects
        </Link>
        <span className="text-[#A8A49C]">›</span>
        <span className="font-semibold text-[#1C1C1A] truncate max-w-[260px] sm:max-w-none">
          {project.title}
        </span>
      </nav>

      {/* 2. Hero Visual Banner (Aspect-Video) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl border border-[#1C1C1A]/20 bg-[#161614] shadow-md">
        <div className="h-full w-full">
          <HeroProjectPreview project={project} />
        </div>
      </div>

      {/* 3. Kartu Metadata Menumpuk (Overlapping Card Kertas Vellum) */}
      <div className="relative z-10 -mt-16 mx-3 rounded-2xl border border-[#1C1C1A]/20 bg-[#FAF6F0] p-5 shadow-xl sm:-mt-28 sm:mx-6 sm:p-7 md:-mt-36 md:mx-8 md:p-9 lg:-mt-44 lg:mx-12">
        {/* Header Kartu: Badge Status & Tombol Share */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-[#8C5E38]/12 border border-[#8C5E38]/30 px-3 py-1 font-mono text-[11px] font-bold tracking-wider text-[#8C5E38] uppercase">
              <span>★</span>
              <span>
                {project.statusType === "internship"
                  ? "Internship · In Progress"
                  : project.statusType === "competition"
                  ? "Competition · Finalist"
                  : project.statusType === "thesis"
                  ? "Thesis · R&D"
                  : "Featured Project"}
              </span>
            </span>
          </div>

          <button
            type="button"
            onClick={handleShare}
            aria-label="Share project"
            className="group relative flex h-9 w-9 items-center justify-center rounded-xl border border-[#1C1C1A]/15 bg-[#EBE3D7]/60 text-[#55534E] transition-all hover:border-[#8C5E38] hover:text-[#1C1C1A]"
          >
            {copiedShare ? (
              <span className="font-mono text-xs font-bold text-[#8C5E38]">✓</span>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            )}
            {copiedShare && (
              <span className="absolute -top-8 right-0 rounded bg-[#1C1C1A] px-2 py-0.5 font-mono text-[10px] text-[#FAF6F0] shadow-md">
                Copied!
              </span>
            )}
          </button>
        </div>

        {/* Judul Proyek Besar */}
        <h1 className="mt-4 font-sans text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl md:text-4xl lg:text-5xl">
          {project.title}
        </h1>

        {/* Indikator Statistik: Views & Reading Time */}
        <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-[#736E65]">
          <div className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5 text-[#8C5E38]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <span>{86 + project.title.length * 7} views</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg
              className="h-3.5 w-3.5 text-[#8C5E38]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>8m read</span>
          </div>
        </div>

        {/* Ringkasan Proyek */}
        <p className="mt-4 text-sm leading-relaxed text-[#4A4742] sm:text-base">
          {project.summary}
        </p>

        {/* Banner Peringatan Kerahasiaan (Internal & Confidential Project) */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#8C5E38]/30 bg-[#8C5E38]/8 p-4 text-[#55534E]">
          <div className="mt-0.5 shrink-0 text-[#8C5E38]">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div className="text-xs leading-relaxed sm:text-sm">
            <span className="font-bold text-[#8C5E38] block mb-0.5">
              Internal &amp; Confidential Project
            </span>
            <span>
              Source code and internal credentials are protected under institutional NDA compliance.
              Nevertheless, system architecture, engineering methodologies, and core outcomes are transparently documented below.
            </span>
          </div>
        </div>

        {/* Bagian Metadata: Author, Published On, Categories, Tech Stack */}
        <div className="mt-6 grid grid-cols-1 gap-6 border-t border-[#1C1C1A]/15 pt-6 sm:grid-cols-2">
          {/* Author Block */}
          <div>
            <div className="font-mono text-[10.5px] font-semibold tracking-wider text-[#736E65] uppercase">
              AUTHOR
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1C1C1A] font-mono text-xs font-bold text-[#FAF6F0] shadow-sm">
                NA
              </div>
              <div>
                <div className="text-sm font-semibold text-[#1C1C1A]">
                  M. Nuril Anwar
                </div>
                <div className="text-[11px] text-[#736E65]">
                  Full-Stack &amp; Applied AI Developer
                </div>
              </div>
            </div>
          </div>

          {/* Published Date */}
          <div>
            <div className="font-mono text-[10.5px] font-semibold tracking-wider text-[#736E65] uppercase">
              PUBLISHED ON
            </div>
            <div className="mt-2 flex items-center gap-2 font-mono text-sm font-medium text-[#1C1C1A]">
              <svg
                className="h-4 w-4 text-[#8C5E38]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Friday, May 29, 2026</span>
            </div>
          </div>

          {/* Categories */}
          <div className="sm:col-span-2">
            <div className="font-mono text-[10.5px] font-semibold tracking-wider text-[#736E65] uppercase">
              CATEGORIES
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#EBE3D7] px-3 py-1 font-mono text-xs font-semibold text-[#1C1C1A] border border-[#1C1C1A]/15">
                {project.categoryLabel}
              </span>
              <span className="rounded-full bg-[#EBE3D7] px-3 py-1 font-mono text-xs font-semibold text-[#1C1C1A] border border-[#1C1C1A]/15">
                {project.discipline}
              </span>
              <span className="rounded-full bg-[#EBE3D7] px-3 py-1 font-mono text-xs font-semibold text-[#1C1C1A] border border-[#1C1C1A]/15">
                {project.sheetCode}
              </span>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="sm:col-span-2">
            <div className="font-mono text-[10.5px] font-semibold tracking-wider text-[#736E65] uppercase">
              TECH STACK
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded-lg border border-[#1C1C1A]/15 bg-[#EFE9DF] px-3 py-1 font-mono text-xs text-[#55534E] transition-colors hover:border-[#8C5E38] hover:text-[#1C1C1A]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tombol Aksi: Live Demo & Source Code */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={project.liveUrl || "#"}
            target={project.liveUrl ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#1C1C1A] px-5 py-3 font-semibold text-[#FAF6F0] transition-all hover:bg-[#8C5E38] shadow-md active:scale-[0.99]"
          >
            <span>Live Demo</span>
            <span>↗</span>
          </a>

          <a
            href={project.repoUrl || "https://github.com/nurillanwarr"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-[#1C1C1A]/25 bg-[#FAF6F0] px-5 py-3 font-semibold text-[#1C1C1A] transition-all hover:border-[#8C5E38] hover:text-[#8C5E38] active:scale-[0.99]"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>Source Code</span>
          </a>
        </div>

        {/* Footer Kartu: Reactions & Comments */}
        <div className="mt-5 flex items-center justify-end gap-5 border-t border-[#1C1C1A]/15 pt-4 font-mono text-xs text-[#736E65]">
          <button
            type="button"
            onClick={handleLike}
            className={`flex items-center gap-1.5 transition-colors ${
              hasLiked ? "text-rose-600" : "hover:text-[#1C1C1A]"
            }`}
          >
            <span>{hasLiked ? "❤️" : "🤍"}</span>
            <span>{likes}</span>
          </button>
          <div className="flex items-center gap-1.5 hover:text-[#1C1C1A] cursor-pointer">
            <span>💬</span>
            <span>4</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailHeroNew
