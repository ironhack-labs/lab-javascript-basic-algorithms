// Iteration 1: Names and Input
/* 1.1 */
const hacker1 = "Driver's Name";

/* 1.2 */
console.log("The driver's name is " + hacker1 + ".");

/* 1.3 */
const hacker2 = "Navigator's Name";


/* 1.4 */
console.log("The navigator's name is " + hacker2 + ".");

// Iteration 2: Conditionals
/* 2.1 */
const driverName = "Roberto";;
const navigatorName = "Francisca";
const driverNameLength = driverName.Length;
const navigatorNameLength = navigatorName.length;

if (driverNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name. It has 
    ${driverNameLength} characters.`);

 } else if (navigatorNameLength > driverNameLength) {
    console.log(`It seems that the ${navigatorName} has the longest name. 
    It has ${navigatorNameLength} characters.`); } else {
        console.log(`Wow. You both have actually long names ${driverNameLength} characters.`);
 }


// Iteration 3: Loops
/* 3.1 */
const driName = "John";

const formattedName = "";

for (let i = 0; i < driName.length; i++) {
    formattedName += driName[i].toUpperCase();

    if (i !== driName.length -1){
        formattedName += " ";
    }
}

console.log(formattedName);

/* 3.2 */
const navigatorName = "John";
const reversedName = "";
for (const i = navigatorName.length - 1; i >= 0; i--) {
    reversedName += navigatorName [i];

    if (i !== 0) {
        reversedName += "-";
    }
}

console.log(reversedName);

/* 3.3 */
const driName = "John";
const navigatorName = "Jane";

if (driverName < navigatorName) {
    console.log("The driver's Name goes first.");
} else if {navigatorName < driName) {
    console.log("Yo, the navigator goes first, definitely.") } else {
        console.log("What ?! You both have the same name?");
}
