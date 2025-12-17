import {
    Phone, Activity, Pill, Bell, FileHeart, ShieldCheck, CheckCircle, XCircle,
    Clock, Heart, UserCheck, Smartphone, MessageCircle, BarChart3, AlertTriangle,
    Users, Hospital, Building, TrendingUp, Lock, Stethoscope, ArrowRight
} from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const HERO_B2B = {
    headline: "Contain Chronic Disease Risk. Reduce Claims by 30%.",
    subheadline: "The First 'Nurse Force-Multiplier' for Insurers. Our proprietary risk engine filters 95% of noise, allowing your nurses to intercept the critical 5% of risks that cause expensive hospitalizations.",
    ctaPrimary: "Calculate Your Savings",
    ctaSecondary: "View Safety Protocol",
    socialProof: [
        "Production-Ready Safety Net",
        "Built for Thai Medical Council Compliance",
        "Deterministic Risk Protocols"
    ]
};

// ============================================
// PROBLEM SECTION
// ============================================
export const PROBLEM_B2B = {
    headline: "The 361 days 'Unmonitored Gap' is Leaking Millions",
    columns: [
        {
            title: "The Blind Spot",
            stats: [
                "Patients are invisible for 361 days/year",
                "Complications brew in silence",
                "Risk compounds unseen"
            ],
            icon: <Clock className="w-8 h-8 text-red-500" />
        },
        {
            title: "The Scale Problem",
            stats: [
                "10 nurses vs 4,000 patients",
                "Impossible to check everyone daily",
                "Reactive instead of proactive"
            ],
            icon: <Users className="w-8 h-8 text-red-500" />
        },
        {
            title: "The Financial Leak",
            stats: [
                "Missed early signals",
                "Preventable ER visits @ ฿250k each",
                "Claims ratio spirals"
            ],
            icon: <TrendingUp className="w-8 h-8 text-red-500" />
        }
    ]
};

// ============================================
// SOLUTION SECTION
// ============================================
export const SOLUTION_B2B = {
    headline: "A Multi-Layer Safety Net",
    subheadline: "We turn 'Passive Payer' into 'Active Partner' without adding headcount.",
    steps: [
        {
            title: "Phase 1 (Automated)",
            time: "08:00 AM",
            description: "Daily checks via LINE (Vitals, Meds, Symptoms). Frictionless & cost near-zero.",
            icon: <MessageCircle className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Phase 2 (Analysis)",
            time: "Real-time",
            description: "Proprietary risk engine scores vitals (0-10). We filter the noise so you don't pay for false alarms.",
            icon: <Activity className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Phase 3 (Intervention)",
            time: "Exception-Only",
            description: "Nurses focus ONLY on high-risk exceptions. 1 Nurse monitors 200+ lives.",
            icon: <UserCheck className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "The Result",
            time: "Ongoing",
            description: "Risk contained. Hospitalization prevented. Claim avoided.",
            icon: <ShieldCheck className="w-6 h-6 text-hana-primary" />
        }
    ]
};

// ============================================
// IMPACT SECTION (ROI)
// ============================================
export const IMPACT_B2B = {
    headline: "Force Multiplication = 3.5x ROI",
    disclaimer: "Based on 30-40% reduction in hospitalization rates and reduced cost-to-serve.",
    caseStudy: {
        title: "Thai Pilot Cohort launching Q1 2026",
        subtitle: "Clinical workflow optimised."
    }
};

// ============================================
// TECHNOLOGY SECTION
// ============================================
export const TECHNOLOGY_B2B = {
    headline: "Governance You Can Trust",
    pillars: [
        {
            title: "Audit-Ready Claims",
            items: [
                "Every risk score logged",
                "Nurse actions time-stamped",
                "Full clinical audit trail",
                "HL7/FHIR ready"
            ],
            icon: <FileHeart className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Deterministic Logic",
            items: [
                "Rules-based scoring engine",
                "No 'black box' liabilities",
                "Transparent risk criteria",
                "Medical Council compliant"
            ],
            icon: <ShieldCheck className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Data Sovereign",
            items: [
                "PDPA Compliant",
                "AES-256 Encryption",
                "Data stays in Thailand",
                "Tier 3 Data Center"
            ],
            icon: <Lock className="w-10 h-10 text-hana-primary" />
        }
    ]
};

