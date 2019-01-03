var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", {useNewUrlParser: true});

// post - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// user - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// Post.create({
//     title: "How to cook the best burger part 4",
//     content: "asdfasdfasdf asdf asd fa sdf a sd f as"
// }, function (err, post) {
//     User.findOne({email: "bob@gamil.com"}, function (err, foundUser) {
//         if (err) {
//             console.log(err)
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function (err, data) {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     });
//
// });

// User.create({
//     email: "bob@gamil.com",
//     name: "Bob Belcher"
// });


// Find user
// Find all posts for that user

User.findOne({email: "bob@gamil.com"}).populate("posts").exec(function (err, user) {
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
