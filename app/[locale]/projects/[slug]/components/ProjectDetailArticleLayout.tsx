"use client"

import React from "react"
import { ProjectData } from "@/components/sections/Projects/constants"
import { SubSheetModulePreview } from "@/components/sections/Projects/ProjectBlueprintPreview"
import { TableOfContents } from "@/components/shared/TableOfContents"
import { PROJECT_CASE_STUDIES } from "@/data/projectCaseStudies"

interface ProjectDetailArticleLayoutProps {
  project: ProjectData
}

/**
 * Komponen ProjectDetailArticleLayout
 * Menampilkan tata letak 2 kolom studi kasus profesional terstruktur khas arsaludin.my.id (Gambar 1),
 * dengan estetika kertas vellum arsitektural portofolio Nuril Anwar (#EBE3D7 & #FAF6F0):
 * - Kolom Kiri: Artikel komprehensif terstruktur:
 *   1. Background (Latar Belakang & Konteks Operasional)
 *   2. Problem Identification (Identifikasi Masalah Pokok)
 *   3. Goals and Objectives (Tujuan & Sasaran Strategis)
 *   4. Roles and Responsibilities (Peran & Tanggung Jawab Utama)
 *   5. Process and Execution (Proses & Eksekusi: 3 Fase Iteratif)
 *      - 1. Learning and Technical Adaptation
 *      - 2. Project Kick-off and Alignment
 *      - 3. Development and Implementation
 *   6. Results (Hasil: Komponen, Modul CAD, & Arsitektur)
 *   7. Impact (Dampak: Bagi Perusahaan/Instansi & Dampak Pribadi)
 *      - Impact on the Company
 *      - Personal Impact
 *   8. Team and Appreciation (Tim Kolaborator & Apresiasi)
 * - Kolom Kanan: Navigasi Daftar Isi Sticky ("ON THIS PAGE") dengan scroll-spy aktif
 */
export const ProjectDetailArticleLayout: React.FC<
  ProjectDetailArticleLayoutProps
