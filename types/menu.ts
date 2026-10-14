export type SizePrices = {
  quarter: number;
  half: number;
  full: number;
};

type MenuItemBase = {
  name: string;
  description?: string;
  veg: boolean;
};

// An item has EITHER a single price OR prices by size, never both
export type MenuItem =
  | (MenuItemBase & { price: number; prices?: never })
  | (MenuItemBase & { prices: SizePrices; price?: never });

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};
