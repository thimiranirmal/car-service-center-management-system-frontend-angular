import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../model/interface/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiURL : string ='http://localhost:8080/api/category/';

  constructor(private http : HttpClient) { }

  getAllCategory() : Observable<Category[]>{
    return this.http.get<Category[]>(this.apiURL+ "getallcategory");
  }

  createCategory(obj:Category ) :  Observable<Category>{
    return this.http.post<Category>(this.apiURL+ "addcategory",obj);
  }
}
