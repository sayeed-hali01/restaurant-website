import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 py-16 text-center"
    >
      <Image
        src="/images/hero-spread.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,11,0.75),rgba(11,11,11,0.92))]" />

      <div className="relative z-10 max-w-2xl">
        <h1 className="sr-only">{site.name}</h1>
        <Image
          src="/images/logo.png"
          alt={`${site.name}, Indo Arabian Restaurant`}
          width={1400}
          height={789}
          priority
          className="mx-auto h-auto w-64 md:w-96"
        />
        <p className="mt-6 text-lg text-foreground">{site.tagline}</p>

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
