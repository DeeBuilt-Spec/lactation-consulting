import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { latched } from "@/content/latched";

/*
 * DIRECTION THREE — SOFT & PERSONAL (zigzag / overlapping editorial)
 *
 * The gentle, personal direction. Light greige base, one sage-green band, a
 * soft lavender accent. Big FAINT serif words layered behind the hero headline
 * (off-grid overlap). Sections zigzag left/right down the page instead of
 * stacking center. Minimal timeline with a thin line and open circles. Lots of
 * air. This is the "you are safe here" feeling, not a slogan.
 *
 * Uses the shared latched.ts content (her real, mom-safe voice) — NOT invented
 * prices or testimonials. Mobile-first: the overlap and zigzag collapse to a
 * calm single column on a phone.
 */

const greige = "#ece5db"; // warm base
const greigeDeep = "#e2d9cd"; // alternating band
const cream = "#f5f0e8";
const sage = "#7f8b6a"; // the one green band + buttons
const sageDeep = "#5f6a4d";
const lavender = "#8d7fa6"; // small accent only
const ink = "#3a342f"; // warm near-charcoal
const soft = "#6b645c";
const faint = "rgba(58,52,47,0.06)"; // giant background words
const hair = "rgba(58,52,47,0.12)";

const serif = "Fraunces, Georgia, serif";
const sans = "Inter, system-ui, sans-serif";

const c = latched.consultant;

/* ---- Nav ---------------------------------------------------------------- */

