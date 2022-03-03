import { Injectable } from '@angular/core';
import {SocialNetwork} from "../Model/socialNetwork";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocialNetworkService {

  constructor(private HttpClient:HttpClient) { }
  getListSocialNetwork():Observable<Array<SocialNetwork>>{
    return this.HttpClient.get<Array<SocialNetwork>>("http://localhost:3000/socialNetwork");
  }
}
