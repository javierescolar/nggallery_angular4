"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar.component');
var gallery_component_1 = require('./gallery/gallery.component');
var image_list_component_1 = require('./gallery/image-list/image-list.component');
var image_component_1 = require('./gallery/image-list/image.component');
var image_service_1 = require('./services/image.service');
var image_detail_component_1 = require('./image-detail/image-detail.component');
var contact_component_1 = require('./contact/contact.component');
var about_component_1 = require('./about/about.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                gallery_component_1.GalleryComponent,
                image_list_component_1.ImageListComponent,
                image_component_1.ImageComponent,
                image_detail_component_1.ImageDetailComponent,
                contact_component_1.ContactComponent,
                about_component_1.AboutComponent
            ],
            imports: [
                routes,
                platform_browser_1.BrowserModule
            ],
            providers: [image_service_1.ImageService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
