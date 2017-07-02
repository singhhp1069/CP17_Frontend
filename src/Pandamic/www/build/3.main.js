webpackJsonp([3],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__diseases__ = __webpack_require__(277);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiseasesPageModule", function() { return DiseasesPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DiseasesPageModule = (function () {
    function DiseasesPageModule() {
    }
    return DiseasesPageModule;
}());
DiseasesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__diseases__["a" /* DiseasesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__diseases__["a" /* DiseasesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__diseases__["a" /* DiseasesPage */]
        ]
    })
], DiseasesPageModule);

//# sourceMappingURL=diseases.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiseasesPage; });
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
 * Generated class for the DiseasesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var DiseasesPage = (function () {
    function DiseasesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DiseasesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DiseasesPage');
    };
    return DiseasesPage;
}());
DiseasesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-diseases',template:/*ion-inline-start:"/Users/harpreet/Desktop/ionic-docker/CP17_Frontend/src/Pandamic/src/pages/diseases/diseases.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Diseases\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n\n <ion-list *ngFor="let data of diseases" no-lines>\n\n <ion-card>\n  <ion-card-header>\n   Color : {{ data.color }}     \n  </ion-card-header>\n  <ion-card-content>\n    Found : {{data.cure.found}}\n    Eradicated : {{data.cure.eradicated}}\n  </ion-card-content>\n\n</ion-card>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/harpreet/Desktop/ionic-docker/CP17_Frontend/src/Pandamic/src/pages/diseases/diseases.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], DiseasesPage);

//# sourceMappingURL=diseases.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map