import { Component, inject, OnInit } from '@angular/core';
import { ServiceTypeService } from '../../service/serviceType/service-type.service';
import { ServiceType } from '../../model/interface/ServiceType';

@Component({
  selector: 'app-manage-service-type',
  standalone: true,
  imports: [],
  templateUrl: './manage-service-type.component.html',
  styleUrl: './manage-service-type.component.css'
})
export class ManageServiceTypeComponent implements OnInit{

  serviceTypeService = inject(ServiceTypeService);

  serviceTypeList : ServiceType [] = [];

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands(){
    this.serviceTypeService.getAllServiceTypes().subscribe((res:ServiceType[])=>{
      this.serviceTypeList=res;
    })
  }
}
