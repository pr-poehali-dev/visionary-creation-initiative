export const HERO_IMG = "https://cdn.poehali.dev/projects/f6b270c4-6398-4112-933d-3f405f34b9c3/files/2d18828e-6569-4f76-8e8b-28b16467fc41.jpg";
export const PHONE_IMG = "https://cdn.poehali.dev/projects/f6b270c4-6398-4112-933d-3f405f34b9c3/files/627c8e84-4692-4025-8a8e-319d80f33cb5.jpg";
export const STEPS_IMG = "https://cdn.poehali.dev/projects/f6b270c4-6398-4112-933d-3f405f34b9c3/files/31be389b-05a7-46af-8800-34998886d965.jpg";

export const STATS = [
  { value: "180M+", label: "Monthly views" },
  { value: "90%", label: "Completion rate" },
  { value: "3x", label: "Brand recall" },
  { value: "60s", label: "Time to launch" },
];

export const BENEFITS = [
  {
    icon: "👁",
    title: "Attention",
    desc: "90% higher completion rates than horizontal ads. Viewers stay glued to vertical content.",
  },
  {
    icon: "⚡",
    title: "Algorithm Power",
    desc: "One viral video generates free organic reach for months — no extra budget needed.",
  },
  {
    icon: "🛡",
    title: "Ad Immunity",
    desc: 'Users skip "Ads," but they watch "Content." We make your logo part of the story.',
  },
];

export const STEPS = [
  {
    num: "01",
    title: "Select Niche",
    desc: "Pick your target audience from 20+ content verticals — fitness, tech, lifestyle, gaming & more.",
  },
  {
    num: "02",
    title: "Submit Logo",
    desc: "Upload your branding assets in any format. Our team handles all the creative integration.",
  },
  {
    num: "03",
    title: "We Place & Promote",
    desc: "Our 500+ vetted creators seamlessly integrate your brand and push it across platforms.",
  },
];

export const PLANS = [
  {
    name: "Starter",
    price: "$499",
    period: "/ month",
    color: "border-gray-800",
    features: ["5 creator placements", "1 niche category", "Basic analytics", "Instagram Reels only"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    period: "/ month",
    color: "border-green-500",
    features: ["20 creator placements", "3 niche categories", "Advanced analytics", "Reels + YouTube Shorts", "Priority support"],
    cta: "Book a Demo",
    highlight: true,
  },
  {
    name: "Scale",
    price: "$3,499",
    period: "/ month",
    color: "border-gray-800",
    features: ["Unlimited placements", "All niches", "Real-time dashboard", "All platforms", "Dedicated manager"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export const FAQS = [
  {
    q: "What kind of brands do you work with?",
    a: "We work with brands of all sizes — from startups to Fortune 500s. If you have a logo and an audience you want to reach, we can place it.",
  },
  {
    q: "How soon can my logo go live?",
    a: "After assets submission, your brand starts appearing in content within 48–72 hours.",
  },
  {
    q: "Are placements disclosed as ads?",
    a: "Our placements are native — they blend into the content naturally. We stay compliant with platform guidelines.",
  },
  {
    q: "Can I choose which creators I work with?",
    a: "On Growth and Scale plans you can browse and approve creators before they go live with your brand.",
  },
];

export default function ReelNatLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#0a0a0a"/>
      <rect x="3" y="4" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <rect x="3" y="10" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <rect x="3" y="16" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <rect x="3" y="22" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <rect x="26" y="4" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <rect x="26" y="10" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <rect x="26" y="16" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <rect x="26" y="22" width="3" height="3" rx="0.5" fill="#22c55e" opacity="0.7"/>
      <path d="M13 11L22 16L13 21V11Z" fill="#22c55e"/>
      <path d="M13 11L22 16L13 21V11Z" fill="url(#glow)" opacity="0.4"/>
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4ade80"/>
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}
