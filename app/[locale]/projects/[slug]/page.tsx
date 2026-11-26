import React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import { PROJECTS } from "@/components/sections/Projects/constants"
import { ProjectDetailHeroNew } from "./components/ProjectDetailHeroNew"
import { ProjectDetailColophon } from "./components/ProjectDetailColophon"
import { TableOfContents } from "@/components/shared/TableOfContents"
import { SubSheetModulePreview } from "@/components/sections/Projects/ProjectBlueprintPreview"

interface ProjectDetailPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

/**
 * Pre-generate static params for all supported locales and project slugs.
 */
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of routing.locales) {
    for (const project of PROJECTS) {
      params.push({
        locale,
        slug: project.slug,
      })
    }
    // Backward compatibility for previously cached / bookmarked slug
    params.push({
      locale,
      slug: "sipasi-pdam-sukoharjo",
    })
  }
  return params
}

function findProjectBySlug(slug: string) {
  const normalized = slug === "sipasi-pdam-sukoharjo" ? "sipasi-pdam-surakarta" : slug
  return PROJECTS.find((p) => p.slug === slug || p.slug === normalized)
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = findProjectBySlug(slug)
  if (!project) {
    return { title: "Sheet Not Found | N28/Labs" }
  }
  return {
    title: `${project.title} (${project.sheetCode}) | N28/Labs Portfolio`,
    description: project.description,
  }
}

async function resolveMdx(slug: string, locale: string) {
  const normalized = slug === "sipasi-pdam-sukoharjo" ? "sipasi-pdam-surakarta" : slug
  try {
    const mod = await import(`@/content/projects/${normalized}-${locale}.mdx`)
    return mod.default
  } catch {
    try {
      const fallback = locale === "id" ? "en" : "id"
      const fallbackMod = await import(`@/content/projects/${normalized}-${fallback}.mdx`)
      return fallbackMod.default
    } catch {
      return null
    }
  }
}

/**
 * Halaman Detail Studi Kasus Proyek (`/projects/[slug]`)
 * Mengadopsi arsitektur 2 kolom Arsaludin dengan palet kertas sketsa arsitektur hangat (#EBE3D7 & #FAF6F0):
 * - Kolom Kiri:
 *   1. Bar navigasi Breadcrumbs (Home > Projects > Title)
 *   2. Banner Pratinjau Sistem aspect-video
 *   3. Overlapping metadata card bertekstur kertas vellum (#FAF6F0)
 *   4. Narasi studi kasus 8 bab lengkap via MDX berkinerja tinggi
 *   5. Modul cetak biru CAD (SubSheetModulePreview)
 * - Kolom Kanan (Sticky Sidebar):
 *   1. Navigasi Sticky "ON THIS PAGE" (Table of Contents) dengan scroll-spy aktif
 *   2. Kartu Side Informasi Proyek (Sheet Code, Status, Organisasi, Peran, Tech Stack, & Aksi)
 * - Bagian Bawah:
 *   Footer kolofon arsitektur N28 studio bergaya lembar gambar teknik
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug, locale } = await params
  const project = findProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const isId = locale === "id"
  const MdxContent = await resolveMdx(slug, locale)

  return (
    <main className="min-h-screen bg-[#EBE3D7] text-[#1C1C1A] pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-[1380px] px-4 md:px-6 lg:px-8">
        {/* 2-Column Responsive Layout: Left Article & Right Sticky Sidebar (TOC + Side Info) */}
        <div className="flex flex-col items-start gap-8 lg:flex-row">
          {/* Main Left Column (Article) */}
          <article className="w-full flex-1 min-w-0 pb-12 lg:pb-20">
            {/* Header, Aspect-Video Banner & Overlapping Card */}
            <ProjectDetailHeroNew project={project} locale={locale} />

            {/* MDX Case Study Content */}
            {MdxContent && (
              <div className="mt-10 md:mt-14 space-y-6 text-[#4A4742]">
                <MdxContent />
              </div>
            )}

            {/* Technical Blueprint CAD Modules (Miracle Preview Style) */}
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

          {/* Right Sidebar: Sticky Table of Contents (Arsaludin Standard) */}
          <aside className="sticky top-28 hidden w-64 xl:w-72 shrink-0 lg:block">
            <TableOfContents locale={locale} />
          </aside>
        </div>

        {/* Footer Arsitektur Studio */}
        <ProjectDetailColophon locale={locale} />
      </div>
    </main>
  )
}
