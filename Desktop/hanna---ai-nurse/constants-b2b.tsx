import {
    Phone, Activity, Pill, Bell, FileHeart, ShieldCheck, CheckCircle, XCircle,
    Clock, Heart, UserCheck, Smartphone, MessageCircle, BarChart3, AlertTriangle,
    Users, Hospital, Building, TrendingUp, Lock, Stethoscope, ArrowRight
} from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const HERO_B2B = {
    headline: "Contain chronic disease risk. Reduce claims by 30%.",
    subheadline: "A nurse force-multiplier for insurers. Our risk engine filters routine data, allowing nurses to focus on clinically significant risks that drive costly hospitalizations.",
    ctaPrimary: "Calculate your savings",
    ctaSecondary: "View safety protocol",
    socialProof: [
        "Production-ready safety net",
        "Built for Thai Medical Council compliance",
        "Deterministic risk protocols"
    ]
};

// ============================================
// PROBLEM SECTION
// ============================================
export const PROBLEM_B2B = {
    headline: "The unmonitored gap leaks millions",
    columns: [
        {
            title: "The blind spot",
            stats: [
                "Patients are unseen for most of the year",
                "Complications develop quietly between visits"
            ],
            icon: <Clock className="w-8 h-8 text-red-500" />
        },
        {
            title: "The scale constraint",
            stats: [
                "Daily outreach does not scale with human staffing",
                "Nurse capacity is finite"
            ],
            icon: <Users className="w-8 h-8 text-red-500" />
        },
        {
            title: "The financial impact",
            stats: [
                "Missed early signals lead to preventable emergency admissions",
                "Often exceeding ฿250,000 per event"
            ],
            icon: <TrendingUp className="w-8 h-8 text-red-500" />
        }
    ]
};

// ============================================
// SOLUTION SECTION
// ============================================
export const SOLUTION_B2B = {
    headline: "A layered risk management workflow",
    subheadline: "We turn 'Passive Payer' into 'Active Partner' without adding headcount.",
    steps: [
        {
            title: "Phase 1 — Monitoring",
            time: "Daily",
            description: "Daily check-ins via LINE capture vitals and medication adherence without requiring app downloads.",
            icon: <MessageCircle className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Phase 2 — Analysis",
            time: "Real-time",
            description: "A deterministic risk engine scores incoming data, filtering routine information and flagging clinically relevant patterns.",
            icon: <Activity className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Phase 3 — Intervention",
            time: "Exception-Only",
            description: "Licensed nurses review exceptions only, extending effective coverage to approximately 200 patients per nurse.",
            icon: <UserCheck className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Outcome",
            time: "Result",
            description: "Risk contained before hospitalization.",
            icon: <ShieldCheck className="w-6 h-6 text-hana-primary" />
        }
    ]
};

// ============================================
// IMPACT SECTION (ROI)
// ============================================
export const IMPACT_B2B = {
    headline: "Force multiplication with measurable ROI",
    disclaimer: "Based on published clinical literature and early pilot benchmarks. Results vary by population and condition.",
    caseStudy: {
        title: "Indicative outcomes",
        subtitle: "Reduced preventable hospitalizations. Lower cost per maintained member. Scalable nursing coverage."
    }
};

// ============================================
// TECHNOLOGY SECTION
// ============================================
export const TECHNOLOGY_B2B = {
    headline: "Built for scale. Designed for audit.",
    pillars: [
        {
            title: "Clinical logic",
            items: [
                "Deterministic, rules-based scoring",
                "Transparent risk criteria",
                "Auditable decision paths"
            ],
            icon: <ShieldCheck className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Clinical oversight",
            items: [
                "Nurse-supervised workflows",
                "Physician escalation when required",
                "Thai Medical Council–aligned protocols"
            ],
            icon: <Stethoscope className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Enterprise platform",
            items: [
                "PDPA-compliant data handling",
                "Local data residency",
                "Standards-based integration (HL7 / FHIR)"
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
        label: "Health insurers",
        challenge: "Reduce exposure to preventable complications by managing chronic risk earlier.",
        solution: "",
        fit: "High-Risk Chronic Cohorts",
        icon: <Building className="w-5 h-5" />
    },
    {
        id: "employers",
        label: "Self-insured employers",
        challenge: "Lower severity and absenteeism driven by unmanaged chronic conditions.",
        solution: "",
        fit: "500+ Lives",
        icon: <Users className="w-5 h-5" />
    },
    {
        id: "hospitals",
        label: "Hospital systems",
        challenge: "Extend nursing reach beyond discharge and reduce avoidable readmissions.",
        solution: "",
        fit: "Post-Discharge Monitoring",
        icon: <Hospital className="w-5 h-5" />
    }
];

// ============================================
// PILOT PROGRAM
// ============================================
export const PILOT_B2B = {
    headline: "Prove the impact in 90 days",
    features: [
        "50–100 high-risk members",
        "Full platform deployment",
        "Nurse supervision included",
        "Weekly outcome reporting"
    ],
    pricing: {
        title: "Pilot scope",
        description: ""
    },
    timeline: [],
    cta: "Deploy the Safety Net",
    scarcity: "Limited Q1 pilot capacity."
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
            q: "How is this different from call centers?",
            a: "Call centers scale linearly with staff. This model scales by filtering routine data and focusing human effort on exceptions."
        },
        {
            q: "What about AI hallucinations?",
            a: "All risk assessments use deterministic, rules-based scoring. No autonomous clinical decisions are made."
        },
        {
            q: "What if members do not use LINE?",
            a: "SMS-based workflows are available as a fallback."
        }
    ],
    clinics: []
};

// ============================================
// CTA & Footer
// ============================================
export const FINAL_CTA_B2B = {
    headline: "Reduce severity before it becomes a claim.",
    subheadline: "See how the risk engine extends nursing coverage across your member population.",
    ctaPrimary: "See the model",
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
