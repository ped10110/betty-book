import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/speaking")({
  head: () => ({
    meta: [
      { title: "Invite Betty to Speak — Betty Adera" },
      { name: "description", content: "Book Betty Adera as a keynote speaker, panelist or workshop facilitator on women's leadership, mentorship and influence." },
      { property: "og:title", content: "Invite Betty to Speak — Betty Adera" },
      { property: "og:description", content: "Keynotes, panels and workshops on women's leadership and mentorship." },
    ],
  }),
  component: SpeakingPage,
});

function SpeakingPage() {
  const topics = [
    { title: "Influence Without Authority", body: "How women can lead, shape decisions and move organisations — even before they hold the title." },
    { title: "Birthing the Next Generation of Women Leaders", body: "Why mentorship is the most powerful lever for systemic change, and how to build it at scale." },
    { title: "Leadership Across Cultures", body: "Twenty years of lessons from twelve countries: leading in environments where you are the only woman, the only African, or both." },
    { title: "Women, Health & Power", body: "Where global public health, gender and leadership meet — and what it demands of the next generation." },
  ];
  const formats = [
    "Keynote (30–60 minutes)",
    "Fireside conversation & moderated Q&A",
    "Half-day or full-day leadership workshop",
    "Panel participation & expert commentary",
    "Closed-door executive briefings",
  ];
  return (
    <PageShell
      eyebrow="Speaking"
      title="Invite Betty to Your Stage"
      intro="Betty speaks at conferences, corporate offsites, universities, ministries and women's leadership convenings — anywhere the next generation of women leaders is being shaped. This page is for organisations and event hosts who would like to invite her."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl text-cream">Signature Topics</h2>
          <ul className="mt-6 space-y-5">
            {topics.map((t) => (
              <li key={t.title} className="rounded-sm border border-cream/10 bg-card/40 p-6">
                <h3 className="font-serif text-xl text-gold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">{t.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-3xl text-cream">Formats</h2>
          <ul className="mt-6 space-y-3 text-cream/80">
            {formats.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 text-gold">◆</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-sm border border-gold/30 bg-plum-deep/60 p-6">
            <h3 className="font-serif text-xl text-gold">Past audiences</h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/75">
              Global health convenings, women-in-leadership summits, university commencements,
              corporate diversity & inclusion programmes, and faith-based leadership gatherings
              across Africa, Europe and North America.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
          >
            Request Betty to Speak →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
