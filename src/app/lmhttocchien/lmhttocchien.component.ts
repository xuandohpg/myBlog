import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-lmhttocchien',
  templateUrl: './lmhttocchien.component.html',
  styleUrls: ['./lmhttocchien.component.css']
})
export class LmhttocchienComponent implements OnInit {

  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(3,10).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPost(6,10).subscribe(data=>{
      this.listPost=data;
    })
  }

}
