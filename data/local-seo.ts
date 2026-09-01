export interface LocalSeoPage {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  primaryArea: string;
  keywords: string[];
  problems: string[];
  services: string[];
  proof: string;
}

export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "quality-assurance-surat",
    eyebrow: "Quality Assurance Surat",
    title: "Quality assurance support for manufacturing businesses in Surat.",
    metaTitle: "Quality Assurance Consultant in Surat",
    metaDescription:
      "Saumya Dubey provides QA documentation, GMP, SOP, batch record and audit-readiness support for pharmaceutical, Ayurvedic and related manufacturers in Surat.",
    intro:
      "If your Surat manufacturing team is losing time to batch record backlog, SOP revision, document cleanup or audit preparation, Saumya provides focused QA support that is practical, scoped and easy to start.",
    primaryArea: "Surat, Gujarat",
    keywords: [
      "quality assurance Surat",
      "QA consultant Surat",
      "GMP consultant Surat",
      "pharma QA consultant Surat",
      "QA documentation Surat",
    ],
    problems: [
      "Batch records waiting for final QA review",
      "SOP revisions and document cleanup falling behind",
      "Internal audit or self-inspection preparation pressure",
      "QA workload overflow during busy manufacturing periods",
    ],
    services: [
      "Batch record review support",
      "SOP revision and documentation cleanup",
      "Internal audit readiness support",
      "COA, specification, STP and TDS review",
    ],
    proof:
      "Saumya combines B.Sc. Pharmaceutical Chemistry, D.Pharm in Ayurveda and hands-on QA exposure from regulated manufacturing environments.",
  },
  {
    slug: "qa-consultant-gujarat",
    eyebrow: "QA Consultant Gujarat",
    title: "Founder-led QA consulting for documentation-heavy teams in Gujarat.",
    metaTitle: "QA Consultant in Gujarat for Pharma and Ayurvedic Manufacturers",
    metaDescription:
      "Independent QA consultant in Gujarat for pharmaceutical, Ayurvedic, nutraceutical and related manufacturing teams needing documentation and audit-readiness support.",
    intro:
      "Saumya helps Gujarat-based manufacturers bring more discipline to records, SOPs, technical documents and QA systems without adding a large consulting layer.",
    primaryArea: "Gujarat and remote support across India",
    keywords: [
      "QA consultant Gujarat",
      "quality assurance Gujarat",
      "pharmaceutical QA consultant Gujarat",
      "GMP consultant Gujarat",
      "QA documentation consultant Gujarat",
    ],
    problems: [
      "Documentation inconsistency across departments or products",
      "Internal QA team stretched beyond current bandwidth",
      "Audit-readiness work left too late",
      "Need for an independent second review before handover",
    ],
    services: [
      "QA documentation cleanup",
      "Change-control and quality-system support",
      "Overflow QA support",
      "Ayurvedic and herbal documentation support",
    ],
    proof:
      "Her previous QA path includes Mepromax Lifesciences, Ronald Pharmaceutical and DAC55 Laboratory before building an independent consulting practice.",
  },
  {
    slug: "gmp-consultant-surat",
    eyebrow: "GMP Consultant Surat",
    title: "GMP documentation support that helps teams stay controlled and audit-ready.",
    metaTitle: "GMP Consultant in Surat for Documentation and QA Support",
    metaDescription:
      "GMP documentation consultant in Surat for SOP revision, batch record review, internal audit readiness and quality-system support.",
    intro:
      "When GMP documentation starts becoming messy, outdated or hard to defend, Saumya helps simplify the work into a clear, reviewable and controlled support scope.",
    primaryArea: "Surat and South Gujarat",
    keywords: [
      "GMP consultant Surat",
      "GMP documentation Surat",
      "SOP consultant Surat",
      "batch record review Surat",
      "audit readiness Surat",
    ],
    problems: [
      "SOPs that need revision, formatting and control",
      "Records that need a careful QA pass",
      "Technical documents needing consistency review",
      "Internal audits needing preparation and follow-through",
    ],
    services: [
      "SOP revision support",
      "Batch record review",
      "Internal audit readiness",
      "Quality-system documentation support",
    ],
    proof:
      "The consulting approach is practical: define the bottleneck, review the current state, complete the scoped work and hand over clearly.",
  },
  {
    slug: "pharma-qa-documentation-consultant-gujarat",
    eyebrow: "Pharma QA Documentation Gujarat",
    title: "Pharma QA documentation support for cleaner records and stronger review discipline.",
    metaTitle: "Pharma QA Documentation Consultant in Gujarat",
    metaDescription:
      "Saumya Dubey supports pharma QA documentation in Gujarat, including batch records, SOPs, COA, specifications, STP, TDS and audit-readiness work.",
    intro:
      "For pharmaceutical and related manufacturing teams, documentation quality directly affects review confidence. Saumya provides focused support where records and technical documents need clearer control.",
    primaryArea: "Gujarat",
    keywords: [
      "pharma QA documentation consultant Gujarat",
      "pharma SOP consultant Gujarat",
      "batch record review Gujarat",
      "COA review Gujarat",
      "pharmaceutical quality assurance Gujarat",
    ],
    problems: [
      "Batch record review backlog",
      "COA, specification, STP or TDS inconsistency",
      "SOPs that no longer reflect current process",
      "Documentation pressure before audits or inspections",
    ],
    services: [
      "Batch record review support",
      "COA and specification review",
      "SOP revision and cleanup",
      "Internal audit readiness support",
    ],
    proof:
      "Saumya works directly with clients, keeping the scope close to the real documentation bottleneck instead of selling generic consulting packages.",
  },
];

export const localSeoSlugs = localSeoPages.map((page) => `/${page.slug}`);

export const getLocalSeoPage = (slug: string) =>
  localSeoPages.find((page) => page.slug === slug);
