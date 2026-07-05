import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import bettyImg from "@/assets/betty.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Betty Adera" },
      { name: "description", content: "Moments from talks, mentorship cohorts and global leadership work — in pictures." },
      { property: "og:title", content: "Gallery — Betty Adera" },
      { property: "og:description", content: "Moments from talks, cohorts and global leadership work." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  // Placeholders until more photos are supplied.
  const tiles = Array.from({ length: 6 });
  return (
    <PageShell
      eyebrow="Gallery"
      title="In Pictures"
      intro="Moments from keynotes, mentorship cohorts, fieldwork and the everyday work of building the next generation of women leaders. More to come."
    >
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {tiles.map((_, i) => (
          <figure key={i} className="group relative aspect-[4/5] overflow-hidden rounded-sm border border-cream/10 bg-plum">
            {i === 0 ? (
              <img src={bettyImg} alt="Betty Adera" className="h-full w-full object-cover transition group-hover:scale-105" />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-plum to-plum-deep">
                <span className="font-serif text-2xl text-gold/60">Coming soon</span>
              </div>
            )}
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
