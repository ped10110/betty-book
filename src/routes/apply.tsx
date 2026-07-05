import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — The Rise Collective & Leadership Accelerator" },
      {
        name: "description",
        content:
          "Apply to join The Rise Collective (6-month mentorship) or the Leadership Accelerator (2-month intensive) with Betty Adera.",
      },
      { property: "og:title", content: "Apply to Join — Betty Adera Mentorship" },
      {
        property: "og:description",
        content:
          "Tell us about your leadership journey. Selected participants will be notified by email.",
      },
    ],
  }),
  component: ApplyPage,
});

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  country: string;
  role: string;
  sector: string;
  org: string;
  why: string;
  challenge: string;
  goals: string;
  hasBook: string;
  programme: string;
  source: string;
  notes: string;
};

const empty: Form = {
  firstName: "", lastName: "", email: "", phone: "", age: "", country: "",
  role: "", sector: "", org: "",
  why: "", challenge: "", goals: "",
  hasBook: "Yes, I already have the book",
  programme: "The Rise Collective (6-month mentorship)",
  source: "", notes: "",
};

function ApplyPage() {
  const [form, setForm] = useState<Form>(empty);

  const mailto = useMemo(() => {
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Age: ${form.age}`,
      `Country: ${form.country}`,
      ``,
      `Role: ${form.role}`,
      `Sector: ${form.sector}`,
      `Organisation: ${form.org}`,
      ``,
      `Programme: ${form.programme}`,
      `Owns the book: ${form.hasBook}`,
      ``,
      `Why I want to join:`,
      form.why,
      ``,
      `Biggest leadership challenge right now:`,
      form.challenge,
      ``,
      `What I hope to achieve in the next 6 months:`,
      form.goals,
      ``,
      `Heard about Betty via: ${form.source}`,
      `Notes: ${form.notes}`,
    ].join("\n");
    return `mailto:bettyadera@gmail.com?subject=${encodeURIComponent(
      "[Application] " + form.programme + " — " + form.firstName + " " + form.lastName,
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const set = <K extends keyof Form>(k: K) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <PageShell
      eyebrow="The Rise Collective · Apply"
      title="Apply to Join"
      intro="This programme is for women who are ready to grow, learn, and step into leadership with intention. Take your time with the form — your answers help us understand your journey."
    >
      <div className="rounded-sm border border-gold/30 bg-plum-deep/60 p-6 md:p-8">
        <h2 className="font-serif text-2xl text-gold">Before you apply</h2>
        <ul className="mt-3 space-y-2 text-cream/85">
          <li>✓ You are between 18 and 40 years of age</li>
          <li>✓ You can commit to the full 6-month programme and attend monthly sessions</li>
          <li>✓ You own — or will purchase — <em>Influence Without Authority</em></li>
          <li>✓ You are currently working, studying, or leading in any field or sector</li>
        </ul>
        <p className="mt-4 text-sm text-cream/70">
          Don't have the book yet?{" "}
          <Link to="/book" className="text-gold hover:underline">Get Influence Without Authority →</Link>
        </p>
      </div>

      <form
        action={mailto}
        className="mt-10 space-y-10 rounded-sm border border-cream/10 bg-card/40 p-6 md:p-10"
      >
        <Section title="01 · Personal Information">
          <Row>
            <Field label="First name *" value={form.firstName} onChange={set("firstName")} required />
            <Field label="Last name *" value={form.lastName} onChange={set("lastName")} required />
          </Row>
          <Row>
            <Field label="Email *" type="email" value={form.email} onChange={set("email")} required />
            <Field label="Phone *" value={form.phone} onChange={set("phone")} required />
          </Row>
          <Row>
            <Field label="Age * (18–40)" value={form.age} onChange={set("age")} required />
            <Field label="Country of residence *" value={form.country} onChange={set("country")} required />
          </Row>
        </Section>

        <Section title="02 · Your Work & Background">
          <Row>
            <Field label="Current role / title *" value={form.role} onChange={set("role")} required />
            <Field label="Sector / field *" value={form.sector} onChange={set("sector")} required />
          </Row>
          <Field label="Organisation / institution (optional)" value={form.org} onChange={set("org")} />
        </Section>

        <Section title="03 · Your Leadership Story">
          <Textarea label="Why do you want to join? *" value={form.why} onChange={set("why")} required rows={5} hint="Minimum 80 characters. Be thoughtful — this is the most important part of your application." />
          <Textarea label="Your biggest leadership challenge right now *" value={form.challenge} onChange={set("challenge")} required rows={4} />
          <Textarea label="What you hope to achieve in the next 6 months *" value={form.goals} onChange={set("goals")} required rows={4} />
        </Section>

        <Section title="04 · Book & Commitment">
          <Select
            label="Have you purchased Influence Without Authority? *"
            value={form.hasBook}
            onChange={set("hasBook")}
            options={[
              "Yes, I already have the book",
              "Not yet, but I will purchase it before the programme starts",
            ]}
          />
          <Select
            label="Programme selection *"
            value={form.programme}
            onChange={set("programme")}
            options={[
              "The Rise Collective (6-month mentorship)",
              "Leadership Accelerator (2-month intensive — selected from Rise Collective)",
              "Both — I am open to either",
            ]}
          />
        </Section>

        <Section title="05 · One Last Thing">
          <Select
            label="How did you hear about Betty?"
            value={form.source}
            onChange={set("source")}
            options={["", "Instagram", "Facebook", "LinkedIn", "X / Twitter", "Word of mouth / Referral", "Google Search", "Email newsletter", "Event or conference", "Other"]}
          />
          <Textarea label="Anything else you'd like us to know? (optional)" value={form.notes} onChange={set("notes")} rows={3} />
        </Section>

        <div>
          <button
            type="submit"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
          >
            Submit Application
          </button>
          <p className="mt-3 text-xs text-cream/55">
            This opens your email app pre-filled to send to{" "}
            <a href="mailto:bettyadera@gmail.com" className="text-gold hover:underline">
              bettyadera@gmail.com
            </a>
            . Selected participants will be notified by email.
          </p>
        </div>
      </form>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-xl text-gold">{title}</h2>
      <div className="mt-5 space-y-4">{children}</div>
    </div>
  );
}
function Row({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2">{children}</div>;
}
function Field(props: { label: string; value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="eyebrow text-cream/70">{props.label}</span>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        className="mt-2 w-full rounded-sm border border-cream/15 bg-plum-deep px-4 py-3 text-cream focus:border-gold focus:outline-none"
      />
    </label>
  );
}
function Textarea(props: { label: string; value: string; onChange: React.ChangeEventHandler<HTMLTextAreaElement>; rows?: number; required?: boolean; hint?: string }) {
  return (
    <label className="block">
      <span className="eyebrow text-cream/70">{props.label}</span>
      <textarea
        value={props.value}
        onChange={props.onChange}
        rows={props.rows ?? 4}
        required={props.required}
        className="mt-2 w-full rounded-sm border border-cream/15 bg-plum-deep px-4 py-3 text-cream focus:border-gold focus:outline-none"
      />
      {props.hint ? <span className="mt-1 block text-xs text-cream/50">{props.hint}</span> : null}
    </label>
  );
}
function Select(props: { label: string; value: string; onChange: React.ChangeEventHandler<HTMLSelectElement>; options: string[] }) {
  return (
    <label className="block">
      <span className="eyebrow text-cream/70">{props.label}</span>
      <select
        value={props.value}
        onChange={props.onChange}
        className="mt-2 w-full rounded-sm border border-cream/15 bg-plum-deep px-4 py-3 text-cream focus:border-gold focus:outline-none"
      >
        {props.options.map((o) => (
          <option key={o} value={o}>{o || "Select an option"}</option>
        ))}
      </select>
    </label>
  );
}
