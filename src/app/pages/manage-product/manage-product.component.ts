import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../model/interface/Product';

@Component({
  selector: 'app-manage-product',
  standalone: true,
  imports: [],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.css'
})
export class ManageProductComponent implements OnInit{

  productService = inject(ProductService);

  productList : any = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe((res:any)=>{
      this.productList=res;
    })
  }
}
