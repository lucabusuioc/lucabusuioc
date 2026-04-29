import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
  const { t } = useI18n();
  const links = [
    { to: "/", label: t.nav.home },
    { to: "/experience", label: t.nav.experience },
    { to: "/awards", label: t.nav.awards },
    { to: "/contact", label: t.nav.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Link to="/" className="font-serif text-xl tracking-tight">
            Luca <span className="text-accent">Busuioc</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
