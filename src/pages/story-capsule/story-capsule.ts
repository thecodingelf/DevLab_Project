import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-story-capsule',
  templateUrl: 'story-capsule.html',
})
export class StoryCapsulePage {

  images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '7.jpg'];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoryCapsulePage');
  }

}