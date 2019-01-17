var express = require("express");
var router = express.Router();

var Campground = require("../models/campground");
var Comment = require("../models/comment");

// ===========================
// COMMENTS ROUTES
// ===========================
router.get("/campgrounds/:id/comments/new", isLoggedIn, function (req, res) {
    // find campground by id
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

router.post("/campgrounds/:id/comments", isLoggedIn, function (req, res) {
    // lookup campground using ID
    Campground.findById(req.params.id, function (err, campgdround) {
        if (err) {
            console.log(err);
            redirect("/campgrounds");
        } else {
            console.log(req.body.comment);
            Comment.create(req.body.comment, function (err, comment) {
                if (err) {
                    console.log(err);
                } else {
                    campgdround.comments.push(comment);
                    campgdround.save();
                    res.redirect("/campgrounds/" + campgdround._id);
                }
            })
        }
    });
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login")
}

module.exports = router;
