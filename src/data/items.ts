export type Section = { heading: string; body: string };

export type DetailItem = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  externalLink?: string;
  externalLinkLabel?: string;
  overview: string;
  sections: Section[];
};

export type WorkItem = DetailItem & { type: "work" | "volunteer" };

// ─── PROJECTS ────────────────────────────────────────────────────────────────

export const projects: DetailItem[] = [
  {
    slug: "duet-labs",
    title: "duet labs",
    description: "process-mining human collaboration into robotics training data",
    tag: "co-founder",
    externalLink: "https://duetlabs.co",
    externalLinkLabel: "duetlabs.co",
    overview:
      "Duet process-mines human collaboration into workflow data for industrial operators and training data for frontier labs. the bet is that human-human interaction data is robotics' next scaling law.",
    sections: [
      {
        heading: "the gap",
        body: "general-purpose robots have seen millions of hours of people working alone and almost none of people working together. to our knowledge the largest paired human-collaboration dataset is ETH Zurich's CoMind, at 41 hours. the single-actor corpus that everything is trained on simply does not contain the behavior a robot needs in order to work next to someone.",
      },
      {
        heading: "what the data captures",
        body: "physical coordination — handoffs, shared loads, joint manipulation. task coordination — role division, sequencing, turn-taking. interactive adaptation — intent signaling, response, correction, recovery. captured across diverse real-world worksites rather than staged in a lab, because coordination that has never been under time pressure is not the thing you want to learn from.",
      },
      {
        heading: "one dataset, two customers",
        body: "operators receive workflow intelligence that reduces bottlenecks across teams. labs receive training data for robots that will work alongside those teams. the same capture serves both, which is what makes the economics work: the industrial side pays for collection while the dataset compounds.",
      },
      {
        heading: "why now",
        body: "three shifts converging. supply-side: 78% of large manufacturers are putting more than 20% of improvement budgets into smart manufacturing (Deloitte, 2025). model-side: 1,000x more pretraining raised average task performance from 20% to 53% (Dyna Robotics, 2026). demand-side: robotics data spend is expected to exceed $3B over the next two years (Bessemer, 2026).",
      },
      {
        heading: "the team",
        body: "three of us, and we have spent most of our lives building robots. between us: multimodal robotics hardware shipped for frontier lab contracts, HF0 (S26) and Founders, Inc. (Canopy) as Founders-in-Residence, assistive wearables that won millions in academic scholarships, edtech reaching 30k+ users, ML research at Northwestern and Boston University, and publications through IEEE, IIAI, and Harvard. this time we are building the data layer the robots learn from.",
      },
    ],
  },
  {
    slug: "vocl",
    title: "vocl",
    description: "EMG-based thought-to-speech",
    tag: "creator",
    externalLink: "https://www.vocl.dev/",
    externalLinkLabel: "vocl.dev",
    overview:
      "vocl translates electromyographic (EMG) signals from facial and throat muscles directly into synthetic speech — a communication interface that requires no vocalization. the system captures the electrical patterns of silent and attempted speech, maps them to language, and outputs audible words in real time.",
    sections: [
      {
        heading: "the problem",
        body: "roughly 1.4 billion people globally have some form of speech or language impairment. existing assistive communication tools — gaze trackers, button grids, eye-scanning systems — are slow, exhausting, and far behind the pace of natural thought. they translate intent through a degraded physical channel. vocl takes a different approach: instead of routing around the body, it reads the intent before it fully becomes physical.",
      },
      {
        heading: "how it works",
        body: "EMG sensors placed on the skin surface capture the electrical impulses produced by subvocal muscle movement — the micro-activations that occur even when you try to speak without making sound. a signal processing pipeline filters noise and segments the data into time windows. a neural network, trained on labeled EMG recordings, maps these patterns to phonemes and words. the output is passed through a text-to-speech engine to produce audible speech in near real time.",
      },
      {
        heading: "technical approach",
        body: "the core model is a CNN-LSTM architecture suited for temporal EMG classification. training data spans both voiced and subvocalized speech attempts. the inference pipeline is optimized for low latency — the gap between thought and audible output needs to feel like speech, not like typing.",
      },
      {
        heading: "who it's for",
        body: "ALS, laryngeal cancer, locked-in syndrome, severe dysarthria. anyone whose voice has been taken from them, or who was never given one. vocl is built to close that gap.",
      },
    ],
  },
  {
    slug: "neumeric",
    title: "neumeric",
    description: "biological intelligence infrastructure",
    tag: "creator",
    externalLink: "https://neumeric.xyz/",
    externalLinkLabel: "neumeric.xyz",
    overview:
      "neumeric is infrastructure for biological intelligence — the foundational layer between computational systems and biological cognition. it's an attempt to build the primitives that don't yet exist: interfaces, data pipelines, and architectures for systems where wetware and software co-evolve.",
    sections: [
      {
        heading: "the gap",
        body: "we have increasingly powerful AI and increasingly well-understood neuroscience. what we don't have is the infrastructure connecting them — APIs for the brain, pipelines for neural data, frameworks for building systems that operate at the biological-computational boundary. the tooling for this is fragmented, bespoke, and largely inaccessible outside of academic labs. neumeric is an attempt to change that.",
      },
      {
        heading: "what we're building",
        body: "the current focus is neural interface data infrastructure: standardized pipelines for acquiring, processing, and acting on high-dimensional neural recordings. this includes signal normalization, real-time decoding, and closed-loop feedback systems that adapt to biological responses. the longer-term roadmap extends into model architectures specifically designed for the statistical properties of neural data.",
      },
      {
        heading: "why it matters",
        body: "the next decade of bio-intelligence will be shaped by whoever builds the infrastructure layer first. neumeric is a bet that the right abstraction — clean, general, composable — doesn't yet exist and needs to be built from scratch rather than patched together.",
      },
    ],
  },
  {
    slug: "credix",
    title: "credix",
    description: "decentralized peer-to-peer microlending",
    tag: "creator",
    externalLink: "https://credix.framer.ai/",
    externalLinkLabel: "credix.framer.ai",
    overview:
      "credix is a blockchain-based microlending platform that enables peer-to-peer credit access in markets underserved by traditional financial infrastructure. it removes the institutional intermediary from the lending relationship, letting capital flow directly between lenders and borrowers at lower cost and higher transparency.",
    sections: [
      {
        heading: "the problem",
        body: "roughly 1.7 billion adults globally remain unbanked. traditional credit scoring systems are built for paper trails — formal employment records, credit bureau histories, collateral — that simply don't exist in informal economies. this locks out entire populations from access to credit, and credit is the engine of economic mobility. the problem isn't creditworthiness; it's that the infrastructure for assessing it is calibrated to the wrong world.",
      },
      {
        heading: "how credix works",
        body: "smart contracts on a public blockchain encode lending terms, escrow funds, and enforce repayment schedules without a central institution. borrowers build on-chain credit history through their repayment behavior — pseudonymous and verifiable by any lender. lenders earn yield proportional to risk. the protocol handles defaults through a governance-defined process that's transparent and auditable by all participants.",
      },
      {
        heading: "technical design",
        body: "the architecture includes: smart contracts for loan origination, repayment, and default resolution; an on-chain credit scoring module that builds borrower history from transaction data; multi-token support for lending in local stablecoins pegged to the borrower's currency; and a governance module for protocol parameter updates voted on by token holders.",
      },
    ],
  },
  {
    slug: "orbyt",
    title: "orbyt",
    description: "automating compliance",
    tag: "creator",
    overview:
      "orbyt automates compliance workflows for regulated industries. it monitors obligations, tracks changes in regulatory requirements, and maintains audit-ready documentation — reducing the operational burden of compliance from a manual, error-prone process to a systematic one.",
    sections: [
      {
        heading: "the compliance problem",
        body: "regulated industries — finance, healthcare, legal — spend enormous resources on compliance. not because compliance is intellectually hard, but because the volume of obligations, the frequency of regulatory change, and the documentation requirements make it operationally overwhelming. it's a workflow problem, not a knowledge problem. companies hire large teams to do work that is fundamentally repetitive, rule-bound, and therefore automatable.",
      },
      {
        heading: "what orbyt does",
        body: "orbyt continuously monitors regulatory feeds for changes relevant to a company's jurisdiction and industry. it automatically maps new requirements to existing internal policies and flags gaps. it generates draft documentation and audit trails. it integrates with existing compliance tooling so the transition doesn't require ripping out infrastructure.",
      },
      {
        heading: "the design principle",
        body: "compliance teams are smart people doing important work. orbyt isn't trying to replace them — it's trying to remove the tedious operational layer so they can focus on the decisions that actually require judgment. the goal is a system where no one is manually copy-pasting regulatory text into spreadsheets.",
      },
    ],
  },
  {
    slug: "ar-x-finlit",
    title: "ar-x-finlit",
    description: "gen-Z retention for CIBC",
    tag: "creator",
    externalLink: "https://drive.google.com/file/d/1Zh3x6gSZz0Dn0G-OtaRvLblOtl6HNMWd/view",
    externalLinkLabel: "pitch deck",
    overview:
      "a financial literacy platform built for CIBC (Canadian Imperial Bank of Commerce) to increase product engagement and retention among Gen-Z customers. the core insight: gen-Z doesn't distrust banks — they distrust boring. ar-x-finlit meets them where they are, using augmented reality and interactive education to make financial products feel relevant.",
    sections: [
      {
        heading: "the brief",
        body: "CIBC identified a significant drop-off in product adoption and mobile app engagement among customers aged 18–26. traditional financial education content — PDFs, in-branch pamphlets, static blog posts — was failing to cut through. the challenge was to redesign financial literacy as something worth paying attention to, not just content to be skipped.",
      },
      {
        heading: "the solution",
        body: "AR-enhanced educational modules triggered by physical interactions: scanning a credit card, visiting a branch, tapping an NFC point. short-form interactive content designed around the actual financial decisions this cohort faces — paying rent for the first time, getting a credit card, dealing with student debt, starting to invest. gamified progression with real product rewards tied to completing modules.",
      },
      {
        heading: "outcome",
        body: "designed as a proof-of-concept engagement layer built to integrate with CIBC's existing mobile infrastructure. the framework demonstrated meaningful improvements in simulated engagement metrics and was presented to CIBC stakeholders. the project validated that financial education for gen-Z is fundamentally a design and delivery problem, not a content problem.",
      },
    ],
  },
  {
    slug: "airaware",
    title: "airaware",
    description: "ML pipeline forecasting campus air quality @ Lewis University",
    tag: "creator",
    externalLink: "https://airaware-lewis.vercel.app/",
    externalLinkLabel: "airaware-lewis.vercel.app",
    overview:
      "AirAware is a real-time machine learning pipeline that forecasts campus air quality at Lewis University — predicting pollution levels before they occur and surfacing actionable insights for campus health and operations decisions.",
    sections: [
      {
        heading: "context",
        body: "Lewis University sits in Romeoville, IL, in the Chicago metropolitan area — one of the most air-quality-variable regions in the midwest, affected by industrial output, traffic corridors, and seasonal atmospheric inversions. traditional air quality monitoring is reactive: it tells you what the air is now, not what it's going to be in an hour. AirAware changes that.",
      },
      {
        heading: "the pipeline",
        body: "sensor data is ingested from campus-deployed air quality monitors measuring PM2.5, NO2, O3, and CO2. features are engineered from weather data — wind speed, temperature, humidity, precipitation — and temporal features like time-of-day and day-of-week. an ML model (XGBoost ensemble and LSTM for time-series forecasting) is trained on historical sensor readings. forecasts update the dashboard in real time.",
      },
      {
        heading: "what it enables",
        body: "predictive alerts for campus administration when air quality is projected to exceed health thresholds. a data foundation for research publications. a framework extensible to other campuses or municipal monitoring networks. the long-term goal is a system that makes environmental health data as accessible and actionable as a weather forecast.",
      },
    ],
  },
  {
    slug: "neurovox",
    title: "neurovox",
    description: "vocal biomarkers + ML for early Parkinson's detection",
    tag: "creator",
    externalLink:
      "https://drive.google.com/file/d/1k_v4KEX-Mp6eALu51Qu1qdes7TL-8oXq/view?usp=sharing",
    externalLinkLabel: "technical paper",
    overview:
      "NeuroVox detects Parkinson's disease in its earliest stages using vocal biomarkers and machine learning. by analyzing acoustic features of speech — jitter, shimmer, harmonic-to-noise ratio, fundamental frequency — the system achieves 94.87% test accuracy and 100% recall, supporting physicians with data-driven diagnostics through a user-friendly interface.",
    sections: [
      {
        heading: "the diagnostic challenge",
        body: "Parkinson's is a progressive neurodegenerative disorder that impacts motor function, speech, and quality of life. in its early stages, it's notoriously hard to detect. minor vocal changes — reduced pitch variation, subtle tremors — often go unnoticed by the human ear and standard clinical assessments. by the time a diagnosis is made, significant neurodegeneration has often already occurred. earlier detection means earlier intervention.",
      },
      {
        heading: "machine learning approach",
        body: "NeuroVox trains classification models on a dataset of voice recordings, extracting acoustic features that correlate with the vocal impairments characteristic of early Parkinson's. the full preprocessing pipeline includes duplicate removal, outlier detection, MinMax normalization, SMOTE balancing for class imbalance, and cross-validation. six models were evaluated: Logistic Regression, SVM, Decision Tree, Random Forest, KNN, and Neural Networks.",
      },
      {
        heading: "performance results",
        body: "Random Forest and KNN each achieved 94.87% test accuracy with 100% recall and F1-scores of 96.97. 100% recall means every actual Parkinson's case in the test set was detected — critical in any medical application where false negatives carry serious consequences. the system was awarded gold at the IJAS State Competition.",
      },
      {
        heading: "clinical integration",
        body: "NeuroVox is deployed as a user-facing interface where patients or clinicians can upload voice samples and receive real-time diagnostic feedback. the design prioritizes accessibility for integration into telemedicine platforms, making early-stage diagnostics available in regions without access to neurologists. it supports clinical judgment rather than replacing it — a powerful second opinion grounded in data.",
      },
    ],
  },
  {
    slug: "allergx",
    title: "allergx",
    description: "RNA aptaswitch therapy targeting IgE-mediated allergic responses",
    tag: "creator",
    externalLink:
      "https://drive.google.com/file/d/1g2eW1XNRznrjjqpszB04eZIS9xap9sWW/view",
    externalLinkLabel: "pitch deck",
    overview:
      "AllergX is an RNA-based therapeutic framework that targets the root cause of allergic responses through programmable aptaswitches. rather than suppressing symptoms with antihistamines or relying on long-term immunotherapy, it directly regulates Immunoglobulin E (IgE) via precision molecular logic — treating the mechanism, not the outcome.",
    sections: [
      {
        heading: "the mechanism",
        body: "allergic responses are driven by IgE antibodies binding to allergens and triggering mast cell degranulation — releasing histamines and other inflammatory mediators. existing treatments either block the downstream effects (antihistamines) or attempt to retrain the immune system over years (immunotherapy). AllergX intervenes upstream: programmable RNA aptamers designed to bind allergen-specific IgE and block the signaling cascade before it escalates.",
      },
      {
        heading: "aptaswitch design",
        body: "aptaswitches are RNA molecules engineered with conditional logic — they activate only when specific molecular conditions are met. AllergX uses SELEX (systematic evolution of ligands by exponential enrichment) to discover aptamers targeting IgE and key Th2 cytokines. the system is modular and logic-gated: it can be tuned to specific allergen profiles and turned on or off based on IgE concentration, enabling on-demand immune regulation.",
      },
      {
        heading: "delivery and personalization",
        body: "the therapeutic framework is designed to accommodate multiple delivery strategies — oral, subcutaneous, or microencapsulated depending on the allergen and patient profile. because the aptaswitch is programmed for specific IgE variants, the treatment is inherently personalizable. two patients with peanut allergies may trigger different IgE populations; AllergX can target both.",
      },
      {
        heading: "broader vision",
        body: "the long-term aim extends this platform to related conditions — asthma, atopic dermatitis, and food allergies — where dysregulated Th2 activity is the common denominator. AllergX represents a shift from reactive symptom management to proactive immune system reprogramming.",
      },
    ],
  },
  {
    slug: "cropsia",
    title: "cropsia",
    description: "drone imagery + CV to detect crop disease",
    tag: "creator",
    externalLink:
      "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FVqm9pgkMpcfluxghQzFTQrBa7eL2%2FCropsia.pdf?alt=media&token=138db241-2802-4778-a54e-d957c13fa387",
    externalLinkLabel: "pitch deck",
    overview:
      "Cropsia leverages drone-collected aerial imagery and computer vision to identify crop diseases early, helping farmers prevent significant production losses. the system classifies 38 distinct plant diseases from a dataset of 87,000+ images and delivers actionable recommendations through a farm management app.",
    sections: [
      {
        heading: "the global challenge",
        body: "crop disease causes an estimated $220 billion in losses annually — roughly 40% of global crop production, according to the FAO. the problem isn't just economic: it's a food security crisis. early identification is critical, but visual inspection at scale across thousands of acres is practically impossible for a human. that's the gap Cropsia fills.",
      },
      {
        heading: "the system",
        body: "drones collect high-resolution aerial images of farmland, including NDVI (normalized difference vegetation index) imagery that highlights plant health through spectral analysis. these images feed a convolutional neural network trained on 87,000+ images of healthy and diseased plants. the model classifies 38 different plant diseases and generates targeted treatment recommendations for each diagnosis.",
      },
      {
        heading: "farmer interface",
        body: "the output isn't just a classification — it's an actionable recommendation delivered through a farm management app. farmers receive real-time alerts, field analytics, and a cost analysis tool that estimates savings and ROI when deploying the monitoring system. the design is built for farm owners who are not technologists.",
      },
      {
        heading: "impact",
        body: "Cropsia democratizes access to agricultural monitoring that was previously available only to large industrial farming operations. by making this technology accessible to small and mid-scale farmers, it contributes to food security and farmer livelihoods across diverse geographies.",
      },
    ],
  },
  {
    slug: "bambiotic",
    title: "bambiotic",
    description: "GM bamboo checkpoint dams to fight lake eutrophication",
    tag: "creator",
    overview:
      "Bambiotic tackles freshwater lake eutrophication by deploying genetically modified fast-growing bamboo to build eco-friendly checkpoint dams. using digital elevation modeling to identify strategic river confluence points, these dams absorb excess nitrogen and free radicals before they reach vulnerable lake ecosystems.",
    sections: [
      {
        heading: "the freshwater crisis",
        body: "every year, approximately 75 million tonnes of excess nitrogen runoff flow into lakes and rivers worldwide, triggering eutrophication — a process where oxygen depletion creates 'dead zones' that no longer support aquatic life. by 2050, an estimated 20% of the world's freshwater lakes may vanish due to eutrophication. existing interventions are largely chemical or mechanical — reactive, expensive, and unsustainable at scale.",
      },
      {
        heading: "the solution",
        body: "Bambiotic deploys genetically modified bamboo — specifically targeting the GrG1 genome in Ma-type bamboo — to grow checkpoint dams at strategic river confluence points. this strain grows 1.4x faster than natural bamboo. bamboo inherently absorbs free radicals and nitrogen compounds; the checkpoint dams function as biological filters that intercept runoff before it reaches the lake.",
      },
      {
        heading: "site identification via DEM",
        body: "digital elevation modeling (DEM) maps river terrain at high resolution, identifying optimal confluence points where a bamboo dam provides maximum nitrogen interception with minimum ecological disruption. the placement is precise and data-driven, not arbitrary.",
      },
      {
        heading: "why bamboo",
        body: "bamboo is renewable, rapidly establishing, carbon-sequestering, and biodegradable. it creates habitat rather than destroying it. unlike chemical treatments that must be repeatedly applied, a bamboo dam is a self-sustaining biological system that grows stronger over time. Bambiotic is a bet that the best environmental interventions look like nature, not industry.",
      },
    ],
  },
  {
    slug: "edufin",
    title: "edufin",
    description: "DeFi-powered entrepreneurship incubator for Ghanaian youth",
    tag: "creator",
    externalLink:
      "https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FVqm9pgkMpcfluxghQzFTQrBa7eL2%2FTKS%20x%20Mastercard%20(1).pdf?alt=media&token=7754aa27-78d1-4f34-af97-bb8ff7ce1a85",
    externalLinkLabel: "full paper",
    overview:
      "EduFin is a hybrid entrepreneurship incubator and microfinancing platform empowering Ghanaian youth to build sustainable businesses. it combines hands-on business education, peer mentorship, and DeFi-powered investment connections to tackle youth unemployment — with a long-term goal of scaling across Africa.",
    sections: [
      {
        heading: "the problem",
        body: "Ghana's youth unemployment rate exceeds 12%, with underemployment substantially higher. informal economies dominate, but entrepreneurial potential goes unrealized for lack of capital, business education, and access to networks. traditional microfinance institutions are slow, expensive, and geographically constrained. EduFin is built to remove those barriers simultaneously.",
      },
      {
        heading: "the platform",
        body: "EduFin combines three elements: a blended education model (online learning platform plus in-person workshops and mentorship); a DeFi microfinancing layer using Ethereum smart contracts to connect entrepreneurs with impact investors transparently and at low cost; and a peer-to-peer mentorship network connecting experienced entrepreneurs with newcomers. ventures are evaluated for alignment with UN SDGs, incentivizing businesses that create social or environmental value alongside economic returns.",
      },
      {
        heading: "technology stack",
        body: "Ethereum smart contracts handle loan origination, liquidity pool management, and repayment enforcement. a custom LMS with gamification tracks educational progress and unlocks access to higher funding tiers. a React Native mobile app makes the platform accessible across Ghana's mobile-first population. impact analytics track outcomes against SDG metrics.",
      },
      {
        heading: "scale goals",
        body: "EduFin's roadmap targets 10,000+ youth served, 500+ new businesses launched, and $50M+ in economic value generated through supported ventures. the model is designed to expand to 5+ African countries by 2027, integrating with universities and partnering with government agencies to formalize youth entrepreneurship support.",
      },
    ],
  },
];

