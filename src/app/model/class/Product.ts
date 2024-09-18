import { Brand } from "./Brand";
import { Category } from "./Category";
import { Make } from "./Make";

export class Product {
  product_id: number;
  product_name: string;
  product_price: number;
  product_description: string;
  product_image: string;
  cat_id: Category;
  brand_id: Brand;
  make_id: Make;

  constructor() {
    this.product_id = 0;
    this.product_name = '';
    this.product_price = 0;
    this.product_description = '';
    this.product_image = '';
    this.cat_id = new Category();
    this.brand_id = new Brand();
    this.make_id = new Make();
  }
}
