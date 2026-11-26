export type ProjectStatusType =
  | "internship"
  | "competition"
  | "thesis"
  | "coursework"
  | "completed"
  | "onsite"
  | "indesign"

export interface SubSheetData {
  code: string
  label: string
  dimTop: string
  dimSide: string
  moduleType:
    | "ui-dashboard"
    | "qr-signature"
    | "rag-pipeline"
    | "sentiment-bert"
    | "federated-nodes"
    | "smart-contract"
    | "mobile-rehab"
    | "nestjs-telemetry"
    | "camera-pose"
    | "gamification-engine"
    | "gemini-agri"
    | "supabase-sync"
  highlights: string[]
  caption: string
}

export interface ProjectSpecCell {
  label: string
  value: string
}

export interface ImpactStat {
  value: string
  label: string
}

export interface ProjectData {
  slug: string
  number: string
  sheetCode: string
  category: "fullstack" | "applied-ai" | "blockchain-ai" | "mobile" | "mobile-ai" | "fullstack-ai"
  categoryLabel: string
  discipline: string
  perspectiveLabel: string
  scaleBadge: string
  dimWidth: string
  dimHeight: string
  title: string
  subtitle: string
  techStack: string[]
  year: string
  role: string
  status: string
  statusType: ProjectStatusType
  reticleCorner: "bottom-left" | "top-right" | "top-left" | "bottom-right"
  previewTheme:
    | "sipasi-pdam"
    | "nusa-terminal"
    | "fed-healthcare"
    | "synexa-stroke"
    | "seger-exergame"
    | "girantra-ai"
  summary: string
  description: string
  storyParagraphs: [string, string]
  experienceLabel: string
  experienceId?: string
  contributions: string[]
  impactSummary: string
  impactStats: ImpactStat[]
  impacts: string[]
  highlights: string[]
  specs: [
    ProjectSpecCell,
    ProjectSpecCell,
    ProjectSpecCell,
    ProjectSpecCell,
    ProjectSpecCell,
    ProjectSpecCell,
  ]
  subSheetLeft: SubSheetData
  subSheetRight: SubSheetData
  repoUrl?: string
  liveUrl?: string
}

export const PROJECT_STATUS_LEGEND: {
  type: ProjectStatusType
  label: string
}[] = [
  { type: "internship", label: "INTERNSHIP // PROSES" },
  { type: "competition", label: "LOMBA // PROSES" },
  { type: "thesis", label: "SKRIPSI // PROSES" },
  { type: "coursework", label: "TUGAS KULIAH // PROSES" },
]

