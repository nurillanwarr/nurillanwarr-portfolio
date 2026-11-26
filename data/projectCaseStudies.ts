/**
 * projectCaseStudies.ts
 * Comprehensive case study datasets for Nuril Anwar's 6 core engineering projects.
 * Structured to match the professional architectural case study hierarchy (Arsaludin standard):
 * 1. Background (Context & Operational Setting)
 * 2. Problem Identification (Core Challenges & Bottlenecks)
 * 3. Goals and Objectives (Strategic Milestones & Measurable Targets)
 * 4. Roles and Responsibilities (Technical Ownership & Engineering Duties)
 * 5. Process and Execution (3-Phase Iterative Execution Model)
 * 6. Results (CAD Sub-sheets, Architecture & Module Breakdown)
 * 7. Impact (Company & Personal Significance)
 * 8. Team and Appreciation (Mentors, Collaborators & Acknowledgments)
 */

export interface CaseStudyResultModule {
  title: string
  slug: string
  description: string
  highlights: string[]
  metrics?: { label: string; value: string }[]
}

export interface CaseStudyData {
  slug: string
  background: {
    lead: string
    paragraphs: string[]
  }
  problemIdentification: string[]
  goalsAndObjectives: {
    mainGoal: string
    objectives: string[]
  }
  rolesAndResponsibilities: {
    roleTitle: string
    lead: string
    responsibilities: string[]
  }
  processAndExecution: {
    phase1: {
      title: string
      summary: string
      details: string[]
    }
    phase2: {
      title: string
      summary: string
      details: string[]
    }
    phase3: {
      title: string
      summary: string
      details: string[]
    }
  }
  results: {
    overview: string
    modules: CaseStudyResultModule[]
  }
  impact: {
    company: string[]
    personal: string[]
  }
  teamAndAppreciation: {
    lead: string
    members: string[]
  }
}

const SIPASI_PDAM_CASE_STUDY: CaseStudyData = {
  slug: "sipasi-pdam-surakarta",
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
      summary:
        "Analyzed municipal public utility document governance standards and prototyped low-latency PDF manipulation inside Next.js 16 Server Actions.",
      details: [
        "Mapped standard municipal disposition sheets and inter-divisional memo formats used across PDAM Tirta Makmur Surakarta.",
        "Benchmarked PDF processing libraries (pdf-lib, node-qrcode) to achieve sub-second stamping without exhausting memory limits.",
        "Designed JWT session management and RBAC middleware to enforce strict data isolation across confidential documents.",
      ],
    },
    phase2: {
      title: "2. Project Kick-off & Disposition Workflow Alignment",
      summary:
        "Conducted alignment workshops with the President Director, Head of General Affairs, and IT Lead to formalize the digital routing matrix.",
      details: [
        "Formalized the multi-tier disposition cascade: Receiving Secretariat → President Director → Technical/General Directors → Division Heads → Execution Staff.",
        "Designed parallel routing workflows allowing concurrent multi-department reviews on joint initiatives.",
        "Established digital archive retention policies and automated PostgreSQL backup schedules.",
      ],
    },
    phase3: {
      title: "3. Iterative Development & Production Rollout",
      summary:
        "Executed bi-weekly development sprints with continuous integration, self-directed code reviews, and reliability testing.",
      details: [
        "Sprint 1: Schema design, database migrations, and encrypted session-based authentication.",
        "Sprint 2: Secretariat dashboard UI, document ingestion pipelines, and interactive digital disposition forms.",
        "Sprint 3: Cryptographic QR signature injection engine and public token verification endpoint.",
        "Sprint 4: Multi-parameter archive search, load testing, and staff training prior to formal handoff.",
      ],
    },
  },
  results: {
    overview:
      "SIPASI was successfully launched and adopted across the headquarters of PDAM Tirta Makmur Surakarta, delivering 3 robust core modules:",
    modules: [
      {
        title: "Multi-Role Dashboard & Disposition Tracker",
        slug: "dashboard-multi-role",
        description:
          "An intelligent multi-role console isolating workspaces for Admin, Directors, Department Heads, and Staff, complete with real-time SLA metrics.",
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
        slug: "qr-signature-engine",
        description:
          "An automated PDF stamping service embedding tamper-evident QR codes linked to secure cryptographic validation tokens.",
        highlights: [
          "Automated bottom-right QR token placement compliant with municipal archiving standards.",
          "Public-facing verification URL confirming document authenticity without exposing internal credentials.",
        ],
        metrics: [
          { label: "PDF Stamp Speed", value: "0.8 Seconds" },
          { label: "Security Standard", value: "SHA-256 Verified" },
        ],
      },
      {
        title: "Audit Trail Logging & Digital Archive Retention",
        slug: "audit-log-retention",
        description:
          "Comprehensive user activity logging tracking views, supervisor notes, and document exports for enterprise governance compliance.",
        highlights: [
          "Immutable append-only audit trail capturing microsecond timestamps and client IP addresses.",
          "One-click monthly correspondence summary exports to CSV and structured PDF reports.",
        ],
        metrics: [
          { label: "Paper Reduction", value: "100% Paperless" },
          { label: "Traceability", value: "100% Auditable" },
        ],
      },
    ],
  },
  impact: {
    company: [
      "Compressed mail disposition turnaround from 48 hours to under 5 minutes in real time.",
      "Saved hundreds of reams of paper annually while eliminating physical floor-to-floor dispatch expenses.",
      "Heightened operational transparency and accountability across all municipal operational divisions.",
      "Guaranteed official document authenticity through verifiable digital QR verification accessible anytime.",
    ],
    personal: [
      "Deepened production expertise in modern fullstack architectures with Next.js 16, React 19, and PostgreSQL.",
      "Strengthened system security design principles covering RBAC, session cryptography, and PDF stream manipulation.",
      "Enhanced technical communication skills by bridging complex public enterprise bureaucracy into elegant software.",
    ],
  },
  teamAndAppreciation: {
    lead: "The successful delivery of SIPASI was made possible through the mentorship and dedicated support of the PDAM Tirta Makmur Surakarta family:",
    members: [
      "The Board of Directors of PDAM Tirta Makmur Surakarta for their strategic trust and project patronage.",
      "The IT Division and Field Mentors for infrastructure support, technical advisory, and server access.",
      "The Corporate Secretariat and Division Heads for their active participation during User Acceptance Testing.",
    ],
  },
}

