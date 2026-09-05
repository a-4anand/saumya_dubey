import type {
  ExperienceEntry,
  FAQ,
  Industry,
  NavItem,
  ProcessStep,
  Service,
} from "@/types/content";

export const siteConfig = {
  name: "Qorivara Life Sciences",
  shortName: "Qorivara",
  founderName: "Saumya Dubey",
  founderTitle: "Founder & Lead QA Consultant",
  descriptor: "Quality · Compliance · Documentation",
  headerDescriptor: "Quality · Compliance · Documentation",
  serviceDescriptor: "QA · GMP · Documentation · Quality Systems",
  title: "QA, GMP & Documentation Consulting",
  description:
    "Practical QA, GMP, documentation and quality-system support for pharmaceutical, Ayurvedic, nutraceutical and related manufacturers.",
  location: "Surat, Gujarat, India",
  serviceAreas: [
    "Surat",
    "South Gujarat",
    "Gujarat",
    "Remote engagements across India",
  ],
  heroEyebrow: "QORIVARA LIFE SCIENCES",
  heroHeadline: "Quality assurance, without the complexity.",
  heroAltHeadline: "Founder-led QA support for documentation-heavy manufacturing teams",
  heroDescription:
    "Practical QA, documentation and quality-system support for pharmaceutical, Ayurvedic, nutraceutical and related manufacturing businesses.",
  credibilityStrip: [
    "B.Sc. Pharmaceutical Chemistry",
    "D.Pharm — Ayurveda",
    "3+ Years QA Experience",
  ],
  navItems: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  footerItems: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "About", href: "/about" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Professional Scope", href: "/professional-scope" },
  ] satisfies NavItem[],
};

export const coreProblems = [
  {
    title: "Batch record backlog",
    description: "Final review starts slowing internal release confidence.",
  },
  {
    title: "SOP revision slippage",
    description: "Procedures start drifting away from current operations.",
  },
  {
    title: "Audit-readiness pressure",
    description: "Self-inspections and document checks get rushed too late.",
  },
  {
    title: "Documentation inconsistency",
    description: "Teams lose time to rework, formatting and missing detail.",
  },
  {
    title: "QA bandwidth stretch",
    description: "The workload grows faster than the review capacity.",
  },
  {
    title: "Need for a second review",
    description: "Fresh eyes are needed before issues become bigger problems.",
  },
];

export const services: Service[] = [
  {
    id: "documentation-cleanup",
    title: "QA Documentation Cleanup & Review",
    description:
      "Clean up and review documentation where inconsistency, backlog or poor structure is slowing the team down.",
    category: "Documentation",
    bullets: ["Cleanup", "Review", "Structure"],
    featured: true,
  },
  {
    id: "batch-record-review",
    title: "Batch Record Review Support",
    description:
      "Add review capacity when batch records need a more disciplined final QA check.",
    category: "Batch / Record Review",
    bullets: ["Final review", "Review bandwidth", "Structured feedback"],
    featured: true,
  },
  {
    id: "sop-revision",
    title: "SOP Revision & Document Control Support",
    description:
      "Revise and review SOPs so procedures stay usable, current and easier to control.",
    category: "Documentation",
    bullets: ["Revision support", "Consistency", "Document control"],
    featured: true,
  },
  {
    id: "audit-readiness",
    title: "Internal Audit Readiness & Self-Inspection Support",
    description:
      "Support internal audits and self-inspections with an independent review of documents and gaps.",
    category: "Quality Systems",
    bullets: ["Gap review", "Independent review", "Follow-through"],
    featured: true,
  },
  {
    id: "change-control",
    title: "Change Control & Quality-System Support",
    description:
      "Bring more structure to change-control and related quality-system documentation work.",
    category: "Quality Systems",
    bullets: ["Change records", "Quality systems", "Structured support"],
    featured: true,
  },
  {
    id: "technical-document-review",
    title: "COA, Specifications, STP & TDS Review",
    description:
      "Review technical documents that need stronger consistency before they create avoidable confusion.",
    category: "Documentation",
    bullets: ["COA", "Specifications", "STP / TDS"],
  },
  {
    id: "qa-bandwidth",
    title: "Overflow QA Support for Growing Teams",
    description:
      "Useful when documentation and review work have grown faster than the current QA team's bandwidth.",
    category: "Quality Systems",
    bullets: ["Overflow support", "Project-based", "Ongoing scope"],
  },
  {
    id: "ayurvedic-documentation",
    title: "Ayurvedic / Herbal Documentation Support",
    description:
      "Support for Ayurveda-linked and herbal manufacturers where product context and documentation quality both matter.",
    category: "Documentation",
    bullets: ["Ayurvedic context", "Documentation review", "Scoped support"],
  },
];

export const industries: Industry[] = [
  {
    id: "pharmaceutical",
    title: "Pharmaceutical",
    description: "Best fit where records, review discipline and release confidence are tightly linked.",
  },
  {
    id: "ayurvedic",
    title: "Ayurvedic",
    description:
      "Especially aligned where Ayurveda-linked manufacturing still needs disciplined formal documentation.",
  },
  {
    id: "nutraceutical",
    title: "Nutraceutical",
    description:
      "Useful where teams need stronger QA documentation and overflow review support.",
  },
  {
    id: "herbal",
    title: "Herbal",
    description: "Support for documentation-heavy quality work in herbal manufacturing environments.",
  },
  {
    id: "cosmetic",
    title: "Cosmetic",
    description:
      "Relevant where documentation and review discipline need additional support.",
  },
  {
    id: "private-label",
    title: "Third-Party / Private Label",
    description: "Support where coordination and review pressure increase across manufacturing partners.",
  },
];

