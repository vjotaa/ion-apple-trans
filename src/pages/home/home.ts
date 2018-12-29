import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../interface/item.interface';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: Item[] = [
    {
      title: 'Love',
      subtitle: 'Every love story is beautiful',
      image: '/assets/imgs/image1.jpg'
    },
    {
      title: 'Sadness',
      subtitle: 'Sadness flies away on the wings of time.',
      image: '/assets/imgs/image2.jpg'
    },
    {
      title: 'Happiness',
      subtitle: `Don't cry because it's over, smile because it happened.`,
      image: '/assets/imgs/image3.jpg'
    },
    {
      title: 'Creativity',
      subtitle: `Have no fear of perfection—you'll never reach it`,
      image: '/assets/imgs/image4.jpg'
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
