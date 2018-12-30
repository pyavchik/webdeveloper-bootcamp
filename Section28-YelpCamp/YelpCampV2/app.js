var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://www.planetware.com/photos-large/USSD/south-dakota-black-hills-national-forest-horsethief-lake-campground-tent-site.jpg",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//     }, function (err, campground) {
//         if (!err){
//             console.log("Newly created campground");
//             console.log(campground);
//         } else {
//             console.log("Error");
//         }
//     }
// );


app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function (err, allCampgrounds) {
        if(!err){
            res.render("index", {campgrounds:allCampgrounds});
        } else {
            console.log(err);
        }
    })
});

app.post("/campgrounds", function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    // Create a new campground and save to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if(!err){
            res.redirect("/campgrounds");
        } else {
            console.log(err);
        }
    });

    // redirect back to campgrounds page


});

app.get("/campgrounds/new", function (req, res) {
    res.render("new.ejs");
});

// SHOW -shows more info about one campground
app.get("/campgrounds/:id", function (req, res) {
    res.render("show.ejs");
});

app.listen(3000, function () {
   console.log("Server started on port 3000");
});