// ─── RESEARCH ─────────────────────────────────────────────────────────────────

export const research: DetailItem[] = [
  {
    slug: "bopcd-northwestern",
    title: "DLSCI @ Northwestern",
    description: "Bayesian early-warning index for DeFi liquidity stress",
    tag: "researcher",
    externalLink: "https://ieeexplore.ieee.org/document/11685081",
    externalLinkLabel: "IEEE Xplore",
    overview:
      "the DeFi Liquidity Stress Changepoint Index (DLSCI) is a pool-level online monitoring framework built on Bayesian Online Changepoint Detection. it catches every stress event in the evaluation set with a 129-hour median lead time, while keeping the alert burden low enough for an on-call risk team to actually work. sole-authored, published in the IEEE proceedings of IIAI-AAI 2026.",
    sections: [
      {
        heading: "two constraints that fight each other",
        body: "a usable early-warning system for DeFi liquidity crises has to satisfy two things at once: full recall, because a missed crisis is the whole failure mode, and a bounded alert burden, because a monitor that pages an on-call team sixty times a month gets muted and stops existing. every existing approach breaks one of them. statistical baselines flood operators with alerts. machine-learning classifiers miss heterogeneous events. threshold monitors offer no principled uncertainty at all.",
      },
      {
        heading: "method",
        body: "Bayesian Online Changepoint Detection maintains a run-length posterior — the probability distribution over how long the current regime has lasted — in closed form at every hourly step. closed-form matters operationally: there is no retraining loop, the monitor just runs. it also yields calibrated uncertainty, which heuristic thresholds cannot provide, so the output is a probability a risk team can reason about rather than a binary flag.",
      },
      {
        heading: "evaluation",
        body: "nine heterogeneous DeFi stress events spanning 2022 through 2024, against three baselines. the events are deliberately varied rather than one repeated failure mode, since the thing being tested is whether the method generalizes across kinds of crisis.",
      },
      {
        heading: "results",
        body: "DLSCI achieves perfect recall, 9 of 9 events, with a 129-hour median lead time and 25.6 false alarms per month, at a Brier score of 0.055. it is the only method evaluated that clears all three bars simultaneously: full recall, fewer than 30 false alarms a month, and calibrated probabilistic output. the Z-score baseline matches recall but produces 56% more false alarms, at 58.1 per month. XGBoost detects 2 of 9 events, a recall of 0.222 — a supervised classifier struggles precisely because the events are heterogeneous and few.",
      },
      {
        heading: "publication",
        body: "\"Bayesian Online Changepoint Detection for DeFi Liquidity Stress: A Pool-Level Early-Warning Index,\" published in the 2026 20th IIAI International Congress on Advanced Applied Informatics (IIAI-AAI), Fukui, Japan, 12-17 July 2026. DOI 10.23919/IIAI-AAICPS00095.2026.00171.",
      },
    ],
  },
  {
    slug: "hft-mizzou",
    title: "Multimodal IPO Prediction @ Mizzou",
    description: "FinBERT, CLIP, and financials fused to predict post-IPO returns",
    tag: "researcher",
    overview:
      "predicting post-IPO returns from the S-1 filing itself — the text, the embedded images, and the financial ratios — fused into one model. conducted in quantitative finance at the University of Missouri. the headline result is a null, and the interesting part is which channel survives it.",
    sections: [
      {
        heading: "the setup",
        body: "an S-1 is the last dense disclosure before a company is priced by a market, and most of it is unstructured. the question is whether the parts nobody models — the language of the risk factors, the charts and product photography management chose to include — carry signal about returns beyond the financials everyone already prices in.",
      },
      {
        heading: "architecture",
        body: "three encoders over the same filing. FinBERT over the S-1 text, CLIP ViT-L/14 over the embedded images, and a tabular branch over financial ratios. the three representations are combined with cross-attention fusion rather than concatenation, so each channel can condition on the others instead of being averaged into them.",
      },
      {
        heading: "data",
        body: "roughly 1,800 US IPOs from 2010 through 2024, evaluated against CRSP returns with delisting adjustments — necessary because IPOs that fail leave the sample, and ignoring that quietly inflates every result in the literature.",
      },
      {
        heading: "the result is a null",
        body: "out-of-sample R-squared is negative across all models and all horizons. the fused model does not beat the mean. but rank information coefficients on the text channel are significant at 3, 6, 12, and 24 months — the model orders IPOs better than chance while failing to predict magnitudes. that pattern is consistent with a weak, slow signal in the language of the filing that is not tradable at the level of point forecasts.",
      },
      {
        heading: "why report it",
        body: "a negative out-of-sample R-squared with a significant rank IC is a more honest thing to publish than a tuned positive result, and it constrains what the next attempt should try: ranking objectives rather than regression, and longer horizons rather than shorter ones.",
      },
    ],
  },
  {
    slug: "efget-niu",
    title: "EFGET @ NIU",
    description: "how surface modifications change transistor gm–gate voltage behavior",
    tag: "researcher",
    externalLink:
      "https://drive.google.com/file/d/1CFp8l556pllMaE0TpKhbYdBqIqSiA8JD/view?usp=sharing",
    externalLinkLabel: "EGFET Research Report",
    overview:
      "at Northern Illinois University, I'm developing and testing advanced electronic biosensors, focusing on how surface modifications to electrolyte-gated field-effect transistors (EGFETs) alter their transconductance and gate voltage characteristics.",
    sections: [
      {
        heading: "EGFET biosensors",
        body: "electrolyte-gated field-effect transistors are biosensor devices that transduce biological or chemical signals into electrical readouts. the transistor gate is exposed directly to a biological sample — blood, a chemical solution, environmental water — and changes at the electrolyte interface shift the transistor's operating characteristics in measurable, quantifiable ways. the sensitivity and specificity of the sensor depend critically on what's been applied to that gate surface.",
      },
      {
        heading: "surface modifications",
        body: "functionalization with antibodies enables specific protein detection. polymer coatings change the double-layer capacitance and the signal-to-noise ratio. my work focuses on characterizing precisely how different surface treatments shift the gm–gate voltage curve: which modifications produce the most stable, sensitive, and reproducible sensors, and what the underlying physical mechanisms explain the differences.",
      },
      {
        heading: "experimental work",
        body: "developing and refining protocols for capturing double-layer capacitance data. running modified gate voltage sweeps to characterize surface-treatment effects on transconductance. contributing to cross-disciplinary discussions on optimizing experimental protocols and to the lab's publication efforts through accurate data management.",
      },
      {
        heading: "applications",
        body: "EGFET biosensors have applications in point-of-care diagnostics, real-time glucose monitoring, and environmental contaminant detection — heavy metals, pesticides, pathogens in water. the long-term vision is sensors cheap and robust enough to deploy in low-resource settings worldwide.",
      },
    ],
  },
  {
    slug: "deep-learning-abm",
    title: "Deep Learning × ABM",
    description: "deep learning in agent-based modeling — accepted to ESEE 2026",
    tag: "researcher",
    externalLink: "https://esee2026ghent.be/",
    externalLinkLabel: "ESEE 2026, Ghent",
    overview:
      "this research investigates how deep learning — specifically recurrent and graph neural networks — can augment agent-based models (ABMs) to improve their ability to simulate and predict complex adaptive systems. presented at the 16th conference of the European Society for Ecological Economics (ESEE) in Ghent, Belgium.",
    sections: [
      {
        heading: "the limitation of ABMs",
        body: "agent-based models are powerful for simulating emergent phenomena: economic dynamics, epidemics, opinion formation, market crashes. but calibrating them to real-world data is notoriously difficult. you can specify agent rules, but ensuring those rules reproduce empirically observed behavior requires either domain expertise (introducing bias) or computationally expensive optimization. most ABMs are calibrated manually, which limits their predictive accuracy.",
      },
      {
        heading: "what deep learning adds",
        body: "neural networks, particularly recurrent and graph architectures, are well-suited for learning complex behaviors from data trajectories. the research explores three contributions: (1) learning agent behavior rules directly from observed data rather than specifying them by hand, (2) accelerating ABM simulations through neural surrogate models that approximate the full simulation at a fraction of the computational cost, and (3) improving calibration through differentiable simulation frameworks.",
      },
      {
        heading: "ESEE 2026",
        body: "the paper, \"bridging micro-behavioral heterogeneity and macro policy outcomes,\" was presented at the 16th conference of the European Society for Ecological Economics (ESEE) in Ghent, Belgium — a leading venue for ecological economics and computational policy evaluation. the contribution proposes a framework for integrating learned agent behaviors with interpretable simulation, with applications to economic modeling, epidemiology, and policy impact analysis.",
      },
    ],
  },
  {
    slug: "airaware-research",
    title: "AirAware @ Lewis University",
    description: "ML pipeline for real-time campus air quality forecasting",
    tag: "researcher",
    externalLink: "https://airaware-lewis.vercel.app/",
    externalLinkLabel: "airaware-lewis.vercel.app",
    overview:
      "at Lewis University, I conduct data-driven evaluations for sensor placement and develop ML-based forecasting models to enhance air quality monitoring effectiveness across campus — translating environmental data into actionable predictions.",
    sections: [
      {
        heading: "research context",
        body: "Lewis University sits in Romeoville, IL, within the Chicago metropolitan corridor — a region with significant air quality variability from industrial output, highway traffic, and seasonal atmospheric inversions. the research question: can we predict air quality degradation events before they occur, rather than just measuring them after the fact?",
      },
      {
        heading: "the pipeline",
        body: "sensor data from campus air quality monitors (PM2.5, NO2, O3, CO2) is ingested and combined with weather features — wind speed, temperature, humidity, precipitation — and temporal features. forecasting models including XGBoost ensemble and LSTM networks are trained on historical readings and evaluated against held-out data. the pipeline pushes predictions to a real-time dashboard.",
      },
      {
        heading: "research contributions",
        body: "contributing to sensor placement optimization using data-driven evaluation of coverage and redundancy. applying coding and statistical techniques to improve data workflow efficiency. participating in research presentations and supporting lab publications through accurate data management and methodology documentation.",
      },
    ],
  },
];

