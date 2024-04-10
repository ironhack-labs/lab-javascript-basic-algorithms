// Iteration 1: Names and Input
const hacker1 = "Claire";
const hacker2 = "Clair";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length -1 > hacker2.length -1){
    console.log(`The driver has the longest name, it has ${hacker1.length-1} characters.`)
 }
 else if (hacker1.length -1 < hacker2.length -1){
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length-1}  characters.`)
 }
 else {
    console.log(`Wow, you both have equally long names, ${hacker2.length-1} characters!`)
 }

// Iteration 3: Loops
const navhacker1 = hacker1.split("").join(" ").toUpperCase();
const navhacker2 = hacker2.split("").reverse(" ").join("");
console.log(navhacker1)
console.log(navhacker2)

if(hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`);
}else if(hacker1.localeCompare(hacker2) > 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
}else{
    console.log(`What?! You both have the same name?`);
}
