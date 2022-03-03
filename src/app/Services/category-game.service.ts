import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CategoryGame} from "../Model/categoryGame";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CategoryGameService {

  constructor(private HttpClient:HttpClient) { }

  getCategoryGame():Observable<Array<CategoryGame>>{
    return this.HttpClient.get<Array<CategoryGame>>("http://localhost:3000/categoryGame");
  }
}
