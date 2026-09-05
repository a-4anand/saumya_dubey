export type DeliveryMode = "remote" | "hybrid" | "on-site";

export interface ServiceDefinition {
  slug: string;
  family: "Quality Documentation" | "Quality Systems & Readiness" | "QA Capacity";
  title: string;
  shortTitle: string;
  outcome: string;
  description: string;
  forWhom: string[];
  signals: string[];
  qorivaraDoes: string[];
  deliverables: string[];
  included: string[];
  excluded: string[];
  clientInputs: string[];
  deliveryModes: DeliveryMode[];
  modeNote: string;
  engagementModels: string[];
  responsibleRole: string;
  timelineFactors: string[];
  relatedInsightSlug: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const serviceDefinitions: ServiceDefinition[] = [
  {
    slug: "batch-record-review",
    family: "Quality Documentation",
    title: "Batch Record Preparation, Review & Revision",
    shortTitle: "Batch Records",
    outcome: "Cleaner BMR/BPR work with a documented review trail.",
    description:
      "Support for Batch Manufacturing Records (BMR) and Batch Packaging Records (BPR), including drafting support, executed-record review, final review and revision where the scope is agreed.",
    forWhom: [
      "QA teams with batch records waiting for review",
      "Manufacturers preparing or revising BMR/BPR formats",
      "Owners who need a controlled view of recurring documentation gaps",
    ],
    signals: [
      "Missing signatures, dates, values or reconciliation details keep delaying review.",
      "The same record observations repeat across batches.",
      "Internal QA needs temporary review capacity without losing release control.",
    ],
    qorivaraDoes: [
      "Reviews agreed BMR/BPR documents against the client-approved checklist or source requirements.",
      "Captures observations in a structured issue tracker or annotated record set.",
      "Supports revision of formats or controlled drafts where that work is included.",
    ],
    deliverables: [
      "Reviewed or annotated records",
      "Issue tracker or observation summary",
      "Status summary and closeout notes",
    ],
    included: [
      "Defined record types and count",
      "Review checklist alignment",
      "Clarification list for client-authorized personnel",
    ],
    excluded: [
      "Product release authority or batch approval",
      "Regulatory certification or guaranteed inspection outcome",
      "Physical verification unless an on-site scope is separately agreed",
    ],
    clientInputs: [
      "Record type: BMR, BPR or both",
      "Approximate count and urgency",
      "Approved templates, checklists and review expectations",
    ],
    deliveryModes: ["remote", "hybrid", "on-site"],
    modeNote:
      "Executed-record and template review can often be remote after NDA and approved exchange. Physical observation requires an agreed on-site or hybrid scope.",
    engagementModels: ["Batch Record Backlog Sprint", "Documentation Health Check"],
    responsibleRole:
      "Assigned QORIVARA QA professional, with founder-led delivery or review where applicable.",
    timelineFactors: ["Record count", "source quality", "urgency", "iterations", "review checklist maturity"],
    relatedInsightSlug: "common-problems-in-batch-record-review",
    faqs: [
      {
        question: "Can QORIVARA approve or release a batch?",
        answer:
          "No. Final release and regulated approvals remain with the client's authorized personnel.",
      },
      {
        question: "Can only a sample be reviewed first?",
        answer:
          "Yes. A sample review can be used as a Documentation Health Check before a larger sprint.",
      },
    ],
  },
  {
    slug: "sop-documentation",
    family: "Quality Documentation",
    title: "SOP & Controlled Documentation",
    shortTitle: "SOP Documentation",
    outcome: "SOPs that are easier to follow, review and control.",
    description:
      "Preparation, review, revision and cleanup of Standard Operating Procedures and related controlled documents within agreed departments, templates and change-control expectations.",
    forWhom: [
      "Teams with outdated or inconsistent SOPs",
      "Manufacturers preparing a controlled revision set",
      "QA heads who need document structure cleaned without losing ownership",
    ],
    signals: [
      "Procedures no longer match current practice.",
      "Linked forms, logs or references have changed.",
      "Reviewers spend time correcting format, numbering or unclear responsibility.",
    ],
    qorivaraDoes: [
      "Reviews SOPs for clarity, structure, consistency and linked-document alignment.",
      "Supports new drafts or controlled revisions where the client provides approved process inputs.",
      "Maintains a revision/change log for traceable follow-through.",
    ],
    deliverables: ["Annotated SOPs", "revised drafts", "change log", "linked-document observations"],
    included: ["Defined SOP count", "department or process boundary", "format and consistency cleanup"],
    excluded: [
      "Validation of undocumented or unobserved processes",
      "Legal approval or licence interpretation",
      "Training program delivery unless separately qualified and scoped",
    ],
    clientInputs: ["Current SOPs", "approved template", "linked forms/logs", "process owner inputs"],
    deliveryModes: ["remote", "hybrid"],
    modeNote:
      "Document drafting and review are often remote-suitable. Process-observation questions may require hybrid discussion or site context.",
    engagementModels: ["SOP Review Sprint", "Documentation Health Check"],
    responsibleRole: "Assigned QORIVARA documentation/QA professional under the agreed review method.",
    timelineFactors: ["SOP count", "department complexity", "quality of current drafts", "owner review cycles"],
    relatedInsightSlug: "why-sop-revision-matters",
    faqs: [
      {
        question: "Can QORIVARA write a new SOP from scratch?",
        answer:
          "QORIVARA can support drafting, but the client must provide accurate process inputs and retain approval responsibility.",
      },
    ],
  },
  {
    slug: "qa-documentation-review",
    family: "Quality Documentation",
    title: "QA Documentation Review",
    shortTitle: "QA Documentation",
    outcome: "A practical view of documentation gaps before they become bigger issues.",
    description:
      "An umbrella review for controlled QA documents, records and logs where the business needs a structured issue register and work plan.",
    forWhom: ["Owners unsure where to start", "QA teams preparing a cleanup plan", "Businesses with mixed document issues"],
    signals: ["Records feel scattered.", "Teams disagree on priority.", "Audit preparation is becoming reactive."],
    qorivaraDoes: ["Reviews an agreed document sample.", "Identifies repeat gaps.", "Prioritizes next actions."],
    deliverables: ["Issue register", "priority map", "recommended work plan", "closeout discussion"],
    included: ["Sample-based review", "non-confidential context discussion", "service-fit recommendation"],
    excluded: ["Full-site audit", "certification", "legal opinion", "guaranteed compliance outcome"],
    clientInputs: ["Document sample list", "current concern", "sector context", "timeline pressure"],
    deliveryModes: ["remote", "hybrid"],
    modeNote:
      "Best suited to remote or hybrid review after an NDA and approved information-exchange method.",
    engagementModels: ["Documentation Health Check"],
    responsibleRole: "Founder-led qualification with an assigned QORIVARA professional where applicable.",
    timelineFactors: ["sample size", "document mix", "sector", "urgency", "available context"],
    relatedInsightSlug: "5-qa-documentation-checks-before-an-internal-audit",
    faqs: [
      {
        question: "Is this a full audit?",
        answer:
          "No. It is a scoped documentation review unless a broader audit-readiness scope is agreed.",
      },
    ],
  },
  {
    slug: "technical-document-review",
    family: "Quality Documentation",
    title: "Technical Document Review",
    shortTitle: "Technical Documents",
    outcome: "Sharper consistency across COA, specification, STP and TDS documents.",
    description:
      "Review of Certificates of Analysis (COA), specifications, Standard Testing Procedures (STP) and Technical Data Sheets (TDS) against client-approved source requirements.",
    forWhom: ["QA/QC teams with technical document corrections", "Manufacturers standardizing technical document sets"],
    signals: ["Units, identifiers or references vary.", "COAs do not align cleanly with specifications.", "Documents need repeated explanation."],
    qorivaraDoes: ["Checks completeness and internal consistency.", "Reviews alignment with supplied source requirements.", "Flags issues for clarification."],
    deliverables: ["Reviewed documents", "correction list", "consistency observations", "closeout notes"],
    included: ["COA/specification/STP/TDS review", "format and reference consistency", "clarification tracker"],
    excluded: ["Laboratory testing", "method validation", "release authority", "new legal/regulatory interpretation"],
    clientInputs: ["Document types", "approximate volume", "approved source requirements", "review objective"],
    deliveryModes: ["remote", "hybrid"],
    modeNote: "Usually remote-suitable when source requirements and controlled copies are provided securely.",
    engagementModels: ["Documentation Health Check", "fixed document-review sprint"],
    responsibleRole: "Assigned QORIVARA QA documentation professional within verified competence.",
    timelineFactors: ["document volume", "technical complexity", "source clarity", "iteration count"],
    relatedInsightSlug: "coa-review-what-should-qa-look-for",
    faqs: [
      {
        question: "Does QORIVARA perform testing?",
        answer:
          "No. QORIVARA reviews documentation; testing remains with the client's qualified laboratory or approved provider.",
      },
    ],
  },
  {
    slug: "change-control-quality-systems",
    family: "Quality Systems & Readiness",
    title: "Quality-System Documentation & Change Control",
    shortTitle: "Change Control",
    outcome: "Better structure and follow-through for quality-system records.",
    description:
      "Support for change-control documentation, trackers and related Quality Management System records where the work needs clearer structure and ownership.",
    forWhom: ["Teams with pending quality-system records", "QA leaders who need change-control documentation organized"],
    signals: ["Changes are open too long.", "Supporting records are scattered.", "Action owners and evidence needs are unclear."],
    qorivaraDoes: ["Structures records and trackers.", "Clarifies supporting-document needs.", "Helps prepare review-ready documentation."],
    deliverables: ["Change-control documentation support", "tracker cleanup", "evidence/action list", "status summary"],
    included: ["Documentation structure", "record completeness review", "follow-through support"],
    excluded: ["Complex deviation/CAPA leadership", "root-cause investigation ownership", "regulated decision-making"],
    clientInputs: ["Change summary", "current records", "responsible owners", "supporting documents"],
    deliveryModes: ["remote", "hybrid", "on-site"],
    modeNote: "Document work may be remote; context-heavy system work may need hybrid or on-site review.",
    engagementModels: ["fixed scope", "QA Overflow Retainer"],
    responsibleRole: "Assigned QORIVARA professional; specialist work is declined, narrowed or assigned only when qualified capacity exists.",
    timelineFactors: ["record complexity", "number of open changes", "evidence readiness", "stakeholder review"],
    relatedInsightSlug: "what-a-good-self-inspection-should-find",
    faqs: [
      {
        question: "Does this include CAPA investigations?",
        answer:
          "Only documentation support within competence. Complex investigation leadership is future-qualified unless a suitable professional is assigned.",
      },
    ],
  },
  {
    slug: "audit-readiness-self-inspection",
    family: "Quality Systems & Readiness",
    title: "Internal Audit Readiness & Self-Inspection",
    shortTitle: "Audit Readiness",
    outcome: "Prioritized observations before audit pressure becomes reactive.",
    description:
      "Document readiness review, self-inspection support, prioritized observations and action tracking for internal, customer or regulatory-preparation contexts.",
    forWhom: ["Teams with an audit date approaching", "Owners who want gap visibility", "QA teams planning a self-inspection"],
    signals: ["Evidence is scattered.", "Action owners are unclear.", "The team is preparing late or reactively."],
    qorivaraDoes: ["Reviews agreed documents or areas.", "Identifies and prioritizes observations.", "Supports action tracking and readout."],
    deliverables: ["Prioritized gap list", "action/evidence needs", "readout summary", "closeout discussion"],
    included: ["Remote document review or scoped hybrid/on-site assessment", "self-inspection support", "action tracker"],
    excluded: ["Certification", "regulatory inspection", "guarantee of audit outcome", "replacement of authorized personnel"],
    clientInputs: ["Audit/self-inspection type", "expected date", "scope area", "mode preference"],
    deliveryModes: ["remote", "hybrid", "on-site"],
    modeNote:
      "Document readiness can be remote. Physical walkthroughs or observation-based reviews require hybrid/on-site scope.",
    engagementModels: ["Audit Readiness Review", "Documentation Health Check"],
    responsibleRole: "Founder-led or assigned QORIVARA QA professional within available competence.",
    timelineFactors: ["audit date", "scope breadth", "site access", "document readiness", "travel needs"],
    relatedInsightSlug: "5-qa-documentation-checks-before-an-internal-audit",
    faqs: [
      {
        question: "Will this guarantee audit success?",
        answer:
          "No. It helps prepare and prioritize, but outcomes remain dependent on the client's system and authorized responsibilities.",
      },
    ],
  },
  {
    slug: "overflow-qa-support",
    family: "QA Capacity",
    title: "Overflow / Remote QA Support",
    shortTitle: "Overflow QA",
    outcome: "Defined extra QA documentation capacity without unlimited staff augmentation.",
    description:
      "Time-bounded or monthly documentation workload support with agreed task types, capacity, cadence and escalation.",
    forWhom: ["QA teams with recurring document pressure", "Growing manufacturers that need scoped external support"],
    signals: ["Backlog keeps returning.", "Internal QA is stretched.", "Management needs predictable status on documentation work."],
    qorivaraDoes: ["Maintains an agreed work queue.", "Completes defined review/support tasks.", "Provides status cadence and escalation notes."],
    deliverables: ["Managed work queue", "weekly status", "monthly summary", "closeout or next-scope recommendation"],
    included: ["Defined monthly capacity", "approved task types", "status rhythm"],
    excluded: ["Unlimited availability", "employment placement", "statutory role replacement", "unscoped urgent work"],
    clientInputs: ["Expected duration", "workload pattern", "preferred cadence", "task categories"],
    deliveryModes: ["remote", "hybrid"],
    modeNote: "Best for remote documentation work, with hybrid discussion when operational context is needed.",
    engagementModels: ["QA Overflow Retainer", "fixed sprint"],
    responsibleRole: "Assigned QORIVARA professional with escalation to the responsible lead.",
    timelineFactors: ["capacity band", "task mix", "review rhythm", "client response time", "specialist needs"],
    relatedInsightSlug: "common-problems-in-batch-record-review",
    faqs: [
      {
        question: "Is this like hiring a temporary employee?",
        answer:
          "No. It is a scoped service queue with defined capacity, deliverables and responsibility boundaries.",
      },
    ],
  },
];

export const serviceFamilies = [
  "Quality Documentation",
  "Quality Systems & Readiness",
  "QA Capacity",
] as const;

export const productizedOffers = [
  {
    title: "Documentation Health Check",
    scope: "Agreed sample of documents plus a short context discussion.",
    outputs: "Issue register, priority map, recommended work plan and closeout.",
    boundary: "Not a full-site audit, certification or legal opinion.",
  },
  {
    title: "Batch Record Backlog Sprint",
    scope: "Defined record types/count, checklist and review window.",
    outputs: "Reviewed or annotated records, issue tracker, status summary and closeout.",
    boundary: "Client retains approval and product-release responsibility.",
  },
  {
    title: "SOP Review Sprint",
    scope: "Defined SOP count, department and review objective.",
    outputs: "Annotated drafts, revision/change log and finalization support.",
    boundary: "QORIVARA cannot validate undocumented or unobserved processes.",
  },
  {
    title: "Audit Readiness Review",
    scope: "Remote document-only or agreed hybrid/on-site scope.",
    outputs: "Prioritized gap list, action owners, evidence needs and readout.",
    boundary: "No certification or guarantee of audit outcome.",
  },
  {
    title: "QA Overflow Retainer",
    scope: "Agreed task types, monthly capacity, cadence and escalation path.",
    outputs: "Managed queue, weekly status and monthly summary.",
    boundary: "Not unlimited availability or an employment placement.",
  },
];

export function getServiceBySlug(slug: string) {
  return serviceDefinitions.find((service) => service.slug === slug) ?? null;
}
