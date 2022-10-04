// Iteration 1: Names and Input
let hacker1 = 'Camilla'
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Andrea"
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters`);
}
// Iteration 3: Loops
let empty = ''
for (let i = 0; i < hacker1.length; i++){
    empty+= hacker1.charAt(i) + " ";
} console.log(empty.toUpperCase());

let empty2 = ''
for (let i= hacker2.length - 1; i >= 0 ;  i--){
    empty2+= hacker2.charAt(i) + " ";

} console.log(empty2.toUpperCase());

if (hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2) === 1){
 console.log("Yo, the navigator goes first definitely.");
} else{
    console.log("What?! You both have the same name?")};