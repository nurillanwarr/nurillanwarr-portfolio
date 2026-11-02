import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export interface DayData {
  date: string
  count: number
  level: number
  dayOfWeek: number
  weekIndex: number
  monthName: string
}

export interface ContributionsPayload {
  username: string
  total: number
  longestStreak: number
  activeDaysPercent: number
  days: DayData[]
}

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  }
  return date.toLocaleDateString("en-US", options)
}

/**
 * Route Handler: GET /api/github-contributions
 * Mengambil data kontribusi GitHub riil akun @nurillanwarr
 * Menggunakan cache Next.js revalidate 1 jam (3600s) agar performa secepat kilat & hemat kuota API.
 */
export async function GET() {
  const username = "nurillanwarr"

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        next: { revalidate: 3600 },
      }
    )

    if (!res.ok) {
      throw new Error(`GitHub contributions API responded with status ${res.status}`)
    }

    const data = await res.json()
    const rawContributions: { date: string; count: number; level: number }[] =
      data.contributions || []

    let total = Number(data.total?.lastYear) || 0
    let longestStreak = 0
    let tempStreak = 0
    let activeDays = 0

    const days: DayData[] = []

    // Normalisasi hari dan minggu
    let currentWeekIndex = 0

    for (let i = 0; i < rawContributions.length; i++) {
      const item = rawContributions[i]
      const dateObj = new Date(item.date)
      const dayOfWeek = dateObj.getDay() // 0 = Sunday, 6 = Saturday

      if (i > 0 && dayOfWeek === 0) {
        currentWeekIndex++
      }

      const count = Number(item.count) || 0
      const level = Math.min(Math.max(Number(item.level) || 0, 0), 4)

      if (count > 0) {
        activeDays++
        tempStreak++
        if (tempStreak > longestStreak) {
          longestStreak = tempStreak
        }
      } else {
        tempStreak = 0
      }

      days.push({
        date: formatDate(dateObj),
        count,
        level,
        dayOfWeek,
        weekIndex: currentWeekIndex,
        monthName: MONTH_NAMES[dateObj.getMonth()],
      })
    }

    // Jika total dari API 0 atau tidak ada, hitung dari akumulasi hari
    if (!total) {
      total = days.reduce((sum, d) => sum + d.count, 0)
    }

    const activeDaysPercent =
      days.length > 0 ? Math.round((activeDays / days.length) * 100) : 0

    const payload: ContributionsPayload = {
      username,
      total,
      longestStreak,
      activeDaysPercent,
      days,
    }

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("Failed to fetch real GitHub contributions:", error)

    // Fallback respons darurat jika koneksi jaringan terputus
    return NextResponse.json(
      {
        error: "Fallback data",
        username,
        total: 121,
        longestStreak: 4,
        activeDaysPercent: 18,
        days: [],
      },
      { status: 200 }
    )
  }
}