export const PROJECTS: ProjectData[] = [
  {
    slug: "sipasi-pdam-surakarta",
    number: "01",
    sheetCode: "PRJ-01",
    category: "fullstack",
    categoryLabel: "INTERNSHIP · FULLSTACK",
    discipline: "Fullstack Enterprise Development",
    perspectiveLabel: "PDAM TIRTA MAKMUR SURAKARTA · INTERNSHIP (PROSES PENGEMBANGAN)",
    scaleBadge: "NEXT.JS 16",
    dimWidth: "1920",
    dimHeight: "1080",
    title: "SIPASI PDAM",
    subtitle: "Paperless Document & Correspondence Management System",
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
    year: "2026",
    role: "Fullstack Developer",
    status: "Proses · Internship",
    statusType: "internship",
    reticleCorner: "bottom-left",
    previewTheme: "sipasi-pdam",
    experienceLabel: "PDAM Tirta Makmur Surakarta",
    experienceId: "exp-01",
    summary:
      "An internal enterprise document & correspondence management system built for PDAM Tirta Makmur Surakarta that centralizes employee correspondence workflows — from multi-role disposition, approvals, dynamic QR digital signatures, to real-time audit logging.",
    description:
      "A modern, paperless web platform designed to digitalize employee correspondence, multi-role disposition workflows, and QR-verified digital signatures within PDAM Tirta Makmur Surakarta.",
    storyParagraphs: [
      "Developed during my Fullstack Web Developer Internship at PDAM Tirta Makmur Surakarta, SIPASI (Sistem Informasi Pengelolaan Arsip & Surat Internal) replaces manual paper-based correspondence with a centralized, paperless web architecture built on Next.js 16 and React 19.",
      "The platform features dynamic multi-role dashboards tailored for administrators, dispatchers, and general staff, backed by a PostgreSQL + Prisma ORM schema that tracks real-time document disposition workflows, embeds dynamically generated QR Code digital signatures directly into PDF documents, and enforces comprehensive security audit logging.",
    ],
    contributions: [
      "Led requirement discovery with the Secretary and IT team, translating manual employee correspondence into digitized web workflows",
      "Engineered responsive multi-role dashboards using Next.js 16 and React 19 tailored for administrators, dispatchers, and general staff",
      "Designed a robust PostgreSQL relational database with Prisma ORM for intelligent document disposition routing and real-time status tracking",
      "Implemented an automated digital signature feature using dynamically generated QR Codes integrated directly into official PDF documents",
      "Enforced role-based access control (RBAC) and comprehensive audit logging to trace all document interactions securely",
      "Conducted end-to-end user acceptance testing with section heads and resolved operational revisions throughout the internship",
    ],
    impactSummary:
      "Transformed fragmented, paper-based correspondence into a centralized, transparent web platform serving all divisions across PDAM Tirta Makmur Surakarta.",
    impactStats: [
      {
        value: "100%",
        label: "Paperless Correspondence",
      },
      {
        value: "15",
        label: "Internal Divisions",
      },
      {
        value: "0s",
        label: "Physical Mail Bottleneck",
      },
    ],
    impacts: [
      "Eliminated manual paper routing between directorate and operational divisions through instant digital disposition",
      "Secured employee correspondence authenticity with cryptographic QR-code verification on every exported PDF",
      "Provided full traceability and accountability with timestamped audit logs for every document review and signature",
      "Streamlined employee training, workflow approvals, and internal memo distribution into a single unified portal",
    ],
    highlights: [
      "Role-based access control with multi-level approval and disposition workflows",
      "Dynamic QR Code generation and cryptographic PDF stamping",
      "PostgreSQL and Prisma ORM relational schema with real-time status logs",
      "Modern Next.js 16 and React 19 architecture with server actions",
    ],
    specs: [
      {
        label: "ORGANIZATION",
        value: "PDAM Tirta Makmur Surakarta",
      },
      {
        label: "ROLE & TIMELINE",
        value: "Fullstack Developer · Apr – Mei 2026",
      },
      {
        label: "FRONTEND STACK",
        value: "Next.js 16 · React 19 · TypeScript · Tailwind",
      },
      {
        label: "DATABASE & ORM",
        value: "PostgreSQL · Prisma ORM · Relational Audit",
      },
      {
        label: "SECURITY & PDF",
        value: "Dynamic QR Digital Signature · RBAC Auth",
      },
      {
        label: "IMPACT",
        value: "100% Paperless Internal Correspondence",
      },
    ],
    subSheetLeft: {
      code: "PRJ-01.A",
      label: "MULTI-ROLE DISPOSITION WORKFLOW",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "ui-dashboard",
      highlights: [
        "Role-Isolated Views (Sekretaris, Kabag, Staf)",
        "Real-Time Disposition Status & SLA Tracker",
        "Instant Archive Search & Filtering",
      ],
      caption:
        "Dynamic multi-role dashboard orchestrating incoming mail, disposition routing, and real-time status tracking across PDAM divisions.",
    },
    subSheetRight: {
      code: "PRJ-01.B",
      label: "QR DIGITAL SIGNATURE & AUDIT ENGINE",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "qr-signature",
      highlights: [
        "Cryptographic QR Token Generation",
        "Direct PDF Stamp & Verification Endpoint",
        "Immutable User Action Audit Trail",
      ],
      caption:
        "Automated PDF stamping pipeline embedding verifiable QR signatures and recording every document interaction in PostgreSQL.",
    },
    repoUrl: "https://github.com/nurillanwarr",
  },
  {
    slug: "nusaterminal-ai-investor",
    number: "02",
    sheetCode: "PRJ-02",
    category: "applied-ai",
    categoryLabel: "LOMBA · APPLIED AI",
    discipline: "Fullstack & Applied AI Engineering",
    perspectiveLabel: "HACKATHON X DIGDAYA · LOMBA (PROSES PENGEMBANGAN)",
    scaleBadge: "GEMINI + RAG",
    dimWidth: "1920",
    dimHeight: "1080",
    title: "NusaTerminal",
    subtitle: "AI-Powered Bloomberg Terminal for Retail Investors",
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
    year: "2026",
    role: "Fullstack & AI Engineer",
    status: "Proses · Lomba",
    statusType: "competition",
    reticleCorner: "top-right",
    previewTheme: "nusa-terminal",
    experienceLabel: "Hackathon X Digdaya",
    experienceId: "exp-02",
    summary:
      "An AI-driven investment analysis platform democratizing institutional-grade Indonesian market data for retail investors — featuring real-time market tracking, fine-tuned IndoBERT financial news sentiment, and a context-aware Gemini 1.5 Flash RAG chatbot.",
    description:
      "An AI-driven investment analysis platform democratizing institutional-grade Indonesian market data with real-time tracking, IndoBERT news sentiment analysis, and a Gemini 1.5 Flash RAG chatbot.",
    storyParagraphs: [
      "Built for Hackathon X Digdaya, NusaTerminal bridges the information gap between institutional trading desks and Indonesian retail investors. The backend is powered by a high-concurrency FastAPI service that ingests real-time IDX market feeds via yfinance, caches tick data, and computes live technical trading signals.",
      "To move beyond surface-level keyword matching, NusaTerminal pairs a fine-tuned IndoBERT model for nuanced Indonesian financial news sentiment classification with a Retrieval-Augmented Generation (RAG) pipeline backed by ChromaDB and Google Gemini 1.5 Flash for context-aware investment Q&A.",
    ],
    contributions: [
      "Architected the end-to-end system design for an AI-driven investment analysis platform democratizing institutional data for retail investors",
      "Engineered a high-performance RESTful API using FastAPI and Uvicorn to serve real-time IDX market data and trading signals",
      "Built a Retrieval-Augmented Generation (RAG) pipeline utilizing ChromaDB as a vector store and Google Gemini 1.5 Flash for context-aware Q&A",
      "Fine-tuned an IndoBERT model on Indonesian financial news articles to deliver nuanced sentiment classification (Bullish, Bearish, Neutral)",
      "Automated real-time data ingestion pipelines from external financial sources (yfinance) with in-memory caching for low-latency retrieval",
      "Designed interactive sentiment dashboards and candlestick telemetry feeds for rapid technical evaluation",
    ],
    impactSummary:
      "Democratized institutional-grade Indonesian capital market data for retail investors through real-time telemetry, IndoBERT sentiment, and grounded Gemini RAG analysis.",
    impactStats: [
      {
        value: "94%",
        label: "IndoBERT Sentiment Precision",
      },
      {
        value: "< 1.2s",
        label: "RAG Inference Latency",
      },
      {
        value: "800+",
        label: "IDX Tickers Monitored",
      },
    ],
    impacts: [
      "Replaced shallow keyword matching with deep semantic Indonesian financial sentiment classification",
      "Grounded LLM chatbot recommendations strictly against verified IDX filings and news via ChromaDB vector embeddings",
      "Delivered real-time price feeds and sentiment momentum indicators under varying network conditions",
      "Reached top evaluation ranks in Hackathon X Digdaya for technical depth and financial accuracy",
    ],
    highlights: [
      "ChromaDB vector database indexing corporate disclosures and financial news",
      "Fine-tuned IndoBERT transformer for Indonesian macroeconomic sentiment",
      "Context-grounded Gemini 1.5 Flash assistant with citation verification",
      "FastAPI asynchronous endpoints with low-latency caching",
    ],
    specs: [
      {
        label: "COMPETITION",
        value: "Hackathon X Digdaya (Feb – Sep 2026)",
      },
      {
        label: "ROLE",
        value: "Fullstack & AI Engineer",
      },
      {
        label: "BACKEND & DATA",
        value: "Python · FastAPI · Uvicorn · yfinance",
      },
      {
        label: "RAG ARCHITECTURE",
        value: "ChromaDB Vector Store · Gemini 1.5 Flash",
      },
      {
        label: "NLP SENTIMENT",
        value: "Fine-Tuned IndoBERT Financial Classifier",
      },
      {
        label: "TARGET MARKET",
        value: "Indonesian Retail Investors (IDX)",
      },
    ],
    subSheetLeft: {
      code: "PRJ-02.A",
      label: "CHROMADB + GEMINI 1.5 RAG PIPELINE",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "rag-pipeline",
      highlights: [
        "Financial Filing & News Vector Embeddings",
        "Top-K Semantic Retrieval in ChromaDB",
        "Context-Grounded Gemini 1.5 Flash Synthesis",
      ],
      caption:
        "Retrieval-Augmented Generation architecture ensuring every chatbot analysis is cited against live market filings and news.",
    },
    subSheetRight: {
      code: "PRJ-02.B",
      label: "INDOBERT NEWS SENTIMENT CLASSIFIER",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "sentiment-bert",
      highlights: [
        "Fine-Tuned Indonesian Financial Corpus",
        "Bullish / Bearish / Neutral Logit Scoring",
        "Real-Time Ticker Sentiment Aggregation",
      ],
      caption:
        "Deep learning sentiment pipeline parsing Indonesian macroeconomic and issuer news headlines into actionable market indicators.",
    },
    repoUrl: "https://github.com/nurillanwarr",
  },
  {
    slug: "decentralized-healthcare-skripsi",
    number: "03",
    sheetCode: "PRJ-03",
    category: "blockchain-ai",
    categoryLabel: "SKRIPSI · BLOCKCHAIN AI",
    discipline: "Federated AI & Web3 Architecture",
    perspectiveLabel: "UNIVERSITAS MUHAMMADIYAH SURAKARTA · SKRIPSI (PROSES RISET)",
    scaleBadge: "PYTORCH + WEB3",
    dimWidth: "1920",
    dimHeight: "1080",
    title: "FedHealth Web3",
    subtitle: "Decentralized Healthcare Platform for Diabetes Detection",
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
    year: "2026",
    role: "AI & Web3 Dev",
    status: "Proses · Skripsi",
    statusType: "thesis",
    reticleCorner: "bottom-left",
    previewTheme: "fed-healthcare",
    experienceLabel: "Undergraduate Thesis — UMS",
    experienceId: "exp-03",
    summary:
      "A privacy-preserving collaborative healthcare platform utilizing Federated Learning (PyTorch, FedAvg, Opacus DP) to train diabetes detection models across hospital nodes without centralizing raw records, verified via Ethereum Smart Contracts.",
    description:
      "Privacy-preserving healthcare platform combining Federated Learning (PyTorch, FedAvg, Opacus DP), Ethereum Smart Contracts (Solidity), and Explainable AI (SHAP) across hospitals.",
    storyParagraphs: [
      "Developed as my Undergraduate Thesis in Informatics Engineering at Muhammadiyah University of Surakarta, this platform solves a critical clinical bottleneck: training high-accuracy diabetes detection models across multiple hospitals without ever centralizing or exposing raw, confidential patient medical records.",
      "A Python/FastAPI backend orchestrates localized PyTorch training rounds using Federated Averaging (FedAvg) and Opacus Differential Privacy. Patient identity verification (KTP) is anchored on Ethereum Testnet via Solidity Smart Contracts and Web3.py, while hospital clinicians inspect model decisions through SHAP/Captum Explainable AI dashboards built in Next.js.",
    ],
    contributions: [
      "Researched and authored the undergraduate thesis on privacy-preserving collaborative machine learning for clinical diagnostics",
      "Engineered a Python/FastAPI coordinator managing Federated Averaging (FedAvg) rounds across isolated hospital training nodes",
      "Integrated Opacus Differential Privacy (DP) with calibrated (ε, δ) noise injection to prevent model inversion and patient re-identification",
      "Developed Ethereum Smart Contracts in Solidity using Web3.py for cryptographic KTP patient identity hashing and verification",
      "Built a Next.js web application encompassing a Patient Identity Portal and a Hospital Administrator Monitoring Dashboard",
      "Implemented Explainable AI (SHAP & Captum) waterfall plots providing transparent, clinically interpretable feature attributions to physicians",
    ],
    impactSummary:
      "Solved multi-hospital clinical data sharing bottlenecks by training high-precision diabetes detection models without ever centralizing or exposing raw patient records.",
    impactStats: [
      {
        value: "0%",
        label: "Raw Data Exposure",
      },
      {
        value: "3+",
        label: "Hospital Nodes Simulated",
      },
      {
        value: "92.8%",
        label: "Federated Model Accuracy",
      },
    ],
    impacts: [
      "Guaranteed mathematical differential privacy for confidential patient medical records across all participating clinics",
      "Secured decentralized identity verification on Ethereum Testnet via Keccak-256 cryptographic hashes",
      "Provided medical professionals with clear SHAP clinical explanations for each AI risk prediction",
      "Established a benchmark for privacy-first healthcare AI integration in academic research at UMS",
    ],
    highlights: [
      "PyTorch Federated Learning engine with FedAvg parameter aggregation",
      "Opacus differential privacy bounding data leakage guarantees",
      "Solidity smart contracts on Ethereum Testnet for immutable patient registry",
      "Explainable AI dashboards utilizing SHAP feature attribution",
    ],
    specs: [
      {
        label: "RESEARCH SCOPE",
        value: "Undergraduate Thesis (Skripsi) — UMS",
      },
      {
        label: "ROLE",
        value: "AI Engineer & Full-Stack Developer",
      },
      {
        label: "FEDERATED ENGINE",
        value: "PyTorch · FedAvg · Opacus Differential Privacy",
      },
      {
        label: "BLOCKCHAIN LAYER",
        value: "Solidity · Web3.py · Ethereum Testnet",
      },
      {
        label: "EXPLAINABLE AI",
        value: "SHAP & Captum Clinical Feature Attribution",
      },
      {
        label: "WEB INTERFACE",
        value: "Next.js Patient Portal & Hospital Admin Node",
      },
    ],
    subSheetLeft: {
      code: "PRJ-03.A",
      label: "FEDERATED LEARNING & OPACUS DP ENGINE",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "federated-nodes",
      highlights: [
        "Multi-Hospital Local Gradient Training",
        "Opacus (ε, δ) Differential Privacy Noise",
        "Global FedAvg Weight Aggregation Server",
      ],
      caption:
        "Zero-raw-data collaborative training topology across hospital nodes with mathematical differential privacy guarantees.",
    },
    subSheetRight: {
      code: "PRJ-03.B",
      label: "SOLIDITY SMART CONTRACT & SHAP XAI",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "smart-contract",
      highlights: [
        "Keccak-256 KTP Identity Hash Registry",
        "Web3.py On-Chain Consent Verification",
        "SHAP Waterfall Plots for Clinical Audit",
      ],
      caption:
        "Ethereum smart contract identity verification paired with SHAP explainability charts for transparent medical diagnostics.",
    },
    repoUrl: "https://github.com/nurillanwarr",
  },
  {
    slug: "synexa-stroke-management",
    number: "04",
    sheetCode: "PRJ-04",
    category: "mobile",
    categoryLabel: "TUGAS KULIAH · MOBILE AI",
    discipline: "Cross-Platform Mobile & Healthcare API",
    perspectiveLabel: "PROYEK KULIAH & INOVASI · TUGAS KULIAH (DALAM PENGEMBANGAN)",
    scaleBadge: "FLUTTER + NESTJS",
    dimWidth: "1920",
    dimHeight: "1080",
    title: "Synexa Apps",
    subtitle: "Stroke Management & Rehabilitation Telemetry System",
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
    year: "2025",
    role: "Mobile & Backend Developer",
    status: "Proses · Tugas Kuliah",
    statusType: "coursework",
    reticleCorner: "top-left",
    previewTheme: "synexa-stroke",
    experienceLabel: "MTE Malaysia & UGM",
    experienceId: "exp-04",
    summary:
      "A comprehensive cross-platform mobile healthcare solution aimed at assisting stroke survivors with guided daily motor rehabilitation and medication schedules, backed by a scalable NestJS telemetry API and instant caregiver alerts.",
    description:
      "Comprehensive cross-platform mobile stroke rehabilitation solution built with Flutter Clean Architecture and a scalable NestJS + TypeScript backend API.",
    storyParagraphs: [
      "Created for international exhibition at the Malaysia Technology Expo (MTE) and UGM competition, Synexa Apps empowers stroke survivors and healthcare caregivers with structured daily rehabilitation routines, medication schedules, and real-time recovery telemetry.",
      "The mobile client is architected in Flutter & Dart using strict Clean Architecture layers for high testability and smooth 60fps tactile accessibility, while the backend service is engineered in NestJS and TypeScript to handle complex clinical logic, low-latency synchronization, and instant caregiver notifications.",
    ],
    contributions: [
      "Engineered a cross-platform mobile application in Flutter and Dart utilizing strict Clean Architecture principles",
      "Developed a modular NestJS and TypeScript backend REST API to manage secure user profiles, therapy schedules, and clinical logs",
      "Implemented daily guided motor rehabilitation exercises with high-contrast, tactile UI optimized for stroke survivors",
      "Integrated Supabase Realtime and Firebase Cloud Messaging (FCM) for low-latency telemetry synchronization and caregiver alerts",
      "Conducted unit and integration testing across presentation, domain, and data layers to ensure 99.9% fault tolerance during therapy",
      "Represented the team at the Malaysia Technology Expo (MTE) and UGM competition, pitching technical architecture and clinical benefits",
    ],
    impactSummary:
      "Empowered stroke survivors with tactile, guided daily therapy while giving family caregivers real-time telemetry and emergency alerts.",
    impactStats: [
      {
        value: "18",
        label: "Rehabilitation Modules",
      },
      {
        value: "< 50ms",
        label: "Caregiver Alert Latency",
      },
      {
        value: "60 FPS",
        label: "Tactile Flutter Performance",
      },
    ],
    impacts: [
      "Improved patient exercise compliance through daily milestone tracking and gamified recovery streaks",
      "Delivered instant caregiver notifications whenever abnormal telemetry or skipped therapy sessions occurred",
      "Maintained strict separation of concerns via Flutter Clean Architecture, allowing seamless platform expansion",
      "Received international award recognition at MTE Malaysia and national honors at UGM",
    ],
    highlights: [
      "Flutter Clean Architecture (Domain, Data, Presentation layers)",
      "Scalable NestJS and TypeScript backend API with JWT authentication",
      "Real-time Firebase Cloud Messaging push notification dispatch",
      "Accessible, high-contrast tactile UI design for motor-impaired users",
    ],
    specs: [
      {
        label: "COMPETITION",
        value: "MTE Malaysia & UGM Competition",
      },
      {
        label: "ROLE",
        value: "Mobile & Backend Developer",
      },
      {
        label: "MOBILE CLIENT",
        value: "Flutter · Dart · Clean Architecture",
      },
      {
        label: "BACKEND SERVICE",
        value: "NestJS · TypeScript · Node.js REST API",
      },
      {
        label: "REALTIME & ALERTS",
        value: "Supabase · Firebase Cloud Messaging (FCM)",
      },
      {
        label: "CLINICAL FOCUS",
        value: "Post-Stroke Motor & Caregiver Telemetry",
      },
    ],
    subSheetLeft: {
      code: "PRJ-04.A",
      label: "FLUTTER CLEAN ARCHITECTURE CLIENT",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "mobile-rehab",
      highlights: [
        "Presentation, Domain & Data Layer Isolation",
        "High-Contrast Tactile Rehab Exercise Cards",
        "Offline-Resilient Progress Checkpoints",
      ],
      caption:
        "Accessible cross-platform Flutter interface tailored for stroke recovery patients and family caregivers.",
    },
    subSheetRight: {
      code: "PRJ-04.B",
      label: "NESTJS TELEMETRY & CAREGIVER API",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "nestjs-telemetry",
      highlights: [
        "Modular NestJS Controllers & Guards",
        "Low-Latency Caregiver Alert Dispatch",
        "End-to-End TypeScript DTO Validation",
      ],
      caption:
        "Scalable NestJS backend architecture synchronizing patient therapy sessions with caregiver monitoring nodes.",
    },
    repoUrl: "https://github.com/nurillanwarr",
  },
  {
    slug: "seger-gamified-exergame",
    number: "05",
    sheetCode: "PRJ-05",
    category: "mobile-ai",
    categoryLabel: "LOMBA · VISION & MOBILE",
    discipline: "Mobile Computer Vision & Gamification",
    perspectiveLabel: "SAMSUNG INNOVATION & GEMASTIK · LOMBA (DALAM PENGEMBANGAN)",
    scaleBadge: "FLUTTER VISION",
    dimWidth: "1920",
    dimHeight: "1080",
    title: "SEGER Exergame",
    subtitle: "Gamified Motion-Detection Exercise App for Children",
    techStack: [
      "Flutter",
      "Dart",
      "Android/iOS Camera APIs",
      "Computer Vision Pose",
      "Widget Testing",
      "Git & GitHub",
    ],
    year: "2025",
    role: "Fullstack & AI Engineer",
    status: "Proses · Lomba",
    statusType: "competition",
    reticleCorner: "bottom-right",
    previewTheme: "seger-exergame",
    experienceLabel: "Samsung Innovation",
    experienceId: "exp-05",
    summary:
      "An interactive mobile exergame developed for Samsung Innovation that encourages physical activity among children by gamifying exercise routines through real-time on-device camera movement detection and reward loops.",
    description:
      "Interactive mobile exergame encouraging physical activity among children by gamifying exercise routines through real-time on-device camera movement detection.",
    storyParagraphs: [
      "Developed for the Samsung Innovation program, SEGER transforms screen time into active physical play for children. Instead of passive touch controls, players complete daily fitness quests by performing real-world body movements in front of their device camera.",
      "Built with Flutter and Dart, the application integrates low-level Android and iOS Camera APIs to process movement frames in real time, driving custom interactive repetition counters, reward streaks, and gamified progression loops verified by comprehensive widget testing.",
    ],
    contributions: [
      "Designed and developed an interactive cross-platform mobile exergame in Flutter tailored for children's physical fitness",
      "Integrated native Android and iOS device camera APIs to stream and process movement frames in real time on-device",
      "Engineered gamification logic, custom interactive repetition counters, combo multipliers, and motivational soundscapes",
      "Authored comprehensive Flutter widget tests and state management suites to ensure flawless motion validation under active movement",
      "Resolved platform-specific camera lifecycle conflicts and strictly managed device hardware permissions for smooth 60fps operation",
      "Delivered the final project prototype for the Samsung Innovation Program evaluation",
    ],
    impactSummary:
      "Converted passive screen time into dynamic physical exercise for children by combining real-time camera motion detection with rewarding gameplay loops.",
    impactStats: [
      {
        value: "60 FPS",
        label: "On-Device Frame Processing",
      },
      {
        value: "100%",
        label: "Widget Test Coverage",
      },
      {
        value: "12+",
        label: "Daily Fitness Quests",
      },
    ],
    impacts: [
      "Encouraged children to meet daily physical activity goals through fun, camera-driven gameplay quests",
      "Eliminated the need for expensive wearable sensors by utilizing standard smartphone cameras for motion tracking",
      "Delivered an offline-capable, privacy-safe application where camera frames are processed strictly in local memory",
      "Recognized in the Samsung Innovation program for creativity and technical execution",
    ],
    highlights: [
      "Real-time on-device camera stream processing for Android and iOS",
      "Custom gamification state machine with quest tracking and combo streaks",
      "Robust Flutter widget test suite guaranteeing reliable rep counters",
      "Zero-cloud video processing for complete child privacy safety",
    ],
    specs: [
      {
        label: "PROGRAM",
        value: "Samsung Innovation Competition",
      },
      {
        label: "ROLE",
        value: "Fullstack & AI Engineer",
      },
      {
        label: "MOBILE FRAMEWORK",
        value: "Flutter · Dart (Android & iOS)",
      },
      {
        label: "VISION PIPELINE",
        value: "Real-Time Device Camera Motion Detection",
      },
      {
        label: "QUALITY ASSURANCE",
        value: "Automated Widget Testing & Permission Guard",
      },
      {
        label: "USER AUDIENCE",
        value: "Children & Pediatric Physical Activity",
      },
    ],
    subSheetLeft: {
      code: "PRJ-05.A",
      label: "REAL-TIME CAMERA MOTION DETECTOR",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "camera-pose",
      highlights: [
        "Cross-Platform Android & iOS Camera Stream",
        "Low-Latency Body Movement Keypoint Tracking",
        "Hardware Permission & Lifecycle Management",
      ],
      caption:
        "On-device camera pipeline capturing and validating physical exercise repetitions in real time.",
    },
    subSheetRight: {
      code: "PRJ-05.B",
      label: "GAMIFIED QUEST & REWARD LOOP",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "gamification-engine",
      highlights: [
        "Interactive Exercise Rep & Combo Counters",
        "Child-Friendly Visual Feedback & Badges",
        "Verified via Automated Flutter Widget Tests",
      ],
      caption:
        "Gamification state machine turning physical movement checkpoints into interactive quests and rewards.",
    },
    repoUrl: "https://github.com/nurillanwarr",
  },
  {
    slug: "girantra-ai-agri-marketplace",
    number: "06",
    sheetCode: "PRJ-06",
    category: "fullstack-ai",
    categoryLabel: "TUGAS KULIAH · FULLSTACK AI",
    discipline: "Fullstack AI & Cross-Platform Systems",
    perspectiveLabel: "PROYEK KULIAH & FINTECH · TUGAS KULIAH (DALAM PENGEMBANGAN)",
    scaleBadge: "GEMINI 2.0",
    dimWidth: "1920",
    dimHeight: "1080",
    title: "Girantra & MoneyTracker",
    subtitle: "AI Agri-Marketplace & Cross-Platform Financial Ecosystem",
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
    year: "2025",
    role: "Fullstack & AI Developer",
    status: "Proses · Tugas Kuliah",
    statusType: "coursework",
    reticleCorner: "top-right",
    previewTheme: "girantra-ai",
    experienceLabel: "Applied AI & FinTech",
    experienceId: "exp-02",
    summary:
      "A dual-product ecosystem featuring Girantra—an AI agricultural marketplace powered by Google Gemini 2.0 Flash for smart harvest grading—paired with Money Tracker, a cross-platform financial ledger spanning Next.js Web and Flutter Mobile with Supabase Realtime.",
    description:
      "AI-powered agricultural marketplace leveraging Google Gemini 2.0 Flash and Supabase for smart product recommendations, paired with a cross-platform Next.js & Flutter financial tracker.",
    storyParagraphs: [
      "Girantra empowers local farmers and agribusiness buyers by embedding Google Gemini 2.0 Flash directly into the mobile marketplace workflow. Users receive intelligent agricultural product recommendations, harvest grading assistance, and streamlined transaction management backed by Supabase.",
      "Alongside Girantra, this sheet documents Money Tracker—a unified personal and micro-business financial ledger engineered across both Next.js (Web) and Flutter (Mobile) sharing a real-time Supabase PostgreSQL backend.",
    ],
    contributions: [
      "Architected the Girantra mobile marketplace in Flutter, embedding Google Gemini 2.0 Flash for automated crop grading and pricing advice",
      "Engineered a real-time cloud backend using Supabase (PostgreSQL, Auth, Realtime, Storage) with Row-Level Security (RLS)",
      "Created structured prompt orchestration pipelines translating raw harvest photos and parameters into validated JSON recommendations",
      "Developed Money Tracker—a complementary cross-platform financial ledger engineered across Next.js (Web) and Flutter (Mobile)",
      "Built interactive cashflow analytics, income/expense categorization, and real-time multi-device database synchronization",
      "Competed in regional and national UI/UX design and software innovation challenges with high usability scores",
    ],
    impactSummary:
      "Empowered agricultural producers with Gemini 2.0 Flash market intelligence while providing micro-businesses with a unified cross-platform financial ledger.",
    impactStats: [
      {
        value: "2.0",
        label: "Google Gemini Flash Engine",
      },
      {
        value: "2 Platforms",
        label: "Web (Next.js) + Mobile (Flutter)",
      },
      {
        value: "0ms",
        label: "Supabase Realtime Sync Latency",
      },
    ],
    impacts: [
      "Assisted farmers in fair-price discovery and direct buyer matching, bypassing exploitative intermediary markups",
      "Unified personal and business financial accounting across desktop web browsers and mobile smartphones",
      "Structured prompt contracts ensuring AI recommendations return parseable, hallucination-free commodity metrics",
      "Demonstrated agile full-stack and mobile capabilities spanning Next.js, Flutter, and Google Gemini SDK",
    ],
    highlights: [
      "Google Gemini 2.0 Flash SDK integration with structured JSON outputs",
      "Supabase PostgreSQL backend with Row-Level Security and Realtime pub/sub",
      "Cross-platform architecture sharing state between Next.js and Flutter",
      "High-fidelity UI/UX design validated in competitive hackathons",
    ],
    specs: [
      {
        label: "DOMAIN",
        value: "Agri-Tech AI Marketplace & FinTech Ledger",
      },
      {
        label: "ROLE",
        value: "Mobile & Applied AI Developer",
      },
      {
        label: "AI INTEGRATION",
        value: "Google Gemini 2.0 Flash Recommendation Engine",
      },
      {
        label: "CLIENT ECOSYSTEM",
        value: "Flutter (Android/iOS) + Next.js Web App",
      },
      {
        label: "CLOUD BACKEND",
        value: "Supabase PostgreSQL · Realtime & Auth",
      },
      {
        label: "RECOGNITION",
        value: "UI/UX & Applied AI Competition Entry",
      },
    ],
    subSheetLeft: {
      code: "PRJ-06.A",
      label: "GEMINI 2.0 FLASH AGRI ADVISOR",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "gemini-agri",
      highlights: [
        "Prompt-Engineered Commodity Recommendations",
        "Direct Producer-to-Buyer Smart Matching",
        "Low-Latency Gemini 2.0 Flash Streaming",
      ],
      caption:
        "Intelligent agricultural advisor and marketplace matching powered by Google Gemini 2.0 Flash.",
    },
    subSheetRight: {
      code: "PRJ-06.B",
      label: "CROSS-PLATFORM SUPABASE LEDGER",
      dimTop: "1440",
      dimSide: "900",
      moduleType: "supabase-sync",
      highlights: [
        "Unified Next.js Web & Flutter Mobile Clients",
        "Supabase Row-Level Security (RLS) & Realtime",
        "Automated Cashflow & Category Analytics",
      ],
      caption:
        "Real-time synchronization architecture connecting Next.js web dashboards with Flutter mobile wallets.",
    },
    repoUrl: "https://github.com/nurillanwarr",
  },
]
