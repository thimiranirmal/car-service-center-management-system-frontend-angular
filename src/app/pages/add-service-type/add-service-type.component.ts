import { Component, inject } from '@angular/core';
import { ServiceTypeService } from '../../service/serviceType/service-type.service';
import { ServiceType } from '../../model/class/ServiceType';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-service-type',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-service-type.component.html',
  styleUrl: './add-service-type.component.css'
})
export class AddServiceTypeComponent {

  serviceTypeService = inject(ServiceTypeService);

  serviceTypeObj : ServiceType = new ServiceType();


  createServiceType(){
    this.serviceTypeService.createServiceType(this.serviceTypeObj).subscribe((res:ServiceType)=>{
      if(res.serviceTypeName != ""){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service Type Added",
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
