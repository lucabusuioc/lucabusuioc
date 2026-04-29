import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageToggle() {
  const { lang, setLang } = useI18n();
  const options: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "it", label: "IT" },
  ];
  return (
    <div
      className="inline-flex items-center rounded-full border border-border bg-card p-0.5 text-xs"
      role="group"
      aria-label="Language switcher"
    >
      {options.map((o) => {
        const active = lang === o.code;
        return (
          <button
            key={o.code}
            type="button"
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            className={
              "px-2.5 py-1 rounded-full transition-colors " +
              (active
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