// ─── WORK ─────────────────────────────────────────────────────────────────────

export const work: WorkItem[] = [
  {
    slug: "plasnomic",
    title: "SWE @ Plasnomic",
    description: "NDA. building Prism.",
    tag: "software engineer",
    type: "work",
    overview:
      "software engineer at Plasnomic, a stealth-stage deep tech company. working under NDA on Prism — building production systems at the intersection of hardware and software. this is where the work is real: real deadlines, real users, real consequences for bugs.",
    sections: [
      {
        heading: "the work",
        body: "specific details are under NDA. the scope involves full-stack development on a product that hasn't been announced yet. the technical surface is broad — systems design, API development, performance optimization, and cross-functional collaboration with hardware and research teams.",
      },
      {
        heading: "what i'm learning",
        body: "what production software engineering actually demands: that the gap between a working demo and a reliable system is enormous, that good systems design is mostly about failure modes you haven't seen yet, and that shipping is a skill as much as building. Plasnomic is where theory meets constraint.",
      },
    ],
  },
  {
    slug: "commissioner-naperville",
    title: "Commissioner @ City of Naperville",
    description: "Riverwalk Commission. $3M/year in spending.",
    tag: "commissioner",
    type: "work",
    overview:
      "appointed commissioner on the City of Naperville's Riverwalk Commission. the Naperville Riverwalk is a 1.75-mile stretch along the DuPage River — one of the most visited urban waterways in Illinois, drawing 3+ million visitors annually. the commission advises on capital improvements, programming, and spending priorities.",
    sections: [
      {
        heading: "what the commission does",
        body: "the Riverwalk Commission manages approximately $3M per year in spending on capital projects, maintenance, landscaping, event programming, and ADA compliance initiatives. commissioners review project proposals, assess bids, and advise the city council on prioritization. it's real governance over a real public asset, with decisions that affect how millions of people experience the city.",
      },
      {
        heading: "my role",
        body: "advocating for data-driven approaches to visitor flow management, accessibility improvements, and sustainability. representing the perspective of younger Naperville residents — a constituency not historically present in commission deliberations. bringing an analytical lens to budget discussions and project evaluation.",
      },
    ],
  },
  {
    slug: "ipsd-204",
    title: "Student Advisory Board @ IPSD 204",
    description: "Executive officer. Advise board of education. 26,000 students.",
    tag: "executive officer",
    type: "work",
    overview:
      "executive officer on the Student Advisory Board for Indian Prairie School District 204 — one of Illinois' largest school districts, serving 26,000+ students across Naperville and Aurora. the board is a formal channel for student voice in district-level policy.",
    sections: [
      {
        heading: "what the board does",
        body: "the Student Advisory Board works directly with IPSD 204's Board of Education, providing a structured mechanism for student input on district-level decisions. we draft policy proposals, review curriculum changes, and advocate for student needs across the district's schools. advisory board positions carry real influence: our recommendations are formally considered in board deliberations.",
      },
      {
        heading: "my role",
        body: "as executive officer, I coordinate board meetings, draft policy language, and facilitate communication between student members and district administration. the scope spans mental health resource allocation, technology policy in classrooms, and equity initiatives across the district's diverse student population.",
      },
    ],
  },
  {
    slug: "alive-center",
    title: "Teen Advisory Board @ Alive Center NFP",
    description: "youth program design; pushing legislation on youth financial literacy access",
    tag: "board member",
    type: "volunteer",
    overview:
      "teen advisory board member at Alive Center NFP, a Naperville-based nonprofit that supports teens and young adults through mental health resources, mentorship programming, and community engagement initiatives.",
    sections: [
      {
        heading: "alive center's work",
        body: "Alive Center provides a safe, inclusive space for teens in the Naperville area. its programming covers mental health awareness, leadership development, college preparation, and career exploration — reaching thousands of young people across the region. the organization takes a whole-person approach: mental health, economic literacy, and civic engagement as interconnected.",
      },
      {
        heading: "my work",
        body: "advocating for youth voices in program planning and supporting the design of inclusive engagement initiatives. currently leading a project aimed at passing Illinois state legislation mandating youth financial literacy access — working through local government channels to formalize financial education as a required component of the high school curriculum.",
      },
    ],
  },
  {
    slug: "alzheimers-foundation",
    title: "VP, Naperville Chapter @ Alzheimer's Foundation of America",
    description: "membership outreach, community education events",
    tag: "vice president",
    type: "volunteer",
    overview:
      "vice president of the Naperville Chapter of the Alzheimer's Foundation of America — an organization providing optimal care and services to individuals with Alzheimer's disease and related dementias, and to their families and caregivers.",
    sections: [
      {
        heading: "chapter work",
        body: "the Naperville chapter organizes community education events around Alzheimer's prevention, caregiver support resources, and early recognition. we partner with local healthcare systems, memory care facilities, and civic organizations to extend our reach across the region. the work is both public-facing — raising awareness — and direct: connecting affected families to support resources.",
      },
      {
        heading: "my role",
        body: "expanded chapter membership through targeted outreach. coordinated with the executive board to design and execute community education events. developed organizational partnerships to extend program reach. maintaining communications between chapter members and AFA national leadership — ensuring local chapter work aligns with and contributes to the national organization's strategy.",
      },
    ],
  },
  {
    slug: "build-a-biz",
    title: "Co-President @ Build-A-Biz",
    description: "8,000+ kids. North Central College, YMCA, Junior Achievement.",
    tag: "co-president",
    type: "volunteer",
    externalLink: "https://www.buildabiz.org/",
    externalLinkLabel: "buildabiz.org",
    overview:
      "co-president of Build-A-Biz, a financial literacy nonprofit that runs workshops, camps, and programs for young people across the Naperville area. we've reached 8,000+ kids through partnerships with North Central College, the YMCA, and Junior Achievement.",
    sections: [
      {
        heading: "what build-a-biz does",
        body: "Build-A-Biz runs financial literacy programs designed for middle and high school students. through interactive workshops, business simulation games, and entrepreneurship exercises, we teach kids how money actually works — savings, investing, credit, starting a business, why businesses fail — in a way that's engaging rather than didactic. the goal is economic intuition, not just financial facts.",
      },
      {
        heading: "partnerships",
        body: "partnering with North Central College, the YMCA, and Junior Achievement has allowed us to operate on college campuses, reach underserved youth through the YMCA network, and align our curriculum with JA's nationally recognized framework. these partnerships extend our reach far beyond what a standalone nonprofit our size could achieve.",
      },
      {
        heading: "my role",
        body: "overseeing curriculum design and updates to the educational website. directing youth-focused programs and camps at community centers. building and maintaining organizational partnerships. co-leading with a focus on programmatic quality and reach — making sure what we teach is actually worth teaching and actually lands.",
      },
    ],
  },
  {
    slug: "edward-elmhurst",
    title: "Surgical Volunteer @ Edward-Elmhurst Health",
    description: "pre/post-op support alongside nursing staff",
    tag: "volunteer",
    type: "volunteer",
    overview:
      "surgical volunteer at Edward-Elmhurst Health — one of Illinois' largest health systems with 330+ locations across the Chicagoland area. working alongside clinical teams in the surgical unit, supporting patient care from pre-op preparation through post-operative recovery.",
    sections: [
      {
        heading: "the work",
        body: "supporting clinical teams in delivering comprehensive care to surgical patients. coordinating pre- and post-operative workflows alongside nursing staff. maintaining an organized and sanitary patient care environment. facilitating communication between healthcare providers, patients, and their families during a high-stress period in the patient's experience.",
      },
      {
        heading: "what i've learned",
        body: "working in a surgical environment has given me direct exposure to the operational and human realities of healthcare: how clinical teams make decisions under pressure, how patient experience is shaped by the smallest interactions, and how much coordination is required to keep a hospital unit running. this experience directly informs how I think about healthcare technology and bio-intelligence systems.",
      },
    ],
  },
];
