import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="top" className="blueprint relative flex flex-col gap-5 rounded-2xl border border-line p-5 lg:gap-[22px] lg:p-11">
      <span className="absolute top-3 left-3 size-3.5 border-t-2 border-l-2 border-accent" />
      <span className="absolute right-3 bottom-3 size-3.5 border-r-2 border-b-2 border-accent" />
      <div className="font-mono text-[11px] font-semibold tracking-wider text-accent lg:text-[13px]">{profile.eyebrow}</div>
      <h1 className="max-w-[760px] text-[32px] leading-[1.08] font-bold tracking-tight lg:text-[54px]">
        Engineering regulated, real-time fintech products <span className="text-accent">end to end.</span>
      </h1>
      <p className="max-w-[680px] text-[15px] leading-relaxed text-body lg:text-lg">{profile.summary}</p>
      <div className="grid overflow-hidden rounded-xl border border-line bg-white sm:grid-cols-2 lg:grid-cols-4">
        {profile.facts.map((f) => (
          <div key={f.label} className="flex flex-col gap-1 border-b border-line px-[18px] py-3.5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
            <span className="font-mono text-[11px] tracking-wider text-muted">{f.label}</span>
            <span className="text-sm font-semibold">{f.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
