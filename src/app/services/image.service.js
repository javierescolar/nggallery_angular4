"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var image_1 = require('../models/image');
var ImageService = (function () {
    function ImageService() {
        this.images = [
            new image_1.Image('1', 'Primera Imagen', 'Descripción primera imagen', 'https://videotutoriales.com/maspa/maspa1.jpg', 'https://videotutoriales.com/maspa/maspa1-1.jpg'),
            new image_1.Image('2', 'Segunda Imagen', 'Descripción Segunda imagen', 'https://videotutoriales.com/maspa/maspa2.jpg', 'https://videotutoriales.com/maspa/maspa2-1.jpg'),
            new image_1.Image('3', 'Tercera Imagen', 'Descripción Tercera imagen', 'https://videotutoriales.com/maspa/maspa3.jpg', 'https://videotutoriales.com/maspa/maspa3-1.jpg'),
            new image_1.Image('4', 'Cuarta Imagen', 'Descripción Cuarta imagen', 'https://videotutoriales.com/maspa/maspa4.jpg', 'https://videotutoriales.com/maspa/maspa4-1.jpg'),
            new image_1.Image('5', 'Quinta Imagen', 'Descripción Quinta imagen', 'https://videotutoriales.com/maspa/maspa5.jpg', 'https://videotutoriales.com/maspa/maspa5-1.jpg'),
            new image_1.Image('6', 'Sexta Imagen', 'Descripción Sexta imagen', 'https://videotutoriales.com/maspa/maspa6.jpg', 'https://videotutoriales.com/maspa/maspa6-1.jpg'),
            new image_1.Image('7', 'Setima Imagen', 'Descripción Setima imagen', 'https://videotutoriales.com/maspa/maspa7.jpg', 'https://videotutoriales.com/maspa/maspa7-1.jpg'),
            new image_1.Image('8', 'Octava Imagen', 'Descripción Octava imagen', 'https://videotutoriales.com/maspa/maspa8.jpg', 'https://videotutoriales.com/maspa/maspa8-1.jpg')
        ];
    }
    ImageService.prototype.getImages = function () {
        return this.images;
    };
    ImageService = __decorate([
        core_1.Injectable()
    ], ImageService);
    return ImageService;
}());
exports.ImageService = ImageService;
