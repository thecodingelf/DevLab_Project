import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-to-do',
  templateUrl: 'to-do.html',
})
export class ToDoPage {

  todos: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.todos = [
      {
        id: 1,
        activity: 'Play ladder golf',
      },
      {
        id: 2,
        activity: 'Do bowling in backyard',
      },
      {
        id: 3,
        activity: 'Do crafting together',
      },
      {
        id: 4,
        activity: 'Experiment with life hacks',
      },
      {
        id: 5,
        activity: 'Play football',
      },
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToDoPage');
  }

}
