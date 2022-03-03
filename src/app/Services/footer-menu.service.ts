import { Injectable } from '@angular/core';
import { FooterMenu} from "../Model/footerMenu";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class FooterMenuService {

  constructor(private HttpClient:HttpClient) { }

  getListFooterMenu():Observable<Array<FooterMenu>>{
    return this.HttpClient.get<Array<FooterMenu>>('http://localhost:3000/footerMenu');
  }
}
