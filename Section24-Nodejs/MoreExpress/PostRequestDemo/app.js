var expres = require("express");
var app = expres();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.post("/addfriend", function (req, res) {
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function (req, res) {

    res.render("friends", {friends: friends});
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
