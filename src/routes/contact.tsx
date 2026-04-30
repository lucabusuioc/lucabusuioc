import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";

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

function ContactPage() {
  const { t, lang } = useI18n();
  const c = t.contact;
  return (
    <div className="mx-auto max-w-4xl px-6 pt-16 sm:pt-20 pb-12">
      <header className="mb-16 max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">{c.kicker}</p>
        <h1 className="text-4xl sm:text-5xl text-foreground">{c.title}</h1>
        <p className="mt-4 text-muted-foreground">{c.intro}</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <a
          href="mailto:lucabusuio2006@gmail.com"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.personalEmail}</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors break-all">
            lucabusuio2006@gmail.com
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{c.personalEmailHint}</p>
        </a>
        <a
          href="mailto:busuioc.luca@spes.uniud.it"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.uniEmail}</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors break-all">
            busuioc.luca@spes.uniud.it
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{c.uniEmailHint}</p>
        </a>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/luca-busuioc-884403365"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.linkedin}</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors">
            Luca Busuioc
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{c.linkedinHint}</p>
        </a>
        <a
          href="https://www.instagram.com/lucabusuioc"
          target="_blank"
          rel="noopener noreferrer"
          className="group border border-border rounded-xl p-7 bg-card hover:border-accent transition-colors"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.instagram}</p>
          <p className="mt-2 text-lg text-foreground group-hover:text-accent transition-colors break-all">
            @lucabusuioc
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{c.instagramHint}</p>
        </a>
      </section>

      <div className="mt-10 flex justify-center">
        <a
          href={lang === "en" ? "/cv-en.pdf" : "/cv.pdf"}
          download={lang === "en" ? "Luca_Busuioc_CV_EN.pdf" : "Luca_Busuioc_CV.pdf"}
          className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          {c.downloadCv}
        </a>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-border pt-12 mt-16">
        <div>
          <h2 className="text-2xl text-foreground mb-6">{c.languagesTitle}</h2>
          <ul className="space-y-4">
            {c.languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                <span className="text-foreground">{l.name}</span>
                <span className="text-sm text-muted-foreground text-right">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-foreground mb-6">{c.skillsTitle}</h2>
          <ul className="flex flex-wrap gap-2">
            {c.skills.map((s) => (
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
