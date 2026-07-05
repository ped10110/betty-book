import { createFileRoute, Link } from "@tanstack/react-router";
import bettyImg from "@/assets/betty.jpg";
import bookImg from "@/assets/book.jpg";
import { SiteNav, SiteFooter } from "@/components/PageShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Betty Adera — Leadership Mentor, Author & Speaker" },
      {
        name: "description",
        content:
          "Betty Adera helps emerging women leaders lead with courage, clarity and influence. Author of Influence Without Authority and founder of The Rise Collective and the Betty Adera Foundation.",
      },
      { property: "og:title", content: "Betty Adera — Leadership Mentor, Author & Speaker" },
      {
        property: "og:description",
        content:
          "A 20-year public health leader, author and global mentor. Read the book. Join The Rise Collective.",
      },
      { property: "og:image", content: bettyImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: bettyImg },
    ],
  }),
  component: Index,
});

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-radial-glow pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-[500px] w-[500px] rounded-full bg-plum/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-5 md:order-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold/70" />
            <div className="absolute -right-4 -bottom-4 h-24 w-24 border-b-2 border-r-2 border-gold/70" />

            <img
              src={bettyImg}
              alt="Portrait of Betty Adera"
              width={800}
              height={1000}
              className="portrait-frame relative h-full w-full rounded-sm object-cover"
            />

            <img
              src={bookImg}
              alt="Influence Without Authority by Betty Adera"
              width={1024}
              height={1280}
              className="book-shadow absolute -bottom-16 -right-10 w-44 md:-right-16 md:w-56"
            />

            <figure className="absolute -left-2 top-8 hidden max-w-[14rem] rounded-sm border border-gold/30 bg-plum-deep/85 p-5 backdrop-blur md:block md:-left-12">
              <span className="font-serif text-4xl leading-none text-gold">“</span>
              <blockquote className="-mt-2 font-serif italic leading-snug text-cream">
                Your leadership journey starts the day you decide to lead.
              </blockquote>
              <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.25em] text-gold/80">
                — Betty Adera
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="md:col-span-7 md:order-2">

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gold" />
            <span className="eyebrow">A Story of Leadership</span>
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-cream md:text-7xl">
            Twenty years.<br />
            Twelve countries.<br />
            <span className="italic text-gold">One conviction —</span><br />
            women are meant to lead.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
            I am Betty Adera — author, global public health leader, and mentor to over five
            hundred emerging women across the world. Everything I have learned in boardrooms,
            ministries, and villages, I have written down so you can lead without waiting for
            permission.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
            >
              Read the Book
              <span aria-hidden className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
            >
              Join The Rise Collective
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/10 pt-8">
            {[
              ["20+", "Years leading"],
              ["12+", "Countries"],
              ["500+", "Women mentored"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-serif text-3xl text-gold md:text-4xl">{n}</dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-cream/60">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative bg-plum-deep py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">About Betty</span>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            I have spent my life walking into rooms <em className="text-gold">I was never meant to be in</em> — and bringing other women with me.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-5 text-cream/80 leading-relaxed">
            <p>
              I have worked across more than a dozen countries in public health — designing
              programs, advising ministries, and sitting in rooms where decisions about women's
              lives are made too often without women in them.
            </p>
            <p>
              Along the way I have seen one consistent gap: young women with the potential, the
              passion, and the vision to lead — but without access to mentorship that prepares them
              for the rooms they are about to enter.
            </p>
            <p>
              This platform, this book, and these programs are my answer to that gap.
            </p>
            <p>
              I also founded the{" "}
              <a
                href="https://bettyaderafoundation.org/"
                target="_blank"
                rel="noreferrer"
                className="text-gold hover:underline"
              >
                Betty Adera Foundation
              </a>
              {" "}— extending this work into communities where mentorship and opportunity are needed most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-1">
            {[
              {
                title: "Author",
                body: "Influence Without Authority — birthing the next generation of women leaders through mentorship.",
              },
              {
                title: "Global Public Health Leader",
                body: "Two decades shaping programs and policy across countries and institutions.",
              },
              {
                title: "Mentor & Founder",
                body: "The Rise Collective, the Leadership Accelerator, and the Betty Adera Foundation.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-sm border border-cream/10 bg-card/40 p-6 transition hover:border-gold/40"
              >
                <h3 className="font-serif text-xl text-gold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Book() {
  return (
    <section id="book" className="relative overflow-hidden bg-plum py-28">
      <div className="absolute inset-0 bg-radial-glow opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl" />
          <img
            src={bookImg}
            alt="Influence Without Authority — book cover"
            loading="lazy"
            width={1024}
            height={1280}
            className="book-shadow relative w-full"
          />
        </div>

        <div>
          <span className="eyebrow">The Book</span>
          <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
            Influence Without <em className="text-gold">Authority</em>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-cream/60">
            Birthing the next generation of women leaders through mentorship
          </p>

          <div className="gold-divider my-8" />

          <p className="text-cream/80 leading-relaxed">
            What if true leadership wasn't about titles, but about unleashing your innate
            influence to transform communities and continents?
          </p>
          <p className="mt-4 text-cream/80 leading-relaxed">
            In <em className="text-gold">Influence Without Authority</em>, Betty Adera offers
            a simple yet powerful roadmap for young African women to lead boldly and
            authentically — drawing from her own journey of breaking cultural stereotypes to
            build global impact.
          </p>

          <ul className="mt-6 space-y-3 text-cream/80">
            {[
              "Forge unbreakable character through integrity, empathy, and humility",
              "Harness the power of mentorship and sisterhood to amplify your voice",
              "Master financial literacy and strategic influence across every arena",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 text-gold">◆</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-serif italic text-gold/90">
            "The future is female and African. Arise, claim your place and lead with purpose."
          </p>

          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-cream/50">
            Print edition · Soft-cover edition coming soon
          </p>
          <div className="mt-3 flex flex-wrap gap-4">
            <Link
              to="/book"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
            >
              Buy the Book — KES 1,500 / ~$15 USD
            </Link>
            <Link
              to="/book"
              className="rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
            >
              Read more about the book →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      tag: "Flagship · 6 months",
      name: "The Rise Collective",
      body: "A 6-month global mentorship programme for young women aged 18–40 ready to step into leadership with intention.",
      cta: "Apply to Join",
      to: "/rise-collective" as const,
    },
    {
      tag: "Intensive · 2 months · Max 15",
      name: "Leadership Accelerator",
      body: "An application-based deep-dive for selected women — small group coaching, action plans and personal accountability.",
      cta: "Learn More",
      to: "/accelerator" as const,
    },
  ];
  return (
    <section id="programs" className="bg-plum-deep py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Leadership Programmes</span>
            <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
              Grow into the leader <em className="text-gold">you were made to be.</em>
            </h2>
          </div>
          <p className="max-w-sm text-cream/70">
            Two distinct mentorship cohorts for women at different stages of the journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col rounded-sm border border-cream/10 bg-card/40 p-10 transition hover:border-gold/50"
            >
              <span className="eyebrow text-gold-soft">{p.tag}</span>
              <h3 className="mt-3 font-serif text-3xl text-cream">{p.name}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-cream/75">{p.body}</p>
              <Link
                to={p.to}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold transition group-hover:gap-3"
              >
                {p.cta} <span aria-hidden>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


function SpeakingTeaser() {
  return (
    <section id="speaking" className="bg-plum py-24">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <span className="eyebrow">Speaking</span>
        <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl">
          Hosting an event? <em className="text-gold">Invite Betty to speak.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-cream/75 leading-relaxed">
          Betty is available for keynotes, fireside conversations and workshops on women's
          leadership, influence without authority, and building courageous careers. If you are
          organising a conference, corporate offsite, university event or women's leadership
          convening, this is where to begin.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/speaking"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
          >
            See speaking topics & formats →
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-primary-foreground"
          >
            Request Betty to Speak
          </Link>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-plum-deep text-cream">
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Book />
        <Programs />
        <SpeakingTeaser />
      </main>
      <SiteFooter />
    </div>
  );
}
