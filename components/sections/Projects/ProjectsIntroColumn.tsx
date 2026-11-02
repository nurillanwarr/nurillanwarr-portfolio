import React from "react"
import { PROJECT_STATUS_LEGEND } from "./constants"
import { StatusDot } from "./ProjectPrimitives"

/**
 * Komponen ProjectsIntroColumn
 * Menampilkan kolom pengantar di sisi paling kiri track horizontal Projects:
 * - Nomor seksi (03) PROCESS & BLUEPRINTS // IN DEVELOPMENT
 * - Judul besar "Six systems in active process."
 * - Narasi bahwa semua sistem dalam status proses pengembangan aktif
 * - Legenda status proses dan kategori asal (Internship, Lomba, Skripsi, Tugas Kuliah)
 */
export const ProjectsIntroColumn: React.FC = () => {
  return (
    <div className="flex w-[270px] shrink-0 flex-col justify-between py-2 pr-4 sm:w-[310px] md:w-[340px]">
      <div>
        <div className="mb-3 font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#A3724B]">
          (03) PROCESS &amp; BLUEPRINTS // IN DEV
        </div>
        <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.035em] text-[#1C1C1A] sm:text-5xl md:text-[50px]">
          Six systems
          <br />
          in active
          <br />
          process.
        </h2>
        <p className="mt-5 max-w-[295px] text-sm leading-relaxed text-[#55534E] md:text-[14.5px]">
          Seluruh karya di bawah ini berstatus dalam <strong>proses pengembangan aktif</strong> —
          mencakup magang industri (internship), kompetisi nasional (lomba),
          riset tugas akhir (skripsi), dan proyek tugas kuliah.
        </p>
      </div>

      {/* Legenda Status Proses & Kategori Asal di Kiri Bawah */}
      <div className="mt-8 border-t border-[#1C1C1A] pt-4">
        {/* Active In-Development Status Indicator */}
        <div className="mb-3 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8C5E38] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8C5E38]" />
          </span>
          <span className="font-mono text-[9px] font-semibold tracking-widest uppercase text-[#8C5E38]">
            STATUS: DALAM PENGEMBANGAN
          </span>
        </div>

        <ul className="space-y-2 font-mono text-[10px] tracking-[0.14em] uppercase text-[#55534E]">
          {PROJECT_STATUS_LEGEND.map((item) => (
            <li key={item.type} className="flex items-center gap-2.5">
              <StatusDot type={item.type} />
              <span className="font-medium text-[#1C1C1A]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectsIntroColumn
