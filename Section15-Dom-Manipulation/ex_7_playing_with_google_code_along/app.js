var logo = document.querySelector("#hplogo");
console.log(logo);

logo.setAttribute("srcset", "https://i.ytimg.com/vi/Gw_xvtWJ6q0/hqdefault.jpg");
logo.style.height = "100px";
logo.style.width = "200px";
logo.style.border = "2px solid purple";

console.log(document.getElementsByTagName("a"));
var links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) {
    links[i].style.background = "pink";
    console.log(links[i].getAttribute("href"));
    links[i].setAttribute("href", "https://facebook.com");
}
