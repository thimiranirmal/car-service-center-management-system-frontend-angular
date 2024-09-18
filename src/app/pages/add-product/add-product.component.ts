import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../service/product/product.service';
import { Product } from '../../model/class/Product';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { ManageCategoryComponent } from '../manage-category/manage-category.component';
import { Category } from '../../model/interface/Category';
import { CategoryService } from '../../service/category/category.service';
import { Brand } from '../../model/interface/Brand';
import { Make } from '../../model/interface/Make';
import { BrandService } from '../../service/brand/brand.service';
import { MakeService } from '../../service/make/make.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  
  productService = inject(ProductService);
  categoryService = inject(CategoryService);
  brandService = inject(BrandService);
  makeService = inject(MakeService);

  categoryList : Category [] = [];
  brandList : Brand [] = [];
  makeList : Make [] = [];

  productObj : Product = new Product();

  ngOnInit(): void {
    this.getAllCategory();
    this.getAllBrand();
    this.getAllMake();
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe((res:Category[])=>{
      this.categoryList = res;
    })
  }
  getAllBrand(){
    this.brandService.getAllBrands().subscribe((res:Brand[])=>{
      this.brandList = res;
    })
  }
  getAllMake(){
    this.makeService.getAllMakes().subscribe((res:Make[])=>{
      this.makeList = res;
    })
  }

  createProduct(){
    
    this.productService.createProduct(this.productObj).subscribe((res:Product)=>{
      if(res.product_name != ""){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Category Added",
          showConfirmButton: false,
          timer: 1500
        });
        
      }else{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Failed",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

}
