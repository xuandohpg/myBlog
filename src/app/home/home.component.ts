import { Component, OnInit } from '@angular/core';
import {BannerService} from "../Services/banner.service";
import {Banner} from "../Model/banner";
import {PostService} from "../Services/post.service";
import {Post} from "../Model/post";
import {CategoryGame} from "../Model/categoryGame";
import {CategoryGameService} from "../Services/category-game.service";
import {GameService} from "../Services/game.service";
import {Game} from "../Model/game";
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

public listBanner:Array<Banner>=new Array<Banner>();
public listTopLeft:Array<Post>=new Array<Post>();
public listTopRight:Array<Post>=new Array<Post>();

public listTopLeft1:Array<Post>=new Array<Post>();
public listTopRight1:Array<Post>=new Array<Post>();

public listNewsPost:Array<Post>=new Array<Post>();
public isIdActive:number=1;
public listGame:any;
public dsGame:any[]=[];
public listCategoryGame:Array<CategoryGame>=new Array<CategoryGame>();
  constructor(private GameService:GameService,private BannerService:BannerService,private PostService:PostService,private CategoryGameService:CategoryGameService) { }
  ngOnInit(): void {
    console.log(this.isIdActive);
    this.BannerService.getBanner(1).subscribe(data=>{
      this.listBanner=data;
    })
    this.PostService.getListPost(2,15).subscribe(data=>{
      this.listTopLeft=data;
    })
    this.PostService.getListPost(2,16).subscribe(data=>{
      this.listTopRight=data;
    })
    this.PostService.getListPost(4,17).subscribe(data=>{
      this.listTopLeft1=data;
    })
    this.PostService.getListPost(5,18).subscribe(data=>{
      this.listTopRight1=data;
    })
    this.PostService.getListPost(3,19).subscribe(data=>{
      this.listNewsPost=data;
    })

    this.CategoryGameService.getCategoryGame().subscribe(data=>{
      this.listCategoryGame=data;
    })

    this.GameService.getListGame(20).subscribe(data=>{
        this.dsGame=data;
    })
  }
  onClick(isClick:number=0){
    this.isIdActive=isClick;
    this.dsGame=[];
    if(isClick===1){
      this.GameService.getListGameNews(20).subscribe(data=>{
        this.dsGame=[];
        this.dsGame=data;
      });
    }
    else if (isClick===99){
      this.GameService.getListGame(20).subscribe(data=>{
        this.dsGame=data;
      });
    }
    else{
      this.GameService.getListGame(100).subscribe(data=>{
        for(let item of data){
          for(let value of item.listCategoryId){
            if(value==isClick){
              this.dsGame.push(item);
            }
          }
        }
      });
    }
  }
}
