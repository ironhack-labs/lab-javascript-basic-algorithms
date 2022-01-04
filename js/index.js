// Iteration 1: Names and Input
// 
console.log("I'm ready!");
const hacker1 = 'Bo';
const hacker2 = 'Niels';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLength = hacker1.length
const navigatorNameLength = hacker2.length

if(driverNameLength > navigatorNameLength){
console.log(`The driver has the longest name, it has ${driverNameLength} characters`)
}
else if(driverNameLength < navigatorNameLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters`)
    }
else if(driverNameLength === navigatorNameLength){
        console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`)
        }
// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverUppercase = hacker1.toUpperCase()

let outPutDriver =""

for(let i = 0; i <= driverNameLength; i++ ) {
    outPutDriver += driverUppercase.slice(i, i + 1) + " "
}
console.log(outPutDriver)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let outPutNavigator =""
for(let i = navigatorNameLength -1; i >= 0 ; i-- ) {
    outPutNavigator += hacker2[i];
}
console.log(outPutNavigator);

// Depending on the lexicographic order of the driver and navigator.
switch (hacker1.localeCompare(hacker2)){
    case 0:
        console.log("What?! You both have the same name?")
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely.")
        break;
    default:
        console.log("The driver's name goes first.")
}