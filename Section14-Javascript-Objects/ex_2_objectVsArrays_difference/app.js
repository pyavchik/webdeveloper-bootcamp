var dogs = ["Rusty", "Lucky", "Bubba"];
console.log(dogs);
console.log(dogs[1]);

dogs.push("Whyatt");
console.log(dogs);
dogs[1] = "Lucy";
console.log(dogs);

var dog = {
    name: "Bubba",
    breed: "Lab"
};

console.log(dog);
console.log(dog.name);
console.log(dog["name"]);

dog.age = 6;
console.log(dog);
dog.breed = "White Lab";
console.log(dog);
