// Iteration 1: Names and Input

let hacker1 = "Pablo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Meritxell";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let hacker3 = hacker1.length;
let hacker4 = hacker2.length;
//if{hacker1.length = The driver has the longest name, it has XX characters.}
if (hacker3 > hacker4){
    console.log(`The driver has the longest name, it has ${hacker3} characters.`)
}
else if (hacker3 < hacker4){
    console.log(`It seems that the navigator has the longest name, it has ${hacker4} characters`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker3} characters!`)
}

// Iteration 3: Loops
let hacker1Mayus = hacker1.toUpperCase();
for (let i = 0; i < hacker1Mayus.length; i++){
}
    console.log(hacker1Mayus)

let hacker1split = hacker1Mayus.split("").join(" ");
console.log(hacker1split)

console.log(hacker2.split("").reverse().join(""))


if (hacker1 > hacker2){
    console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first, definitely.")
}
else{
    console.log("What?! You both have the same name?")}