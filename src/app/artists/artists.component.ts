import { Component, OnInit } from '@angular/core';

import { Item ,Type} from "../item/item";
import { ItemService } from '../item/item.service';


@Component({
  selector: 'ns-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  items: Array<Item>

  constructor(private itemService: ItemService, ) { }

  ngOnInit() {
    this.items = this.itemService.getArtist();
  }
  addArtist(data) {
    alert(data.name)
    var datas: Item = {
      id: this.itemService.getLength() + 1,
      name: data.name,
      role: data.role,
      type: Type.artist
    }
    this.itemService.addItem(datas);
    this.items.push(datas)

  }
}
