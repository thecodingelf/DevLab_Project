import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/activities-data';
import 'rxjs/add/operator/debounceTime';

@IonicPage()

@Component({
selector: 'page-subhome',
templateUrl: 'sub-home.html',
})

export class SubHomePage {
  
    activities: any=0;

    constructor(public navCtrl: NavController,
                public dataService: DataProvider,
                public navParams: NavParams) {

      this.dataService.getByID(this.navParams.get('id')).then(result => {
      this.activities = result;
    });
  }
}
