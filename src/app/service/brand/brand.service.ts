import { Injectable } from '@angular/core';
import { Brand } from '../../model/interface/Brand';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiURL : string ='http://localhost:8080/api/brand/';

  constructor(private http : HttpClient) { }

  getAllBrands() : Observable<Brand[]>{
    return this.http.get<Brand[]>(this.apiURL+ "getallbrands");
  }

  createBrand(obj:Brand ) :  Observable<Brand>{
    return this.http.post<Brand>(this.apiURL+ "addbrand",obj);
  }
}
