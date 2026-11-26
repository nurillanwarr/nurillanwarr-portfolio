"use client"

import React from "react"
import { useLocale } from "next-intl"
import { ProjectData } from "@/components/sections/Projects/constants"
import { SubSheetModulePreview } from "@/components/sections/Projects/ProjectBlueprintPreview"
import { TableOfContents } from "@/components/shared/TableOfContents"
import { getProjectCaseStudy } from "@/data/projectCaseStudies"

interface ProjectDetailArticleLayoutProps {
  project: ProjectData
  locale?: string
  children?: React.ReactNode
}

/**
 * Komponen ProjectDetailArticleLayout
 * Menampilkan tata letak 2 kolom studi kasus profesional terstruktur khas arsaludin.my.id,
 * dengan dukungan dwibahasa penuh (English default & Bahasa Indonesia):
 * - Kolom Kiri: Artikel komprehensif terstruktur 8 Bab:
 *   1. Background (Latar Belakang & Konteks Operasional)
 *   2. Problem Identification (Identifikasi Masalah Pokok)
 *   3. Goals and Objectives (Tujuan & Sasaran Strategis)
 *   4. Roles and Responsibilities (Peran & Tanggung Jawab Utama)
 *   5. Process and Execution (Proses & Eksekusi: 3 Fase Iteratif)
 *   6. Results (Hasil: Komponen, Modul CAD, & Arsitektur)
 *   7. Impact (Dampak: Bagi Instansi & Dampak Pribadi)
 *   8. Team and Appreciation (Tim Kolaborator & Apresiasi)
 * - Kolom Kanan: Navigasi Daftar Isi Sticky ("ON THIS PAGE" / "DI HALAMAN INI")
 */
export const ProjectDetailArticleLayout: React.FC<
  ProjectDetailArticleLayoutProps
