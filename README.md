# N28/Labs — Nuril Anwar Portfolio (`nurillanwarr-portfolio`)

Website portofolio rekayasa perangkat lunak milik **Nuril Anwar** (Full-Stack Web, Backend API, Mobile Flutter & Applied Gemini AI Engineer) yang mengusung estetika **Architectural Blueprint & Technical Drawing Sheet** (terinspirasi dari pendekatan editorial *Oda Arkitekter* dan tata letak interaktif modern).

---

## 1. Filosofi Desain & Palet Warna (Architectural Blueprint Theme)

Seluruh halaman dirancang menyerupai lembar kerja gambar arsitektur (*CAD Drawing Sheet*) di atas kertas tekstur hangat dengan garis-garis presisi, tanda registrasi (*registration marks*), dan penomoran spesifikasi (`SHEET A-101`, `SPEC // 01`, dsb.):

| Elemen | Kode Hex | Peran Visual |
| :--- | :--- | :--- |
| **Warm Parchment Paper** | `#EBE3D7` | Warna dasar latar belakang lembar gambar utama |
| **Elevated Drafting Card** | `#F5F2EB` | Permukaan kartu, panel spesifikasi, dan kontainer komponen |
| **Architectural Ink** | `#1C1C1A` | Garis tepi CAD, teks utama, dan tombol aksi primer |
| **Copper / Terracotta Accent** | `#A3724B` | Aksen utama, indeks penomoran, sorotan kata kunci serif miring |
| **Deep Bronze Accent** | `#8C5E38` | Status aktif, badge level keahlian, dan interaksi hover tombol |
| **Drafting Graphite** | `#736E65` / `#55534E` | Metadata monospace, koordinat lembar, dan teks deskripsi sekunder |

---

## 2. Teknologi Utama (Tech Stack)

