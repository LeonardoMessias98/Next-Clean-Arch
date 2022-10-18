export type Product = {
  id: number;
  name: String;
  description: String;
  price: number;
};

export type Order = {
  id: number;
  products: Product[];
  credit_card_number: string;
};
