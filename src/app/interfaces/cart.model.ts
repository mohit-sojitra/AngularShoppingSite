export interface cartModel {
  id: number;
  userId: number;
  date: Date;
  products: CartProductModel[];
}

export interface CartProductModel {
  productId: number;
  quantity: number;
}
