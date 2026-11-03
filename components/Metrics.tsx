import { Package, ShieldCheck, Users, Zap } from "lucide-react";
import { metrics } from "@/data/profile";
import { Tag } from "./ui";

const icons = { users: Users, shield: ShieldCheck, zap: Zap, package: Package };

export default function Metrics() {
  return (
    <section className="hidden gap-4 lg:grid lg:grid-cols-4">
      {metrics.map((m) => {
        const Icon = icons[m.icon as keyof typeof icons];
        return (
          <div key={m.value} className="flex flex-col gap-2.5 rounded-2xl border border-line bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-page text-accent">
                <Icon size={18} />
              </span>
              <Tag tone={m.tone}>{m.tag}</Tag>
            </div>
            <div className="font-mono text-[34px] font-semibold tracking-tight">{m.value}</div>
            <div className="text-[13px] leading-snug text-muted">{m.label}</div>
          </div>
        );
      })}
    </section>
  );
}