export const differentiators = [
  {
    title: "Direct founder involvement",
    description: "Clients work directly with Saumya rather than being handed to a junior team.",
  },
  {
    title: "Academic fit for pharma and Ayurveda-linked work",
    description: "B.Sc. Pharmaceutical Chemistry and D.Pharm — Ayurveda.",
  },
  {
    title: "Hands-on QA background",
    description: "Experience across real manufacturing QA roles, not only advisory work.",
  },
  {
    title: "Useful for backlog and overflow pressure",
    description: "Support is designed for teams that need extra QA capacity without building a larger layer.",
  },
  {
    title: "Scoped and practical",
    description: "The work stays close to the live bottleneck instead of becoming vague consulting theatre.",
  },
  {
    title: "Flexible engagement shape",
    description: "Project-based or ongoing support can be defined around the requirement.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discuss",
    description: "Start with the bottleneck, document type and business context.",
  },
  {
    step: "02",
    title: "Review",
    description: "Review documents, records or quality-system areas creating friction.",
  },
  {
    step: "03",
    title: "Support",
    description: "Revise, review or structure the work agreed at the start.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Close with cleaned outputs, open issues and sensible next actions.",
  },
];

export const experienceTimeline: ExperienceEntry[] = [
  {
    yearLabel: "2022",
    company: "Mepromax Lifesciences Pvt. Ltd., Dehradun, Uttarakhand",
    role: "Quality Assurance Trainee",
  },
  {
    yearLabel: "Next",
    company: "Unilever",
    role: "Quality Assurance Officer",
    note: "~6 months",
  },
  {
    yearLabel: "Next",
    company: "DAC55 Laboratory Pvt. Ltd., Vadodara, Gujarat",
    role: "Quality Assurance Executive",
  },
  {
    yearLabel: "Today",
    company: "Qorivara Life Sciences",
    role: "Founder & Lead QA Consultant",
    note: "Surat, Gujarat",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What type of businesses are the best fit?",
    answer:
      "The best fit is pharmaceutical, Ayurvedic, herbal, nutraceutical, cosmetic and related manufacturing businesses where documentation quality and QA review directly affect operations.",
  },
  {
    question: "What kind of problems usually bring clients to you?",
    answer:
      "Common requirements include batch record backlog, SOP revision, documentation cleanup, internal audit readiness, technical document review and overflow QA support.",
  },
  {
    question: "Do you work only in Surat?",
    answer:
      "Surat and Gujarat for on-site work where practical, with remote support available across India depending on the engagement.",
  },
  {
    question: "Can you support one-time backlog or cleanup work?",
    answer:
      "Yes. Support can be shaped around a one-time requirement such as document cleanup, batch review backlog or a focused audit-readiness exercise.",
  },
  {
    question: "Do you also take ongoing QA support assignments?",
    answer:
      "Yes, ongoing support may be possible when the scope is clear and the work remains within a practical, agreed structure.",
  },
  {
    question: "Can you review SOPs, batch records and technical documents?",
    answer:
      "Yes. SOPs, batch records, COAs, specifications, STPs, TDS documents and related QA documentation can be reviewed within the agreed scope.",
  },
  {
    question: "Can you help before an internal or external audit?",
    answer:
      "Yes. Internal audit readiness and self-inspection support are useful when a business wants a more disciplined review before outside pressure increases.",
  },
  {
    question: "Why would a business hire an outside consultant instead of only using the in-house QA team?",
    answer:
      "The value is usually extra review bandwidth, a second set of eyes, faster document cleanup and focused support when the internal team is already stretched.",
  },
  {
    question: "Can you guarantee a regulatory approval or successful audit outcome?",
    answer:
      "No. No consultant can responsibly guarantee regulatory approval or a successful inspection outcome.",
  },
  {
    question: "Can your services replace statutory QA personnel?",
    answer:
      "External consulting support does not automatically replace legally required or designated personnel.",
  },
  {
    question: "Can you work with confidential company documents?",
    answer:
      "Yes, subject to appropriate confidentiality arrangements and the agreed scope.",
  },
];

export const entryServices = [
  "QA Documentation Cleanup",
  "Batch Record Review Support",
  "SOP Revision Support",
  "Internal Audit Readiness",
  "Overflow QA Support",
];

export const trustHighlights = [
  "B.Sc. Pharmaceutical Chemistry",
  "D.Pharm — Ayurveda",
  "~3 years QA experience",
  "Founder-led support with direct communication",
  "Previous QA roles at Mepromax Lifescience, Unilever and DAC55",
  "Focused on backlog reduction, documentation quality and audit readiness",
];

export const professionalBoundaries = [
  "Support is provided within professional competence and the agreed scope.",
  "No promise of regulatory approval or guaranteed audit outcomes is made.",
  "External support does not automatically replace legally required or designated personnel.",
  "Client communication and marketing should not imply fabricated approvals or outcomes.",
  "Confidential material from previous employers is not reused.",
];

export const requirementOptions = [
  "QA Documentation Cleanup",
  "Batch Record Review Support",
  "SOP Revision Support",
  "Internal Audit Readiness",
  "Self-Inspection Support",
  "Change Control / Quality-System Support",
  "COA / Specifications / STP / TDS Review",
  "Overflow QA Support",
  "Ayurvedic / Herbal Documentation Support",
  "Not sure yet",
  "Other",
];

export const preferredContactMethods = [
  "Email",
  "Phone call",
  "WhatsApp",
  "Either is fine",
];
