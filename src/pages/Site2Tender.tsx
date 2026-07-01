import { useState } from "react";
import { Link } from "react-router-dom";
import { latched } from "@/content/latched";

/*
 * DIRECTION TWO — TENDER & REASSURING (education-forward)
 *
 * For the parent who is struggling and needs to feel held before they scroll.
 * Softer and slower than Site 1, and less service-focused: it leads with
 * emotional safety and with knowledge she shares freely (gentle "what to
 * expect" guides), so it reads as reassurance first, booking second.
 *
 * Palette: warm ivory, dusty sage, blush, soft charcoal. No stark whites.
 * Type: Newsreader (gentle humanist serif) for headings, Inter for body, loose
 * leading. The note/about is the emotional center of the page.
 *
 * Same content file as every direction; only the treatment differs. Copy is
 * reassurance, never a clinical claim. Mobile-first.
 */

const ivory = "#f7f1e9";
const blush = "#eadfdc";
const sage = "#8a9578";
const sageDeep = "#5f6a4f";
const charcoal = "#3d3a38";
const soft = "#6f6a66";
const hair = "rgba(61,58,56,0.12)";

const serif = "Newsreader, Georgia, serif";
const sans = "Inter, system-ui, sans-serif";
const hand = "'Caveat', cursive";

const c = latched.consultant;

/* ---- Nav ---------------------------------------------------------------- */

