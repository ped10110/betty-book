import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/rise-collective")({
  head: () => ({
    meta: [
      { title: "The Rise Collective — 6-Month Mentorship by Betty Adera" },
      {
        name: "description",
        content:
          "The Rise Collective is a 6-month global mentorship programme for young women aged 18–40 stepping into leadership. Apply to join the next cohort.",
      },
      { property: "og:title", content: "The Rise Collective — Betty Adera" },
      {
        property: "og:description",
        content:
          "A 6-month global mentorship programme for emerging women leaders aged 18–40.",
      },
    ],
  }),
  component: RisePage,
});

function RisePage() {
  return (
    <PageShell
      eyebrow="Flagship Programme"
      title="The Rise Collective"
      intro="A 6-month global mentorship programme for young women aged 18–40 who are ready to grow, learn, and step into leadership with intention."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          ["6 Months", "Programme length"],
          ["18–40", "Age range"],
          ["Global", "Virtual cohort"],
        ].map(([n, l]) => (
          <div key={l} className="rounded-sm border border-cream/10 bg-card/40 p-6 text-center">
            <p className="font-serif text-3xl text-gold">{n}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-cream/60">{l}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h2 className="font-serif text-3xl text-cream md:text-4xl">What you'll grow into</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["🧭 Leadership Identity", "Build confidence in who you are as a leader — beyond roles and titles."],
            ["⚙️ Systems Navigation", "Understand power structures, institutions and complex environments."],
            ["🎯 Decision-Making", "Make clear, intentional decisions that align with your values and purpose."],
            ["💬 Influence & Voice", "Build the capacity to communicate, influence and advocate with conviction."],
            ["🌍 Community Impact", "Lead change that matters — in communities, organisations and systems."],
            ["🔋 Resilience & Growth", "Step fully into who you are meant to be — not perfection, but progress."],
          ].map(([t, b]) => (
            <div key={t} className="rounded-sm border border-cream/10 bg-card/40 p-6">
              <h3 className="font-medium text-cream">{t}</h3>
              <p className="mt-2 text-sm text-cream/75">{b}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-sm border border-gold/30 bg-plum-deep/60 p-6 md:p-8">
        <h3 className="font-serif text-2xl text-gold">Before you apply</h3>
        <ul className="mt-4 space-y-2 text-cream/85">
          <li>✓ You are between 18 and 40 years of age</li>
          <li>✓ You can commit to the full 6-month programme and attend monthly sessions</li>
          <li>✓ You own — or are willing to purchase — <em>Influence Without Authority</em></li>
          <li>✓ You are currently working, studying, or leading in any field or sector</li>
        </ul>
        <p className="mt-4 text-sm text-cream/70">
          Don't have the book yet?{" "}
          <Link to="/book" className="text-gold hover:underline">
            Get Influence Without Authority →
          </Link>
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          to="/apply"
          className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
        >
          Apply to Join →
        </Link>
        <Link
          to="/accelerator"
          className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
        >
          Explore the Leadership Accelerator
        </Link>
      </div>
    </PageShell>
  );
}
