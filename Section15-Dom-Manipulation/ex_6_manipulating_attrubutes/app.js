const img1 = document.getElementsByTagName("img")[0];
console.log(img1.getAttribute("src"));
img1.setAttribute("src", "https://i.pinimg.com/originals/50/c3/dd/50c3dda8345860c3c7d59bc0472a4ece.jpg");

const linkToGoogle = document.getElementsByTagName("a")[0];
linkToGoogle.setAttribute("href", "https://facebook.com");
