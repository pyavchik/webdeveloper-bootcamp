const faker = require("faker");
faker.commerce.productName

console.log("++++++++++++++++++++++++++++++++++++");
console.log("WELCOME TO MY SHOP");
console.log("++++++++++++++++++++++++++++++++++++");
for (let i = 0; i < 10; i++) {
    productName = faker.commerce.productName();
    price = faker.commerce.price();
    console.log(productName + " - " + price);
}
