const button = document.querySelector("button");
console.log(button.textContent);
button.addEventListener("click", function () {
    console.log("someone clicked the button");
});


const paragraph = document.querySelector("p");

button.addEventListener("click", function () {
    paragraph.textContent = "someone clicked the button";
});

const h1 = document.querySelector("h1");
h1.addEventListener("click", changeBackground);
function changeBackground () {
    h1.style.background = "blue";
}
// const h1 = document.querySelector("h1");
// h1.addEventListener("click", function () {
//     h1.style.background = "blue";
//     alert("H1 was clicked");
// });

document.querySelector("ul").addEventListener("mouseenter", function () {
    console.log("you hover on UL");
});

document.querySelectorAll("li").forEach(function (li) {
    li.addEventListener("click", function () {
        this.style.color = "purple"
    })
});
