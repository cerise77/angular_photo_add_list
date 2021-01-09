
import {Component, HostBinding, ElementRef} from "@angular/core";
import {BagService} from "../../services/bag.service";
import {BagBaseComponent} from "../bag-base.component";

@Component({
    selector: 'bag-popup',
    styleUrls: ["bag-popup.component.css"],
    templateUrl: 'bag-popup.component.html',
    host: {
        '(document:click)': 'onPageClick($event)',
    }
})
export class BagPopupComponent extends BagBaseComponent{
    @HostBinding("class.visible") isVisible:boolean = false;

    constructor(
        protected bagService: BagService,
        private eleref: ElementRef
    ) {
        super(bagService);
    }
    ngOnInit() {
        this.bagService.toggleBagSubject.subscribe(res => {
            this.isVisible = res;
        });
    }
    onPageClick = (event) => {
        if (this.isVisible && !this.eleref.nativeElement.contains(event.target) && event.target.className !== 'bag-remove'){
            this.bagService.toggleBag();
        }
    };
}
