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
        activity: 'Organizing a day camp with Family Summer Olympics games',
        "image": "img/olympic.jpg",
        text: "Such a great excuse to spend some fun quality time with loved ones. Family members competitive spirit is put to it’s test with a variety of backyard games and competitions, including water balloon relays, jumbo beer pong, slosh ball and so much more!",
        content: {
          image: "",
          age: "",
          instructions: "",
          tools: ""
        },
        keywords: "summer, backyard, outdoor, game, games, camp, camping, organize"
      },

      {
        activity: 'DIY LADDER GOLF: THE PERFECT OUTDOOR PARTY GAME',
        "image": "img/golfladder.jpg",
        text: "Ladder Golf is a great outdoor game. Play it with your family or with a crowd. This game is perfect for parties. Just promise me no crying hysterically if you lose.",
        content: {
          image: "",
          age: "",
          instructions: "",
          tools: ""
        },
        keywords: "summer, spring, autumn, fall, game, games,party, parties, diy"
      },

      {
        activity: 'Idea Snow-Themed Crafts',
        "image": "img/snowcraft.jpg",
        text: "Do you have the winter blues? Bust your cabin-fever by having a little fun with snow. Create some wintry crafts and make some goodies that incorporate that fluffy white stuff we all love this time of year.",
        content: {
          image: "",
          age: "",
          instructions: "",
          tools: ""
        },
        keywords: "winter, craft, crafts, snow, theme, outdoor, decoration, decor"
      },

      {
        activity: 'Recycled Bottle Bowling',
        "image": "img/bowling.jpg",
        text: "A hit of the neighborhood, turn the backyard into your very own bowling alley with our recycled bottle bowling craft! With a little paint and some rescued bottles, you’ll soon have an easy DIY game everyone in the family will love.",
        content: {
          image: "",
          age: "",
          instructions: "",
          tools: ""
        },
        keywords: "winter, craft, crafts, snow, theme, outdoor, decoration, decor"
      },

      {
        activity: '17 Functional DIY Camping Hacks to Make Your Outdoor Experience Less Expensive Today',
        "image": "img/camping.jpg",
        text: "Find out the collection of simple DIY camping hacks extremely useful in making your outdoors experience less expensive and more enjoyable. Try them and watch your fellow campers turn green with envy.",
        content: {
          image: "",
          age: "",
          instructions: "",
          tools: ""
        },
        keywords: "camping, camp, summer, spring, autumn, fall, diy, hacks, hack, outdoor, tip, tips"
      }


  ]

  }

  filterItems(searchTerm){

           return this.activities.filter((activity) => {
               return activity.keywords.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
           });

       }

}
