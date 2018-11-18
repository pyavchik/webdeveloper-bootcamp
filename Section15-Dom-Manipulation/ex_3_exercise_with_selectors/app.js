// come up with 4 different ways to select the first <p> tag
console.log(document.getElementById("first"));
console.log(document.querySelector("#first"));
console.log(document.getElementsByClassName("special")[0]);
console.log(document.querySelector(".special"));
console.log(document.getElementsByTagName("p")[0]);
console.log(document.querySelector("h1 + p"));
