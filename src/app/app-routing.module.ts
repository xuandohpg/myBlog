import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GamemobileComponent} from "./gamemobile/gamemobile.component";
import {EsportComponent} from "./esport/esport.component";
import {KhamphaComponent} from "./khampha/khampha.component";
import {MangafilmComponent} from "./mangafilm/mangafilm.component";
import {TintucComponent} from "./tintuc/tintuc.component";
import {CongdongComponent} from "./congdong/congdong.component";
import {LmhtComponent} from "./lmht/lmht.component";
import {LienquanmobileComponent} from "./lienquanmobile/lienquanmobile.component";
import {LmhttocchienComponent} from "./lmhttocchien/lmhttocchien.component";
import {GaminggearComponent} from "./gaminggear/gaminggear.component";
import {TintuconlineComponent} from "./tintuconline/tintuconline.component";
import {PcconsoleComponent} from "./pcconsole/pcconsole.component";
import {RssComponent} from "./rss/rss.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"game-mobile",component:GamemobileComponent},
  {path:"esport",component:EsportComponent},
  {path:"kham-pha",component:KhamphaComponent},
  {path:"manga-film",component:MangafilmComponent},
  {path:"tin-tuc",component:TintucComponent},
  {path:"cong-dong",component:CongdongComponent},
  {path:"lmht",component:LmhtComponent},
  {path:"lien-quan-mobile",component:LienquanmobileComponent},
  {path:"lmht-toc-chien",component:LmhttocchienComponent},
  {path:"gaming-gear",component:GaminggearComponent},
  {path:"tin-online",component:TintuconlineComponent},
  {path:"pc-console",component:PcconsoleComponent},
  {path:"trang-chu",component:HomeComponent},
  {path:"rss",component:RssComponent},
  {path:"thi-truong",component:CongdongComponent},
  {path:"chi-tiet-bai-viet/:id",component:PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
