import { Component, OnInit } from '@angular/core';
import {SidebarService} from "../Services/sidebar.service";
import {Sidebar} from "../Model/sidebar";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
public listSidebar:Array<Sidebar>=new Array<Sidebar>();

  constructor(private SidebarService:SidebarService) { }

  ngOnInit(): void {
    this.SidebarService.getListSidebar(3).subscribe(data=>{
     this.listSidebar=data;
    })
  }

}
