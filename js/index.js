// Iteration 1: Names and Input
// 
console.log("I'm ready!");
const hacker1 = 'Bo';
const hacker2 = 'Niels';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverNameLength = hacker1.length
//console.log(driverNameLength);
const navigatorNameLength = hacker2.length
//console.log(navigatorNameLength);
if(driverNameLength > navigatorNameLength){
console.log(`The driver has the longest name, it has ${driverNameLength} characters`)
}
if(driverNameLength < navigatorNameLength){
    console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters`)
    }
if(driverNameLength === navigatorNameLength){
        console.log(`Wow, you both have equally long names, ${driverNameLength} characters!`)
        }
// Iteration 3: Loops
let driverUpperCase = hacker1.toUpperCase()
let output =""
for(let i = 0; i <= driverNameLength; i++ ) {
    output = output + driverUpperCase.slice(i, i + 1) + " "
}
console.log(output);
