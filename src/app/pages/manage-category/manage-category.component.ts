import { Component, OnInit,inject} from '@angular/core';
import { CategoryService } from '../../service/category/category.service';
import { Category } from '../../model/interface/Category';

@Component({
  selector: 'app-manage-category',
  standalone: true,
  imports: [],
  templateUrl: './manage-category.component.html',
  styleUrl: './manage-category.component.css'
})
export class ManageCategoryComponent implements OnInit {

  categoryService = inject(CategoryService);

  categoryList : Category [] = [];

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory(){
    this.categoryService.getAllCategory().subscribe((res:Category[])=>{
      this.categoryList = res;
    })
  }

}
