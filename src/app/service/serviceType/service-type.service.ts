import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceType } from '../../model/interface/ServiceType';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  apiURL : string ='http://localhost:8080/api/servicetype/';

  constructor(private http : HttpClient) { }

  getAllServiceTypes() : Observable<ServiceType[]>{
    return this.http.get<ServiceType[]>(this.apiURL+ "getallservicetypes");
  }

  createServiceType(obj:ServiceType ) :  Observable<ServiceType>{
    return this.http.post<ServiceType>(this.apiURL+ "addservicetype",obj);
  }
}
