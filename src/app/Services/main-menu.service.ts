import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MainMenu} from "../Model/mainMenu";

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {

  constructor(private HttpClient:HttpClient ) { }

  getListMainMenu():Observable<Array<MainMenu>>{
  return this.HttpClient.get<Array<MainMenu>>('http://localhost:3000/mainMenu');
  }
}
