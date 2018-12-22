var express = require("express");

var app = express();

// "/" => "Hi there"
app.get("/", function (req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye"
app.get("/bye", function (req, res) {
    res.send("Goodbye");
});

// "/dog" => "MEOW"
app.get("/dog", function (req, res) {
    res.send("MEOW");
});

app.get("/r/:subredditName", function (req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to a " + subreddit.toUpperCase() + " subreddit")
});

app.get("/r/:subredditName/comments/:id/:title/", function (req, res){
    console.log(req.params);
    res.send("Welcome to the comments page")
});

// "any other" => "404"
app.get("*", function (req, res) {
    res.send("404");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
    console.log("Staruting server on port 3000");
});
