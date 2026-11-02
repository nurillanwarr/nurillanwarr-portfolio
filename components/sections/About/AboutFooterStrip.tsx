import React from "react"

/**
 * Komponen AboutFooterStrip
 * Menampilkan baris metadata penutup di bagian bawah lembar spesifikasi About (Section 02)
 */
export const AboutFooterStrip: React.FC = () => {
  return (
    <div className="relative z-10 mt-5 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] tracking-widest uppercase text-[#736E65]">
      <span>SHEET: APPLIED AI &amp; FULL-STACK OVERVIEW</span>
      <span>READY FOR COLLABORATION // PROCEED TO PROJECTS →</span>
    </div>
  )
}

export default AboutFooterStrip
