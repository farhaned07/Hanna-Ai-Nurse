import {
    Phone, Activity, Pill, Bell, FileHeart, ShieldCheck, CheckCircle, XCircle,
    Clock, Heart, UserCheck, Smartphone, MessageCircle, BarChart3, AlertTriangle,
    Users, Hospital, Building, TrendingUp, Lock, Stethoscope, ArrowRight
} from 'lucide-react';

// ============================================
// HERO SECTION
// ============================================
export const HERO_B2B = {
    headline: "Reduce Insurance Claims by 30%+ Through AI-Powered Patient Monitoring",
    subheadline: "Daily voice check-ins via LINE catch chronic disease complications before they become ER visits. One nurse supervises 100-200 patients.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "View Pilot Proposal",
    socialProof: [
        "Launching Q1 2026",
        "Backed by Clinical Research",
        "PDPA Compliant",
        "Built for Thai Insurers"
    ]
};

// ============================================
// PROBLEM SECTION
// ============================================
export const PROBLEM_B2B = {
    headline: "Thai Insurers Lose ฿139B Annually on Preventable Chronic Disease Complications",
    columns: [
        {
            title: "The Gap",
            stats: [
                "Patients see doctors 4× per year",
                "361 days unmonitored",
                "Complications develop silently"
            ],
            icon: <Clock className="w-8 h-8 text-red-500" />
        },
        {
            title: "The Cost",
            stats: [
                "฿250K avg hospitalization",
                "15-20% of diabetics hospitalized annually",
                "30-40% preventable with early intervention"
            ],
            icon: <TrendingUp className="w-8 h-8 text-red-500" />
        },
        {
            title: "Traditional Solutions Fail",
            stats: [
                "Call centers: ฿300-500/patient/month",
                "Wellness apps: <10% engagement",
                "Monthly check-ins: Miss critical windows"
            ],
            icon: <XCircle className="w-8 h-8 text-red-500" />
        }
    ]
};

// ============================================
// SOLUTION SECTION
// ============================================
export const SOLUTION_B2B = {
    headline: "Hanna Fills the 361-Day Gap",
    subheadline: "Voice-first AI + licensed nurse supervision = scalable, affordable, continuous care",
    steps: [
        {
            title: "Daily Voice Check-in",
            time: "08:00 AM",
            description: "AI calls patient via LINE. 'สวัสดีค่ะ วัดน้ำตาลวันนี้เท่าไหร่คะ?' Patient responds naturally by voice or text.",
            icon: <Phone className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Intelligent Triage",
            time: "08:00-08:30 AM",
            description: "AI analyzes 200 responses simultaneously. 85% normal → Auto-logged. 15% flagged → Nurse review queue.",
            icon: <Activity className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Nurse Supervision",
            time: "08:30-10:30 AM",
            description: "Licensed nurse reviews flagged cases. Yellow flags → Document/Schedule follow-up. Red flags → Call patient.",
            icon: <UserCheck className="w-6 h-6 text-hana-primary" />
        },
        {
            title: "Early Intervention",
            time: "Ongoing",
            description: "Medication adjusted before ER needed. ฿250K hospitalization prevented. Patient stays healthy.",
            icon: <Heart className="w-6 h-6 text-hana-primary" />
        }
    ]
};

// ============================================
// IMPACT SECTION (ROI)
// ============================================
export const IMPACT_B2B = {
    headline: "The ROI for Insurers",
    disclaimer: "Based on clinical literature showing 30-40% reduction in preventable hospitalizations through remote patient monitoring programs.",
    caseStudy: {
        title: "Pilot launching January 2026 with [Clinic Name]",
        subtitle: "Results available March 2026."
    }
};