const navLinks = [
  { label: "How I can help", href: "#help" },
  { label: "What to expect", href: "#expect" },
  { label: "My story", href: "#story" },
  { label: "Questions", href: "#faq" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-30" style={{ backgroundColor: ivory, borderBottom: `1px solid ${hair}` }}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/site2" style={{ fontFamily: serif, fontWeight: 500, fontSize: 24, color: charcoal }}>
          {latched.name}
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:underline" style={{ color: soft, textUnderlineOffset: "5px" }}>
              {l.label}
            </a>
          ))}
          <a href={latched.cta.href} className="rounded-full px-5 py-2.5 text-sm" style={{ backgroundColor: sageDeep, color: ivory }}>
            {latched.cta.label}
          </a>
        </div>
        <button className="text-sm uppercase tracking-[0.2em] md:hidden" style={{ color: charcoal }} onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="space-y-4 px-5 pb-6 md:hidden" style={{ backgroundColor: ivory }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block text-lg" style={{ fontFamily: serif, color: charcoal }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={latched.cta.href} className="block w-full rounded-full py-3 text-center text-sm" style={{ backgroundColor: sageDeep, color: ivory }} onClick={() => setOpen(false)}>
            {latched.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}

/* ---- Hero: soft, full-bleed image, sparse type -------------------------- */

function Hero() {
  const { hero } = latched;
  return (
    <header className="relative" style={{ backgroundColor: ivory }}>
      <div className="mx-auto max-w-5xl px-5 pt-16 pb-10 text-center md:px-8 md:pt-24 md:pb-16">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
          {hero.eyebrow}
        </p>
        <h1
          className="mx-auto mt-6 max-w-3xl"
          style={{ fontFamily: serif, fontWeight: 400, color: charcoal, fontSize: "clamp(34px, 6vw, 66px)", lineHeight: 1.08 }}
        >
          You are held here.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed" style={{ color: soft }}>
          {hero.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
          <a href={latched.cta.href} className="rounded-full px-7 py-3.5 text-sm" style={{ backgroundColor: sageDeep, color: ivory }}>
            {latched.cta.label}
          </a>
          <a href="#help" className="text-sm italic" style={{ fontFamily: serif, color: sageDeep }}>
            Or just look around first →
          </a>
        </div>
      </div>

      {/* Full-bleed image band. */}
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden" style={{ borderRadius: "22px" }}>
          {/* IMAGE SLOT — grayscale "Mother's Love" (Andrae Ricketts, Unsplash). */}
          <img src={latched.images.site2Hero} alt="" className="aspect-[16/9] w-full object-cover" />
        </div>
      </div>
    </header>
  );
}

/* ---- The note, given the most room (emotional center) ------------------- */

function Note() {
  const { note } = latched;
  return (
    <section id="story" style={{ backgroundColor: blush }}>
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
          {note.kicker}
        </p>
        <div className="mt-8 space-y-7">
          {note.body.map((p) => (
            <p key={p} className="text-2xl leading-relaxed md:text-3xl" style={{ fontFamily: serif, fontWeight: 300, color: charcoal }}>
              {p}
            </p>
          ))}
        </div>
        <p className="mt-10 text-3xl md:text-4xl" style={{ fontFamily: hand, color: sageDeep }}>
          {note.signoff}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="h-20 w-20 overflow-hidden rounded-full" style={{ border: `4px solid ${ivory}` }}>
            {/* IMAGE SLOT — small portrait. */}
            <img src={c.portrait} alt="" className="h-full w-full object-cover" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: soft }}>
            {c.name} · {c.credentialLine} · {c.license}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- How I can help: soft prose + gentle list --------------------------- */

function Help() {
  const { helpWith } = latched;
  return (
    <section id="help" style={{ backgroundColor: ivory }}>
      <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
          {helpWith.kicker}
        </p>
        <p className="mt-6 max-w-2xl text-2xl leading-relaxed md:text-3xl" style={{ fontFamily: serif, fontWeight: 300, color: charcoal }}>
          {helpWith.lead}
        </p>
        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {helpWith.tags.map((t) => (
            <li key={t} className="flex items-start gap-3 text-base" style={{ color: soft }}>
              <span aria-hidden style={{ color: sage }}>
                ·
              </span>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-xl text-lg leading-relaxed" style={{ color: soft }}>
          {helpWith.closer}
        </p>
      </div>
    </section>
  );
}

/* ---- What to expect: gentle education-forward guides (the differentiator)  */

const guides = [
  {
    title: "The first two weeks",
    body: "What is normal, what is not, and why almost everything you are feeling right now is more common than you think.",
  },
  {
    title: "When feeding hurts",
    body: "A calm walk through the usual reasons, and the small changes that tend to help most.",
  },
  {
    title: "Is my baby getting enough?",
    body: "The signs I look for, so you can stop counting minutes and second-guessing every feed.",
  },
  {
    title: "Making a feeding plan you can keep",
    body: "How we shape something realistic around your body, your baby, and your real days.",
  },
];

function Expect() {
  return (
    <section id="expect" style={{ backgroundColor: blush }}>
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
            Gentle guides
          </p>
          <h2 className="mt-6 text-3xl leading-snug md:text-4xl" style={{ fontFamily: serif, fontWeight: 400, color: charcoal }}>
            A little knowledge, shared freely, before you ever book.
          </h2>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: soft }}>
            You should be able to feel steadier just by being here. These are the things I explain most often.
          </p>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {guides.map((g, i) => (
            <div key={g.title} className="flex gap-5">
              <span className="text-3xl" style={{ fontFamily: serif, color: sage }}>
                0{i + 1}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: charcoal }}>
                  {g.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: soft }}>
                  {g.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- How it works: quiet vertical timeline ------------------------------ */

const steps = [
  { n: "1", t: "Reach out", d: "Pick a time, even an odd-hours one. Tell me a little about what is going on so I can come ready." },
  { n: "2", t: "We meet over video", d: "From your own couch, with your own baby. A real conversation, and a plan you can use that same day." },
  { n: "3", t: "I stay with you", d: "You leave with next steps in writing and a way to reach me between sessions. The plan grows as your baby does." },
];

function Process() {
  return (
    <section style={{ backgroundColor: ivory }}>
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
          How it works
        </p>
        <ol className="mt-10">
          {steps.map((s, i) => (
            <li key={s.n} className="flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg"
                  style={{ backgroundColor: sageDeep, color: ivory, fontFamily: serif }}
                >
                  {s.n}
                </span>
                {i < steps.length - 1 && <span className="mt-2 w-px flex-1" style={{ backgroundColor: hair }} />}
              </div>
              <div className="pt-1.5">
                <h3 className="text-xl md:text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: charcoal }}>
                  {s.t}
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: soft }}>
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---- Services, downplayed (present but not the star) -------------------- */

function Services() {
  return (
    <section style={{ backgroundColor: blush }}>
      <div className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
          When you are ready
        </p>
        <div className="mt-8 divide-y" style={{ borderColor: hair }}>
          {latched.services.map((s) => (
            <div key={s.n} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg" style={{ fontFamily: serif, color: charcoal }}>
                  {s.name}
                </h3>
                <p className="text-sm" style={{ color: soft }}>
                  {s.desc}
                </p>
              </div>
              <span className="shrink-0 text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
                {s.length}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- In their words ----------------------------------------------------- */

function Testimonials() {
  const [a, b] = latched.testimonials;
  return (
    <section style={{ backgroundColor: ivory }}>
      <div className="mx-auto max-w-4xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-center text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
          In their words
        </p>
        <div className="mt-12 space-y-14">
          {[a, b].map((t) => (
            <figure key={t.who} className="mx-auto max-w-2xl text-center">
              <blockquote className="text-2xl leading-snug md:text-3xl" style={{ fontFamily: serif, fontWeight: 300, color: charcoal }}>
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.2em]" style={{ color: soft }}>
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ ---------------------------------------------------------------- */

function Faq() {
  const { faq } = latched;
  return (
    <section id="faq" style={{ backgroundColor: blush }}>
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
          {faq.kicker}
        </p>
        <div className="mt-10 space-y-10">
          {faq.items.map((item) => (
            <div key={item.q}>
              <h3 className="text-xl md:text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: charcoal }}>
                {item.q}
              </h3>
              <p className="mt-3 text-base leading-relaxed" style={{ color: soft }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Booking CTA -------------------------------------------------------- */

function Booking() {
  const { cta } = latched;
  return (
    <section id="book" style={{ backgroundColor: sageDeep, color: ivory }}>
      <div className="mx-auto max-w-2xl px-5 py-24 text-center md:py-32">
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1 }}>
          {cta.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed" style={{ color: "rgba(247,241,233,0.85)" }}>
          {cta.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a href={cta.href} className="rounded-full px-8 py-4 text-sm" style={{ backgroundColor: ivory, color: sageDeep }}>
            {cta.label}
          </a>
          <a href={`mailto:${latched.contact.email}`} className="text-sm underline" style={{ color: "rgba(247,241,233,0.9)", textUnderlineOffset: "5px" }}>
            {latched.contact.email}
          </a>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(247,241,233,0.6)" }}>
          {latched.contact.bookingLine}
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: ivory, borderTop: `1px solid ${hair}` }}>
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-12 text-center md:px-8">
        <p className="text-2xl" style={{ fontFamily: serif, color: charcoal }}>
          {latched.name}
        </p>
        <p className="text-xs uppercase tracking-[0.2em]" style={{ color: soft }}>
          {c.credentialLine} · {c.license} · {latched.contact.location}
        </p>
        <div className="mt-2 flex items-center justify-center gap-4 text-sm" style={{ color: soft }}>
          <a href={`mailto:${latched.contact.email}`} className="hover:underline">
            {latched.contact.email}
          </a>
          <Link to="/" className="text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
            ← All directions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function Site2Tender() {
  return (
    <div style={{ backgroundColor: ivory, fontFamily: sans }}>
      <Nav />
      <Hero />
      <Note />
      <Help />
      <Expect />
      <Process />
      <Services />
      <Testimonials />
      <Faq />
      <Booking />
      <Footer />
    </div>
  );
}
