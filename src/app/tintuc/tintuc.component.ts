import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-tintuc',
  templateUrl: './tintuc.component.html',
  styleUrls: ['./tintuc.component.css']
})
export class TintucComponent implements OnInit {
  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(2,19).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPostByCategory(7,19,20).subscribe(data=>{
      this.listPost=data;
    })
  }

}
