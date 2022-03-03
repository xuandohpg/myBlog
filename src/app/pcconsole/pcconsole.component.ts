import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-pcconsole',
  templateUrl: './pcconsole.component.html',
  styleUrls: ['./pcconsole.component.css']
})
export class PcconsoleComponent implements OnInit {
  public listTopPost:Array<Post>=new Array<Post>();
  public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(3,13).subscribe(data=>{
      this.listTopPost=data;
    })

    this.PostService.getListPost(6,13).subscribe(data=>{
      this.listPost=data;
    })
  }

}
