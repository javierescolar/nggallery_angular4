"use strict";
var Image = (function () {
    function Image(id, title, description, thumbnail, imageLink) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.imageLink = imageLink;
    }
    return Image;
}());
exports.Image = Image;
