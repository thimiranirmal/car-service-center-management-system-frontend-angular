import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../model/interface/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL : string ='http://localhost:8080/api/products/';

  constructor(private http : HttpClient) { }

  getAllProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL+ "getallproducts");
  }

  createProduct(obj:Product ) :  Observable<Product>{
    return this.http.post<Product>(this.apiURL+ "addproduct",obj);
  }
}
