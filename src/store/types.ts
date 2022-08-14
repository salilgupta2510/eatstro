export interface KitchenItem {
  id: number;
  name: string;
  photo: string;
}
export interface Items {
  id: number;
  desc: string;
  name: string;
  favoriteCount: number;
  photo: string;
  price: number;
  kitchen: KitchenItem;
}

export interface FoodStoreState {
  error: boolean | false;
  loading: boolean | false;
  items: Items[];
  setItems: Function;
}
