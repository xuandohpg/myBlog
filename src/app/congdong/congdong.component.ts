import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-congdong',
  templateUrl: './congdong.component.html',
  styleUrls: ['./congdong.component.css']
})
export class CongdongComponent implements OnInit {
  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {

    this.PostService.getListPostNews(2,20).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPostByCategory(7,20,15).subscribe(data=>{
      this.listPost=data;
    })
  }

}
