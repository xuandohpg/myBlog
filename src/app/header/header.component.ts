import { Component, OnInit } from '@angular/core';
import {MainMenu} from "../Model/mainMenu";
import {MainMenuService} from "../Services/main-menu.service";
import {SocialNetwork} from "../Model/socialNetwork";
import {SocialNetworkService} from "../Services/social-network.service";
import {Logo} from "../Model/logo";
import {LogoService} from "../Services/logo.service";
import {NewsMenuService} from "../Services/news-menu.service";
import {NewsMenu} from "../Model/newsMenu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
public listMainMenu:Array<MainMenu>=new Array<MainMenu>();
public listSocialNetwork:Array<SocialNetwork>=new Array<SocialNetwork>();
public logo:string='';
public logoId:number=0;
public listNewsMenu:Array<NewsMenu>=new Array<NewsMenu>();

  constructor(private NewsMenuService:NewsMenuService,private MainMenuService:MainMenuService,private SocialNetworkService:SocialNetworkService,private LogoService:LogoService) { }

  ngOnInit(): void {
    this.MainMenuService.getListMainMenu().subscribe(data=>{
      this.listMainMenu=data;
    })
    this.SocialNetworkService.getListSocialNetwork().subscribe(data=>{
      this.listSocialNetwork=data;
    })
    this.LogoService.getLogo().subscribe(data=>{
      for(let item of data){
         this.logoId=item.id;
      }
      this.LogoService.getLogoById(this.logoId).subscribe(data=>{
        this.logo=data.link_image;
      })
    })
    this.NewsMenuService.getListNewsMenu().subscribe(data=>{
      this.listNewsMenu=data;
    })
  }

}
