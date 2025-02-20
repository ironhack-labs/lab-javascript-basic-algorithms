// Iteration 1: Names and Input
let hacker1 = "Fernanda"
console.log("The driver's name is Fernanda");
let hacker2 = "Goyo"
console.log("The navigator's name is Goyo")

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`[The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has ${hacker1.length} characters.")
} else {
    console.log ("Wow, you both have equally long names,  ${hacker1.length} characters!")
}
// Iteration 3: Loops
let driverUpperCase = "";
 for (let i=0; i < hacker1.length; i++){
    driverUpperCase += hacker1[i].toUpperCase()+"";
 }
let navigatorReverse ="";
for (let i=hacker2.length-1; i >= 0; i-- ){
    navigatorReverse +=hacker2[i];
}
let Compare = hacker1.localeCompare(hacker2);
if (Compare === 0){
    console.log("What? !You both have the same name?");
} else if (Compare > 0){
    console.log("Yo, the navigator goes first, definitely");
} else {
    console.log("The driver's name goes first.");
}