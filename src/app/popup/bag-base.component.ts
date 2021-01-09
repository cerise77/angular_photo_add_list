
import {BagService} from "../services/bag.service";
import {Bag} from "../data/bag";
export class BagBaseComponent{
    public bagList:Bag[];
    public totalPrice: number;
    constructor(protected bagService: BagService) {
        this.loadBag();
    }
    loadBag = () => {
        this.bagService.bagListSubject
            .subscribe(res => {
                this.bagList = res;
                /*let total = 0;
                for(let bag of this.bagList) {
                    total += bag.table.price * bag.quantity;
                }
                this.totalPrice = total;*/
            })
    };
    removeFromBag = index => {
        this.bagService.removeBag(index);
    };
}
