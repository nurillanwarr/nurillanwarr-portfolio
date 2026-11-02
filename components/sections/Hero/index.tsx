import React from "react"
import { DrawingSheet } from "@/components/shared/DrawingSheet"
import { HeroActions } from "./HeroActions"
import { HeroBadge } from "./HeroBadge"
import { HeroFooterStrip } from "./HeroFooterStrip"
import { HeroHeadline } from "./HeroHeadline"
import { HeroPortrait } from "./HeroPortrait"

/**
 * Komponen HeroSection
 * Menampilkan bagian utama beranda / Hero (Section 01):
 * - Membungkus seluruh tampilan pembuka di dalam DrawingSheet dengan tekstur kertas utama dan batas tepi arsitektur
 * - Sisi kiri: Stempel identitas lembar (HeroBadge), judul utama perkenalan (HeroHeadline), dan tombol ajakan aksi (HeroActions)
 * - Sisi kanan: Kartu foto profil interaktif 3D tilt (HeroPortrait) dengan aksen selotip perekat
 * - Bagian bawah: Strip penutup (HeroFooterStrip) berisi tautan sosial, keahlian teknologi, dan petunjuk scroll
 *
 * @returns {JSX.Element} Elemen kontainer seksi Hero
 */
export const HeroSection: React.FC = () => {
  return (
    <DrawingSheet id="home" className="mt-3 md:mt-4">
      <div className="px-5 pt-5 pb-5 md:px-8 md:pt-6 md:pb-6 lg:px-10">
        <HeroBadge />

        <div className="mt-5 grid grid-cols-1 items-center gap-8 lg:mt-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <HeroHeadline />
            <HeroActions />
          </div>

          <div className="lg:col-span-5">
            <HeroPortrait />
          </div>
        </div>

        <HeroFooterStrip />
      </div>
    </DrawingSheet>
  )
}

export default HeroSection
