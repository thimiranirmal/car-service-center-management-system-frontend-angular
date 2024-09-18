import { Component, inject } from '@angular/core';
import { MakeService } from '../../service/make/make.service';
import { Make } from '../../model/class/Make';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-make',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-make.component.html',
  styleUrl: './add-make.component.css'
})
export class AddMakeComponent {

  makeService = inject(MakeService);

  makeObj : Make = new Make();

  createMake(){
    this.makeService.createMake(this.makeObj).subscribe((res:Make)=>{
      if(res.make_name != ""){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Make Added",
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
