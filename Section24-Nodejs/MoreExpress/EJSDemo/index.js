var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function (req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar:thing});
});

app.get("/posts", function (req, res) {
    var posts = [
        {title: "Post1", autor: "Susy"},
        {title: "My adorable pet bunny", autor: "Charlie"},
        {title: "Can you believe this pomsky", autor: "Colt"},
    ];
    res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function () {
    console.log("Server is listening port 3000");
});
