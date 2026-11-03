import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiAngular, SiDocker, SiExpress, SiFirebase, SiGithubactions, SiGo, SiJest, SiJsonwebtokens, SiMongodb,
  SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiSocketdotio, SiTailwindcss, SiTypescript,
} from "react-icons/si";

export type Tech = { name: string; icon: IconType; color: string };
export type Tone = "blue" | "green" | "purple" | "amber";
export type Visual = "terminal" | "heatmap" | "bundle" | "roles" | "pipeline" | "migration";
export type Project = {
  title: string;
  description: string;
  tags: { label: string; tone: Tone }[];
  tech?: Tech[];
  results?: string[];
  visual?: Visual;
};
export type Release = {
  version: string;
  period: string;
  role: string;
  summary: string;
  current?: boolean;
  projects: Project[];
};

const t = (name: string, icon: IconType, color: string): Tech => ({ name, icon, color });

export const tech = {
  react: t("React", SiReact, "#149ECA"),
  next: t("Next.js", SiNextdotjs, "#000000"),
  angular: t("Angular", SiAngular, "#DD0031"),
  ts: t("TypeScript", SiTypescript, "#3178C6"),
  tailwind: t("Tailwind", SiTailwindcss, "#06B6D4"),
  ws: t("WebSocket", SiSocketdotio, "#010101"),
  gha: t("GitHub Actions", SiGithubactions, "#2088FF"),
  go: t("Go", SiGo, "#00ADD8"),
  node: t("Node.js", SiNodedotjs, "#5FA04E"),
  express: t("Express", SiExpress, "#000000"),
  jwt: t("JWT", SiJsonwebtokens, "#000000"),
  mongo: t("MongoDB", SiMongodb, "#47A248"),
  pg: t("PostgreSQL", SiPostgresql, "#4169E1"),
  fb: t("Firebase", SiFirebase, "#FFA000"),
  aws: t("AWS", FaAws, "#FF9900"),
  docker: t("Docker", SiDocker, "#2496ED"),
  jest: t("Jest", SiJest, "#C21325"),
};

export const profile = {
  name: "Amandeep Singh",
  initials: "AS",
  title: "Senior Software Engineer",
  company: "uTrade Solutions",
  location: "Chandigarh, India",
  email: "amandeep08saini@gmail.com",
  phone: "+91-6239981789",
  linkedin: "https://linkedin.com/in/amandeep-singh-adssd/",
  resume: "/Amandeep-Singh-Resume.pdf",
  status: "Open to opportunities",
  eyebrow: "FULL-STACK ENGINEER · FINTECH · 4 YEARS",
  summary:
    "I build the trading assistants, KYC platforms and encrypted storage that financial teams rely on: React and TypeScript on the front, Go and Node behind it, AWS and Docker underneath. Clean architecture, measurable results, and people who enjoy working with me.",
  facts: [
    { label: "DOMAIN", value: "Trading, KYC, secure storage" },
    { label: "APPROACH", value: "SOLID, design patterns, CI/CD" },
    { label: "STRENGTH", value: "System design and performance" },
    { label: "TEAMWORK", value: "Agile, code review, mentoring" },
  ],
};

export const metrics = [
  { value: "500+", label: "active users on AI trading interfaces", tag: "LIVE", tone: "green" as Tone, icon: "users" },
  { value: "10,000+", label: "KYC submissions reviewed securely", tag: "RBAC", tone: "purple" as Tone, icon: "shield" },
  { value: "~40%", label: "app performance gain after optimization", tag: "↑ FASTER", tone: "green" as Tone, icon: "zap" },
  { value: "-35%", label: "bundle size, 500 KB down to 350 KB", tag: "↓ SMALLER", tone: "amber" as Tone, icon: "package" },
];

export const stack = [
  { title: "Frontend", items: [tech.react, tech.next, tech.angular, tech.ts, tech.tailwind] },
  { title: "Backend", items: [tech.go, tech.node, tech.express] },
  { title: "Data", items: [tech.pg, tech.mongo, tech.fb] },
  { title: "Cloud and DevOps", items: [tech.aws, tech.docker, tech.gha, tech.jest] },
];

export const releases: Release[] = [
  {
    version: "v3.0",
    period: "May 2024 – Present",
    role: "Senior Software Engineer",
    summary: "Led frontend for real-time AI interfaces and mentored two junior engineers on reviews and component design.",
    current: true,
    projects: [
      {
        title: "uAlgos AI Trading Assistant",
        description:
          "Multi-thread chat strategy builder with websocket-streamed responses and a custom in-app IDE for editing AI-generated strategies. Backtests render as a calendar heatmap with a trade-level breakdown.",
        tags: [{ label: "feat", tone: "blue" }, { label: "ai", tone: "purple" }],
        tech: [tech.react, tech.ts, tech.ws, tech.gha],
        results: ["↑ ~40% faster strategy design"],
        visual: "terminal",
      },
      {
        title: "Angular to React migration via Module Federation",
        description:
          "Moved a legacy Angular codebase to React with a phased rollout alongside the live app. Added code-splitting, lazy loading and state-management tuning.",
        tags: [{ label: "perf", tone: "green" }, { label: "refactor", tone: "amber" }],
        results: ["↑ ~40% performance"],
        visual: "migration",
      },
      {
        title: "LLM workflows and team growth",
        description:
          "Integrated LLMs for conversational UI, content generation and workflow automation. Mentored two junior engineers through code review and component design.",
        tags: [{ label: "feat", tone: "blue" }, { label: "mentoring", tone: "amber" }],
      },
    ],
  },
  {
    version: "v2.0",
    period: "Aug 2022 – May 2024",
    role: "Software Engineer",
    summary:
      "Owned full-stack delivery on a MERN admin platform: REST APIs, MongoDB schemas, RBAC flows and React UIs, working directly with product and compliance teams.",
    projects: [
      {
        title: "eKYC Multi-Vendor Platform",
        description:
          "Review and approval dashboard with role-based access, plus external APIs and SDKs that automate document retrieval and e-sign. Responsive across devices for faster onboarding.",
        tags: [{ label: "feat", tone: "blue" }, { label: "security", tone: "purple" }],
        tech: [tech.react, tech.node, tech.mongo, tech.jwt],
        results: ["10,000+ reviewed", "↓ 60% manual work", "↑ 30% faster verification"],
        visual: "roles",
      },
      {
        title: "Cove Drive: zero-knowledge encrypted storage",
        description:
          "Hybrid AES and RSA encryption keeps data private end to end, with password-protected sharing and resumable chunked uploads that survive unstable networks.",
        tags: [{ label: "security", tone: "purple" }, { label: "feat", tone: "blue" }],
        tech: [tech.go, tech.aws, tech.docker],
        visual: "pipeline",
      },
      {
        title: "Reusable components and clean APIs",
        description:
          "Replaced duplicated code with reusable components. Built Node, Express and TypeScript APIs with JWT auth, request validation and modular routing, following SOLID principles.",
        tags: [{ label: "perf", tone: "green" }, { label: "refactor", tone: "amber" }],
        visual: "bundle",
      },
    ],
  },
];

export const education = { version: "v1.0", period: "2018 – 2022", degree: "B.E. Computer Science", school: "Panjab University, Chandigarh" };
