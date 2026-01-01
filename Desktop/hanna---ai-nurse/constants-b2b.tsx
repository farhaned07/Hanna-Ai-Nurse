import React from 'react';
import {
    Clock, AlertTriangle, Hospital, ShieldCheck, Phone, Activity, ArrowRight,
    MessageCircle, Users, CheckCircle, Smartphone, Calendar, UserCheck, Flame, Layout
} from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const HERO_B2B = {
    headline: "The Healthcare System Has a Design Flaw",
    subheadline: "You see a doctor for 15 minutes. Then you disappear for 364 days. Your medication sits on the shelf. Your symptoms get worse. You end up in the ER. The hospital admits you. Everyone acts surprised. This isn't healthcare. It's firefighting.",
    heroBullets: [
        "Hanna is supervised care infrastructure for closing the gap between clinical visits."
    ],
    ctaPrimary: "See the demo",
    ctaSecondary: "Let's talk",
    socialProof: [
        "Licensed clinicians in the loop",
        "Thai language fluency",
        "HIPAA/PDPA compliant"
    ]
};

// ============================================
// PROBLEM SECTION ("The Problem Is Real")
// ============================================
export const PROBLEM_B2B = {
    headline: "The Problem Is Real",
    subheadline: "Healthcare acts like patients only exist during appointments.",
    context: "The gap between visits is where healthcare fails.",
    points: [
        {
            title: "Patients forget medications because nobody checks.",
            icon: <Clock className="w-6 h-6 text-red-500" />
        },
        {
            title: "Complications develop silently. They become emergencies.",
            icon: <AlertTriangle className="w-6 h-6 text-red-500" />
        },
        {
            title: "Nurses drown in administrative work so they can't actually care.",
            icon: <UserCheck className="w-6 h-6 text-red-500" />
        },
        {
            title: "The system optimizes for treating problems, not preventing them.",
            icon: <Flame className="w-6 h-6 text-red-500" />
        },
        {
            title: "The gap between visits is where healthcare fails.",
            icon: <Layout className="w-6 h-6 text-red-500" />
        }
    ],
    summary: "The gap between visits is where healthcare fails."
};

// ============================================
// SOLUTION SECTION ("The Solution" & "How It Actually Works")
// ============================================
export const SOLUTION_B2B = {
    headline: "The Solution",
    subheadline: "Constant engagement. Supervised by humans. Scaled by AI.",
    // Mapping "How It Actually Works" to steps
    steps: [
        {
            title: "Patient talks to Hanna",
            description: "(via LINE, in Thai)",
            icon: <MessageCircle className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Clinical team sees everything",
            description: "(real-time dashboard)",
            icon: <Activity className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Nurses decide and act",
            description: "(Hanna coordinates, never decides)",
            icon: <UserCheck className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Your systems stay yours",
            description: "(EHR integration, you own the data)",
            icon: <ShieldCheck className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Hanna becomes the system of engagement",
            description: "between visits—without replacing your system of record.",
            icon: <ArrowRight className="w-6 h-6 text-hana-primary" />
        }
    ],
    outcome: [
        "Hanna bridges the gap with daily patient check-ins via LINE (Thai language, no app download needed).",
        "Your clinical team sees everything in real-time. They decide what happens. Hanna coordinates.",
        "This is supervised care infrastructure. Not autonomous AI. Not a black box."
    ]
};

// ============================================
// IMPACT SECTION ("Why This Works (In Theory)")
// ============================================
export const IMPACT_B2B = {
    headline: "Why This Works (In Theory)",
    subheadline: "Our model shows:",
    comparison: {
        traditional: {
            label: "Traditional Healthcare",
            items: [
                "Patients disappear for 364 days",
                "Silent complications",
                "Admin overload",
                "Firefighting"
            ]
        },
        hanna: {
            label: "Hanna Model",
            highlight: "Prevention pays for engagement."
        }
    },
    strategy: {
        headline: "Why This Works",
        text: "The logic is unavoidable.",
        reductions: [
            "Patient Engagement: Daily touchpoints create accountability. Early interventions catch problems before they become crises.",
            "Clinical Leverage: Nurses inherit complete context. They escalate what matters. Admin work disappears.",
            "Economic Logic: Healthcare cannot scale by adding staff. Hanna scales care without adding headcount.",
            "Preventing one readmission pays for years of engagement. The math is unavoidable."
        ],
        quote: "Preventing one readmission pays for years of engagement."
    }
};

