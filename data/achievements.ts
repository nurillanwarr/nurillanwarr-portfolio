export type AchievementType = "award" | "course"
export type AchievementLevel = "expert" | "intermediate" | "beginner" | "winner"

export interface Achievement {
  id: string
  name: string
  type: AchievementType
  level: AchievementLevel
  issuing_organization: string
  organization_logo?: string
  credential_url: string
  credential_id: string
  issue_date: string
  expiration_date: string | null
  categories: string[]
  description: string
  recipient_name: string
  signatory_name: string
  signatory_title: string
  badge_label?: string
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-01",
    name: "Menjadi Front-End Web Developer Expert",
    type: "course",
    level: "expert",
    issuing_organization: "Dicoding Indonesia",
    credential_id: "N9Z0E7030XG5",
    issue_date: "July 22, 2024",
    expiration_date: "July 22, 2027",
    categories: ["Front End", "React.js", "Web Performance", "Clean Code"],
    description:
      "Sertifikasi kelulusan tingkat mahir dalam rekayasa frontend web modern, arsitektur Single Page Application (SPA), optimasi web performance, accessibility WCAG, dan progressive web apps.",
    recipient_name: "M. Nuril Anwar",
    signatory_name: "Narenda Wicaksono",
    signatory_title: "Chief Executive Officer · Dicoding Indonesia",
    credential_url: "https://www.dicoding.com/certificates/N9Z0E7030XG5",
    badge_label: "Dicoding Expert",
  },
  {
    id: "ach-02",
    name: "Menjadi Back-End Developer Expert",
    type: "course",
    level: "expert",
    issuing_organization: "Dicoding Indonesia",
    credential_id: "72PRV4K2KZY5",
    issue_date: "August 15, 2024",
    expiration_date: "August 15, 2027",
    categories: ["Back End", "Node.js", "RESTful API", "PostgreSQL", "Security"],
    description:
      "Sertifikasi kelulusan tingkat mahir dalam perancangan backend arsitektural berskala tinggi, microservices, database relational PostgreSQL, automasi pengujian, dan caching performa tinggi.",
    recipient_name: "M. Nuril Anwar",
    signatory_name: "Narenda Wicaksono",
    signatory_title: "Chief Executive Officer · Dicoding Indonesia",
    credential_url: "https://www.dicoding.com/certificates/72PRV4K2KZY5",
    badge_label: "Dicoding Expert",
  },
  {
    id: "ach-03",
    name: "National Finalist & Top Innovation — Hackathon X Digdaya AI",
    type: "award",
    level: "winner",
    issuing_organization: "Hackathon X Digdaya",
    credential_id: "DIGDAYA-AI-NUSA-2026",
    issue_date: "September 26, 2026",
    expiration_date: null,
    categories: ["Applied AI", "FinTech", "RAG Pipeline", "FastAPI"],
    description:
      "Penghargaan inovasi atas pengembangan platform 'NusaTerminal', Bloomberg Terminal ritel bertenaga AI dengan integrasi RAG ChromaDB, Gemini 1.5 Flash, dan klasifikasi sentimen IndoBERT.",
    recipient_name: "M. Nuril Anwar",
    signatory_name: "Digdaya Board",
    signatory_title: "Head of AI Innovation Jury · Digdaya Indonesia",
    credential_url: "https://github.com/nurillanwarr",
    badge_label: "National Winner",
  },
  {
    id: "ach-04",
    name: "Samsung Innovation Campus — AI & Mobile Vision Track",
    type: "award",
    level: "expert",
    issuing_organization: "Samsung Innovation",
    credential_id: "SIC-2025-SEGER-VISION",
    issue_date: "December 10, 2025",
    expiration_date: null,
    categories: ["Computer Vision", "Flutter", "On-Device AI", "Gamification"],
    description:
      "Rekognisi keunggulan teknis dalam pengembangan 'SEGER Exergame' — aplikasi mobile vision yang memproses gerakan tubuh anak secara real-time di perangkat untuk kebugaran fisik.",
    recipient_name: "M. Nuril Anwar",
    signatory_name: "Samsung Program Director",
    signatory_title: "Samsung Innovation Campus Indonesia",
    credential_url: "https://github.com/nurillanwarr",
    badge_label: "Samsung Innovation",
  },
  {
    id: "ach-05",
    name: "Silver Award Recognition — MTE Malaysia & UGM Tech Competition",
    type: "award",
    level: "winner",
    issuing_organization: "MTE Malaysia & UGM",
    credential_id: "MTE-UGM-2025-SYNEXA",
    issue_date: "May 18, 2025",
    expiration_date: null,
    categories: ["HealthTech", "Clean Architecture", "NestJS", "Flutter"],
    description:
      "Penghargaan internasional atas sistem 'Synexa Apps' — aplikasi mobile rehabilitasi motorik pasca stroke dan sinkronisasi telemetri pengasuh berbasis NestJS & Flutter.",
    recipient_name: "M. Nuril Anwar",
    signatory_name: "Organizing Committee",
    signatory_title: "Malaysia Technology Expo & UGM Scientific Committee",
    credential_url: "https://github.com/nurillanwarr",
    badge_label: "International Award",
  },
  {
    id: "ach-06",
    name: "Undergraduate Research Honor — Federated Healthcare AI",
    type: "award",
    level: "expert",
    issuing_organization: "Universitas Muhammadiyah Surakarta",
    credential_id: "UMS-INF-2026-SKRIPSI",
    issue_date: "October 2026",
    expiration_date: null,
    categories: ["Blockchain", "Federated Learning", "Web3", "PyTorch"],
    description:
      "Pengakuan riset tugas akhir (skripsi) dalam pengembangan sistem 'FedHealth Web3' yang memadukan Federated Learning bergaransi Differential Privacy dan verifikasi on-chain Ethereum.",
    recipient_name: "M. Nuril Anwar",
    signatory_name: "Ketua Program Studi Informatika",
    signatory_title: "Fakultas Komunikasi dan Informatika · UMS",
    credential_url: "https://github.com/nurillanwarr",
    badge_label: "Academic Honor",
  },
]
