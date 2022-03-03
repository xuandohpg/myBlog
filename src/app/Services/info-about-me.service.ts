import { Injectable } from '@angular/core';
import {InfoAboutMe} from "../Model/infoAboutMe";
import {Observable} from "rxjs";
import { HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class InfoAboutMeService {

  constructor(private HttpClient:HttpClient) { }

  getListInfoAboutMe():Observable<Array<InfoAboutMe>>{
    return this.HttpClient.get<Array<InfoAboutMe>>('http://localhost:3000/infoAboutMe');
  }
}