// ============================================
// TECHNOLOGY SECTION ("The Tech You Need to Know")
// ============================================
export const TECHNOLOGY_B2B = {
    headline: "The Tech You Need to Know",
    subheadline: "Built for Trust. Built for Integration. Built for Scale.",
    pillars: [
        {
            title: "Built for Trust",
            items: [
                "Licensed clinicians in the loop (always)",
                "Thai language fluency (not translation software)",
                "HIPAA/PDPA compliant from day one",
                "Patient data never used for model training"
            ],
            icon: <ShieldCheck className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Built for Integration",
            items: [
                "Works with your existing EHR",
                "Deployed in weeks, not months",
                "No vendor lock-in",
                "Your data stays yours"
            ],
            icon: <Hospital className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Built for Scale",
            items: [
                "Starts small (one patient cohort)",
                "Grows with you",
                "Supervised infrastructure (not autonomous)"
            ],
            icon: <Activity className="w-10 h-10 text-hana-primary" />
        }
    ],
    footer: "Supervised infrastructure (not autonomous)."
};

// ============================================
// COMPARISON SECTION mapped to "What Happens Next"
// ============================================
export const COMPARISON_B2B = {
    headline: "What Happens Next",
    columns: [
        { header: "Timeline", accessor: "time" },
        { header: "Activity", accessor: "activity" }
    ],
    rows: [
        { time: "Week 1", activity: "Discovery call. Map your workflow. Define success metrics." },
        { time: "Week 2-3", activity: "Pilot setup. Integration. Team training." },
        { time: "Week 4", activity: "Go live with your first cohort." },
        { time: "Ongoing", activity: "Real-time feedback. Rapid iteration. Outcome tracking." },
        { time: "Goal", activity: "This is a partnership, not a sale." }
    ]
};

// ============================================
// ECONOMICS SECTION mapped to "Why This Moment"
// ============================================
export const ECONOMICS_B2B = {
    headline: "Why This Moment",
    subheadline: "Healthcare in Southeast Asia is at a inflection point.",
    points: [
        "Chronic disease is exploding.",
        "Hospital capacity is constrained.",
        "Digital adoption is mainstream.",
        "Nurses are burned out."
    ],
    punchline: "The tools exist now. The problem is urgent now. The economics work now. Hanna is built for now.",
    strategicShift: {
        headline: "The Opportunity",
        text: "The tools exist now. The problem is urgent now. The economics work now.",
        highlight: "Hanna is built for now."
    }
};

// ============================================
// WHO IT'S FOR mapped to "What We're Looking For"
// ============================================
export const AUDIENCE_B2B = [
    {
        id: "partners",
        label: "Visionary Leaders",
        challenge: "We're not selling software yet. We're building with visionary healthcare leaders who see the problem and want to solve it.",
        solution: "Deploy with a real patient cohort. Give us honest feedback. Help us validate the model. Be part of the story of healthcare that actually works.",
        fit: "Pilot Partners Needed",
        icon: <Users className="w-5 h-5" />
    }
];

// ============================================
// CLOSING SECTION ("The Long Game")
// ============================================
export const CLOSING_B2B = {
    headline: "The Long Game",
    subheadline: "Most healthtech startups optimize for adoption. We're optimizing for outcomes.",
    text: "Most AI in healthcare promises magic. We're building supervised systems with humans in control. Most pilots disappear. We're building something that scales because it actually works. If you're ready to help us prove this—not with your money, but with your patients and your feedback—let's build together.",
    tagline: "The gap between visits doesn't need to exist. We're going to close it."
};

// ============================================
// FAQ - Minimal or Hidden
// ============================================
export const FAQ_B2B = {
    insurers: [],
    clinics: []
};

// ============================================
// CTA & Footer ("Join Us")
// ============================================
export const FINAL_CTA_B2B = {
    headline: "Join Us",
    subheadline: "We're building the bridge between visits. Healthcare leaders who want outcomes—not demos—are already talking to us.",
    ctaPrimary: "Let's talk – 30-minute fit call",
    ctaSecondary: "See the demo – 2-minute prototype",
    email: "farhan@hanna.care"
};

export const FOOTER_B2B = {
    links: [
        { label: "About Hanna", href: "#" },
        { label: "Contact", href: "mailto:farhan@hanna.care" }
    ],
    resources: [],
    social: {
        linkedin: "#",
        email: "farhan@hanna.care"
    },
    legal: "© 2026 Hanna. Hanna is supervised care infrastructure. Not a licensed healthcare provider."
};
