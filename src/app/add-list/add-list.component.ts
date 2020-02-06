import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { Item } from '../item/item';


@Component({
  selector: 'ns-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {
  @Input() name: string
  @Input() role: string
  @Output() data = new EventEmitter()

  items: Array<Item>;


  constructor() { }

  ngOnInit()  {
   

  }
  submit() {
    this.data.emit({name:this.name, role: this.role}
   
    )
  
  }
 


}
