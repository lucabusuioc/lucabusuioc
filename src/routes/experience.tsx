import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

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

function ExperiencePage() {
  const { t } = useI18n();
  const c = t.experience;
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 sm:pt-20 pb-12">
      <header className="mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">{c.kicker}</p>
        <h1 className="text-4xl sm:text-5xl text-foreground">{c.title}</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl">{c.intro}</p>
      </header>

      <section>
        <h2 className="text-2xl text-foreground mb-8">{c.workHeading}</h2>
        <ol className="relative border-l border-border pl-8 space-y-12">
          {c.work.map((w) => (
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
        <h2 className="text-2xl text-foreground mb-8">{c.educationHeading}</h2>
        <div className="space-y-8">
          <article className="border border-border rounded-xl p-8 bg-card">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl text-foreground">{c.uniudTitle}</h3>
              <span className="text-sm text-muted-foreground">{c.current}</span>
            </div>
            <p className="text-accent text-sm mt-1">{c.uniudLocation}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{c.uniudDesc}</p>
          </article>

          <article className="relative border-2 border-accent/40 rounded-xl p-8 bg-card">
            <span className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs uppercase tracking-wider px-3 py-1 rounded-full">
              {c.upcoming}
            </span>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl text-foreground">{c.antwerpTitle}</h3>
              <span className="text-sm text-muted-foreground">{c.nextSemester}</span>
            </div>
            <p className="text-accent text-sm mt-1">{c.antwerpLocation}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{c.antwerpDesc}</p>
          </article>
        </div>
      </section>
    </div>
  );
}
