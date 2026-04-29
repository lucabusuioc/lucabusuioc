export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Luca Busuioc. Cordenons, Italy.</p>
        <div className="flex items-center gap-5">
          <a href="mailto:lucabusuio2006@gmail.com" className="hover:text-foreground transition-colors">
            lucabusuio2006@gmail.com
          </a>
          <a href="tel:+393703274074" className="hover:text-foreground transition-colors">
            +39 370 327 4074
          </a>
        </div>
      </div>
    </footer>
  );
}
