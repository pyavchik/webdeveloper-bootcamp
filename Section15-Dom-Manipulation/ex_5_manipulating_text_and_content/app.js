// const tag = document.querySelector("p");
// console.log(tag.textContent);  //"This is an awesome paragraph"
//
// // alter the textContent
// tag.textContent = "blah - blah - blah";
// console.log(tag.textContent);  //"blah - blah - blah"

const p = document.getElementsByTagName("p")[0];

console.log(p.textContent);
console.log(p.innerHTML);

var ul = document.querySelector("ul");
console.log(ul);
console.log(ul.textContent);

console.log(ul.innerHTML);


document.querySelector("h1").textContent = "New welcome";

console.log(document.body.innerHTML);

document.body.textContent = "<h1>GoodBy</h1>";
document.body.innerHTML = "<h1>GoodBy</h1>";
