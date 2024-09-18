import { Brand } from "./Brand";
import { Category } from "./Category";
import { Make } from "./Make";

export interface Product {
  product_id: number,
  product_name: string,
  product_price: number,
  product_description: string,
  product_image: string,
  cat_id: Category,
  brand_id: Brand,
  make_id: Make
}
