import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { GamemobileComponent } from './gamemobile/gamemobile.component';
import { EsportComponent } from './esport/esport.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { KhamphaComponent } from './khampha/khampha.component';
import { MangafilmComponent } from './mangafilm/mangafilm.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { CongdongComponent } from './congdong/congdong.component';
import { LmhtComponent } from './lmht/lmht.component';
import { LienquanmobileComponent } from './lienquanmobile/lienquanmobile.component';
import { LmhttocchienComponent } from './lmhttocchien/lmhttocchien.component';
import { GaminggearComponent } from './gaminggear/gaminggear.component';
import { TintuconlineComponent } from './tintuconline/tintuconline.component';
import { PcconsoleComponent } from './pcconsole/pcconsole.component';
import { RssComponent } from './rss/rss.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    GamemobileComponent,
    EsportComponent,
    KhamphaComponent,
    MangafilmComponent,
    TintucComponent,
    CongdongComponent,
    LmhtComponent,
    LienquanmobileComponent,
    LmhttocchienComponent,
    GaminggearComponent,
    TintuconlineComponent,
    PcconsoleComponent,
    RssComponent,
    PostDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
