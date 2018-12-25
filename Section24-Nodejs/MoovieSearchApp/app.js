var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/search", function (req, res) {
    res.render("search");
});

app.get("/results", function (req, res) {
    var query = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + query + "&apiKey=thewdb";
    request(url, function (error, respons, body) {
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
