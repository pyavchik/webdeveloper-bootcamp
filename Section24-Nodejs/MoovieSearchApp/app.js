var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/results", function (req, res) {
    //http://www.omdbapi.com/?s=Bob&apiKey=thewdb
    request("http://www.omdbapi.com/?s=Truman&apiKey=thewdb", function (error, respons, body) {
        if(!error && respons.statusCode == 200){
            var data = JSON.parse(body);
            res.render("results", {data: data});
        } else {
            console.log("error!!!")
        }
    })
});

app.listen(3001, function () {
    console.log("Server started on port 3001")
});
