import { createFileRoute } from "@tanstack/react-router";

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

const awards = [
  {
    place: "2nd",
    title: "Hackathon Talentweek #GenNext 2026",
    org: "Unicredit",
    date: "Apr 2026",
    desc: "Entrepreneurial competition focused on developing innovative ideas in teams, building business models and pitching to a jury.",
    link: "https://www.padovaoggi.it/attualita/padova-chiusura-talent-premiazioni-4-aprile-2026.html",
  },
  {
    place: "2nd",
    title: "RaccontaEstero 2025",
    org: "IRSE, Istituto Regionale di Studi Europei",
    date: "Apr 2026",
    desc: "Regional Friuli Venezia Giulia competition on international experiences and themes, recognised for analysis, communication and intercultural reflection.",
    link: "https://centroculturapordenone.it/irse/concorsi/Concorso_RaccontaEstero/raccontaestero-2025",
  },
  {
    place: "3rd",
    title: "Christmas Hackathon 2025",
    org: "AsperAstra",
    date: "Dec 2025",
    desc: "Innovation competition based on rapid team prototyping, with a focus on problem solving, creativity and a final pitch in front of a jury.",
    link: "https://www.rainews.it/tgr/fvg/articoli/2025/12/chrismas-hackathon-trieste-0d76e3c2-bb54-4d00-922c-4781dbc7d9f0.html",
  },
  {
    place: "2nd",
    title: "Hackathon Artificial Intelligence Forum 2025",
    org: "DITEDI",
    date: "Oct 2025",
    desc: "Competitive event focused on innovation and AI — building team solutions and presenting to a jury.",
    link: "https://www.ia-forum.it/hackathon",
  },
  {
    place: "2nd",
    title: "Italian Chemistry Games — Team",
    org: "Società Chimica Italiana",
    date: "May 2024",
    desc: "National chemistry competition based on problem solving and teamwork — recognised for analytical skills, problem solving and collaboration.",
    link: "https://www.societachimica.it/it/giochi_della_chimica/2023-24/home",
  },
  {
    place: "2nd",
    title: "RaccontaEstero 2023",
    org: "IRSE — Istituto Regionale di Studi Europei",
    date: "Apr 2024",
    desc: "Regional Friuli Venezia Giulia competition on international experiences — recognised for analysis, communication and intercultural reflection.",
    link: "https://centroculturapordenone.it/irse/concorsi/Concorso_RaccontaEstero/RaccontaEstero/la-premiazione",
  },
];

function AwardsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-16 sm:pt-20 pb-12">
      <header className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">Awards</p>
        <h1 className="text-4xl sm:text-5xl text-foreground">Hackathons & Recognitions</h1>
        <p className="mt-4 text-muted-foreground">
          Six podium finishes across hackathons, business pitches and academic competitions —
          a snapshot of the kind of fast, collaborative work I love.
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((a) => (
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
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-sm text-foreground hover:text-accent transition-colors inline-flex items-center gap-1"
            >
              Read more <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
