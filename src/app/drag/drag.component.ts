import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { PanGestureEventData } from "tns-core-modules/ui/gestures/gestures"
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { AnimationCurve } from "tns-core-modules/ui/enums";
import {Image} from 'tns-core-modules/ui/image/image'
@Component({
  selector: 'ns-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css']
})
export class DragComponent implements OnInit {
  @ViewChild("dragImage", {static:true}) dragImage: ElementRef;
  dragImageItem: Image;
  prevDeltaX: number;
  prevDeltaY: number;
  itemContainer: GridLayout;
  constructor() { }

  ngOnInit() {
    this.dragImageItem = <Image>this.dragImage.nativeElement;
    this.dragImageItem.translateX = 0;
    this.dragImageItem.translateY = 0;
    this.dragImageItem.scaleX = 1;
    this.dragImageItem.scaleY = 1
  
  }
  onPan(args: PanGestureEventData) {
    //console.log("Pana: [" + args.deltaX + ", " + args.deltaY + "] state: " + args.state);
    if (args.state === 1) // down
    {
      this.prevDeltaX = 0;
      this.prevDeltaY = 0;
    }
    else if (args.state === 2) // panning
    {
      this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
      this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;
  
  
      this.prevDeltaX = args.deltaX;
      this.prevDeltaY = args.deltaY;
    }
    else if (args.state === 3) // up
    {
  
    }
  }
}