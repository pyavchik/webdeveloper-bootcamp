let nums = [45, 65, 77, 34];

nums.forEach(function (num) {
    console.log(num);
});

function myForEach(arr, func) {
    // loop through array
    for (let i = 0; i < arr.length; i++) {
        // call function for each item in array
        func(arr[i]);
    }
}

let colors = ["green", "red", "yellow", "blue", "orange"];

myForEach(colors, alert);

myForEach(colors, function () {
    alert("HI!")
});

myForEach(colors, function (color) {
    console.log(color)
});

