import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    meti:Item;
    score=0
    condition=true
    edit=true
    

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute,
        
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
        // this.item = this.itemService.getItemSr(id);
    }
    increment() {
        this.score++
        this.condition=false
      }
    decrement(){
          this.score--
          if(this.score==0){
              this.condition=true
          }
      }
    update(item){
        this.edit=true
        this.item.name = item.name
        this.item.role= item.role

    }
   
   
}
