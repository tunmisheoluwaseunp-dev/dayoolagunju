# Dayo Olagunju: Systems Builder

Build a single-page, high-conversion portfolio landing page for Dayo Olagunju, a Softr + Airtable developer who builds client portals, internal tools, dashboards, inventory/operations systems, marketplaces and automations. Secondary skills: Wix Studio (Velo) and Canva design. Target visitors: CEOs, founders, startups, operations heads and established brands. PRIMARY GOAL: get visitors to book a call. SECONDARY GOAL: build trust and authority. Tone: confident, plain-spoken, outcome-focused, no jargon, no hype, no fake numbers.

TECH: React + Vite + TypeScript + Tailwind + shadcn/ui + Framer Motion. Fully responsive (mobile-first), accessible, SEO meta tags and Open Graph, respect prefers-reduced-motion. Smooth-scroll anchor nav. No backend needed.

CTAs (use these exact links everywhere):
- Primary CTA "Book a free 30-min call" -> open Calendly popup widget for https://calendly.com/tunmisheoluwaseunp/30min (load Calendly's widget.js/css; fall back to opening the link in a new tab).
- Secondary CTA "Email me directly" -> mailto:tunmisheoluwaseunp@gmail.com?subject=Project%20enquiry&body=Hi%20Dayo%2C%0A%0AWhat%20I%20need%20built%3A%0AWho%20will%20log%20in%3A%0ATimeline%20and%20budget%3A
- LinkedIn (https://ng.linkedin.com/in/dayoolagunju) appears ONLY in the footer. Nowhere else.
- Repeat the primary CTA in: nav, hero, after Services, after Case Studies, after Process, after FAQ, final section, plus a sticky bottom CTA bar on mobile and a slim sticky pill on desktop that appears after scrolling past the hero.

DESIGN SYSTEM
- Dark, premium, "tech authority" look. Background #050B1A with subtle animated gradient-mesh blobs and faint grid/noise texture.
- Colors: electric blue #2F6BFF (glows, links, accents), warm amber #FFB23E (primary buttons and the headshot shape, because it contrasts with blue and draws the eye), text white / slate-300, cards rgba(255,255,255,0.04).
- Fonts: "Plus Jakarta Sans" or "Sora" for headings (tight tracking, very large), "Inter" for body.
- Glassmorphism cards: backdrop-blur, 1px border rgba(255,255,255,0.10), soft blue inner glow. On hover: lift 6px, border brightens to blue, and a cursor-following radial spotlight highlight inside the card.
- Buttons: amber primary with magnetic hover effect (slightly follows the cursor) and an arrow icon that slides; ghost secondary with border.

SIGNATURE ANIMATIONS (keep them smooth and subtle, 60fps):
1. Hero headline: lines reveal upward with a stagger; one key word sits inside a blue highlighted box that wipes in from the left (like a marker highlight).
2. Hero portrait: the uploaded transparent PNG /dayo-hero.png sits over a large rounded-square AMBER (#FFB23E) shape, with the head and shoulders breaking out of the top edge of the shape. Subtle parallax on mouse move. Around him, 3 floating glass chips gently bob: "Role-based access", "Live Airtable data", "Built in weeks".
3. Scroll-reveal (fade + rise) on every section, staggered children.
4. Count-up numbers when stats enter the viewport.
5. Infinite marquee of stack logos/wordmarks (pause on hover).
6. Section background glow that shifts slightly with scroll.
7. Animated underline on nav links; nav becomes blurred glass after scroll.

SECTIONS (in order):

1) NAV: wordmark "Dayo Olagunju" (small logo mark: a "D" in a rounded square), links: About, Services, Work, Stack, FAQ. Right: amber "Book a call" button.

2) HERO
- Eyebrow pill with a pulsing green dot: "Softr + Airtable developer · Taking new projects"
- H1: "Internal tools & client [portals] your team will actually use."  ([portals] is the highlighted-box word)
- Sub: "I build portals, dashboards and operations systems on Softr and Airtable, from a first working version to something your clients log into every day."
- Buttons: "Book a free 30-min call" (amber) + "Email me directly" (ghost)
- Microcopy under buttons: "No pitch. Tell me what your users need to see, and I'll tell you honestly if Softr fits."
- Right side: the amber shape + headshot composition described above.
- Bottom stat strip (glass): "3+ years building on Softr & Airtable" | "[PLACEHOLDER] projects shipped" | "4 languages (English, Dutch, French, German)" | "30+ hrs/week availability"

