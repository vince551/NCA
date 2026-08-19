import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  ChevronDown,
  FileText,
  Gavel,
  Globe2,
  Landmark,
  MapPinned,
  Megaphone,
  Menu,
  MessageSquareText,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const business = [
  { no: "01", icon: Gavel, title: "Motions & Resolutions", text: "A public record for Assembly proposals, decisions, sponsors and follow-through." },
  { no: "02", icon: MessageSquareText, title: "Questions & Statements", text: "A structured home for children's questions, statements and issues raised through representation." },
  { no: "03", icon: FileText, title: "Debates & Records", text: "Clear, searchable session records designed for children, schools and the public." },
  { no: "04", icon: UsersRound, title: "Committees & Caucuses", text: "Organise focused Assembly work by mandate, membership, reports and recommendations." },
];

const pillars = [
  { icon: Landmark, title: "The Chamber", text: "A digital front door to the Assembly's structure, mandate and public work." },
  { icon: MapPinned, title: "47 County Voices", text: "A national representation layer connecting county participation to the Assembly." },
  { icon: CalendarDays, title: "Sessions & Events", text: "One authoritative calendar for plenaries, forums, civic learning and notices." },
  { icon: BookOpen, title: "Resource Centre", text: "Plain-language civic and rights resources built for young people." },
];

