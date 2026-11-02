export type StudioStampShape = "arch-compass" | "isometric-cube" | "astrolabe" | "custom"

/**
 * Konfigurasi Ikon & Stempel Studio di sisi kiri (AboutStudioStamp)
 * Anda dapat mengganti `shape` ke:
 * - "arch-compass"   : Busur arsitektur + jarum kompas yang berputar mengikuti scroll
 * - "isometric-cube" : Kubus blueprint isometrik yang menyesuaikan bentuk saat di-scroll
 * - "astrolabe"      : Cincin orbit teknis ganda dengan inti tembaga
 * - "custom"         : Menggunakan path SVG kustom pada `customSvgPath`
 */
export const STUDIO_STAMP_CONFIG: {
  shape: StudioStampShape
  size: number
  strokeWidth: number
  animateOnScroll: boolean
  line1: string
  line2: string
  code: string
  customSvgPath?: string
} = {
  shape: "arch-compass",
  size: 44,
  strokeWidth: 1.5,
  animateOnScroll: true,
  line1: "EST. 2022",
  line2: "SURAKARTA, ID",
  code: "STAMP // N28",
  // Jika shape diubah ke "custom", path SVG di bawah ini yang akan digambar:
  customSvgPath: "M4 28 C 4 12, 44 12, 44 28 M12 28 L36 28",
}

/**
 * Konstanta data konten terpadu untuk Section 02 — About & Architectural Manifesto
 */
export const ABOUT_CONTENT = {
  num: "(02)",
  label: "SPECIFICATION // ABOUT & APPLIED AI FOCUS",
  tags: ["UMS", "INFORMATICS", "DICODING ALUMNI"],
  sheetCode: "SHEET A-102",
  watermark: "ABOUT",
  leadPrefix:
    "Informatics Engineering student at Universitas Muhammadiyah Surakarta, dedicated to architecting",
  leadHighlight: "reliable full-stack applications and applied AI products",
  leadSuffix: ".",
  description:
    "Experience across web and mobile development — crafting responsive user interfaces, engineering robust RESTful APIs, and seamlessly embedding Large Language Models like Google Gemini into intuitive, high-performance digital ecosystems.",
  caption:
    "[ DICODING BOOTCAMP ALUMNI • SYSTEM INTEGRATION • COLLABORATIVE TECH TEAM CONTRIBUTOR ]",
  highlights: [
    { label: "ORIGIN // UMS", value: "Surakarta", desc: "Informatics Eng." },
    {
      label: "CORE ARCHITECTURE",
      value: "Full-Stack Dev",
      desc: "Web & Mobile Apps",
    },
    {
      label: "APPLIED AI",
      value: "Gemini LLM",
      desc: "Intelligent Systems",
    },
    {
      label: "CREDENTIAL",
      value: "Dicoding Alumni",
      desc: "Certified Engineer",
    },
  ],
  button: {
    label: "Learn More About Me",
    href: "/about",
  },
}

export const HIGHLIGHT_KEYWORDS = [
  "responsive",
  "RESTful",
  "APIs",
  "Large",
  "Language",
  "Models",
  "Google",
  "Gemini",
  "high-performance",
]

export const SKILL_ITEMS: string[] = [
  "Full-Stack Development",
  "LLM & Gemini Integration",
  "Next.js & React",
  "TypeScript",
  "Tailwind CSS",
  "RESTful APIs",
  "Flutter & Dart",
  "NestJS & Supabase",
  "System Architecture",
  "Dicoding Certified",
]
