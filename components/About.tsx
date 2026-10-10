import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-serif text-4xl text-gold">
            {site.about.heading}
          </h2>
          <div className="mt-4 h-px w-16 bg-gold" />
          {site.about.paragraphs.map((text, i) => (
            <p key={i} className="mt-6 leading-relaxed text-muted">
              {text}
            </p>
          ))}
        </div>

        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-gold/20 bg-surface text-muted">
          Photo coming soon
        </div>
      </div>
    </section>
  );
}