// ============================================
// WHO IT'S FOR
// ============================================
export const AUDIENCE_B2B = [
    {
        id: "insurers",
        label: "Health Insurers",
        challenge: "Rising chronic disease claims and preventable ER visits.",
        solution: "Stop paying for preventable complications. Scale your care management 10x without hiring an army of nurses.",
        fit: "High-Risk Chronic Cohorts",
        icon: <Building className="w-5 h-5" />
    },
    {
        id: "employers",
        label: "Self-Insured Employers",
        challenge: "Rising loss ratios and employee absenteeism.",
        solution: "Protect your bottom line from the silent killer of productivity. Keep your workforce healthy and strictly control costs.",
        fit: "500+ Lives",
        icon: <Users className="w-5 h-5" />
    },
    {
        id: "hospitals",
        label: "Hospital Systems",
        challenge: "High 30-day readmission rates and nurse burnout.",
        solution: "Extend your nursing reach post-discharge. Prevent bounce-backs with a safety net that doesn't burn out your staff.",
        fit: "Post-Discharge Monitoring",
        icon: <Hospital className="w-5 h-5" />
    }
];

// ============================================
// PILOT PROGRAM
// ============================================
export const PILOT_B2B = {
    headline: "Prove the ROI in 90 Days",
    features: [
        "Deploy the Multi-Layer Safety Net",
        "Includes OneBrain™ Intelligence Engine",
        "Full Nurse Dashboard Access",
        "LINE Patient Front-End (Tier 0)",
        "Weekly Risk & Claims Reporting",
        "100 High-Risk Member Licenses"
    ],
    pricing: {
        title: "Risk-Share Model",
        description: "We are confident in our outcomes. We share the risk to prove the value."
    },
    timeline: [
        { month: "Jan 15", event: "Onboarding Closes" },
        { month: "Feb 1", event: "Pilot Go-Live" },
        { month: "Apr 30", event: "ROI Review" }
    ],
    cta: "Deploy the Safety Net",
    scarcity: "2 of 3 Pilot Slots Reserved. 1 Remaining."
};

// ============================================
// TEAM (Unused but kept for structure)
// ============================================
export const TEAM_B2B = {
    headline: "Built by Healthcare + AI Experts",
    members: [
        {
            name: "Farhan [Last Name]",
            role: "Founder & CEO",
            bio: "Ex-Google Deepmind (simulated), 10+ years in AI & Health Tech.",
        },
        {
            name: "Dr. [Name]",
            role: "Clinical Advisor",
            bio: "Endocrinologist, Chief of Medicine at [Hospital].",
        },
        {
            name: "Nurse [Name], RN",
            role: "Clinical Operations",
            bio: "15 years experience in ICU and home care.",
        }
    ],
    backedBy: "Pre-seed stage, backed by founders"
};

// ============================================
// FAQ
// ============================================
export const FAQ_B2B = {
    insurers: [
        {
            q: "Why not just hire more nurses?",
            a: "Scaling nurses is linear and expensive (1 nurse : 50 patients). Hanna is exponential (1 nurse : 200+ patients). We give your team superpowers."
        },
        {
            q: "Is this a chatbot?",
            a: "No. Hanna is a Clinical Safety Net. The chat is just the interface; the value is the risk engine that filters noise for your team."
        },
        {
            q: "What about hallucinations?",
            a: "Our engine uses deterministic, rules-based scoring for all risk assessments. AI is used only for engagement, never for diagnosis."
        },
        {
            q: "How does it reduce claims?",
            a: "By catching complications in the '361-day blind spot'. Early intervention costs a fraction of a preventable ER visit."
        },
        {
            q: "Is patient data safe?",
            a: "Yes. We use AES-256 encryption and store data in Thailand-based Tier 3 data centers, fully compliant with PDPA."
        },
        {
            q: "Can we integrate with our systems?",
            a: "Yes. The platform is HL7/FHIR ready for seamless claims and clinical data exchange."
        }
    ],
    clinics: [] // Combined into one main list for cleaner UI
};

// ============================================
// CTA & Footer
// ============================================
export const FINAL_CTA_B2B = {
    headline: "Stop the Severity Creep.",
    subheadline: "See how our risk engine turns 10 nurses into 100. Schedule a briefing.",
    ctaPrimary: "See the Model",
    ctaSecondary: "Download Specs",
    email: "farhan@hanna.care"
};

export const FOOTER_B2B = {
    links: [
        { label: "About Hanna", href: "#" },
        { label: "How It Works", href: "#" },
        { label: "Pilot Program", href: "#" },
        { label: "Contact", href: "#" }
    ],
    resources: [
        { label: "Clinical Research", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "ROI Calculator", href: "#" }
    ],
    social: {
        linkedin: "#",
        email: "farhan@hanna.care"
    },
    legal: "© 2026 Hanna. Hanna is a managed healthcare technology and clinical support platform. We are not a licensed healthcare provider. All medical decisions are made by licensed physicians and nurses."
};
