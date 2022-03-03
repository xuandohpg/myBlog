import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-gaminggear',
  templateUrl: './gaminggear.component.html',
  styleUrls: ['./gaminggear.component.css']
})
export class GaminggearComponent implements OnInit {

  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(3,11).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPost(6,11).subscribe(data=>{
      this.listPost=data;
    })
  }
}
