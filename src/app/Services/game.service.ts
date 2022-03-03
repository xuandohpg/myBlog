import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Game} from "../Model/game";


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private HttpClient:HttpClient) { }

  getListGame(limit:number):Observable<Array<Game>>{
    return this.HttpClient.get<Array<Game>>("http://localhost:3000/game?_limit="+limit+"&_sort=id&_order=desc");
  }


  getListGameNews(limit:number):Observable<Array<Game>>{
    return this.HttpClient.get<Array<Game>>("http://localhost:3000/game?_limit="+limit+"&_sort=id&_order=desc&status=1");
  }
}
