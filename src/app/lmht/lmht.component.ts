import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-lmht',
  templateUrl: './lmht.component.html',
  styleUrls: ['./lmht.component.css']
})
export class LmhtComponent implements OnInit {
  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(3,8).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPost(6,8).subscribe(data=>{
      this.listPost=data;
    })
  }

}
