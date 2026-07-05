import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Betty Adera" },
      { name: "description", content: "Essays on women's leadership, mentorship and influence — from Betty Adera." },
      { property: "og:title", content: "Blog — Betty Adera" },
      { property: "og:description", content: "Essays on women's leadership, mentorship and influence." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const posts = [
    { tag: "Coming Soon", title: "Leading without a title", body: "What I learned in my first five years sitting in rooms where I had no formal authority — and how it shaped everything that came after." },
    { tag: "Coming Soon", title: "The mentor I needed", body: "Why I built The Rise Collective: the conversations, frameworks and sisterhood I wish I'd had at twenty-five." },
    { tag: "Coming Soon", title: "Twelve countries, one lesson", body: "Across ministries, NGOs and villages — the single thread that connects every woman ready to lead." },
    { tag: "Coming Soon", title: "On the future being female and African", body: "Why the next decade of global leadership will be shaped by women from the continent — and how to prepare." },
  ];
  return (
    <PageShell
      eyebrow="Journal"
      title="Blog & Reflections"
      intro="A space for essays, lessons and stories from twenty years of leadership. New writing is on the way — subscribe to be notified when the first pieces go live."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.title} className="rounded-sm border border-cream/10 bg-card/40 p-8 transition hover:border-gold/40">
            <span className="eyebrow text-gold-soft">{p.tag}</span>
            <h3 className="mt-3 font-serif text-2xl text-cream">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-cream/70">{p.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-12">
        <Link to="/contact" className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft">
          Notify me when posts launch
        </Link>
      </div>
    </PageShell>
  );
}
