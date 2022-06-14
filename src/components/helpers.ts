import { Product } from "../models/Product";

export const sumCart = (cart: Product[]) =>
  cart?.reduce((sum, product) => sum + product.price * product.quantity, 0);

export default sumCart;
