import React from "react"
import {
  WebIllustration,
  BackendIllustration,
  AiIllustration,
  MobileIllustration,
} from "./AboutSkillIllustrations"

export interface SkillTagItem {
  name: string
  category?: "lang" | "tool"
  featured?: boolean
}

export interface SkillDomainCardData {
  id: string
  code: string
  title: string
  level: string
  levelVariant: "expert" | "core"
  description: string
  illustration: React.FC
  initialVisibleCount: number
  tags: SkillTagItem[]
}

export const SKILL_DOMAIN_CARDS: SkillDomainCardData[] = [
  {
    id: "web",
    code: "SPEC // 01",
    title: "Front-End & Web Development",
    level: "Expert",
    levelVariant: "expert",
    description:
      "Crafting intuitive, responsive, and high-performance web interfaces using modern React and Next.js architectures.",
    illustration: WebIllustration,
    initialVisibleCount: 7,
    tags: [
      { name: "Next.js", featured: true },
      { name: "React", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "GSAP", featured: false },
      { name: "Framer Motion", featured: false },
      { name: "HTML5 & CSS3", featured: false },
      { name: "Laravel", featured: false },
      { name: "Vercel", category: "tool" },
      { name: "Vite", category: "tool" },
      { name: "Figma", category: "tool" },
      { name: "Git & GitHub", category: "tool" },
    ],
  },
  {
    id: "api",
    code: "SPEC // 02",
    title: "Back-End & API Architecture",
    level: "Expert",
    levelVariant: "expert",
    description:
      "Developing robust, secure, and scalable server-side RESTful APIs, real-time cloud backends, and relational database schemas.",
    illustration: BackendIllustration,
    initialVisibleCount: 7,
    tags: [
      { name: "NestJS", featured: true },
      { name: "Node.js", featured: true },
      { name: "TypeScript", featured: true },
      { name: "Supabase", featured: true },
      { name: "PostgreSQL", featured: true },
      { name: "Firebase & FCM", featured: true },
      { name: "RESTful API", featured: false },
      { name: "PHP & Laravel", featured: false },
      { name: "Python", featured: false },
      { name: "Docker", category: "tool" },
      { name: "Postman", category: "tool" },
      { name: "GCP & AWS", category: "tool" },
    ],
  },
  {
    id: "mobile",
    code: "SPEC // 03",
    title: "Mobile App Development",
    level: "Expert",
    levelVariant: "expert",
    description:
      "Engineering cross-platform mobile applications with Clean Architecture, real-time health/agri monitoring, and cloud notifications.",
    illustration: MobileIllustration,
    initialVisibleCount: 6,
    tags: [
      { name: "Flutter", featured: true },
      { name: "Dart", featured: true },
      { name: "Clean Architecture", featured: true },
      { name: "Supabase Realtime", featured: true },
      { name: "Firebase FCM", featured: true },
      { name: "Android Studio", category: "tool" },
      { name: "Flutter SDK", category: "tool" },
      { name: "REST Integration", featured: false },
      { name: "UI/UX Prototyping", category: "tool" },
    ],
  },
  {
    id: "ai",
    code: "SPEC // 04",
    title: "Applied AI & LLM Integration",
    level: "Core Focus",
    levelVariant: "core",
    description:
      "Embedding Large Language Models and intelligent recommendation pipelines directly into web and mobile product ecosystems.",
    illustration: AiIllustration,
    initialVisibleCount: 5,
    tags: [
      { name: "Gemini 2.0 Flash", featured: true },
      { name: "Google Gemini SDK", featured: true },
      { name: "LLM Integration", featured: true },
      { name: "Python", featured: true },
      { name: "Prompt Engineering", featured: false },
      { name: "Machine Learning", featured: false },
      { name: "Jupyter & Colab", category: "tool" },
      { name: "PyTorch", featured: false },
      { name: "Pandas", featured: false },
      { name: "Google AI Studio", category: "tool" },
    ],
  },
]