3) TRUST BAR: heading "Built with the tools modern teams already trust". Marquee of: Softr, Airtable, Make, Zapier, n8n, Wix Studio, Canva, HubSpot, Supabase, Stripe. Use clean text wordmarks in muted white with simple icons (I will replace with real logos later).

4) "SOUND FAMILIAR?" (empathy section, 5 glass cards with icons)
- "Your data lives in 7 spreadsheets and nobody trusts any of them."
- "Clients email you for updates that should just be a login away."
- "Your team copy-pastes between tools every single day."
- "You can't let each client see only their own data."
- "A half-built Softr or Airtable app is stuck and no one knows why."
Closing line under cards: "All of this is fixable, usually faster than you think." + primary CTA.

5) ABOUT (two columns, portrait optional here, use a different crop or a glass card with the same amber accent)
- Heading: "Hi, I'm Dayo. I turn messy operations into simple systems."
- Copy: "I'm a no-code developer focused on Softr and Airtable. I design the data underneath (linked records, formulas, automations) and the clean interface on top, so each person only sees what they should. I started in Wix Studio and Velo, building database-driven sites, user portals and API integrations, which is why I think like a developer even when I build without code. If you already have a Figma design or a working prototype, even better: that's the easiest kind of project for me to scope."
- "How I work" three small glass chips: "Solution-oriented", "Detail-oriented", "Clear weekly updates"
- Languages line: "Fluent in English. Conversational in Dutch, French and German."
- Small availability note: "Based in Nigeria (WAT). Calls scheduled around your timezone."

6) SERVICES (heading "What I build", 6 glass cards, each with icon, 2-line description, 3 tiny tags)
- Client portals: logins, role-based views, document hubs and onboarding, so every client sees only their own data.
- Internal tools & dashboards: dashboards on top of your existing Airtable base, plus approval workflows and request trackers.
- Inventory & operations systems: stock, orders, intake and project trackers your whole team can update.
- Marketplaces, directories & job boards: listings, search filters, saved items, member areas.
- Forms & automations: quote, booking and request forms that write straight into Airtable, connected with Make, Zapier, n8n and webhooks.
- Rescue & fix: permissions, filters, forms and duplicate records fixed on half-built Softr/Airtable apps.
Under the grid, a slim strip: "Also: Wix Studio websites · Canva brand & social assets" . Then primary CTA.

7) "NOT SURE WHERE TO START?" (ProsperSpark-style entry point, a wide glass banner with blue glow)
- Heading: "Not sure what to build first?"
- Text: "Book a 30-minute call. We'll map who needs to log in, what they need to see, and whether Softr is the right fit. You leave with a clear plan, even if we never work together."
- Button: "Book a free planning call".

8) CASE STUDIES (heading "Selected work", subheading "Real builds on Softr + Airtable"). 4 large glass cards in a 2x2 grid, each with a 16:10 image placeholder (shimmering skeleton + label "Screenshot coming soon"), a "Placeholder" badge, and these fields, all clearly marked and easy to edit from one data array in src/data/caseStudies.ts:
 a) Venue Booking Marketplace for Private Events | Challenge: [PLACEHOLDER] | Solution: [PLACEHOLDER] | Result: [PLACEHOLDER METRIC] | Tags: Softr, Airtable, Marketplace
 b) Donation Tracker & Fundraising Campaign Portal | same fields | Tags: Softr, Airtable, Portal
 c) Real Estate Listing Portal & Agent Dashboard | same fields | Tags: Softr, Airtable, Access control
 d) Client Onboarding Portal with document uploads | same fields | Tags: Softr, Airtable, Automation
