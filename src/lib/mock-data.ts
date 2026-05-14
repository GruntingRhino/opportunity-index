export type Opportunity = {
  slug: string;
  title: string;
  organization: string;
  type: string;
  location: string;
  compensation: string;
  deadline: string;
  matchScore: number;
  acceptanceRate: string;
  summary: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  skills: string[];
  tags: string[];
  commitment: string;
  questions: string[];
};

export const topNavigation = [
  { href: "/discover", label: "Discover" },
  { href: "/dashboard", label: "Student dashboard" },
  { href: "/organizations", label: "Organizations" },
  { href: "/messages", label: "Messages" },
  { href: "/admin", label: "Admin" },
];

export const footerColumns = [
  {
    title: "Platform",
    links: [
      { href: "/discover", label: "Explore opportunities" },
      { href: "/dashboard", label: "Student dashboard" },
      { href: "/organizations", label: "Organization tools" },
      { href: "/admin", label: "Admin panel" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/help-center", label: "Help center" },
      { href: "/tutorials", label: "Onboarding tutorials" },
      { href: "/walkthroughs", label: "Product walkthroughs" },
      { href: "/contact-support", label: "Contact support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/maintenance", label: "Maintenance status" },
      { href: "/settings", label: "Settings" },
    ],
  },
];

export const landingStats = [
  {
    label: "Active opportunities",
    value: "12,480",
    change: "+18%",
    detail: "Live internships, scholarships, research roles, and student leadership tracks.",
  },
  {
    label: "Verified organizations",
    value: "1,240",
    change: "+9%",
    detail: "Nonprofits, startups, labs, schools, local businesses, and global employers.",
  },
  {
    label: "Application success lift",
    value: "2.8x",
    change: "+31%",
    detail: "Students applying through guided workflows convert materially better than ad hoc outreach.",
  },
];

export const opportunities: Opportunity[] = [
  {
    slug: "northstar-ai-fellowship",
    title: "AI Product Fellowship",
    organization: "Northstar Labs",
    type: "Paid fellowship",
    location: "Remote",
    compensation: "$4,000 stipend",
    deadline: "Closes in 5 days",
    matchScore: 96,
    acceptanceRate: "12%",
    summary:
      "Build applied AI workflows for civic, climate, and education programs with a senior product and engineering team.",
    description:
      "Northstar Labs is selecting a small cohort of technically curious operators to prototype AI tools, ship experiments, and present demo-day outcomes to mission-driven partners.",
    responsibilities: [
      "Prototype workflows with LLMs and internal tools.",
      "Run user interviews with students and nonprofit operators.",
      "Ship weekly product demos and learning memos.",
    ],
    qualifications: [
      "Experience shipping projects in software, design, or research.",
      "Strong written communication and structured thinking.",
      "Interest in social impact and operational leverage.",
    ],
    skills: ["Product thinking", "Prompt design", "User research", "Figma"],
    tags: ["Remote", "Paid", "AI", "Fellowship"],
    commitment: "10 hours per week for 8 weeks",
    questions: [
      "What problem space are you obsessed with right now?",
      "Describe a project you shipped under ambiguity.",
    ],
  },
  {
    slug: "atlas-ventures-student-analyst",
    title: "Venture Student Analyst",
    organization: "Atlas Ventures",
    type: "Internship",
    location: "Hybrid • New York, NY",
    compensation: "$28/hour",
    deadline: "Closes in 12 days",
    matchScore: 91,
    acceptanceRate: "8%",
    summary:
      "Source founders, evaluate markets, and write investment briefs on frontier consumer and climate startups.",
    description:
      "Atlas Ventures wants analytically sharp students who can structure markets quickly, identify breakout signals, and communicate clearly with partners.",
    responsibilities: [
      "Build weekly startup landscape maps.",
      "Join founder diligence and note-taking sessions.",
      "Publish investment memos and sourcing recommendations.",
    ],
    qualifications: [
      "Comfort with spreadsheets, writing, and internet-native research.",
      "Strong interest in startups and market analysis.",
    ],
    skills: ["Research", "Finance", "Market mapping", "Writing"],
    tags: ["Hybrid", "Paid", "Startup", "Internship"],
    commitment: "15 hours per week for 10 weeks",
    questions: [
      "Which early-stage market do you think is underrated?",
      "Share one company you would invest in and why.",
    ],
  },
  {
    slug: "community-code-hackathon",
    title: "Community Code for Good Hackathon",
    organization: "CivicForge",
    type: "Hackathon",
    location: "In person • Chicago, IL",
    compensation: "$15,000 prize pool",
    deadline: "Starts this weekend",
    matchScore: 88,
    acceptanceRate: "24%",
    summary:
      "A 48-hour build sprint focused on transit, health access, food systems, and local community resilience.",
    description:
      "CivicForge brings students, designers, nonprofits, and city partners together to ship practical community software and pitch for continued incubation.",
    responsibilities: [
      "Join or form a cross-functional team.",
      "Build a working prototype with measurable user value.",
      "Pitch to operators, funders, and judges.",
    ],
    qualifications: [
      "Open to students, recent graduates, and early-career builders.",
      "Portfolio or resume encouraged but not required.",
    ],
    skills: ["Rapid prototyping", "Design", "Pitching", "Development"],
    tags: ["In person", "Hackathon", "Community", "Team-based"],
    commitment: "Weekend event",
    questions: ["Which civic problem would you tackle first?"],
  },
];

export const dashboardMetrics = [
  {
    label: "Matched opportunities",
    value: "124",
    change: "+22%",
    detail: "Recommendation quality improved after your profile, GPA, skills, and clubs were synced.",
  },
  {
    label: "Applications in flight",
    value: "18",
    change: "+4",
    detail: "Submitted, interviewing, and shortlisted applications across internships and scholarships.",
  },
  {
    label: "Profile strength",
    value: "92%",
    change: "+11%",
    detail: "Resume, GitHub, certifications, and volunteer hours are all contributing positively.",
  },
];

export const applicationPipeline = [
  { label: "Submitted", count: 7 },
  { label: "Under review", count: 5 },
  { label: "Interview", count: 3 },
  { label: "Accepted", count: 2 },
  { label: "Waitlisted", count: 1 },
  { label: "Rejected", count: 2 },
];

export const organizationMetrics = [
  {
    label: "Qualified applicants",
    value: "348",
    change: "+14%",
    detail: "Applicants with 80%+ skill match and verified education data.",
  },
  {
    label: "Listing conversion",
    value: "11.2%",
    change: "+2.1%",
    detail: "View-to-apply conversion after richer media, salary clarity, and simpler custom questions.",
  },
  {
    label: "Response SLA",
    value: "19 hrs",
    change: "-8 hrs",
    detail: "Median first response time across active applicants and direct messages.",
  },
];

export const adminMetrics = [
  {
    label: "Flag queue",
    value: "23",
    change: "-31%",
    detail: "Content and moderation queue is down after automated trust rules were tightened.",
  },
  {
    label: "Verification backlog",
    value: "42",
    change: "+5",
    detail: "Pending organization verification requests with employer and nonprofit status checks.",
  },
  {
    label: "Weekly retention",
    value: "68%",
    change: "+6%",
    detail: "Seven-day retained users based on discovery, save, apply, and messaging activity.",
  },
];

export const leaderboard = [
  { name: "Ava Chen", xp: "14,280 XP", badge: "Top applicant" },
  { name: "Nia Patel", xp: "13,920 XP", badge: "Research streak" },
  { name: "Lucas Reed", xp: "13,510 XP", badge: "Community builder" },
];

export const testimonials = [
  {
    quote:
      "We replaced five fragmented recruiting tools with one workflow students actually enjoy using.",
    author: "Mina Park",
    role: "Campus Partnerships Lead, Atlas Ventures",
  },
  {
    quote:
      "The recommendation quality is materially better than generic job boards. It feels curated, not noisy.",
    author: "Jordan Ellis",
    role: "CS + Public Policy Student, Northwestern",
  },
  {
    quote:
      "The applicant views, messaging, and verification surfaces feel like a modern ATS instead of a form graveyard.",
    author: "Samir Rahman",
    role: "Programs Director, CivicForge",
  },
];

export const pricingTiers = [
  {
    name: "Launch",
    price: "$0",
    description: "For schools, student clubs, and early organizations publishing basic listings.",
    features: ["1 active listing", "Basic analytics", "Community profile", "Email support"],
  },
  {
    name: "Growth",
    price: "$149",
    description: "For teams actively recruiting students and managing application funnels.",
    features: [
      "Unlimited listings",
      "Applicant pipeline",
      "Custom screening questions",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For universities, accelerators, multi-brand employers, and foundations.",
    features: [
      "SSO and admin controls",
      "Moderation workflows",
      "Advanced analytics",
      "Dedicated success lead",
    ],
  },
];

export const faqs = [
  {
    question: "Can organizations post scholarships and events alongside jobs?",
    answer:
      "Yes. The data model supports scholarships, internships, fellowships, events, mentorship, ambassador programs, and research tracks under one opportunity primitive.",
  },
  {
    question: "Do students need a full resume before signing up?",
    answer:
      "No. Profiles are progressive. Students can start with school, interests, and skills, then improve profile strength over time.",
  },
  {
    question: "Can admins moderate listings before they go live?",
    answer:
      "Yes. Organizations can submit drafts for approval, and moderators can approve, reject, or request edits before publication.",
  },
];

export const messages = [
  {
    sender: "CivicForge",
    preview: "We liked your hackathon submission. Are you open to a follow-up interview?",
    time: "2m ago",
    unread: true,
  },
  {
    sender: "Northstar Labs",
    preview: "Your product fellowship application moved to final review.",
    time: "1h ago",
    unread: false,
  },
  {
    sender: "Atlas Ventures",
    preview: "Can you share a writing sample before Friday?",
    time: "Yesterday",
    unread: false,
  },
];

export const notifications = [
  "Deadline reminder: AI Product Fellowship closes in 5 days.",
  "A new nearby opportunity was posted by Columbia Design Lab.",
  "Your profile was viewed 18 times in the last 72 hours.",
  "Organization verification approved for BrightBridge Foundation.",
];

export const filters = [
  "Remote",
  "In person",
  "Hybrid",
  "Paid",
  "Unpaid",
  "Internship",
  "Volunteering",
  "Scholarship",
  "Research",
  "Startup",
  "Nonprofit",
  "Skill level",
  "Location",
  "Date",
  "Category",
  "Application difficulty",
  "Estimated acceptance rate",
];
