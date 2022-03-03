import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {

  public Post:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(1,6).subscribe(data=>{
      this.Post=data;
    })


  }


}
