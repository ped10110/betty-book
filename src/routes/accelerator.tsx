import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/accelerator")({
  head: () => ({
    meta: [
      { title: "Leadership Accelerator — Betty Adera" },
      {
        name: "description",
        content:
          "A 2-month, application-based intensive for up to 15 women going deeper into mentorship, action plans and personal leadership work.",
      },
      { property: "og:title", content: "Leadership Accelerator — Betty Adera" },
      {
        property: "og:description",
        content:
          "Where mentorship becomes personal — a focused 2-month intensive for selected women.",
      },
    ],
  }),
  component: AcceleratorPage,
});

function AcceleratorPage() {
  return (
    <PageShell
      eyebrow="Intensive Track · Application-Based"
      title="Leadership Accelerator"
      intro="A focused, high-impact 2-month experience for a small group of selected women — where mentorship becomes personal, practical and transformative."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["2 Months", "Programme length"],
          ["Max 15", "Participants per cohort"],
          ["Bi-weekly", "Small group coaching"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-sm border border-cream/10 bg-card/40 p-6 text-center">
            <p className="font-serif text-3xl text-gold">{n}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-cream/60">{l}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-3xl font-serif text-2xl italic leading-relaxed text-cream">
        "This is where the real work happens — focused, personal, and built around you."
      </p>

      <div className="mt-12">
        <h2 className="font-serif text-3xl text-cream md:text-4xl">A deeper level of growth</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["🎯 Direct Mentorship Access", "Small group format means direct engagement with Betty — not just content, but personalised guidance."],
            ["🔍 Deep-Dive Sessions", "Go beyond surface learning — explore your specific leadership challenges with depth and honesty."],
            ["🗺️ Your Action Plan", "Leave with a clear, practical action plan tailored to your leadership context and goals."],
            ["📊 Practical Strategies", "Strategies tailored to your specific context — not generic advice, but grounded guidance."],
            ["🤝 Accountability", "Structured accountability between sessions so you're moving, not just learning."],
            ["🏆 Proven Growth", "Measurable progress — visible change in how you lead."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-sm border border-cream/10 bg-card/40 p-6">
              <h3 className="font-medium text-cream">{t}</h3>
              <p className="mt-2 text-sm text-cream/75">{b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-sm border border-gold/30 bg-plum-deep/60 p-6 md:p-8">
        <h3 className="font-serif text-2xl text-gold">Selection &amp; investment</h3>
        <p className="mt-3 text-cream/80">
          Participation is application-based and limited to 15 participants per cohort. The
          Accelerator is open to women who have completed or are enrolled in The Rise Collective.
        </p>
        <p className="mt-3 text-cream/80">
          Investment details are shared exclusively with selected participants after the
          application review — so the conversation can happen with context and care.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          to="/apply"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
        >
          Apply for the Accelerator →
        </Link>
        <Link
          to="/rise-collective"
          className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
        >
          Start with The Rise Collective
        </Link>
      </div>
    </PageShell>
  );
}
