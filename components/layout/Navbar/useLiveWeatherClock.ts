"use client"

import { useEffect, useState } from "react"

const WMO_WEATHER_MAP: Record<number, string> = {
  0: "cerah",
  1: "sebagian cerah",
  2: "cerah berawan",
  3: "mendung",
  45: "berkabut",
  48: "kabut tebal",
  51: "gerimis ringan",
  53: "gerimis sedang",
  55: "gerimis lebat",
  61: "hujan ringan",
  63: "hujan sedang",
  65: "hujan lebat",
  71: "salju ringan",
  73: "salju sedang",
  75: "salju lebat",
  80: "hujan lokal",
  81: "hujan deras",
  82: "hujan badai singkat",
  95: "hujan petir",
  96: "hujan petir disertai es",
  99: "badai petir hebat",
}

/**
 * Koordinat geografis resmi Kota Surakarta, Jawa Tengah
 */
export const SURAKARTA_LOCATION = {
  city: "Surakarta",
  lat: -7.5666,
  lon: 110.8166,
}

/**
 * Representasi data waktu jam dinding digital
 */
export interface ClockTime {
  /** Digit dua angka jam (00-23) */
  hh: string
  /** Digit dua angka menit (00-59) */
  mm: string
  /** Digit dua angka detik (00-59) */
  ss: string
  /** Status kedipan titik dua pemisah jam:menit */
  showColon: boolean
}

/**
 * Struktur state untuk jam dan status cuaca real-time
 */
export interface LiveWeatherClockState {
  /** Nama kota yang dipantau */
  city: string
  /** Data waktu digital saat ini */
  time: ClockTime
  /** Ringkasan temperatur dan kondisi cuaca saat ini */
  weather: string
  /** Indikator status pengambilan data cuaca dari jaringan */
  isLoading: boolean
}

/**
 * Hook useLiveWeatherClock
 * Menyediakan data waktu lokal real-time dan prakiraan cuaca live wilayah Surakarta:
 * - Memperbarui jam, menit, dan status kedipan titik dua setiap 1000ms (1 detik)
 * - Mengambil data suhu aktual dan kode cuaca WMO dari API Open-Meteo dengan mekanisme cache sesi (sessionStorage)
 * - Menerjemahkan kode cuaca WMO ke dalam deskripsi bahasa Indonesia yang ramah pengguna
 *
 * @param {string} [defaultCity="Surakarta"] Nama kota default yang ditampilkan
 * @returns {LiveWeatherClockState} Objek state berisi nama kota, waktu digital, teks cuaca, dan status loading
 */
export function useLiveWeatherClock(defaultCity = "Surakarta") {
  const [state, setState] = useState<LiveWeatherClockState>({
    city: defaultCity,
    time: { hh: "12", mm: "00", ss: "00", showColon: true },
    weather: "28°, cerah berawan",
    isLoading: true,
  })

  // 1. Update Jam & Detik Real-Time Setiap 1 Detik
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date()
        const hh = String(now.getHours()).padStart(2, "0")
        const mm = String(now.getMinutes()).padStart(2, "0")
        const seconds = now.getSeconds()
        const ss = String(seconds).padStart(2, "0")
        // ':' berkedip setiap detik sebagai penanda detik berjalan
        const showColon = seconds % 2 === 0

        setState((prev) => ({
          ...prev,
          time: { hh, mm, ss, showColon },
        }))
      } catch {
        // Fallback
      }
    }

    updateTime()
    const clockInterval = setInterval(updateTime, 1000)
    return () => clearInterval(clockInterval)
  }, [])

  // 2. Fetch Suhu & Cuaca Asli Real-Time untuk Surakarta via Open-Meteo
  useEffect(() => {
    let isMounted = true
    const CACHE_KEY = "surakarta_live_weather_cache"
    const CACHE_DURATION = 10 * 60 * 1000

    const fetchWeather = async () => {
      try {
        if (typeof window !== "undefined") {
          const cached = sessionStorage.getItem(CACHE_KEY)
          if (cached) {
            const { city, weather, timestamp } = JSON.parse(cached)
            if (Date.now() - timestamp < CACHE_DURATION) {
              if (isMounted) {
                setState((prev) => ({
                  ...prev,
                  city: city || defaultCity,
                  weather,
                  isLoading: false,
                }))
              }
              return
            }
          }
        }

        const lat = SURAKARTA_LOCATION.lat
        const lon = SURAKARTA_LOCATION.lon
        const cityName = SURAKARTA_LOCATION.city

        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=Asia%2FJakarta`
        const weatherRes = await fetch(weatherUrl, { signal: AbortSignal.timeout(6000) })

        if (weatherRes.ok) {
          const weatherData = await weatherRes.json()
          const temp = Math.round(weatherData.current?.temperature_2m ?? 28)
          const code = Number(weatherData.current?.weather_code ?? 0)
          const desc = WMO_WEATHER_MAP[code] || "cerah berawan"
          const formattedWeather = `${temp}°, ${desc}`

          if (typeof window !== "undefined") {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({
                city: cityName,
                weather: formattedWeather,
                timestamp: Date.now(),
              })
            )
          }

          if (isMounted) {
            setState((prev) => ({
              ...prev,
              city: cityName,
              weather: formattedWeather,
              isLoading: false,
            }))
          }
        }
      } catch {
        if (isMounted) {
          setState((prev) => ({
            ...prev,
            city: defaultCity,
            weather: "28°, cerah berawan",
            isLoading: false,
          }))
        }
      }
    }

    fetchWeather()

    return () => {
      isMounted = false
    }
  }, [defaultCity])

  return state
}

export default useLiveWeatherClock
