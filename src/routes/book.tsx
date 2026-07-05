import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import bookImg from "@/assets/book.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Influence Without Authority — The Book by Betty Adera" },
      {
        name: "description",
        content:
          "Influence Without Authority by Betty Adera. A practical guide to leading even when you don't have a title. Physical copy — KES 1,500 / ~$15 USD, plus delivery outside Nairobi.",
      },
      { property: "og:title", content: "Influence Without Authority — Betty Adera" },
      {
        property: "og:description",
        content:
          "Birthing the next generation of women leaders through mentorship. Order your printed copy — M-Pesa and card accepted.",
      },
      { property: "og:image", content: bookImg },
    ],
  }),
  component: BookPage,
});

const learn = [
  ["Build Credibility and Trust", "Establish yourself as a reliable, trustworthy leader before you hold formal authority."],
  ["Navigate Power Dynamics", "Understand systems, structures and how to move through them with intention and clarity."],
  ["Make Decisions with Confidence", "A framework for values-led, strategic decision-making grounded in your purpose."],
  ["Lead Without Formal Authority", "Practical strategies to drive outcomes, inspire teams and create change — title or no title."],
  ["Stay Grounded in Your Values", "Grow your influence while remaining true to who you are and what you stand for."],
];

function BookPage() {
  return (
    <PageShell
      eyebrow="The Book"
      title="Influence Without Authority"
      intro="A practical guide to leading, even when you don't have a title. Birthing the next generation of women leaders through mentorship."
    >
      <div className="grid items-start gap-16 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-10 rounded-full bg-gold/10 blur-3xl" />
          <img
            src={bookImg}
            alt="Influence Without Authority — book cover"
            className="book-shadow relative w-full"
          />
          <p className="mt-6 text-center text-xs uppercase tracking-[0.25em] text-cream/50">
            Print edition only
          </p>
        </div>

        <div>
          <p className="font-serif text-2xl italic leading-relaxed text-cream">
            "Leadership does not begin with a position. It begins with how you show up, how you
            think, and how you influence the world around you."
          </p>
          <div className="gold-divider my-8" />
          <p className="text-cream/80 leading-relaxed">
            <em className="text-gold">Influence Without Authority</em> is written for young
            professionals, emerging leaders, and anyone navigating spaces where they are expected
            to lead — but not always given the power to do so.
          </p>
          <p className="mt-4 text-cream/80 leading-relaxed">
            Grounded in real-world experience, the book offers practical tools, honest insights and
            frameworks you can use starting today — whether you are navigating a new role, building
            credibility in a male-dominated space, or simply trying to lead with integrity.
          </p>

          <h3 className="mt-10 font-serif text-2xl text-gold">What you will learn</h3>
          <ol className="mt-5 space-y-4">
            {learn.map(([t, b], i) => (
              <li key={t} className="flex gap-4">
                <span className="font-serif text-2xl leading-none text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-medium text-cream">{t}</p>
                  <p className="text-sm text-cream/70">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Purchase */}
      <div className="mt-20">
        <div className="text-center">
          <span className="eyebrow">Get your copy</span>
          <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">
            Order the printed book.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cream/70">
            KES 1,500 / ~$15 USD · Physical copy only · One-time payment. M-Pesa, Visa and
            Mastercard accepted through secure Flutterwave checkout.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <article className="flex w-full max-w-md flex-col rounded-sm border border-cream/10 bg-card/40 p-8">
            <span className="eyebrow text-gold-soft">Physical · Delivered</span>
            <h3 className="mt-2 font-serif text-2xl text-cream">Printed Copy</h3>
            <p className="mt-1 text-sm text-cream/60">KES 1,500 / ~$15 USD</p>
            <ul className="mt-5 space-y-2 text-sm text-cream/80">
              <li>✓ Printed &amp; bound book</li>
              <li>✓ Free delivery within Nairobi</li>
              <li>✓ KES 300 delivery charge outside Nairobi</li>
              <li>✓ Dispatched within 2–3 business days</li>
            </ul>
            <p className="mt-5 text-xs text-cream/50">
              You'll be asked for your delivery address when ordering.
            </p>
            <a
              href="mailto:bettyadera@gmail.com?subject=Order%20-%20Influence%20Without%20Authority%20(Physical)&body=Hi%20Betty%2C%20I%27d%20like%20to%20order%20a%20printed%20copy%20of%20Influence%20Without%20Authority.%0A%0AFull%20delivery%20address%3A%0ACity%2FTown%3A%0APhone%20number%3A"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-gold-soft"
            >
              Order Your Copy →
            </a>
          </article>
        </div>

        <p className="mt-6 rounded-sm border border-gold/30 bg-plum-deep/60 p-5 text-sm text-cream/80">
          <strong className="text-gold">Note for Rise Collective applicants:</strong> All
          participants in The Rise Collective are required to own this book — it forms the shared
          foundation for the programme.
        </p>
      </div>

      {/* FAQs */}
      <div className="mt-20">
        <h2 className="font-serif text-3xl text-cream">Frequently asked</h2>
        <div className="mt-6 divide-y divide-cream/10 border-y border-cream/10">
          {[
            ["How will I receive the book?", "The book is only available as a printed copy — there is no digital or ebook edition. After ordering, you'll provide your delivery address and the book is dispatched within 2–3 business days."],
            ["Can I pay using M-Pesa?", "Yes. At checkout you can select M-Pesa and receive a payment prompt (STK push) directly on your phone."],
            ["Is this book required for The Rise Collective?", "Yes. All Rise Collective participants are required to own a copy as the shared foundation for the programme's discussions and activities."],
            ["How does delivery work?", "Delivery within Nairobi is free. Outside Nairobi, a KES 300 delivery charge applies. You'll be asked for your full delivery address when placing your order."],
          ].map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-cream">
                <span className="font-medium">{q}</span>
                <span className="text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="text-sm text-gold hover:underline">
            Have another question? Get in touch →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
