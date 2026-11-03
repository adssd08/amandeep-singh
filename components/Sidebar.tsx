import { Download, Mail, MapPin, Phone } from "lucide-react";
import { profile, stack } from "@/data/profile";
import { FaLinkedinIn } from "react-icons/fa6";
import { TechChip } from "./ui";

export function IdentityCard() {
  const row = "flex items-center gap-2.5 text-sm";
  return (
    <div className="hidden flex-col gap-5 rounded-2xl border border-line bg-white p-6 lg:flex">
      <div className="flex items-center gap-3.5">
        <span className="flex size-[60px] items-center justify-center rounded-2xl bg-accent font-mono text-[22px] font-semibold text-white">
          {profile.initials}
        </span>
        <div>
          <div className="text-xl leading-tight font-bold">{profile.name}</div>
          <div className="text-sm text-muted">{profile.title}</div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className={row}><MapPin size={16} className="text-accent" />{profile.location}</div>
        <a href={`mailto:${profile.email}`} className={`${row} break-all`}><Mail size={16} className="text-accent" />{profile.email}</a>
        <div className={row}><Phone size={16} className="text-accent" />{profile.phone}</div>
        <a href={profile.linkedin} className={row}><FaLinkedinIn size={16} className="text-accent" />LinkedIn</a>
      </div>
      <a href={profile.resume} download className="flex items-center justify-center gap-2 rounded-xl bg-accent py-3 font-semibold text-white">
        <Download size={18} />Download resume
      </a>
    </div>
  );
}

export function StackCard({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3.5 rounded-2xl border border-line bg-white p-5 lg:p-6 ${className}`}>
      <div className="font-mono text-xs font-semibold tracking-wider text-muted">CORE STACK</div>
      {stack.map((g) => (
        <div key={g.title} className="flex flex-col gap-2">
          <div className="text-[13px] font-semibold">{g.title}</div>
          <div className="flex flex-wrap gap-1.5">
            {g.items.map((t) => (
              <TechChip key={t.name} t={t} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
