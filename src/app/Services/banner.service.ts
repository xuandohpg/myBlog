import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Banner} from "../Model/banner";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private HttpClient:HttpClient) { }

  getBanner(limit:number):Observable<Array<Banner>>{
    return this.HttpClient.get<Array<Banner>>("http://localhost:3000/banner?_limit="+limit+"1&_sort=id&_order=desc");
  }
}
