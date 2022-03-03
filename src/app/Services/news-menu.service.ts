import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NewsMenu} from "../Model/newsMenu";


@Injectable({
  providedIn: 'root'
})
export class NewsMenuService {

  constructor(private HttpClient:HttpClient) { }
  getListNewsMenu():Observable<Array<NewsMenu>>{
    return this.HttpClient.get<Array<NewsMenu>>('http://localhost:3000/newsMenu');
  }
}
