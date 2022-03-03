import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Logo} from "../Model/logo";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  constructor(private HttpClient:HttpClient) { }

  getLogo():Observable<any>{
    return this.HttpClient.get<any>("http://localhost:3000/logo?_limit=1&_sort=id&_order=desc");
  }
  getLogoById(id:number):Observable<any>{
    return this.HttpClient.get<any>("http://localhost:3000/logo/"+id);
  }
  getId(id:number){
    console.log(id);
  }
}
