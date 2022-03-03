import { Component, OnInit } from '@angular/core';
import {Post} from "../Model/post";
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-gamemobile',
  templateUrl: './gamemobile.component.html',
  styleUrls: ['./gamemobile.component.css']
})
export class GamemobileComponent implements OnInit {
public listTopPost:Array<Post>=new Array<Post>();
public listPost:Array<Post>=new Array<Post>();
  constructor(private PostService:PostService) { }

  ngOnInit(): void {
    this.PostService.getListPostNews(2,15).subscribe(data=>{
      this.listTopPost=data;
    })

    // this.PostService.getListPost(100,15).subscribe(data=>{
    //   this.listPost=data;
    // })

    this.PostService.getListPostByCategory(7,15,16).subscribe(data=>{
      this.listPost=data;
    })
  }

}
