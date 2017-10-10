import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DataProvider {

  activities: any;

  constructor(public http: HttpModule) {
    console.log('Hello DataProvider Provider');

    this.activities = [
      {
        activity: 'Spring Outdoor Crafts', 
        image: "",
        content: {
          image: "",
          instructions: "",
          tools: ""
        }
      },
      {
        activity: 'Spring Indoor Games', 
        image: "",
        content: {
          image: "",
          instructions: "",
          tools: ""
        }
      },
      {
        activity: 'Winter Outdoor Crafts', 
        image: "",
        content: {
          image: "",
          instructions: "",
          tools: ""
        }
      },
      {
        activity: 'Outdoor Water activities', 
        image: "",
        content: {
          image: "",
          instructions: "",
          tools: ""
        }
      },
      {
        activity: 'Spring Crafts & Games', 
        image: "",
        content: {
          image: "",
          instructions: "",
          tools: ""
        }
      },
      {
        activity: 'Cycling', 
        image: "",
        content: {
          image: "",
          instructions: "",
          tools: ""
        }
      },
  ]

  }

  filterItems(searchTerm){
    
           return this.activities.filter((activity) => {
               return activity.activity.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
           });    
    
       }

}
