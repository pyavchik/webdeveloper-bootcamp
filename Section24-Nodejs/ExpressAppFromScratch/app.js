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

app.get("/repeat/:message/:times", function (req, res){
    var messsage = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (let i = 0; i < times; i++) {
        result += messsage + " ";
    }
    res.send(result);
});


app.get("*", function (req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
    console.log("Staruting server on port 3000");
});
