import { Component, OnInit, ViewChild, ViewChildren, ElementRef, Renderer2, AfterViewInit, HostListener, Directive} from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import {Table} from './data/table';
import { HttpService } from './services/http.service';
import {BagService} from "./services/bag.service";


@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css']
})


  export class AppComponent implements OnInit{

  tables: Table[]=[];

  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef, private bagService:BagService){}


  ngOnInit(){

      this.httpService.getData().subscribe((data:any) => {this.tables=data});

  }

  addToBag = (table) => {
      this.bagService.addToBag({table,quantity:1})
  };



}
