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
    slug: "interior-fit-out",
    number: "01",
    title: "Interior Fit-Out",
    short: "Turnkey office, retail, hospitality and residential interiors delivered from shell to handover.",
    intro: "We translate approved designs into complete, functional interiors with one coordinated team managing procurement, site execution, quality and handover.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=88",
    deliverables: ["Site survey and mobilisation", "Partitions, ceilings and flooring", "Finishes, fixtures and final styling", "Authority coordination and handover"],
    process: [
      { title: "Define", text: "Confirm the brief, site condition, budget and programme." },
      { title: "Coordinate", text: "Resolve drawings, materials and specialist requirements before work begins." },
      { title: "Build", text: "Execute with disciplined supervision, reporting and quality checks." },
      { title: "Handover", text: "Snag, test, clean and deliver a space ready to use." },
    ],
  },
  {
    slug: "civil-renovation",
    number: "02",
    title: "Civil & Renovation",
    short: "Practical upgrades that improve existing spaces without losing control of programme or cost.",
    intro: "From focused refurbishment to complete transformation, we plan every intervention around the condition of the property and how it needs to perform next.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=88",
    deliverables: ["Demolition and enabling works", "Blockwork, plaster and screed", "Waterproofing and tiling", "Painting and decorative finishes"],
    process: [
      { title: "Inspect", text: "Survey existing conditions and identify risks before pricing." },
      { title: "Protect", text: "Plan access, protection and phased work around occupied areas." },
      { title: "Renew", text: "Repair and rebuild with suitable systems and materials." },
      { title: "Finish", text: "Complete every visible detail to an agreed quality benchmark." },
    ],
  },
  {
    slug: "mep-works",
    number: "03",
    title: "MEP Works",
    short: "Coordinated mechanical, electrical and plumbing services designed for safe daily operation.",
    intro: "Our MEP coordination brings building services into the project early, preventing clashes and making future maintenance easier.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=88",
    deliverables: ["HVAC installation and modification", "Power, lighting and low-current systems", "Water supply and drainage", "Testing, commissioning and documentation"],
    process: [
      { title: "Calculate", text: "Review loads, capacities and landlord requirements." },
      { title: "Coordinate", text: "Align routes and equipment with architecture and joinery." },
      { title: "Install", text: "Execute using approved materials and qualified trades." },
      { title: "Commission", text: "Test performance and provide clear handover records." },
    ],
  },
  {
    slug: "custom-joinery",
    number: "04",
    title: "Custom Joinery",
    short: "Purpose-made cabinetry, counters, wall features and furniture shaped around the space.",
    intro: "We combine accurate site measurement, material knowledge and workshop craftsmanship to produce joinery that looks resolved and works hard every day.",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88",
    deliverables: ["Shop drawings and material samples", "Reception and retail counters", "Wardrobes, kitchens and storage", "Feature walls, doors and specialist details"],
    process: [
      { title: "Measure", text: "Capture site dimensions and coordination points precisely." },
      { title: "Detail", text: "Resolve hardware, finishes, interfaces and access." },
      { title: "Craft", text: "Manufacture with controlled workshop quality." },
      { title: "Install", text: "Fit, align and finish with minimal site disruption." },
    ],
  },
  {
    slug: "design-planning",
    number: "05",
    title: "Design & Planning",
    short: "Clear concepts and coordinated technical information that make construction predictable.",
    intro: "Good delivery begins with good decisions. We organise space, materials, services and budget into a design that is both distinctive and buildable.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=88",
    deliverables: ["Brief development and space planning", "Concept and mood direction", "Material and finish selection", "Coordinated construction drawings"],
    process: [
      { title: "Listen", text: "Understand users, operations, priorities and constraints." },
      { title: "Explore", text: "Develop layouts and a focused visual direction." },
      { title: "Resolve", text: "Coordinate dimensions, materials and technical systems." },
      { title: "Issue", text: "Provide an approved package ready for procurement and build." },
    ],
  },
  {
    slug: "project-management",
    number: "06",
    title: "Project Management",
    short: "One accountable team controlling programme, procurement, quality and communication.",
    intro: "We keep projects moving by making responsibilities visible, decisions timely and site information reliable from mobilisation to close-out.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=88",
    deliverables: ["Programme and procurement tracking", "Budget and variation control", "Site coordination and reporting", "Quality, snagging and close-out"],
    process: [
      { title: "Plan", text: "Set milestones, responsibilities and decision dates." },
      { title: "Procure", text: "Track long-lead materials and approved suppliers." },
      { title: "Control", text: "Report progress, risk, cost and quality clearly." },
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
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88",
    gallery: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=86",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1500&q=86",
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
