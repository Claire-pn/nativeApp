import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Item } from "./item";


@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    @Input() items: Array<Item>;
    @Output() data = new EventEmitter()

    constructor(

    ) { }

    ngOnInit() {

    }
    showdata(data) {
        this.data.emit(data)
    }


}





