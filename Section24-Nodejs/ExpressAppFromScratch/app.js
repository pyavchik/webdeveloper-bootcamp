const express = require("express");

var app = express();

app.get("/", function (req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof",
        cat: "I hate you human",
        goldfish: "..."
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says "+ sound);
});

app.get("/repeat/hello/3", function (req, res){
    res.send("hello hello hello");
});

app.get("/repeat/blah/2", function (req, res){
    res.send("blah blah");
});

app.get("/repeat/hello/5", function (req, res){
    res.send("hello hello hello hello hello");
});


app.get("*", function (req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
    console.log("Staruting server on port 3000");
});
