import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navLinks: Array<{ label: string; href: string; route?: boolean }> = [
  { label: "About", href: "/#about" },
  { label: "The Book", href: "/book", route: true },
  { label: "Rise Collective", href: "/rise-collective", route: true },
  { label: "Accelerator", href: "/accelerator", route: true },
  { label: "Speaking", href: "/speaking", route: true },
  { label: "Blog", href: "/blog", route: true },
  { label: "Events", href: "/events", route: true },
  { label: "Gallery", href: "/gallery", route: true },
  { label: "Contact", href: "/contact", route: true },
];


export function SiteNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="group flex flex-col leading-tight">
          <span className="font-serif text-2xl text-cream tracking-tight">Betty Adera</span>
          <span className="eyebrow mt-0.5 text-[0.6rem]">Leadership · Author</span>
        </Link>
        <nav className="hidden flex-wrap items-center gap-6 md:flex">
          {navLinks.map((l) =>
            l.route ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm text-cream/80 transition hover:text-gold"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-cream/80 transition hover:text-gold"
              >
                {l.label}
              </a>
            ),
          )}
        </nav>
        <Link
          to="/apply"
          className="hidden rounded-full border border-gold/60 bg-gold px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft md:inline-block"
        >
          Apply to Rise Collective
        </Link>

      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-cream/10 bg-plum-deep py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-3 md:px-10">
        <div>
          <div className="font-serif text-2xl text-cream">Betty Adera</div>
          <p className="eyebrow mt-1 text-[0.6rem]">Leadership · Mentorship · Author</p>
          <p className="mt-6 max-w-xs text-sm text-cream/65 leading-relaxed">
            Helping young women lead with courage, clarity and influence — across continents
            and across rooms.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg text-gold">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/book" className="hover:text-gold">The Book</Link></li>
            <li><Link to="/rise-collective" className="hover:text-gold">Rise Collective</Link></li>
            <li><Link to="/accelerator" className="hover:text-gold">Accelerator</Link></li>
            <li><Link to="/apply" className="hover:text-gold">Apply</Link></li>
            <li><Link to="/speaking" className="hover:text-gold">Speaking</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/events" className="hover:text-gold">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-gold">Connect</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li><a href="mailto:bettyadera@gmail.com" className="hover:text-gold">bettyadera@gmail.com</a></li>

            <li>Nairobi · Global</li>
            <li>
              <a href="https://bettyaderafoundation.org/" target="_blank" rel="noreferrer" className="hover:text-gold">
                Betty Adera Foundation ↗
              </a>
            </li>
            <li className="flex gap-4 pt-2">
              <a href="https://facebook.com/BettyAdera" className="hover:text-gold">Facebook</a>
              <a href="#" className="hover:text-gold">LinkedIn</a>
              <a href="#" className="hover:text-gold">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-6 text-xs text-cream/40 md:px-10">
        © {new Date().getFullYear()} Betty Adera. All rights reserved.
      </div>
    </footer>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-plum-deep text-cream">
      <SiteNav />
      <main>
        <section className="relative overflow-hidden bg-radial-glow pt-32 pb-16 md:pt-40">
          <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
          <div className="relative mx-auto max-w-4xl px-6 md:px-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-tight text-cream md:text-6xl">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">{intro}</p>
            ) : null}
          </div>
        </section>
        <section className="bg-plum-deep pb-24">
          <div className="mx-auto max-w-5xl px-6 md:px-10">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
