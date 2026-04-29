import { createFileRoute, Link } from "@tanstack/react-router";
import luca from "@/assets/luca.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luca Busuioc — Student & Hackathon Enthusiast" },
      {
        name: "description",
        content:
          "Italian student, multi-award hackathon competitor, soon on Erasmus exchange at the University of Antwerp.",
      },
      { property: "og:title", content: "Luca Busuioc" },
      {
        property: "og:description",
        content:
          "Italian student, multi-award hackathon competitor, soon on Erasmus exchange at the University of Antwerp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 sm:pt-24 pb-12">
      <section className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-6">Portfolio · 2026</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Hi, I'm Luca.<br />
            <span className="italic text-muted-foreground">Student, problem&nbsp;solver,</span><br />
            hackathon enthusiast.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Born in 2006, based in Cordenons (Italy), studying at the University of Udine.
            I love tackling messy problems with small teams — whether that means a 24-hour
            hackathon pitch, organising live events, or learning a new language abroad.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/experience"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              See my experience →
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/10 rounded-2xl rotate-3" aria-hidden />
          <img
            src={luca}
            alt="Portrait of Luca Busuioc"
            className="relative w-full aspect-[3/4] object-cover rounded-xl shadow-xl"
          />
        </div>
      </section>

      <section className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { n: "6", label: "Awards & podium finishes" },
          { n: "3", label: "Languages spoken" },
          { n: "1", label: "Erasmus in Antwerp, soon" },
        ].map((s) => (
          <div key={s.label} className="border border-border rounded-xl p-8 bg-card">
            <div className="font-serif text-5xl text-accent">{s.n}</div>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 border-t border-border pt-12">
        <h2 className="text-3xl text-foreground">A few things about me</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
          <p>
            I grew up bilingual (Italian and Romanian) and picked up English along the way.
            That mix shaped how I think — I'm comfortable jumping between contexts, teams
            and points of view, which has been useful in every hackathon I've joined.
          </p>
          <p>
            Next semester I'm leaving for an{" "}
            <span className="text-foreground font-medium">
              Erasmus exchange at the University of Antwerp, Belgium
            </span>
            . I'm looking forward to a new academic environment, new collaborators and a
            healthy dose of culture shock.
          </p>
        </div>
      </section>
    </div>
  );
}
