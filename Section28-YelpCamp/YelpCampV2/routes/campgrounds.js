var express = require("express");
var router = express.Router();

var Campground = require("../models/campground");

router.get("/", function (req, res) {
    // Get all campgrounds from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (!err) {
            res.render("campgrounds/index", {campgrounds: allCampgrounds, currentUser: req.user});
        } else {
            console.log(err);
        }
    })
});

router.post("/", function (req, res) {
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    // Create a new campground and save to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (!err) {
            res.redirect("/campgrounds");
        } else {
            console.log(err);
        }
    });

    // redirect back to campgrounds page


});

// NEW Show form to add new campground
router.get("/new", function (req, res) {
    res.render("campgrounds/new");
});

// SHOW -shows all info about specific page
router.get("/:id", function (req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function (err, foundCampground) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });

});

module.exports = router;
