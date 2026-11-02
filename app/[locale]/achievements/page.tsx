import React from "react"
import type { Metadata } from "next"
import { AchievementsPage } from "@/components/achievements/AchievementsPage"

export const metadata: Metadata = {
  title: "Achievements & Certifications | Nuril Anwar",
  description:
    "Official credentials, expert bootcamps, and national innovation awards achieved by Nuril Anwar in Full-Stack and Applied AI Engineering.",
}

export default function Page() {
  return <AchievementsPage />
}
