"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ImageDetailComponent = (function () {
    function ImageDetailComponent() {
    }
    ImageDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ImageDetailComponent.prototype, "selectedImage");
    ImageDetailComponent = __decorate([
        core_1.Component({
            selector: 'ng-image-detail',
            templateUrl: './image-detail.component.html',
            styleUrls: ['./image-detail.component.css']
        })
    ], ImageDetailComponent);
    return ImageDetailComponent;
}());
exports.ImageDetailComponent = ImageDetailComponent;
