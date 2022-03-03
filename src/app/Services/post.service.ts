import { Injectable } from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../Model/post";


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private HttpClient:HttpClient) { }

  getListPost(limit:number,category_id:number):Observable<Array<Post>>{
    return this.HttpClient.get<Array<Post>>("http://localhost:3000/post?_limit="+limit+"&_order=asc&category_id="+category_id);
  }
  getListPostNews(limit:number,category_id:number):Observable<Array<Post>>{
    return this.HttpClient.get<Array<Post>>("http://localhost:3000/post?_limit="+limit+"&_sort=id&_order=desc&category_id="+category_id);
  }
  getListPostByCategory(limit:number,category_id1:number,category_id2:number):Observable<Array<Post>>{
    return this.HttpClient.get<Array<Post>>('http://localhost:3000/post?category_id='+category_id1+'&category_id='+category_id2+'&_limit='+limit);
  }

  getPostById(id:number):Observable<any>{
    return this.HttpClient.get<any>("http://localhost:3000/post/"+id);
  }
}
