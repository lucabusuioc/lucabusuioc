import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/awards")({
  head: () => ({
    meta: [
      { title: "Awards & Hackathons · Luca Busuioc" },
      {
        name: "description",
        content:
          "Hackathon and competition results: AI Forum, Christmas Hackathon, Talentweek #GenNext, Italian Chemistry Games, RaccontaEstero.",
      },
      { property: "og:title", content: "Awards & Hackathons · Luca Busuioc" },
      {
        property: "og:description",
        content: "Six podium finishes across hackathons, business pitches and academic competitions.",
      },
    ],
  }),
  component: AwardsPage,
});

const links = [
  "https://www.padovaoggi.it/attualita/padova-chiusura-talent-premiazioni-4-aprile-2026.html",
  "https://centroculturapordenone.it/irse/concorsi/Concorso_RaccontaEstero/raccontaestero-2025",
  "https://www.rainews.it/tgr/fvg/articoli/2025/12/chrismas-hackathon-trieste-0d76e3c2-bb54-4d00-922c-4781dbc7d9f0.html",
  "https://www.ia-forum.it/hackathon",
  "https://www.societachimica.it/it/giochi_della_chimica/2023-24/home",
  "https://centroculturapordenone.it/irse/concorsi/Concorso_RaccontaEstero/RaccontaEstero/la-premiazione",
];

function AwardsPage() {
  const { t } = useI18n();
  const c = t.awards;
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 sm:pt-20 pb-12">
      <header className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">{c.kicker}</p>
        <h1 className="text-4xl sm:text-5xl text-foreground">{c.title}</h1>
        <p className="mt-4 text-muted-foreground">{c.intro}</p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {c.items.map((a, i) => (
          <li
            key={a.title}
            className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-serif text-4xl text-accent leading-none">{a.place}</span>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {a.date}
              </span>
            </div>
            <h2 className="mt-5 text-xl text-foreground">{a.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{a.org}</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{a.desc}</p>
            <a
              href={links[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-sm text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              {c.readMore} <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
