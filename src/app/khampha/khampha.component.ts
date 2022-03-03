import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-khampha',
  templateUrl: './khampha.component.html',
  styleUrls: ['./khampha.component.css']
})
export class KhamphaComponent implements OnInit {
  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(2,17).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPostByCategory(7,17,18).subscribe(data=>{
      this.listPost=data;
    })
  }

}