Cards open a modal/detail drawer with the same fields plus "Live demo link: [PLACEHOLDER]". Hover: image zooms slightly, "View case study" arrow appears. Do NOT invent any numbers.

9) HOW IT WORKS (4 steps on an animated vertical/horizontal line that draws on scroll)
 1. Discover: a 30-minute call to understand your users, data and goals.
 2. Scope: I map the data model and screens and send a clear quote.
 3. Build: a working first version fast, with regular demos so nothing surprises you.
 4. Launch & support: handover, training and ongoing improvements.
 Then primary CTA.

10) COST CALCULATOR (interactive glass card; concept: make the cost of manual work visible)
- Heading: "What is manual work really costing you?"
- Inputs (sliders): hours per week spent on a manual task, number of people doing it, average hourly cost (currency selector USD/EUR/GBP/NGN).
- Output (animated count-up): cost per month and per year. Disclaimer: "Your own numbers, not a promise. Let's find what's worth automating."
- Button: "Let's cut that, book a call".

11) STACK (heading "The tools I build with")
- Primary (large cards with glow): Softr, Airtable.
- Integrations & automation: Make, Zapier, n8n, Webhooks & REST APIs.
- Design & websites (secondary): Wix Studio (Velo), Canva.
- Each card has a one-line "what I use it for".

12) CERTIFICATIONS (placeholders until I upload images)
- Grid of 4 cards driven by an array {title, issuer, year, imageUrl}. If imageUrl is empty show a dashed-border placeholder with a certificate icon and "Certificate image coming soon". Placeholder titles: "Softr [PLACEHOLDER]", "Airtable [PLACEHOLDER]", "Make [PLACEHOLDER]", "[PLACEHOLDER]". Clicking a real image opens a lightbox.

13) TESTIMONIALS (placeholders, clearly marked)
- 3 glass cards with quote placeholder, name, role, company, avatar skeleton; carousel with arrows on mobile.

14) FAQ (accordion, glass style, animated chevrons)
- "How do I know if Softr is right for my project?" -> "Softr is great when you need logins, role-based views, dashboards and workflows on top of structured data. If something else fits better, I'll tell you on the first call."
- "How long does a first version take?" -> "Most first versions take a few weeks, depending on scope. I'll give you a realistic timeline after our call."
- "Who owns the app and the data?" -> "You do. It lives in your Softr and Airtable accounts."
- "Can each client only see their own data?" -> "Yes. Role-based access and user groups are core to how I build portals."
- "What do I need to bring to the first call?" -> "A rough idea of who needs to log in, what they should see, and a ballpark budget. A Figma design or prototype helps but isn't required."
- "Do you work across timezones?" -> "Yes. I'm based in Nigeria (WAT) and schedule calls around your hours."
- "How much does it cost?" -> "It depends on scope, so I quote per project after a short call."
Then primary CTA.

15) FINAL CTA (full-width, giant "Let's Talk." type in the Monino style, with blue glow)
- Text: "30 minutes to find out if we're a fit."
- Buttons: Calendly popup + email.
- Microcopy: "Usually replies within 24 hours." (editable)

16) FOOTER: wordmark, short tagline "Softr & Airtable systems for teams that are done with spreadsheets", anchor links, email link, and the LinkedIn icon link (ONLY place LinkedIn appears), copyright with current year.

CONTENT RULES: Put all copy in src/data files so I can edit easily. Mark every placeholder with the visible text "[PLACEHOLDER]" so I can find it. Never fabricate client names, metrics or logos. No pricing section. Optimize Lighthouse performance (lazy-load images, small bundle). Add a subtle loading animation and a 404 page.

Reference URLs:
https://flow.digital/
https://www.appbox.agency/
https://moninosolutions.com/
https://www.prosperspark.com/

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dayoolagunju.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/850e3b74-cc30-4fb0-acc3-3c01c94a15ce).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
