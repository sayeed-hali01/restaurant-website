"use client";

import { useState } from "react";
import { menu } from "@/data/menu";
import type { MenuItem } from "@/types/menu";

function VegDot({ veg }: { veg: boolean }) {
  return (
    <span
      className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border ${
        veg ? "border-green-500" : "border-red-500"
      }`}
      aria-label={veg ? "Vegetarian" : "Non-vegetarian"}
    >
      <span
        className={`h-2 w-2 rounded-full ${veg ? "bg-green-500" : "bg-red-500"}`}
      />
    </span>
  );
}

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="rounded-2xl border border-gold/20 bg-surface p-5">
      <div className="flex items-center gap-2">
        <VegDot veg={item.veg} />
        <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
      </div>

      {item.description && (
        <p className="mt-2 text-sm text-muted">{item.description}</p>
      )}

      {item.prices ? (
        <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
          {(["quarter", "half", "full"] as const).map((size) => (
            <div key={size} className="rounded-lg bg-background px-2 py-2">
              <p className="text-xs capitalize text-muted">{size}</p>
              <p className="font-medium text-gold">₹{item.prices[size]}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 font-medium text-gold">₹{item.price}</p>
      )}
    </article>
  );
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menu[0].id);
  const active = menu.find((c) => c.id === activeId) ?? menu[0];

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-20">
      <h2 className="font-serif text-4xl text-gold">Our Menu</h2>
      <div className="mt-4 h-px w-16 bg-gold" />

      <div className="mt-8 flex flex-wrap gap-3">
        {menu.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveId(category.id)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              category.id === activeId
                ? "border-gold bg-gold text-background"
                : "border-gold/40 text-gold hover:border-gold"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {active.items.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}
