// ==========================================
// VELTRIX LABS - CLINICAL DOSSIER 2026
// Official Analytical Specifications & Protocols
// U.S. Clinical Research Division
// ==========================================
const PRODUCTS_DATA = {

  // ── METABOLIC / APPETITE CONTROL ──────────────────────────────────────────

  retatrutide: {
    id: "retatrutide",
    name: "Retatrutide (60mg)",
    category: "Metabolic / Appetite Control",
    badge: "Triple GLP-1 / GIP / Glucagon Receptor Agonist",
    image: "images/imagenes/retatrutide-60mg.jpg",
    purity: ">99.5% HPLC / MS Verified",
    summary: "Groundbreaking triple-target receptor agonist engineered for significant body weight reduction, lipid oxidation, and comprehensive metabolic regulation.",
    mechanism: "Concurrent activation of GLP-1 (appetite suppression and delayed gastric emptying), GIP (enhanced lipid metabolism and insulin sensitivity), and Glucagon receptors (increased energy expenditure and thermogenesis).",
    dose: "5mg - 10mg",
    protocol: "Subcutaneous injection (weekly protocol)",
    frequency: "1 weekly application under clinical progression and medical supervision.",
    stack: "Metabolic Optimization Stack with electrolyte balance and glycemic tracking.",
    indications: [
      "Advanced clinical management of refractory overweight and adiposity",
      "Accelerated reduction of deep visceral adipose tissue",
      "Substantial improvement in insulin resistance and HbA1c biomarkers",
      "Hepatic steatosis reduction and lipid profile optimization"
    ],
    contraindications: "Contraindicated in individuals with personal or family history of medullary thyroid carcinoma (MTC) or MEN2."
  },

  tirzepatide_100: {
    id: "tirzepatide_100",
    name: "Tirzepatide (100mg)",
    category: "Metabolic / Appetite Control",
    badge: "Dual GIP / GLP-1 Receptor Agonist — High Potency",
    image: "images/imagenes/tirzepatide-100mg.jpg",
    purity: ">99.6% HPLC / MS Verified",
    summary: "Potent dual GIP and GLP-1 receptor agonist providing sustained hypothalamic satiety signaling, delayed gastric transit, and deep glycemic control. High-dose presentation.",
    mechanism: "Dual incretin mimetic synergy that enhances glucose-dependent insulin secretion, lowers glucagon levels, slows gastric motility, and promotes long-term satiety.",
    dose: "5mg - 10mg",
    protocol: "Subcutaneous injection (weekly protocol)",
    frequency: "1 weekly application following systematic titration and protocol oversight.",
    stack: "Glycemic Stability and Appetite Regulation Stack.",
    indications: [
      "Clinical management of chronic weight and appetite regulation",
      "Marked reduction of subcutaneous and visceral adipose mass",
      "Stabilization of fasting blood glucose and insulin sensitivity",
      "Reduction of systemic cardiometabolic inflammatory markers"
    ],
    contraindications: "Contraindicated in patients with history of thyroid gland pathology or MEN2 syndrome."
  },

  tirzepatide_60: {
    id: "tirzepatide_60",
    name: "Tirzepatide (60mg)",
    category: "Metabolic / Appetite Control",
    badge: "Dual GIP / GLP-1 Receptor Agonist — Starter Titration",
    image: "images/imagenes/TIRZERPATIDE-60mg.jpg",
    purity: ">99.6% HPLC / MS Verified",
    summary: "Introductory titration dose of Tirzepatide designed to establish physiological tolerance and initiate metabolic resetting before escalating to 100mg protocols.",
    mechanism: "Dual GIP/GLP-1 pathway stimulation optimizing insulin sensitivity, modulating glucagon response, and suppressing hunger signaling.",
    dose: "5mg",
    protocol: "Subcutaneous injection (weekly protocol)",
    frequency: "1 weekly application during the initial induction phase (weeks 1-4).",
    stack: "Induction protocol for progressive titration to Tirzepatide 100mg.",
    indications: [
      "Induction phase of clinical appetite management protocol",
      "Gradual metabolic adaptation and compound tolerability",
      "Early glycemic normalization and appetite moderation",
      "Initial reduction in visceral adiposity"
    ],
    contraindications: "Contraindicated in patients with thyroid medical history or MEN2 syndrome."
  },

  // ── ANTI-AGING & CELLULAR REPAIR ──────────────────────────────────────────

  glow: {
    id: "glow",
    name: "GLOW Blend (70mg)",
    category: "Anti-Aging & Cellular Repair",
    badge: "Triple Peptide Synergy: GHK-Cu + BPC-157 + TB-500",
    image: "images/imagenes/glow-70mg.jpg",
    purity: ">99.5% HPLC / MS Verified",
    summary: "Advanced tripartite peptide matrix (GHK-Cu + BPC-157 + TB-500) investigated in aesthetic and regenerative medicine for extracellular matrix (ECM) reconstruction, angiogenesis, and tissue remodeling.",
    mechanism: "Synergistic activation: drives collagen and elastin biogenesis (GHK-Cu), upregulates actin mobility and capillary revascularization (TB-500), and provides deep mucosal and connective tissue healing (BPC-157).",
    dose: "2mg - 5mg",
    protocol: "Subcutaneous injection",
    frequency: "5 applications weekly for a 4-week clinical cycle.",
    stack: "Cellular Remodeling & Dermal Integrity Stack.",
    indications: [
      "Stimulates genetic expression of type I/III collagen and elastin",
      "Restores dermal density, viscoelasticity, and systemic skin firmness",
      "Facilitates remodeling of fibrotic and hypertrophic scar tissue",
      "Accelerates recovery following clinical dermatological procedures",
      "Attenuates oxidative stress and nourishes hair follicular matrix"
    ],
    contraindications: "Known allergy to copper or trace elements. Clinical oversight required with active oncological history."
  },

  klow: {
    id: "klow",
    name: "KLOW Blend (80mg)",
    category: "Anti-Aging & Cellular Repair",
    badge: "Quadruple Peptide Synergy: GHK-Cu + BPC-157 + TB-500 + KPV",
    image: "images/imagenes/klow-80mg.jpg",
    purity: ">99.5% HPLC / MS Verified",
    summary: "Quadruple regenerative complex engineered to deliver multi-pathway synergy: resolves acute/chronic inflammation, accelerates musculoskeletal repair, and restores cellular architecture.",
    mechanism: "Suppresses NF-κB nuclear translocation and reduces pro-inflammatory cytokines (KPV), enhances actin cell motility and neovascularization (TB-500), offers robust cellular cytoprotection (BPC-157), and remodels extracellular collagen (GHK-Cu).",
    dose: "2mg - 5mg",
    protocol: "Subcutaneous injection",
    frequency: "5 applications weekly over a 4 to 6-week protocol.",
    stack: "Maximum Multi-Pathway Regenerative & Anti-Inflammatory Stack.",
    indications: [
      "Accelerates rehabilitation of tendons, ligaments, and skeletal muscle",
      "Enhances wound repair and systemic connective tissue integrity",
      "Provides cytoprotection and stabilizes gastrointestinal epithelium",
      "Promotes microvascular angiogenesis in ischemic or stressed tissues",
      "Improves joint flexibility and reduces inflammatory cytokines (IL-1β, TNF-α)"
    ],
    contraindications: "Strictly for clinical research evaluation. Caution in patients undergoing heavy immunosuppressive regimens."
  },

  ghk_cu: {
    id: "ghk_cu",
    name: "GHK-Cu (100mg)",
    category: "Anti-Aging & Cellular Repair",
    badge: "Active Copper Tripeptide (Gly-His-Lys)",
    image: "images/imagenes/ghkcu-100mg.jpg",
    purity: ">99.4% HPLC / MS Verified",
    summary: "High-purity biologically active copper tripeptide extensively studied for dermal remodeling, genomic repair stimulation, and extracellular matrix (ECM) rejuvenation.",
    mechanism: "Modulates gene transcription across collagen, elastin, and glycosaminoglycan synthesis pathways. Acts as a potent antioxidant chelator and normalizes TGF-beta signaling.",
    dose: "2mg - 5mg",
    protocol: "Subcutaneous injection",
    frequency: "5 applications weekly across 4 to 8-week protocols.",
    stack: "Fundamental bio-component of GLOW and KLOW formulations.",
    indications: [
      "Substantial increase in cutaneous density and tensile strength",
      "Remodeling of uneven tissue architecture and photodamage",
      "Shortens recovery duration post-ablative and cosmetic treatments",
      "Bio-stimulates follicular microcirculation and cellular vitality"
    ],
    contraindications: "Documented allergy or hyper-reactivity to copper compounds."
  },

  // ── CELLULAR WELLNESS ─────────────────────────────────────────────────────

  nad_plus: {
    id: "nad_plus",
    name: "NAD+ (500mg)",
    category: "Cellular Wellness",
    badge: "Active Mitochondrial Coenzyme",
    image: "images/imagenes/NAD-500mg.jpg",
    purity: ">99.9% Pharmaceutical Grade",
    summary: "Vital cellular coenzyme essential for mitochondrial adenosine triphosphate (ATP) synthesis, genomic DNA repair pathways, and epigenetic longevity modulation.",
    mechanism: "Rate-limiting substrate for sirtuin deacetylases (SIRT1-7) and PARP-1 enzymes responsible for repairing single-strand DNA breaks, stimulating mitochondrial biogenesis, and protecting against neurodegeneration.",
    dose: "50mg - 100mg protocolized",
    protocol: "Slow subcutaneous administration or monitored IV infusion",
    frequency: "2-3 applications weekly or monthly restoration cycles.",
    stack: "Cellular Longevity & Mitochondrial Optimization Stack.",
    indications: [
      "Restores cellular ATP reserves and relieves chronic fatigue",
      "Neuroprotection, cognitive clarity, and circadian rhythm harmonization",
      "Epigenetic preservation and active genomic integrity maintenance",
      "Metabolic rate stimulation and cellular detoxification support"
    ],
    contraindications: "Rate of infusion must be carefully titrated to prevent transient flushing, cramping, or nausea."
  },

  mots_c: {
    id: "mots_c",
    name: "MOTS-c (20mg)",
    category: "Cellular Wellness",
    badge: "Mitochondrial-Derived Peptide (MDP)",
    image: "images/imagenes/mots-c-20mg.jpg",
    purity: ">99.5% HPLC / MS Verified",
    summary: "Mitochondrial-derived peptide acting as an endocrine metabolic conductor, regulating whole-body metabolic homeostasis, insulin sensitivity, and physical endurance.",
    mechanism: "Directly activates the cellular AMPK signaling cascade, driving muscular glucose clearance, accelerating beta-oxidation, and mimicking the physiological benefits of high-intensity endurance training.",
    dose: "5mg - 10mg",
    protocol: "Subcutaneous injection (morning)",
    frequency: "3 applications weekly across 4 to 6-week cycles.",
    stack: "Mitochondrial Bioenergetics Stack paired with NAD+.",
    indications: [
      "Enhances mitochondrial biogenesis and cardiorespiratory endurance",
      "Optimizes insulin receptor sensitivity and systemic glucose disposal",
      "Prevents age-associated metabolic decline and sarcopenia",
      "Accelerates fatty acid oxidation and cellular energy production"
    ],
    contraindications: "Monitoring required in patients undergoing concurrent insulin or oral hypoglycemic therapy."
  },

  // ── GH SECRETAGOGUES ──────────────────────────────────────────────────────

  ipamorelin: {
    id: "ipamorelin",
    name: "Ipamorelin (10mg)",
    category: "GH Secretagogues",
    badge: "Selective Growth Hormone Secretagogue (GHS-R1a)",
    image: "images/imagenes/ipamorelin-10MG.jpg",
    purity: ">99.6% HPLC / MS Verified",
    summary: "Selective pentapeptide agonist of the growth hormone secretagogue receptor, engineered to stimulate natural physiological pulses of growth hormone without elevating undesirable endocrine hormones.",
    mechanism: "Selectively binds to pituitary GHS-R1a receptors triggering endogenous somatotropic GH pulsatility without inducing surges in prolactin, cortisol, or uncontrolled appetite.",
    dose: "200mcg - 300mcg",
    protocol: "Subcutaneous injection (fasted or pre-bedtime)",
    frequency: "5 days on / 2 days off protocol for 8 to 12-week cycles.",
    stack: "GH Secretagogue Synergistic Stack with Tesamorelin.",
    indications: [
      "Supports lean muscular preservation and osteoarticular health",
      "Stimulates selective lipolysis and refractory fat loss",
      "Promotes deeper restorative slow-wave delta sleep phases",
      "Shortens neuromuscular recovery times following exertion"
    ],
    contraindications: "Contraindicated in active malignant neoplasms or pituitary tumors."
  },

  tesamorelin: {
    id: "tesamorelin",
    name: "Tesamorelin (10mg)",
    category: "GH Secretagogues",
    badge: "Synthetic GHRH Analogue — Visceral Adipose Targeting",
    image: "images/imagenes/tesamorelin-10mg.jpg",
    purity: ">99.5% HPLC / MS Verified",
    summary: "Synthetic growth hormone-releasing hormone (GHRH) analogue clinically demonstrated to stimulate endogenous GH production while selectively reducing stubborn visceral adiposity.",
    mechanism: "Binds to pituitary somatotrophs stimulating pulsatile GH release, accelerating lipolysis within deep visceral adipose tissue without disrupting glycemic balance.",
    dose: "1mg - 2mg daily",
    protocol: "Subcutaneous injection (nightly)",
    frequency: "Daily protocol application over 8 to 12-week observational cycles.",
    stack: "GH Secretagogues Dual Stack with Ipamorelin.",
    indications: [
      "Targeted reduction of deep intra-abdominal and visceral fat depots",
      "Preservation of fat-free lean body mass during recomposition",
      "Improvement in triglyceride profiles and cardiovascular lipid health",
      "Restoration of natural nocturnal growth hormone release"
    ],
    contraindications: "Contraindicated during pregnancy, active malignancy, or known hypersensitivity to GHRH analogues."
  },

  // ── SOLVENTS & RECONSTITUTION ─────────────────────────────────────────────

  bac_water_10ml: {
    id: "bac_water_10ml",
    name: "Bacteriostatic Water (10ML)",
    category: "Solvents & Reconstitution",
    badge: "Sterile Solution with 0.9% Benzyl Alcohol — USP Grade",
    image: "images/imagenes/bac-water-10ML.jpg",
    purity: "USP Pharmaceutical Grade",
    summary: "10ML multi-dose sterile aqueous preparation containing 0.9% benzyl alcohol as a bacteriostatic preservative for precise reconstitution and preservation of lyophilized peptide vials.",
    mechanism: "The bacteriostatic agent inhibits bacterial proliferation within multi-dose vials, maintaining chemical stability, peptide integrity, and sterility for up to 30 days under refrigeration (2°C - 8°C).",
    dose: "1ML to 3ML per lyophilized vial",
    protocol: "Gentle reconstitution angled along internal vial glass wall",
    frequency: "Used as required for peptide reconstitution. Multi-vial capacity.",
    stack: "Essential reconstitution medium across all lyophilized compounds.",
    indications: [
      "Certified sterile reconstitution for bioactive research peptides",
      "Preserves microbiological sterility for up to 30 days under refrigeration (2°C - 8°C)",
      "10ML presentation — extended volume for comprehensive research protocols",
      "Formulated according to USP analytical laboratory standards"
    ],
    contraindications: "Not for direct intravenous administration. Avoid in cases of benzyl alcohol sensitivity."
  },

  bac_water_3ml: {
    id: "bac_water_3ml",
    name: "Bacteriostatic Water (3ML)",
    category: "Solvents & Reconstitution",
    badge: "Sterile Solution with 0.9% Benzyl Alcohol — USP Grade",
    image: "images/imagenes/bac-water-3ML.jpg",
    purity: "USP Pharmaceutical Grade",
    summary: "Compact 3ML sterile aqueous solution with 0.9% benzyl alcohol designed for single-compound reconstitution and personal protocol cycles.",
    mechanism: "Bacteriostatic preservation prevents microbial colonization and maintains peptide molecular structure under controlled cold-chain storage.",
    dose: "0.5ML to 1ML per lyophilized vial",
    protocol: "Slow dispensing against vial wall to prevent peptide mechanical degradation",
    frequency: "Single cycle format. Dedicated per lyophilized compound vial.",
    stack: "Essential reconstitution medium for single-vial protocols.",
    indications: [
      "Exact reconstitution of lyophilized compounds in compact format",
      "Sterility maintained for up to 30 days under cold-chain refrigeration",
      "Compact 3ML format — minimal residue and ideal single-compound pairing",
      "Formulated according to USP analytical laboratory standards"
    ],
    contraindications: "Not for direct intravenous injection. Avoid in cases of benzyl alcohol sensitivity."
  }

};
