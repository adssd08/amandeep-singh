import { education, releases } from "@/data/profile";
import Visual from "./Visual";
import { Result, Tag, TechChip } from "./ui";

export default function Releases() {
  return (
    <section id="releases" className="relative flex flex-col gap-9 pl-8 lg:pl-10">
      <span className="absolute top-3.5 bottom-3.5 left-[7px] w-0.5 bg-[#cbd5e6] lg:left-[11px]" />
      {releases.map((r) => (
        <div key={r.version} className="relative flex flex-col gap-[18px]">
          <span
            className={`absolute top-1 -left-[30px] size-[18px] rounded-full border-4 bg-white lg:top-1.5 lg:-left-[38px] lg:size-[22px] ${r.current ? "border-accent" : "border-[#98a6c3]"}`}
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2.5 font-mono text-[13px]">
              <span className={`rounded-md px-2.5 py-1 font-semibold text-white ${r.current ? "bg-accent" : "bg-muted"}`}>{r.version}</span>
              <span className="text-muted">{r.period}</span>
              {r.current && <Tag tone="green">CURRENT</Tag>}
            </div>
            <h2 className="text-[22px] font-bold tracking-tight lg:text-[28px]">
              {r.role} <span className="font-medium text-muted">· uTrade Solutions</span>
            </h2>
            <p className="max-w-[720px] text-[15px] leading-relaxed text-body lg:text-base">{r.summary}</p>
          </div>
          {r.projects.map((p) => (
            <article key={p.title} className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 lg:p-6">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <Tag key={tag.label} tone={tag.tone}>{tag.label}</Tag>
                ))}
              </div>
              <h3 className="text-lg font-bold tracking-tight lg:text-[22px]">{p.title}</h3>
              <p className="text-[15px] leading-relaxed text-body">{p.description}</p>
              {p.visual && <Visual kind={p.visual} />}
              {(p.tech || p.results) && (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech?.map((t) => <TechChip key={t.name} t={t} />)}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.results?.map((x) => <Result key={x}>{x}</Result>)}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      ))}
      <div className="relative flex flex-col gap-2">
        <span className="absolute top-0.5 -left-[30px] size-[18px] rounded-full border-4 border-[#cbd5e6] bg-white lg:top-1 lg:-left-[38px] lg:size-[22px]" />
        <div className="flex items-center gap-2.5 font-mono text-[13px]">
          <span className="rounded-md bg-[#e4e9f2] px-2.5 py-1 font-semibold text-muted">{education.version}</span>
          <span className="text-muted">{education.period}</span>
        </div>
        <div className="text-lg font-bold lg:text-xl">
          {education.degree} <span className="font-medium text-muted">· {education.school}</span>
        </div>
      </div>
    </section>
  );
}