const navLinks = [
  { label: "Care", href: "#help" },
  { label: "About", href: "#about" },
  { label: "Sessions", href: "#services" },
  { label: "Questions", href: "#faq" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-30" style={{ backgroundColor: greige, borderBottom: `1px solid ${hair}` }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-10">
        <Link to="/site3" style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 400, fontSize: 22, color: ink }}>
          {latched.name}
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:opacity-60" style={{ color: soft }}>
              {l.label}
            </a>
          ))}
          <a href={latched.cta.href} className="text-sm hover:opacity-60" style={{ color: sageDeep, fontStyle: "italic", fontFamily: serif }}>
            Begin
          </a>
        </div>
        <button className="text-sm uppercase tracking-[0.2em] md:hidden" style={{ color: ink }} onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="space-y-4 px-5 pb-6 md:hidden" style={{ backgroundColor: greige }}>
          {[...navLinks, { label: "Begin", href: latched.cta.href }].map((l) => (
            <a key={l.href} href={l.href} className="block text-lg" style={{ fontFamily: serif, color: ink }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ---- Hero: giant faint words behind the real headline ------------------- */

function Hero() {
  const { hero } = latched;
  return (
    <header className="relative overflow-hidden" style={{ backgroundColor: greige }}>
      {/* Layer 1 — oversized faint serif words, off-grid, behind everything. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[38%] select-none whitespace-nowrap"
        style={{
          fontFamily: serif,
          fontWeight: 400,
          color: faint,
          fontSize: "clamp(72px, 15vw, 200px)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
        }}
      >
        newborn · home · soft light
      </div>

      {/* Layer 2 — type-only hero, overlapping the faint words. The italic
          label sits offset into the headline for the asymmetrical feel. */}
      <div className="relative mx-auto max-w-5xl px-5 py-24 md:px-10 md:py-36">
        <p className="text-sm italic md:ml-2" style={{ fontFamily: serif, color: lavender }}>
          For the tender first weeks
        </p>
        <h1
          className="mt-4 max-w-3xl"
          style={{ fontFamily: serif, fontWeight: 400, color: ink, fontSize: "clamp(38px, 6.5vw, 84px)", lineHeight: 1.02 }}
        >
          {hero.headline}
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed md:ml-1" style={{ color: soft }}>
          {hero.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href={latched.cta.href} className="rounded-full px-7 py-3.5 text-sm" style={{ backgroundColor: sage, color: cream }}>
            {latched.cta.label}
          </a>
          <span className="text-sm italic" style={{ fontFamily: serif, color: sageDeep }}>
            {latched.contact.location}
          </span>
        </div>
      </div>
    </header>
  );
}

/* ---- A calm intro line + credential rule (gentle, centered) ------------- */

function Intro() {
  return (
    <section style={{ backgroundColor: cream }}>
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-10 md:py-28">
        <p className="text-xs uppercase tracking-[0.32em]" style={{ color: sage }}>
          A gentle kind of consult
        </p>
        <p className="mt-8 text-2xl leading-relaxed md:text-3xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
          {latched.note.body[1]}
        </p>
        <div className="mx-auto mt-10 flex max-w-xs items-center justify-center gap-3" style={{ borderTop: `1px solid ${hair}`, borderBottom: `1px solid ${hair}`, padding: "12px 0" }}>
          <span className="text-xs uppercase tracking-[0.28em]" style={{ color: lavender }}>
            {c.credentialLine}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ---- Zigzag row (reusable): image one side, text the other, alternating -- */

function ZigRow({
  index,
  kicker,
  title,
  children,
  image,
  bg,
}: {
  index: number;
  kicker: string;
  title: string;
  children: ReactNode;
  image: string;
  bg: string;
}) {
  const imageLeft = index % 2 === 0;
  return (
    <section style={{ backgroundColor: bg }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-14">
          {/* Image */}
          <div className={`md:col-span-5 ${imageLeft ? "md:order-1" : "md:order-2"}`}>
            <div className="overflow-hidden" style={{ borderRadius: "18px", border: `7px solid ${cream}` }}>
              <img src={image} alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
          {/* Text */}
          <div className={`md:col-span-7 ${imageLeft ? "md:order-2" : "md:order-1"}`}>
            <p className="text-xs uppercase tracking-[0.3em]" style={{ color: sage }}>
              {kicker}
            </p>
            <h2 className="mt-5 text-3xl leading-snug md:text-4xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- How I can help (zig 0) --------------------------------------------- */

function Help() {
  const { helpWith } = latched;
  return (
    <div id="help">
      <ZigRow index={0} kicker={helpWith.kicker} title={helpWith.lead} image={latched.images.hero} bg={greige}>
        <ul className="flex flex-wrap gap-x-2 gap-y-2">
          {helpWith.tags.map((t) => (
            <li key={t} className="rounded-full px-4 py-2 text-sm" style={{ backgroundColor: cream, color: soft }}>
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: soft }}>
          {helpWith.closer}
        </p>
      </ZigRow>
    </div>
  );
}

/* ---- About / note (zig 1, image on the other side) ---------------------- */

function About() {
  const { note } = latched;
  return (
    <div id="about">
      <ZigRow index={1} kicker={note.kicker} title="I have sat where you are sitting." image={c.portrait} bg={greigeDeep}>
        <div className="space-y-5">
          {note.body.map((p) => (
            <p key={p} className="text-base leading-relaxed" style={{ color: soft }}>
              {p}
            </p>
          ))}
        </div>
        <p className="mt-6 text-2xl italic" style={{ fontFamily: serif, color: sageDeep }}>
          {note.signoff}
        </p>
      </ZigRow>
    </div>
  );
}

/* ---- Sessions — right-aligned editorial list (matches the soft rhythm) --- */

function Services() {
  return (
    <section id="services" style={{ backgroundColor: cream }}>
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-center text-xs uppercase tracking-[0.32em]" style={{ color: sage }}>
          What's offered
        </p>
        <div className="mt-14 space-y-16">
          {latched.services.map((s, i) => (
            <div key={s.n} className={i % 2 ? "md:pr-24 md:text-left" : "md:pl-24 md:text-right"}>
              <p className="text-xs uppercase tracking-[0.22em]" style={{ color: sage }}>
                {s.length}
              </p>
              <h3 className="mt-3 text-3xl md:text-4xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
                {s.name}
              </h3>
              <p className={`mt-3 text-base leading-relaxed ${i % 2 ? "md:mr-auto" : "md:ml-auto"} max-w-md`} style={{ color: soft }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- How it unfolds — minimal timeline, thin line + open circles -------- */

const steps = [
  { n: "01", t: "Book", d: "Pick a time that works, even an odd-hours one. Tell me a little about what is going on so I can come ready." },
  { n: "02", t: "Connect", d: "We meet over a video call from wherever you are, on your own couch with your own baby. Bring your partner too if it helps." },
  { n: "03", t: "Continue", d: "You leave with a written plan and a way to reach me for the week that follows. No wondering whether you can message." },
];

function Process() {
  return (
    <section style={{ backgroundColor: greige }}>
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-center text-xs uppercase tracking-[0.32em]" style={{ color: sage }}>
          How it unfolds
        </p>
        <ol className="mt-14">
          {steps.map((s, i) => (
            <li key={s.n} className="flex gap-7 pb-12 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ border: `1.5px solid ${sage}`, backgroundColor: "transparent" }} />
                {i < steps.length - 1 && <span className="mt-1 w-px flex-1" style={{ backgroundColor: hair }} />}
              </div>
              <div className="-mt-1.5 pb-2">
                <p className="text-sm italic" style={{ fontFamily: serif, color: lavender }}>
                  Step {s.n}
                </p>
                <h3 className="mt-1 text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
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

/* ---- The path here — her timeline, clean ------------------------------- */

function Path() {
  const { timeline } = latched;
  return (
    <section style={{ backgroundColor: greigeDeep }}>
      <div className="mx-auto max-w-4xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs uppercase tracking-[0.32em]" style={{ color: sage }}>
          {timeline.kicker}
        </p>
        <p className="mt-6 max-w-2xl text-2xl leading-snug md:text-3xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
          {timeline.lead}
        </p>
        <ol className="mt-12 space-y-10">
          {timeline.stops.map((stop) => (
            <li key={stop.role} className="grid gap-2 md:grid-cols-12 md:gap-6" style={{ borderTop: `1px solid ${hair}`, paddingTop: "1.5rem" }}>
              <div className="md:col-span-3">
                <span className="text-sm italic" style={{ fontFamily: serif, color: lavender }}>
                  {stop.years}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl md:text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
                  {stop.role}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
                  {stop.place}
                </p>
                <p className="mt-3 text-base leading-relaxed" style={{ color: soft }}>
                  {stop.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---- In their words ----------------------------------------------------- */

function Testimonials() {
  const [a, b] = latched.testimonials;
  return (
    <section style={{ backgroundColor: cream }}>
      <div className="mx-auto max-w-4xl px-5 py-20 md:px-10 md:py-28">
        <div className="space-y-16">
          {[a, b].map((t) => (
            <figure key={t.who} className="mx-auto max-w-2xl text-center">
              <blockquote className="text-2xl leading-snug md:text-3xl" style={{ fontFamily: serif, fontWeight: 400, fontStyle: "italic", color: ink }}>
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
                — {t.who}
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
    <section id="faq" style={{ backgroundColor: greige }}>
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs uppercase tracking-[0.32em]" style={{ color: sage }}>
          {faq.kicker}
        </p>
        <div className="mt-10 space-y-10">
          {faq.items.map((item) => (
            <div key={item.q}>
              <h3 className="text-xl md:text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
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

/* ---- Booking CTA — the one sage-green band ------------------------------ */

function Booking() {
  const { cta } = latched;
  return (
    <section id="book" style={{ backgroundColor: sage, color: cream }}>
      <div className="mx-auto max-w-2xl px-5 py-24 text-center md:py-32">
        <h2 style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.1 }}>
          {cta.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed" style={{ color: "rgba(245,240,232,0.9)" }}>
          {cta.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          <a href={cta.href} className="text-lg italic underline" style={{ fontFamily: serif, color: cream, textUnderlineOffset: "6px" }}>
            {cta.label}
          </a>
          <a href={`mailto:${latched.contact.email}`} className="text-lg italic underline" style={{ fontFamily: serif, color: cream, textUnderlineOffset: "6px" }}>
            {latched.contact.email}
          </a>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.22em]" style={{ color: "rgba(245,240,232,0.7)" }}>
          {latched.contact.bookingLine}
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: ink, color: cream }}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-12 text-center md:flex-row md:justify-between md:px-10 md:text-left">
        <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 22 }}>{latched.name}</p>
        <p className="text-xs uppercase tracking-[0.22em]" style={{ color: "rgba(245,240,232,0.6)" }}>
          {c.credentialLine} · {c.license}
        </p>
        <a href={`mailto:${latched.contact.email}`} className="text-sm hover:opacity-70" style={{ color: "rgba(245,240,232,0.85)" }}>
          {latched.contact.email}
        </a>
        <Link to="/" className="text-sm italic underline" style={{ fontFamily: serif, color: cream, textUnderlineOffset: "4px" }}>
          All directions
        </Link>
      </div>
    </footer>
  );
}

export default function Site3Confident() {
  return (
    <div style={{ backgroundColor: greige, fontFamily: sans }}>
      <Nav />
      <Hero />
      <Intro />
      <Help />
      <About />
      <Services />
      <Process />
      <Path />
      <Testimonials />
      <Faq />
      <Booking />
      <Footer />
    </div>
  );
}
