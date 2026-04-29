import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Education · Luca Busuioc" },
      {
        name: "description",
        content:
          "Work at Pordenonelegge, TEDxPordenone and Centro Estate Viva, plus University of Udine and an upcoming Erasmus at the University of Antwerp.",
      },
      { property: "og:title", content: "Experience & Education · Luca Busuioc" },
      {
        property: "og:description",
        content:
          "Work, education and an upcoming Erasmus exchange at the University of Antwerp, Belgium.",
      },
    ],
  }),
  component: ExperiencePage,
});

const work = [
  {
    company: "Enactus — University of Udine",
    role: "Member",
    period: "2025 — Present",
    location: "Udine, Italy",
    bullets: [
      "Taking part in Enactus, a student network using entrepreneurial action to drive social and environmental impact",
      "Collaborating with fellow students on project ideation and execution",
      "Developing teamwork, leadership and problem-solving skills in a real-world context",
    ],
  },
  {
    company: "TEDxPordenone",
    role: "Team Member",
    period: "Apr 2025 — Present",
    location: "Pordenone, Italy",
    bullets: [
      "Supervise pre-event and on-site activities",
      "Support timing and priority management",
      "Solve operational issues in real time",
    ],
  },
  {
    company: "Pordenonelegge",
    role: "Venue Supervisor",
    period: "Sep 2023 — Sep 2025",
    location: "Pordenone, Italy",
    bullets: [
      "Welcomed and assisted attendees during festival events",
      "Provided programme, venue and schedule information",
      "Managed audience flow across multiple locations",
    ],
  },
  {
    company: "Centro Estate Viva",
    role: "Outdoor Activities Animator",
    period: "Jun — Jul 2022",
    location: "Cordenons, Italy",
    bullets: [
      "Maintenance and setup work",
      "Designed and ran activities for children",
      "Worked closely with a small team of animators",
    ],
  },
];

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 sm:pt-20 pb-12">
      <header className="mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Experience</p>
        <h1 className="text-4xl sm:text-5xl text-foreground">Work & Education</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          A timeline of the places I've worked, the events I've helped run, and where I'm
          studying — including my next step abroad.
        </p>
      </header>

      <section>
        <h2 className="text-2xl text-foreground mb-8">Work</h2>
        <ol className="relative border-l border-border pl-8 space-y-12">
          {work.map((w) => (
            <li key={w.company} className="relative">
              <span className="absolute -left-[37px] top-2 w-3 h-3 rounded-full bg-accent ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl text-foreground">{w.role}</h3>
                <span className="text-sm text-muted-foreground">{w.period}</span>
              </div>
              <p className="text-accent text-sm mt-1">
                {w.company} · {w.location}
              </p>
              <ul className="mt-4 space-y-2 text-muted-foreground text-sm leading-relaxed list-disc list-outside ml-4">
                {w.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl text-foreground mb-8">Education</h2>
        <div className="space-y-8">
          <article className="border border-border rounded-xl p-8 bg-card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl text-foreground">University of Udine — Electronic Engineering</h3>
              <span className="text-sm text-muted-foreground">Current</span>
            </div>
            <p className="text-accent text-sm mt-1">Udine, Italy</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Currently studying Electronic Engineering at the University of Udine, building
              a foundation in maths, physics, electronics and programming while staying
              active in Enactus, hackathons and innovation events.
            </p>
          </article>

          <article className="relative border-2 border-accent/40 rounded-xl p-8 bg-card">
            <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              Upcoming
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl text-foreground">University of Antwerp — Erasmus Exchange</h3>
              <span className="text-sm text-muted-foreground">Next semester</span>
            </div>
            <p className="text-accent text-sm mt-1">Antwerp, Belgium 🇧🇪</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Next semester I'll be moving to Antwerp for an Erasmus exchange at the
              University of Antwerp. I'm looking forward to studying in an international
              environment, improving my English in a daily-use context, and connecting with
              students and projects across Europe. Belgium also sits at the crossroads of
              several languages and cultures, which I expect will sharpen my intercultural
              skills as much as my academic ones.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
