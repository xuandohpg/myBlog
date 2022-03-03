import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-tintuconline',
  templateUrl: './tintuconline.component.html',
  styleUrls: ['./tintuconline.component.css']
})
export class TintuconlineComponent implements OnInit {

  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(3,12).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPost(6,12).subscribe(data=>{
      this.listPost=data;
    })
  }

}
