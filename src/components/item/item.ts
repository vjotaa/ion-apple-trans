import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Item } from '../../interface/item.interface';

@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {
  @ViewChild('content') private elementView: ElementRef;
  @Input() public item: Item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  openDetailPage() {
    const page = 'CardPage';
    const clientRectTop = this.elementView.nativeElement.getBoundingClientRect()
      .top;
    const heightOfTheCard = this.elementView.nativeElement.clientHeight;
    const params = {
      clientRectTop: clientRectTop,
      heightOfTheCard: heightOfTheCard,
      item: this.item
    };
    const animationParams = {
      animation: 'enter-animation',
      direction: clientRectTop.toString(),
      ev: heightOfTheCard
    };
    this.navCtrl.push(page, params, animationParams);
  }
}
