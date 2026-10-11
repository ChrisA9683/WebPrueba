// ==========================================
// VELTRIX LABS - CLINICAL PEPTIDE DOSSIER DATA
// ==========================================
const PRODUCTS_DATA = {
  retatrutide: {
    id: "retatrutide",
    name: "Retatrutide",
    category: "Metabolic / Obesity",
    badge: "Triple Agonista (GLP-1 / GIP / Glucagón)",
    image: "images/peptide_vials.jpg",
    purity: ">99.5% HPLC / MS",
    summary: "Un innovador triple agonista de receptores diseñado para la reducción profunda de peso corporal y la regulación metabólica integral.",
    mechanism: "Estimula concurrentemente el receptor GLP-1 (control del apetito y vaciamiento gástrico), GIP (metabolismo lipídico e incremento de sensibilidad insulínica) y el receptor de glucagón (aumento de la termogénesis y oxidación lipídica activa).",
    dose: "5mg - 10mg",
    protocol: "Inyección subcutánea (uso semanal)",
    frequency: "1 aplicación semanal bajo monitoreo médico protocolizado.",
    stack: "Stack Metabólico con Optimización de Electrolitos y control glicémico.",
    indications: [
      "Tratamiento avanzado del sobrepeso y obesidad refractaria",
      "Reducción acelerada de tejido adiposo visceral",
      "Mejora sustancial en marcadores de resistencia a la insulina y HbA1c",
      "Optimización del perfil lipídico y esteatosis hepática"
    ],
    contraindications: "Paciente con patologías o antecedentes patológicos de la glándula tiroides (como Carcinoma Medular Tiroideo o Neoplasia Endocrina Múltiple tipo 2). Uso contraindicado.",
    whatsappText: "Hola Veltrix Labs, deseo consultar disponibilidad y protocolo clínico de Retatrutide."
  },

  bpc157: {
    id: "bpc157",
    name: "BPC-157",
    category: "Regenerative Medicine",
    badge: "Pentadecapéptido Citoprotector",
    image: "images/peptide_vials.jpg",
    purity: ">99.8% HPLC / MS",
    summary: "Compuesto bioactivo de alta especificidad para acelerar la curación tisular, angiogénesis y protección gastrointestinal.",
    mechanism: "Promueve la proliferación de fibroblastos y síntesis acelerada de colágeno. Modula la expresión del factor de crecimiento endotelial vascular (VEGF) para neovascularización en zonas lesionadas y protege la integridad de la mucosa gástrica.",
    dose: "2mg - 5mg",
    protocol: "Subcutánea o intramuscular local",
    frequency: "5 inyecciones semanales por un ciclo continuo de 1 mes.",
    stack: "Sinergia regenerativa con TB-500 y GHK-Cu.",
    indications: [
      "Aceleración en reparación de tendones, ligamentos y desgarros musculares",
      "Citoprotección e integridad de la mucosa gastrointestinal (permeabilidad / SII)",
      "Recuperación post-quirúrgica y regeneración ósea / articular",
      "Alivio y modulación de procesos inflamatorios articulares crónicos"
    ],
    contraindications: "No administrar en cuadros oncológicos activos sin previa autorización oncológica. Requiere supervisión médica.",
    whatsappText: "Hola Veltrix Labs, deseo consultar sobre el protocolo de recuperación con BPC-157."
  },

  ghk_cu: {
    id: "ghk_cu",
    name: "GHK-Cu",
    category: "Anti-Aging & Remodeling",
    badge: "Tripéptido de Cobre Activo",
    image: "images/peptide_vials.jpg",
    purity: ">99.4% HPLC / MS",
    summary: "Tripéptido de cobre biológico con propiedades regenerativas dérmicas, antioxidantes y de remodelación de matriz extracelular (MEC).",
    mechanism: "Incrementa significativamente la expresión genética de colágeno tipo I, colágeno tipo III, elastina y glicosaminoglicanos. Actúa como potente quelante de radicales libres y modula la respuesta de TGF-beta.",
    dose: "2mg - 5mg",
    protocol: "Inyección subcutánea",
    frequency: "5 inyecciones semanales durante un periodo de 1 a 2 meses.",
    stack: "GHK-Cu + BPC-157 (Protocolo Anti-Aging / Reparación)",
    indications: [
      "Aumento de la densidad, elasticidad y firmeza global de la piel",
      "Degradación de fibrosis y cicatrización hipertrófica",
      "Acortamiento de eritema y fase de descamación tras procedimientos estéticos invasivos",
      "Atenuación del estrés oxidativo y bio-estimulación del folículo piloso"
    ],
    contraindications: "Alergia o sensibilidad conocida al cobre o metales traza.",
    whatsappText: "Hola Veltrix Labs, deseo consultar sobre el protocolo Anti-Aging con GHK-Cu."
  },

  tb500: {
    id: "tb500",
    name: "TB-500",
    category: "Recovery & Remodeling",
    badge: "Timosina Beta-4 Derivada",
    image: "images/peptide_vials.jpg",
    purity: ">99.7% HPLC / MS",
    summary: "Péptido sistémico clave en la migración celular, neovascularización en zonas isquémicas y flexibilidad tisular.",
    mechanism: "Regula la actina celular, proteína estructural crítica para la motilidad y remodelación tisular. Estimula la formación de nuevos vasos capilares y reduce drásticamente las respuestas fibróticas en lesiones.",
    dose: "2mg - 5mg",
    protocol: "Inyección subcutánea semanal / bisemanal",
    frequency: "Protocolo de carga de 2 a 5 aplicaciones semanales por 4 a 6 semanas.",
    stack: "Stack Regenerativo Total: BPC-157 + GHK-Cu + TB-500.",
    indications: [
      "Neovascularización rápida en zonas isquémicas o con aporte sanguíneo reducido",
      "Mejora notable de la movilidad articular, flexibilidad y rango de movimiento",
      "Atenuación de espasmos musculares y remodelación de matriz extracelular",
      "Soporte integral en recuperaciones articulares complejas"
    ],
    contraindications: "Uso exclusivamente bajo pauta y monitoreo de salud profesional.",
    whatsappText: "Hola Veltrix Labs, deseo consultar sobre el protocolo de reparación musculoesquelética con TB-500."
  },

  kpv: {
    id: "kpv",
    name: "KPV",
    category: "Anti-Inflammatory",
    badge: "Tripéptido C-terminal de α-MSH",
    image: "images/peptide_vials.jpg",
    purity: ">99.3% HPLC / MS",
    summary: "Tripéptido especializado en desactivar vías de señalización proinflamatorias sistémicas sin efectos secundarios esteroideos.",
    mechanism: "Ingresa directamente al núcleo celular para inhibir la activación del factor de transcripción nuclear NF-κB, suprimiendo la cascada de citoquinas inflamatorias como IL-1β, TNF-α e IL-6.",
    dose: "2mg - 5mg",
    protocol: "Inyección subcutánea o administración oral / tópica",
    frequency: "5 aplicaciones semanales durante fases inflamatorias agudas o subagudas.",
    stack: "Cuádruple Stack Regenerativo (GHK-Cu + BPC-157 + TB-500 + KPV).",
    indications: [
      "Reducción potente de citoquinas inflamatorias (IL-1β, TNF-α)",
      "Manejo de disbiosis intestinal y afecciones autoinmunes inflamatorias",
      "Regeneración epitelial y aceleración en cicatrización sin hipertrofia",
      "Modulación inmunológica en cuadros de inflamación crónica de bajo grado"
    ],
    contraindications: "Monitoreo médico en pacientes con terapias inmunosupresoras intensivas.",
    whatsappText: "Hola Veltrix Labs, deseo consultar sobre el tratamiento antiinflamatorio con KPV."
  },

  nad_plus: {
    id: "nad_plus",
    name: "NAD+",
    category: "Wellness & Cellular Energy",
    badge: "Coenzima Mitocondrial Activa",
    image: "images/peptide_vials.jpg",
    purity: ">99.9% Grado Farmacéutico",
    summary: "Coenzima vital para la producción mitocondrial de energía celular (ATP), reparación genómica y longevidad epigenética.",
    mechanism: "Sustrato esencial para las enzimas sirtuinas (SIRT1-7) y PARP-1, fundamentales para la reparación de cadenas de ADN dañadas, biogénesis mitocondrial y activación de genes de supervivencia celular.",
    dose: "Protocolizada según vía (Subcutánea o IV)",
    protocol: "Infusión lenta o inyecciones subcutáneas interdiarias",
    frequency: "Ciclos de mantenimiento mensual o aplicaciones 2-3 veces por semana.",
    stack: "Stack Longevidad: NAD+ con Epitalon y Secretagogos.",
    indications: [
      "Restauración del ATP y combate de la fatiga crónica y cerebral",
      "Neuroprotección, agudeza mental y regulación del ritmo circadiano",
      "Mantenimiento epigenético y reparación celular activa",
      "Optimización metabólica y soporte en desintoxicación celular"
    ],
    contraindications: "Dosis y velocidad de infusión deben ser calibradas para evitar sofocos o náuseas transitorias.",
    whatsappText: "Hola Veltrix Labs, deseo consultar sobre el protocolo de bio-optimización con NAD+."
  },

  gh_secretagogues: {
    id: "gh_secretagogues",
    name: "GH Secretagogues",
    category: "Growth & Metabolic Balance",
    badge: "Ipamorelin + CJC-1295 / GHRP-6",
    image: "images/peptide_vials.jpg",
    purity: ">99.6% HPLC / MS",
    summary: "Complejo de péptidos liberadores diseñados para restaurar la secreción fisiológica de hormona de crecimiento (GH) endógena.",
    mechanism: "Actúan como agonistas selectivos del receptor de grelina (GHS-R1a) y receptores GHRH pituitarios, estimulando pulsos naturales de GH sin alterar significativamente los niveles de cortisol o prolactina.",
    dose: "100mcg - 300mcg por componente",
    protocol: "Inyección subcutánea en ayunas o antes de dormir",
    frequency: "Protocolo 5 días on / 2 días off por periodos de 8 a 12 semanas.",
    stack: "Stack Recomposición Corporal y Salud Ósea.",
    indications: [
      "Incremento de la síntesis de masa muscular magra y soporte osteoarticular",
      "Aceleración de la lipólisis y movilización de tejido adiposo refractario",
      "Inducción de fases profundas de sueño reparador (Fase REM / delta)",
      "Recuperación acelerada tras entrenamientos intensos o desgaste físico"
    ],
    contraindications: "Contraindicado en presencia de tumores hipofisarios o patologías malignas activas.",
    whatsappText: "Hola Veltrix Labs, deseo consultar sobre el protocolo de Secretagogos de GH."
  },

  epitalon: {
    id: "epitalon",
    name: "Epitalon",
    category: "Longevity & Telomeres",
    badge: "Biorregulador Pineal Telomérico",
    image: "images/peptide_vials.jpg",
    purity: ">99.8% HPLC / MS",
    summary: "Tetrapéptido sintético mimético del extracto epifisario con efectos demostrados en la elongación telomérica y rejuvenecimiento celular.",
    mechanism: "Induce la reactivación de la enzima telomerasa en células somáticas humanas, alargando los telómeros y permitiendo superar el límite de Hayflick. Normaliza los ritmos neuroendocrinos y la producción endógena de melatonina.",
    dose: "5mg - 10mg diarios durante el ciclo",
    protocol: "Inyección subcutánea matutina o vespertina",
    frequency: "Ciclo intensivo de 10 a 20 días continuos, repetible 1 o 2 veces al año.",
    stack: "Stack Anti-Senescencia con NAD+ y GHK-Cu.",
    indications: [
      "Elongación y protección de los telómeros celulares contra el acortamiento por edad",
      "Restauración profunda de la arquitectura circadiana y calidad del sueño",
      "Equilibrio en la producción hormonal neuroendocrina de la glándula pineal",
      "Potente efecto antioxidante y protección frente a la senescencia celular prematura"
    ],
    contraindications: "Uso adulto exclusivo. Supervisión médica en terapias hormonales previas.",
    whatsappText: "Hola Veltrix Labs, deseo consultar sobre el protocolo de longevidad con Epitalon."
  }
};
