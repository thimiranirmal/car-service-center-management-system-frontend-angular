import { Component, OnInit, inject } from '@angular/core';
import { BrandService } from '../../service/brand/brand.service';
import { Brand } from '../../model/interface/Brand';

@Component({
  selector: 'app-manage-brand',
  standalone: true,
  imports: [],
  templateUrl: './manage-brand.component.html',
  styleUrl: './manage-brand.component.css'
})
export class ManageBrandComponent implements OnInit{

  brandService = inject(BrandService);

  brandList : Brand [] = [];

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.brandService.getAllBrands().subscribe((res:Brand[])=>{
      this.brandList=res;
    })
  }

}
