import { Component,inject } from '@angular/core';
import { CategoryService } from '../../service/category/category.service';
import { FormsModule } from '@angular/forms';
import { Category } from '../../model/class/Category';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  categoryService = inject(CategoryService);

  categoryObj : Category = new Category();

  createCategory(){
    this.categoryService.createCategory(this.categoryObj).subscribe((res:Category)=>{
      if(res.cat_name != ""){
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
