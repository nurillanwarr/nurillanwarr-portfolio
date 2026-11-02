import React from "react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { routing } from "@/i18n/routing"
import { PROJECTS } from "@/components/sections/Projects/constants"
import { ProjectDetailHeroNew } from "./components/ProjectDetailHeroNew"
import { ProjectDetailArticleLayout } from "./components/ProjectDetailArticleLayout"
import { ProjectDetailColophon } from "./components/ProjectDetailColophon"

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

/**
 * Halaman Detail Studi Kasus Proyek (`/projects/[slug]`)
 * Menggunakan palet kertas sketsa arsitektur hangat khas portofolio (#EBE3D7 & #FAF6F0):
 * 1. ProjectDetailHeroNew:
 *    - Breadcrumbs (Home > Projects > Title)
 *    - Banner pratinjau sistem aspect-video
 *    - Overlapping metadata card bertekstur kertas vellum (#FAF6F0)
 * 2. ProjectDetailArticleLayout:
 *    - Kolom Kiri: Narasi studi kasus 8 bab lengkap persis arsaludin (Background, Problem, Goals, Roles, Process 3 Fase, Results, Impact, Team)
 *    - Kolom Kanan: Navigasi Sticky "ON THIS PAGE" (Table of Contents) dengan scroll-spy aktif
 * 3. ProjectDetailColophon: Footer arsitektur N28 studio bergaya lembar gambar teknik
 */
export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params
  const project = findProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#EBE3D7] text-[#1C1C1A] pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 lg:px-12">
        {/* Header & Overlapping Card Sesuai Tema Kertas Portfolio */}
        <ProjectDetailHeroNew project={project} />

        {/* 2-Column Layout: Narasi Studi Kasus 8 Bab & Sticky ON THIS PAGE Table of Contents */}
        <ProjectDetailArticleLayout project={project} />

        {/* Footer Arsitektur Studio */}
        <ProjectDetailColophon />
      </div>
    </main>
  )
}
