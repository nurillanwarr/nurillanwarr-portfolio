"use client"

import React from "react"
import { Link } from "@/i18n/navigation"
import { ProjectData } from "./constants"
import { CadReticle, StatusDot } from "./ProjectPrimitives"
import { HeroProjectPreview } from "./ProjectBlueprintPreview"

interface ProjectCardProps {
  project: ProjectData
  index: number
}

/**
 * Komponen ProjectCard — Engineering System Sheet Card
 * Menampilkan satu lembar kerja proyek software engineering Nuril Anwar lengkap dengan:
 * - Header kode proyek (PRJ-01 .. PRJ-06), konteks instansi/kompetisi, dan badge stack utama
 * - Bingkai pratinjau arsitektur sistem (HeroProjectPreview) di atas kertas milimeter dengan dimensi 1920 x 1080
 * - Tabel Title Block 5 kolom di bagian bawah (PROJECT, TECH STACK, YEAR, ROLE, STATUS)
 * - Ketika diklik, mengarahkan ke halaman detail studi kasus `/projects/[slug]`
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const reticlePosClass = {
    "bottom-left": "-bottom-6 -left-6",
    "top-right": "-top-6 -right-6",
    "top-left": "-top-6 -left-6",
    "bottom-right": "-bottom-6 -right-6",
  }[project.reticleCorner]

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex w-[86vw] shrink-0 flex-col justify-between border border-[#1C1C1A] bg-[#EBE3D7] select-none transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(28,28,26,0.1)] sm:w-[540px] md:w-[640px] lg:w-[680px]"
    >
      {/* Area Atas: Kertas Milimeter + Garis Dimensi CAD + Pratinjau Sistem */}
      <div className="oda-mm-grid relative flex-1 px-5 pt-3.5 pb-7 md:px-9 md:pt-4 md:pb-8">
        {/* 1. Baris Header Lembar Kerja (PRJ-01 | KONTEKS PROYEK | STACK BADGE) */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-[#55534E] md:text-[10.5px]">
          <span className="font-semibold text-[#1C1C1A]">
            {project.sheetCode}
          </span>
          <span className="truncate px-2">{project.perspectiveLabel}</span>
          <span className="font-medium text-[#8C5E38]">
            {project.scaleBadge}
          </span>
        </div>

        {/* 2. Kontainer Kanvas Pratinjau dengan Garis Ukur CAD (1920 x 1080) */}
        <div className="relative mx-auto mt-7 mb-2 max-w-[92%]">
          {/* Garis Dimensi Atas (1920 + Panah ↓) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-5 inset-x-0 flex flex-col items-center"
          >
            <span className="font-mono text-[8.5px] leading-none tracking-widest text-[#55534E]">
              {project.dimWidth}
            </span>
            <div className="relative mt-0.5 h-[1px] w-full bg-[#1C1C1A]/45">
              <span className="absolute -top-1 left-0 h-2.5 w-[1px] rotate-30 bg-[#1C1C1A]/70" />
              <span className="absolute -top-1 right-0 h-2.5 w-[1px] rotate-30 bg-[#1C1C1A]/70" />
            </div>
            <span className="mt-0.5 font-mono text-[8px] leading-none text-[#55534E]">
              ↓
            </span>
          </div>

          {/* Garis Dimensi Kiri (1080 + Panah →) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-5 flex items-center"
          >
            <div className="relative flex h-full items-center">
              <span className="-rotate-90 font-mono text-[8.5px] leading-none tracking-widest text-[#55534E]">
                {project.dimHeight}
              </span>
              <div className="relative h-full w-[1px] bg-[#1C1C1A]/45">
                <span className="absolute top-0 -left-1 h-[1px] w-2.5 -rotate-30 bg-[#1C1C1A]/70" />
                <span className="absolute bottom-0 -left-1 h-[1px] w-2.5 -rotate-30 bg-[#1C1C1A]/70" />
              </div>
              <span className="ml-0.5 font-mono text-[8px] leading-none text-[#55534E]">
                →
              </span>
            </div>
          </div>

          {/* Garis Ekstensi Sudut CAD (Overhanging Corner Hairlines) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-3 top-0 h-[1px] bg-[#1C1C1A]/45"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-3 bottom-0 h-[1px] bg-[#1C1C1A]/45"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-3 left-0 w-[1px] bg-[#1C1C1A]/45"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-y-3 right-0 w-[1px] bg-[#1C1C1A]/45"
          />

          {/* Simbol Target Reticle CAD (⊕) */}
          <CadReticle className={`absolute ${reticlePosClass}`} />

          {/* Visualisasi Sistem & UI Proyek Asli */}
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#1C1C1A]/80 bg-[#1C1C1A] transition-transform duration-500 ease-out group-hover:scale-[1.015]">
            <HeroProjectPreview project={project} />
          </div>
        </div>
      </div>

      {/* 3. Tabel Title Block Bawah (5 Kolom: PROJECT | TECH STACK | YEAR | ROLE | STATUS) */}
      <div className="grid grid-cols-12 border-t border-[#1C1C1A] bg-[#EBE3D7]">
        {/* Kolom 1: PROJECT */}
        <div className="col-span-12 border-b border-[#1C1C1A] px-3.5 py-2.5 sm:col-span-4 sm:border-r sm:border-b-0">
          <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-[#736E65]">
            PROJECT
          </div>
          <div className="mt-0.5 truncate text-[15px] font-medium tracking-tight text-[#1C1C1A] transition-colors group-hover:text-[#8C5E38]">
            {project.title}
          </div>
        </div>

        {/* Kolom 2: TECH STACK */}
        <div className="col-span-4 border-r border-[#1C1C1A] px-3 py-2.5 sm:col-span-3">
          <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-[#736E65]">
            TECH STACK
          </div>
          <div className="mt-1 truncate text-xs text-[#1C1C1A]">
            {project.techStack.slice(0, 3).join(", ")}
          </div>
        </div>

        {/* Kolom 3: YEAR */}
        <div className="col-span-2 border-r border-[#1C1C1A] px-2.5 py-2.5 sm:col-span-1">
          <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-[#736E65]">
            YEAR
          </div>
          <div className="mt-1 font-mono text-xs text-[#1C1C1A]">
            {project.year}
          </div>
        </div>

        {/* Kolom 4: ROLE */}
        <div className="col-span-3 border-r border-[#1C1C1A] px-2.5 py-2.5 sm:col-span-2">
          <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-[#736E65]">
            ROLE
          </div>
          <div className="mt-1 truncate font-mono text-xs text-[#1C1C1A]">
            {project.role}
          </div>
        </div>

        {/* Kolom 5: STATUS */}
        <div className="col-span-3 px-2.5 py-2.5 sm:col-span-2">
          <div className="font-mono text-[8.5px] tracking-[0.14em] uppercase text-[#736E65]">
            STATUS
          </div>
          <div className="mt-1 flex items-center gap-1.5 truncate text-xs text-[#1C1C1A]">
            <StatusDot type={project.statusType} />
            <span className="truncate">{project.status}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { CadReticle, StatusDot }
export default ProjectCard
