import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Betty Adera" },
      { name: "description", content: "Get in touch with Betty Adera for mentorship cohorts, speaking invitations, media, partnerships and the Betty Adera Foundation." },
      { property: "og:title", content: "Contact Betty Adera" },
      { property: "og:description", content: "Mentorship, speaking, media and partnerships." },
    ],
  }),
  component: ContactPage,
});

const TOPICS = [
  "The Rise Collective (mentorship cohort)",
  "Leadership Accelerator (mentorship cohort)",
  "Invite Betty to speak",
  "Individual coaching",
  "Book inquiry / bulk order",
  "Media & interviews",
  "Partnerships & the Betty Adera Foundation",
  "Something else",
];

function ContactPage() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const mailto = `mailto:bettyadera@gmail.com?subject=${encodeURIComponent("[Website] " + topic)}`;


  return (
    <PageShell
      eyebrow="Contact"
      title="Let's talk."
      intro="Tell us what you're reaching out about and we'll route your message to the right person. For mentorship cohorts, please indicate which one — they are run separately."
    >
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <form
          action={mailto}
          method="post"
          encType="text/plain"
          className="space-y-6 rounded-sm border border-cream/10 bg-card/40 p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>

          <div>
            <label className="eyebrow block text-cream/70">What can we help you with?</label>
            <select
              name="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="mt-2 w-full rounded-sm border border-cream/15 bg-plum-deep px-4 py-3 text-cream focus:border-gold focus:outline-none"
            >
              {TOPICS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="eyebrow block text-cream/70">Your message</label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 w-full rounded-sm border border-cream/15 bg-plum-deep px-4 py-3 text-cream focus:border-gold focus:outline-none"
              placeholder="Share a bit of context — dates, audience, goals, or anything that helps us reply well."
            />
          </div>

          <button
            type="submit"
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
          >
            Send message
          </button>
          <p className="text-xs text-cream/50">
            This form opens your email app pre-filled. Prefer to write directly?{" "}
            <a className="text-gold hover:underline" href="mailto:bettyadera@gmail.com">
              bettyadera@gmail.com
            </a>
          </p>
        </form>

        <aside className="space-y-6">
          <div className="rounded-sm border border-cream/10 bg-card/40 p-6">
            <h3 className="font-serif text-xl text-gold">Mentorship Cohorts</h3>
            <ul className="mt-3 space-y-2 text-sm text-cream/80">
              <li><strong className="text-cream">The Rise Collective</strong> — for emerging women leaders.</li>
              <li><strong className="text-cream">Leadership Accelerator</strong> — for mid-career women stepping into senior roles.</li>
            </ul>
          </div>
          <div className="rounded-sm border border-cream/10 bg-card/40 p-6">
            <h3 className="font-serif text-xl text-gold">Foundation</h3>
            <p className="mt-2 text-sm text-cream/80">
              For partnerships, donations and programme work with the Betty Adera Foundation, visit{" "}
              <a href="https://bettyaderafoundation.org/" target="_blank" rel="noreferrer" className="text-gold hover:underline">
                bettyaderafoundation.org
              </a>.
            </p>
          </div>
          <div className="rounded-sm border border-cream/10 bg-card/40 p-6">
            <h3 className="font-serif text-xl text-gold">Direct</h3>
            <p className="mt-2 text-sm text-cream/80">bettyadera@gmail.com</p>
            <p className="text-sm text-cream/80">Nairobi · Global</p>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block text-cream/70" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-sm border border-cream/15 bg-plum-deep px-4 py-3 text-cream focus:border-gold focus:outline-none"
      />
    </div>
  );
}
