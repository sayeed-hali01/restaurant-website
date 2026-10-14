import { site } from "@/data/site";
import { locations } from "@/data/locations";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Locations", href: "#locations" },
];

export default function Footer() {
  const outlet = locations[0];

  return (
    <footer className="border-t border-gold/20 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-gold">{site.name}</p>
          <p className="mt-3 text-sm text-muted">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">Quick links</p>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-muted transition hover:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-foreground">Contact</p>
          <p className="mt-3 text-sm text-muted">{outlet.address}</p>
          <a
            href={site.phoneHref}
            className="mt-2 block text-sm text-muted transition hover:text-gold-light"
          >
            {site.phone}
          </a>

          <div className="mt-4 flex gap-5 text-sm">
            <a
              href={site.links.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition hover:text-gold-light"
            >
              Swiggy
            </a>
            <a
              href={site.links.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition hover:text-gold-light"
            >
              Zomato
            </a>
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition hover:text-gold-light"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
