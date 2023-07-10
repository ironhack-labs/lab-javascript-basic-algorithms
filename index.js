// Iteration 1: Names and Input

let hacker1 = "Gonçalo";
let hacker2 = "Mariana";


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals


if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

let hacker1NameSpaced = "";
let hacker2Reversed ="";

//3.1

console.log(hacker1.split("").join(" ").toUpperCase());

//3.2

for (let i = hacker2.length-1; i >= 0; i--) {

    hacker2Reversed += hacker2[i];

}

console.log(hacker2Reversed);

//3.3

if (hacker1.localeCompare(hacker2) === -1){
    console.log(`The driver's name goes first.`);

}
else if(hacker1.localeCompare(hacker2) === 1){
    console.log(`Yo, the navigator goes first, definitely.`);

}
else if(hacker1.localeCompare(hacker2) === 0){
console.log(`What?! You both have the same name?`);
}

