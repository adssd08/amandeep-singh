import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-accent p-6 text-white lg:p-9">
      <div className="flex min-w-[260px] flex-1 flex-col gap-2">
        <div className="text-2xl leading-tight font-bold tracking-tight lg:text-[28px]">Let's talk about your next engineering hire.</div>
        <div className="text-[15px] opacity-90">References and detailed case studies available on request.</div>
      </div>
      <div className="flex w-full flex-wrap gap-3 lg:w-auto">
        <a href={`mailto:${profile.email}`} className="flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-white px-5 py-3 text-sm font-semibold text-ink lg:flex-none lg:text-base">
          <Mail size={18} />Email me
        </a>
        <a href={profile.resume} download className="flex flex-1 items-center justify-center gap-2 rounded-[10px] bg-navy px-5 py-3 text-sm font-semibold lg:flex-none lg:text-base">
          <Download size={18} />Resume PDF
        </a>
      </div>
    </section>
  );
}
