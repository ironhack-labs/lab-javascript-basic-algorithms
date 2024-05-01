// Iteration 1: Names and Input
const  hacker1 = "Angela";
const  hacker2 = "Angels";
console.log(`The driver's name is ${hacker1}`);
console.log(`The driver's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length}.`)}

else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`)}
else if (hacker1.length === hacker2.length){
        console.log(`Wow, you both have equally long names, it has ${hacker1.length}`)}

// Iteration 3: Loops

let capitalHacker1 = "";
for (let i = 0; i < hacker1.length; i++){
    capitalHacker1+= hacker1[i].toUpperCase() + " ";
}
console.log(capitalHacker1.trim());

let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--){
    reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);


if (hacker1 < hacker2){
    console.log(`The driver's name goes first.`)}
    
    else if (hacker2 < hacker1) {
        console.log(`Yo, the navigator goes first, definitely.`)}
    else {
         console.log(`What?! You both have the same name?`)
        }
