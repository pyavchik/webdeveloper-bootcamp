var express = require("express");
var app = express();
var request = require("request");

app.get("/results", function (req, res) {
    //http://www.omdbapi.com/?s=Bob&apiKey=thewdb
    request("http://www.omdbapi.com/?s=Bob&apiKey=thewdb", function (error, respons, body) {
        if(!error && respons.statusCode == 200){
            var parsedResponse = JSON.parse(body);
            res.send(parsedResponse["Search"][0]["Title"]);
        } else {
            console.log("error!!!")
        }
    })
});

app.listen(3001, function () {
    console.log("Server started on port 3001")
});
