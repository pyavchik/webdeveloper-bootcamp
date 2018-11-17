var obj = {
    name: "Chuck",
    age: 45,
    isCool: true,
    friends: ["Tina", "Bob"],
    add: function (x, y) {
        return x + y;
    }
};

console.log(obj.add(3,3));

function speak() {
    return "WOOF!";
}

function speak() {
    return "Meow!";
}

console.log("dog speak: " + speak());
console.log("cat speak: " + speak());

var dogSpace = {};
dogSpace.speak = function () {
    return "WOOF!";
};
var catSpace = {};
catSpace.speak = function () {
    return "Meow!";
};

console.log("dog speak: " + dogSpace.speak());
console.log("cat speak: " + catSpace.speak());
