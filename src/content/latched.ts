// Single source of placeholder copy for the Latched spec.
//
// "Latched" is a PLACEHOLDER business name and "Your consultant" is a
// placeholder practitioner name — find-and-replace both later. All five design
// directions read from this one object.
//
// This spec is modeled on a REAL person's professional arc (a nurse who was a
// sexual assault victim advocate before becoming a mother-baby RN and IBCLC),
// but it is a SPEC, not her live site: no real name, phone, email, or address
// appears here. The story, credentials, and focus areas are real to the
// profession and safe to show. Copy is positioning and reassurance, NOT medical
// advice — nothing here is a clinical claim, guarantee, or promise of outcomes.
// Keep it that way when editing.
//
// Voice: first person, warm, specific, a little plainspoken. This should read
// like the practitioner wrote it herself, not like a web designer trimmed it.
//
// Image slots use Unsplash placeholders (warm, candid, human). Marked so they
// can be swapped. Do NOT swap in clinical/stock-medical imagery.

export const latched = {
  name: "Latched",

  // Placeholder practitioner identity. Find-and-replace "Your consultant".
  consultant: {
    name: "Your consultant",
    // The full credential line as she'd write it out.
    credentialLine: "MPH · BSN · RN · IBCLC",
    license: "Licensed RN · Florida",
    role: "Nurse & board-certified lactation consultant",
    portrait:
      // Real photo of the practitioner, served from public/. BASE_URL prefix so
      // it resolves under the GitHub Pages route (/lactation-consulting/).
      `${import.meta.env.BASE_URL}thanisha.png`,
  },

  // HERO — kept brief on purpose. Headline + one short line + one button.
  // The longer story lives in the note below, not here.
  hero: {
    eyebrow: "Virtual lactation support",
    headline: "Gentle, expert support for feeding your baby.",
    sub: "A nurse and lactation consultant in your corner through the early months, over video, wherever you are.",
  },

  // "A NOTE FROM ME" — signed, personal, handwritten-feeling. Her insistence.
  // The longer origin story lives here (moved out of the hero to keep it brief).
  note: {
    kicker: "A note from me",
    body: [
      "Before I was a nurse, I spent years as an advocate for people going through their hardest days. I learned to stay calm when someone else could not, and to never make a person who is already scared feel like the problem.",
      "That is the same person who shows up to our video calls. Feeding a new baby can bring up so much more than feeding, and there is room here for all of it. You will not get a lecture from me. You will get someone who has your back and knows this work well.",
    ],
    signoff: "So glad you're here.",
    // A short line rendered in the handwritten accent font.
    signature: "— your consultant",
  },

  // WHAT I ACTUALLY HELP WITH — her real focus areas, as warm prose + tags,
  // never three identical cards. Pulled from the resume's focus areas.
  helpWith: {
    kicker: "How I can help",
    lead: "Most of what I do is help you gently work through what is feeling hard right now, then make a plan that fits your baby and your days.",
    // Tag-style list — real, specific, reads as expertise.
    tags: [
      "Common feeding challenges in the first six months",
      "Latch and positioning",
      "Milk supply worries",
      "Tender or painful feeding",
      "Combination feeding and pumping",
      "Getting ready to go back to work",
      "Mother-and-baby bonding and care",
      "Feeding after a hard birth",
      "Deciding what feels right for your family",
    ],
    closer: "However you choose to feed your baby, I am here to help you get there feeling supported, never judged.",
  },

  // SERVICES — kept, but the page renders them personally, not as a card grid.
  services: [
    {
      n: "01",
      name: "First full session",
      length: "75 min · video",
      desc: "Where most families start. We look at how feeding is really going, I answer the questions you've been Googling at midnight, and you leave with a plan built for your baby and your week.",
    },
    {
      n: "02",
      name: "Follow-up",
      length: "40 min · video",
      desc: "A shorter check-in to adjust as your baby changes. Feeding is a moving target in these months, and small corrections keep small problems small.",
    },
    {
      n: "03",
      name: "Before the baby comes",
      length: "60 min · video",
      desc: "Prenatal prep. We set honest expectations and make a plan, so you're not trying to learn everything at once while running on no sleep.",
    },
    {
      n: "04",
      name: "Weekly support group",
      length: "Small groups · ongoing",
      desc: "A small virtual room of parents in the same stretch you're in. I've run groups like this for years. Part guidance, part company, always judgment-free.",
    },
  ],

  // THE PATH HERE — a real timeline from the resume. This is the section that
  // proves the origin story instead of just asserting it.
  timeline: {
    kicker: "The path here",
    lead: "I did not take a straight line to this work. I came to it through years of being the calm person for families on hard days, and I have never forgotten how that feels.",
    stops: [
      {
        years: "2014–2017",
        role: "Advocate",
        place: "Crisis Center",
        desc: "Support and advocacy for people going through their hardest days, walking alongside them week after week. This is where I learned to build trust gently, with someone who is frightened.",
      },
      {
        years: "2023–now",
        role: "Mother-baby registered nurse",
        place: "Hospital for Women & Babies",
        desc: "Bedside care for new families during a tender, wide-open transition, adjusting the plan as each day unfolds.",
      },
      {
        years: "2025–now",
        role: "Maternal education consultant · IBCLC",
        place: "Hospital for Women & Babies",
        desc: "Teaching parents and staff, and co-leading weekly breastfeeding support groups on the very challenges families meet in the first six months.",
      },
    ],
  },

  // CREDENTIALS — full name leads (in plain words), the abbreviation is a quiet
  // tag beside it, and each explanation actually explains itself. Framed warmly
  // so a tired parent knows what they mean without a resume feel.
  credentials: {
    frame: "A little about my background",
    // Warm, human framing — describes her experience, not a resume dump. She'd
    // also mention she's a mom (signals she gets it), without any "I did it the
    // 'right' way" that could make a struggling parent feel judged.
    lead: "I am a mom of three, so I have lived the tired, worried, up-all-night part of this myself. Here is a little about the rest of my background, in case it helps you feel in good hands.",
    // Rendered near the marks; the state license matters for a nurse.
    license: "Licensed RN · Florida",
    // NOTE: dates in [brackets] are placeholders for Thanisha to fill from her
    // own record — resume shows RN work since 2023 and IBCLC by 2025, but not
    // exact certification dates. Keep them honest; do not invent numbers.
    marks: [
      {
        full: "Registered Nurse",
        abbr: "RN",
        plain: "I have cared for new mothers and babies on a hospital mother-baby unit since [2023], which is where I saw how often feeding is the hardest, loneliest part of those first weeks.",
      },
      {
        full: "Board-Certified Lactation Consultant",
        abbr: "IBCLC",
        plain: "This is the certification to look for in a lactation consultant. It took hundreds of supervised hours with real families to earn, and it is what I do every day.",
      },
      {
        full: "Master of Public Health",
        abbr: "MPH",
        plain: "I studied how care reaches people, and it is the reason I meet with families over video instead of asking them to come to me.",
      },
      {
        full: "Bachelor of Science in Nursing",
        abbr: "BSN",
        plain: "Where my nursing training began, and the degree my license is built on.",
      },
    ],
  },

  // WEEKLY GROUPS I RUN — real listings, prominent. She insisted on these.
  groups: {
    kicker: "Groups I run",
    lead: "You do not have to book a private session to get support. Come to a group. Some weeks you'll need the answer; some weeks you'll just need to hear you're not the only one.",
    sessions: [
      { day: "Tuesdays", time: "10:00 AM", title: "First weeks circle", note: "Newborn through six weeks. The foggiest stretch." },
      { day: "Thursdays", time: "8:30 PM", title: "Evening feed-in", note: "After bedtime, for the parents on the night shift." },
      { day: "Saturdays", time: "11:00 AM", title: "Back-to-work planning", note: "Pumping, storage, keeping feeding going once leave ends." },
    ],
  },

  // QUESTIONS PARENTS ASK ME — an FAQ she'd write. Voice, not boilerplate.
  faq: {
    kicker: "Questions parents ask me",
    items: [
      {
        q: "Is it too late to get help?",
        a: "Almost never. Whether you're on day three or month four, there's usually something we can adjust. The parents who think it's too late are the ones I help most.",
      },
      {
        q: "What if I want to stop breastfeeding?",
        a: "Then we'll make that go smoothly and comfortably. I support how you feed, not one right answer. Fed, safe, and a parent who isn't falling apart — that's the goal.",
      },
      {
        q: "Do we really not have to meet in person?",
        a: "We really don't. Video works well for feeding support, and it means you're on your own couch with your own baby instead of packing a diaper bag to sit in a lobby.",
      },
      {
        q: "I'm barely holding it together. Is that normal?",
        a: "Yes, and you can bring that to our call too. These weeks are tender in ways that reach far past feeding. I have spent a career being a calm, steady person for people in hard moments, and I am not going anywhere.",
      },
    ],
  },

  // TESTIMONIALS — placeholder but specific, so they read real.
  testimonials: [
    {
      quote:
        "She got on a video call at 11 at night when I was in tears and sure I was starving my daughter. By the end of the week we had a rhythm. I still don't know how she stayed that calm.",
      who: "Placeholder parent · 3 weeks postpartum",
    },
    {
      quote:
        "I'd already seen two people in person and left both feeling worse. This was the first time someone asked how I was doing before telling me what I was doing wrong.",
      who: "Placeholder parent · second baby",
    },
    {
      quote:
        "Being able to do this from my couch, with my own baby, without packing up to sit in a waiting room, was the whole thing for me.",
      who: "Placeholder parent · virtual only",
    },
    {
      quote:
        "We did a prenatal session and I thought it was overkill. Then day two happened exactly like she said it might, and I knew what to do instead of panicking.",
      who: "Placeholder parent · prepared before birth",
    },
  ],

  // CTA + contact. Contact is placeholder — no real phone/email/address.
  cta: {
    label: "Book a consultation",
    href: "#book",
    heading: "When you're ready, I'm here.",
    sub: "Pick a time that works, even if it's odd hours. Tell me a little about what's going on, and we'll start from there.",
  },

  contact: {
    email: "hello@latched.example",
    bookingLine: "Booking usually within a few days.",
    location: "Virtual · available wherever you are",
  },

  // IMAGE SLOTS — swap these freely. Intentionally diverse, real families and
  // honest feeding/nursing imagery (this practice does not hide from what it
  // does). Ruthnie is sourcing specific photos on Unsplash; drop the direct
  // https://images.unsplash.com/photo-... URL in here per slot.
  images: {
    // Shared/default hero (Site 1, Site 3). Ruthnie's pick (lucas mendes, L0cDMFldZgg).
    hero: "https://images.unsplash.com/photo-1612813200909-467a053b21ec?auto=format&fit=crop&w=1400&q=80",
    // Site 2 (Tender) hero — grayscale "Mother's Love" (Andrae Ricketts, Q9_zv0LN4jU).
    site2Hero: "https://images.unsplash.com/photo-1504888060547-83cbe78ccfe0?auto=format&fit=crop&w=1600&q=80",
    // A quiet detail (baby's hand, small moment).
    detail: "https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1400&q=80",
    // Note/about supporting image.
    note: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=1400&q=80",
  },
} as const;

export type Latched = typeof latched;
