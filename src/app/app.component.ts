import { Component, OnInit, ViewChild, ViewChildren, ElementRef, Renderer2, AfterViewInit, HostListener, Directive} from '@angular/core';
import { HttpService } from './http.service';
import { EventManager } from '@angular/platform-browser';
import {Table} from './table';
import { ChildComponent} from './app.childComponent';

@Component({
    selector: 'my-app',
    templateUrl: './html/app.component.html',
    styleUrls: ['./css/app.component.css'],
    providers: [HttpService]
})


export class AppComponent implements OnInit{

  tables: Table[]=[];

  @ViewChild ('main') mainP: ElementRef;
  @ViewChild ('list') list: ElementRef;
  @ViewChildren ('addAa') elem: ElementRef;
  @ViewChild ('quantity') quantity: ElementRef;

  @ViewChild(ChildComponent, {static: false})
  private counterComponent: ChildComponent;

  constructor(private httpService: HttpService, private renderer: Renderer2, private elRef: ElementRef){}


  ngOnInit(){

      this.httpService.getData().subscribe(data => {this.tables=data; console.log(this.tables)});

  }


  onEdit(increased:any){
    if (increased.target.classList.contains("img")){

      let fon = this.renderer.createElement('div');
      this.mainP.nativeElement.appendChild(fon);
      this.renderer.addClass(fon, 'fon');

      let mainImg = this.renderer.createElement('div');
      this.mainP.nativeElement.appendChild(mainImg);
      this.renderer.addClass(mainImg, 'mainImg');

      let close = this.renderer.createElement('a');
      mainImg.appendChild(close);
      this.renderer.addClass(close, 'close');

      let parent = increased.target.parentNode;
      let inner = parent.childNodes[2];
      let clone = inner.cloneNode(true);
      this.renderer.addClass(clone, 'clone');
      mainImg.appendChild(clone);

      document.querySelector('.close').addEventListener('click', () => {
          this.renderer.removeChild(this.mainP.nativeElement, fon);
          this.renderer.removeChild(this.mainP.nativeElement, mainImg);

       });

    }

  }

  onAdd(increased:any){
    if (increased.target.classList.contains("add")){
      let parentS = increased.target.parentNode.parentNode;
      let innerT = parentS.firstElementChild.innerHTML;
      let innerI = parentS.childNodes[2];

      let clone = innerI.cloneNode(true);
      this.renderer.addClass(clone, 'li');

      let closeClone = this.renderer.createElement('a');
      this.renderer.addClass(closeClone, 'closeClone');

      let fonClone = this.renderer.createElement('div');
      this.renderer.addClass(fonClone, 'fonClone');
      fonClone.appendChild(closeClone);
      fonClone.appendChild(clone);

      let quantity = this.mainP.nativeElement.firstElementChild;
      quantity.style.display = "block";

      let background = this.mainP.nativeElement.childNodes[1];
      background.style.display = "block";
      background.appendChild(fonClone);

      this.counterComponent.increment();

    }

  }


  onClose(increased:any){
    if (increased.target.classList.contains("closeClone")){

      let parentP = increased.target.parentNode;
      this.renderer.removeChild(this.list.nativeElement, parentP);
      let parentQ = this.mainP.nativeElement.childNodes[0].innerHTML;
      if(parentQ==1){
        let quantity = this.mainP.nativeElement.firstElementChild;
        quantity.style.display = "none";
      }

      this.counterComponent.decrement();

    }
  }


}
