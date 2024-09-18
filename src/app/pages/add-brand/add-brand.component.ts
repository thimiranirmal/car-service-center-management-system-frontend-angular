import { Component, inject } from '@angular/core';
import { BrandService } from '../../service/brand/brand.service';
import { Brand } from '../../model/class/Brand';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-brand',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-brand.component.html',
  styleUrl: './add-brand.component.css'
})
export class AddBrandComponent {

  brandService = inject(BrandService);

  brandObj : Brand = new Brand();

  createBrand(){
    this.brandService.createBrand(this.brandObj).subscribe((res:Brand)=>{
      if(res.brand_name != ""){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Brand Added",
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
