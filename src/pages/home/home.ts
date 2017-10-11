import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { SubhomePage } from '../../pages/subhome/subhome';
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
  navCtrl: NavController;
  modalCtrl: ModalController;

  constructor(public navCtrl: NavController, public dataService: DataProvider, public modalCtrl: ModalController) {
    this.searchControl = new FormControl();
  }
  openModal() {
    let activities = activities;
    let myModal = this.modalCtrl.create(SubhomePage, activities);
    myModal.present();
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
