import type { Visual as VisualKind } from "@/data/profile";
import { Tag } from "./ui";

const heat = ["#12b76a", "#a6f4c5", "#eef2f7", "#fecdca", "#f04438", "#a6f4c5", "#12b76a"];
const roles = [
  { name: "Admin", tone: "blue" as const },
  { name: "Agent", tone: "green" as const },
  { name: "RM", tone: "amber" as const },
  { name: "Affiliate", tone: "purple" as const },
];
const steps = [
  ["Encrypt file", "AES, client-side"],
  ["Wrap the key", "RSA public key"],
  ["Chunk and send", "Resumable upload"],
  ["Store ciphertext", "Server never sees keys"],
];

function Terminal() {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="min-w-[260px] flex-1 rounded-[10px] bg-navy p-4 font-mono text-[13px] leading-[1.8] text-[#c9d6f2]">
        <div><span className="text-[#7fa6ff]">&gt;</span> build a momentum strategy</div>
        <div><span className="text-[#34d399]">✓</span> intent parsed</div>
        <div><span className="text-[#34d399]">✓</span> strategy.ts generated</div>
        <div><span className="text-[#fbbf24]">…</span> streaming response</div>
      </div>
      <div className="flex min-w-[260px] flex-1 flex-col gap-2.5 rounded-[10px] border border-line p-4">
        <div className="font-mono text-[11px] tracking-wider text-muted">BACKTEST HEATMAP</div>
        <div className="flex flex-wrap gap-1">
          {Array.from({ length: 28 }, (_, i) => (
            <span key={i} style={{ background: heat[(i * 3 + (i % 5)) % 7] }} className="size-[22px] rounded" />
          ))}
        </div>
      </div>
    </div>
  );
}

function Bundle() {
  return (
    <div className="flex flex-col gap-2 font-mono text-xs font-semibold">
      <div className="flex items-center gap-2.5"><span className="w-[52px] text-muted">before</span><div className="h-3.5 w-full max-w-[420px] rounded bg-[#f04438]" /><span>500 KB</span></div>
      <div className="flex items-center gap-2.5"><span className="w-[52px] text-muted">after</span><div className="h-3.5 w-[70%] max-w-[294px] rounded bg-[#12b76a]" /><span>350 KB</span></div>
    </div>
  );
}

function Migration() {
  return (
    <div className="flex items-center gap-3 font-mono text-[13px] font-semibold">
      <span className="rounded-md bg-[#fde7e4] px-2.5 py-1 text-[#b42318]">Angular</span>
      <span className="text-muted">→</span>
      <span className="rounded-md bg-[#dff6fd] px-2.5 py-1 text-[#0b6a86]">React</span>
    </div>
  );
}

function Roles() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-[11px] tracking-wider text-muted">ROLES</span>
      {roles.map((r) => (
        <Tag key={r.name} tone={r.tone}>{r.name}</Tag>
      ))}
    </div>
  );
}

function Pipeline() {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map(([title, sub], i) => (
        <div key={title} className="rounded-lg border border-line p-3 text-[13px]">
          <div className="font-mono text-[11px] font-semibold text-accent">0{i + 1}</div>
          <div className="font-semibold">{title}</div>
          <div className="text-muted">{sub}</div>
        </div>
      ))}
    </div>
  );
}

const views = { terminal: Terminal, bundle: Bundle, migration: Migration, roles: Roles, pipeline: Pipeline, heatmap: Terminal };

export default function Visual({ kind }: { kind: VisualKind }) {
  const View = views[kind];
  return <View />;
}
