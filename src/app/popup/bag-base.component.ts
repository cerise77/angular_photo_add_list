
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
            })
    };
    removeFromBag = index => {
        this.bagService.removeBag(index);
    };
}