> = ({ project, locale: localeProp, children }) => {
  const hookLocale = useLocale()
  const locale = localeProp || hookLocale || "en"
  const isId = locale === "id"
  const caseStudy = getProjectCaseStudy(project.slug, locale)

  if (children) {
    return (
      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Comprehensive MDX Case Study Article */}
        <article className="lg:col-span-9 space-y-6">
          <div className="space-y-6 text-[#4A4742]">{children}</div>

          {/* Blueprint CAD Interactive Sub-Sheets Section (Arsaludin Miracle Preview Style) */}
          <div className="mt-16 pt-10 border-t border-[#1C1C1A]/15">
            <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
              // {isId ? "CETAK BIRU TEKNIS & MODUL SISTEM" : "TECHNICAL BLUEPRINT & SYSTEM MODULES"}
            </div>
            <h3
              id="cad-blueprint-modules"
              className="mt-2 text-xl font-bold tracking-tight text-[#1C1C1A] sm:text-2xl"
            >
              {isId ? "Spesifikasi Modul & Pratinjau CAD" : "Module Specifications & CAD Previews"}
            </h3>
            <p className="mt-2 text-sm text-[#736E65]">
              {isId
                ? "Diagram cetak biru interaktif yang merepresentasikan komponen arsitektur utama dari sistem ini:"
                : "Interactive blueprint schematics representing the primary architectural components of this system:"}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-4 shadow-sm transition-all hover:border-[#8C5E38]/50">
                <SubSheetModulePreview
                  sheet={project.subSheetLeft}
                  projectTitle={project.title}
                />
              </div>
              <div className="rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-4 shadow-sm transition-all hover:border-[#8C5E38]/50">
                <SubSheetModulePreview
                  sheet={project.subSheetRight}
                  projectTitle={project.title}
                />
              </div>
            </div>
          </div>
        </article>

        {/* Right Column: Sticky Table of Contents */}
        <aside className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-28">
            <TableOfContents locale={locale} />
          </div>
        </aside>
      </div>
    )
  }

  return (
    <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
      {/* Left Column: Comprehensive Structured Case Study Article */}
      <article className="lg:col-span-9 space-y-16">
        {/* 1. Background */}
        <section>
          <div className="font-mono text-[10.5px] font-semibold tracking-[0.2em] text-[#8C5E38] uppercase">
            01 // {isId ? "KONTEKS" : "CONTEXT"}
          </div>
          <h2
            id="background"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Latar Belakang" : "Background"}
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
            02 // {isId ? "TANTANGAN" : "CHALLENGE"}
          </div>
          <h2
            id="problem-identification"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Identifikasi Masalah" : "Problem Identification"}
          </h2>
          <div className="mt-4 rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 text-sm leading-relaxed text-[#55534E] shadow-sm">
            <p className="font-semibold text-[#1C1C1A]">
              {isId
                ? "Berdasarkan konteks operasional, tantangan pokok dan kendala utama yang diidentifikasi meliputi:"
                : "Based on the operational context, the primary challenges and friction points identified were as follows:"}
            </p>
            <ul className="mt-4 space-y-3">
              {(caseStudy?.problemIdentification || [
                isId
                  ? "Proses manual yang terfragmentasi menimbulkan hambatan operasional dan kurangnya visibilitas terpusat."
                  : "Fragmented manual processes created operational bottlenecks and lacked centralized status visibility.",
                isId
                  ? "Kebutuhan mendesak akan standar keamanan korporat dan isolasi akses data multi-peran."
                  : "Urgent demand for enterprise-grade security standards and multi-role data access isolation.",
                isId
                  ? "Ketiadaan mekanisme otomatisasi yang mampu memproses dokumen tanpa risiko manipulasi."
                  : "Absence of automation mechanisms capable of processing document workflows with zero tampering risk.",
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
            03 // {isId ? "SASARAN" : "OBJECTIVES"}
          </div>
          <h2
            id="goals-and-objectives"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Tujuan dan Sasaran" : "Goals and Objectives"}
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-[#4A4742]">
            <p>
              {caseStudy?.goalsAndObjectives.mainGoal ||
                (isId
                  ? `Tujuan utama proyek ini adalah merancang dan membangun ${project.title} sebagai sistem yang tangguh, terukur, dan siap digunakan di lingkungan produksi.`
                  : `The overarching goal of this project was to architect and deliver ${project.title} as a resilient, scalable, and production-ready system.`)}
            </p>
            <p className="font-semibold text-[#1C1C1A] mt-4">
              {isId
                ? "Untuk menuntaskan misi tersebut, sasaran utama berikut ini ditetapkan:"
                : "To accomplish this mission, the following core objectives were established:"}
            </p>
            <ul className="space-y-3 mt-3">
              {(caseStudy?.goalsAndObjectives.objectives || [
                isId
                  ? "Mendigitalkan alur kerja operasional menyeluruh ke dalam arsitektur web modern yang terpadu."
                  : "Digitize end-to-end operational workflows into a modern, unified web architecture.",
                isId
                  ? "Menjamin akurasi data, transparansi, dan verifikasi kriptografis di setiap tahapan."
                  : "Guarantee data accuracy, transparency, and cryptographic verification at every lifecycle event.",
                isId
                  ? "Memangkas latensi pemrosesan secara drastis pada seluruh siklus transaksi inti."
                  : "Dramatically reduce turnaround latency across core transaction pipelines.",
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
            04 // {isId ? "KEPEMIMPINAN" : "OWNERSHIP"}
          </div>
          <h2
            id="roles-and-responsibilities"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Peran dan Tanggung Jawab" : "Roles and Responsibilities"}
          </h2>
          <p className="mt-3 text-base text-[#4A4742]">
            {caseStudy?.rolesAndResponsibilities.lead ||
              (isId
                ? `Dalam inisiatif ini, saya berperan sebagai ${project.role}, memegang kepemimpinan teknis penuh di seluruh siklus rekayasa perangkat lunak:`
                : `In this initiative, I served as ${project.role}, exercising end-to-end technical leadership across the engineering lifecycle:`)}
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
            05 // {isId ? "METODOLOGI" : "EXECUTION"}
          </div>
          <h2
            id="process-and-execution"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Proses dan Eksekusi" : "Process and Execution"}
          </h2>
          <p className="mt-3 text-base text-[#4A4742]">
            {isId
              ? "Inisiatif ini mengikuti kerangka pengembangan terstruktur tiga fase guna menyeimbangkan ekspektasi pemangku kepentingan dengan arsitektur teknis yang kokoh:"
              : "This initiative followed a structured three-phase development framework to balance operational stakeholder expectations with resilient technical design:"}
          </p>

          {/* Sub-phase 1 */}
          <div className="mt-8 space-y-4">
            <h3
              id="learning-and-technical-adaptation"
              className="text-xl font-bold tracking-tight text-[#1C1C1A]"
            >
              {caseStudy?.processAndExecution.phase1.title ||
                (isId ? "1. Riset & Adaptasi Teknis" : "1. Learning and Technical Adaptation")}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4742] sm:text-base">
              {caseStudy?.processAndExecution.phase1.summary ||
                (isId
                  ? "Mengevaluasi standar teknis, framework API, dan pertimbangan arsitektur untuk memenuhi kriteria performa ketat."
                  : "Evaluated technical standards, framework APIs, and architectural trade-offs to meet strict performance constraints.")}
            </p>
            <ul className="space-y-2.5 rounded-xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-5 text-sm text-[#55534E]">
              {(caseStudy?.processAndExecution.phase1.details || [
                isId
                  ? "Mengeksplorasi spesifikasi fondasi dan praktik rekayasa perangkat lunak modern."
                  : "Explored foundational specifications and modern industry best practices.",
                isId
                  ? "Membangun prototipe cepat untuk memvalidasi batas latensi dan keamanan."
                  : "Engineered rapid prototypes to validate latency boundaries and security thresholds.",
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
              {caseStudy?.processAndExecution.phase2.title ||
                (isId ? "2. Kick-Off Proyek & Penyelarasan" : "2. Project Kick-off and Alignment")}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4742] sm:text-base">
              {caseStudy?.processAndExecution.phase2.summary ||
                (isId
                  ? "Menyelaraskan ekspektasi antardivisi dan merumuskan batasan otorisasi akses."
                  : "Conducted stakeholder discovery sessions to formulate state machines and formalize access boundaries.")}
            </p>
            <ul className="space-y-2.5 rounded-xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-5 text-sm text-[#55534E]">
              {(caseStudy?.processAndExecution.phase2.details || [
                isId
                  ? "Mendefinisikan batasan modul dan aturan otorisasi berbasis peran yang terperinci."
                  : "Defined module boundaries and granular role-based authorization rules.",
                isId
                  ? "Merumuskan skema pencatatan log audit permanen dan transisi status."
                  : "Formulated immutable audit event schemas and state transitions.",
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
              {caseStudy?.processAndExecution.phase3.title ||
                (isId ? "3. Pengembangan & Implementasi" : "3. Development and Implementation")}
            </h3>
            <p className="text-sm leading-relaxed text-[#4A4742] sm:text-base">
              {caseStudy?.processAndExecution.phase3.summary ||
                (isId
                  ? "Mengeksekusi sprint implementasi secara agile dengan tinjauan kode berkelanjutan dan pengujian terukur."
                  : "Executed agile implementation sprints with continuous code reviews, unit testing, and benchmarking.")}
            </p>
            <ul className="space-y-2.5 rounded-xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-5 text-sm text-[#55534E]">
              {(caseStudy?.processAndExecution.phase3.details || [
                isId
                  ? "Mengembangkan fitur bertahap dari migrasi skema basis data hingga antarmuka responsif."
                  : "Iterated through structured sprint backlogs from schema migrations to responsive interfaces.",
                isId
                  ? "Menjalankan User Acceptance Testing (UAT) komprehensif dan uji beban sebelum peluncuran produksi."
                  : "Conducted rigorous User Acceptance Testing (UAT) and load testing prior to production rollout.",
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
            06 // {isId ? "HASIL KARYA" : "BLUEPRINTS"}
          </div>
          <h2
            id="results"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Hasil dan Modul Arsitektur" : "Results"}
          </h2>
          <p className="mt-3 text-base text-[#4A4742]">
            {caseStudy?.results.overview ||
              (isId
                ? "Proyek ini berhasil meluncurkan ekosistem arsitektur modular yang tangguh dengan tolok ukur operasional yang terukur:"
                : "The project successfully shipped a resilient, modular architectural ecosystem with measurable operational benchmarks:")}
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
                title: isId ? "Arsitektur Inti Sistem" : "Core Enterprise Architecture",
                slug: "core-architecture",
                description: isId
                  ? "Arsitektur modular yang dirancang untuk skalabilitas horizontal tinggi."
                  : "Modular enterprise architecture engineered for high horizontal scalability.",
                highlights: isId
                  ? ["API backend berkinerja tinggi", "Antarmuka web responsif"]
                  : ["High-performance backend API", "Responsive web frontend"],
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
            07 // {isId ? "DAMPAK" : "IMPACT"}
          </div>
          <h2
            id="impact"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Dampak dan Signifikansi" : "Impact"}
          </h2>

          {/* Impact on Company */}
          <div className="mt-6 space-y-3">
            <h3
              id="impact-on-the-company"
              className="text-xl font-bold tracking-tight text-[#1C1C1A]"
            >
              {isId ? "Dampak bagi Instansi / Organisasi" : "Impact on the Company"}
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
              {isId ? "Dampak Pembelajaran Pribadi" : "Personal Impact"}
            </h3>
            <ul className="space-y-3 rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 text-sm text-[#55534E] shadow-sm">
              {(caseStudy?.impact.personal || [
                isId
                  ? "Memperdalam kapabilitas perancangan arsitektur sistem tingkat produksi di bawah batasan dunia nyata."
                  : "Deepened production-level systems design and architecture capabilities under real constraints.",
                isId
                  ? "Mengasah ketelitian pengujian, code review mandiri, dan standar kualitas kode yang tinggi."
                  : "Honed rigorous testing, self-directed code reviews, and high-standard software craft.",
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
            08 // {isId ? "KOLABORASI" : "APPRECIATION"}
          </div>
          <h2
            id="team-and-appreciation"
            className="mt-2 text-2xl font-bold tracking-tight text-[#1C1C1A] sm:text-3xl"
          >
            {isId ? "Tim dan Apresiasi Kolaborasi" : "Team and Appreciation"}
          </h2>
          <div className="mt-4 rounded-2xl border border-[#1C1C1A]/15 bg-[#FAF6F0] p-6 text-sm leading-relaxed text-[#55534E] shadow-sm">
            <p className="text-base text-[#1C1C1A]">
              {caseStudy?.teamAndAppreciation.lead ||
                (isId
                  ? "Inisiatif ini dapat terwujud berkat bimbingan, arahan strategis, dan dukungan kolaboratif dari para mitra kunci:"
                  : "This initiative was made possible through the generous mentorship, strategic direction, and collaborative support of key partners:")}
            </p>
            <ul className="mt-4 space-y-2.5">
              {(caseStudy?.teamAndAppreciation.members || [
                isId
                  ? "Para mentor dan dosen pembimbing atas bimbingan berharga, tinjauan teknis, dan masukan strategis."
                  : "Our mentors and faculty advisors for invaluable guidance, technical reviews, and strategic feedback.",
                isId
                  ? "Rekan tim dan kolaborator proyek atas dedikasi teguh sepanjang proses arsitektur dan implementasi sistem."
                  : "Project collaborators and teammates for steadfast dedication throughout system architecture and implementation.",
              ]).map((member, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#8C5E38]">♥</span>
                  <span>{member}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs italic text-[#736E65] border-t border-[#1C1C1A]/15 pt-4">
              {isId
                ? "Saya menyampaikan rasa terima kasih dan penghargaan setulus-tulusnya kepada semua pihak yang telah memberikan keahlian, bimbingan, masukan, serta kepercayaan sepanjang perjalanan ini."
                : "I extend my deepest gratitude and sincere appreciation to everyone who contributed their expertise, feedback, and trust throughout this journey."}
            </p>
          </div>
        </section>
      </article>

      {/* Right Column: Sticky Table of Contents ("ON THIS PAGE" / "DI HALAMAN INI") */}
      <aside className="lg:col-span-3 hidden lg:block">
        <TableOfContents
          title={isId ? "DI HALAMAN INI" : "ON THIS PAGE"}
          locale={locale}
        />
      </aside>
    </div>
  )
}

export default ProjectDetailArticleLayout
