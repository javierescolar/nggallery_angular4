"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ImageComponent = (function () {
    function ImageComponent() {
    }
    ImageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ImageComponent.prototype, "image");
    ImageComponent = __decorate([
        core_1.Component({
            selector: 'ng-image',
            templateUrl: './image.component.html',
            styles: ["\n  img {\n      -webkit-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);\n      -moz-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);\n      box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);\n      margin-bottom: 10px;\n  }\n  img:hover {\n      filter: gray;\n      /* IE6-9 */\n      -webkit-filter: grayscale(1);\n      /* Google Chrome, Safari 6+ & Opera 15+ */\n  }\n  \n  a:hover {\n    cursor:pointer;\n  }\n"]
        })
    ], ImageComponent);
    return ImageComponent;
}());
exports.ImageComponent = ImageComponent;
