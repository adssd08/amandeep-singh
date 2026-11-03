import { Download } from "lucide-react";
import { profile } from "@/data/profile";

export default function TopBar() {
  return (
    <header>
      <div className="flex justify-center bg-navy px-4 text-[#c9d6f2] lg:px-8">
        <div className="flex w-full max-w-[1240px] justify-between py-2 font-mono text-xs">
          <span className="flex items-center gap-2">
            <span className="pulse-dot size-2 rounded-full bg-[#34d399]" />
            {profile.status}
          </span>
          <span>{profile.location} · IST</span>
        </div>
      </div>
      <div className="flex justify-center border-b border-line bg-white px-4 lg:px-8">
        <div className="flex w-full max-w-[1240px] items-center justify-between py-3.5">
          <a href="#top" className="flex items-center gap-3 text-base font-bold lg:text-lg">
            <span className="flex size-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-semibold text-white lg:size-[34px]">
              {profile.initials}
            </span>
            {profile.name}
          </a>
          <nav className="flex items-center gap-1 text-sm font-semibold">
            <a href="#releases" className="hidden px-3.5 py-2.5 text-body sm:block">Experience</a>
            <a href="#contact" className="hidden px-3.5 py-2.5 text-body sm:block">Contact</a>
            <a href={profile.resume} download className="flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2.5 text-white lg:px-[18px]">
              <Download size={16} className="hidden sm:block" />
              Resume<span className="hidden sm:inline"> PDF</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
