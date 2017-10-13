webpackJsonp([5],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OtherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtherPage = (function () {
    function OtherPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OtherPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtherPage');
    };
    return OtherPage;
}());
OtherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-other',template:/*ion-inline-start:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\other\other.html"*/'<!--\n  Generated template for the OtherPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>other</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\other\other.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], OtherPage);

//# sourceMappingURL=other.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_activities_data__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubHomePage = (function () {
    function SubHomePage(navCtrl, dataService, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.navParams = navParams;
        this.activities = 0;
        this.dataService.getByID(this.navParams.get('id')).then(function (result) {
            _this.activities = result;
        });
    }
    return SubHomePage;
}());
SubHomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subhome',template:/*ion-inline-start:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\sub-home\sub-home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <ion-title>Application name here</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="activities != 0">\n  <ion-img src={{activities.content.img}}></ion-img>\n  <h2>{{activities.content.title}}</h2>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-icon class="star" name="star"></ion-icon> GAME: LOREM IPSUM\n    </ion-card-header>\n    <p>{{activities.content.des}}</p>\n    <p>{{activities.content.instructions}}</p>\n  </ion-card>\n\n  <ion-fab right bottom>\n    <button ion-fab color="dark">\n      <ion-icon name="arrow-dropleft"></ion-icon>\n    </button>\n    <ion-fab-list side="left">\n      <button ion-fab>\n        <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-vimeo"></ion-icon>\n      </button>\n      <button ion-fab>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </button>\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\sub-home\sub-home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_activities_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], SubHomePage);

//# sourceMappingURL=sub-home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToDoPage = (function () {
    function ToDoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    ToDoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToDoPage');
    };
    return ToDoPage;
}());
ToDoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-to-do',template:/*ion-inline-start:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\to-do\to-do.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Activities To-Do\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-list-header>\n      Activities\n    </ion-list-header>\n\n    <ion-item *ngFor="let todo of todos">\n      <ion-label>{{todo.activity}}</ion-label>\n      <ion-checkbox color="secondary" checked="false"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button item-end icon-right end>\n    Add new activity\n    <ion-icon name="add-circle"></ion-icon>\n  </button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\to-do\to-do.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], ToDoPage);

//# sourceMappingURL=to-do.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryCapsulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoryCapsulePage = (function () {
    function StoryCapsulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '7.jpg'];
    }
    StoryCapsulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoryCapsulePage');
    };
    return StoryCapsulePage;
}());
StoryCapsulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-story-capsule',template:/*ion-inline-start:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\story-capsule\story-capsule.html"*/'<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>story-capsule</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n\n    <ion-card *ngFor="let story of stories">\n        <ion-item>\n            <img src="img/cardimg1.jpg">\n          <h2>Me</h2>\n          <p>{{story.date}}</p>\n        </ion-item>\n        <ion-card-content>\n          {{story.description}}\n        </ion-card-content>\n        <button ion-button clear item-end icon-right end>\n          More\n          <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n        </button>\n      </ion-card>\n\n</ion-content> -->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>story-capsule</ion-title>\n    <ion-fab top right edge>\n      <button ion-fab color="secondary" mini>\n        <ion-icon name="add" (click)="Add()"></ion-icon>\n      </button>\n    </ion-fab>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="cards-bg social-cards">\n\n  <ion-item>\n    <h4>Recently uploaded</h4>\n    <ion-slides class="image-slider" loop="true" slidesPerView="2">\n      <ion-slide *ngFor="let img of images">\n        <img src="img/{{img}}" class="thumb-img" imageViewer/>\n      </ion-slide>\n    </ion-slides>\n  </ion-item>\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/3.jpg">\n      </ion-avatar>\n      <h2>Bampás</h2>\n      <p>Taken time: June 28, 1990</p>\n    </ion-item>\n\n    <img src="img/6.jpg">\n\n    <ion-card-content>\n      <p>Daddy story: Hey kids, look at your awesome teen dad !!!!</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          46 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          66 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          2d ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/3.jpg">\n      </ion-avatar>\n      <h2>Grandmom</h2>\n      <p>Time taken: November 5, 1955</p>\n    </ion-item>\n\n    <img src="img/3.jpg">\n\n    <ion-card-content>\n      <p>Grandmom story here: orem ipsum dolor sit amet.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          12 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          4 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n\n  <ion-card>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="img/4.jpg">\n      </ion-avatar>\n      <h2>Grandpa</h2>\n      <p>Time taken: October 10, 2015</p>\n    </ion-item>\n\n    <img src="img/5.jpg">\n\n    <ion-card-content>\n      <p>Grandpa story: orem ipsum dolor sit amet, adhuc recteque gubergren at.</p>\n    </ion-card-content>\n\n    <ion-row>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'thumbs-up\'></ion-icon>\n          30 Likes\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="primary" clear small icon-start>\n          <ion-icon name=\'text\'></ion-icon>\n          64 Comments\n        </button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          3w ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\story-capsule\story-capsule.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* NavParams */]])
], StoryCapsulePage);

