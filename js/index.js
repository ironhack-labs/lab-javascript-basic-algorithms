// Iteration 1: Names and Input

let hacker1 = "Cristina";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Angela";
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}
;


// Iteration 3: Loops
//3.1
let driverUpperCase = hacker1.toUpperCase();

let separated = "";

for (let i = 0; i < driverUpperCase.length; i++) {
    separated += driverUpperCase[i] + " ";
}
;

console.log(separated);


//3.2
let reversed = "";

console.log(navigator.length)
for (let j = navigator.length - 1; j >= 0; j--) {
    console.log("hola")
    reversed += navigator[j] + "";
};

console.log(reversed);

//3.3
if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
    console.log("The driver's name goes first");
} else {
    console.log("Yo, the navigator goes first definitely");
};



