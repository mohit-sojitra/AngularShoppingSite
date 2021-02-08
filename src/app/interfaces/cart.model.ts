import { ProductModel } from "./product.model";

export interface cartModel {
    product:ProductModel,
    productQuantity:number,
    totalPrice:number,
}