- **Framework**: [Next.js 16.3.7](https://nextjs.org/) (App Router, Turbopack, TypeScript 5)
- **UI & Styling**: React 19, Tailwind CSS v4 (`@tailwindcss/postcss`), `clsx` & `tailwind-merge`
- **Animasi & Interaksi**:
  - **Lenis (`lenis`)**: *Smooth scrolling* inersia di seluruh halaman dan navigasi anchor (`#about`, `#experience`, `#projects`, `#contact`).
  - **GSAP (`gsap` + `@gsap/react` + `ScrollTrigger`)**: Animasi berbasis scroll (scrubbing teks per karakter/kata pada `IntroStatement`, transisi halaman `PageTransition`, dan panel menu `Navbar`).
  - **Framer Motion (`framer-motion`)**: Ilustrasi blueprint hidup (*live miniature UI*), *staggered expand/collapse* pada kartu keahlian & timeline pengalaman, serta *scroll-driven timeline line*.
- **Internasionalisasi (i18n)**: `next-intl` (mendukung multi-bahasa: `en`, `id`, `zh`).

---

## 3. Struktur Direktori & Penyusun Proyek

```text
nurillanwarr-portfolio/
├── app/
│   ├── globals.css                     # Variabel CSS, aturan Lenis smooth scroll & utilitas global
│   ├── manifest.ts                     # Konfigurasi PWA Web App Manifest
│   ├── opengraph-image.tsx             # Generator gambar OpenGraph dinamis
│   ├── robots.ts & sitemap.ts          # Konfigurasi SEO crawler & peta situs
│   └── [locale]/                       # Routing berbasis bahasa (en / id / zh)
│       ├── layout.tsx                  # Root layout: Font, SmoothScroll, PageTransition, Navbar, BackToTop
│       ├── page.tsx                    # Halaman Utama (Landing Page)
│       ├── loading.tsx & not-found.tsx # State loading & halaman 404 bertema Blueprint
│       ├── about/                      # Halaman Detail Profil (/about)
│       │   ├── page.tsx                # Penggabung seluruh seksi halaman About
│       │   └── components/             # Modul penyusun halaman About:
│       │       ├── AboutHero.tsx               # Hero profil & pengantar halaman About
│       │       ├── AboutDetails.tsx            # Biografi lengkap, lokasi, & spesifikasi diri
│       │       ├── AboutSkills.tsx             # Grid 4 kolom Domain Keahlian (Expand/Collapse mulus)
│       │       ├── AboutSkillIllustrations.tsx # 4 Ilustrasi miniatur interaktif (Web, API, Mobile, AI)
│       │       ├── AboutExperience.tsx         # Timeline vertikal zig-zag pengalaman & kompetisi
│       │       ├── AboutEducation.tsx          # Riwayat pendidikan (UMS) & daftar penghargaan/kompetisi
│       │       ├── AboutQuote.tsx              # Kutipan prinsip rekayasa perangkat lunak
│       │       └── constants.ts                # Data terstruktur untuk kartu keahlian (SKILL_DOMAIN_CARDS)
│       ├── projects/                   # Halaman Arsip Proyek (/projects & /projects/[slug])
│       └── achievements/               # Halaman Arsip Pencapaian (/achievements)
├── components/
│   ├── BackToTop.tsx                   # Tombol melayang kembali ke atas (terintegrasi Lenis)
│   ├── layout/
│   │   ├── SmoothScroll.tsx            # Integrasi Lenis + GSAP ScrollTrigger + intersepsi hash link
│   │   ├── PageTransition.tsx          # Tirai transisi antar-rute bergaya kertas arsitektur
│   │   └── Navbar/                     # Sistem Navigasi Atas & Drawer Menu Fullscreen
│   │       ├── index.tsx               # Orkestrator Navbar固定 (fixed) & panel menu
│   │       ├── NavbarBrand.tsx         # Identitas studio "N28/Labs PORTFOLIO"
│   │       ├── NavbarNav.tsx           # Tautan navigasi bernomor (02 About .. 05 Contact)
│   │       ├── NavbarStatus.tsx        # Indikator lokasi, jam real-time & cuaca (Sukoharjo/Surakarta)
│   │       ├── NavbarMobileToggle.tsx  # Tombol buka/tutup menu pada layar mobile
│   │       ├── MenuPanel.tsx           # Panel menu layar penuh dengan animasi GSAP
│   │       ├── useLiveWeatherClock.ts  # Hook pengambil waktu & cuaca lokal real-time
│   │       └── useMenuAnimations.ts    # Hook timeline animasi GSAP untuk menu
│   ├── sections/                       # Seksi-seksi Penyusun Halaman Utama (Landing Page)
│   │   ├── Hero/                       # (01) Hero Section — Headline utama, badge status, potret & CTA
│   │   ├── About/                      # (02) Unified About & Manifesto — Gabungan Intro + About + Watermark
│   │   │   ├── index.tsx               # Kontainer AboutSection (DrawingSheet "editorial" + Giant Watermark)
│   │   │   ├── AboutHeaderStrip.tsx    # Baris koordinat atas (SPECIFICATION // SHEET A-102)
│   │   │   ├── AboutStudioStamp.tsx    # Stempel arsitektur kolom kiri (EST, 2022 — SURAKARTA)
│   │   │   ├── AboutManifesto.tsx      # Manifesto terpadu (serif italic tembaga + GSAP scrub + tombol CTA)
│   │   │   ├── AboutMetrics.tsx        # 4 angka metrik arsitektural berslashed CAD
│   │   │   ├── AboutMarquee.tsx        # Pita berjalan (marquee) kata kunci kapabilitas teknis
│   │   │   └── AboutFooterStrip.tsx    # Baris metadata bawah & indikator lanjut ke Experience
│   │   ├── Experience/                 # (03) Selected Experience — Ringkasan jejak karier & proyek utama
│   │   ├── Projects/                   # (04) Featured Works — Katalog karya unggulan (Synexa, Girantra, dll.)
│   │   └── Contact/                    # (05) Contact & Footer — Kartu kolaborasi, tautan sosial & hak cipta
│   └── shared/                         # Komponen Fondasi Visual Bersama
│       ├── DrawingSheet/               # Kanvas dasar lembar kerja arsitektur
│       │   ├── index.tsx               # Pembungkus halaman dengan garis grid & bingkai CAD
│       │   ├── PaperTexture.tsx        # Lapisan tekstur kertas SVG noise halus
│       │   └── RegistrationMark.tsx    # Tanda silang presisi (+) di sudut-sudut lembar kerja
│       ├── SectionContainer.tsx        # Pembungkus seksi standar dengan batas lebar & garis pembatas
│       └── SectionHeading.tsx          # Header seksi bernomor teknis
├── i18n/                               # Konfigurasi routing & request multi-bahasa (next-intl)
├── lib/
│   └── utils.ts                        # Utilitas penggabung class Tailwind (`cn`)
└── messages/                           # Kamus terjemahan bahasa (en.json, id.json, zh.json)
```

---

## 4. Penjelasan Detail Bagian-Bagian Penyusun Portofolio

### A. Lapisan Fondasi & Layout Global (`app/[locale]/layout.tsx`)
1. **`DrawingSheet` (`components/shared/DrawingSheet/`)**:
   Menjadi kanvas utama seluruh halaman. Memberikan latar warna kertas `#EBE3D7`, efek grain/tekstur kertas (`PaperTexture.tsx`), serta tanda registrasi sudut (`RegistrationMark.tsx`).
2. **`SmoothScroll` (`components/layout/SmoothScroll.tsx`)**:
   Menginisialisasi `Lenis` dan menyinkronkannya langsung dengan `gsap.ticker` serta `ScrollTrigger.update`. Juga menangkap klik pada tautan anchor (`#about`, `/#projects`, dsb.) agar menggulir mulus dengan kompensasi offset `-88px` untuk tinggi navbar.
3. **`PageTransition` (`components/layout/PageTransition.tsx`)**:
   Memberikan efek transisi tirai geometris (`clip-path`) berwarna tinta `#1C1C1A` saat berpindah halaman penuh (misalnya dari `/` ke `/about`), namun secara cerdas melewati (*bypass*) tautan hash di halaman yang sama agar *smooth scroll* langsung bekerja.
4. **`Navbar` (`components/layout/Navbar/`)**:
   Bar navigasi melayang yang menampilkan identitas **N28/Labs**, menu bernomor (`02 About`, `03 Experience`, `04 Projects`, `05 Contact`), serta widget waktu dan kondisi cuaca langsung (*live clock & weather*) untuk wilayah Sukoharjo/Surakarta.

---

### B. Penyusun Halaman Utama (`app/[locale]/page.tsx`)
Halaman utama disusun secara berurutan layaknya bundel dokumen blueprint:
1. **`HeroSection` (`components/sections/Hero/`)**:
   Menggunakan `DrawingSheet` varian `"default"` (bingkai ganda klasik dengan 4 tanda registrasi bidik lingkaran). Menampilkan identitas utama Nuril Anwar, lencana ketersediaan kolaborasi (`HeroBadge`), tipografi besar beraksen serif miring (`HeroHeadline`), bingkai potret bergaya teknis (`HeroPortrait`), dan tombol aksi cepat (`HeroActions`).
2. **`AboutSection` Terpadu (`components/sections/About/`)**:
   Menggabungkan pernyataan visi (`Intro`) dan ringkasan profil (`About`) ke dalam `DrawingSheet` varian `"editorial"` (lembar vellum `#F2ECE1` dengan siku L tembaga, mistar skala `00–100 MM`, dan garis lipat CAD):
   - **Giant Background Watermark (`ABOUT`)**: Tipografi latar berukuran besar (`17vw–23vw`) dengan efek *soft blur* dan *parallax* GSAP saat halaman digulir.
   - `AboutHeaderStrip` & `AboutStudioStamp`: Kop lembar spesifikasi (`SHEET A-102`) dan stempel studio di kolom kiri.
   - `AboutManifesto`: Menggabungkan kalimat utama beraksen *serif italic* tembaga (`#A3724B`), paragraf *scroll-scrubbing* kata demi kata, stempel kredensial monospace, serta tombol menuju halaman detail `/about`.
   - `AboutMetrics` & `AboutMarquee`: 4 angka metrik pencapaian berslashed CAD dan pita teks berjalan (*infinite ticker*) di bagian bawah lembar.
3. **`ExperienceSection` (`components/sections/Experience/`)**:
   Daftar ringkas pengalaman proyek dan kompetisi dalam format tabel baris arsitektural (`ExperienceItem`).
4. **`ProjectsSection` (`components/sections/Projects/`)**:
   Etalase proyek unggulan (`ProjectCard`) lengkap dengan pratinjau visual, tumpukan teknologi (*tech stack*), dan tautan menuju studi kasus.
5. **`ContactSection` (`components/sections/Contact/`)**:
   Penutup halaman berupa kartu ajakan kolaborasi (`ContactCard`), tautan langsung ke email/GitHub/LinkedIn/Instagram, serta catatan kaki hak cipta.

---

### C. Penyusun Halaman Detail About (`app/[locale]/about/page.tsx`)
Halaman `/about` menyajikan spesifikasi mendalam mengenai latar belakang dan kemampuan teknis Nuril Anwar:
1. **`AboutHero` & `AboutDetails`**:
   Memperkenalkan profil lengkap, latar belakang pendidikan Teknik Informatika di Universitas Muhammadiyah Surakarta (UMS), serta fokus pengembangan produk.
2. **`AboutSkills` & `AboutSkillIllustrations` (`SPEC // 01` – `SPEC // 04`)**:
   Matriks kapabilitas teknis dalam **Grid 4 Kolom Sejajar (`lg:grid-cols-4`)**:
   - **Front-End & Web Development (`SPEC // 01`)**: Dilengkapi miniatur browser interaktif (`WebIllustration`) dengan grafik batang hidup dan kursor yang bergerak otomatis.
   - **Back-End & API Architecture (`SPEC // 02`)**: Dilengkapi diagram arsitektur server & database (`BackendIllustration`) dengan paket data yang mengalir di sepanjang jalur SVG.
   - **Mobile App Development (`SPEC // 03`)**: Dilengkapi kerangka smartphone Flutter (`MobileIllustration`) dengan grafik kesehatan/rehabilitasi real-time dan notifikasi melayang.
   - **Applied AI & LLM Integration (`SPEC // 04`)**: Dilengkapi diagram orbit **Gemini 2.0 Flash** (`AiIllustration`) dengan satelit node yang mengelilingi inti AI.
   - **Fitur Expand (`+N`) & Collapse (`Less −`) Mulus**: Menggunakan pengukur tinggi instan (`ResizeObserver` pada sizer bayangan) dan gelombang *stagger* maju/mundur sehingga kartu membuka dan menutup dengan sangat halus tanpa hentakan layout.
3. **`AboutExperience` (`SHEET A-204`)**:
   Timeline vertikal zig-zag yang menampilkan rekam jejak proyek nyata (**Smart Stroke / Synexa** untuk I2ASPO & MTE Malaysia, **Girantra** AI Agri Marketplace, **HIMATIF UMS**, **ASEAN Challenge**, dan **Dicoding Bootcamp**) dengan garis sumbu tengah yang menggambar turun mengikuti scroll.
4. **`AboutEducation` & `AboutQuote`**:
   Menampilkan detail pendidikan akademik, sertifikasi, dan daftar penghargaan kompetisi yang dapat dibuka/ditutup secara bertahap, ditutup dengan kutipan filosofi kerja.

---

## 5. Cara Menjalankan Proyek di Lokal

Pastikan Anda berada di dalam direktori `nurillanwarr-portfolio`:

```bash
# 1. Masuk ke direktori proyek
cd "portfolio me/nurillanwarr-portfolio"

# 2. Instal dependensi (disarankan menggunakan pnpm)
pnpm install

# 3. Jalankan server pengembangan (http://localhost:3000)
pnpm dev

# 4. Periksa tipe TypeScript atau bangun untuk produksi
pnpm exec tsc --noEmit
pnpm build
```
