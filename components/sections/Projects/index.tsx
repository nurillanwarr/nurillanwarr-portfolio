"use client"

import React, { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PROJECTS } from "./constants"
import { ProjectCard } from "./ProjectCard"
import { ProjectsIntroColumn } from "./ProjectsIntroColumn"
import { ProjectsProgressBar } from "./ProjectsProgressBar"

/**
 * Komponen Utama ProjectsSection — "Six sheets from the plan chest." (Gambar 1 & 2)
 * Menyatukan sub-komponen modular:
 * - ProjectsIntroColumn: Judul, narasi pengantar, dan legenda status di sisi kiri
 * - ProjectCard: 6 lembar gambar kerja proyek (A-301 s/d A-306)
 * - ProjectsProgressBar: Garis indikator kemajuan & nomor lembar aktif (01 / 06)
 */
export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressFillRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(1)

  const totalSheets = PROJECTS.length

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const sectionEl = sectionRef.current
    const viewportEl = viewportRef.current
    const trackEl = trackRef.current
    if (!sectionEl || !viewportEl || !trackEl) return

    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const trackWidth = trackEl.scrollWidth
        const viewportWidth = viewportEl.clientWidth
        return Math.max(0, trackWidth - viewportWidth + 48)
      }

      const tween = gsap.to(trackEl, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionEl,
          pin: true,
          start: "top top",
          end: () => `+=${Math.max(1200, getScrollAmount())}`,
          scrub: 0.55,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressFillRef.current) {
              const pct = Math.max(2, Math.min(100, self.progress * 100))
              progressFillRef.current.style.width = `${pct}%`
            }
            const currentIdx = Math.min(
              totalSheets,
              Math.max(1, Math.round(self.progress * (totalSheets - 1)) + 1)
            )
            setActiveIndex(currentIdx)
          },
        },
      })

      return () => {
        tween.kill()
      }
    }, sectionEl)

    return () => ctx.revert()
  }, [totalSheets])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full overflow-hidden scroll-mt-24 bg-transparent pt-16 pb-8 md:pt-20 md:pb-10"
    >
      {/* Anchor identifier untuk navigasi #process */}
      <span id="process" className="absolute -top-24 pointer-events-none opacity-0" />
      <div
        ref={viewportRef}
        className="relative z-10 mx-auto flex h-[calc(100vh-7.5rem)] min-h-[540px] max-h-[780px] w-full max-w-[1440px] flex-col justify-between px-4 md:px-8 lg:px-12"
      >
        {/* Area Tengah: Track Horizontal yang Bergeser ke Kiri Saat Scroll */}
        <div className="relative flex flex-1 items-center overflow-visible">
          <div
            ref={trackRef}
            className="flex items-stretch gap-7 will-change-transform md:gap-9"
          >
            <ProjectsIntroColumn />

            {PROJECTS.map((project, idx) => (
              <ProjectCard key={project.slug} project={project} index={idx} />
            ))}
          </div>
        </div>

        {/* Baris Indikator Garis Bawah (SCROLL TO LEAF THROUGH + Line + 01 / 06) */}
        <ProjectsProgressBar
          progressFillRef={progressFillRef}
          activeIndex={activeIndex}
          totalSheets={totalSheets}
        />
      </div>
    </section>
  )
}

export * from "./constants"
export * from "./ProjectPrimitives"
export * from "./ProjectsIntroColumn"
export * from "./ProjectCard"
export * from "./ProjectsProgressBar"
export default ProjectsSection
