import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  searchTerm: string = '';
  searchControl: FormControl;
  activities: any;
  searching: any = false;

  constructor(public navCtrl: NavController, public dataService: DataProvider) {
    this.searchControl = new FormControl();
  }

  ionViewDidLoad() {
    
    this.setFilteredItems();
    
           this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
    
               this.searching = false;
               this.setFilteredItems();
    
           });
    
       }
    
       onSearchInput(){
        this.searching = true;
    }
 
    setFilteredItems() {
 
        this.activities = this.dataService.filterItems(this.searchTerm);
 
    }

}