// ============================================
// TECHNOLOGY SECTION
// ============================================
export const TECHNOLOGY_B2B = {
    headline: "Built for Scale, Designed for Safety",
    pillars: [
        {
            title: "Voice-First AI",
            items: [
                "Natural Thai language conversations",
                "<2 second response time",
                "Works on any phone (no app download)",
                "LINE integration (95M+ Thai users)"
            ],
            icon: <MessageCircle className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Clinical Supervision",
            items: [
                "Every interaction reviewed by licensed nurses",
                "Real-time escalation protocols",
                "Integration with doctor workflows",
                "Thai Medical Council compliant"
            ],
            icon: <Stethoscope className="w-10 h-10 text-hana-primary" />
        },
        {
            title: "Enterprise-Grade Platform",
            items: [
                "Multi-tenant SaaS architecture",
                "Claims data integration (HL7/FHIR)",
                "Real-time insurer dashboard",
                "PDPA compliant, SOC2 roadmap"
            ],
            icon: <ShieldCheck className="w-10 h-10 text-hana-primary" />
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
        challenge: "Rising claims costs, aging population, chronic disease epidemic",
        solution: "Reduce claims by catching problems early. Pay only ฿100-150/member/month, save ฿50K-200K per prevented complication.",
        fit: "10,000+ chronic disease members, claims data access, 90-day pilot commitment",
        icon: <Building className="w-5 h-5" />
    },
    {
        id: "employers",
        label: "Self-Insured Employers",
        challenge: "Employee health costs rising 14%+ annually, high diabetes/hypertension prevalence",
        solution: "Reduce absenteeism, prevent expensive hospitalizations, improve employee wellness scores",
        fit: "500+ employees, existing health insurance program, HR champion",
        icon: <Users className="w-5 h-5" />
    },
    {
        id: "hospitals",
        label: "Hospital Systems",
        challenge: "Post-discharge readmissions, limited nursing capacity, value-based care contracts",
        solution: "Extend nursing reach, monitor discharged patients, prevent 30-day readmissions",
        fit: "100+ chronic disease admissions/month, existing nurse team, Bangkok area",
        icon: <Hospital className="w-5 h-5" />
    }
];

// ============================================
// PILOT PROGRAM
// ============================================
export const PILOT_B2B = {
    headline: "Launch Pilots Available: Q1 2026",
    features: [
        "90-day proof-of-concept",
        "50-100 high-risk patients",
        "Full platform setup (no IT required)",
        "Licensed nurse team provided",
        "Real-time dashboard access",
        "Weekly outcome reporting",
        "Claims data integration"
    ],
    pricing: {
        title: "Risk-share pricing model",
        description: "You pay based on results achieved. If we don't reduce hospitalizations by 25%+, we refund 50%."
    },
    timeline: [
        { month: "Jan 2026", event: "Pilot launches" },
        { month: "Mar 2026", event: "90-day results" },
        { month: "Apr 2026", event: "Scale to full member base" }
    ],
    cta: "Book Pilot Planning Call",
    scarcity: "Limited to 3 pilots in Q1 2026. 1 slot remaining."
};

// ============================================
// TEAM
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
            q: "How is this different from call center monitoring?",
            a: "Call centers cost ฿300-500/patient/month and reach patients weekly or monthly. Hanna costs ฿100-150/month and monitors daily via voice AI, with nurses reviewing only flagged cases."
        },
        {
            q: "What if patients don't use LINE?",
            a: "95% of Thai smartphone users have LINE. For the 5% without, we provide simple SMS-based check-ins as backup."
        },
        {
            q: "How do you ensure clinical accuracy?",
            a: "Every interaction is supervised by licensed Thai nurses. AI flags patterns, humans make medical decisions. We never change medications without doctor authorization."
        },
        {
            q: "What's the patient adoption rate?",
            a: "Remote patient monitoring programs globally achieve 70-85% daily engagement when voice-enabled and culturally adapted. Our pilot will measure this."
        },
        {
            q: "Can you integrate with our claims system?",
            a: "Yes. We support HL7/FHIR standards and can build custom integrations during pilot phase."
        }
    ],
    clinics: [
        {
            q: "Do we need to hire more nurses?",
            a: "No. Your existing nurses use Hanna to extend their capacity. One nurse can supervise 100-200 patients through intelligent triage."
        },
        {
            q: "What if a patient has an emergency?",
            a: "Red flag alerts notify your nurse within 1 minute. System includes built-in escalation to 1669 emergency services if patient reports severe symptoms."
        }
    ]
};

// ============================================
// CTA & Footer
// ============================================
export const FINAL_CTA_B2B = {
    headline: "Ready to Reduce Your Claims Costs?",
    subheadline: "Book a 15-minute demo to see how Hanna works for your member population.",
    ctaPrimary: "Book a Demo",
    ctaSecondary: "Download Pilot Proposal",
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
    legal: "© 2026 Hanna. Hanna is a healthcare technology platform. We are not a licensed healthcare provider. All medical decisions are made by licensed physicians and nurses."
};
