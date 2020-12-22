import { Component} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `{{counter}}`
})
export class ChildComponent{

    counter: number = 0;
    increment() { this.counter++; }
    decrement() { this.counter--; }
}
