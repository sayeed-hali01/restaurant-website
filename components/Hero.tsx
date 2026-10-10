import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[radial-gradient(ellipse_at_top,#2a2208,#0b0b0b_70%)] px-6 text-center"
    >
      <div className="max-w-2xl">
        <h1 className="font-serif text-5xl text-gold md:text-7xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-muted">{site.tagline}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.links.swiggy}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-gold px-6 py-3 font-medium text-background transition hover:bg-gold-light sm:w-auto"
          >
            Order on Swiggy
          </a>
          <a
            href={site.links.zomato}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-gold px-6 py-3 font-medium text-gold transition hover:bg-gold hover:text-background sm:w-auto"
          >
            Order on Zomato
          </a>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <a
            href={site.phoneHref}
            className="text-gold-light transition hover:text-gold"
          >
            📞 Call now
          </a>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light transition hover:text-gold"
          >
            💬 WhatsApp
          </a>
        </div>

        <a
          href="#menu"
          className="mt-6 inline-block text-sm text-muted underline-offset-4 hover:text-gold-light hover:underline"
        >
          View Menu
        </a>
      </div>
    </section>
  );
}
