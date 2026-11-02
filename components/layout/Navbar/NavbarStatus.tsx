import React from "react"
import { ClockTime } from "./useLiveWeatherClock"

/**
 * Properti untuk komponen NavbarStatus
 */
interface NavbarStatusProps {
  /** Nama kota lokasi saat ini (misal: "Surakarta") */
  city: string
  /** Data waktu real-time yang memuat jam, menit, detik, dan status kedipan titik dua */
  time: ClockTime
  /** Deskripsi cuaca dan suhu (misal: "28°, cerah berawan") */
  weather: string
  /** Status apakah data cuaca sedang diperbarui dari API */
  isLoading: boolean
  /** Apakah sedang dalam mode gelap */
  isDark?: boolean
}

/**
 * Komponen NavbarStatus
 * Menampilkan status cuaca, waktu lokal, dan indikator lokasi real-time pada bilah navigasi:
 * - Menampilkan titik indikator live yang berdenyut (pulse) ketika data cuaca sedang dimuat/diperbarui
 * - Merender jam dan menit lokal dengan tanda titik dua (:) berkedip presisi setiap detik
 * - Menyajikan suhu udara dan kondisi langit terkini wilayah Surakarta berbasis API Open-Meteo
 */
export const NavbarStatus: React.FC<NavbarStatusProps> = ({
  city,
  time,
  weather,
  isLoading,
  isDark = false,
}) => {
  return (
    <div className="flex flex-col items-end text-right font-mono text-[12px] leading-tight select-none">
      <div
        className={`flex items-center gap-1.5 ${
          isDark ? "text-white" : "text-[#1C1C1A]"
        }`}
      >
        <span
          className={`hidden h-1.5 w-1.5 rounded-full transition-opacity sm:inline-block ${
            isLoading
              ? "animate-pulse bg-amber-400/50"
              : isDark
              ? "bg-amber-400"
              : "bg-[#B7835A]"
          }`}
          title={isLoading ? "Updating..." : "Live"}
        />
        <span
          className={
            isDark
              ? "text-zinc-400 sm:text-zinc-200"
              : "text-[#6B6964] sm:text-[#1C1C1A]"
          }
        >
          {city}
        </span>
        <span className="font-medium tabular-nums">
          {time.hh}
          <span
            className="mx-[1px] inline-block transition-opacity duration-150 select-none"
            style={{ opacity: time.showColon ? 1 : 0.15 }}
            aria-hidden="true"
          >
            :
          </span>
          {time.mm}
        </span>
      </div>
      <span
        className={`hidden text-[10.5px] capitalize sm:inline-block ${
          isDark ? "text-zinc-400" : "text-[#6B6964]"
        }`}
      >
        {weather}
      </span>
    </div>
  )
}

export default NavbarStatus
