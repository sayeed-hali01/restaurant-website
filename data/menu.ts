import type { MenuCategory } from "@/types/menu";

// Source: client's menu PDF (arav_mandi.pdf). Prices in INR.
// Sized items use { quarter, half, full }; everything else uses a single price.

const chickenMandiPrices = { quarter: 299, half: 549, full: 999 };
const muttonMandiPrices = { quarter: 399, half: 749, full: 1299 };
const eggMandiPrices = { quarter: 249, half: 449, full: 749 };
const seafoodMandiPrices = { quarter: 349, half: 649, full: 1099 };
const vegMandiPrices = { quarter: 299, half: 549, full: 899 };

export const menu: MenuCategory[] = [
  {
    id: "non-veg-mandi",
    name: "Non Veg Mandi",
    items: [
      {
        name: "Aarab Special Mandi",
        description:
          "Arabic mandi rice with 2 pc malai tikka, 2 pcs lollipop, 1 egg, 1 pc tandoori chicken, 1 pc alfaham chicken, 1 kalmi kabab and a juicy chicken bowl, with salan and chutney.",
        veg: false,
        price: 1199,
      },
      {
        name: "Bahubali Mandi",
        description:
          "Arabic mandi rice with 3 pc malai tikka, 3 pcs lollipop, 2 eggs, 1 pc tandoori chicken, 1 pc alfaham, 1 kalmi kabab and a juicy butter chicken bowl, with salan and chutney.",
        veg: false,
        price: 1499,
      },
      {
        name: "Mix Non-Veg Platter Mandi",
        description:
          "Arabic mandi rice with 3 pc malai tikka, 3 pcs lollipop, 2 eggs, 1 pc tandoori chicken, 1 pc alfaham, 2 kalmi kabab, 2 fish fry, butter chicken and juicy mutton bowl, with salan and chutney.",
        veg: false,
        price: 2499,
      },
      {
        name: "Al-faham Chicken Mandi",
        description:
          "Smoky chicken marinated in Arabic spices and grilled over coal, on spiced long-grain basmati rice with mayo, tomato salsa and salad.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Al-faham Masala Mandi",
        veg: false,
        prices: { quarter: 299, half: 599, full: 1049 },
      },
      {
        name: "Peri Peri Alfaham Mandi",
        veg: false,
        prices: { quarter: 299, half: 599, full: 1049 },
      },
      {
        name: "BBQ Chicken Mandi",
        description:
          "Smoky, Yemeni-inspired dish with tender marinated chicken grilled over charcoal, on fragrant basmati rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Grilled Chicken Mandi",
        description:
          "Tender chicken marinated in barbecue sauce and grilled to perfection, over fragrant basmati rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Yakhni Chicken Mandi",
        description:
          "Mild and smoky, with cardamom, cloves, dried black lime, cumin and coriander.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Tandoori Chicken Mandi",
        description:
          "Classic tandoori chicken on a generous bed of aromatic mandi rice with raita, salad and chutney.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Tangdi Mandi",
        description:
          "Juicy tangdi kabab on aromatic mandi rice with raita, salad and chutney.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Pahadi Chicken Mandi",
        description:
          "Tender chicken marinated in green herbs and spices, cooked in a traditional tandoor, over fragrant basmati rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Creamy Lolipop Mandi",
        description:
          "Creamy chicken lollipop on top of fragrant mandi rice with raita, salad and chutney.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Chicken Cheese Bara Mandi",
        description:
          "Traditional Yemeni mandi with large, tender, spice-marinated chicken pieces on fragrant long-grain basmati rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Lazawab Mandi",
        description: "Smoky tangdi with rich creamy gravy, with fragrant rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Butter Chicken Mandi",
        description: "Butter chicken gravy with flavourful mandi rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Juicy Chicken Mandi",
        description:
          "Tender chicken in creamy, juicy gravy with fragrant rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Afghani Chicken Mandi",
        description:
          "Chicken in a rich, creamy, mildly spiced gravy with fragrant rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Mughlai Chicken Mandi",
        description:
          "Marinated chicken gravy with a base of cashew paste, yogurt and aromatic spices, with mandi rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Murgh Dhaniya Mandi",
        description:
          "A vibrant green curry with fresh coriander, green chillies, ginger, garlic and yogurt, with mandi rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Methi Murgh Mandi",
        description:
          "Chicken gravy with fresh fenugreek leaves, spices and a creamy yogurt base, with aromatic mandi rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Chicken Lollipop Mandi",
        description: "Tangy chicken lollipop with fragrant mandi rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Chicken 65 Mandi",
        description:
          "Chicken cooked in a spicy, tangy, savoury style with curry leaves.",
        veg: false,
        prices: chickenMandiPrices,
      },
      {
        name: "Kadai Chicken Mandi",
        description:
          "Tender chicken in authentic kadai-style masala with aromatic spices, over mandi rice.",
        veg: false,
        prices: chickenMandiPrices,
      },
    ],
  },
  {
    id: "mutton-mandi",
    name: "Mutton Mandi",
    items: [
      {
        name: "Mutton Afghani Mandi",
        description:
          "Arabic mandi with a creamy, mildly spiced Afghani mutton gravy.",
        veg: false,
        prices: muttonMandiPrices,
      },
      {
        name: "Signature Mutton Juicy Mandi",
        description:
          "A variation of the traditional Yemeni mandi, known for exceptionally tender, succulent meat and rich, flavourful gravy.",
        veg: false,
        prices: muttonMandiPrices,
      },
      {
        name: "Mutton Lazawab Mandi",
        description:
          "Aromatic Arabic mandi rice topped with rich Lazawab-style mutton gravy.",
        veg: false,
        prices: muttonMandiPrices,
      },
      {
        name: "Bhuna Mutton Mandi",
        description:
          "Bold Indian spices blended with smoky, charcoal-infused flavours, over aromatic mandi rice.",
        veg: false,
        prices: muttonMandiPrices,
      },
      {
        name: "Mutton Patiyala Mandi",
        description:
          "Rich Punjabi-style mutton gravy with a thick, silky curry, over fragrant mandi rice.",
        veg: false,
        prices: muttonMandiPrices,
      },
    ],
  },
  {
    id: "egg-mandi",
    name: "Egg Mandi",
    items: [
      {
        name: "Egg Fried Mandi",
        description:
          "Arabian mandi rice with boiled eggs, pan-fried or roasted in spicy masala.",
        veg: false,
        prices: eggMandiPrices,
      },
      {
        name: "Egg Masala Mandi",
        description:
          "Fragrant mandi rice with a rich and flavourful egg masala gravy.",
        veg: false,
        prices: eggMandiPrices,
      },
    ],
  },
  {
    id: "seafood-mandi",
    name: "Sea Food Mandi",
    items: [
      {
        name: "Fish Tandoori Mandi",
        description:
          "Fish marinated in tangy tandoori masala, grilled to smoky perfection, over fragrant mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
      {
        name: "Fish Afghani Mandi",
        description: "Rich Afghani-style fish gravy with aromatic mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
      {
        name: "Fish Masla Mandi",
        description: "Rich Indian-style fish gravy with aromatic mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
      {
        name: "Grilled Fish Mandi",
        description:
          "Whole fish marinated in mild Arabic spices, lemon and herbs, on a bed of smoky, fragrant long-grain mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
      {
        name: "Prawn Masala Mandi",
        description:
          "Juicy prawns cooked in rich, aromatic masala, over fragrant mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
      {
        name: "Fish in Butter Sauce Mandi",
        description:
          "Tender fish in creamy butter sauce over aromatic mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
      {
        name: "Dynamic Prawn Mandi",
        description:
          "Deep-fried prawns tossed in a creamy, spicy mayonnaise-based sriracha sauce, with fragrant mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
      {
        name: "BBQ Fish Mandi",
        description:
          "Fish marinated in aromatic spices, grilled over charcoal, on fragrant smoky mandi rice.",
        veg: false,
        prices: seafoodMandiPrices,
      },
    ],
  },
  {
    id: "non-veg-starters",
    name: "Non Veg Starters",
    items: [
      { name: "Chicken Lolipop", veg: false, price: 240 },
      { name: "Chicken 65", veg: false, price: 240 },
      { name: "Chilli Chicken", veg: false, price: 220 },
      { name: "Dragon Chicken", veg: false, price: 240 },
      { name: "Chicken Majestic", veg: false, price: 240 },
      { name: "Chicken Manchurian", veg: false, price: 220 },
      { name: "Garlic Chicken", veg: false, price: 240 },
      { name: "Chicken Salt & Pepper", veg: false, price: 240 },
      { name: "Drums Of Heaven", veg: false, price: 240 },
      { name: "Sweet & Spicy Crispy Chicken", veg: false, price: 240 },
      { name: "Lemon Chicken", veg: false, price: 240 },
      { name: "Bali Prawn", veg: false, price: 299 },
      { name: "Fish Finger", veg: false, price: 299 },
      { name: "Fish Grilled", veg: false, price: 299 },
      { name: "Dynamic Prawn", veg: false, price: 280 },
      { name: "Oyester Prawn", veg: false, price: 280 },
      { name: "Butter Garlic Prawn", veg: false, price: 280 },
      { name: "Dragon Alfaham", veg: false, price: 280 },
      { name: "Chicken Tikka", veg: false, price: 240 },
      { name: "Chicken Malai Tikka", veg: false, price: 240 },
      { name: "Chicken Lasooni Tikka", veg: false, price: 240 },
      { name: "Chicken Hariyali Tikka", veg: false, price: 240 },
      { name: "Kalmi Kabab (2 pc)", veg: false, price: 199 },
      {
        name: "Tandoori Chicken",
        veg: false,
        prices: { quarter: 180, half: 350, full: 700 },
      },
      {
        name: "Alfaham Chicken",
        veg: false,
        prices: { quarter: 200, half: 400, full: 750 },
      },
      {
        name: "Grilled Chicken",
        veg: false,
        prices: { quarter: 200, half: 400, full: 750 },
      },
    ],
  },
  {
    id: "veg-mandi",
    name: "Veg Mandi",
    items: [
      {
        name: "Paneer Juicy Mandi",
        description:
          "A vegetarian take on the traditional Arabian mandi, with soft marinated paneer cubes over fragrant basmati rice.",
        veg: true,
        prices: vegMandiPrices,
      },
      {
        name: "Paneer Makhani Mandi",
        description:
          "Arabian mandi topped with rich, buttery paneer makhani gravy.",
        veg: true,
        prices: vegMandiPrices,
      },
      {
        name: "Kadai Paneer Mandi",
        description: "Aromatic mandi rice with spicy kadai paneer.",
        veg: true,
        prices: vegMandiPrices,
      },
      {
        name: "Butter Paneer Mandi",
        description:
          "Fragrant Arabian mandi rice topped with creamy butter paneer gravy.",
        veg: true,
        prices: vegMandiPrices,
      },
      {
        name: "Paneer Chilli Mandi",
        description: "Mandi rice with spicy paneer chilli.",
        veg: true,
        prices: vegMandiPrices,
      },
      {
        name: "Paneer 65 Mandi",
        description: "Mandi rice topped with crispy paneer 65.",
        veg: true,
        prices: vegMandiPrices,
      },
      { name: "Mushroom Kadai Mandi", veg: true, prices: vegMandiPrices },
      { name: "Mushroom 65 Mandi", veg: true, prices: vegMandiPrices },
      {
        name: "Mushroom Masala Mandi",
        description: "Indian-style mushroom masala with fragrant mandi rice.",
        veg: true,
        prices: vegMandiPrices,
      },
      {
        name: "Mix Veg Mandi",
        description: "Mixed vegetable gravy with mandi rice.",
        veg: true,
        prices: vegMandiPrices,
      },
      {
        name: "Mix Veg Platter Mandi",
        description:
          "3 pcs paneer tikka, 3 pcs malai tikka, mushroom chilli, mix veg and juicy paneer.",
        veg: true,
        price: 1199,
      },
    ],
  },
  {
    id: "veg-starters",
    name: "Veg Starters",
    items: [
      { name: "Chilli Paneer", veg: true, price: 199 },
      { name: "Paneer 65", veg: true, price: 199 },
      { name: "Paneer Manchurian", veg: true, price: 199 },
      { name: "Paneer Majestic", veg: true, price: 199 },
      { name: "Dragon Paneer", veg: true, price: 199 },
      { name: "Paneer Pakoda", veg: true, price: 199 },
      { name: "Paneer Salt & Pepper", veg: true, price: 199 },
      { name: "Mushroom Salt & Pepper", veg: true, price: 199 },
      { name: "Mushroom Chilli", veg: true, price: 199 },
      { name: "Mushroom Manchurian", veg: true, price: 199 },
      { name: "Mushroom 65", veg: true, price: 199 },
      { name: "Crispy American Corn", veg: true, price: 179 },
      { name: "Paneer Tikka", veg: true, price: 199 },
      { name: "Malai Paneer Tikka", veg: true, price: 220 },
    ],
  },
  {
    id: "soups",
    name: "Soups",
    items: [
      { name: "Cream of Tomato", veg: true, price: 99 },
      { name: "Cream of Mushroom", veg: true, price: 119 },
      { name: "Roasted Tomato Dhaniya Shorba", veg: true, price: 99 },
      { name: "Lemon Coriander Shorba", veg: true, price: 99 },
      { name: "Hot & Sour", veg: true, price: 99 },
      { name: "Manchaow", veg: true, price: 99 },
      { name: "Chicken Hot & Sour", veg: false, price: 119 },
      { name: "Chicken Manchaow", veg: false, price: 119 },
      { name: "Chicken Lemon Coriander", veg: false, price: 119 },
    ],
  },
  {
    id: "extras",
    name: "Extras",
    items: [
      { name: "Extra Mandi", veg: true, price: 89 },
      { name: "Green Salad", veg: true, price: 69 },
      { name: "Papad", veg: true, price: 25 },
      { name: "Masala Papad", veg: true, price: 49 },
    ],
  },
  {
    id: "mocktails",
    name: "Mocktails",
    items: [
      {
        name: "Mint Lemon Mojito",
        description: "Fresh mint leaves, lemon, Sprite and soda.",
        veg: true,
        price: 99,
      },
      {
        name: "Green Apple Sparkler",
        description: "Fresh mint leaves, lime juice, apple crush and soda.",
        veg: true,
        price: 99,
      },
      {
        name: "Blue Lagoon",
        description: "Blue Curaçao syrup, mint leaves, lime juice and Sprite.",
        veg: true,
        price: 99,
      },
      {
        name: "Watermelon Mint Refresher",
        description: "Fresh watermelon juice with mint leaves and lime juice.",
        veg: true,
        price: 99,
      },
      {
        name: "Orange Sunset",
        description: "Orange juice, lime juice, fresh mint and soda.",
        veg: true,
        price: 99,
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      { name: "Kunafa", veg: true, price: 119 },
      { name: "Gajar Halwa", veg: true, price: 119 },
      { name: "Shahi Tukda", veg: true, price: 119 },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    items: [
      { name: "Water Bottle", veg: true, price: 30 },
      { name: "Masala Cold Drink", veg: true, price: 49 },
      { name: "Fresh Lime Soda", veg: true, price: 49 },
      { name: "Masala Soda", veg: true, price: 49 },
      { name: "Cold Drink", veg: true, price: 30 },
    ],
  },
];
