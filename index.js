// Iteration 1: Names and Input
let hacker1 = "Chloe";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Eiad";
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals 
if ( hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters.`)
} else if ( hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
} else ( hacker2.length === hacker1.length) 
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`) 

// Iteration 3: Loops
let driverName= ""
for (i=0; i<hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName)

let navigatorName= ""
for (j=hacker2.length -1; j > -1; j--){
    navigatorName += hacker2[j];
}
console.log(navigatorName)

let theName = ""
let compare = hacker1[0].localeCompare(hacker2[0])
console.log (compare)
if (compare === 1) {
    console.log ("Yo, the navigator goes first, definitely.")
} else if (compare === -1){
    console.log ("The driver's name goes first.")
} else if (compare === 0){
    console.log ("What?! You both have the same name?")
}