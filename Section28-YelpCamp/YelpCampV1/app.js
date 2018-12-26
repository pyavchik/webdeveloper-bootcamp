var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    var campgrounds = [
        {name: "Salmon Creek", image: "https://assets.simpleviewcms.com/simpleview/image/upload/c_fill,h_571,q_80,w_1603/v1/clients/raleigh/165_3_0358_jpeg_7b14f35b-cc84-4145-88f1-0c727e17aaa4.jpg"},
        {name: "Granite Hill", image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/df/88/a0/our-spacious-campsite.jpg"},
        {name: "Mountain Goat's Rest", image: "https://travel.home.sndimg.com/content/dam/images/travel/fullrights/2016/01/14/national-park-camping/camping-glacier-national-park-camping.jpg.rend.hgtvcom.966.725.suffix/1491593018562.jpeg"},
    ];
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.listen(3000, function () {
   console.log("Server started on port 3000");
});
