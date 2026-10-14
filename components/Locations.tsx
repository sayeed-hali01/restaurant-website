import { locations } from "@/data/locations";

export default function Locations() {
  return (
    <section
      id="locations"
      className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20"
    >
      <h2 className="font-serif text-4xl text-gold">Find Us</h2>
      <div className="mt-4 h-px w-16 bg-gold" />

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {locations.map((loc) => (
          <article
            key={loc.id}
            className="rounded-2xl border border-gold/20 bg-surface p-6"
          >
            <h3 className="font-serif text-2xl text-foreground">{loc.name}</h3>

            <p className="mt-3 text-muted">📍 {loc.address}</p>
            <p className="mt-2 text-muted">🕒 {loc.timings}</p>
            <p className="mt-2 text-muted">📞 {loc.phone}</p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-5 py-2.5 text-center text-sm font-medium text-background transition hover:bg-gold-light"
              >
                Get Directions
              </a>
              <a
                href={loc.phoneHref}
                className="rounded-full border border-gold px-5 py-2.5 text-center text-sm font-medium text-gold transition hover:bg-gold hover:text-background"
              >
                Call
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
