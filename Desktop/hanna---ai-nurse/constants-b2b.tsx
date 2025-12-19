import {
    Phone, Activity, Pill, Bell, FileHeart, ShieldCheck, CheckCircle, XCircle,
    Clock, Heart, UserCheck, Smartphone, MessageCircle, BarChart3, AlertTriangle,
    Users, Hospital, Building, TrendingUp, Lock, Stethoscope, ArrowRight,
    Search, Database, Brain, Zap, DollarSign, Layout
} from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const HERO_B2B = {
    headline: "Claim Prevention Infrastructure",
    subheadline: "Stop avoidable claims before they exist. Hanna is infrastructure insurers use to intercept, deflect, and resolve health events upstream, before they become claims.",
    heroBullets: [
        "Hanna is not telemedicine.",
        "Not a chatbot.",
        "Not a care app."
    ],
    ctaPrimary: "See the infrastructure",
    ctaSecondary: "View ROI Model",
    socialProof: [
        "Voice-first intake",
        "Real-time risk classification",
        "Immediate care routing"
    ]
};

// ============================================
// PROBLEM SECTION (Sub-Hero)
// ============================================
export const PROBLEM_B2B = {
    headline: "Claims are not a healthcare problem.",
    subheadline: "They are a systems timing problem.",
    context: "Most claims originate from:",
    points: [
        {
            title: "Late intervention",
            icon: <Clock className="w-6 h-6 text-red-500" />
        },
        {
            title: "Ineffective routing",
            icon: <AlertTriangle className="w-6 h-6 text-red-500" />
        },
        {
            title: "ER default behavior",
            icon: <Hospital className="w-6 h-6 text-red-500" />
        },
        {
            title: "Fragmented access",
            icon: <Layout className="w-6 h-6 text-red-500" />
        },
        {
            title: "Zero accountability before escalation",
            icon: <XCircle className="w-6 h-6 text-red-500" />
        }
    ],
    summary: "Hanna closes the gap before cost is created."
};

// ============================================
// SOLUTION SECTION (What Hanna Actually Does)
// ============================================
export const SOLUTION_B2B = {
    headline: "Hanna sits before the claim lifecycle.",
    subheadline: "When a member experiences a symptom, concern, or uncertainty, Hanna becomes the first point of clinical intelligence.",
    steps: [
        {
            title: "Voice-first intake",
            description: "(no app friction)",
            icon: <Phone className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Real-time risk classification",
            description: "",
            icon: <Activity className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Immediate care routing",
            description: "(self-care, GP, specialist, emergency)",
            icon: <ArrowRight className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Early resolution or escalation",
            description: "with context",
            icon: <ShieldCheck className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Continuous follow-up",
            description: "until closure",
            icon: <MessageCircle className="w-6 h-6 text-hana-primary" />
        }
    ],
    outcome: [
        "No claim.",
        "No leakage.",
        "No unnecessary utilization."
    ]
};

// ============================================
// IMPACT SECTION (ROI & Why This Matters)
// ============================================
export const IMPACT_B2B = {
    headline: "Why This Matters to Insurers",
    subheadline: "Every claim prevented is permanent margin.",
    comparison: {
        traditional: {
            label: "Traditional models optimize after utilization:",
            items: [
                "Network discounts",
                "Claims processing",
                "Fraud detection",
                "Post-care analytics"
            ]
        },
        hanna: {
            label: "Hanna operates before utilization exists.",
            highlight: "That is where structural savings live."
        }
    },
    strategy: {
        headline: "Claim Prevention, Not Cost Containment",
        text: "Cost containment negotiates prices. Claim prevention removes events.",
        reductions: [
            "Avoidable ER visits",
            "Redundant diagnostics",
            "Specialist over-referral",
            "Late-stage interventions",
            "Chronic escalation from unmanaged early symptoms"
        ],
        quote: "This is not behavior nudging. This is clinical interception."
    }
};

// ============================================
// TECHNOLOGY SECTION (Infrastructure)
// ============================================
export const TECHNOLOGY_B2B = {
    headline: "Infrastructure, Not a Feature",
    subheadline: "Hanna integrates as a system layer, not a product add-on.",
    pillars: [
        {
            title: "Universal",
            items: ["Works across plans, providers, and channels"],
            icon: <Layout className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Neutral",
            items: ["Neutral to insurer brand and benefit design"],
            icon: <ShieldCheck className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Compatible",
            items: ["Compatible with existing TPAs and claims systems"],
            icon: <Database className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Scalable",
            items: ["Designed for population-scale economics"],
            icon: <TrendingUp className="w-10 h-10 text-hana-primary" />
        }
    ],
    footer: "Members interact with care. Insurers interact with outcomes."
};

// ============================================
// COMPARISON SECTION (Why Hanna Wins)
// ============================================
export const COMPARISON_B2B = {
    headline: "Why Hanna Wins Where Others Fail",
    columns: [
        { header: "Others", accessor: "others" },
        { header: "Hanna", accessor: "hanna" }
    ],
    rows: [
        { others: "App-first", hanna: "Voice-first" },
        { others: "Engagement-driven", hanna: "Event-driven" },
        { others: "Post-claim analytics", hanna: "Pre-claim interception" },
        { others: "Member UX focus", hanna: "Insurer economics focus" },
        { others: "Point solutions", hanna: "System layer" }
    ]
};

// ============================================
// ECONOMICS SECTION
// ============================================
export const ECONOMICS_B2B = {
    headline: "The Economic Reality",
    subheadline: "The economic alignment is explicit:",
    points: [
        "Fixed pilot investment",
        "Outcome-driven evaluation",
        "Direct linkage to avoided admissions, ER visits, and complication escalation"
    ],
    punchline: "If claims do not materially decline, Hanna has failed its purpose.",
    strategicShift: {
        headline: "The Strategic Shift",
        text: "Insurers don't need more digital health products. They need a control surface before claims form.",
        highlight: "Hanna is that surface."
    }
};

// ============================================
// WHO IT'S FOR (Kept from previous)
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
// CLOSING SECTION
// ============================================
export const CLOSING_B2B = {
    headline: "The future of insurance is not better claims processing.",
    subheadline: "It is fewer claims.",
    text: "Hanna makes that future operational.",
    tagline: "Claim Prevention Infrastructure."
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
