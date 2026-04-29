import { createFileRoute, Link } from "@tanstack/react-router";
import luca from "@/assets/luca.jpg";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luca Busuioc · Student & Hackathon Enthusiast" },
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
  const { t } = useI18n();
  const c = t.index;
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 sm:pt-24 pb-12">
      <section className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-6">{c.kicker}</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            {c.hi}<br />
            <span className="italic text-muted-foreground">{c.tagline1}</span><br />
            {c.tagline2}
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {c.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/experience"
              className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {c.seeExp}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
            >
              {c.getInTouch}
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-accent/10 rounded-2xl rotate-3" aria-hidden />
          <img
            src={luca}
            alt={c.portraitAlt}
            className="relative w-full aspect-[3/4] object-cover rounded-xl shadow-xl"
          />
        </div>
      </section>

      <section className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {c.stats.map((s) => (
          <div key={s.label} className="border border-border rounded-xl p-8 bg-card">
            <div className="font-serif text-5xl text-accent">{s.n}</div>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 border-t border-border pt-12">
        <h2 className="text-3xl text-foreground">{c.aboutTitle}</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-muted-foreground leading-relaxed">
          <p>{c.about1}</p>
          <p>
            {c.about2Pre}
            <span className="text-foreground font-medium">{c.about2Highlight}</span>
            {c.about2Post}
          </p>
        </div>
      </section>
    </div>
  );
}
