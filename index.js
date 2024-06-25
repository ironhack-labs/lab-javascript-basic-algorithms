// Iteration 1: Names and Input
let hacker1 = "driver";
console.log(`the driver's  name is ${hacker1}`);

let hacker2 = "navigator";
console.log(`the navigator's  name is ${hacker2}`);

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) { 
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
}

else if (hacker1.length < hacker2.length) { 
    console.log(`The navigator has the longest name, it has ${hacker2.length}`);
}
else {
    console.log(`They both have equal long names ${hacker1.length}`);
}

// Iteration 3: Loops

let caractereSpaceCapital = "";
for (let i = 0; i < hacker1.length; i++) {
    caractereSpaceCapital += hacker1[i].toUpperCase()
+ " ";}

console.log(caractereSpaceCapital);


let reverseOrder = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseOrder += hacker1[i];
}

console.log(reverseOrder);