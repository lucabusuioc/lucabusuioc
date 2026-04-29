import { useI18n } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Luca Busuioc. {t.footer.location}.</p>
        <div className="flex items-center gap-5">
          <a href="mailto:lucabusuio2006@gmail.com" className="hover:text-foreground transition-colors">
            lucabusuio2006@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
