export type Service = {
  slug: string;
  number: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  deliverables: string[];
  process: { title: string; text: string }[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  location: string;
  scope: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  cover: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    slug: "construction-work",
    number: "01",
    title: "Construction Work",
    short: "Reliable building and civil construction delivered with disciplined planning, supervision and quality control.",
    intro: "We manage construction work from site preparation through structural, architectural and finishing stages, coordinating trades, materials and inspections around a clear programme.",
    image: "/embellish-construction-pour-v3.webp",
    deliverables: ["Site preparation and mobilisation", "Structural and civil works", "Blockwork, plastering and finishes", "Testing, snagging and handover"],
    process: [
      { title: "Assess", text: "Review the site, drawings, scope, access and authority requirements." },
      { title: "Plan", text: "Set the programme, resources, procurement schedule and safety controls." },
      { title: "Construct", text: "Execute each stage with coordinated supervision and quality inspections." },
      { title: "Complete", text: "Test, snag, document and hand over the completed works." },
    ],
  },
  {
    slug: "demolition-wrecking-work",
    number: "02",
    title: "Demolition & Wrecking Work",
    short: "Controlled demolition, dismantling and site clearance carried out safely and responsibly.",
    intro: "Our demolition team plans every stage around structural conditions, neighbouring properties, access and waste handling to prepare sites safely for their next phase.",
    image: "/embellish-pool-demolition.webp",
    deliverables: ["Site surveys and demolition planning", "Soft strip and selective dismantling", "Structural demolition and wrecking", "Debris removal and site clearance"],
    process: [
      { title: "Survey", text: "Identify structural, utility, access and environmental risks." },
      { title: "Isolate", text: "Secure the site and isolate services before work begins." },
      { title: "Dismantle", text: "Complete controlled demolition using the appropriate method and equipment." },
      { title: "Clear", text: "Sort, remove and dispose of waste through approved channels." },
    ],
  },
  {
    slug: "landscaping-swimming-pools",
    number: "03",
    title: "Landscaping & Swimming Pools",
    short: "Complete outdoor environments combining planting, hardscape, irrigation and swimming-pool construction.",
    intro: "We create practical, inviting outdoor spaces suited to the UAE climate, bringing landscape design, external works and pool systems together in one coordinated delivery.",
    image: "/embellish-pool-landscape-work-v2.webp",
    deliverables: ["Landscape design and planting", "Paving, decking and outdoor structures", "Irrigation and landscape lighting", "Swimming pools, filtration and water features"],
    process: [
      { title: "Imagine", text: "Define the outdoor experience, functions and visual direction." },
      { title: "Engineer", text: "Coordinate levels, drainage, irrigation, pool structure and services." },
      { title: "Create", text: "Build hardscape and pool works, then install planting and finishes." },
      { title: "Commission", text: "Balance systems, test equipment and provide maintenance guidance." },
    ],
  },
  {
    slug: "project-management",
    number: "04",
    title: "Project Management",
    short: "One accountable team controlling programme, procurement, cost, quality and communication.",
    intro: "We keep construction and landscape projects moving by making responsibilities visible, decisions timely and site information reliable from mobilisation to close-out.",
    image: "/embellish-project-management-site-v2.webp",
    deliverables: ["Programme and procurement tracking", "Budget and variation control", "Site coordination and reporting", "Quality, snagging and close-out"],
    process: [
      { title: "Plan", text: "Set milestones, responsibilities, reporting and decision dates." },
      { title: "Procure", text: "Track approved suppliers, materials and long-lead requirements." },
      { title: "Control", text: "Manage progress, risk, cost, safety and quality across the site." },
      { title: "Close", text: "Resolve snags and assemble complete handover information." },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "business-bay-workplace",
    number: "01",
    title: "Business Bay Workplace",
    category: "Commercial",
    location: "Business Bay, Dubai",
    scope: "Design coordination · Fit-out · MEP · Joinery",
    year: "2026",
    summary: "A calm, efficient workplace balancing focused work, client meetings and team collaboration.",
    challenge: "The compact floor plate needed to support different working styles while maintaining privacy, daylight and a strong first impression.",
    solution: "A clear circulation spine connects glazed meeting rooms, acoustic work zones and a warm timber reception. Integrated storage keeps the plan visually quiet.",
    result: "A refined office that feels generous, supports daily operations and presents a confident face to visiting clients.",
    cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1500&q=86",
    ],
  },
  {
    slug: "jumeirah-villa-renovation",
    number: "02",
    title: "Jumeirah Villa Renewal",
    category: "Residential",
    location: "Jumeirah, Dubai",
    scope: "Renovation · Joinery · Finishes · MEP upgrades",
    year: "2026",
    summary: "A warm, contemporary family home renewed with natural materials and practical storage.",
    challenge: "The existing villa felt fragmented and dated, with limited storage and little connection between the main living spaces.",
    solution: "Selective openings improved flow, while a restrained palette of stone, oak and soft neutrals unified the home. Bespoke joinery absorbed everyday storage.",
    result: "A brighter, calmer home that feels cohesive without losing the comfort and durability required for family life.",
    cover: "/jumeirah-villa-exterior-v2.webp",
    gallery: [
      "/jumeirah-villa-living-v2.webp",
      "/jumeirah-villa-kitchen-v2.webp",
      "/jumeirah-villa-courtyard-v2.webp",
    ],
  },
  {
    slug: "downtown-retail-boutique",
    number: "03",
    title: "Downtown Retail Boutique",
    category: "Retail",
    location: "Downtown Dubai",
    scope: "Fit-out · Display joinery · Lighting · MEP",
    year: "2026",
    summary: "A compact boutique designed to guide customers naturally and let the merchandise lead.",
    challenge: "The narrow unit needed high display capacity, comfortable circulation and a memorable identity without visual clutter.",
    solution: "A modular wall system, focused lighting and a strong central display create rhythm and flexibility across changing collections.",
    result: "A distinctive, adaptable shop floor with improved product visibility and a clear customer journey.",
    cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1500&q=86",
    ],
  },
  {
    slug: "marina-hospitality-lounge",
    number: "04",
    title: "Marina Hospitality Lounge",
    category: "Hospitality",
    location: "Dubai Marina",
    scope: "Design development · Fit-out · Joinery · Lighting",
    year: "2026",
    summary: "A layered guest lounge shaped around comfort, atmosphere and smooth service operations.",
    challenge: "The venue needed distinct seating moods while preserving clear staff circulation and an open waterfront character.",
    solution: "Soft zoning, textured finishes and low-glare lighting create intimacy without enclosing the plan. Service points are integrated into the joinery.",
    result: "A welcoming, operationally efficient environment that transitions naturally from daytime meetings to evening hospitality.",
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1500&q=86",
    ],
  },
];

export const processSteps = [
  ["01", "Discover", "We visit the site, understand the brief and define success."],
  ["02", "Design", "We align layout, material direction, technical needs and budget."],
  ["03", "Deliver", "We coordinate procurement and construction with visible quality control."],
  ["04", "Handover", "We test, snag, document and deliver the space ready to use."],
] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
