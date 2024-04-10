// Iteration 1: Names and Input
let hacker1 = "jhon"
console.log(`The driver's name is ${hacker1}`)

// Iteration 1: Names and Input
let hacker2 = "jhon"
console.log(`The driver's name is ${hacker2}`)

// Iteration 2: Conditionals


if(hacker1.length<hacker2.length) {
    console.log("The driver has the longest name, it has", hacker1.length, "characters.");
} else if (hacker2.length<hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters.");
} else
console.log("Wow, you both have equally long names", hacker1.length, "characters!");
// Iteration 3: Loops

let driverName = ''
for(let i=0; i< hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase()+ ' ';
    
}
console.log(driverName)

let navigatorNameRevs = '';
for (let i = hacker2.length-1 ; i >= 0 ; i--) {
    navigatorNameRevs += hacker2[i];
 
}
console.log(navigatorNameRevs.slice(0, 3) + navigatorNameRevs.charAt(3).toUpperCase());
let comparisonNames = hacker1.localeCompare(hacker2)
if ( comparisonNames < 0) {
    console.log("The driver's name goes first")

} else if(comparisonNames === 0) {
    console.log("What?! You both have the same name?");

}else {
    console.log("Yo, the navigator goes first, definitely.")
}

