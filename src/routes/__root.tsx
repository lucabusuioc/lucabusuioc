import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { I18nProvider } from "../lib/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-serif text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luca Busuioc · Student & Hackathon Enthusiast" },
      {
        name: "description",
        content:
          "Personal website of Luca Busuioc, student and multi-award hackathon competitor, soon on Erasmus exchange in Antwerp, Belgium.",
      },
      { name: "author", content: "Luca Busuioc" },
      { property: "og:title", content: "Luca Busuioc · Student & Hackathon Enthusiast" },
      { property: "og:description", content: "A personal portfolio website showcasing CV experiences, academic pursuits, and future plans." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Luca Busuioc · Student & Hackathon Enthusiast" },
      { name: "description", content: "A personal portfolio website showcasing CV experiences, academic pursuits, and future plans." },
      { name: "twitter:description", content: "A personal portfolio website showcasing CV experiences, academic pursuits, and future plans." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0c3b198-9944-4e46-9904-d3970913e1df/id-preview-1cb284b9--6eeb282a-b0f0-4f24-b83e-9d1c45897c89.lovable.app-1777455738538.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f0c3b198-9944-4e46-9904-d3970913e1df/id-preview-1cb284b9--6eeb282a-b0f0-4f24-b83e-9d1c45897c89.lovable.app-1777455738538.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
