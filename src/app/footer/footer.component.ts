import { Component, OnInit } from '@angular/core';
import {FooterMenu} from "../Model/footerMenu";
import {FooterMenuService} from "../Services/footer-menu.service";
import {InfoAboutMeService} from "../Services/info-about-me.service";
import {InfoAboutMe} from "../Model/infoAboutMe";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public listFooterMenu:Array<FooterMenu>=Array<FooterMenu>();
public listInfoAboutMe:Array<InfoAboutMe>=Array<InfoAboutMe>();

  constructor(private FooterMenuService:FooterMenuService,private InfoAboutMeService:InfoAboutMeService) { }

  ngOnInit(): void {
    this.FooterMenuService.getListFooterMenu().subscribe(data=>{
      this.listFooterMenu=data;
    })
    this.InfoAboutMeService.getListInfoAboutMe().subscribe(data=>{
      this.listInfoAboutMe=data;
    })
  }

}
