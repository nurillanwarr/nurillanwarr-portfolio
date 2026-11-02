import React from "react"
import { Link } from "@/i18n/navigation"
import { ProjectData } from "@/components/sections/Projects/constants"
import { CadReticle } from "@/components/sections/Projects/ProjectPrimitives"
import { HeroProjectPreview } from "@/components/sections/Projects/ProjectBlueprintPreview"

interface ProjectDetailHeroProps {
  project: ProjectData
}

/**
 * Komponen ProjectDetailHero
 * Menggabungkan tata letak editorial modern ala portofolio Iqmal (iqmal.dev/projects)
 * dengan identitas blueprint arsitektural (kertas vellum, garis ukur CAD, dan reticle teknik):
 *
 * 1. Top Bar: Tautan "← All projects" yang responsif
 * 2. Header Grid:
 *    - Kiri: Tag "Project 01 / FULLSTACK / PRJ-01", Judul Besar, Ringkasan Eksekutif, dan Tombol Aksi
 *    - Kanan: Metadata Peran (Role, Discipline, Related Experience) dengan border kiri halus
 * 3. Media Hero Sheet: Kanvas arsitektural berskala CAD (1920 x 1080) dengan pratinjau sistem asli
 */
export const ProjectDetailHero: React.FC<ProjectDetailHeroProps> = ({
  project,
}) => {
  return (
    <div className="w-full">
      {/* 1. Header Konten Editorial (Sesuai Referensi Iqmal) */}
      <header className="pb-10 pt-2 sm:pb-14">
        {/* Tombol Navigasi Kembali */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2.5 font-mono text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-[#736E65] transition-colors hover:text-[#1C1C1A]"
        >
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </svg>
          <span>All projects</span>
        </Link>

        {/* Grid Header Dua Kolom */}
        <div className="mt-10 grid gap-9 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end lg:gap-12">
          {/* Kolom Kiri: Judul, Subjudul, Ringkasan, & Link */}
          <div>
            {/* Tag Kategori & Nomor Proyek */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] font-semibold tracking-[0.22em] uppercase text-[#736E65]">
              <span className="border border-[#1C1C1A] bg-[#F5F2EB] px-2 py-0.5 text-[#1C1C1A]">
                Project {project.number}
              </span>
              <span aria-hidden="true">/</span>
              <span className="text-[#A3724B]">{project.categoryLabel}</span>
              <span aria-hidden="true">/</span>
              <span>{project.sheetCode}</span>
            </div>

            {/* Judul Utama Proyek Berukuran Masif */}
            <h1 className="mt-5 text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[0.94] tracking-[-0.05em] text-[#1C1C1A]">
              {project.title}
            </h1>

            {/* Subjudul Spesifikasi Teknis */}
            <p className="mt-3 font-mono text-xs font-semibold tracking-wide text-[#8C5E38] sm:text-sm">
              {project.subtitle}
            </p>

            {/* Ringkasan Eksekutif Sistem */}
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#55534E] sm:text-lg sm:leading-8">
              {project.summary}
            </p>

            {/* Baris Tombol Aksi */}
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4 font-mono text-[0.62rem] font-semibold tracking-[0.2em] uppercase">
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 border-b border-[#1C1C1A] pb-1.5 transition-colors hover:border-[#8C5E38] hover:text-[#8C5E38]"
              >
                <span>View project archive</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  ↗
                </span>
              </Link>

              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-[#1C1C1A] pb-1.5 transition-colors hover:border-[#8C5E38] hover:text-[#8C5E38]"
                >
                  <span>GitHub Repository</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 border-b border-[#1C1C1A] pb-1.5 transition-colors hover:border-[#8C5E38] hover:text-[#8C5E38]"
                >
                  <span>Visit live project</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </a>
              )}
            </div>
          </div>

          {/* Kolom Kanan: Sidebar Metadata Sesuai Layout Iqmal */}
          <div className="border-l border-[#1C1C1A]/15 pl-5 lg:mb-2">
            <div>
              <p className="font-mono text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-[#736E65]">
                Role
              </p>
              <p className="mt-2 text-sm font-semibold leading-relaxed text-[#1C1C1A]">
                {project.role}
              </p>
            </div>

            <div className="mt-6">
              <p className="font-mono text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-[#736E65]">
                Discipline
              </p>
              <p className="mt-2 text-sm font-semibold text-[#1C1C1A]">
                {project.discipline}
              </p>
            </div>

            {project.experienceLabel && (
              <div className="mt-6">
                <p className="font-mono text-[0.58rem] font-semibold tracking-[0.2em] uppercase text-[#736E65]">
                  Related experience
                </p>
                <Link
                  href={`/about#${project.experienceId || "experience-timeline"}`}
                  className="group mt-2 inline-flex items-start gap-1.5 text-sm font-semibold leading-relaxed text-[#1C1C1A] underline decoration-[#1C1C1A]/25 underline-offset-4 transition-[text-decoration-color] hover:decoration-[#1C1C1A] hover:text-[#8C5E38]"
                >
                  <span>{project.experienceLabel}</span>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    ↗
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* 2. Lembar Gambar CAD Hero (Pratinjau Sistem & UI Asli) */}
      <section
        aria-label="Project system media"
        className="mt-4 border border-[#1C1C1A] bg-[#EBE3D7]"
      >
        <div className="oda-mm-grid relative px-4 pt-4 pb-8 sm:px-8 sm:pt-5 sm:pb-12 md:px-12 md:pb-14">
          {/* Baris Anotasi Atas Lembar */}
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-[#55534E] sm:text-[10.5px]">
            <span className="font-semibold text-[#1C1C1A]">
              {project.sheetCode}
            </span>
            <span className="truncate px-2">{project.perspectiveLabel}</span>
            <span className="font-medium text-[#8C5E38]">
              {project.scaleBadge}
            </span>
          </div>

          {/* Kanvas Sistem dengan Garis Ukur CAD (1920 x 1080) */}
          <div className="relative mx-auto mt-8 max-w-[92%] sm:mt-9 sm:max-w-[88%]">
            {/* Garis Dimensi Atas (1920 + ↓) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-5 inset-x-0 flex flex-col items-center sm:-top-6"
            >
              <span className="font-mono text-[8.5px] leading-none tracking-widest text-[#55534E] sm:text-[9px]">
                {project.dimWidth}
              </span>
              <div className="relative mt-1 h-[1px] w-full bg-[#1C1C1A]/45">
                <span className="absolute -top-1 left-0 h-2.5 w-[1px] rotate-30 bg-[#1C1C1A]/75" />
                <span className="absolute -top-1 right-0 h-2.5 w-[1px] rotate-30 bg-[#1C1C1A]/75" />
              </div>
              <span className="mt-0.5 font-mono text-[8px] leading-none text-[#55534E] sm:text-[8.5px]">
                ↓
              </span>
            </div>

            {/* Garis Dimensi Kanan (1080 + ←) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -right-5 flex items-center sm:-right-6"
            >
              <div className="relative flex h-full items-center">
                <span className="mr-0.5 font-mono text-[8px] leading-none text-[#55534E] sm:text-[8.5px]">
                  ←
                </span>
                <div className="relative h-full w-[1px] bg-[#1C1C1A]/45">
                  <span className="absolute top-0 -left-1 h-[1px] w-2.5 -rotate-30 bg-[#1C1C1A]/75" />
                  <span className="absolute bottom-0 -left-1 h-[1px] w-2.5 -rotate-30 bg-[#1C1C1A]/75" />
                </div>
                <span className="rotate-90 font-mono text-[8.5px] leading-none tracking-widest text-[#55534E] sm:text-[9px]">
                  {project.dimHeight}
                </span>
              </div>
            </div>

            {/* Garis Ekstensi Sudut Arsitektural */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-3 top-0 h-[1px] bg-[#1C1C1A]/45 sm:-inset-x-4"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-3 bottom-0 h-[1px] bg-[#1C1C1A]/45 sm:-inset-x-4"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-3 left-0 w-[1px] bg-[#1C1C1A]/45 sm:-inset-y-4"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-y-3 right-0 w-[1px] bg-[#1C1C1A]/45 sm:-inset-y-4"
            />

            {/* Simbol Target Reticle CAD (⊕) */}
            <CadReticle className="absolute -top-5 -right-6 sm:-top-6 sm:-right-7" />

            {/* Visualisasi Mockup & Arsitektur Sistem Asli */}
            <div className="relative aspect-[16/9.2] w-full overflow-hidden border border-[#1C1C1A]/80 bg-[#1C1C1A] shadow-xs">
              <HeroProjectPreview project={project} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetailHero
