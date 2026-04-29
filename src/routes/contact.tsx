import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact, Skills & Languages · Luca Busuioc" },
      {
        name: "description",
        content:
          "Languages, technical skills and how to reach Luca Busuioc by email, phone and location.",
      },
      { property: "og:title", content: "Contact · Luca Busuioc" },
      {
        property: "og:description",
        content: "Skills, languages, and how to get in touch.",
      },
    ],
  }),
  component: ContactPage,
});

const languages = [
  { name: "Italian", level: "Native" },
  { name: "Romanian", level: "Native" },
  { name: "English", level: "B2 in Listening, Reading, Writing & Speaking" },
];

const skills = [
  "C programming",
  "AI tools",
  "Microsoft Office (Word, Excel, PowerPoint)",
  "Email & productivity workflows",
  "PDF & document management",
  "Social platforms & communication",
];

function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 sm:pt-20 pb-12">
      <header className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Contact</p>
        <h1 className="text-4xl sm:text-5xl text-foreground">Let's get in touch</h1>
        <p className="mt-4 text-muted-foreground">
          The fastest way to reach me is by email. I'm open to internships, hackathon teams,
          and event collaborations — especially during my Erasmus in Antwerp.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <a
          href="mailto:lucabusuio2006@gmail.com"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Personal email</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors break-all">
            lucabusuio2006@gmail.com
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Best for general contact</p>
        </a>
        <a
          href="mailto:busuioc.luca@spes.uniud.it"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">University email</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors break-all">
            busuioc.luca@spes.uniud.it
          </p>
          <p className="mt-1 text-sm text-muted-foreground">University of Udine</p>
        </a>
        <a
          href="tel:+393703274074"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors md:col-span-2"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Phone</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors">
            +39 370 327 4074
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Cordenons (PN), Italy</p>
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/luca-busuioc-884403365"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors">
            Luca Busuioc
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Professional network</p>
        </a>
        <a
          href="https://www.instagram.com/lucabusuioc"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Instagram</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors break-all">
            @lucabusuioc
          </p>
          <p className="mt-1 text-sm text-muted-foreground">Personal</p>
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-12">
        <div>
          <h2 className="text-2xl text-foreground mb-6">Languages</h2>
          <ul className="space-y-4">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <span className="text-foreground">{l.name}</span>
                <span className="text-sm text-muted-foreground text-right">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-foreground mb-6">Skills</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <li
                key={s}
                className="border border-border rounded-full px-4 py-2 text-sm text-muted-foreground bg-card"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
