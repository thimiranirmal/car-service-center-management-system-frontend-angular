import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Make } from '../../model/interface/Make';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MakeService {

  apiURL : string ='http://localhost:8080/api/make/';

  constructor(private http : HttpClient) { }

  getAllMakes() : Observable<Make[]>{
    return this.http.get<Make[]>(this.apiURL+ "getallmake");
  }

  createMake(obj:Make ) :  Observable<Make>{
    return this.http.post<Make>(this.apiURL+ "addmake",obj);
  }
}
