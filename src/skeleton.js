"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qr = require("qrcode");
var data = "https://www.example.com";
qr.toDataURL(data, function (err, url) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(url);
});
console.log("hiiiii");
