import { useState } from "react";
import { Link } from "react-router-dom";
import { latched } from "@/content/latched";

/*
 * DIRECTION ONE — PERSONAL EDITORIAL ("her voice, laid out")
 *
 * A solo practitioner's page that feels like SHE arranged it, not like a
 * designer boxed everything into a 12-column system. Loose, mom-focused, warm.
 * Off-grid handwritten note, staggered timeline, images that bleed and tuck
 * behind text, varied section widths, tag clouds instead of card grids.
 *
 * Palette kept soft (the reviewer liked it): warm ivory, deep plum-navy ink,
 * dusty rose + sage accents. Serif display (Fraunces) for warmth, Inter for
 * body, Caveat-ish handwritten accent for her voice.
 *
 * Copy is positioning/reassurance, never a clinical claim. Contact is
 * placeholder. All sections designed mobile-first.
 */

const ivory = "#faf6f0";
const cream = "#f2e9dd";
const ink = "#33283a"; // deep plum-navy, warm not black
const body = "#5c5460";
const rose = "#c08497"; // dusty rose
const sage = "#7d8a6a"; // muted sage
const hair = "rgba(51,40,58,0.12)";

const serif = "Fraunces, Georgia, serif";
const sans = "Inter, system-ui, sans-serif";
const hand = "'Caveat', 'Segoe Script', cursive";

const c = latched.consultant;

/* ---- Navigation --------------------------------------------------------- */

const navLinks = [
  { label: "Work with me", href: "#help" },
  { label: "My story", href: "#story" },
  { label: "Groups", href: "#groups" },
  { label: "Questions", href: "#faq" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-30" style={{ backgroundColor: ivory, borderBottom: `1px solid ${hair}` }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/site1" className="flex items-baseline gap-2" style={{ color: ink }}>
          <span style={{ fontFamily: serif, fontWeight: 600, fontSize: 22, letterSpacing: "-0.01em" }}>
            {latched.name}
          </span>
          <span className="hidden sm:inline text-[11px] uppercase tracking-[0.22em]" style={{ color: rose }}>
            Lactation care
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:underline" style={{ color: body, textUnderlineOffset: "5px" }}>
              {l.label}
            </a>
          ))}
          <a href={latched.cta.href} className="rounded-full px-5 py-2.5 text-sm" style={{ backgroundColor: ink, color: ivory }}>
            {latched.cta.label}
          </a>
        </div>

        <button className="text-sm uppercase tracking-[0.2em] md:hidden" style={{ color: ink }} onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="space-y-4 px-5 pb-6 md:hidden" style={{ backgroundColor: ivory }}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="block text-lg" style={{ fontFamily: serif, color: ink }} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={latched.cta.href} className="block w-full rounded-full py-3 text-center text-sm" style={{ backgroundColor: ink, color: ivory }} onClick={() => setOpen(false)}>
            {latched.cta.label}
          </a>
        </div>
      )}
    </nav>
  );
}

/* ---- Hero: off-kilter, image tucked behind type ------------------------- */

