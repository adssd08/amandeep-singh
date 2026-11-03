import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Releases from "@/components/Releases";
import { IdentityCard, StackCard } from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="mx-auto flex max-w-[1240px] flex-col items-start gap-8 px-4 pt-5 lg:flex-row lg:px-8 lg:pt-10">
        <aside className="hidden w-[300px] shrink-0 flex-col gap-5 lg:flex">
          <IdentityCard />
          <StackCard />
        </aside>
        <main className="flex w-full min-w-0 flex-1 flex-col gap-7">
          <Hero />
          <StackCard className="lg:hidden" />
          <Metrics />
          <Releases />
          <Contact />
          <footer className="flex flex-wrap justify-between gap-2 pb-10 text-[13px] text-muted">
            <span>© 2026 {profile.name}</span>
            <span className="font-mono">{profile.location}</span>
          </footer>
        </main>
      </div>
    </>
  );
}
