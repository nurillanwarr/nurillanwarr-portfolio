import { CaseStudyData } from "./projectCaseStudies"

export const PROJECT_CASE_STUDIES_ID: Record<string, CaseStudyData> = {
  "sipasi-pdam-surakarta": {
    slug: "sipasi-pdam-surakarta",
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
        summary:
          "Membedah alur tata persuratan dinas eksisting dan mengevaluasi batasan teknis guna menentukan arsitektur sistem yang andal.",
        details: [
          "Menganalisis matriks hierarki persetujuan dan aturan delegasi disposisi direksi di 15 unit kerja PDAM.",
          "Membuat prototipe mesin pembubuhan stempel QR PDF di lingkungan server guna memastikan latensi pemrosesan di bawah 1 detik.",
          "Merancang skema kontrol akses (RBAC) dengan pemisahan wewenang ketat antara Administrator, Pengagendakan, Direksi, dan Staf.",
        ],
      },
      phase2: {
        title: "2. Kick-Off Proyek & Penyelarasan Alur Disposisi",
        summary:
          "Membangun konsensus antardivisi mengenai transisi dari dokumen fisik ke sistem persetujuan digital nir-kertas.",
        details: [
          "Menyepakati alur status disposisi surat dinas (Draf, Diterima, Disposisi Direksi, Diteruskan Kabag, Selesai/Diarsipkan).",
          "Merumuskan format metadata surat, penomoran otomatis sesuai klasifikasi kode arsip resmi, dan struktur penamaan berkas.",
          "Menyiapkan lingkungan pengembangan lokal terisolasi serta repositori Git dengan pedoman kode etik arsitektur bersih.",
        ],
      },
      phase3: {
        title: "3. Pengembangan Iteratif & Peluncuran Produksi",
        summary:
          "Mengeksekusi sprint pengembangan perangkat lunak secara tangkas, pengujian komprehensif, dan peluncuran bertahap ke server produksi.",
        details: [
          "Mengimplementasikan autentikasi sesi aman, manajemen peran berlapis, dan proteksi rute middleware Next.js.",
          "Menghubungkan Prisma ORM dengan PostgreSQL terkelola serta menerapkan indeks komposit guna akselerasi kueri filter surat.",
          "Menjalankan User Acceptance Testing (UAT) komprehensif, pelatihan staf sekretariat, dan pengawalan transisi data arsip aktif.",
        ],
      },
    },
    results: {
      overview:
        "SIPASI berhasil diluncurkan ke lingkungan produksi PDAM Tirta Makmur Surakarta dengan modul-modul fungsional berstandar korporat:",
      modules: [
        {
          title: "Dashboard Korespondensi & Pelacak Disposisi Multi-Peran",
          slug: "dashboard-multi-role",
          description:
            "Antarmuka terpadu yang menyajikan alur disposisi hierarkis secara real-time sesuai hak akses pengguna masing-masing.",
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
          slug: "qr-signature-engine",
          description:
            "Generator stempel digital sisi server yang menyematkan kode verifikasi SHA-256 langsung ke lembar disposisi PDF resmi.",
          highlights: [
            "Penyematan QR Code dinamis otomatis pada sudut lembar disposisi tanpa mengubah tata letak dokumen asli.",
            "Halaman portal verifikasi publik mandiri untuk memvalidasi otentisitas dokumen dengan memindai QR Code.",
            "Validasi sidik jari kriptografis guna mencegah pemalsuan tanda tangan manual dan manipulasi isi surat.",
          ],
          metrics: [
            { label: "Latensi Cetak Stempel", value: "850 ms" },
            { label: "Integritas Data", value: "100% SHA-256" },
          ],
        },
        {
          title: "Rekam Jejak Audit & Retensi Arsip Digital Permanen",
          slug: "audit-log-retention",
          description:
            "Sistem pencatatan log forensik berkas yang merekam setiap siklus pembacaan, pengunduhan, dan pembaruan berkas secara permanen.",
          highlights: [
            "Log audit permanen mencatat identitas pengguna, cap waktu presisi milidetik, dan alamat IP klien.",
            "Gudang penyimpanan arsip digital terenkripsi dengan pengelompokan klasifikasi dinas PDAM.",
            "Pencarian teks lengkap kilat untuk menelusuri riwayat surat bertahun-tahun lampau dalam hitungan detik.",
          ],
          metrics: [
            { label: "Transparansi Audit", value: "100% Tercatat" },
            { label: "Pencarian Arsip", value: "< 1 Detik" },
          ],
        },
      ],
    },
    impact: {
      company: [
        "Memangkas waktu siklus disposisi dokumen dari semula 48-72 jam menjadi rata-rata di bawah 5 menit secara digital.",
        "Meniadakan 100% konsumsi kertas fotokopi nota disposisi fisik di seluruh 15 divisi operasional PDAM Tirta Makmur Surakarta.",
        "Mencegah potensi kehilangan berkas penting melalui pelacakan status penanggung jawab dokumen yang transparan dan dapat dipantau.",
        "Meningkatkan kepatuhan audit internal berkat adanya rekam jejak digital kriptografis pada setiap ekspor dokumen.",
      ],
      personal: [
        "Memperdalam keahlian arsitektur sistem berskala korporat menggunakan Next.js 16, React 19, TypeScript, dan Prisma ORM.",
        "Mengembangkan kompetensi kepemimpinan teknis dalam menerjemahkan kebutuhan birokrasi riil ke dalam sistem perangkat lunak terstruktur.",
        "Mendapatkan apresiasi tinggi dari jajaran direksi dan staf sekretariat atas kontribusi solusi inovatif selama masa magang.",
      ],
    },
    teamAndAppreciation: {
      lead: "Keberhasilan implementasi SIPASI tercapai berkat bimbingan, kepercayaan strategis, dan dedikasi luar biasa dari keluarga besar PDAM Tirta Makmur Surakarta:",
      members: [
        "Jajaran Direksi PDAM Tirta Makmur Surakarta atas kepercayaan, ruang inovasi, dan arahan strategis yang diberikan.",
        "Divisi IT dan Mentor Lapangan atas bimbingan infrastruktur server, pendampingan teknis, dan keterbukaan kolaborasi.",
        "Sekretariat Perusahaan dan Para Kepala Bagian atas kerja sama proaktif selama User Acceptance Testing (UAT) dan masa transisi sistem.",
      ],
    },
  },

  "nusaterminal-ai-investor": {
    slug: "nusaterminal-ai-investor",
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
      overview:
        "NusaTerminal sukses didemokan sebagai platform intelijen keuangan ritel terdepan dengan kemampuan analisis RAG sub-detik:",
      modules: [
        {
          title: "Pipeline RAG Laporan Keuangan IDX",
          slug: "rag-financial-reports",
          description:
            "Sistem penelusuran dokumen cerdas yang mengekstrak data dari ratusan halaman PDF laporan keuangan resmi emiten IDX.",
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
          slug: "weighted-sentiment-engine",
          description:
            "Klasifikasi sentimen berita keuangan berbasis NLP yang memahami konteks emiten bursa efek Indonesia.",
          highlights: [
            "Penyaringan rumor tak berdasar dan sinyal manipulasi harga saham.",
            "Indeks skor sentimen pasar harian terintegrasi ke dalam ringkasan emiten.",
          ],
          metrics: [
            { label: "F1-Score Model", value: "89.4%" },
            { label: "Analisis Berita", value: "Real-Time" },
          ],
        },
        {
          title: "Konsol Terminal Streaming Interaktif",
          slug: "streaming-terminal-console",
          description:
            "Antarmuka pengguna terminal bergaya Bloomberg dengan latensi minimal dan visualisasi grafik performa emiten.",
          highlights: [
            "Streaming token jawaban tanpa jeda menggunakan Server-Sent Events (SSE).",
            "Grafik rasio valuasi historis (PER, PBV, ROE) interaktif.",
          ],
          metrics: [
            { label: "Render Antarmuka", value: "60 FPS" },
            { label: "Ketersediaan", value: "100% Bebas Biaya" },
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

  "decentralized-healthcare-skripsi": {
    slug: "decentralized-healthcare-skripsi",
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
      overview:
        "Riset tugas akhir ini berhasil membuktikan bahwa federated learning dan blockchain mampu menjaga privasi rekam medis tanpa mengorbankan akurasi diagnostik:",
      modules: [
        {
          title: "Mesin Deteksi Diabetes Federated Learning",
          slug: "federated-learning-engine",
          description:
            "Model kecerdasan buatan terdistribusi yang dilatih di berbagai fasilitas kesehatan tanpa memindahkan data sensitif pasien.",
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
          slug: "smart-contract-consensus",
          description:
            "Logika kontrak pintar terdesentralisasi yang mencatat setiap putaran pelatihan AI secara transparan dan permanen.",
          highlights: [
            "Pencatatan riwayat kontribusi faskes yang tidak dapat diubah (immutable).",
            "Mencegah sabotase model atau injeksi data palsu dari node nakal.",
          ],
          metrics: [
            { label: "Gas Efficiency", value: "Optimized" },
            { label: "Integritas Konsensus", value: "100% Terverifikasi" },
          ],
        },
        {
          title: "Penyimpanan Rekam Medis Terenkripsi IPFS",
          slug: "ipfs-decentralized-storage",
          description:
            "Arsip rekam medis pasien terdistribusi dengan enkripsi end-to-end yang dikendalikan oleh kunci otorisasi pasien.",
          highlights: [
            "Meniadakan titik kegagalan tunggal (single point of failure) server rumah sakit.",
            "Pasien memiliki kendali penuh atas izin pembacaan catatan kesehatan mereka.",
          ],
          metrics: [
            { label: "Redundansi Data", value: "Multi-Node" },
            { label: "Tingkat Enkripsi", value: "AES-256 + RSA" },
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

  "synexa-stroke-management": {
    slug: "synexa-stroke-management",
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
      overview:
        "Synexa berhasil dikembangkan sebagai platform tele-rehabilitasi stroke terpadu yang memenangkan pengakuan di kompetisi nasional dan internasional:",
      modules: [
        {
          title: "Aplikasi Mobile Flutter Ramah Lansia",
          slug: "senior-friendly-flutter-app",
          description:
            "Aplikasi pendamping rehabilitasi stroke mandiri dengan antarmuka yang sangat mudah dipahami oleh pengguna lanjut usia.",
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
          slug: "nestjs-telemetry-gateway",
          description:
            "Layanan server tangguh yang mengumpulkan catatan repetisi latihan dan data vital pasien secara aman dan berlatensi rendah.",
          highlights: [
            "Sinkronisasi offline-to-online otomatis saat koneksi internet pasien kembali pulih.",
            "Integrasi notifikasi pengingat jadwal terapi berbasis Firebase Cloud Messaging (FCM).",
          ],
          metrics: [
            { label: "Uptime Server", value: "99.9%" },
            { label: "Respon API", value: "< 120 ms" },
          ],
        },
        {
          title: "Konsol Pemantauan & Evaluasi Klinis Dokter",
          slug: "physician-evaluation-console",
          description:
            "Portal web bagi dokter spesialis untuk meninjau grafik kemajuan motorik dan menyesuaikan dosis terapi pasien.",
          highlights: [
            "Grafik tren kekuatan otot dan rentang gerak sendi pasien dari waktu ke waktu.",
            "Pemberian catatan dan evaluasi medis langsung yang muncul di aplikasi pasien.",
          ],
          metrics: [
            { label: "Efisiensi Visite Dokter", value: "3x Lebih Cepat" },
            { label: "Kerahasiaan Medis", value: "Terkunci Ketat" },
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

  "seger-gamified-exergame": {
    slug: "seger-gamified-exergame",
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
      overview:
        "SEGER berhasil membuktikan bahwa teknologi AI visi komputer dapat dimanfaatkan untuk menciptakan dampak sosial kebugaran anak yang positif dan mengasyikkan:",
      modules: [
        {
          title: "Mesin Deteksi Pose Kamera Real-Time",
          slug: "pose-estimation-engine",
          description:
            "Sistem visi komputer pada kamera smartphone yang membaca koordinat sendi tubuh anak tanpa memerlukan perangkat sensor tambahan.",
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
          slug: "gamification-engine",
          description:
            "Struktur permainan interaktif dengan alur cerita petualangan, misi harian, dan lencana kebugaran yang memotivasi.",
          highlights: [
            "Sistem streak latihan harian yang mendorong konsistensi aktivitas fisik setiap pagi dan sore.",
            "Toko virtual untuk mendandani karakter dengan koin yang didapat murni dari tetesan keringat olahraga.",
          ],
          metrics: [
            { label: "Retensi Pengguna", value: "+ 82%" },
            { label: "Rata-rata Waktu Main", value: "25 Menit / Hari" },
          ],
        },
        {
          title: "Dashboard Kebugaran untuk Orang Tua & Posyandu",
          slug: "posyandu-health-report",
          description:
            "Laporan ringkas yang merangkum durasi olahraga, kalori terpakai, dan konsistensi gerak anak dalam bentuk grafik mudah dipahami.",
          highlights: [
            "Ekspor ringkasan mingguan ke format ramah pesan instan untuk dibagikan ke kader Posyandu.",
            "Rekomendasi durasi gerak harian yang disesuaikan dengan rentang usia anak.",
          ],
          metrics: [
            { label: "Transparansi Data", value: "100% Terukur" },
            { label: "Dukungan Posyandu", value: "Siap Integrasi" },
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

  "girantra-ai-agri-marketplace": {
    slug: "girantra-ai-agri-marketplace",
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
      overview:
        "Girantra berhasil dihadirkan sebagai jembatan teknologi pertanian yang nyata, terjangkau, dan berdampak langsung bagi peningkatan kesejahteraan petani lokal:",
      modules: [
        {
          title: "Dokter Tanaman AI Multimodal Gemini Vision",
          slug: "gemini-crop-doctor",
          description:
            "Asisten cerdas pendeteksi penyakit tanaman yang menganalisis foto daun secara instan dan memberikan solusi penanganan berbasis organik.",
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
          slug: "fair-trade-marketplace",
          description:
            "Pasar jual-beli komoditas pertanian tanpa perantara yang menghubungkan petani dengan konsumen rumah tangga dan restoran.",
          highlights: [
            "Pencairan dana langsung ke rekening petani tanpa potongan komisi yang memberatkan.",
            "Transparansi harga pasar acuan daerah untuk mencegah perang harga komoditas.",
          ],
          metrics: [
            { label: "Kenaikan Margin Petani", value: "+ 30%" },
            { label: "Keamanan Transaksi", value: "Escrow Terverifikasi" },
          ],
        },
        {
          title: "Arsitektur PWA Offline-First & Manajemen Panen",
          slug: "offline-first-pwa",
          description:
            "Sistem caching lokal yang memastikan katalog panduan penyakit dan pencatatan panen tetap dapat dibuka saat tidak ada sinyal.",
          highlights: [
            "Buku pintar hama pertanian tersimpan otomatis di perangkat tanpa memakan kuota ulang.",
            "Pencatatan inventaris hasil panen yang otomatis tersinkronisasi kembali saat mendeteksi koneksi internet.",
          ],
          metrics: [
            { label: "Ketahanan Offline", value: "Dukungan PWA Penuh" },
            { label: "Efisiensi Biaya", value: "Hemat Pupuk & Obat" },
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
}
