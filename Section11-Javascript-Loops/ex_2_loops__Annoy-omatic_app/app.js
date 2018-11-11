// var answer = prompt("are we there yet?");
//
// while (answer.toLowerCase() !== 'yes' && answer.toLowerCase() !== 'yeah') {
//     var answer = prompt("are we there yet?");
// }
// alert('YAY, We made it!');

// Version 2
var answer = prompt('are we there yet?');
while (answer.toLowerCase().indexOf('yes') === -1){
    var answer = prompt("are we there yet?");
}
alert('YAY, We made it!');
