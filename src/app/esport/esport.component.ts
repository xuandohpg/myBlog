import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-esport',
  templateUrl: './esport.component.html',
  styleUrls: ['./esport.component.css']
})
export class EsportComponent implements OnInit {
  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();

  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(2,16).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPostByCategory(7,16,17).subscribe(data=>{
      this.listPost=data;
    })
  }

}
