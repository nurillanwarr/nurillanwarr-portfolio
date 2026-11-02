import React from "react"
import { Link } from "@/i18n/navigation"
import {
  ProjectData,
  SubSheetData,
} from "@/components/sections/Projects/constants"
import { CadReticle } from "@/components/sections/Projects/ProjectPrimitives"
import { SubSheetModulePreview } from "@/components/sections/Projects/ProjectBlueprintPreview"

/**
 * Komponen Kartu Lembar Modul Teknis Pendamping (PRJ-0X.A & PRJ-0X.B)
 */
function SubDrawingSheetCard({
  sheet,
  projectTitle,
  reticleSide,
}: {
  sheet: SubSheetData
  projectTitle: string
  reticleSide: "top-right" | "top-left"
}) {
  return (
    <div className="border border-[#1C1C1A] bg-[#EBE3D7]">
      <div className="oda-mm-grid relative px-5 pt-3.5 pb-8 md:px-9 md:pt-4 md:pb-10">
        {/* Header Bar Lembar Modul */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-[#55534E] md:text-[10.5px]">
          <span className="font-semibold text-[#1C1C1A]">{sheet.code}</span>
          <span className="truncate px-2">{sheet.label}</span>
          <span className="text-[#8C5E38]">MODULE</span>
        </div>

        {/* Bingkai Skema Modul dengan Garis Dimensi CAD (1440 x 900) */}
        <div className="relative mx-auto mt-8 max-w-[88%]">
          {/* Garis Dimensi Atas (1440 + ↓) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-5 inset-x-0 flex flex-col items-center"
          >
            <span className="font-mono text-[8.5px] leading-none tracking-widest text-[#55534E]">
              {sheet.dimTop}
            </span>
            <div className="relative mt-0.5 h-[1px] w-full bg-[#1C1C1A]/45">
              <span className="absolute -top-1 left-0 h-2.5 w-[1px] rotate-30 bg-[#1C1C1A]/75" />
              <span className="absolute -top-1 right-0 h-2.5 w-[1px] rotate-30 bg-[#1C1C1A]/75" />
            </div>
            <span className="mt-0.5 font-mono text-[8px] leading-none text-[#55534E]">
              ↓
            </span>
          </div>

          {/* Garis Dimensi Kiri (900 + →) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-5 flex items-center"
          >
            <div className="relative flex h-full items-center">
              <span className="-rotate-90 font-mono text-[8.5px] leading-none tracking-widest text-[#55534E]">
                {sheet.dimSide}
              </span>
              <div className="relative h-full w-[1px] bg-[#1C1C1A]/45">
                <span className="absolute top-0 -left-1 h-[1px] w-2.5 -rotate-30 bg-[#1C1C1A]/75" />
                <span className="absolute bottom-0 -left-1 h-[1px] w-2.5 -rotate-30 bg-[#1C1C1A]/75" />
              </div>
              <span className="ml-0.5 font-mono text-[8px] leading-none text-[#55534E]">
                →
              </span>
            </div>
          </div>

          {/* Garis Ekstensi Sudut CAD */}
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
          <CadReticle
            className={`absolute ${
              reticleSide === "top-right"
                ? "-top-6 -right-6"
                : "-top-6 -left-6"
            }`}
          />

          {/* Skema Modul Teknis Proyek */}
          <div className="relative aspect-[4/4.2] w-full overflow-hidden border border-[#1C1C1A]/80 bg-[#1C1C1A]">
            <SubSheetModulePreview sheet={sheet} projectTitle={projectTitle} />
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectDetailSubSheetsProps {
  project: ProjectData
  prevProject: ProjectData
  nextProject: ProjectData
}

/**
 * Komponen ProjectDetailSubSheets
 * Menampilkan 2 lembar skema modul teknis pendamping (PRJ-0X.A & PRJ-0X.B) secara berdampingan
 * serta bilah navigasi proyek sebelumnya / berikutnya ala portofolio Iqmal yang interaktif.
 */
export const ProjectDetailSubSheets: React.FC<ProjectDetailSubSheetsProps> = ({
  project,
  prevProject,
  nextProject,
}) => {
  return (
    <div className="mt-14 md:mt-20">
      {/* Header Sub-Modul */}
      <div className="mb-6 flex items-center justify-between border-b border-[#1C1C1A]/15 pb-3">
        <span className="font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#A3724B]">
          Architectural Sub-Modules &amp; Schematics
        </span>
        <span className="font-mono text-[9px] uppercase text-[#736E65]">
          {project.sheetCode}.A &amp; {project.sheetCode}.B
        </span>
      </div>

      {/* Dua Lembar Modul Teknis Berdampingan (PRJ-0X.A & PRJ-0X.B) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <SubDrawingSheetCard
          sheet={project.subSheetLeft}
          projectTitle={project.title}
          reticleSide="top-right"
        />
        <SubDrawingSheetCard
          sheet={project.subSheetRight}
          projectTitle={project.title}
          reticleSide="top-left"
        />
      </div>

      {/* Navigasi Proyek Sebelumnya / Berikutnya Bergaya Iqmal */}
      <nav
        aria-label="Previous and next projects"
        className="mt-14 border border-[#1C1C1A] bg-[#EBE3D7]"
      >
        <div className="grid md:grid-cols-2">
          {/* Proyek Sebelumnya */}
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group flex min-h-48 flex-col justify-between border-b border-[#1C1C1A] p-6 transition-colors duration-300 hover:bg-[#1C1C1A] hover:text-[#F5F2EB] sm:p-8 md:border-b-0 md:border-r"
          >
            <span className="flex items-center gap-2.5 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#736E65] transition-colors group-hover:text-[#D49B6A]">
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              <span>Previous project</span>
              <span className="font-normal text-[#1C1C1A]/40 group-hover:text-[#F5F2EB]/40">
                · {prevProject.sheetCode}
              </span>
            </span>
            <div className="mt-6">
              <span className="block text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#1C1C1A] transition-colors group-hover:text-[#F5F2EB] sm:text-3xl">
                {prevProject.title}
              </span>
              <span className="mt-1 block font-mono text-xs text-[#736E65] transition-colors group-hover:text-[#F5F2EB]/60">
                {prevProject.subtitle}
              </span>
            </div>
          </Link>

          {/* Proyek Berikutnya */}
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex min-h-48 flex-col items-end justify-between p-6 text-right transition-colors duration-300 hover:bg-[#1C1C1A] hover:text-[#F5F2EB] sm:p-8"
          >
            <span className="flex items-center gap-2.5 font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#736E65] transition-colors group-hover:text-[#D49B6A]">
              <span className="font-normal text-[#1C1C1A]/40 group-hover:text-[#F5F2EB]/40">
                {nextProject.sheetCode} ·
              </span>
              <span>Next project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
            <div className="mt-6">
              <span className="block text-2xl font-semibold leading-tight tracking-[-0.035em] text-[#1C1C1A] transition-colors group-hover:text-[#F5F2EB] sm:text-3xl">
                {nextProject.title}
              </span>
              <span className="mt-1 block font-mono text-xs text-[#736E65] transition-colors group-hover:text-[#F5F2EB]/60">
                {nextProject.subtitle}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default ProjectDetailSubSheets
