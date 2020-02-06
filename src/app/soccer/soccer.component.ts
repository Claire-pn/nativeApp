import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item/item.service';
import { Item ,Type} from "../item/item";


@Component({
  selector: 'ns-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.css']
})
export class SoccerComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getSoccer();
  }

  addSoccer(data) {
    alert(data.name)
    var datas: Item = {
      id: this.itemService.getLength() + 1,
      name: data.name,
      role: data.role,
      type: Type.soccer
    }
    this.itemService.addItem(datas);
    this.items.push(datas)
  }
}


