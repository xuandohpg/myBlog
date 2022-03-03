import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../Services/post.service";
import {Post} from "../Model/post";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
public id:number=0;
  public title:string="";
  public auth:string="";
  public dateTime:string="";
  public content:string="";

  constructor(private route: ActivatedRoute,private PostService:PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id= Number(params.get('id'));
    });
    this.PostService.getPostById(this.id).subscribe(data=>{
        this.title=data.title;
        this.auth=data.auth;
        this.dateTime=data.dateTime;
        this.content=data.content;

    });

  }

}