//# sourceMappingURL=story-capsule.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		291,
		0
	],
	"../pages/other/other.module": [
		292,
		4
	],
	"../pages/story-capsule/story-capsule.module": [
		295,
		3
	],
	"../pages/sub-home/sub-home.module": [
		293,
		2
	],
	"../pages/to-do/to-do.module": [
		294,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__to_do_to_do__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__story_capsule_story_capsule__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__to_do_to_do__["a" /* ToDoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__story_capsule_story_capsule__["a" /* StoryCapsulePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="ios-home-outline"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="ToDo" tabIcon="ios-list-box-outline"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Story Capsule" tabIcon="ios-book-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_activities_data__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sub_home_sub_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, dataService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.modalCtrl = modalCtrl;
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
        this.dataService.loadAll().then(function (result) {
            _this.activities = result;
        });
    }
    HomePage.prototype.openModal = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_sub_home_sub_home__["a" /* SubHomePage */], { id: id });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems();
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            _this.searching = false;
            _this.setFilteredItems();
        });
    };
    HomePage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    HomePage.prototype.setFilteredItems = function () {
        this.activities = this.dataService.filterItems(this.searchTerm);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="secondary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar\n  [(ngModel)]="searchTerm" [formControl]="searchControl" (ionInput)="onSearchInput()">\n</ion-searchbar>\n\n  <div *ngIf="searching" class="spinner-container">\n    <ion-spinner></ion-spinner>\n</div>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col width-33>\n        <ion-card *ngFor="let activity of activities">\n          <ion-item>\n           <img src={{activity.image}}/>\n            <h2>{{activity.activity}}</h2>\n            <ion-badge color="twitter">{{activity.content.age}}</ion-badge>\n          </ion-item>\n          <ion-card-content>\n            {{activity.text}}\n          </ion-card-content>\n          <button ion-button clear item-end icon-right end (click)="openModal(activity.id)">\n            More\n            <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n          </button>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Users\Jukka\Desktop\DevLab\Parents\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_activities_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_other_other__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_to_do_to_do__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sub_home_sub_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_story_capsule_story_capsule__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_data_activities_data__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_other_other__["a" /* OtherPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_sub_home_sub_home__["a" /* SubHomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_to_do_to_do__["a" /* ToDoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_story_capsule_story_capsule__["a" /* StoryCapsulePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/other/other.module#OtherPageModule', name: 'OtherPage', segment: 'other', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sub-home/sub-home.module#SubHomePageModule', name: 'SubHomePage', segment: 'sub-home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/to-do/to-do.module#ToDoPageModule', name: 'ToDoPage', segment: 'to-do', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/story-capsule/story-capsule.module#StoryCapsulePageModule', name: 'StoryCapsulePage', segment: 'story-capsule', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_14_ionic_img_viewer__["a" /* IonicImageViewerModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_other_other__["a" /* OtherPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_sub_home_sub_home__["a" /* SubHomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_to_do_to_do__["a" /* ToDoPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_story_capsule_story_capsule__["a" /* StoryCapsulePage */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_13__providers_data_activities_data__["a" /* DataProvider */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_other_other__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Tabs Page', component: __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Other Page', component: __WEBPACK_IMPORTED_MODULE_4__pages_other_other__["a" /* OtherPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Jukka\Desktop\DevLab\Parents\src\app\app.html"*/'<ion-menu [content]="content">\n    <ion-header>\n      <ion-toolbar color="secondary">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n   \n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n   \n  </ion-menu>\n   \n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Jukka\Desktop\DevLab\Parents\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = (function () {
    function DataProvider(http) {
        this.http = http;
        this.activities = [
            {
                id: 1,
                activity: 'Organizing a day camp with Family Summer Olympics games',
                image: "img/olympic.jpg",
                text: "Such a great excuse to spend some fun quality time with loved ones. Family members competitive spirit is put to it’s test with a variety of backyard games and competitions, including water balloon relays, jumbo beer pong, slosh ball and so much more!",
                content: {
                    title: "Family Summer Olympics games",
                    img: "img/olym1.JPG",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "summer, backyard, outdoor, game, games, camp, camping, organize"
            },
            {
                id: 2,
                activity: 'DIY LADDER GOLF: THE PERFECT OUTDOOR PARTY GAME',
                image: "img/golflad1.jpeg",
                text: "Ladder Golf is a great outdoor game. Play it with your family or with a crowd. This game is perfect for parties. Just promise me no crying hysterically if you lose.",
                content: {
                    title: "Ladder golf",
                    img: "img/ladder.jpg",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "summer, spring, autumn, fall, game, games,party, parties, diy"
            },
            {
                id: 3,
                activity: 'Idea Snow-Themed Crafts',
                image: "img/snowcraft.jpg",
                text: "Do you have the winter blues? Bust your cabin-fever by having a little fun with snow. Create some wintry crafts and make some goodies that incorporate that fluffy white stuff we all love this time of year.",
                content: {
                    title: "Snow craft",
                    img: "img/no_image.jpeg",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "winter, craft, crafts, snow, theme, outdoor, decoration, decor"
            },
            {
                id: 4,
                activity: '17 Functional DIY Camping Hacks to Make Your Outdoor Experience Less Expensive Today',
                image: "img/camp.jpg",
                text: "Find out the collection of simple DIY camping hacks extremely useful in making your outdoors experience less expensive and more enjoyable. Try them and watch your fellow campers turn green with envy.",
                content: {
                    title: "DIY Camping Hacks",
                    img: "img/no_image.jpeg",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "camping, camp, summer, spring, autumn, fall, diy, hacks, hack, outdoor, tip, tips"
            },
            {
                id: 5,
                activity: 'Recycled Bottle Bowling',
                image: "img/bowling.jpg",
                text: "A hit of the neighborhood, turn the backyard into your very own bowling alley with our recycled bottle bowling craft! With a little paint and some rescued bottles, you’ll soon have an easy DIY game everyone in the family will love.",
                content: {
                    title: "Bowling time",
                    img: "img/no_image.jpeg",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "craft, crafts, bowling, theme, outdoor, indoor"
            },
            {
                id: 6,
                activity: 'De Finibus Bonorum et Malorum',
                image: "img/powerranger.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                content: {
                    title: "Lorem Ipsum",
                    img: "img/no_image.jpeg",
                    age: "age range",
                    des: "GOAL: Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
                    instructions: "Instruction> Lorem ipsum dolor sit amet, ad ius velit homero, nonumy aliquam eam ad, cu ius iusto saepe oratio. Ad mel audiam dolorem dolores, vim ex quas ferri assueverit, at sit agam atqui graece. Eu quando atomorum assueverit nam, usu malorum assentior at. Similique deterruisset ne mea, no possim vocent audiam pro. Nec id purto dissentias cotidieque.",
                    tools: ""
                },
                keywords: "Lorem ipsum dolor"
            }
        ];
    }
    // loadAll() method which simply returns this activities array variable as promise.
    DataProvider.prototype.loadAll = function () {
        return Promise.resolve(this.activities);
    };
    ;
    // return the matching id’s object as promise.
    DataProvider.prototype.getByID = function (id) {
        for (var i = 0; i < (this.activities).length; i++) {
            if (this.activities[i].id == id) {
                return Promise.resolve(this.activities[i]);
            }
        }
    };
    ;
    // filter search results by keyword.
    DataProvider.prototype.filterItems = function (searchTerm) {
        return this.activities.filter(function (activity) {
            return activity.keywords.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */]])
], DataProvider);

//# sourceMappingURL=activities-data.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map