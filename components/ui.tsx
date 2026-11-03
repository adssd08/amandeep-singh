import type { Tech, Tone } from "@/data/profile";

const tones: Record<Tone, string> = {
  blue: "bg-[#e5edff] text-[#1849c4]",
  green: "bg-[#dcfae6] text-[#067647]",
  purple: "bg-[#ebe5ff] text-[#6941c6]",
  amber: "bg-[#fef0c7] text-[#b54708]",
};

export function Tag({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return <span className={`rounded-md px-2 py-0.5 font-mono text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

export function Result({ children }: { children: React.ReactNode }) {
  return <span className={`rounded-md px-2.5 py-1 font-mono text-[13px] font-semibold ${tones.green}`}>{children}</span>;
}

export function TechChip({ t }: { t: Tech }) {
  return (
    <span className="flex items-center gap-2 rounded-md border border-line bg-page px-2.5 py-1 text-[13px] font-medium">
      <t.icon size={16} color={t.color} />
      {t.name}
    </span>
  );
}
