export interface MenuItemType {
  id: number;
  category: string;
  name: string;
  price: string;
  description: string;
  image: string;
  badge: string;
  badgeColor: string;
  hot?: boolean;
  iced?: boolean;
  customizable?: boolean;
  nutrition?: {
    calories?: number;
    protein?: number;
    fat?: number;
    carbs?: number;
  };
  cheeseOptions?: string[];
  crustOptions?: string[];
  toppingsOptions?: string[];
}
