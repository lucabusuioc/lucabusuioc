import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "it";

type Dict = typeof translations.en;

export const translations = {
  en: {
    nav: { home: "Home", experience: "Experience", awards: "Awards", contact: "Contact" },
    index: {
      kicker: "Portfolio · 2026",
      hi: "Hi, I'm Luca.",
      tagline1: "Curious, creative,",
      tagline2: "hackathon enthusiast.",
      intro:
        "I'm studying Electronic Engineering at the University of Udine. I love tackling messy problems with small teams, whether that means a 24-hour hackathon pitch, organising live events, contributing to Enactus at my university, or learning a new language abroad.",
      seeExp: "See my experience →",
      getInTouch: "Get in touch",
      stats: [
        { n: "6", label: "Awards & podium finishes" },
        { n: "3", label: "Languages spoken" },
        { n: "1", label: "Erasmus in Antwerp, soon" },
      ],
      aboutTitle: "A few things about me",
      about1:
        "I grew up bilingual (Italian and Romanian) and picked up English along the way. That mix shaped how I think: I'm comfortable jumping between contexts, teams and points of view, which has been useful in every hackathon I've joined.",
      about2Pre: "Next semester I'm leaving for an ",
      about2Highlight: "Erasmus exchange at the University of Antwerp, Belgium",
      about2Post:
        ". I'm looking forward to a new academic environment, new collaborators and a healthy dose of culture shock.",
      portraitAlt: "Portrait of Luca Busuioc",
    },
    experience: {
      kicker: "Experience",
      title: "Work & Education",
      intro:
        "A timeline of the places I've worked, the events I've helped run, and where I'm studying, including my next step abroad.",
      workHeading: "Work",
      educationHeading: "Education",
      current: "Current",
      upcoming: "Upcoming",
      nextSemester: "Next semester",
      uniudTitle: "University of Udine, Electronic Engineering",
      uniudLocation: "Udine, Italy",
      uniudDesc:
        "Currently studying Electronic Engineering at the University of Udine, building a foundation in maths, physics, electronics and programming while staying active in Enactus, hackathons and innovation events.",
      antwerpTitle: "University of Antwerp, Erasmus Exchange",
      antwerpLocation: "Antwerp, Belgium 🇧🇪",
      antwerpDesc:
        "Next semester I'll be moving to Antwerp for an Erasmus exchange at the University of Antwerp. I'm looking forward to studying in an international environment, improving my English in a daily-use context, and connecting with students and projects across Europe. Belgium also sits at the crossroads of several languages and cultures, which I expect will sharpen my intercultural skills as much as my academic ones.",
      work: [
        {
          company: "Enactus at the University of Udine",
          role: "Member",
          period: "2025 to Present",
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
          period: "Apr 2025 to Present",
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
          period: "Sep 2023 to Sep 2025",
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
          period: "Jun to Jul 2022",
          location: "Cordenons, Italy",
          bullets: [
            "Maintenance and setup work",
            "Designed and ran activities for children",
            "Worked closely with a small team of animators",
          ],
        },
      ],
    },
    awards: {
      kicker: "Awards",
      title: "Hackathons & Recognitions",
      intro:
        "Six podium finishes across hackathons, business pitches and academic competitions: a snapshot of the kind of fast, collaborative work I love.",
      readMore: "Read more",
      items: [
        {
          place: "2nd",
          title: "Hackathon Talentweek #GenNext 2026",
          org: "Unicredit",
          date: "Apr 2026",
          desc: "Entrepreneurial competition focused on developing innovative ideas in teams, building business models and pitching to a jury.",
        },
        {
          place: "2nd",
          title: "RaccontaEstero 2025",
          org: "IRSE, Istituto Regionale di Studi Europei",
          date: "Apr 2026",
          desc: "Regional Friuli Venezia Giulia competition on international experiences and themes, recognised for analysis, communication and intercultural reflection.",
        },
        {
          place: "3rd",
          title: "Christmas Hackathon 2025",
          org: "AsperAstra",
          date: "Dec 2025",
          desc: "Innovation competition based on rapid team prototyping, with a focus on problem solving, creativity and a final pitch in front of a jury.",
        },
        {
          place: "2nd",
          title: "Hackathon Artificial Intelligence Forum 2025",
          org: "DITEDI",
          date: "Oct 2025",
          desc: "Competitive event focused on innovation and AI, building team solutions and presenting to a jury.",
        },
        {
          place: "2nd",
          title: "Italian Chemistry Games (Team)",
          org: "Società Chimica Italiana",
          date: "May 2024",
          desc: "National chemistry competition based on problem solving and teamwork, recognised for analytical skills, problem solving and collaboration.",
        },
        {
          place: "2nd",
          title: "RaccontaEstero 2023",
          org: "IRSE, Istituto Regionale di Studi Europei",
          date: "Apr 2024",
          desc: "Regional Friuli Venezia Giulia competition on international experiences, recognised for analysis, communication and intercultural reflection.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Let's get in touch",
      intro:
        "The fastest way to reach me is by email. I'm open to internships, hackathon teams, and event collaborations, especially during my Erasmus in Antwerp.",
      personalEmail: "Personal email",
      personalEmailHint: "Best for general contact",
      uniEmail: "University email",
      uniEmailHint: "University of Udine",
      phone: "Phone",
      phoneHint: "Cordenons (PN), Italy",
      linkedin: "LinkedIn",
      linkedinHint: "Professional network",
      instagram: "Instagram",
      instagramHint: "Personal",
      downloadCv: "Download my CV",
      languagesTitle: "Languages",
      skillsTitle: "Skills",
      languages: [
        { name: "Italian", level: "Native" },
        { name: "Romanian", level: "Native" },
        { name: "English", level: "B2 in Listening, Reading, Writing & Speaking" },
      ],
      skills: [
        "C programming",
        "AI tools",
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Email & productivity workflows",
        "PDF & document management",
        "Social platforms & communication",
      ],
    },
    footer: { location: "Cordenons, Italy" },
  },
  it: {
    nav: { home: "Home", experience: "Esperienza", awards: "Premi", contact: "Contatti" },
    index: {
      kicker: "Portfolio · 2026",
      hi: "Ciao, sono Luca.",
      tagline1: "Curioso, creativo,",
      tagline2: "appassionato di hackathon.",
      intro:
        "Studio Ingegneria Elettronica all'Università di Udine. Mi piace affrontare problemi complessi in piccoli team, che si tratti di un pitch da hackathon di 24 ore, dell'organizzazione di eventi dal vivo, della partecipazione a Enactus in università o dell'apprendimento di una nuova lingua all'estero.",
      seeExp: "Vedi la mia esperienza →",
      getInTouch: "Contattami",
      stats: [
        { n: "6", label: "Premi e podi" },
        { n: "3", label: "Lingue parlate" },
        { n: "1", label: "Erasmus ad Anversa, in arrivo" },
      ],
      aboutTitle: "Qualcosa su di me",
      about1:
        "Sono cresciuto bilingue (italiano e rumeno) e ho imparato l'inglese strada facendo. Questo mix ha plasmato il mio modo di pensare: mi muovo con facilità tra contesti, team e punti di vista diversi, cosa che si è rivelata utile in ogni hackathon a cui ho partecipato.",
      about2Pre: "Il prossimo semestre parto per un ",
      about2Highlight: "Erasmus all'Università di Anversa, in Belgio",
      about2Post:
        ". Non vedo l'ora di trovarmi in un nuovo ambiente accademico, di conoscere nuovi collaboratori e di affrontare una sana dose di shock culturale.",
      portraitAlt: "Ritratto di Luca Busuioc",
    },
    experience: {
      kicker: "Esperienza",
      title: "Lavoro e Formazione",
      intro:
        "Una timeline dei luoghi in cui ho lavorato, degli eventi che ho contribuito a organizzare e di dove sto studiando, incluso il prossimo passo all'estero.",
      workHeading: "Lavoro",
      educationHeading: "Formazione",
      current: "In corso",
      upcoming: "In arrivo",
      nextSemester: "Prossimo semestre",
      uniudTitle: "Università di Udine, Ingegneria Elettronica",
      uniudLocation: "Udine, Italia",
      uniudDesc:
        "Attualmente studio Ingegneria Elettronica all'Università di Udine, costruendo basi solide in matematica, fisica, elettronica e programmazione, restando al contempo attivo in Enactus, hackathon ed eventi di innovazione.",
      antwerpTitle: "Università di Anversa, Scambio Erasmus",
      antwerpLocation: "Anversa, Belgio 🇧🇪",
      antwerpDesc:
        "Il prossimo semestre mi trasferirò ad Anversa per uno scambio Erasmus all'Università di Anversa. Sono entusiasta di studiare in un ambiente internazionale, di migliorare l'inglese nell'uso quotidiano e di entrare in contatto con studenti e progetti di tutta Europa. Il Belgio si trova inoltre al crocevia di diverse lingue e culture: mi aspetto che affinerà tanto le mie competenze interculturali quanto quelle accademiche.",
      work: [
        {
          company: "Enactus all'Università di Udine",
          role: "Membro",
          period: "2025 ad oggi",
          location: "Udine, Italia",
          bullets: [
            "Partecipo a Enactus, una rete studentesca che usa l'azione imprenditoriale per generare impatto sociale e ambientale",
            "Collaboro con altri studenti nell'ideazione e nella realizzazione dei progetti",
            "Sviluppo competenze di teamwork, leadership e problem solving in contesti reali",
          ],
        },
        {
          company: "TEDxPordenone",
          role: "Membro del team",
          period: "Apr 2025 ad oggi",
          location: "Pordenone, Italia",
          bullets: [
            "Supervisione delle attività pre-evento e in loco",
            "Supporto alla gestione dei tempi e delle priorità",
            "Risoluzione di problemi operativi in tempo reale",
          ],
        },
        {
          company: "Pordenonelegge",
          role: "Responsabile di sede",
          period: "Set 2023 a Set 2025",
          location: "Pordenone, Italia",
          bullets: [
            "Accoglienza e assistenza ai partecipanti durante gli eventi del festival",
            "Informazioni su programma, sedi e orari",
            "Gestione del flusso del pubblico tra più location",
          ],
        },
        {
          company: "Centro Estate Viva",
          role: "Animatore attività outdoor",
          period: "Giu a Lug 2022",
          location: "Cordenons, Italia",
          bullets: [
            "Lavori di manutenzione e allestimento",
            "Ideazione e conduzione di attività per bambini",
            "Lavoro a stretto contatto con un piccolo team di animatori",
          ],
        },
      ],
    },
    awards: {
      kicker: "Premi",
      title: "Hackathon e Riconoscimenti",
      intro:
        "Sei podi tra hackathon, pitch imprenditoriali e competizioni accademiche: un'istantanea del tipo di lavoro veloce e collaborativo che amo.",
      readMore: "Scopri di più",
      items: [
        {
          place: "2°",
          title: "Hackathon Talentweek #GenNext 2026",
          org: "Unicredit",
          date: "Apr 2026",
          desc: "Competizione imprenditoriale focalizzata sullo sviluppo di idee innovative in team, costruzione di business model e pitch davanti a una giuria.",
        },
        {
          place: "2°",
          title: "RaccontaEstero 2025",
          org: "IRSE, Istituto Regionale di Studi Europei",
          date: "Apr 2026",
          desc: "Concorso regionale del Friuli Venezia Giulia su esperienze e tematiche internazionali, premiato per analisi, comunicazione e riflessione interculturale.",
        },
        {
          place: "3°",
          title: "Christmas Hackathon 2025",
          org: "AsperAstra",
          date: "Dic 2025",
          desc: "Competizione di innovazione basata sulla prototipazione rapida in team, con focus su problem solving, creatività e pitch finale davanti a una giuria.",
        },
        {
          place: "2°",
          title: "Hackathon Artificial Intelligence Forum 2025",
          org: "DITEDI",
          date: "Ott 2025",
          desc: "Evento competitivo dedicato a innovazione e AI, con costruzione di soluzioni in team e presentazione a una giuria.",
        },
        {
          place: "2°",
          title: "Giochi della Chimica (Squadra)",
          org: "Società Chimica Italiana",
          date: "Mag 2024",
          desc: "Competizione nazionale di chimica basata su problem solving e teamwork, premiata per capacità analitiche, problem solving e collaborazione.",
        },
        {
          place: "2°",
          title: "RaccontaEstero 2023",
          org: "IRSE, Istituto Regionale di Studi Europei",
          date: "Apr 2024",
          desc: "Concorso regionale del Friuli Venezia Giulia sulle esperienze internazionali, premiato per analisi, comunicazione e riflessione interculturale.",
        },
      ],
    },
    contact: {
      kicker: "Contatti",
      title: "Mettiamoci in contatto",
      intro:
        "Il modo più veloce per raggiungermi è via email. Sono aperto a stage, team per hackathon e collaborazioni su eventi, soprattutto durante il mio Erasmus ad Anversa.",
      personalEmail: "Email personale",
      personalEmailHint: "Ideale per contatti generali",
      uniEmail: "Email universitaria",
      uniEmailHint: "Università di Udine",
      phone: "Telefono",
      phoneHint: "Cordenons (PN), Italia",
      linkedin: "LinkedIn",
      linkedinHint: "Rete professionale",
      instagram: "Instagram",
      instagramHint: "Personale",
      languagesTitle: "Lingue",
      skillsTitle: "Competenze",
      languages: [
        { name: "Italiano", level: "Madrelingua" },
        { name: "Rumeno", level: "Madrelingua" },
        { name: "Inglese", level: "B2 in Ascolto, Lettura, Scrittura e Parlato" },
      ],
      skills: [
        "Programmazione in C",
        "Strumenti di AI",
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Email e flussi di produttività",
        "Gestione PDF e documenti",
        "Piattaforme social e comunicazione",
      ],
    },
    footer: { location: "Cordenons, Italia" },
  },
} as const;

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "it") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const t = translations[lang] as Dict;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
