// Iteration 1: Names and Input
let hacker1 = "Bruno";
console.log(`the driver's name is ${hacker1}`)
let hacker2 = "Juan";
console.log(`the navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`the driver has the longest name, it has ${hacker1.length} characters` )
} else if(hacker1.length < hacker2.length){
    console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}
// Iteration 3: Loops
for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
}
for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}
if(hacker1.localeCompare(hacker2) < 0){
    console.log(`The driver's name goes first.`);
}else if(hacker2.localeCompare(hacker1)){
    console.log("Yo, the navigator goes first, definitely.");
}else{
    console.log(`What?! You both have the same name?`);
}