function Hero() {
  const { hero } = latched;
  return (
    <header className="relative overflow-hidden" style={{ backgroundColor: ivory }}>
      {/* Soft blob of cream behind the type, deliberately off-center. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-20 h-[420px] w-[420px] rounded-full opacity-60 md:h-[600px] md:w-[600px]"
        style={{ backgroundColor: cream }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">
          {/* Left: the whole message, kept short and calm. */}
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.28em]" style={{ color: rose }}>
              {hero.eyebrow}
            </p>
            <h1
              className="mt-5"
              style={{ fontFamily: serif, fontWeight: 400, color: ink, fontSize: "clamp(34px, 5.4vw, 60px)", lineHeight: 1.05 }}
            >
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed" style={{ color: body }}>
              {hero.sub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href={latched.cta.href}
                className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium"
                style={{ backgroundColor: ink, color: ivory }}
              >
                {latched.cta.label}
              </a>
              <span className="text-sm italic" style={{ fontFamily: serif, color: sage }}>
                {latched.contact.location}
              </span>
            </div>
          </div>

          {/* Right: one calm image, softly framed and slightly tilted. */}
          <div className="md:col-span-5">
            <div
              className="overflow-hidden"
              style={{
                borderRadius: "18px",
                transform: "rotate(1.5deg)",
                border: `7px solid ${ivory}`,
                boxShadow: "0 22px 46px -24px rgba(51,40,58,0.5)",
              }}
            >
              {/* IMAGE SLOT — warm candid mother and baby. Swap freely. */}
              <img src={latched.images.hero} alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---- A note from me: handwritten, off-grid ------------------------------ */

function NoteFromMe() {
  const { note } = latched;
  return (
    <section id="note" style={{ backgroundColor: cream }}>
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          {/* Portrait, overlapping slightly into the text column on desktop. */}
          <div className="md:col-span-4">
            <div
              className="overflow-hidden"
              style={{ borderRadius: "50% 50% 48% 52% / 55% 55% 45% 45%", border: `5px solid ${ivory}`, boxShadow: "0 16px 36px -20px rgba(51,40,58,0.45)" }}
            >
              {/* IMAGE SLOT — practitioner portrait. */}
              <img src={c.portrait} alt="" className="aspect-square w-full object-cover" />
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
              {c.name} · {c.credentialLine}
            </p>
          </div>

          <div className="md:col-span-8 md:-ml-6">
            <p className="text-sm uppercase tracking-[0.28em]" style={{ color: rose }}>
              {note.kicker}
            </p>
            <div className="mt-5 space-y-5">
              {note.body.map((p) => (
                <p key={p} className="text-lg leading-relaxed md:text-xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-8 text-2xl md:text-3xl" style={{ fontFamily: hand, color: rose }}>
              {note.signoff}
            </p>
            <p className="text-xl md:text-2xl" style={{ fontFamily: hand, color: sage }}>
              {note.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- How I can help: prose + tag cloud ---------------------------------- */

function HelpWith() {
  const { helpWith } = latched;
  return (
    <section id="help" style={{ backgroundColor: ivory }}>
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm uppercase tracking-[0.28em]" style={{ color: rose }}>
          {helpWith.kicker}
        </p>
        <p className="mt-5 max-w-2xl text-2xl leading-snug md:text-3xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
          {helpWith.lead}
        </p>

        {/* Loose tag cloud — varied, not a grid. */}
        <ul className="mt-9 flex flex-wrap gap-x-3 gap-y-3">
          {helpWith.tags.map((t, i) => (
            <li
              key={t}
              className="rounded-full px-4 py-2 text-sm"
              style={{
                backgroundColor: i % 3 === 0 ? cream : "transparent",
                border: `1px solid ${i % 3 === 0 ? "transparent" : hair}`,
                color: body,
              }}
            >
              {t}
            </li>
          ))}
        </ul>

        <p className="mt-9 max-w-xl text-lg leading-relaxed" style={{ color: body }}>
          {helpWith.closer}
        </p>

        {/* Services as a loose staggered list, not cards. */}
        <div className="mt-14 space-y-8">
          {latched.services.map((s, i) => (
            <div
              key={s.n}
              className="grid gap-3 md:grid-cols-12 md:items-baseline"
              style={{ borderTop: `1px solid ${hair}`, paddingTop: "1.5rem", marginLeft: i % 2 ? "0" : undefined }}
            >
              <div className="md:col-span-4">
                <h3 className="text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
                  {s.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
                  {s.length}
                </p>
              </div>
              <p className="md:col-span-8 text-base leading-relaxed" style={{ color: body }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- The path here: staggered timeline ---------------------------------- */

function Timeline() {
  const { timeline } = latched;
  return (
    <section id="story" style={{ backgroundColor: ink, color: ivory }}>
      <div className="mx-auto max-w-5xl px-5 py-18 md:px-8 md:py-28">
        <p className="text-sm uppercase tracking-[0.28em]" style={{ color: rose }}>
          {timeline.kicker}
        </p>
        <p className="mt-5 max-w-2xl text-2xl leading-snug md:text-3xl" style={{ fontFamily: serif, fontWeight: 400 }}>
          {timeline.lead}
        </p>

        <ol className="mt-14 space-y-12">
          {timeline.stops.map((stop, i) => (
            <li
              key={stop.role}
              className="grid gap-4 md:grid-cols-12 md:items-baseline"
              // Stagger each stop horizontally so it reads like a path, not a table.
              style={{ marginLeft: `${i * 6}%` }}
            >
              <div className="md:col-span-3">
                <span className="text-sm tabular-nums" style={{ color: rose, fontFamily: serif }}>
                  {stop.years}
                </span>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-xl md:text-2xl" style={{ fontFamily: serif, fontWeight: 500 }}>
                  {stop.role}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(250,246,240,0.6)" }}>
                  {stop.place}
                </p>
                <p className="mt-3 text-base leading-relaxed" style={{ color: "rgba(250,246,240,0.85)" }}>
                  {stop.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Credentials tucked at the end of the story, made human. Full name
            leads; the abbreviation is a quiet tag; each line explains itself. */}
        <div className="mt-16" style={{ borderTop: `1px solid rgba(250,246,240,0.18)`, paddingTop: "2.5rem" }}>
          <p className="text-sm uppercase tracking-[0.28em]" style={{ color: "rgba(250,246,240,0.6)" }}>
            {latched.credentials.frame}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: "rgba(250,246,240,0.75)" }}>
            {latched.credentials.lead}
          </p>

          <div className="mt-10 space-y-8">
            {latched.credentials.marks.map((m) => (
              <div key={m.abbr} className="grid gap-2 md:grid-cols-12 md:gap-6">
                <div className="md:col-span-4">
                  <h4 className="text-xl md:text-2xl" style={{ fontFamily: serif, fontWeight: 500 }}>
                    {m.full}
                  </h4>
                  <span
                    className="mt-1 inline-block rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-[0.18em]"
                    style={{ backgroundColor: "rgba(250,246,240,0.12)", color: "rgba(250,246,240,0.75)" }}
                  >
                    {m.abbr}
                  </span>
                </div>
                <p className="md:col-span-8 text-base leading-relaxed" style={{ color: "rgba(250,246,240,0.85)" }}>
                  {m.plain}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs uppercase tracking-[0.22em]" style={{ color: rose }}>
            {latched.credentials.license}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---- Groups I run ------------------------------------------------------- */

function Groups() {
  const { groups } = latched;
  return (
    <section id="groups" style={{ backgroundColor: cream }}>
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-sm uppercase tracking-[0.28em]" style={{ color: rose }}>
              {groups.kicker}
            </p>
            <p className="mt-5 text-2xl leading-snug md:text-3xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
              {groups.lead}
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-3">
          {groups.sessions.map((g, i) => (
            <div
              key={g.title}
              className="flex flex-col gap-2 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:gap-6"
              style={{ backgroundColor: ivory, transform: `rotate(${i % 2 ? -0.5 : 0.5}deg)` }}
            >
              <div className="sm:w-40 shrink-0">
                <p className="text-lg" style={{ fontFamily: serif, color: ink }}>
                  {g.day}
                </p>
                <p className="text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
                  {g.time}
                </p>
              </div>
              <div className="flex-1">
                <p className="text-lg" style={{ color: ink }}>
                  {g.title}
                </p>
                <p className="text-sm" style={{ color: body }}>
                  {g.note}
                </p>
              </div>
              <a href={latched.cta.href} className="text-sm italic underline sm:text-right" style={{ fontFamily: serif, color: rose, textUnderlineOffset: "4px" }}>
                Join →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- In their words (kept — reviewer liked this) ------------------------ */

function Testimonials() {
  return (
    <section style={{ backgroundColor: ivory }}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm uppercase tracking-[0.28em]" style={{ color: rose }}>
          In their words
        </p>
        {/* Masonry-ish two columns, staggered, not a slider. */}
        <div className="mt-10 gap-x-10 md:columns-2">
          {latched.testimonials.map((t, i) => (
            <figure key={t.who} className="mb-10 break-inside-avoid" style={{ marginTop: i % 2 ? "1.5rem" : 0 }}>
              <blockquote className="text-xl leading-snug md:text-2xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
                {t.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- Questions parents ask me: FAQ -------------------------------------- */

function Faq() {
  const { faq } = latched;
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" style={{ backgroundColor: cream }}>
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="text-sm uppercase tracking-[0.28em]" style={{ color: rose }}>
          {faq.kicker}
        </p>
        <div className="mt-8 space-y-2">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} style={{ borderTop: `1px solid ${hair}` }}>
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl" style={{ fontFamily: serif, fontWeight: 400, color: ink }}>
                    {item.q}
                  </span>
                  <span className="text-xl" style={{ color: rose, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-base leading-relaxed" style={{ color: body }}>
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---- Booking CTA (kept the copy the reviewer liked) --------------------- */

function Booking() {
  const { cta } = latched;
  return (
    <section id="book" style={{ backgroundColor: ink, color: ivory }}>
      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <p className="text-5xl md:text-6xl" style={{ fontFamily: hand, color: rose }}>
          Let's talk
        </p>
        <h2 className="mt-4" style={{ fontFamily: serif, fontWeight: 400, fontSize: "clamp(30px, 5vw, 52px)", lineHeight: 1.08 }}>
          {cta.heading}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed" style={{ color: "rgba(250,246,240,0.85)" }}>
          {cta.sub}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          <a href={cta.href} className="rounded-full px-8 py-4 text-sm" style={{ backgroundColor: rose, color: ink }}>
            {cta.label}
          </a>
          <a href={`mailto:${latched.contact.email}`} className="text-sm underline" style={{ color: "rgba(250,246,240,0.85)", textUnderlineOffset: "5px" }}>
            {latched.contact.email}
          </a>
        </div>
        <p className="mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(250,246,240,0.55)" }}>
          {latched.contact.bookingLine}
        </p>
      </div>
    </section>
  );
}

/* ---- Footer ------------------------------------------------------------- */

function Footer() {
  return (
    <footer style={{ backgroundColor: ivory, borderTop: `1px solid ${hair}` }}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-xl" style={{ fontFamily: serif, fontWeight: 600, color: ink }}>
            {latched.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
            {c.credentialLine} · {c.license}
          </p>
          <p className="mt-0.5 text-xs uppercase tracking-[0.2em]" style={{ color: sage }}>
            {latched.contact.location}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end" style={{ color: body }}>
          <a href={`mailto:${latched.contact.email}`} className="hover:underline" style={{ textUnderlineOffset: "4px" }}>
            {latched.contact.email}
          </a>
          <Link to="/" className="text-xs uppercase tracking-[0.2em]" style={{ color: rose }}>
            ← All directions
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ---- Page --------------------------------------------------------------- */

export default function Site1Clinical() {
  return (
    <div style={{ backgroundColor: ivory, fontFamily: sans }}>
      <Nav />
      <Hero />
      <NoteFromMe />
      <HelpWith />
      <Timeline />
      <Groups />
      <Testimonials />
      <Faq />
      <Booking />
      <Footer />
    </div>
  );
}
