import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { Item } from '../../interface/item.interface';

/**
 * Generated class for the ItemDetailComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailComponent implements OnInit {
  constructor(private navParams: NavParams, private navCtrl: NavController) {}
  public clientHeight: number;
  public direction: number;
  public item: Item;

  ngOnInit() {
    this.clientHeight = this.navParams.get('clientRectTop');
    this.direction = this.navParams.get('heightOfTheCard');
    this.item = this.navParams.get('item');
  }
  backToItems() {
    this.navCtrl.pop({
      animation: 'leave-animation',
      easing: this.clientHeight.toString(),
      ev: this.direction
    });
  }
}
