import React from "react"
import { ProjectData } from "@/components/sections/Projects/constants"

interface ProjectDetailSpecsProps {
  project: ProjectData
}

/**
 * Komponen ProjectDetailSpecs — Project Story: Contribution, Impact, Highlights & Technology
 * Menampilkan struktur lengkap seperti portofolio Iqmal yang disesuaikan dengan tema blueprint:
 * 1. Bagian "Project Story // Contribution & impact":
 *    - Sisi Kiri: "My Contribution" (End-to-end ownership) dengan daftar bernomor 01 - 06
 *    - Sisi Kanan: Kotak "Impact" khas Iqmal (ringkasan dampak, angka metrik statistik, dan poin dampak)
 * 2. Bagian "Technology Stack":
 *    - Kumpulan pill badge teknologi yang digunakan
 * 3. Bagian "Key Highlights":
 *    - Fitur-fitur utama dan keunggulan teknis sistem
 * 4. Bagian "Technical Specification Matrix":
 *    - Tabel 6 kotak CAD arsitektural (Organisasi, Peran, Frontend, Backend, Keamanan/AI, Dampak)
 */
export const ProjectDetailSpecs: React.FC<ProjectDetailSpecsProps> = ({
  project,
}) => {
  return (
    <section className="py-12 sm:py-16 md:py-20" aria-label="Project story">
      {/* 1. Header Seksi Project Story // Contribution & Impact */}
      <header className="mb-10 border-b border-[#1C1C1A]/20 pb-6 sm:mb-14 sm:flex sm:items-end sm:justify-between sm:gap-8">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#A3724B]">
            Project story
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-[#1C1C1A] sm:text-5xl">
            Contribution &amp; impact
          </h2>
        </div>
        <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-[#736E65] sm:mt-0 sm:text-right">
          What I owned throughout delivery and what changed after the platform
          was introduced.
        </p>
      </header>

      {/* 2. Grid Dua Kolom: My Contribution (Kiri) & Kotak Impact (Kanan) */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:items-start lg:gap-14">
        {/* Kolom Kiri: My Contribution (Daftar Bernomor 01 s/d 06) */}
        <div>
          <div className="flex items-center justify-between gap-5 pb-4 border-b border-[#1C1C1A]">
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#1C1C1A] sm:text-2xl">
              My Contribution
            </h3>
            <span className="font-mono text-[9px] font-semibold tracking-[0.2em] uppercase text-[#736E65]">
              End-to-end ownership
            </span>
          </div>

          <ol className="divide-y divide-[#1C1C1A]/15">
            {project.contributions.map((contribution, index) => (
              <li
                key={index}
                className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 text-sm leading-relaxed text-[#3D3A35] sm:grid-cols-[3rem_1fr] sm:gap-4 sm:py-5 sm:text-base"
              >
                <span className="font-mono text-xs font-bold text-[#A3724B]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{contribution}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Kolom Kanan: Kotak Impact Bergaya Iqmal dalam Palet Blueprint Deep Ink */}
        <aside className="border border-[#1C1C1A] bg-[#1C1C1A] p-7 text-[#F5F2EB] shadow-md sm:p-9 lg:sticky lg:top-28">
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/15 pb-3">
            <span className="font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#D49B6A]">
              Impact &amp; Results
            </span>
            <span className="font-mono text-[9px] text-[#F5F2EB]/50">
              {project.sheetCode}
            </span>
          </div>

          {/* Ringkasan Dampak Utama */}
          <p className="mt-5 text-xl font-medium leading-relaxed tracking-[-0.025em] text-[#F5F2EB] sm:text-2xl">
            {project.impactSummary}
          </p>

          {/* Metrik Statistik Kunci (Angka Besar 4xl) */}
          {project.impactStats && project.impactStats.length > 0 && (
            <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-[#F5F2EB]/15 py-6">
              {project.impactStats.map((stat, idx) => (
                <div key={idx} className={idx === 2 ? "col-span-2 pt-2" : ""}>
                  <dd className="text-3xl font-semibold tracking-[-0.05em] text-[#D49B6A] sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 font-mono text-[9.5px] font-semibold tracking-[0.18em] uppercase text-[#F5F2EB]/65">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}

          {/* Rincian Poin Dampak */}
          <ul className="mt-6 space-y-3.5">
            {project.impacts.map((impact, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[0.75rem_1fr] gap-3 text-xs leading-relaxed text-[#F5F2EB]/80 sm:text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#D49B6A]" />
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      {/* 3. Baris Kumpulan Teknologi (Technology Stack) */}
      <div className="mt-16 border-t border-[#1C1C1A]/20 pt-8 sm:mt-20 sm:flex sm:items-start sm:justify-between sm:gap-10">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#A3724B]">
            Technology Stack
          </p>
          <p className="mt-1.5 text-sm text-[#736E65]">
            Core tools and libraries used to deliver the system.
          </p>
        </div>

        <ul className="mt-5 flex max-w-2xl flex-wrap gap-2 sm:mt-0 sm:justify-end">
          {project.techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-[#1C1C1A]/25 bg-[#F5F2EB] px-4 py-2 font-mono text-xs font-medium text-[#1C1C1A] transition-colors hover:border-[#8C5E38] hover:bg-[#1C1C1A] hover:text-[#F5F2EB]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Fitur Utama (Key Highlights) & Matriks Spesifikasi Arsitektur */}
      <div className="mt-16 grid gap-10 border-t border-[#1C1C1A]/20 pt-10 lg:grid-cols-12 lg:gap-12">
        {/* Kolom Kiri: Key Highlights */}
        <div className="lg:col-span-5">
          <p className="border-b border-[#1C1C1A] pb-3 font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#A3724B]">
            Key Highlights
          </p>
          <ol className="mt-5 space-y-4">
            {project.highlights.map((highlight, index) => (
              <li
                key={index}
                className="grid grid-cols-[2.25rem_1fr] gap-3 text-sm leading-relaxed text-[#3D3A35]"
              >
                <span className="font-mono text-xs font-bold text-[#8C5E38]">
                  [{String(index + 1).padStart(2, "0")}]
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Kolom Kanan: Tabel Spesifikasi 6-Kotak CAD */}
        <div className="lg:col-span-7">
          <p className="border-b border-[#1C1C1A] pb-3 font-mono text-[10px] font-semibold tracking-[0.24em] uppercase text-[#A3724B]">
            Technical Specification Matrix
          </p>
          <div className="mt-5 grid grid-cols-1 border-t border-l border-[#1C1C1A] bg-[#EBE3D7] sm:grid-cols-2">
            {project.specs.map((spec, idx) => (
              <div
                key={idx}
                className="border-r border-b border-[#1C1C1A] p-4"
              >
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-[#736E65]">
                  {spec.label}
                </div>
                <div className="mt-1 text-sm font-normal text-[#1C1C1A]">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetailSpecs
