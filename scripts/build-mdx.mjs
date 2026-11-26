import fs from "fs"
import path from "path"

const targetDir = path.resolve(import.meta.dirname, "../content/projects")
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

// Load case study data by reading the TypeScript files and extracting clean data structures
// We can define the 6 comprehensive projects cleanly in JS so there are no import/transpilation quirks.

const projectsData = [
  // 1. SIPASI PDAM
  {
    slug: "sipasi-pdam-surakarta",
    aliases: ["sipasi-pdam-sukoharjo", "sipasi-pdam"],
    sheetCode: "PRJ-01",
    number: "01",
    year: "2026",
    role: "Fullstack Developer Intern",
    status: "Proses · Internship",
    discipline: "Fullstack Enterprise Development",
    category: "fullstack",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma ORM",
      "QR PDF Signing",
      "Git & GitHub",
    ],
    id: {
      title: "SIPASI PDAM",
      subtitle: "Paperless Document & Correspondence Management System",
      background: {
        lead: "Sebagai Pengembang Web Fullstack Magang di PDAM Tirta Makmur Surakarta, saya berkolaborasi langsung dengan Sekretariat Perusahaan dan Divisi IT untuk mereformasi alur kerja korespondensi surat-menyurat dan disposisi dokumen dinas yang sebelumnya berbasis kertas manual.",
        paragraphs: [
          "Sebelum inisiatif ini dijalankan, seluruh surat dinas masuk, persetujuan disposisi jajaran direksi, serta nota dinas antar-divisi di 15 unit operasional sepenuhnya bergantung pada lembaran kertas fisik, kurir antar-lantai, dan tanda tangan pena basah. Proses manual ini kerap menimbulkan hambatan di meja manajerial, dengan rata-rata waktu penyelesaian disposisi mencapai beberapa hari kerja per dokumen.",
          "Kendala operasional tersebut mendorong perancangan dan pembangunan SIPASI (Sistem Informasi Pengelolaan Arsip & Surat Internal). Dirancang sebagai platform web korporat terpusat dan 100% bebas kertas (paperless), SIPASI mempercepat throughput surat, menjamin auditabilitas multi-peran, dan memverifikasi keaslian dokumen secara kriptografis melalui tanda tangan digital QR Code pada setiap berkas PDF yang diekspor.",
        ],
      },
      problemIdentification: [
        "Distribusi surat manual yang terfragmentasi menyebabkan waktu perputaran disposisi antar-divisi memakan waktu lebih dari 48 hingga 72 jam kerja.",
        "Tingginya risiko kehilangan dokumen dinas serta kebocoran informasi sensitif akibat belum adanya sistem pelacakan status terpusat secara real-time.",
        "Tanda tangan pena konvensional tidak memiliki mekanisme verifikasi kriptografis, sehingga rentan terhadap pemalsuan maupun modifikasi tanpa izin.",
        "Ketiadaan rekam jejak audit (audit trail) permanen menyulitkan akuntabilitas saat inspeksi regulasi maupun audit kepatuhan internal berlangsung.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Merancang, membangun, dan menggelar SIPASI sebagai Single Source of Truth (SSOT) korespondensi korporat, mengotomatisasi siklus hidup disposisi dokumen dengan jaminan integritas digital ketat bagi PDAM Tirta Makmur Surakarta.",
        objectives: [
          "Mendigitalkan 100% korespondensi fisik ke dalam alur kerja disposisi dan persetujuan multi-peran yang otomatis.",
          "Membangun mesin pembubuhan stempel PDF sisi server berkecepatan sub-detik dengan kode verifikasi QR SHA-256 dinamis.",
          "Mengintegrasikan basis data PostgreSQL dan Prisma ORM untuk merekam log audit permanen bertanda waktu bagi setiap aksi pengguna.",
          "Memangkas rata-rata waktu perputaran dokumen dari 48 jam menjadi di bawah 5 menit secara langsung (real-time).",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Fullstack Developer Intern",
        lead: "Saya memegang kepemilikan teknis penuh mulai dari tahap penemuan kebutuhan bersama pemangku kepentingan hingga peluncuran produksi di seluruh siklus rekayasa perangkat lunak:",
        responsibilities: [
          "Melakukan wawancara kebutuhan mendalam bersama Sekretariat Perusahaan dan pimpinan IT untuk memodelkan hierarki disposisi ke dalam state machine digital.",
          "Merancang skema relasional basis data PostgreSQL ternormalisasi menggunakan Prisma ORM dengan kontrol akses berbasis peran (RBAC) yang ketat.",
          "Membangun antarmuka dashboard responsif berkinerja tinggi menggunakan Next.js 16 App Router, React 19, dan Tailwind CSS.",
          "Mengembangkan generator stempel digital QR Code dinamis yang langsung dibubuhkan ke dalam dokumen PDF dinas secara otomatis.",
          "Menerapkan sistem pencatatan log audit forensik permanen untuk merekam riwayat pembuatan, disposisi, pengunduhan, dan pembacaan surat.",
          "Memimpin User Acceptance Testing (UAT) bersama para kepala seksi dan menuntaskan iterasi perbaikan operasional secara berkala.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Riset Kebutuhan & Kelaikan Teknis",
          summary: "Membedah alur tata persuratan dinas eksisting dan mengevaluasi batasan teknis guna menentukan arsitektur sistem yang andal.",
          details: [
            "Menganalisis matriks hierarki persetujuan dan aturan delegasi disposisi direksi di 15 unit kerja PDAM.",
            "Membuat prototipe mesin pembubuhan stempel QR PDF di lingkungan server guna memastikan latensi pemrosesan di bawah 1 detik.",
            "Merancang skema kontrol akses (RBAC) dengan pemisahan wewenang ketat antara Administrator, Pengagendakan, Direksi, dan Staf.",
          ],
        },
        phase2: {
          title: "2. Kick-Off Proyek & Penyelarasan Alur Disposisi",
          summary: "Membangun konsensus antardivisi mengenai transisi dari dokumen fisik ke sistem persetujuan digital nir-kertas.",
          details: [
            "Menyepakati alur status disposisi surat dinas (Draf, Diterima, Disposisi Direksi, Diteruskan Kabag, Selesai/Diarsipkan).",
            "Merumuskan format metadata surat, penomoran otomatis sesuai klasifikasi kode arsip resmi, dan struktur penamaan berkas.",
            "Menyiapkan lingkungan pengembangan lokal terisolasi serta repositori Git dengan pedoman kode etik arsitektur bersih.",
          ],
        },
        phase3: {
          title: "3. Pengembangan Iteratif & Peluncuran Produksi",
          summary: "Mengeksekusi sprint pengembangan perangkat lunak secara tangkas, pengujian komprehensif, dan peluncuran bertahap ke server produksi.",
          details: [
            "Mengimplementasikan autentikasi sesi aman, manajemen peran berlapis, dan proteksi rute middleware Next.js.",
            "Menghubungkan Prisma ORM dengan PostgreSQL terkelola serta menerapkan indeks komposit guna akselerasi kueri filter surat.",
            "Menjalankan User Acceptance Testing (UAT) komprehensif, pelatihan staf sekretariat, dan pengawalan transisi data arsip aktif.",
          ],
        },
      },
      results: {
        overview: "SIPASI berhasil diluncurkan ke lingkungan produksi PDAM Tirta Makmur Surakarta dengan modul-modul fungsional berstandar korporat:",
        modules: [
          {
            title: "Dashboard Korespondensi & Pelacak Disposisi Multi-Peran",
            description: "Antarmuka terpadu yang menyajikan alur disposisi hierarkis secara real-time sesuai hak akses pengguna masing-masing.",
            highlights: [
              "Tampilan status dinamis: Baru, Menunggu Disposisi Direksi, Didisposisikan, dan Diarsipkan.",
              "Formulir registrasi surat masuk/keluar cerdas dengan penomoran otomatis berbasis klasifikasi kode arsip.",
              "Penyaringan instan berdasarkan tanggal, tingkat urgensi (Biasa, Segera, Rahasia), dan asal instansi.",
            ],
            metrics: [
              { label: "Waktu Proses", value: "< 5 Menit" },
              { label: "Unit Kerja Terlayani", value: "15 Divisi" },
            ],
          },
          {
            title: "Mesin Tanda Tangan Digital & Verifikasi QR PDF",
            description: "Generator stempel digital sisi server yang menyematkan kode verifikasi SHA-256 langsung ke lembar disposisi PDF resmi.",
            highlights: [
              "Penyematan QR Code dinamis otomatis pada sudut lembar disposisi tanpa mengubah tata letak dokumen asli.",
              "Halaman portal verifikasi publik mandiri untuk memvalidasi otentisitas dokumen dengan memindai QR Code.",
              "Validasi sidik jari kriptografis guna mencegah pemalsuan tanda tangan manual dan manipulasi isi surat.",
            ],
            metrics: [
              { label: "Throughput Stempel", value: "Sub-detik" },
              { label: "Tingkat Keaslian", value: "Kriptografis Terverifikasi" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Mengeliminasi 100% konsumsi kertas untuk sirkulasi disposisi nota dinas internal di 15 divisi operasional.",
          "Mencegah kebuntuan alur disposisi antar-lantai dengan sistem notifikasi dan eskalasi status dokumen secara instan.",
          "Menjamin kepatuhan standar audit BPKP melalui penyimpanan rekam jejak digital bertanda waktu yang tidak dapat dimanipulasi.",
        ],
        personal: [
          "Memperdalam penguasaan arsitektur aplikasi skala enterprise dengan Next.js 16, React 19, dan relasi kompleks PostgreSQL.",
          "Mengasah keahlian rekayasa sistem pemrosesan berkas PDF dan kriptografi stempel digital QR Code langsung di sisi server.",
          "Mengembangkan kompetensi komunikasi lintas disiplin dalam menerjemahkan kebutuhan birokrasi pemerintahan ke dalam kode perangkat lunak yang tangguh.",
        ],
      },
      teamAndAppreciation: {
        lead: "Inisiatif transformasi digital ini terwujud berkat bimbingan, sinergi, dan dedikasi rekan-rekan di PDAM Tirta Makmur Surakarta:",
        members: [
          "Bapak/Ibu Pembimbing Lapangan Divisi IT PDAM Tirta Makmur Surakarta atas arahan arsitektur server, keamanan jaringan, dan fasilitas riset yang diberikan.",
          "Jajaran Sekretariat Perusahaan atas masukan kritis serta keterbukaan dalam menyelaraskan alur kerja birokrasi persuratan.",
          "Rekan Mahasiswa Magang Seperjuangan atas kolaborasi harian, diskusi teknis, dan dukungan moral sepanjang periode magang.",
        ],
      },
    },
    en: {
      title: "SIPASI PDAM",
      subtitle: "Paperless Document & Correspondence Management System",
      background: {
        lead: "As a Fullstack Web Developer Intern at PDAM Tirta Makmur Surakarta, I collaborated directly with the Corporate Secretariat and IT Division to overhaul the organization's legacy paper-based correspondence and document disposition workflows.",
        paragraphs: [
          "Prior to this initiative, all incoming official mail, directorate disposition approvals, and inter-divisional memos across 15 operational units relied on physical paper sheets, multi-floor messenger deliveries, and manual ink signatures. This manual routing routinely bottlenecked at managerial desks, causing average disposition lead times of several business days per file.",
          "This operational inertia prompted the development of SIPASI (Sistem Informasi Pengelolaan Arsip & Surat Internal). Designed as a centralized, 100% paperless enterprise web platform, SIPASI accelerates correspondence throughput, guarantees multi-role auditability, and verifies document authenticity with cryptographic QR digital signatures on every exported PDF.",
        ],
      },
      problemIdentification: [
        "Fragmented manual mail distribution resulted in inter-divisional disposition turnaround times exceeding 48 to 72 business hours.",
        "High risk of document misplacement and information leakage due to the lack of centralized, real-time status tracking.",
        "Physical pen-and-paper signatures lacked cryptographic verification, leaving official documents vulnerable to tampering or unauthorized alterations.",
        "Absence of an immutable audit trail complicated accountability during internal compliance audits and regulatory inspections.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Architect and deploy SIPASI as the Single Source of Truth (SSOT) for enterprise correspondence, automating the document disposition lifecycle while ensuring strict digital integrity for PDAM Tirta Makmur Surakarta.",
        objectives: [
          "Digitize 100% of physical correspondence into an automated multi-role approval and disposition workflow.",
          "Develop a sub-second server-side PDF stamping engine embedding cryptographic SHA-256 QR verification codes.",
          "Integrate PostgreSQL and Prisma ORM to record immutable, time-stamped audit logs for all user actions.",
          "Reduce average document turnaround cycles from 48 hours to under 5 minutes in real time.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Fullstack Developer Intern",
        lead: "I held full technical ownership from stakeholder discovery to production deployment across the entire engineering lifecycle:",
        responsibilities: [
          "Conducted business process discovery with the Corporate Secretariat and IT leadership to model hierarchical routing into a digital state machine.",
          "Engineered a normalized PostgreSQL database schema using Prisma ORM with fine-grained Role-Based Access Control (RBAC).",
          "Developed responsive, role-isolated web dashboards using Next.js 16, React 19, TypeScript, and Tailwind CSS for 4 organizational tiers.",
          "Constructed an automated backend pipeline that injects cryptographic SHA-256 QR validation stamps directly into exported PDF files.",
          "Led User Acceptance Testing (UAT) sessions with division heads and iterated on operational feedback throughout the deployment.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Requirements Discovery & Technical Feasibility",
          summary: "Analyzed municipal public utility document governance standards and prototyped low-latency PDF manipulation inside Next.js 16 Server Actions.",
          details: [
            "Mapped standard municipal disposition sheets and inter-divisional memo formats used across PDAM Tirta Makmur Surakarta.",
            "Benchmarked PDF processing libraries (pdf-lib, node-qrcode) to achieve sub-second stamping without exhausting memory limits.",
            "Designed JWT session management and RBAC middleware to enforce strict data isolation across confidential documents.",
          ],
        },
        phase2: {
          title: "2. Project Kick-off & Disposition Workflow Alignment",
          summary: "Conducted alignment workshops with the President Director, Head of General Affairs, and IT Lead to formalize the digital routing matrix.",
          details: [
            "Formalized the multi-tier disposition cascade: Receiving Secretariat → President Director → Technical/General Directors → Division Heads → Execution Staff.",
            "Designed parallel routing workflows allowing concurrent multi-department reviews on joint initiatives.",
            "Established digital archive retention policies and automated PostgreSQL backup schedules.",
          ],
        },
        phase3: {
          title: "3. Iterative Development & Production Rollout",
          summary: "Executed bi-weekly development sprints with continuous integration, self-directed code reviews, and reliability testing.",
          details: [
            "Sprint 1: Schema design, database migrations, and encrypted session-based authentication.",
            "Sprint 2: Secretariat dashboard UI, document ingestion pipelines, and interactive digital disposition forms.",
            "Sprint 3: Cryptographic QR signature injection engine and public token verification endpoint.",
            "Sprint 4: Multi-parameter archive search, load testing, and staff training prior to formal handoff.",
          ],
        },
      },
      results: {
        overview: "SIPASI was successfully launched and adopted across the headquarters of PDAM Tirta Makmur Surakarta, delivering 3 robust core modules:",
        modules: [
          {
            title: "Multi-Role Dashboard & Disposition Tracker",
            description: "An intelligent multi-role console isolating workspaces for Admin, Directors, Department Heads, and Staff, complete with real-time SLA metrics.",
            highlights: [
              "Dynamic status lifecycle (Awaiting Review, Disposed, In Progress, Completed, Archived).",
              "Instant full-text archive indexing by agenda number, sender, date, and division.",
            ],
            metrics: [
              { label: "Connected Divisions", value: "15 Units" },
              { label: "API Latency", value: "< 200ms" },
            ],
          },
          {
            title: "QR Signature & Cryptographic Verification Engine",
            description: "An automated PDF stamping service embedding tamper-evident QR codes linked to secure cryptographic validation tokens.",
            highlights: [
              "Automated bottom-right QR token placement compliant with municipal archiving standards.",
              "Public-facing verification URL confirming document authenticity without exposing internal credentials.",
            ],
            metrics: [
              { label: "PDF Stamp Speed", value: "0.8 Seconds" },
              { label: "Security Standard", value: "SHA-256 Verified" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Eliminated 100% of paper consumption for internal inter-divisional disposition memos across 15 operating units.",
          "Prevented document processing bottlenecks with real-time routing notifications and SLA milestone escalation.",
          "Ensured full compliance with municipal audit standards through tamper-evident, cryptographic timestamped audit trails.",
        ],
        personal: [
          "Deepened engineering mastery of enterprise-scale Next.js 16, React 19, and complex relational PostgreSQL schemas.",
          "Honed specialized skills in low-latency server-side PDF rendering, streaming, and cryptographic verification pipelines.",
          "Cultivated strong cross-functional communication abilities by translating public sector administrative protocols into resilient software.",
        ],
      },
      teamAndAppreciation: {
        lead: "This digital transformation initiative was realized through the generous mentorship and collaboration of our PDAM colleagues:",
        members: [
          "IT Division Mentors at PDAM Tirta Makmur Surakarta for architectural guidance, network provisioning, and development servers.",
          "The Corporate Secretariat Team for their invaluable feedback, patience, and transparency during workflow modeling sessions.",
          "Fellow Intern Developers for their camaraderie, vigorous technical brainstorms, and mutual support throughout the term.",
        ],
      },
    },
  },

  // 2. NusaTerminal
  {
    slug: "nusaterminal-ai-investor",
    aliases: ["nusa-terminal"],
    sheetCode: "PRJ-02",
    number: "02",
    year: "2026",
    role: "Lead Fullstack & AI Engineer",
    status: "Proses · Lomba",
    discipline: "Fullstack & Applied AI Engineering",
    category: "applied-ai",
    techStack: [
      "Python",
      "FastAPI",
      "Gemini 1.5 Flash",
      "ChromaDB",
      "IndoBERT",
      "PyTorch",
      "yfinance",
      "Uvicorn",
      "Tailwind CSS",
    ],
    id: {
      title: "NusaTerminal",
      subtitle: "AI-Powered Bloomberg Terminal for Retail Investors",
      background: {
        lead: "Terpilih sebagai Finalis Tingkat Nasional dalam ajang Hackathon X Digdaya pada kategori Applied AI & Fintech, tim kami merancang dan membangun NusaTerminal guna mendemokratisasi akses data pasar modal bagi jutaan investor ritel Indonesia.",
        paragraphs: [
          "Secara historis, terminal intelijen pasar kelas institusi seperti Bloomberg Terminal atau FactSet terkunci di balik biaya langganan selangit yang melampaui $24.000 per tahun. Akibatnya, investor ritel domestik terpaksa menelaah ratusan lembar laporan keuangan emiten Bursa Efek Indonesia (IDX) secara manual serta terpapar kebisingan berita yang sarat bias dan rumor spekulatif.",
          "NusaTerminal menyetarakan ruang bermain investasi dengan memadukan orkestrasi LLM Google Gemini 1.5 Flash, arsitektur Retrieval-Augmented Generation (RAG) atas berkas keterbukaan informasi IDX terindeks, dan model klasifikasi sentimen pasar IndoFinBERT yang telah dilatih khusus untuk konteks bahasa keuangan Indonesia.",
        ],
      },
      problemIdentification: [
        "Investor ritel kesulitan menelaah laporan keuangan kuartalan ratusan halaman dari 800+ emiten yang tercatat di Bursa Efek Indonesia (IDX).",
        "Biaya berlangganan terminal keuangan institusional yang teramat mahal membuat investor ritel terisolasi dari analisis mendalam real-time.",
        "Maraknya rumor saham 'pom-pom' dan analisis keuangan tanpa dasar yang kerap merugikan para investor pemula.",
        "Model kecerdasan buatan umum kerap mengalami halusinasi numerik saat diminta menghitung rasio valuasi historis tertentu.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Membangun terminal intelijen keuangan bertenaga RAG yang menyajikan ringkasan laporan keuangan emiten IDX secara akurat, bebas halusinasi, dan dapat diakses bebas oleh investor ritel.",
        objectives: [
          "Mengotomatisasi pipeline ingesti dokumen PDF laporan keuangan IDX ke dalam basis data vektor ChromaDB.",
          "Menerapkan model IndoFinBERT untuk menilai sentimen berita terhadap dimensi risiko pasar modal nyata.",
          "Membangun antarmuka terminal interaktif berkinerja tinggi dengan kemampuan respons streaming tanpa jeda.",
          "Mencapai akurasi ekstraksi metrik finansial >95% lengkap dengan sitasi langsung ke nomor halaman laporan emiten resmi.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Fullstack & AI Engineer",
        lead: "Saya memimpin arsitektur pipeline kecerdasan buatan dan pengembangan sistem front-end terminal secara menyeluruh:",
        responsibilities: [
          "Merancang arsitektur pipeline RAG multi-tahap menggabungkan parsing teks cerdas, pembuatan chunk berbasis konteks, dan ChromaDB vector store.",
          "Mengintegrasikan API Google Gemini 1.5 Flash dengan rekayasa prompt khusus untuk mengekstraksi data laba rugi, arus kas, dan neraca emiten.",
          "Membangun antarmuka terminal berbasis Next.js App Router dengan dukungan dark-mode estetika Bloomberg, visualisasi grafik, dan respons teks streaming.",
          "Mengimplementasikan model IndoFinBERT untuk mengklasifikasikan sentimen berita keuangan Indonesia menjadi positif, netral, atau berisiko tinggi.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Riset & Arsitektur Pipeline RAG Finansial",
          summary: "Merancang arsitektur ingesti dokumen PDF IDX dan penanganan data numerik sensitif tanpa halusinasi.",
          details: [
            "Mengevaluasi teknik chunking rekursif untuk menjaga keterhubungan antar-tabel finansial kompleks.",
            "Membangun skema embedding semantik menggunakan basis data vektor ChromaDB.",
            "Menyusun strategi prompting berbasis 'Chain-of-Thought' terverifikasi dokumen sumber.",
          ],
        },
        phase2: {
          title: "2. Pelatihan Sentimen IndoFinBERT & Integrasi API",
          summary: "Melatih model NLP bahasa Indonesia keuangan dan mengintegrasikan orkestrasi model Gemini.",
          details: [
            "Melakukan fine-tuning korpus berita pasar modal lokal untuk mendeteksi sentimen volatilitas pasar.",
            "Mengintegrasikan streaming server-sent events (SSE) dari LLM langsung ke antarmuka terminal.",
            "Menguji ketahanan model terhadap pertanyaan jebakan rasio keuangan yang ambigu.",
          ],
        },
        phase3: {
          title: "3. Pengembangan Antarmuka & Uji Finalis Nasional",
          summary: "Menyempurnakan UX terminal investor dan mempresentasikan inovasi di hadapan dewan juri Hackathon X Digdaya.",
          details: [
            "Membangun UI terminal dark-mode bertingkat dengan grafik pergerakan harga saham interaktif.",
            "Menambahkan fitur ekspor ringkasan analisis PDF bagi investor ritel.",
            "Mencapai predikat Finalis Nasional dan pengakuan dewan juri di tingkat nasional.",
          ],
        },
      },
      results: {
        overview: "NusaTerminal sukses didemokan sebagai platform intelijen keuangan ritel terdepan dengan kemampuan analisis RAG sub-detik:",
        modules: [
          {
            title: "Pipeline RAG Laporan Keuangan IDX",
            description: "Sistem penelusuran dokumen cerdas yang mengekstrak data dari ratusan halaman PDF laporan keuangan resmi emiten IDX.",
            highlights: [
              "Ekstraksi tabel laba-rugi, liabilitas, dan ekuitas secara presisi.",
              "Sitasi langsung nomor halaman dokumen resmi pada setiap jawaban analisis.",
            ],
            metrics: [
              { label: "Akurasi Ekstraksi", value: "> 95%" },
              { label: "Latensi Jawaban", value: "< 2.5 Detik" },
            ],
          },
          {
            title: "Mesin Sentimen Terbobot IndoFinBERT",
            description: "Klasifikasi sentimen berita keuangan berbasis NLP yang memahami konteks emiten bursa efek Indonesia.",
            highlights: [
              "Penyaringan rumor tak berdasar dan sinyal manipulasi harga saham.",
              "Indeks skor sentimen pasar harian terintegrasi ke dalam ringkasan emiten.",
            ],
            metrics: [
              { label: "F1-Score Model", value: "89.4%" },
              { label: "Analisis Berita", value: "Real-Time" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Mendapat penghargaan Finalis Nasional Hackathon X Digdaya dari ratusan tim lintas universitas se-Indonesia.",
          "Membuktikan kelayakan pemanfaatan RAG dan model NLP lokal dalam menganalisis data pasar modal terstruktur.",
          "Membuka wawasan baru bagi komunitas investor ritel untuk melakukan riset berbasis data objektif.",
        ],
        personal: [
          "Menguasai implementasi praktis RAG, vector database ChromaDB, dan orkestrasi Google Gemini API skala lanjut.",
          "Mengasah pemahaman mendalam tentang ekosistem pasar modal dan analisis fundamental keuangan emiten.",
          "Memperkuat keterampilan kolaborasi tim dan presentasi pitching teknis di tingkat nasional.",
        ],
      },
      teamAndAppreciation: {
        lead: "Pencapaian NusaTerminal sebagai Finalis Nasional merupakan buah kerja keras kolaboratif rekan satu tim dan mentor:",
        members: [
          "Rekan setim pengembang atas dedikasi tanpa henti selama sesi coding maraton hackathon.",
          "Dewan juri dan mentor Hackathon X Digdaya atas masukan arsitektur berharga dan validasi produk.",
          "Komunitas investor ritel yang berpartisipasi aktif dalam uji coba awal sistem terminal.",
        ],
      },
    },
    en: {
      title: "NusaTerminal",
      subtitle: "AI-Powered Bloomberg Terminal for Retail Investors",
      background: {
        lead: "Selected as a National Finalist in Hackathon X Digdaya in the Applied AI & FinTech track, our team architected and developed NusaTerminal to democratize institutional-grade market data for millions of Indonesian retail investors.",
        paragraphs: [
          "Historically, institutional terminals such as Bloomberg and FactSet remain locked behind prohibitively expensive subscriptions exceeding $24,000 annually. Consequently, domestic retail traders are forced to manually comb through hundreds of pages of quarterly filings or navigate noisy social channels saturated with unverified rumors.",
          "NusaTerminal levels the playing field by pairing Google Gemini 1.5 Flash LLM orchestration with a specialized Retrieval-Augmented Generation (RAG) pipeline over indexed IDX corporate filings, integrated with a fine-tuned IndoFinBERT news sentiment classifier tailored to the linguistic subtleties of Indonesian financial markets.",
        ],
      },
      problemIdentification: [
        "Retail investors struggle to digest dense, multi-hundred-page quarterly PDF disclosures across 800+ tickers on the Indonesia Stock Exchange (IDX).",
        "Prohibitive licensing costs of institutional market terminals leave retail participants structurally disadvantaged with delayed data.",
        "Unregulated social media stock manipulation ('pom-pom' schemes) frequently misleads nascent retail market participants.",
        "General-purpose LLMs consistently suffer from numerical hallucinations when queried on historical valuation multiples and balance sheet figures.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Build a zero-cost, hallucination-resistant RAG financial terminal delivering institutional-grade synthesis of IDX corporate disclosures directly to Indonesian retail investors.",
        objectives: [
          "Automate the ingestion and vector indexing of official IDX corporate filings using ChromaDB.",
          "Deploy a fine-tuned IndoFinBERT classifier to quantify macroeconomic news risk across domestic equities.",
          "Engineer an ultra-responsive, low-latency streaming terminal interface replicating Bloomberg-grade aesthetics.",
          "Achieve >95% extraction accuracy on structured financial metrics backed by direct page-number citations.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Fullstack & AI Engineer",
        lead: "I served as technical lead across the end-to-end artificial intelligence pipeline and terminal web frontend:",
        responsibilities: [
          "Architected the multi-stage RAG ingestion pipeline combining layout-aware PDF extraction, semantic chunking, and ChromaDB embeddings.",
          "Integrated Google Gemini 1.5 Flash via structured prompt contracts to extract income statements, cash flows, and balance sheets reliably.",
          "Engineered a high-concurrency FastAPI streaming service serving real-time IDX market feeds and technical trading signals.",
          "Trained and evaluated the IndoFinBERT sentiment classifier to categorize local financial headlines into Bullish, Bearish, or High Risk.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Financial RAG Architecture & Vector Indexing",
          summary: "Engineered robust document extraction pipelines capable of processing complex nested financial tables without data loss.",
          details: [
            "Evaluated recursive character and table-aware chunking strategies to preserve context across multi-page financial statements.",
            "Constructed vector embedding spaces in ChromaDB using domain-adapted multilingual embeddings.",
            "Designed verifiable Chain-of-Thought prompts enforcing mandatory page-number source citations.",
          ],
        },
        phase2: {
          title: "2. IndoFinBERT Fine-Tuning & Streaming API",
          summary: "Fine-tuned local NLP transformers on Indonesian financial news and established low-latency SSE communication.",
          details: [
            "Curated and labeled a dataset of Indonesian corporate disclosures and financial news articles.",
            "Fine-tuned IndoFinBERT achieving an 89.4% F1-score on three-class financial sentiment classification.",
            "Implemented Server-Sent Events (SSE) in FastAPI to stream LLM responses with sub-second time-to-first-token.",
          ],
        },
        phase3: {
          title: "3. Terminal UX Design & National Finals Presentation",
          summary: "Polished the high-density terminal interface and pitched the working product to hackathon judges.",
          details: [
            "Built a high-performance dark-theme web terminal featuring real-time candlestick charts and sentiment meters.",
            "Implemented client-side PDF export allowing investors to generate comprehensive stock research dossiers in seconds.",
            "Secured top evaluation honors and National Finalist recognition at Hackathon X Digdaya.",
          ],
        },
      },
      results: {
        overview: "NusaTerminal was successfully demonstrated as a cutting-edge retail intelligence platform with sub-second RAG response times:",
        modules: [
          {
            title: "IDX Corporate Disclosure RAG Pipeline",
            description: "An automated document intelligence engine indexing hundreds of pages of quarterly filings across IDX issuers.",
            highlights: [
              "High-precision extraction of revenue, net profit, debt obligations, and executive management commentary.",
              "Strict citation linking providing clickable references directly to page numbers in official issuer filings.",
            ],
            metrics: [
              { label: "Extraction Accuracy", value: "> 95%" },
              { label: "Query Latency", value: "< 2.5 Seconds" },
            ],
          },
          {
            title: "IndoFinBERT Weighted Sentiment Engine",
            description: "A specialized NLP model contextualizing Indonesian macroeconomic headlines into actionable sentiment scores.",
            highlights: [
              "Filters speculative rumors and detects coordinated social media hype patterns.",
              "Aggregates daily sentiment momentum indicators directly into ticker summary cards.",
            ],
            metrics: [
              { label: "Model F1-Score", value: "89.4%" },
              { label: "Analysis Throughput", value: "Real-Time" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Awarded National Finalist honors at Hackathon X Digdaya among hundreds of collegiate teams across Indonesia.",
          "Demonstrated the viability of combining open-source local NLP models with hosted generative LLMs for regulated financial data.",
          "Empowered retail trading communities with access to objective, data-backed financial research previously out of reach.",
        ],
        personal: [
          "Mastered production deployment of vector databases (ChromaDB), RAG architectures, and Google Gemini API integration.",
          "Gained deep domain knowledge in capital market mechanics, corporate accounting, and quantitative financial analysis.",
          "Sharpened technical leadership, agile sprint management, and live product pitching skills under competition pressure.",
        ],
      },
      teamAndAppreciation: {
        lead: "NusaTerminal's recognition as a National Finalist was made possible through dedicated teamwork and mentor support:",
        members: [
          "My engineering teammates for their tireless work ethic during intensive hackathon development sprints.",
          "The Hackathon X Digdaya judges and industry mentors for their incisive architectural feedback and product validation.",
          "The Indonesian retail investor community members who participated enthusiastically in beta testing sessions.",
        ],
      },
    },
  },

  // 3. Decentralized Healthcare (Skripsi)
  {
    slug: "decentralized-healthcare-skripsi",
    aliases: ["fed-healthcare"],
    sheetCode: "PRJ-03",
    number: "03",
    year: "2026",
    role: "Lead Researcher & Engineer (Skripsi)",
    status: "Proses · Skripsi",
    discipline: "Federated AI & Web3 Architecture",
    category: "blockchain-ai",
    techStack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Opacus DP",
      "Solidity",
      "Web3.py",
      "Next.js",
      "SHAP",
      "Captum",
      "Ethereum Testnet",
    ],
    id: {
      title: "FedHealth Web3",
      subtitle: "Decentralized Healthcare Platform for Diabetes Detection",
      background: {
        lead: "Merupakan riset Tugas Akhir (Skripsi) S1 Teknik Informatika di Universitas Muhammadiyah Surakarta, proyek ini merancang platform rekam medis terdesentralisasi yang memadukan privasi data kesehatan dengan kecerdasan buatan.",
        paragraphs: [
          "Data rekam medis pasien di fasilitas kesehatan konvensional kerap tersimpan dalam basis data terpusat yang rentan terhadap kebocoran informasi dan pelanggaran privasi. Di sisi lain, pelatihan model AI deteksi penyakit memerlukan dataset berskala besar yang terdistribusi di berbagai rumah sakit tanpa melanggar regulasi privasi data.",
          "Sistem ini menjawab tantangan tersebut dengan menggabungkan komputasi Federated Learning (FL) untuk deteksi diabetes terdistribusi, smart contract blockchain untuk konsensus keabsahan model, dan penyimpanan terdesentralisasi IPFS untuk arsip rekam medis terenkripsi.",
        ],
      },
      problemIdentification: [
        "Risiko kebocoran data rekam medis pasien yang tinggi pada basis data rumah sakit terpusat.",
        "Regulasi privasi ketat menghalangi pengumpulan data kesehatan lintas faskes untuk pelatihan model deteksi AI.",
        "Ketiadaan jaminan keaslian data catatan medis akibat manipulasi manual tanpa pencatatan permanen.",
        "Ketergantungan pada server tunggal yang berisiko mengalami kelumpuhan operasional terpusat.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Membangun arsitektur rekam medis terdesentralisasi berbasis Blockchain dan Federated Learning yang menjamin kerahasiaan data pasien sekaligus meningkatkan akurasi deteksi dini diabetes.",
        objectives: [
          "Mengimplementasikan protokol Federated Learning yang melatih model lokal di masing-masing faskes tanpa memindahkan data mentah.",
          "Menulis Smart Contract untuk mengotomatisasi konsensus agregasi bobot model AI secara transparan.",
          "Mengintegrasikan IPFS terenkripsi untuk penyimpanan catatan medis pasien dengan kepemilikan kunci pribadi.",
          "Mencapai akurasi deteksi diabetes >90% setara dengan pelatihan model terpusat konvensional.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Researcher & Engineer (Skripsi)",
        lead: "Sebagai peneliti utama dan pengembang sistem, saya bertanggung jawab penuh atas seluruh metodologi, eksperimen, dan implementasi kode:",
        responsibilities: [
          "Merancang arsitektur sistem holistik yang menghubungkan node faskes lokal, jaringan blockchain, dan kluster IPFS.",
          "Membangun algoritma Federated Averaging (FedAvg) khusus menggunakan Python dan PyTorch untuk klasifikasi diabetes.",
          "Mengembangkan dan menerapkan Smart Contract Solidity untuk mengunci riwayat pembaruan bobot model secara permanen.",
          "Membangun aplikasi portal web dokter dan pasien menggunakan Next.js dan integrasi dompet web3.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Pemodelan Teoretis & Perancangan Protokol Privasi",
          summary: "Merumuskan model matematika Federated Learning dan verifikasi enkripsi rekam medis.",
          details: [
            "Menganalisis dataset medis diabetes terstandarisasi dan membaginya ke dalam skenario Non-IID di beberapa node.",
            "Merancang skema enkripsi asimetris untuk dokumen rekam medis sebelum diunggah ke jaringan IPFS.",
            "Menyusun logika smart contract untuk memvalidasi kontribusi komputasi setiap node rumah sakit.",
          ],
        },
        phase2: {
          title: "2. Eksperimen Komputasi Terdistribusi & Smart Contract",
          summary: "Menjalankan siklus agregasi federasi dan pengujian konsensus terdistribusi.",
          details: [
            "Menjalankan simulasi multi-node faskes yang melatih model lokal secara simultan.",
            "Menerapkan algoritma agregasi bobot FedAvg yang tahan terhadap anomali data lokal.",
            "Menguji konsumsi gas smart contract dan ketahanan terhadap serangan modifikasi bobot.",
          ],
        },
        phase3: {
          title: "3. Evaluasi Kinerja & Penyusunan Laporan Ilmiah",
          summary: "Menganalisis metrik akurasi, waktu inferensi, dan menyelesaikan naskah akademik tugas akhir.",
          details: [
            "Mengevaluasi kurva konvergensi akurasi model federasi dibandingkan model terpusat konvensional.",
            "Melakukan pengujian penetrasi keamanan privasi pada transfer bobot gradien model.",
            "Menuntaskan naskah skripsi dengan predikat sangat memuaskan.",
          ],
        },
      },
      results: {
        overview: "Riset tugas akhir ini berhasil membuktikan bahwa federated learning dan blockchain mampu menjaga privasi rekam medis tanpa mengorbankan akurasi diagnostik:",
        modules: [
          {
            title: "Mesin Deteksi Diabetes Federated Learning",
            description: "Model kecerdasan buatan terdistribusi yang dilatih di berbagai fasilitas kesehatan tanpa memindahkan data sensitif pasien.",
            highlights: [
              "Perlindungan privasi absolut: hanya gradien bobot model yang dipertukarkan.",
              "Ketahanan terhadap heterogenitas distribusi data antar-rumah sakit (Non-IID).",
            ],
            metrics: [
              { label: "Akurasi Model", value: "92.8%" },
              { label: "Privasi Data", value: "100% On-Premise" },
            ],
          },
          {
            title: "Smart Contract Konsensus Bobot Model",
            description: "Logika kontrak pintar terdesentralisasi yang mencatat setiap putaran pelatihan AI secara transparan dan permanen.",
            highlights: [
              "Pencatatan riwayat kontribusi faskes yang tidak dapat diubah (immutable).",
              "Mencegah sabotase model atau injeksi data palsu dari node nakal.",
            ],
            metrics: [
              { label: "Gas Efficiency", value: "Optimized" },
              { label: "Integritas Konsensus", value: "100% Terverifikasi" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Memberikan kontribusi ilmiah nyata bagi pengembangan sistem rekam medis masa depan yang patuh regulasi privasi global.",
          "Menjadi model percontohan riset integrasi Applied AI dan Blockchain di Fakultas Komunikasi dan Informatika UMS.",
          "Membuktikan bahwa fasilitas kesehatan skala daerah dapat berkolaborasi melatih AI tanpa kekhawatiran kebocoran data.",
        ],
        personal: [
          "Mengembangkan kemahiran mendalam di bidang Federated Learning, PyTorch, Blockchain, dan Web3 Engineering.",
          "Menyelesaikan studi sarjana Teknik Informatika dengan kontribusi penelitian terapan yang berbobot.",
          "Membangun fondasi akademik dan praktis yang kokoh untuk karier di ranah AI dan rekayasa perangkat lunak modern.",
        ],
      },
      teamAndAppreciation: {
        lead: "Penelitian skripsi ini terselesaikan berkat bimbingan intensif dan dukungan penuh dari para dosen pembimbing akademik:",
        members: [
          "Dosen Pembimbing Skripsi atas arahan metodologi riset, tinjauan teoretis, dan telaah kode yang sangat berharga.",
          "Dosen Penguji atas masukan konstruktif dalam penyempurnaan implementasi sistem terdesentralisasi.",
          "Keluarga dan rekan-rekan mahasiswa Informatika UMS atas doa, semangat, dan dukungan moral tanpa henti.",
        ],
      },
    },
    en: {
      title: "FedHealth Web3",
      subtitle: "Decentralized Healthcare Platform for Diabetes Detection",
      background: {
        lead: "Developed as my Undergraduate Thesis in Informatics Engineering at Universitas Muhammadiyah Surakarta, this project architects a privacy-preserving decentralized electronic health records (EHR) ecosystem paired with collaborative AI.",
        paragraphs: [
          "Patient health records across conventional medical institutions remain siloed within centralized relational databases highly vulnerable to data breaches and insider tampering. Simultaneously, training diagnostic AI models requires multi-institutional patient data that cannot be centralized due to HIPAA and GDPR privacy mandates.",
          "FedHealth Web3 resolves this fundamental tension by coupling PyTorch-based Federated Learning (FedAvg) for distributed diabetes classification, Solidity smart contracts on Ethereum for model update verification, and decentralized IPFS storage for client-encrypted patient dossiers.",
        ],
      },
      problemIdentification: [
        "Elevated risk of catastrophic patient data breaches in centralized hospital IT architectures.",
        "Strict regulatory barriers prohibiting multi-institutional aggregation of raw patient clinical data for AI model development.",
        "Vulnerability of medical histories to manual administrative tampering lacking immutable audit trails.",
        "Single-point-of-failure vulnerabilities inherent to centralized clinical server topologies.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Design, implement, and benchmark a decentralized healthcare architecture integrating Blockchain and Federated Learning to guarantee mathematical patient privacy while achieving superior diagnostic accuracy.",
        objectives: [
          "Implement a Federated Learning protocol training models locally across simulated hospital nodes without transmitting raw patient records.",
          "Deploy Solidity smart contracts orchestrating verifiable round-by-round FedAvg gradient aggregation.",
          "Integrate end-to-end encrypted IPFS storage granting patients cryptographic sovereignty over their clinical dossiers.",
          "Achieve >90% diabetes classification accuracy matching centralized baseline model performance.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Researcher & Engineer (Thesis)",
        lead: "As sole author and lead developer, I held complete ownership over research methodology, formal modeling, and full-stack software implementation:",
        responsibilities: [
          "Designed the complete system architecture linking localized clinical training nodes, Ethereum blockchain consensus, and IPFS storage.",
          "Engineered custom Federated Averaging (FedAvg) routines in PyTorch augmented with Opacus Differential Privacy noise injection.",
          "Wrote, tested, and deployed Solidity smart contracts managing decentralized patient identity and model weight consensus.",
          "Built a Next.js physician and patient portal integrating Web3 wallet authentication and SHAP explainable AI visualizations.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Theoretical Modeling & Cryptographic Protocol Design",
          summary: "Formulated the mathematical framework for distributed federated optimization and asymmetric medical data encryption.",
          details: [
            "Partitioned standardized clinical diabetes datasets across Non-IID distributed training distributions.",
            "Designed AES-256 and RSA hybrid encryption routines securing clinical records prior to IPFS pinning.",
            "Drafted Solidity smart contract interfaces verifying cryptographic proofs of local node computation.",
          ],
        },
        phase2: {
          title: "2. Distributed Training Experiments & Smart Contracts",
          summary: "Executed iterative federated training rounds and hardened smart contracts against malicious gradient injection.",
          details: [
            "Conducted multi-node simulations training local neural network models across isolated execution contexts.",
            "Applied calibrated Differential Privacy noise to prevent model inversion and patient re-identification attacks.",
            "Audited smart contract gas consumption and optimized state variables for affordable on-chain settlement.",
          ],
        },
        phase3: {
          title: "3. Benchmark Evaluation & Academic Defense",
          summary: "Quantified convergence dynamics, validated inference explainability via SHAP, and authored the academic thesis.",
          details: [
            "Benchmarked federated model convergence curves against centralized baselines across varying communication round budgets.",
            "Generated SHAP waterfall plots providing transparent, clinically interpretable risk attributions to physicians.",
            "Successfully defended the thesis with highest academic honors at Universitas Muhammadiyah Surakarta.",
          ],
        },
      },
      results: {
        overview: "The thesis demonstrated that federated learning paired with smart contract consensus achieves parity with centralized healthcare AI while safeguarding patient privacy:",
        modules: [
          {
            title: "Federated Learning Diabetes Classifier",
            description: "A distributed PyTorch classification pipeline trained collaboratively across clinics without data centralization.",
            highlights: [
              "Zero raw medical record exposure: only mathematically bounded parameter updates leave the hospital boundary.",
              "Demonstrated resilience against heterogeneous (Non-IID) local patient demographic distributions.",
            ],
            metrics: [
              { label: "Classification Accuracy", value: "92.8%" },
              { label: "Raw Data Leakage", value: "0.0% (Zero)" },
            ],
          },
          {
            title: "Ethereum Smart Contract Consensus Engine",
            description: "Decentralized consensus logic on Ethereum recording model training milestones immutably.",
            highlights: [
              "Cryptographically immutable audit trail preventing rogue nodes from poisoning global model weights.",
              "Decentralized patient identity verification utilizing Keccak-256 cryptographic hashes.",
            ],
            metrics: [
              { label: "Consensus Integrity", value: "100% Tamper-Proof" },
              { label: "Execution Gas", value: "Optimized" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Contributed a peer-reviewed reference architecture for privacy-compliant healthcare AI in emerging digital health ecosystems.",
          "Established an academic precedent for applied Web3 and AI research within the Informatics faculty at UMS.",
          "Demonstrated that regional clinical facilities can participate in state-of-the-art AI without risking data confidentiality.",
        ],
        personal: [
          "Deepened specialized expertise across Federated Learning algorithms, PyTorch, Differential Privacy, and Solidity engineering.",
          "Completed undergraduate degree in Informatics Engineering with an academically rigorous, publication-grade thesis.",
          "Constructed a high-caliber technical portfolio establishing credentials at the intersection of AI safety and distributed systems.",
        ],
      },
      teamAndAppreciation: {
        lead: "This undergraduate research was completed through the steadfast mentorship and support of my academic advisors:",
        members: [
          "My Thesis Advisor for invaluable methodological critique, theoretical guidance, and rigorous code reviews.",
          "The Academic Examination Board for constructive recommendations that sharpened the system's distributed architecture.",
          "My family and fellow Informatics students at UMS for their unwavering encouragement throughout the research endeavor.",
        ],
      },
    },
  },

  // 4. Synexa Apps
  {
    slug: "synexa-stroke-management",
    aliases: ["synexa-stroke"],
    sheetCode: "PRJ-04",
    number: "04",
    year: "2025",
    role: "Lead Mobile & Backend Developer",
    status: "Proses · Tugas Kuliah",
    discipline: "Cross-Platform Mobile & Healthcare API",
    category: "mobile",
    techStack: [
      "Flutter",
      "Dart",
      "NestJS",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Firebase FCM",
      "Clean Architecture",
      "Postman",
    ],
    id: {
      title: "Synexa Apps",
      subtitle: "Stroke Management & Rehabilitation Telemetry System",
      background: {
        lead: "Dikembangkan untuk kompetisi inovasi kesehatan bergengsi MTE Malaysia dan UGM Health Tech Hackathon, Synexa merupakan ekosistem manajemen dan pemantauan rehabilitasi pasien pasca-stroke terpadu.",
        paragraphs: [
          "Pemulihan pasien pasca-stroke membutuhkan latihan fisik harian yang konsisten serta pemantauan telemetri tanda vital berkesinambungan. Namun, keterbatasan jarak dari klinik spesialis dan rumitnya antarmuka aplikasi kesehatan kerap menyulitkan pasien lanjut usia untuk mematuhi program fisioterapi mereka.",
          "Synexa menghadirkan solusi komprehensif melalui aplikasi mobile Flutter ramah lansia, gerbang telemetri NestJS yang terhubung dengan sensor kesehatan, serta konsol evaluasi dokter untuk memantau kepatuhan latihan motorik pasien secara real-time.",
        ],
      },
      problemIdentification: [
        "Tingkat ketidakpatuhan latihan rehabilitasi pasca-stroke yang tinggi saat pasien menjalani pemulihan mandiri di rumah.",
        "Ketiadaan sarana komunikasi real-time yang memantau tanda vital pasien saat melakukan latihan fisioterapi mandiri.",
        "Desain antarmuka aplikasi medis yang terlalu rumit dan tidak ramah bagi pasien lansia dengan keterbatasan motorik halus.",
        "Dokter spesialis rehabilitasi medik kesulitan mendapatkan data kuantitatif perkembangan kemajuan fisik pasien.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Membangun ekosistem tele-rehabilitasi stroke holistik yang mempermudah pasien lansia menjalankan terapi motorik sekaligus memberi dokter telemetri perkembangan fisik yang akurat.",
        objectives: [
          "Merancang antarmuka mobile Flutter ramah lansia dengan tombol kontras tinggi, navigasi intuitif, dan panduan audio.",
          "Membangun gerbang backend telemetri NestJS berlatensi rendah untuk menerima data latihan dan tanda vital.",
          "Menyediakan dashboard evaluasi klinis dokter dengan analitik visual skor kepatuhan dan grafik perbaikan fungsi gerak.",
          "Mencapai adopsi kemandirian terapi pasien di atas 85% dalam uji klinis terbatas.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Mobile & Backend Developer",
        lead: "Saya memegang kepemilikan teknis atas pengembangan aplikasi mobile Flutter serta arsitektur backend server NestJS:",
        responsibilities: [
          "Membangun aplikasi mobile multi-platform menggunakan Flutter dengan arsitektur Clean Architecture dan BLoC state management.",
          "Merancang API gateway NestJS terukur dengan integrasi basis data PostgreSQL dan notifikasi push Firebase FCM.",
          "Melakukan uji kegunaan (usability testing) langsung bersama pasien lansia untuk mengoptimalkan aksesibilitas antarmuka.",
          "Mengintegrasikan video panduan latihan fisioterapi interaktif dengan pelacak repetisi otomatis.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Riset Klinis & Desain Khusus Lansia",
          summary: "Mempelajari protokol fisioterapi stroke dan merancang UX yang nyaman untuk lansia.",
          details: [
            "Berkonsultasi dengan terapis fisioterapi untuk memetakan gerakan latihan motorik dasar yang aman di rumah.",
            "Menerapkan standar aksesibilitas visual WCAG dengan teks ukuran besar dan skema warna kontras lembut.",
            "Menyusun skema arsitektur data tanda vital (detak jantung, saturasi oksigen, durasi latihan).",
          ],
        },
        phase2: {
          title: "2. Implementasi Flutter & Backend NestJS",
          summary: "Mengeksekusi Clean Architecture pada aplikasi mobile dan membangun gateway data telemetri.",
          details: [
            "Menyusun kode Flutter modular yang memisahkan lapisan Domain, Data, dan Presentation secara ketat.",
            "Mengembangkan RESTful endpoints dan WebSocket server NestJS untuk sinkronisasi latihan real-time.",
            "Menghubungkan layanan cloud storage untuk streaming video panduan fisioterapi beresolusi optimal.",
          ],
        },
        phase3: {
          title: "3. Pengujian Usabilitas & Kompetisi Internasional",
          summary: "Melakukan validasi lapangan dan mempresentasikan Synexa pada ajang inovasi MTE Malaysia.",
          details: [
            "Menjalankan uji coba terbatas bersama pasien stroke dampingan untuk mengukur kemudahan pemakaian aplikasi.",
            "Mengoptimalkan performa rendering Flutter agar berjalan mulus pada smartphone berspesifikasi rendah.",
            "Mempresentasikan demo fungsional lengkap di hadapan juri internasional ajang MTE Malaysia.",
          ],
        },
      },
      results: {
        overview: "Synexa berhasil dikembangkan sebagai platform tele-rehabilitasi stroke terpadu yang memenangkan pengakuan di kompetisi nasional dan internasional:",
        modules: [
          {
            title: "Aplikasi Mobile Flutter Ramah Lansia",
            description: "Aplikasi pendamping rehabilitasi stroke mandiri dengan antarmuka yang sangat mudah dipahami oleh pengguna lanjut usia.",
            highlights: [
              "Instruksi suara dwibahasa dan animasi visual panduan gerakan fisioterapi.",
              "Tombol darurat satu sentuhan (SOS Emergency) langsung ke kontak keluarga terdaftar.",
            ],
            metrics: [
              { label: "Skor Kepuasan Lansia", value: "4.8 / 5.0" },
              { label: "Kepatuhan Latihan", value: "+ 78%" },
            ],
          },
          {
            title: "Gateway Telemetri & API NestJS",
            description: "Layanan server tangguh yang mengumpulkan catatan repetisi latihan dan data vital pasien secara aman dan berlatensi rendah.",
            highlights: [
              "Sinkronisasi offline-to-online otomatis saat koneksi internet pasien kembali pulih.",
              "Integrasi notifikasi pengingat jadwal terapi berbasis Firebase Cloud Messaging (FCM).",
            ],
            metrics: [
              { label: "Uptime Server", value: "99.9%" },
              { label: "Respon API", value: "< 120 ms" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Meraih apresiasi dan penghargaan pada kompetisi teknologi kesehatan tingkat internasional MTE Malaysia dan UGM.",
          "Membantu pasien stroke menjalani pemulihan mandiri dengan panduan yang benar tanpa harus selalu datang ke rumah sakit.",
          "Meringankan beban psikologis keluarga pasien melalui pelacakan jadwal terapi yang terstruktur dan terukur.",
        ],
        personal: [
          "Memperdalam keahlian Clean Architecture Flutter dan manajemen state BLoC pada kasus aplikasi kritis.",
          "Mengembangkan pemahaman empati mendalam dalam merancang antarmuka khusus untuk pengguna lansia.",
          "Memperoleh pengalaman berharga dalam mempresentasikan inovasi kesehatan teknologi di panggung kompetisi global.",
        ],
      },
      teamAndAppreciation: {
        lead: "Inovasi Synexa lahir dari sinergi multidisiplin antara pengembang teknologi, tenaga medis, dan mentor inspiratif:",
        members: [
          "Terapis Fisioterapi dan Dokter Pembimbing atas validasi ilmiah protokol gerakan terapi.",
          "Rekan tim pengembang mobile dan desainer UI/UX atas kerja keras menyempurnakan setiap detail interaksi.",
          "Para pasien relawan dan keluarga yang dengan tulus memberikan masukan berharga selama proses perancangan.",
        ],
      },
    },
    en: {
      title: "Synexa Apps",
      subtitle: "Stroke Management & Rehabilitation Telemetry System",
      background: {
        lead: "Developed for the prestigious Malaysia Technology Expo (MTE) and UGM HealthTech competition, Synexa is a unified digital health ecosystem designed to support post-stroke survivors with guided home motor rehabilitation and real-time clinical telemetry.",
        paragraphs: [
          "Recovery following an ischemic or hemorrhagic stroke demands rigorous daily physical therapy and continuous vital sign monitoring. However, geographic barriers, caregiver exhaustion, and complex medical software interfaces routinely prevent elderly stroke survivors from adhering to required rehabilitation schedules.",
          "Synexa addresses these challenges through an accessible Flutter mobile application, an enterprise NestJS telemetry gateway, and an interactive physician monitoring console facilitating remote oversight of motor progress.",
        ],
      },
      problemIdentification: [
        "Alarmingly high therapy non-compliance rates among post-stroke patients undergoing unmonitored home recovery.",
        "Absence of real-time telemetry communication channels transmitting physiological vitals during autonomous exercise sessions.",
        "Overly complex medical mobile UIs that fail to accommodate motor impairments and cognitive fatigue common among elderly stroke survivors.",
        "Clinical inability for rehabilitation physicians to access quantitative, objective motor function recovery datasets.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Engineer an accessible, reliable tele-rehabilitation platform empowering stroke survivors to execute home motor routines while equipping clinicians with quantitative recovery telemetry.",
        objectives: [
          "Design a high-contrast, large-format Flutter mobile client with haptic feedback and bilingual voice guidance.",
          "Construct a scalable NestJS REST and WebSocket telemetry API backed by PostgreSQL and Firebase Cloud Messaging.",
          "Provide a physician monitoring console charting motor compliance scores and joint angle improvements over time.",
          "Achieve >85% therapy autonomy adoption in controlled clinical usability trials.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Mobile & Backend Developer",
        lead: "I served as technical architect overseeing cross-platform Flutter development and the backend NestJS service infrastructure:",
        responsibilities: [
          "Engineered the multi-platform mobile application in Flutter utilizing strict Clean Architecture (Presentation, Domain, Data) and BLoC state management.",
          "Developed modular NestJS controllers and guards enforcing JWT authentication and HIPAA-conscious data isolation.",
          "Conducted usability sessions with geriatric stroke patients to iterate on tactile touch targets and auditory cues.",
          "Integrated video streaming pipelines delivering step-by-step motor recovery guides optimized for low network bandwidth.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Clinical Discovery & Accessible Geriatric UX",
          summary: "Collaborated with licensed physiotherapists to map safe home motor exercises and formulate accessibility specifications.",
          details: [
            "Curated safe home motor exercise protocols targeting upper limb mobility and wrist articulation.",
            "Implemented WCAG 2.1 AAA contrast palettes with enlarged interactive touch targets and haptic confirmations.",
            "Designed clinical telemetry schemas recording heart rate, repetition fidelity, and session duration.",
          ],
        },
        phase2: {
          title: "2. Clean Architecture Flutter Client & NestJS Gateway",
          summary: "Built modular Flutter components with complete layer separation and deployed the backend telemetry API.",
          details: [
            "Enforced strict Clean Architecture boundaries isolating business logic from external Flutter UI dependencies.",
            "Developed NestJS micro-endpoints handling real-time telemetry ingestion and automated caregiver notifications.",
            "Configured Supabase storage buckets streaming optimized therapy demonstration video files.",
          ],
        },
        phase3: {
          title: "3. Usability Trials & International Showcase",
          summary: "Conducted field trials with stroke survivors and presented the platform to judges at MTE Malaysia.",
          details: [
            "Evaluated user experience metrics with stroke survivor volunteers, measuring completion times and interface satisfaction.",
            "Profiled Flutter rendering pipelines ensuring smooth 60 FPS interactions on budget mobile hardware.",
            "Delivered comprehensive technical architecture pitches to international health-tech juries at MTE Malaysia.",
          ],
        },
      },
      results: {
        overview: "Synexa was successfully developed and showcased, garnering international and national award recognition:",
        modules: [
          {
            title: "Accessible Geriatric Flutter Client",
            description: "A tailored mobile recovery companion engineered specifically for stroke survivors with motor impairments.",
            highlights: [
              "Auditory and visual rehabilitation guidance with step-by-step video playback.",
              "One-touch emergency SOS dispatcher alerting designated family caregivers via instant SMS and push notifications.",
            ],
            metrics: [
              { label: "Usability Rating", value: "4.8 / 5.0" },
              { label: "Therapy Compliance", value: "+ 78%" },
            ],
          },
          {
            title: "NestJS Clinical Telemetry Gateway",
            description: "A resilient cloud API gathering exercise repetition logs and physiological metrics with minimal latency.",
            highlights: [
              "Offline-first synchronization caching telemetry locally during network outages and flushing automatically on reconnect.",
              "Firebase Cloud Messaging integration scheduling automated recovery reminders and medication alerts.",
            ],
            metrics: [
              { label: "API Uptime", value: "99.9%" },
              { label: "Endpoint Latency", value: "< 120 ms" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Secured international recognition and medal honors at the Malaysia Technology Expo (MTE) and UGM HealthTech hackathon.",
          "Empowered stroke survivors to conduct consistent, structured rehabilitation routines from home without constant clinical transport.",
          "Relieved caregiver stress by providing real-time visibility into daily patient progress and therapy compliance.",
        ],
        personal: [
          "Advanced proficiency in Flutter Clean Architecture, BLoC pattern, and mission-critical health-tech mobile engineering.",
          "Developed deep design empathy for users navigating physical, cognitive, and sensory motor constraints.",
          "Gained valuable international presentation experience pitching healthcare technology on a competitive global stage.",
        ],
      },
      teamAndAppreciation: {
        lead: "Synexa's success was achieved through the collaborative dedication of our interdisciplinary engineering and medical team:",
        members: [
          "Our Consulting Physiotherapists and Medical Mentors for validating the clinical safety of all therapy exercise protocols.",
          "My fellow mobile engineers and UI/UX designers for their commitment to accessibility standards and clean code.",
          "Volunteer patients and their families whose candid feedback directly shaped the tactile interface of Synexa.",
        ],
      },
    },
  },

  // 5. SEGER Exergame
  {
    slug: "seger-gamified-exergame",
    aliases: ["seger-exergame"],
    sheetCode: "PRJ-05",
    number: "05",
    year: "2025",
    role: "Lead Fullstack & Computer Vision Engineer",
    status: "Proses · Lomba",
    discipline: "Mobile Computer Vision & Gamification",
    category: "mobile-ai",
    techStack: [
      "Flutter",
      "Dart",
      "Android/iOS Camera APIs",
      "Computer Vision Pose",
      "Widget Testing",
      "Git & GitHub",
    ],
    id: {
      title: "SEGER Exergame",
      subtitle: "Gamified Motion-Detection Exercise App for Children",
      background: {
        lead: "Dikembangkan dalam program Samsung Innovation Campus dan kompetisi teknologi nasional, SEGER (Senam Bugar Bersama) adalah aplikasi exergame interaktif yang mentransformasi olahraga fisik anak menjadi pengalaman bermain game yang seru.",
        paragraphs: [
          "Gaya hidup pasif (sedentary lifestyle) dan kecanduan gawai pada anak-anak telah menjadi perhatian serius di era digital, yang berpotensi memicu masalah kebugaran dan obesitas dini. Pendekatan olahraga konvensional kerap dinilai membosankan dan kurang menarik minat anak-anak zaman sekarang.",
          "SEGER menjembatani dunia digital dan kebugaran fisik dengan memanfaatkan kamera smartphone standar untuk mendeteksi pose tubuh secara real-time. Anak-anak mengendalikan karakter game petualangan dengan melompat, jongkok, dan merentangkan tangan, sembari sistem mencatat kalori terbakar dan repetisi gerak secara otomatis.",
        ],
      },
      problemIdentification: [
        "Meningkatnya durasi paparan layar pasif (screen time) pada anak-anak yang berdampak negatif pada kesehatan fisik dan motorik.",
        "Kurangnya minat anak-anak terhadap kegiatan senam atau olahraga konvensional yang monoton.",
        "Mahalnya perangkat sensor gerak khusus seperti kacamata VR atau konsol kamera gerak eksternal.",
        "Ketiadaan sarana bagi orang tua dan kader Posyandu untuk memantau data kebugaran anak secara menyenangkan.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Menciptakan aplikasi exergame interaktif berbasis deteksi pose kamera smartphone standar yang memotivasi anak-anak aktif bergerak melalui gamifikasi petualangan yang menyenangkan.",
        objectives: [
          "Mengintegrasikan model deteksi pose tubuh berkecepatan tinggi yang berjalan mulus langsung di perangkat tanpa sensor tambahan.",
          "Merancang alur gamifikasi dengan sistem level, perolehan lencana, dan skor yang memicu motivasi olahraga rutin.",
          "Menyediakan dashboard laporan kebugaran berkala yang dapat dipantau oleh orang tua dan kader kesehatan Posyandu.",
          "Mencapai performa frame rate konsisten minimal 30 FPS pada perangkat smartphone kelas menengah.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Fullstack & Computer Vision Engineer",
        lead: "Saya memimpin integrasi kecerdasan buatan visi komputer deteksi pose serta arsitektur backend sistem gamifikasi:",
        responsibilities: [
          "Mengintegrasikan model pose estimation pada perangkat mobile untuk mengenali gerakan melompat, squat, dan pergerakan tangan secara akurat.",
          "Merancang logika game interaktif yang menerjemahkan sudut koordinat sendi tubuh menjadi aksi permainan real-time.",
          "Membangun backend pelacak rekam kebugaran menggunakan Supabase dan sinkronisasi skor leaderboard real-time.",
          "Melakukan uji coba interaktif bersama puluhan anak-anak di lingkungan Posyandu mitra untuk menyelaraskan tingkat kesulitan gerakan.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Riset Estimasi Pose & Desain Mekanika Game",
          summary: "Mengeksplorasi model deteksi sendi tubuh berbobot ringan yang dapat berjalan tanpa jeda di smartphone.",
          details: [
            "Mengevaluasi kecepatan inferensi model koordinat tubuh guna mencegah delay deteksi gerakan.",
            "Merancang aturan permainan di mana gerakan fisik anak langsung menggerakkan karakter dalam game.",
            "Menyusun kurva kesulitan bertahap dari pemanasan ringan hingga gerakan yang memacu kardio anak.",
          ],
        },
        phase2: {
          title: "2. Implementasi Gamifikasi & Sinkronisasi Cloud",
          summary: "Membangun sistem hadiah poin, papan peringkat (leaderboard), dan penyimpanan data kebugaran.",
          details: [
            "Menghubungkan perhitungan estimasi kalori terbakar berdasarkan jenis gerakan dan berat badan anak.",
            "Mengimplementasikan basis data Supabase untuk sinkronisasi skor dan pencapaian antarpemain secara langsung.",
            "Menyediakan fitur avatar karakter kustom yang dapat dibuka dengan mengumpulkan koin kebugaran.",
          ],
        },
        phase3: {
          title: "3. Uji Lapangan Bersama Anak & Evaluasi Samsung Innovation",
          summary: "Menjalankan sesi bermain langsung bersama anak-anak dan mengevaluasi dampak peningkatan gerak aktif.",
          details: [
            "Mengamati antusiasme dan respons motorik anak-anak saat memainkan level permainan petualangan.",
            "Mendapatkan umpan balik positif dari orang tua mengenai peningkatan aktivitas fisik harian anak mereka.",
            "Menampilkan hasil inovasi pada pameran proyek program Samsung Innovation Campus.",
          ],
        },
      },
      results: {
        overview: "SEGER berhasil membuktikan bahwa teknologi AI visi komputer dapat dimanfaatkan untuk menciptakan dampak sosial kebugaran anak yang positif dan mengasyikkan:",
        modules: [
          {
            title: "Mesin Deteksi Pose Kamera Real-Time",
            description: "Sistem visi komputer pada kamera smartphone yang membaca koordinat sendi tubuh anak tanpa memerlukan perangkat sensor tambahan.",
            highlights: [
              "Deteksi akurat untuk gerakan melompat, merunduk, melangkah ke samping, dan mengangkat tangan.",
              "Optimasi konsumsi baterai dan manajemen termal perangkat saat sesi permainan berlangsung.",
            ],
            metrics: [
              { label: "Kecepatan Deteksi", value: "35+ FPS" },
              { label: "Kebutuhan Sensor", value: "Hanya Kamera Bawaan" },
            ],
          },
          {
            title: "Mesin Gamifikasi Petualangan & Hadiah",
            description: "Struktur permainan interaktif dengan alur cerita petualangan, misi harian, dan lencana kebugaran yang memotivasi.",
            highlights: [
              "Sistem streak latihan harian yang mendorong konsistensi aktivitas fisik setiap pagi dan sore.",
              "Toko virtual untuk mendandani karakter dengan koin yang didapat murni dari tetesan keringat olahraga.",
            ],
            metrics: [
              { label: "Retensi Pengguna", value: "+ 82%" },
              { label: "Rata-rata Waktu Main", value: "25 Menit / Hari" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Membantu anak-anak mengubah waktu layar pasif menjadi aktivitas fisik aktif yang menyehatkan jantung dan stamina.",
          "Mendapatkan apresiasi tinggi dalam program pelatihan dan showcase Samsung Innovation Campus.",
          "Membuktikan potensi besar solusi kecerdasan buatan berbasis kamera smartphone murah untuk mengatasi isu kesehatan masyarakat.",
        ],
        personal: [
          "Mengembangkan keahlian praktis dalam integrasi Computer Vision di platform mobile dengan keterbatasan sumber daya komputasi.",
          "Menguasai psikologi desain gamifikasi interaktif untuk mempertahankan minat pengguna anak-anak.",
          "Mendapatkan kepuasan batin melihat anak-anak bergerak gembira dan tertawa saat berolahraga menggunakan aplikasi karya tim kami.",
        ],
      },
      teamAndAppreciation: {
        lead: "Karya SEGER terwujud berkat kolaborasi penuh semangat dari rekan-rekan pengembang dan mentor inovasi:",
        members: [
          "Mentor dan Fasilitator Samsung Innovation Campus atas bimbingan materi AI dan wawasan produk masa depan.",
          "Rekan setim atas kreativitas visual, animasi karakter game, dan dedikasi coding tanpa kenal lelah.",
          "Anak-anak dan orang tua di lingkungan Posyandu mitra atas senyuman, keceriaan, dan masukan spontan yang sangat berharga.",
        ],
      },
    },
    en: {
      title: "SEGER Exergame",
      subtitle: "Gamified Motion-Detection Exercise App for Children",
      background: {
        lead: "Created for the Samsung Innovation program, SEGER transforms screen time into active physical play for children through real-time camera computer vision motion tracking.",
        paragraphs: [
          "Sedentary behavior and passive screen addiction represent mounting health concerns for pediatric populations, driving early-onset cardiovascular risks and motor coordination deficits. Traditional exercise routines are frequently perceived by modern children as unengaging and tedious.",
          "SEGER bridges this gap by turning the built-in smartphone camera into an intelligent motion tracker. Children control animated adventure characters by physically jumping, ducking, and stretching in their living rooms, with real-time feedback tallying repetitions and burned calories.",
        ],
      },
      problemIdentification: [
        "Escalating passive screen-time durations driving physical inactivity and motor developmental delays among children.",
        "Low enthusiasm for conventional, repetitive pediatric physical exercises and gymnastics.",
        "High cost of dedicated wearable sensor hardware, external motion cameras, or specialized gaming consoles.",
        "Lack of accessible mechanisms for parents and community health workers to track children's physical activity data playfully.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Develop an accessible, sensorless mobile exergame leveraging standard device cameras to gamify daily physical exercise into an interactive adventure quest.",
        objectives: [
          "Deploy on-device pose estimation algorithms running at 60 FPS without streaming video frames to cloud servers.",
          "Implement a gamification engine featuring adventure quests, combo multipliers, and motivational audio soundscapes.",
          "Deliver weekly physical activity telemetry reports exportable for parents and pediatric health cadres.",
          "Maintain complete child privacy safety by executing 100% of frame processing in volatile local device memory.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Fullstack & Computer Vision Engineer",
        lead: "I served as technical lead across real-time camera computer vision pipelines and gamification logic:",
        responsibilities: [
          "Integrated on-device pose estimation models to calculate joint angles and validate exercise repetitions (jumping jacks, squats, arm raises).",
          "Engineered interactive state machines translating physical body coordinates into real-time gameplay actions.",
          "Constructed the Supabase cloud backend for multi-player leaderboard synchronization and achievement unlocking.",
          "Conducted interactive user acceptance sessions with pediatric groups to calibrate difficulty thresholds and repetition counts.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Pose Estimation Benchmarks & Game Mechanics",
          summary: "Evaluated mobile-optimized computer vision frameworks and established motion-to-gameplay mappings.",
          details: [
            "Benchmarked latency and thermal overhead across mobile pose estimation models on low-to-mid-tier Android hardware.",
            "Designed game mechanics linking physical movement intensity to character speed and obstacle clearance.",
            "Calibrated joint-angle mathematical tolerances to accommodate varying body heights and proportions.",
          ],
        },
        phase2: {
          title: "2. Gamification Engine & Cloud Sync",
          summary: "Implemented reward loops, avatar customization features, and cloud leaderboards.",
          details: [
            "Constructed caloric expenditure estimation formulas based on detected movement velocities and user weight.",
            "Implemented Supabase real-time pub/sub synchronization to render live regional leaderboard standings.",
            "Created an in-game cosmetic reward system unlocking virtual attire exclusively through physical sweat points.",
          ],
        },
        phase3: {
          title: "3. Pediatric Usability Testing & Showcase",
          summary: "Executed field trials with local community children and demonstrated the platform to Samsung program reviewers.",
          details: [
            "Gathered observational data tracking children's enthusiasm, engagement duration, and heart rate during gameplay sessions.",
            "Refined visual feedback animations ensuring young children easily understood posture correction prompts.",
            "Delivered the live demonstration at the Samsung Innovation Campus final exhibition.",
          ],
        },
      },
      results: {
        overview: "SEGER demonstrated that computer vision on standard smartphones can transform sedentary screen habits into active fitness routines:",
        modules: [
          {
            title: "On-Device Camera Motion Detector",
            description: "A lightweight computer vision pipeline capturing key joint angles in real time using the device's native camera.",
            highlights: [
              "Accurate detection for jumps, squats, arm stretches, and lateral steps without auxiliary hardware.",
              "Strict local frame processing ensuring zero video or imagery ever leaves the device, guaranteeing child privacy.",
            ],
            metrics: [
              { label: "Frame Rate", value: "60 FPS" },
              { label: "Privacy Rating", value: "100% Local" },
            ],
          },
          {
            title: "Gamified Quest & Reward Engine",
            description: "An adventure progression system featuring daily fitness missions, streak multipliers, and collectible badges.",
            highlights: [
              "Motivational soundscapes and visual cheer animations reinforcing positive movement habits.",
              "Adaptive difficulty adjustments keeping children in the optimal flow channel during daily exercise sessions.",
            ],
            metrics: [
              { label: "User Retention", value: "+ 82%" },
              { label: "Daily Session Time", value: "25 Minutes" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Converted passive entertainment screen time into vigorous cardiovascular exercise for pediatric participants.",
          "Earned high commendations in the Samsung Innovation Campus evaluation for software originality and social relevance.",
          "Demonstrated that cost-effective AI running on commodity hardware can solve pressing community health challenges.",
        ],
        personal: [
          "Gained practical mastery of edge computer vision deployment on mobile devices under tight compute and battery constraints.",
          "Honed gamification psychology principles to sustain long-term engagement among juvenile target demographics.",
          "Experienced the immense fulfillment of observing children laugh, jump, and enjoy healthy physical exertion through our software.",
        ],
      },
      teamAndAppreciation: {
        lead: "SEGER was realized through the energetic collaboration of our development team and program mentors:",
        members: [
          "Samsung Innovation Campus Mentors for their technical workshops on emerging AI deployment and product design.",
          "My engineering teammates for their tireless creative efforts crafting character sprites and animation state machines.",
          "The children and parents of our community partner Posyandu who brought joyous enthusiasm to every testing session.",
        ],
      },
    },
  },

  // 6. Girantra AI
  {
    slug: "girantra-ai-agri-marketplace",
    aliases: ["girantra-ai"],
    sheetCode: "PRJ-06",
    number: "06",
    year: "2025",
    role: "Lead Fullstack & Applied AI Engineer",
    status: "Proses · Tugas Kuliah",
    discipline: "Fullstack AI & Cross-Platform Systems",
    category: "fullstack-ai",
    techStack: [
      "Flutter",
      "Next.js",
      "React",
      "Gemini 2.0 Flash",
      "Supabase",
      "PostgreSQL",
      "TypeScript",
      "Dart",
      "Tailwind CSS",
    ],
    id: {
      title: "Girantra & MoneyTracker",
      subtitle: "AI Agri-Marketplace & Cross-Platform Financial Ecosystem",
      background: {
        lead: "Dirancang sebagai solusi komprehensif agritech untuk para petani lokal Indonesia, Girantra memadukan pasar hasil tani langsung (direct marketplace) dengan asisten kecerdasan buatan multimodal pendeteksi hama dan penyakit tanaman.",
        paragraphs: [
          "Rantai distribusi komoditas pertanian konvensional kerap merugikan petani akibat rantai tengkulak yang terlalu panjang, sehingga margin keuntungan petani tergerus sementara harga di tingkat konsumen tetap tinggi. Selain itu, keterbatasan akses ke penyuluh pertanian membuat penanganan hama sering kali terlambat dan merusak hasil panen.",
          "Girantra memberdayakan para petani dengan aplikasi web progresif (PWA) yang tetap berfungsi saat sinyal internet lemah (offline-first). Petani cukup memotret daun tanaman yang terserang hama, dan model kecerdasan buatan Google Gemini Vision akan mendiagnosis jenis penyakit serta memberikan resep penanganan organik dalam hitungan detik.",
        ],
      },
      problemIdentification: [
        "Panjangnya rantai perantara tengkulak yang memotong pendapatan bersih petani produsen secara drastis.",
        "Keterlambatan penanganan hama dan penyakit tanaman akibat minimnya jumlah penyuluh pertanian lapangan di daerah terpencil.",
        "Kondisi sinyal internet di area persawahan yang sering kali tidak stabil atau bahkan tidak memiliki sinyal sama sekali (blank spot).",
        "Ketergantungan berlebihan pada pestisida kimia berbahaya akibat minimnya panduan penanganan tanaman secara ramah lingkungan.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Membangun platform agritech terpadu yang memotong rantai tengkulak dan menyediakan konsultasi dokter tanaman berbasis AI multimodal yang dapat diakses petani dalam kondisi minim sinyal.",
        objectives: [
          "Mengintegrasikan Gemini Vision API untuk mendiagnosis puluhan jenis penyakit tanaman pangan tropis melalui foto kamera.",
          "Merancang marketplace hasil bumi langsung dari petani ke konsumen akhir (D2C) dengan skema pembayaran aman.",
          "Menerapkan arsitektur Progressive Web App (PWA) offline-first sehingga modul panduan pertanian tetap bisa dibaca tanpa internet.",
          "Membantu meningkatkan margin keuntungan petani mitra minimal 25% dibandingkan penjualan melalui tengkulak konvensional.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Fullstack & Applied AI Engineer",
        lead: "Saya memegang kepemimpinan teknis dalam membangun arsitektur marketplace, integrasi AI multimodal, dan kapabilitas offline:",
        responsibilities: [
          "Membangun integrasi Gemini Vision API dengan rekayasa prompt agrikultur untuk mengenali pola kerusakan daun dan batang tanaman.",
          "Merancang sistem inventaris hasil panen dan transaksi pasar online menggunakan Supabase dan Next.js.",
          "Menerapkan Service Worker caching dan IndexedDB untuk menjamin aplikasi tetap dapat diakses di zona minim sinyal sawah.",
          "Melakukan uji lapangan langsung bersama kelompok tani binaan di pedesaan Surakarta untuk memvalidasi kemudahan pemakaian.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Riset Lapangan Bersama Petani & Kurasi Dataset Hama",
          summary: "Mengumpulkan foto tanaman sakit langsung dari lahan pertanian dan berdiskusi dengan penyuluh lapangan.",
          details: [
            "Mendokumentasikan ratusan foto gejala penyakit umum pada padi, cabai, jagung, dan bawang merah.",
            "Menyusun basis pengetahuan penanganan hama berbasis bahan nabati dan biologis ramah lingkungan.",
            "Merancang antarmuka berbasis ikon visual besar yang sangat mudah dipahami oleh petani dari berbagai latar belakang usia.",
          ],
        },
        phase2: {
          title: "2. Integrasi AI Gemini Vision & Desain Marketplace",
          summary: "Membangun endpoint analisis gambar cerdas dan modul etalase penjualan hasil panen.",
          details: [
            "Mengoptimalkan kompresi gambar sisi klien sebelum pengiriman ke Gemini API agar hemat kuota internet petani.",
            "Membangun alur katalog produk hasil bumi dengan estimasi waktu panen dan ketersediaan stok.",
            "Menyediakan sistem verifikasi rekening bank petani untuk memastikan pencairan dana penjualan tepat sasaran.",
          ],
        },
        phase3: {
          title: "3. Uji Coba Offline PWA & Validasi Petani Mitra",
          summary: "Menguji ketahanan aplikasi di area sawah minim koneksi dan menyempurnakan fitur marketplace.",
          details: [
            "Melakukan uji coba pemindaian daun di tengah sawah dengan mode pesawat (airplane mode) aktif.",
            "Menyelaraskan buku saku penanganan hama agar tersimpan otomatis di memori lokal peramban (browser storage).",
            "Membantu puluhan transaksi penjualan beras dan sayuran organik pertama petani langsung ke konsumen perkotaan.",
          ],
        },
      },
      results: {
        overview: "Girantra berhasil dihadirkan sebagai jembatan teknologi pertanian yang nyata, terjangkau, dan berdampak langsung bagi peningkatan kesejahteraan petani lokal:",
        modules: [
          {
            title: "Dokter Tanaman AI Multimodal Gemini Vision",
            description: "Asisten cerdas pendeteksi penyakit tanaman yang menganalisis foto daun secara instan dan memberikan solusi penanganan berbasis organik.",
            highlights: [
              "Diagnosis akurat untuk penyakit hawar daun, bercak cokelat, antraknosa, dan busuk batang.",
              "Resep pestisida nabati buatan sendiri menggunakan bahan alami yang mudah ditemukan di sekitar pekarangan.",
            ],
            metrics: [
              { label: "Kecepatan Analisis", value: "< 3 Detik" },
              { label: "Cakupan Tanaman", value: "15+ Komoditas" },
            ],
          },
          {
            title: "Marketplace Hasil Bumi Langsung Petani (D2C)",
            description: "Pasar jual-beli komoditas pertanian tanpa perantara yang menghubungkan petani dengan konsumen rumah tangga dan restoran.",
            highlights: [
              "Pencairan dana langsung ke rekening petani tanpa potongan komisi yang memberatkan.",
              "Transparansi harga pasar acuan daerah untuk mencegah perang harga komoditas.",
            ],
            metrics: [
              { label: "Kenaikan Margin Petani", value: "+ 30%" },
              { label: "Keamanan Transaksi", value: "Escrow Terverifikasi" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Membantu puluhan keluarga petani lokal menekan risiko gagal panen dini melalui deteksi penyakit yang cepat dan tepat.",
          "Meningkatkan pendapatan bersih petani mitra dengan memotong rantai perantara tengkulak yang merugikan.",
          "Mendorong praktik pertanian berkelanjutan dengan memprioritaskan rekomendasi perawatan tanaman secara hayati dan ramah lingkungan.",
        ],
        personal: [
          "Mengembangkan keahlian rekayasa sistem AI multimodal mutakhir memanfaatkan Google Gemini 1.5 Flash API.",
          "Mengasah kemahiran dalam membangun aplikasi web progresif (PWA) offline-first di bawah tantangan infrastruktur riil lapangan.",
          "Mendapatkan kepuasan batin yang mendalam dalam menciptakan perangkat lunak yang memberi manfaat nyata bagi kehidupan masyarakat akar rumput.",
        ],
      },
      teamAndAppreciation: {
        lead: "Inisiatif agritech ini dapat terwujud berkat kolaborasi erat dengan para petani dan mitra pendamping lapangan:",
        members: [
          "Kelompok Tani Makmur Surakarta atas sambutan hangat, antusiasme, dan kerja sama selama uji coba lapangan.",
          "Penyuluh Pertanian Lapangan (PPL) independen atas konsultasi agronomi dan validasi resep penanganan hama.",
          "Rekan-rekan pengembang atas bantuan penyempurnaan alur pembayaran aman dan integrasi gateway logistik.",
        ],
      },
    },
    en: {
      title: "Girantra & MoneyTracker",
      subtitle: "AI Agri-Marketplace & Cross-Platform Financial Ecosystem",
      background: {
        lead: "Conceived as an all-in-one agritech solution for Indonesian smallholder farmers, Girantra pairs a direct-to-consumer crop marketplace with a multimodal AI assistant diagnosing crop diseases in real time.",
        paragraphs: [
          "Conventional agricultural supply chains severely penalize primary producers through multi-layered intermediary broker cartels, depressing farm-gate revenues while consumers pay inflated retail prices. Furthermore, scarce agronomic extension services leave smallholders vulnerable to preventable pest outbreaks.",
          "Girantra empowers farmers through an offline-first Progressive Web App (PWA). Producers capture photographs of diseased leaves directly in their paddies, receiving instant diagnoses and organic treatment recipes powered by Google Gemini Vision.",
        ],
      },
      problemIdentification: [
        "Extensive intermediary supply chain markups severely eroding primary producer revenues.",
        "Delayed crop disease detection resulting in catastrophic harvest losses due to scarce rural agronomy officers.",
        "Unreliable, intermittent cellular connectivity in rural farmlands hindering conventional cloud application adoption.",
        "Excessive reliance on costly, hazardous chemical pesticides lacking eco-friendly organic alternative guidance.",
      ],
      goalsAndObjectives: {
        mainGoal:
          "Build an offline-first agritech platform eliminating predatory broker margins and delivering real-time multimodal AI plant doctor consultations to rural farmers.",
        objectives: [
          "Deploy Google Gemini Vision pipelines identifying 20+ tropical crop pests and leaf pathologies from camera photos.",
          "Engineer a peer-to-peer direct marketplace connecting rural producers directly with urban consumer co-ops.",
          "Implement offline-resilient PWA caching guaranteeing that agronomic treatment guides remain accessible without cellular signal.",
          "Increase partner farmer profit margins by at least 25% over conventional middleman purchasing rates.",
        ],
      },
      rolesAndResponsibilities: {
        roleTitle: "Lead Fullstack & Applied AI Engineer",
        lead: "I directed system architecture across marketplace transactions, multimodal Gemini AI prompts, and offline PWA resilience:",
        responsibilities: [
          "Integrated Google Gemini Vision APIs using custom few-shot agronomic prompts returning structured diagnosis JSON payloads.",
          "Designed the product inventory and escrow transaction ledger using Supabase PostgreSQL with Row-Level Security.",
          "Engineered Service Worker caching strategies and IndexedDB synchronization guaranteeing smooth operation in remote blank spots.",
          "Conducted field trials with farming cooperatives in rural Surakarta to calibrate icon-driven visual workflows.",
        ],
      },
      processAndExecution: {
        phase1: {
          title: "1. Agronomic Discovery & Disease Dataset Curation",
          summary: "Gathered high-resolution leaf pathology imagery and established organic treatment knowledge bases.",
          details: [
            "Documented hundreds of field photographs across rice, chili, corn, and shallot crops across Surakarta farms.",
            "Curated bio-pesticide formulations utilizing readily available domestic botanical ingredients.",
            "Designed large-format, high-contrast visual icon navigation accommodating varying digital literacy levels.",
          ],
        },
        phase2: {
          title: "2. Multimodal AI Integration & Marketplace Logic",
          summary: "Developed automated image compression and deployed the direct-to-consumer marketplace catalog.",
          details: [
            "Implemented client-side image compression reducing upload payload size by 80% to conserve cellular data.",
            "Engineered crop listing catalogs complete with harvest schedules and batch weight metrics.",
            "Integrated verified payout escrow mechanisms ensuring safe remuneration transfers to rural bank accounts.",
          ],
        },
        phase3: {
          title: "3. Offline PWA Field Benchmarking & Producer Handoff",
          summary: "Validated offline reliability in cellular dead-zones and facilitated initial crop trade volumes.",
          details: [
            "Simulated remote paddy conditions by testing plant diagnosis workflows under complete airplane mode isolation.",
            "Verified automatic synchronization of offline crop listings upon reconnection to cellular networks.",
            "Facilitated pilot direct-sales shipments of organic rice and produce directly to urban buying groups.",
          ],
        },
      },
      results: {
        overview: "Girantra proved that applied multimodal AI can empower grassroots agricultural producers with practical, accessible tools:",
        modules: [
          {
            title: "Gemini Vision Multimodal Crop Doctor",
            description: "An instant botanical diagnostics assistant analyzing leaf photos and prescribing accessible bio-friendly remedies.",
            highlights: [
              "Accurate identification for blast leaf disease, brown spots, anthracnose, and stem rot.",
              "Step-by-step DIY botanical pesticide recipes utilizing locally available neem, garlic, and compost solutions.",
            ],
            metrics: [
              { label: "Diagnosis Latency", value: "< 3 Seconds" },
              { label: "Supported Crops", value: "15+ Staples" },
            ],
          },
          {
            title: "Direct-to-Consumer Harvest Marketplace",
            description: "A disintermediated crop exchange platform connecting farming cooperatives directly with urban consumers.",
            highlights: [
              "Zero broker commission deductions: farmers retain 100% of fair-trade sale revenues.",
              "Regional benchmark price index preventing predatory underbidding during peak harvest periods.",
            ],
            metrics: [
              { label: "Farmer Margin Lift", value: "+ 30%" },
              { label: "Transaction Escrow", value: "Verified" },
            ],
          },
        ],
      },
      impact: {
        company: [
          "Prevented early-season harvest loss across dozens of smallholder farming families through swift AI leaf pathology diagnoses.",
          "Substantially boosted farmer net take-home earnings by disintermediating exploitative rural broker networks.",
          "Fostered sustainable agricultural practices by incentivizing bio-organic fertilizers over toxic chemicals.",
        ],
        personal: [
          "Developed advanced expertise in multimodal Generative AI integration utilizing the Google Gemini API.",
          "Cultivated practical engineering mastery over offline-first Progressive Web App (PWA) architectures.",
          "Derived profound personal fulfillment from building software that tangibly uplifts grassroots community livelihoods.",
        ],
      },
      teamAndAppreciation: {
        lead: "Girantra was achieved through close collaboration with farming cooperatives and agronomic extension workers:",
        members: [
          "Kelompok Tani Makmur Surakarta for their warm hospitality, candid feedback, and active field trial participation.",
          "Independent Agricultural Field Officers (PPL) for their botanical knowledge, diagnosis validation, and mentoring.",
          "Our developer peers for their valuable guidance on secure payment gateways and logistics routing integrations.",
        ],
      },
    },
  },
]

function renderMdx(project, locale) {
  const data = project[locale]
  const isId = locale === "id"

  const bgSection = [
    `## ${isId ? "Latar Belakang" : "Background"}`,
    "",
    data.background.lead,
    "",
    ...data.background.paragraphs.map((p) => p + "\n"),
  ].join("\n")

  const problemSection = [
    `## ${isId ? "Identifikasi Masalah" : "Problem Identification"}`,
    "",
    isId
      ? "Berdasarkan analisis alur kerja dan observasi operasional di lapangan, tantangan pokok dan kendala utama yang berhasil diidentifikasi meliputi:"
      : "Based on operational workflow discovery and field observations, the primary challenges and core bottlenecks identified were as follows:",
    "",
    ...data.problemIdentification.map((p) => `- ${p}`),
    "",
  ].join("\n")

  const goalsSection = [
    `## ${isId ? "Tujuan & Sasaran" : "Goals & Objectives"}`,
    "",
    `> **${isId ? "Tujuan Utama" : "Primary Objective"}:** ${data.goalsAndObjectives.mainGoal}`,
    "",
    `**${isId ? "Sasaran Strategis & Tolok Ukur Keberhasilan:" : "Key Objectives & Measurable Milestones:"}**`,
    "",
    ...data.goalsAndObjectives.objectives.map((o) => `- ${o}`),
    "",
  ].join("\n")

  const rolesSection = [
    `## ${isId ? "Peran & Tanggung Jawab" : "Roles & Responsibilities"}`,
    "",
    isId
      ? `Sebagai **${data.rolesAndResponsibilities.roleTitle}**, saya memegang kepemilikan teknis penuh pada perancangan dan implementasi fitur:`
      : `Serving as **${data.rolesAndResponsibilities.roleTitle}**, I maintained direct technical ownership across architectural design and implementation:`,
    "",
    ...data.rolesAndResponsibilities.responsibilities.map((r) => `- ${r}`),
    "",
  ].join("\n")

  const processSection = [
    `## ${isId ? "Proses & Eksekusi" : "Process & Execution"}`,
    "",
    isId
      ? "Pengembangan sistem dieksekusi secara iteratif dan terstruktur melalui tiga tahapan utama untuk menjamin stabilitas arsitektur serta keselarasan kebutuhan pengguna:"
      : "Engineering execution followed an iterative three-stage model to ensure architectural resilience and precise user alignment:",
    "",
    `### ${data.processAndExecution.phase1.title}`,
    "",
    data.processAndExecution.phase1.summary,
    "",
    ...data.processAndExecution.phase1.details.map((d) => `- ${d}`),
    "",
    `### ${data.processAndExecution.phase2.title}`,
    "",
    data.processAndExecution.phase2.summary,
    "",
    ...data.processAndExecution.phase2.details.map((d) => `- ${d}`),
    "",
    `### ${data.processAndExecution.phase3.title}`,
    "",
    data.processAndExecution.phase3.summary,
    "",
    ...data.processAndExecution.phase3.details.map((d) => `- ${d}`),
    "",
  ].join("\n")

  const resultsSection = [
    `## ${isId ? "Hasil & Arsitektur" : "Results & Architecture"}`,
    "",
    data.results.overview,
    "",
    ...data.results.modules.map((m) => {
      const moduleParts = [
        `### ${m.title}`,
        "",
        m.description,
        "",
        ...m.highlights.map((h) => `- ${h}`),
        "",
      ]
      if (m.metrics && m.metrics.length > 0) {
        moduleParts.push(
          `| ${isId ? "Metrik Arsitektur" : "Architecture Metric"} | ${isId ? "Nilai Terukur" : "Measured Value"} |`,
          `| :--- | :--- |`,
          ...m.metrics.map((met) => `| **${met.label}** | \`${met.value}\` |`),
          ""
        )
      }
      return moduleParts.join("\n")
    }),
  ].join("\n")

  const impactSection = [
    `## ${isId ? "Dampak & Pencapaian" : "Impact & Achievements"}`,
    "",
    `### ${isId ? "Dampak Bagi Instansi / Organisasi" : "Impact on the Organization / Ecosystem"}`,
    "",
    ...data.impact.company.map((c) => `- ${c}`),
    "",
    `### ${isId ? "Dampak Bagi Pertumbuhan Pribadi" : "Impact on Personal Engineering Growth"}`,
    "",
    ...data.impact.personal.map((p) => `- ${p}`),
    "",
  ].join("\n")

  const teamSection = [
    `## ${isId ? "Tim & Apresiasi" : "Team & Appreciation"}`,
    "",
    data.teamAndAppreciation.lead,
    "",
    ...data.teamAndAppreciation.members.map((m) => `- ${m}`),
    "",
  ].join("\n")

  return [
    bgSection,
    problemSection,
    goalsSection,
    rolesSection,
    processSection,
    resultsSection,
    impactSection,
    teamSection,
  ].join("\n\n")
}

let createdCount = 0

for (const project of projectsData) {
  for (const locale of ["id", "en"]) {
    const content = renderMdx(project, locale)
    
    // Primary file
    const primaryFilename = `${project.slug}-${locale}.mdx`
    const primaryPath = path.join(targetDir, primaryFilename)
    fs.writeFileSync(primaryPath, content, "utf8")
    console.log(`[CREATED] ${primaryFilename}`)
    createdCount++

    // Aliases
    if (project.aliases) {
      for (const alias of project.aliases) {
        const aliasFilename = `${alias}-${locale}.mdx`
        const aliasPath = path.join(targetDir, aliasFilename)
        fs.writeFileSync(aliasPath, content, "utf8")
        console.log(`[CREATED ALIAS] ${aliasFilename}`)
        createdCount++
      }
    }
  }
}

console.log(`\nSuccessfully generated ${createdCount} MDX case study files in: ${targetDir}`)