> = ({ project }) => {
  const caseStudy =
    PROJECT_CASE_STUDIES[project.slug] ||
    PROJECT_CASE_STUDIES[project.slug.replace("sukoharjo", "surakarta")] ||
    PROJECT_CASE_STUDIES[project.slug.replace("surakarta", "sukoharjo")]

  return (
    <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
      {/* Left Column: Comprehensive Structured Case Study Article */}
      <article className="lg:col-span-9 space-y-16">
        {/* 1. Background */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            01 // CONTEXT
          </div>
          <h2
            id="background"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Background
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4A4742]">
            <p>
              {caseStudy?.background.lead || project.storyParagraphs[0]}
            </p>
            {caseStudy?.background.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </section>

        {/* 2. Problem Identification */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            02 // CHALLENGE
          </div>
          <h2
            id="problem-identification"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Problem Identification
          </h2>
          <div className="mt-4 rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 text-sm leading-relaxed text-[#55534E] shadow-sm">
            <p className="font-semibold text-[#1C1C1A]">
              Based on the operational context, the primary challenges and friction points identified were as follows:
            </p>
            <ul className="mt-4 space-y-3">
              {(caseStudy?.problemIdentification || [
                "Fragmented manual processes created operational bottlenecks and lacked centralized status visibility.",
                "Urgent demand for enterprise-grade security standards and multi-role data access isolation.",
                "Absence of automation mechanisms capable of processing document workflows with zero tampering risk.",
              ]).map((problem, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38] mt-0.5 shrink-0">◆</span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Goals and Objectives */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            03 // OBJECTIVES
          </div>
          <h2
            id="goals-and-objectives"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Goals and Objectives
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4A4742]">
            <p>
              {caseStudy?.goalsAndObjectives.mainGoal ||
                `The overarching goal of this project was to architect and deliver ${project.title} as a resilient, scalable, and production-ready system.`}
            </p>
            <p className="font-semibold text-[#1C1C1A] mt-4">
              To accomplish this mission, the following core objectives were established:
            </p>
            <ul className="space-y-3 mt-3">
              {(caseStudy?.goalsAndObjectives.objectives || [
                "Digitize end-to-end operational workflows into a modern, unified web architecture.",
                "Guarantee data accuracy, transparency, and cryptographic verification at every lifecycle event.",
                "Dramatically reduce turnaround latency across core transaction pipelines.",
              ]).map((obj, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <span className="text-[#8C5E38] mt-0.5 shrink-0">✓</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Roles and Responsibilities */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            04 // OWNERSHIP
          </div>
          <h2
            id="roles-and-responsibilities"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Roles and Responsibilities
          </h2>
          <p className="mt-3 text-base text-[#4A4742]">
            {caseStudy?.rolesAndResponsibilities.lead ||
              `In this initiative, I served as ${project.role}, exercising end-to-end technical leadership across the engineering lifecycle:`}
          </p>

          <ol className="mt-6 divide-y divide-[#1C1C1A]/15 border-y border-[#1C1C1A]/15">
            {(caseStudy?.rolesAndResponsibilities.responsibilities || project.contributions).map(
              (responsibility, idx) => (
                <li
                  key={idx}
                  className="grid grid-cols-[2.5rem_1fr] items-start gap-4 py-4 text-sm leading-relaxed text-[#3D3A35] sm:grid-cols-[3.2rem_1fr]"
                >
                  <span className="font-mono text-xs font-bold text-[#8C5E38]">
                    0{idx + 1}.
                  </span>
                  <span>{responsibility}</span>
                </li>
              )
            )}
          </ol>
        </section>

        {/* 5. Process and Execution */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            05 // EXECUTION
          </div>
          <h2
            id="process-and-execution"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Process and Execution
          </h2>
          <p className="mt-3 text-base text-[#4A4742]">
            This initiative followed a structured three-phase development framework to balance operational stakeholder expectations with resilient technical design:
          </p>

          {/* Sub-phase 1 */}
          <div className="mt-8 space-y-4">
            <h3
              id="learning-and-technical-adaptation"
              className="text-xl font-bold tracking-tight text-[#1C1C1A]"
            >
              {caseStudy?.processAndExecution.phase1.title || "1. Learning and Technical Adaptation"}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4742] sm:text-base">
              {caseStudy?.processAndExecution.phase1.summary ||
                "Evaluated technical standards, framework APIs, and architectural trade-offs to meet strict performance constraints."}
            </p>
            <ul className="space-y-2.5 rounded-xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-5 text-sm text-[#55534E]">
              {(caseStudy?.processAndExecution.phase1.details || [
                "Explored foundational specifications and modern industry best practices.",
                "Engineered rapid prototypes to validate latency boundaries and security thresholds.",
              ]).map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38]">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-phase 2 */}
          <div className="mt-10 space-y-4">
            <h3
              id="project-kickoff-and-alignment"
              className="text-xl font-bold tracking-tight text-[#1C1C1A]"
            >
              {caseStudy?.processAndExecution.phase2.title || "2. Project Kick-off and Alignment"}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4742] sm:text-base">
              {caseStudy?.processAndExecution.phase2.summary ||
                "Conducted stakeholder discovery sessions to formulate state machines and formalize access boundaries."}
            </p>
            <ul className="space-y-2.5 rounded-xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-5 text-sm text-[#55534E]">
              {(caseStudy?.processAndExecution.phase2.details || [
                "Defined module boundaries and granular role-based authorization rules.",
                "Formulated immutable audit event schemas and state transitions.",
              ]).map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38]">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sub-phase 3 */}
          <div className="mt-10 space-y-4">
            <h3
              id="development-and-implementation"
              className="text-xl font-bold tracking-tight text-[#1C1C1A]"
            >
              {caseStudy?.processAndExecution.phase3.title || "3. Development and Implementation"}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4742] sm:text-base">
              {caseStudy?.processAndExecution.phase3.summary ||
                "Executed agile implementation sprints with continuous code reviews, unit testing, and benchmarking."}
            </p>
            <ul className="space-y-2.5 rounded-xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-5 text-sm text-[#55534E]">
              {(caseStudy?.processAndExecution.phase3.details || [
                "Iterated through structured sprint backlogs from schema migrations to responsive interfaces.",
                "Conducted rigorous User Acceptance Testing (UAT) and load testing prior to production rollout.",
              ]).map((detail, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38]">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. Results */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            06 // BLUEPRINTS
          </div>
          <h2
            id="results"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Results
          </h2>
          <p className="mt-3 text-base text-[#4A4742]">
            {caseStudy?.results.overview ||
              "The project successfully shipped a resilient, modular architectural ecosystem with measurable operational benchmarks:"}
          </p>

          {/* Preview CAD Sub-sheets */}
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 rounded-2xl overflow-hidden border border-[#1C1C1A]/15 bg-[#FAF6F0] p-4 shadow-sm">
            <div className="rounded-xl overflow-hidden border border-[#1C1C1A]/15">
              <SubSheetModulePreview
                sheet={project.subSheetLeft}
                projectTitle={project.title}
              />
            </div>

            <div className="rounded-xl overflow-hidden border border-[#1C1C1A]/15">
              <SubSheetModulePreview
                sheet={project.subSheetRight}
                projectTitle={project.title}
              />
            </div>
          </div>

          {/* Module Result Details */}
          <div className="mt-8 space-y-6">
            {(caseStudy?.results.modules || [
              {
                title: "Core Enterprise Architecture",
                slug: "core-architecture",
                description: "Modular enterprise architecture engineered for high horizontal scalability.",
                highlights: ["High-performance backend API", "Responsive web frontend"],
              },
            ]).map((mod) => (
              <div
                key={mod.slug}
                className="rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 shadow-sm"
              >
                <h3
                  id={mod.slug}
                  className="text-lg font-bold text-[#1C1C1A] sm:text-xl"
                >
                  {mod.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#55534E]">
                  {mod.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {mod.highlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-[#EFE9DF] px-3 py-1 font-mono text-xs text-[#55534E] border border-[#1C1C1A]/15"
                    >
                      ✓ {hl}
                    </span>
                  ))}
                </div>
                {mod.metrics && (
                  <div className="mt-4 grid grid-cols-2 gap-4 border-t border-[#1C1C1A]/15 pt-4 sm:grid-cols-4">
                    {mod.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="font-mono text-[10px] text-[#736E65] uppercase">
                          {m.label}
                        </div>
                        <div className="font-mono text-sm font-bold text-[#8C5E38]">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 7. Impact */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            07 // IMPACT
          </div>
          <h2
            id="impact"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Impact
          </h2>

          {/* Impact on Company */}
          <div className="mt-6 space-y-3">
            <h3
              id="impact-on-the-company"
              className="text-xl font-bold tracking-tight text-[#1C1C1A]"
            >
              Impact on the Company
            </h3>
            <ul className="space-y-3 rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 text-sm text-[#55534E] shadow-sm">
              {(caseStudy?.impact.company || project.impacts).map((impact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38] font-bold shrink-0">✓</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Impact */}
          <div className="mt-8 space-y-3">
            <h3
              id="personal-impact"
              className="text-xl font-bold tracking-tight text-[#1C1C1A]"
            >
              Personal Impact
            </h3>
            <ul className="space-y-3 rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 text-sm text-[#55534E] shadow-sm">
              {(caseStudy?.impact.personal || [
                "Deepened production-level systems design and architecture capabilities under real constraints.",
                "Honed rigorous testing, self-directed code reviews, and high-standard software craft.",
              ]).map((impact, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38] font-bold shrink-0">★</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. Team and Appreciation */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            08 // APPRECIATION
          </div>
          <h2
            id="team-and-appreciation"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            Team and Appreciation
          </h2>
          <div className="mt-4 rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 text-sm leading-relaxed text-[#55534E] shadow-sm">
            <p className="text-base text-[#1C1C1A]">
              {caseStudy?.teamAndAppreciation.lead ||
                "This initiative was made possible through the generous mentorship, strategic direction, and collaborative support of key partners:"}
            </p>
            <ul className="mt-4 space-y-2.5">
              {(caseStudy?.teamAndAppreciation.members || [
                "Our mentors and faculty advisors for invaluable guidance, technical reviews, and strategic feedback.",
                "Project collaborators and teammates for steadfast dedication throughout system architecture and implementation.",
              ]).map((member, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38]">♥</span>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs italic text-[#736E65] border-t border-[#1C1C1A]/15 pt-4">
              I extend my deepest gratitude and sincere appreciation to everyone who contributed their expertise, feedback, and trust throughout this journey.
            </p>
          </div>
        </section>
      </article>

      {/* Right Column: Sticky Table of Contents ("ON THIS PAGE") */}
      <aside className="lg:col-span-3 hidden lg:block">
        <TableOfContents title="ON THIS PAGE" />
      </aside>
    </div>
  )
}

export default ProjectDetailArticleLayout
