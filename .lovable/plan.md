## Personal Website — Luca Busuioc

A clean, minimal, professional multi-page site in English based on the CV, including the upcoming Erasmus in Antwerp.

### Pages (separate routes)

1. **Home (**`/`**)** — Hero with portrait photo, name, short tagline ("Student, problem solver, hackathon enthusiast"), brief intro paragraph. Quick highlights (3 stat cards: hackathon awards, languages, current studies).
2. **Experience (`/experience`)** — Timeline with:
  - Pordenonelegge — Venue Supervisor (Sep 2023 – Sep 2025)
  - Centro Estate Viva — Outdoor Activities Animator (Jun–Jul 2022)
  - TEDxPordenone — Team Member (Apr 2025 – Present)
  - **Education & Erasmus** subsection: University of Udine + upcoming **Erasmus exchange at University of Antwerp, Belgium (next semester)** with a short paragraph about goals (international experience, intercultural exchange, academic growth).
3. **Awards (`/awards`)** — Grid of 6 award cards:
  - 2nd — Italian Chemistry Games (Team), 2024
  - 2nd — RaccontaEstero 2023
  - 2nd — RaccontaEstero 2025
  - 2nd — AI Forum Hackathon 2025 (DITEDI)
  - 3rd — Christmas Hackathon 2025 (AsperAstra)
  - 2nd — Talentweek #GenNext 2026 (Unicredit)
   Each with date, organization, description, and external link.
4. **Contact (`/contact`)** — Skills, languages (Italian/Romanian native, English B2), tech competencies (C programming, Office, AI tools), and contact info (email, phone, location). Mailto button.

### Design

- Minimal & professional: generous whitespace, serif/sans pairing (e.g., system serif for headings, sans for body), neutral palette (off-white background, dark slate text, single muted accent).
- Shared header with site nav (Home · Experience · Awards · Contact) and footer with email/phone.
- Responsive (mobile-first), subtle hover transitions, no heavy animations.
- Portrait photo extracted from the CV PDF, placed in `src/assets/`.
- Per-route `head()` metadata (title, description, og tags) for SEO.

### Technical notes

- TanStack Start file-based routes: `index.tsx`, `experience.tsx`, `awards.tsx`, `contact.tsx`, plus a shared `Header`/`Footer` component used in `__root.tsx`.
- Tailwind v4 tokens already in `styles.css`; tweak `--background`/`--foreground` if needed for warmer off-white.
- Copy the portrait image from the parsed PDF into `src/assets/luca.jpg` and import it in the hero.
- All content in English.