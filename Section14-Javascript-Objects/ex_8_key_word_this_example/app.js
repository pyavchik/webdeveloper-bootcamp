var comments = {};
comments.data = ["Good Job!", "Bye", "Lame..."];

var dogs = {};
dogs.names = ["Puppy", ]



function print(arr) {
    arr.forEach(function (el) {
        console.log(el);
    })
}

comments.print = function () {
    this.data.forEach(function (el) {
        console.log(el);
    })
};

comments.print();