export const PROJECT_CASE_STUDIES: Record<string, CaseStudyData> = {
  "sipasi-pdam-surakarta": SIPASI_PDAM_CASE_STUDY,
  // Backward compatibility alias for previously cached URLs
  "sipasi-pdam-sukoharjo": {
    ...SIPASI_PDAM_CASE_STUDY,
    slug: "sipasi-pdam-sukoharjo",
  },

  "nusaterminal-ai-investor": {
    slug: "nusaterminal-ai-investor",
    background: {
      lead: "Recognized as a National Finalist in Hackathon X Digdaya under the Applied AI & Fintech category, our team engineered NusaTerminal to democratize capital market intelligence for Indonesian retail investors.",
      paragraphs: [
        "Historically, institutional-grade market terminals such as Bloomberg or FactSet remain locked behind steep subscription barriers exceeding $24,000 annually. As a result, domestic retail investors must wade through hundreds of dense Indonesian Stock Exchange (IDX) quarterly reports and navigate noisy, biased news feeds.",
        "NusaTerminal levels the playing field by combining Google Gemini 1.5 Flash LLM orchestration, Retrieval-Augmented Generation (RAG) over indexed IDX filings, and specialized IndoFinBERT models for fine-grained Indonesian market sentiment classification.",
      ],
    },
    problemIdentification: [
      "Retail investors struggle to synthesize dense quarterly earnings reports across 800+ listed IDX companies.",
      "Prohibitive institutional terminal pricing locks retail participants out of real-time market data analysis.",
      "Pervasive market rumors and unverified financial noise frequently mislead beginner retail investors.",
      "Generic LLMs suffer from numerical hallucinations when prompted for specific historical valuation ratios.",
    ],
    goalsAndObjectives: {
      mainGoal:
        "Engineer a context-grounded, RAG-powered financial intelligence terminal that delivers fast, accurate, and hallucination-free IDX earnings synthesis at zero cost to retail investors.",
      objectives: [
        "Automate document ingestion pipelines transforming IDX PDF reports into semantically searchable ChromaDB vector embeddings.",
        "Deploy a fine-tuned IndoFinBERT model to score news sentiment against real capital market risk dimensions.",
        "Build a high-performance terminal UI with sub-second response streaming for frictionless financial research.",
        "Attain >95% financial metric extraction accuracy with direct page citations to official company filings.",
      ],
    },
    rolesAndResponsibilities: {
      roleTitle: "Lead AI & Backend Engineer",
      lead: "I architected the RAG retrieval pipeline, integrated LLM reasoning models, and built the high-concurrency API service:",
      responsibilities: [
        "Engineered document chunking pipelines with LangChain and high-dimensional semantic vector embeddings.",
        "Configured ChromaDB vector stores paired with cross-encoder reranking to ensure precise report page citations.",
        "Developed high-throughput asynchronous REST APIs using Python, FastAPI, and Uvicorn.",
        "Implemented Gemini 1.5 Flash Function Calling for deterministic valuation ratio calculations (PER, PBV, ROE, DER).",
        "Delivered the technical architecture pitch and live prototype demonstration before the Hackathon X Digdaya jury.",
      ],
    },
    processAndExecution: {
      phase1: {
        title: "1. Financial Table Extraction & Semantic Chunking",
        summary:
          "Researched tabular PDF parsing strategies to preserve balance sheet column hierarchies during vectorization.",
        details: [
          "Tested markdown-based chunk splitting to preserve multi-period income statement relationships.",
          "Evaluated multilingual embedding models on Indonesian accounting terms like 'laba tahun berjalan' and 'liabilitas jangka pendek'.",
          "Formulated strict prompt guardrails commanding the LLM to refuse ungrounded speculative answers.",
        ],
      },
      phase2: {
        title: "2. Hybrid Retrieval Architecture & Reranking",
        summary:
          "Combined dense vector embeddings with sparse BM25 keyword matching to accurately capture 4-letter IDX ticker symbols.",
        details: [
          "Integrated Cohere Reranker to filter top-5 most relevant chunks before prompting Gemini 1.5 Flash.",
          "Connected live feeds from local financial media (Kontan, Bisnis.com) for real-time sentiment scoring.",
          "Optimized prompt templates with Chain-of-Thought (CoT) reasoning for multi-ticker peer comparisons.",
        ],
      },
      phase3: {
        title: "3. Terminal Interface & Streaming Latency Optimization",
        summary:
          "Packaged analytical services into a responsive dark-mode web console with token-by-token streaming.",
        details: [
          "Implemented Server-Sent Events (SSE) on FastAPI for instant token streaming without buffering latency.",
          "Engineered interactive price charts using TradingView Lightweight Charts and valuation radar diagrams.",
          "Benchmarked system resilience across 100 concurrent queries with sub-800ms time-to-first-token.",
        ],
      },
    },
    results: {
      overview:
        "NusaTerminal earned National Finalist honors at Hackathon X Digdaya and established 3 foundational architectural pillars:",
      modules: [
        {
          title: "IDX Financial Report RAG Engine",
          slug: "rag-financial-reports",
          description:
            "A question-answering pipeline indexing annual reports across 800+ IDX tickers with clickable page citations.",
          highlights: [
            "Side-by-side original PDF snippet viewer for immediate empirical auditability.",
            "Automated year-over-year (YoY) revenue and margin comparison extraction.",
          ],
          metrics: [
            { label: "Citation Precision", value: "96.4%" },
            { label: "Synthesis Latency", value: "< 1.5s" },
          ],
        },
        {
          title: "Weighted Financial Sentiment Engine",
          slug: "weighted-sentiment-engine",
          description:
            "An NLP classifier evaluating financial news polarity (Bullish, Bearish, Neutral) weighted by macroeconomic relevance.",
          highlights: [
            "Domain-tuned sentiment classification for banking, commodity, and consumer tech sectors.",
            "Pre-market volatility alerts triggered by negative sentiment spikes.",
          ],
          metrics: [
            { label: "Sentiment F1-Score", value: "0.89" },
            { label: "Feed Coverage", value: "24/7 Monitored" },
          ],
        },
        {
          title: "Interactive Streaming Terminal Console",
          slug: "streaming-terminal-console",
          description:
            "A high-density financial interface unifying real-time price feeds, valuation cards, and conversational AI analysis.",
          highlights: [
            "Bloomberg-inspired keyboard shortcuts for rapid equity exploration.",
            "Dynamic radar charts benchmarking multi-year valuation percentiles.",
          ],
          metrics: [
            { label: "Time-to-First-Token", value: "< 800ms" },
            { label: "User Satisfaction", value: "4.8 / 5.0" },
          ],
        },
      ],
    },
    impact: {
      company: [
        "Demonstrated the viability of cost-effective Gen-AI architectures in Indonesian financial analytics.",
        "Earned high praise from venture capital judges as one of the most commercially viable submissions at Hackathon X Digdaya.",
        "Pioneered accessible equity research tools for domestic retail participants.",
      ],
      personal: [
        "Mastered production RAG architectures, vector databases, and LLM prompt optimization techniques.",
        "Honed high-performance data processing patterns using Python, FastAPI, and domain-tuned NLP models.",
        "Strengthened technical leadership and product pitching skills before prominent AI industry leaders.",
      ],
    },
    teamAndAppreciation: {
      lead: "This milestone was achieved through exceptional team synergy and valuable hackathon mentorship:",
      members: [
        "My NusaTerminal team collaborators for their relentless 48-hour engineering sprint.",
        "The Hackathon X Digdaya organizing committee and judges for their incisive architectural feedback.",
        "The Indonesian AI developer community for open-source resources and ongoing inspiration.",
      ],
    },
  },

  "decentralized-healthcare-skripsi": {
    slug: "decentralized-healthcare-skripsi",
    background: {
      lead: "Conducted as my undergraduate thesis research at the Department of Informatics Engineering, Muhammadiyah University of Surakarta, this study couples Federated Learning with Ethereum Smart Contracts to facilitate privacy-preserving collaborative medical AI diagnosis.",
      paragraphs: [
        "In modern medical informatics, multi-hospital data collaboration is essential for training robust deep learning diagnostic models. However, strict medical privacy legislation (such as Indonesia's PDP Law and HIPAA) prohibits the centralization of patient electronic health records (EHR) into external repositories.",
        "This research introduces a decentralized paradigm: training deep neural networks locally across distributed medical nodes via Federated Learning. The AI model travels to the clinical data, never the reverse. Global model weight updates are aggregated securely and governed by Solidity Smart Contracts deployed on the Ethereum Virtual Machine (EVM).",
      ],
    },
    problemIdentification: [
      "Data privacy regulations strictly ban pooling raw hospital radiology records onto centralized external servers.",
      "Data silos cause neural networks trained at a single facility to generalize poorly across external clinical demographics.",
      "Vulnerability to model poisoning attacks from adversarial or corrupt nodes in untrusted distributed networks.",
      "Lack of transparent incentive models and immutable audit trails to verify computational contributions from member clinics.",
    ],
    goalsAndObjectives: {
      mainGoal:
        "Engineer a decentralized, blockchain-governed Federated Learning framework enabling collaborative pulmonary disease classification across hospital nodes without transmitting raw patient records.",
      objectives: [
        "Implement isolated local model training (FedAvg) across decentralized hospital nodes.",
        "Develop Solidity Smart Contracts on the EVM to validate model weight hashes and deter gradient poisoning.",
        "Store encrypted global weight artifacts on the InterPlanetary File System (IPFS) to ensure trustless decentralization.",
        "Achieve global diagnostic classification performance comparable to centralized baselines with zero raw data leakage.",
      ],
    },
    rolesAndResponsibilities: {
      roleTitle: "Lead Thesis Researcher & Engineer",
      lead: "I architected the research methodology, implemented the federated learning pipeline, and authored the EVM smart contracts from scratch:",
      responsibilities: [
        "Conducted extensive literature research on differential privacy, federated learning convergence, and blockchain consensus.",
        "Developed distributed training pipelines with PyTorch and Flower (FL Framework) on pulmonary X-ray imaging datasets.",
        "Authored, tested, and deployed gas-optimized Solidity Smart Contracts using Hardhat.",
        "Engineered decentralized aggregator nodes coordinating through IPFS and Web3 JSON-RPC endpoints.",
        "Authored the complete thesis manuscript and presented empirical findings in academic seminars.",
      ],
    },
    processAndExecution: {
      phase1: {
        title: "1. Mathematical Modeling & Privacy Architecture",
        summary:
          "Formulated mathematical privacy guarantees (Epsilon Differential Privacy) and Byzantine-robust aggregation schemas.",
        details: [
          "Partitioned medical imaging datasets into 5 simulated clinical nodes with non-IID (Independent and Identically Distributed) properties.",
          "Evaluated trade-offs between differential privacy noise injection and model diagnostic accuracy.",
          "Designed cryptographic validation schemes verifying node gradient signatures on-chain.",
        ],
      },
      phase2: {
        title: "2. Smart Contract Engineering & IPFS Storage",
        summary:
          "Built Solidity contracts on EVM to govern training epochs, authenticate node identities, and anchor IPFS CIDs.",
        details: [
          "Engineered Web3 event listeners to automatically trigger aggregation rounds upon quorum consensus.",
          "Implemented token staking penalties disqualifying nodes submitting poisoned gradient updates.",
          "Optimized contract gas consumption by 35% through packed storage layouts and bitwise operations.",
        ],
      },
      phase3: {
        title: "3. Empirical Benchmarking & Multi-Node Evaluation",
        summary:
          "Executed federated training simulations across 100 rounds across 5 distributed nodes on local and testnet environments.",
        details: [
          "Benchmarked model convergence curves against centralized baseline models.",
          "Verified zero raw patient data leakage via deep packet inspection with Wireshark.",
          "Demonstrated robust F1-score and ROC-AUC metrics across multi-class pulmonary diagnoses.",
        ],
      },
    },
    results: {
      overview:
        "This research demonstrated the practical feasibility of decentralized Federated Learning through 3 notable technical accomplishments:",
      modules: [
        {
          title: "Federated Learning Engine (FedAvg)",
          slug: "federated-learning-engine",
          description:
            "A localized training pipeline extracting neural gradients without inspecting raw patient imagery.",
          highlights: [
            "Resilient training under non-IID data distributions reflecting realistic multi-hospital demographics.",
            "Gradient weight quantization compressing network transmission bandwidth by 60%.",
          ],
          metrics: [
            { label: "Global Accuracy", value: "94.2%" },
            { label: "Raw Data Leakage", value: "0% (Audited)" },
          ],
        },
        {
          title: "EVM Consensus & Verification Smart Contract",
          slug: "smart-contract-consensus",
          description:
            "A trustless Solidity coordinator verifying node cryptographic signatures and recording model state transitions.",
          highlights: [
            "Immutable IPFS CID hashing guaranteeing tamper-proof version history across training epochs.",
            "Automated gradient anomaly detection (Byzantine Fault Tolerance) neutralizing adversarial poisoning attempts.",
          ],
          metrics: [
            { label: "Gas Optimization", value: "-35% Gas Saved" },
            { label: "Node Security", value: "Byzantine Resilient" },
          ],
        },
        {
          title: "IPFS Decentralized Artifact Storage",
          slug: "ipfs-decentralized-storage",
          description:
            "Content-addressable encrypted storage managing model checkpoints across distributed nodes.",
          highlights: [
            "SHA-256 multihash addressing ensuring absolute model immutability.",
            "Real-time experiment telemetry console tracking loss and accuracy metrics across participating nodes.",
          ],
          metrics: [
            { label: "Round Aggregation", value: "3.2s / Round" },
            { label: "Node Scalability", value: "Up to 50 Nodes" },
          ],
        },
      ],
    },
    impact: {
      company: [
        "Furnished a compliant architectural blueprint for healthcare networks to collaboratively train diagnostic models under Indonesia's PDP Law.",
        "Proved that decentralized frameworks can replace costly centralized servers in nationwide medical data governance.",
        "Served as a leading institutional reference for the convergence of Blockchain and Artificial Intelligence.",
      ],
      personal: [
        "Achieved advanced command over distributed machine learning theory, differential privacy, and computational mathematics.",
        "Cultivated specialized engineering skills in Solidity smart contracts, Web3 ecosystems, and EVM gas optimization.",
        "Concluded undergraduate studies with high-impact original research addressing contemporary technological challenges.",
      ],
    },
    teamAndAppreciation: {
      lead: "This thesis was successfully concluded thanks to the boundless guidance and support from:",
      members: [
        "My Thesis Advisor for rigorous methodological guidance, theoretical mentorship, and tireless encouragement.",
        "The Informatics Engineering Laboratory at Muhammadiyah University of Surakarta for GPU computational infrastructure.",
        "My fellow engineering peers for insightful technical discussions and peer reviews throughout the study.",
      ],
    },
  },

  "synexa-stroke-management": {
    slug: "synexa-stroke-management",
    background: {
      lead: "Developed within the Samsung Innovation Campus program, Synexa is an integrated stroke rehabilitation tele-management ecosystem connecting at-home patients with attending medical specialists in real time.",
      paragraphs: [
        "Post-stroke survivors require disciplined, self-directed home physiotherapy to recover sensorimotor capabilities. Yet over 70% of patients experience demotivation or execute exercises incorrectly due to the lack of direct clinical supervision outside hospital environments.",
        "Synexa resolves this gap with a unified digital ecosystem: a senior-friendly Flutter mobile application guiding daily routines, a high-throughput NestJS microservices backend handling real-time motion telemetry, and a clinical portal enabling physicians to objectively track patient Range of Motion (ROM).",
      ],
    },
    problemIdentification: [
      "High rates of incomplete motor recovery caused by unmonitored home physical therapy regimens.",
      "Prohibitive costs and scheduling limitations associated with daily in-person home therapist visits.",
      "Patient motor rehabilitation history has historically been recorded via subjective logs rather than quantitative angular metrics.",
      "Absence of proactive alerting systems when patients exhibit severe muscle fatigue or dangerous compensatory movements.",
    ],
    goalsAndObjectives: {
      mainGoal:
        "Engineer a smart tele-rehabilitation ecosystem that guides, records, and quantitatively analyzes at-home stroke physical therapy for attending clinicians.",
      objectives: [
        "Develop a senior-friendly Flutter mobile app optimized for motor-impaired individuals.",
        "Architect a resilient NestJS backend capable of processing high-frequency motion sensor telemetry in real time.",
        "Equip clinicians with an analytical evaluation console tracking quantifiable Range of Motion (ROM) gains.",
        "Drive daily rehabilitation adherence above 80% through tailored behavioral gamification mechanics.",
      ],
    },
    rolesAndResponsibilities: {
      roleTitle: "Backend & Systems Lead",
      lead: "I architected the backend microservices, managed real-time patient telemetry streams, and directed multi-platform API integration:",
      responsibilities: [
        "Architected the backend services using NestJS, TypeScript, and PostgreSQL following Clean Architecture principles.",
        "Implemented a low-latency WebSocket gateway for real-time streaming of angular movement telemetry.",
        "Engineered adherence scoring algorithms and kinematic movement deviation detectors.",
        "Secured sensitive personal health data with AES-256 encryption and tiered JWT authentication.",
        "Collaborated with mobile Flutter engineers and UI/UX designers for seamless cross-platform integration.",
      ],
    },
    processAndExecution: {
      phase1: {
        title: "1. Clinical Physiotherapy Discovery & Senior UX Design",
        summary:
          "Researched hospital rehabilitation protocols and designed high-contrast UI layouts featuring oversized touch targets.",
        details: [
          "Consulted certified physiotherapists regarding upper-extremity motion recovery protocols.",
          "Analyzed post-stroke motor limitations to streamline interactions and eliminate complex multi-touch gestures.",
          "Defined compressed JSON telemetry schemas to maintain reliability over unstable mobile data networks.",
        ],
      },
      phase2: {
        title: "2. Backend Architecture & Real-Time Telemetry Pipeline",
        summary:
          "Constructed a NestJS microservice service with indexed relational tables for low-latency session queries.",
        details: [
          "Implemented WebSockets (Socket.io) to transmit patient joint coordinates directly to clinician displays.",
          "Structured PostgreSQL time-series tables recording joint angle telemetry per exercise repetition.",
          "Engineered automated exercise scheduling and FCM push notification reminders.",
        ],
      },
      phase3: {
        title: "3. System Integration & Clinical Metric Validation",
        summary:
          "Executed end-to-end integration testing across mobile clients, telemetry gateways, and physician consoles.",
        details: [
          "Validated offline-first synchronization ensuring zero telemetry loss during intermittent network drops.",
          "Benchmarked calculated Range of Motion (ROM) angles against manual goniometer measurements by therapists.",
          "Optimized monthly clinical queries, enabling physician evaluation dashboards to render in under 300ms.",
        ],
      },
    },
    results: {
      overview:
        "Synexa was successfully engineered as an end-to-end tele-rehabilitation platform delivering 3 core system modules:",
      modules: [
        {
          title: "Senior-Friendly Mobile Patient App (Flutter)",
          slug: "senior-friendly-flutter-app",
          description:
            "A rehabilitation companion featuring audio-visual guidance, oversized touch surfaces, and positive motivational cues.",
          highlights: [
            "Step-by-step video exercise guides with calming real-time visual feedback.",
            "One-tap emergency alert instantly notifying designated family members and on-call medical staff.",
          ],
          metrics: [
            { label: "Routine Adherence", value: "85% Consistent" },
            { label: "User Satisfaction", value: "4.9 / 5.0" },
          ],
        },
        {
          title: "High-Throughput Telemetry Gateway (NestJS)",
          slug: "nestjs-telemetry-gateway",
          description:
            "A scalable backend service ingesting concurrent joint coordinate streams and persisting time-series data.",
          highlights: [
            "Domain-Driven Design (DDD) modular architecture built for horizontal scalability.",
            "End-to-end encryption preserving clinical confidentiality.",
          ],
          metrics: [
            { label: "Stream Latency", value: "< 50ms" },
            { label: "Service Uptime", value: "99.9%" },
          ],
        },
        {
          title: "Physician Clinical Evaluation Console",
          slug: "physician-evaluation-console",
          description:
            "A web analytics suite allowing therapists to visualize longitudinal recovery charts and calibrate exercise parameters.",
          highlights: [
            "Weekly ROM comparative trend lines assessing physical therapy efficacy.",
            "Digital clinical charting and per-patient target repetition adjustments.",
          ],
          metrics: [
            { label: "Monitoring Speed", value: "3x Faster" },
            { label: "Metric Accuracy", value: "95% Goniometer Matched" },
          ],
        },
      ],
    },
    impact: {
      company: [
        "Significantly reduced travel overhead and outpatient clinic expenditures for stroke recovery families.",
        "Provided physical therapy specialists with objective digital instruments to monitor larger patient caseloads efficiently.",
        "Garnered outstanding acclaim within Samsung Innovation Campus as an impactful healthcare technology initiative.",
      ],
      personal: [
        "Mastered modern enterprise backend architectures with NestJS, TypeScript, and real-time WebSocket pipelines.",
        "Internalized inclusive design and human-centered engineering principles for users with physical motor constraints.",
        "Deepened capabilities in microservice orchestration and industry-standard health data integrity.",
      ],
    },
    teamAndAppreciation: {
      lead: "This innovation came to life through the collaborative synergy of mentors, peers, and medical advisors:",
      members: [
        "Samsung Innovation Campus mentors for technical coaching and product development methodologies.",
        "My Synexa development teammates for seamless integration across Flutter frontends and NestJS backends.",
        "Medical practitioners and physical therapists who provided clinical feedback for patient well-being.",
      ],
    },
  },

  "seger-gamified-exergame": {
    slug: "seger-gamified-exergame",
    background: {
      lead: "Honored with the Silver Award at the international Malaysia Technology Expo (MTE), SEGER is an interactive computer vision exergame leveraging pose estimation to enhance physical fitness and balance in older adults.",
      paragraphs: [
        "Age-related muscle loss and postural instability (sarcopenia) represent primary risk factors for fatal falls among elderly individuals. Conventional physical therapy routines, however, often feel repetitive and lack immediate posture correction feedback.",
        "SEGER combines computer vision AI (MediaPipe Pose) with immersive gamification mechanics. Seniors exercise in front of a standard laptop webcam without cumbersome wearable sensors; the system tracks 33 skeletal landmarks in real time, counts repetitions, evaluates joint angles, and presents rewarding gameplay feedback.",
      ],
    },
    problemIdentification: [
      "High rates of disinterest and routine abandonment among seniors engaging in unassisted home physical fitness exercises.",
      "Elevated risk of musculoskeletal injury when performing gymnastic routines with incorrect posture without direct supervision.",
      "High financial cost and setup complexity of specialized medical wearable tracking devices for elderly users.",
      "Absence of quantitative musculoskeletal progress records for community eldercare centers (Posyandu Lansia).",
    ],
    goalsAndObjectives: {
      mainGoal:
        "Engineer a sensor-free Computer Vision exergame platform that makes geriatric physical activity engaging, safe, and posture-corrective in real time.",
      objectives: [
        "Deploy MediaPipe Pose 33-landmark tracking operating smoothly on standard webcams at 30+ FPS.",
        "Implement ergonomic joint angle evaluation algorithms to prevent musculoskeletal strain.",
        "Design interactive gameplay narratives celebrating local cultural themes to stimulate cognitive engagement.",
        "Provide longitudinal fitness reports for community eldercare volunteers.",
      ],
    },
    rolesAndResponsibilities: {
      roleTitle: "Lead AI Vision & Gameplay Engineer",
      lead: "I led the development of pose estimation algorithms, interactive gamification mechanics, and computer vision pipeline optimization:",
      responsibilities: [
        "Constructed geometric calculation pipelines evaluating anatomical joint angles (shoulders, elbows, hips, knees) using MediaPipe 3D coordinates.",
        "Engineered finite-state machines detecting repetition cycles for senior exercise routines (arm raises, knee bends, shoulder rotations).",
        "Coupled interactive game mechanics with motivating audio feedback designed for elderly cognitive stimulation.",
        "Optimized algorithms to execute smoothly within standard web browsers via WebAssembly (Wasm) without latency.",
        "Demonstrated the live system directly before the international jury at Malaysia Technology Expo (MTE).",
      ],
    },
    processAndExecution: {
      phase1: {
        title: "1. Geriatric Biomechanical Research & Pose Extraction",
        summary:
          "Studied national health ministry exercise guidelines for seniors and formulated safe joint angle tolerance thresholds.",
        details: [
          "Mapped 33 MediaPipe skeletal landmarks to key geriatric biomechanical parameters.",
          "Calibrated dynamic angle thresholds tailored to senior flexibility limitations.",
          "Eliminated wearable sensor prerequisites so participants could move naturally without encumbrance.",
        ],
      },
      phase2: {
        title: "2. Gamification Engine & Visual Feedback Design",
        summary:
          "Crafted a vibrant, senior-accessible visual interface featuring cheerful sound effects and high-legibility typographic cues.",
        details: [
          "Implemented dynamic scoring rewards based on posture accuracy and movement tempo consistency.",
          "Integrated instant visual posture correction animations when hazardous spine curvature or uneven weight distribution is detected.",
          "Engineered cooperative play modes fostering social engagement among community seniors.",
        ],
      },
      phase3: {
        title: "3. Field Trials & International Exhibition",
        summary:
          "Conducted hands-on validation with community eldercare groups and presented results at MTE Malaysia.",
        details: [
          "Benchmarked tracking stability across diverse ambient room lighting conditions and webcam resolutions.",
          "Gathered user feedback from elder participants to optimize on-screen instruction font sizing and contrast.",
          "Awarded the Silver Award in Healthcare & Fitness Technology at Malaysia Technology Expo (MTE).",
        ],
      },
    },
    results: {
      overview:
        "SEGER engaged hundreds of elder participants and demonstrated human-centered computer vision through 3 core modules:",
      modules: [
        {
          title: "Real-Time Pose Estimation & Posture Correction",
          slug: "pose-estimation-engine",
          description:
            "A high-precision computer vision pipeline tracking 33 skeletal joints and evaluating anatomical angles in real time.",
          highlights: [
            "Automated geometric angle computations between shoulders, elbows, and spine.",
            "Instant slouching posture detection accompanied by friendly auditory correction prompts.",
          ],
          metrics: [
            { label: "Frame Rate", value: "30+ FPS (Webcam)" },
            { label: "Angular Precision", value: "97.1% Biomechanical" },
          ],
        },
        {
          title: "Interactive Gamification Engine",
          slug: "gamification-engine",
          description:
            "An educational gameplay system transforming repetitive routines into interactive point-collection and cognitive quests.",
          highlights: [
            "Uplifting voice cues specifically designed to foster enthusiasm and active participation.",
            "Adaptive difficulty scaling matching individual mobility limitations dynamically.",
          ],
          metrics: [
            { label: "Retention Rate", value: "88% Regular Users" },
            { label: "Cognitive Impact", value: "Significantly Positive" },
          ],
        },
        {
          title: "Community Eldercare Fitness Telemetry",
          slug: "posyandu-health-report",
          description:
            "Summary analytics tracking flexibility trends and exercise consistency for community health volunteer dossiers.",
          highlights: [
            "Automated session repetition and active duration logging.",
            "Intuitive visual dashboards designed for accessibility by grassroots health workers.",
          ],
          metrics: [
            { label: "Recognition", value: "Silver Award MTE" },
            { label: "Safety Record", value: "100% Zero Accident" },
          ],
        },
      ],
    },
    impact: {
      company: [
        "Demonstrated how artificial intelligence can be inclusively harnessed to elevate quality of life for senior citizens.",
        "Showcased Indonesian technical innovation on the international stage at the Malaysia Technology Expo (MTE).",
        "Served as a model for cost-effective, community-based preventive geriatric healthcare platforms.",
      ],
      personal: [
        "Developed specialized expertise in applied computer vision, real-time pose estimation, and video processing.",
        "Strengthened human-centered design capabilities grounded in deep empathy for older adults.",
        "Gained valuable international experience defending technical innovations before global engineering juries.",
      ],
    },
    teamAndAppreciation: {
      lead: "This achievement was the direct result of passionate teamwork, institutional support, and community cooperation:",
      members: [
        "Faculty advisors and innovation mentors for strategic guidance and experimental testing facilities.",
        "My SEGER development teammates for outstanding dedication throughout international competition preparations.",
        "The Posyandu Lansia volunteers and beloved elder participants for their joyful engagement during user trials.",
      ],
    },
  },

  "girantra-ai-agri-marketplace": {
    slug: "girantra-ai-agri-marketplace",
    background: {
      lead: "As a smart agriculture initiative, Girantra AI is an integrated food commodity marketplace combining Multimodal AI crop disease diagnosis to empower local smallholder farmers.",
      paragraphs: [
        "Smallholder farmers in Indonesia routinely confront two interconnected challenges: sudden crop failure caused by delayed pest and disease identification, and extended middleman-dominated supply chains that compress farm-gate revenues.",
        "Girantra AI delivers a holistic farm-to-table ecosystem. Farmers take a smartphone photo of symptomatic foliage to receive instant diagnoses and organic treatment recipes powered by Google Gemini 1.5 Multimodal AI, while seamlessly listing certified produce directly to consumers and culinary businesses on an integrated marketplace.",
      ],
    },
    problemIdentification: [
      "Limited access to field agricultural extension officers delays the detection of early crop infestations.",
      "Excessive and misdirected chemical pesticide usage stemming from inaccurate disease diagnoses.",
      "Long intermediary distribution chains depress farm-gate prices up to 40% below fair market levels.",
      "Unreliable cellular connectivity across rural farmlands disrupts standard cloud-dependent applications.",
    ],
    goalsAndObjectives: {
      mainGoal:
        "Engineer an integrated agritech ecosystem marrying instant Multimodal Computer Vision crop diagnosis with a fair-trade digital produce marketplace for Indonesian farmers.",
      objectives: [
        "Leverage Gemini 1.5 Multimodal AI to diagnose crop leaf imagery and generate eco-friendly treatment recipes.",
        "Construct a direct-to-consumer (B2C & B2B) agricultural marketplace featuring transparent pricing.",
        "Implement an offline-first synchronization architecture via Supabase ensuring usability in low-connectivity fields.",
        "Shorten supply chain tiers to elevate smallholder net profit margins by up to 25%.",
      ],
    },
    rolesAndResponsibilities: {
      roleTitle: "Fullstack AI Engineer & Architect",
      lead: "I architected the entire technology ecosystem, from multimodal vision model pipelines to the integrated marketplace infrastructure:",
      responsibilities: [
        "Formulated structured multimodal prompt templates on Gemini 1.5 Flash for local food crop pathologies (rice, corn, chili).",
        "Architected distributed backend services and relational databases using Supabase, PostgreSQL, and Row-Level Security (RLS).",
        "Developed a responsive Progressive Web Application (PWA) with Next.js 16 and Tailwind CSS featuring offline caching.",
        "Integrated verified escrow payment gateways to ensure secure financial settlements between farmers and wholesale buyers.",
        "Conducted on-site field trials with farming groups in Surakarta to validate plant diagnosis accuracy.",
      ],
    },
    processAndExecution: {
      phase1: {
        title: "1. Crop Pathology Dataset Curation & Multimodal Prompts",
        summary:
          "Collected symptomatic leaf samples from regional farming hubs and authored rigorous diagnostic prompt guardrails.",
        details: [
          "Classified common agricultural infections including leaf blight, brown spot, leaf rust, and stem rot across staple crops.",
          "Engineered system prompts restricting AI outputs strictly to organic active ingredients and eco-safe dosages.",
          "Stress-tested model robustness against challenging real-world imagery with lens flare, blur, and soil backgrounds.",
        ],
      },
      phase2: {
        title: "2. Marketplace Architecture & Offline-First Sync",
        summary:
          "Configured Supabase and local client storage so diagnostic records persist seamlessly when farmers work without signal.",
        details: [
          "Implemented automated background data synchronization whenever the device reconnects to cellular data.",
          "Engineered harvest commodity catalogs featuring harvest date estimates and origin coordinates for buyer transparency.",
          "Built peer review and produce quality grading systems to establish trust with commercial buyers.",
        ],
      },
      phase3: {
        title: "3. Field Trials with Surakarta Farmer Groups",
        summary:
          "Organized interactive testing and training workshops with dozens of vegetable and rice farmers across Surakarta.",
        details: [
          "Trained farmers on optimal camera framing and leaf lighting to ensure high-accuracy AI classification.",
          "Cross-validated AI treatment suggestions with independent agronomists to verify dosage safety.",
          "Measured accelerated response times in containing early pest outbreaks before widespread crop contamination.",
        ],
      },
    },
    results: {
      overview:
        "Girantra AI bridged cutting-edge multimodal artificial intelligence with grassroots agricultural reality across 3 core pillars:",
      modules: [
        {
          title: "Multimodal AI Crop Doctor (Gemini 1.5)",
          slug: "gemini-crop-doctor",
          description:
            "A camera-based visual scanner diagnosing foliar infections within seconds and providing step-by-step treatment guidance.",
          highlights: [
            "Scientific and vernacular disease identification accompanied by infection severity grading.",
            "Organic, soil-friendly remedy recommendations with precise ecological dosage instructions.",
          ],
          metrics: [
            { label: "Diagnostic Accuracy", value: "93.8%" },
            { label: "Detection Speed", value: "< 2.0s" },
          ],
        },
        {
          title: "Fair-Trade Agricultural Marketplace",
          slug: "fair-trade-marketplace",
          description:
            "A direct-trade commerce platform connecting farmer collectives with consumers, catering businesses, and restaurants.",
          highlights: [
            "Transparent pricing indexes determined by empirical harvest grading.",
            "Direct warehouse pickup logistics integrated from rural collective granaries.",
          ],
          metrics: [
            { label: "Farmer Profit Gain", value: "+25% Net Margin" },
            { label: "Transaction Trust", value: "100% Escrow Verified" },
          ],
        },
        {
          title: "Offline-First PWA & Inventory Management",
          slug: "offline-first-pwa",
          description:
            "On-device caching architecture ensuring treatment reference manuals remain accessible in offline zones.",
          highlights: [
            "Offline-available pest handbook and organic agricultural formula guides.",
            "Harvest inventory management automatically updating upon signal re-acquisition.",
          ],
          metrics: [
            { label: "Offline Resilience", value: "Full PWA Support" },
            { label: "Input Efficiency", value: "30% Fertilizer Saved" },
          ],
        },
      ],
    },
    impact: {
      company: [
        "Assisted dozens of local farming families in curbing early crop losses via timely pest and disease detection.",
        "Elevated farmer net income by disintermediating exploitative middleman broker networks.",
        "Promoted sustainable agricultural practices through biological, eco-friendly crop care recommendations.",
      ],
      personal: [
        "Advanced engineering mastery over multimodal generative AI systems powered by the Gemini 1.5 Flash API.",
        "Cultivated deep expertise in building offline-first Progressive Web Apps (PWA) under challenging real-world constraints.",
        "Derived profound personal fulfillment from engineering software that tangibly uplifts grassroots community livelihoods.",
      ],
    },
    teamAndAppreciation: {
      lead: "This agritech initiative was realized through dedicated collaboration with grassroots agricultural partners:",
      members: [
        "Kelompok Tani Makmur Surakarta for their generous hospitality, enthusiasm, and field trial collaboration.",
        "Independent Agricultural Extension Officers (PPL) for agronomic consultations and recipe validation.",
        "Our developer collaborators for assistance in refining marketplace checkout workflows and escrow gateways.",
      ],
    },
  },
}

import { PROJECT_CASE_STUDIES_ID } from "./projectCaseStudies.id"

/**
 * Helper to retrieve localized case study data according to current locale.
 */
export function getProjectCaseStudy(slug: string, locale?: string): CaseStudyData {
  const normSlug = slug === "sipasi-pdam-sukoharjo" ? "sipasi-pdam-surakarta" : slug

  if (locale === "id") {
    return (
      PROJECT_CASE_STUDIES_ID[normSlug] ||
      PROJECT_CASE_STUDIES_ID[normSlug.replace("sukoharjo", "surakarta")] ||
      PROJECT_CASE_STUDIES[normSlug] ||
      PROJECT_CASE_STUDIES["sipasi-pdam-surakarta"]
    )
  }

  return (
    PROJECT_CASE_STUDIES[normSlug] ||
    PROJECT_CASE_STUDIES[normSlug.replace("sukoharjo", "surakarta")] ||
    PROJECT_CASE_STUDIES_ID[normSlug] ||
    PROJECT_CASE_STUDIES["sipasi-pdam-surakarta"]
  )
}

