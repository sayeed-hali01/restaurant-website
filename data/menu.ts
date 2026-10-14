import type { MenuCategory } from "@/types/menu";

export const menu: MenuCategory[] = [
  {
    id: "mandi",
    name: "Mandi",
    items: [
      {
        name: "Chicken Fry Mandi",
        description: "Crispy fried chicken on smoky Arabian rice.",
        veg: false,
        prices: { quarter: 299, half: 549, full: 999 },
      },
      {
        name: "Mutton Mandi",
        description: "Slow-cooked mutton, tender and spiced.",
        veg: false,
        prices: { quarter: 399, half: 749, full: 1399 },
      },
      {
        name: "Grilled Fish Mandi",
        description: "Whole fish marinated in mild Arabic spices.",
        veg: false,
        prices: { quarter: 349, half: 649, full: 1099 },
      },
    ],
  },
  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Chicken 65", veg: false, price: 220 },
      { name: "Chicken Lollipop", veg: false, price: 240 },
      { name: "Chilli Chicken", veg: false, price: 200 },
    ],
  },
  {
    id: "veg",
    name: "Veg",
    items: [
      {
        name: "Paneer Tikka",
        description: "Charred paneer with mint chutney.",
        veg: true,
        price: 210,
      },
      {
        name: "Veg Mandi",
        veg: true,
        prices: { quarter: 199, half: 349, full: 649 },
      },
    ],
  },
];