function Logo({ size = 48 }: { size?: number }) {
  return <Image src="/nca-emblem.svg" alt="Kenya Children Assembly emblem" width={size} height={size} className="rounded-full object-cover" priority />;
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07120f]/90 backdrop-blur-xl">
        <div className="container flex h-[74px] items-center justify-between gap-5">
          <a href="#home" className="flex items-center gap-3">
            <Logo size={50} />
            <div className="hidden sm:block">
              <div className="text-[13px] font-black tracking-[.12em] text-white">KENYA CHILDREN ASSEMBLY</div>
              <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[.22em] text-[#d69b25]">Sauti Yako • Your Voice</div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
            {[["Assembly","#assembly"],["Business","#business"],["Leadership","#leadership"],["Counties","#counties"],["Sessions","#sessions"],["Resources","#resources"]].map(([label,href]) => <a key={label} href={href} className="text-[12px] font-bold text-white/70 transition hover:text-white">{label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#speak" className="hidden rounded-full bg-[#d69b25] px-5 py-2.5 text-xs font-black text-[#07120f] transition hover:-translate-y-0.5 sm:inline-flex">Speak Up</a>
            <details className="relative lg:hidden">
              <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-white/15 text-white"><Menu size={18}/></summary>
              <div className="absolute right-0 top-12 w-56 rounded-2xl border border-white/10 bg-[#0d1b17] p-3 shadow-2xl">
                {["#assembly","#business","#leadership","#counties","#sessions","#resources","#speak"].map((href,i)=><a key={href} href={href} className="block rounded-xl px-3 py-3 text-sm font-semibold text-white/75 hover:bg-white/5 hover:text-white">{["Assembly","Business","Leadership","Counties","Sessions","Resources","Speak Up"][i]}</a>)}
              </div>
            </details>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-[#07120f] text-white">
        <div className="grid-overlay absolute inset-0 opacity-60" />
        <div className="hero-grid absolute inset-0" />
        <div className="container relative grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div className="max-w-3xl">
            <div className="eyebrow mb-7">Digital Chamber • Republic of Kenya</div>
            <h1 className="text-5xl font-black leading-[.94] tracking-[-.055em] sm:text-7xl lg:text-[86px]">Where children's voices become <span className="text-[#d69b25]">Assembly business.</span></h1>
            <p className="mt-8 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">The Kenya Children Assembly's premium digital platform for representation, debate, leadership, motions, sessions, county voices and civic participation.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#assembly" className="inline-flex items-center gap-2 rounded-full bg-[#d69b25] px-6 py-3.5 text-sm font-black text-[#07120f] hover:bg-[#f0cf7b]">Enter the Assembly <ArrowRight size={17}/></a>
              <a href="#business" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10">View Order Paper <ArrowUpRight size={17}/></a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-[11px] font-bold uppercase tracking-[.16em] text-white/40"><span>Representation</span><span>Debate</span><span>Accountability</span><span>Participation</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute inset-8 rounded-full bg-[#d69b25]/10 blur-3xl" />
            <div className="glass relative rounded-[38px] p-5 shadow-2xl shadow-black/40">
              <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4"><span className="text-[10px] font-black uppercase tracking-[.2em] text-[#d69b25]">National Chamber</span><span className="rounded-full border border-[#d69b25]/30 px-2.5 py-1 text-[9px] font-bold text-[#f0cf7b]">OFFICIAL PLATFORM</span></div>
              <div className="flex aspect-square items-center justify-center p-10"><div className="relative rounded-full bg-black/50 p-5 shadow-[0_0_100px_rgba(214,155,37,.14)]"><Logo size={310}/><div className="absolute inset-0 rounded-full border border-[#d69b25]/25" /></div></div>
              <div className="grid grid-cols-3 border-t border-white/10 pt-4 text-center"><div><strong className="text-xl">47</strong><div className="mt-1 text-[9px] uppercase tracking-widest text-white/40">Counties</div></div><div className="border-x border-white/10"><strong className="text-xl">01</strong><div className="mt-1 text-[9px] uppercase tracking-widest text-white/40">National Chamber</div></div><div><strong className="text-xl">∞</strong><div className="mt-1 text-[9px] uppercase tracking-widest text-white/40">Ideas</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light border-b border-black/10 py-16 sm:py-20">
        <div className="container grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><div className="eyebrow text-[#08783f]">Institutional platform</div><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">Built around the <span className="text-[#08783f]">Assembly.</span></h2></div><p className="max-w-2xl text-base leading-7 text-black/55">Every major area is organised around real Assembly functions: who represents children, what is being debated, what has been decided, when the chamber sits and how children participate.</p></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{pillars.map(({icon:Icon,title,text})=><article key={title} className="card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"><div className="mb-8 grid h-11 w-11 place-items-center rounded-2xl bg-[#07120f] text-[#d69b25]"><Icon size={20}/></div><h3 className="text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{text}</p><a href="#assembly" className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#08783f]">Explore <ArrowRight size={14}/></a></article>)}</div>
      </section>

      <section id="assembly" className="section-dark py-20 sm:py-28">
        <div className="container"><div className="max-w-3xl"><div className="eyebrow">Inside the Chamber</div><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">A digital institution, not just a <span className="text-[#d69b25]">website.</span></h2><p className="mt-5 text-white/55">The foundation is designed to scale into a verified Assembly information system with a public layer and a secure administrative layer.</p></div><div className="mt-14 grid gap-5 lg:grid-cols-3"><div className="dark-card rounded-[32px] p-7 lg:col-span-2"><div className="flex items-center justify-between"><span className="eyebrow">01 • Plenary</span><Scale className="text-[#d69b25]" size={24}/></div><h3 className="mt-14 text-3xl font-black">Debate. Decide. Record.</h3><p className="mt-4 max-w-xl leading-7 text-white/55">Create an authoritative public trail for agendas, questions, motions, debates, resolutions and outcomes — written clearly enough for young people to follow.</p><div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">{["Agendas","Motions","Debates","Decisions"].map(x=><div key={x} className="rounded-2xl border border-white/10 bg-white/[.03] p-4 text-xs font-bold text-white/70">{x}</div>)}</div></div><div className="dark-card rounded-[32px] p-7"><span className="eyebrow">02 • Representation</span><div className="mt-12"><UsersRound className="text-[#d69b25]" size={28}/><h3 className="mt-5 text-2xl font-black">The people behind the voice.</h3><p className="mt-3 text-sm leading-6 text-white/50">A future verified directory for national and county Assembly leadership, roles and public responsibilities.</p></div></div></div></div>
      </section>

      <section id="business" className="section-light py-20 sm:py-28"><div className="container"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><div className="eyebrow text-[#bd1722]">Assembly Business</div><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">The <span className="text-[#08783f]">Order Paper.</span></h2></div><p className="max-w-lg text-sm leading-6 text-black/50">A premium public interface for the business of the Assembly, ready for verified backend data.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2">{business.map(({no,icon:Icon,title,text})=><article key={title} className="group rounded-[30px] border border-black/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-center justify-between"><span className="text-xs font-black tracking-widest text-black/25">{no}</span><Icon className="text-[#08783f]" size={24}/></div><h3 className="mt-12 text-2xl font-black">{title}</h3><p className="mt-3 max-w-xl text-sm leading-6 text-black/55">{text}</p><div className="mt-7 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#08783f]">Open module <ArrowRight size={14} className="transition group-hover:translate-x-1"/></div></article>)}</div></div></section>

      <section id="leadership" className="border-y border-white/10 bg-[#0d1b17] py-20"><div className="container grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><div><div className="eyebrow">Leadership & Representation</div><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-6xl">Make representation <span className="text-[#d69b25]">visible.</span></h2><p className="mt-5 max-w-xl leading-7 text-white/55">A verified directory can put Assembly leadership, county representatives, committees and public responsibilities at the centre of the experience — without exposing sensitive personal information.</p><a href="#counties" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold hover:bg-white/10">Explore representation <ArrowRight size={16}/></a></div><div className="glass rounded-[36px] p-4"><div className="grid min-h-[360px] place-items-center rounded-[28px] border border-white/10 bg-black/20"><div className="text-center"><Logo size={150}/><p className="mt-6 text-[10px] font-black uppercase tracking-[.25em] text-[#d69b25]">Verified Assembly Directory</p><p className="mt-2 text-sm text-white/45">National • County • Committees</p></div></div></div></div></section>

      <section id="counties" className="section-light py-20"><div className="container"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><div className="eyebrow text-[#08783f]">County Network</div><div className="mt-5 flex items-end gap-3"><span className="text-8xl font-black tracking-[-.08em]">47</span><span className="mb-3 text-sm font-black uppercase tracking-widest text-black/40">County voices</span></div><p className="mt-5 max-w-md leading-7 text-black/55">The national Assembly should always be connected to the children and representatives it serves across Kenya.</p></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{["Nairobi","Kisumu","Mombasa","Nakuru","Kiambu","Kakamega","Machakos","Uasin Gishu","+ 39 more"].map((county,i)=><div key={county} className={`rounded-2xl border p-4 text-sm font-bold ${i===0 ? "border-[#08783f]/30 bg-[#08783f]/5 text-[#08783f]" : "border-black/10 bg-white text-black/65"}`}>{county}</div>)}</div></div></div></section>

      <section id="sessions" className="section-dark py-20"><div className="container"><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="eyebrow">Sessions & Calendar</div><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">Know when the chamber <span className="text-[#d69b25]">sits.</span></h2></div><CalendarDays className="hidden text-[#d69b25] md:block" size={42}/></div><div className="mt-10 grid gap-4 md:grid-cols-3">{[["01","PLENARY","National Assembly Session"],["02","FORUM","Children's Leadership Forum"],["03","LEARNING","Civic & Rights Session"]].map(([n,t,title])=><article key={n} className="dark-card rounded-3xl p-6"><div className="flex items-center justify-between"><span className="text-3xl font-black text-white/15">{n}</span><span className="text-[10px] font-black tracking-[.2em] text-[#d69b25]">{t}</span></div><h3 className="mt-12 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/45">Reserved for verified Assembly dates, agendas, locations and outcomes.</p></article>)}</div></div></section>

      <section id="resources" className="section-light py-20"><div className="container"><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><div className="eyebrow text-[#08783f]">Resource Centre</div><h2 className="mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">Understand the rules. <span className="text-[#08783f]">Lead well.</span></h2></div><p className="text-sm leading-6 text-black/50">A searchable knowledge layer for Assembly procedure, children's rights, leadership and civic participation.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2"><article className="rounded-3xl bg-[#07120f] p-7 text-white"><BookOpen className="text-[#d69b25]"/><h3 className="mt-10 text-xl font-black">How a motion works</h3><p className="mt-3 text-sm leading-6 text-white/50">A plain-language guide from idea to debate, decision and follow-up.</p></article><article className="rounded-3xl border border-black/10 bg-white p-7"><ShieldCheck className="text-[#08783f]"/><h3 className="mt-10 text-xl font-black">Rights & protection</h3><p className="mt-3 text-sm leading-6 text-black/50">Age-appropriate resources connecting participation with safety and dignity.</p></article></div></div></section>

      <section id="speak" className="relative overflow-hidden bg-[#d69b25] py-16 text-[#07120f]"><div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><div className="text-[11px] font-black uppercase tracking-[.2em] opacity-60">Safeguarding first</div><h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Your voice matters. Your safety matters more.</h2><p className="mt-4 max-w-2xl text-sm leading-6 opacity-70">A production reporting workflow should use strict access controls, safeguarding procedures and appropriate data protection. This public layer never pretends a sensitive report is secure when it is not.</p></div><a href="#home" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#07120f] px-6 py-3.5 text-sm font-black text-white">Back to chamber <ChevronDown size={16} className="rotate-180"/></a></div></section>

      <footer className="bg-[#07120f] py-12 text-white"><div className="container"><div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-10 md:flex-row md:items-center"><div className="flex items-center gap-3"><Logo size={54}/><div><div className="text-sm font-black tracking-[.1em]">KENYA CHILDREN ASSEMBLY</div><div className="mt-1 text-[10px] font-bold uppercase tracking-[.2em] text-[#d69b25]">Sauti Yako • Your Voice</div></div></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-white/45"><a href="#assembly" className="hover:text-white">Assembly</a><a href="#business" className="hover:text-white">Business</a><a href="#leadership" className="hover:text-white">Leadership</a><a href="#resources" className="hover:text-white">Resources</a></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[10px] font-bold uppercase tracking-[.16em] text-white/25 sm:flex-row"><span>© {new Date().getFullYear()} Kenya Children Assembly</span><span>Public information • Verified records only</span></div></div></footer>
    </main>
  );
}
