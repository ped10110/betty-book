import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Betty Adera" },
      { name: "description", content: "Upcoming talks, book launches, mentorship cohorts and retreats with Betty Adera." },
      { property: "og:title", content: "Events — Betty Adera" },
      { property: "og:description", content: "Upcoming talks, launches and cohorts." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const events = [
    { date: "TBA 2026", tag: "Book Launch", title: "Influence Without Authority — Nairobi Launch", body: "An evening of conversation, reading and signing to mark the launch of Betty's debut book." },
    { date: "Rolling Intake", tag: "Mentorship", title: "The Rise Collective — Cohort 3", body: "A 6-month guided cohort for emerging women leaders. Applications open quarterly." },
    { date: "Rolling Intake", tag: "Mentorship", title: "Leadership Accelerator — Cohort 2", body: "Intensive programme for mid-career women stepping into senior leadership." },
  ];
  return (
    <PageShell
      eyebrow="Events"
      title="Upcoming Events & Cohorts"
      intro="Talks, launches, retreats and mentorship cohorts. Reserve a place or be the first to hear when registration opens."
    >
      <ul className="space-y-6">
        {events.map((e) => (
          <li key={e.title} className="grid gap-4 rounded-sm border border-cream/10 bg-card/40 p-8 md:grid-cols-[180px_1fr] md:items-start">
            <div>
              <div className="font-serif text-2xl text-gold">{e.date}</div>
              <div className="eyebrow mt-1 text-gold-soft">{e.tag}</div>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-cream">{e.title}</h3>
              <p className="mt-2 leading-relaxed text-cream/75">{e.body}</p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold hover:gap-3">
                Register interest <span aria-hidden>→</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
