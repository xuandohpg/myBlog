import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-mangafilm',
  templateUrl: './mangafilm.component.html',
  styleUrls: ['./mangafilm.component.css']
})
export class MangafilmComponent implements OnInit {
  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(2,18).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPostByCategory(7,18,19).subscribe(data=>{
      this.listPost=data;
    })
  }

}
