// Iteration 1: Names and Input
let hacker1 = 'Hector'
    console.log(`The driver's name is ${hacker1}`);
let hacker2= 'Kate'
console.log (`The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    let lenghtHacker1 = Number(hacker1.length);
    let lengthHacker2 = Number(hacker2.length);
    console.log (`The driver has the longest name, it has ${lenghtHacker1} characters`);
} else if (hacker2.length > hacker1.length){
    console.log (`The navigator has the longest name, it has ${lenghtHacker2} characters`);
}  else {
    console.log(`You both have equally long names, ${lenghtHacker2} characters!`)
}


// Iteration 3: loops

let driverUpperCased = hacker1.toUpperCase()
let tempName = ""
for (i= 0; i < driverUpperCased.length; i++){
  tempName += driverUpperCased[i] + ' '
}
console.log (tempName);


let navigatorReversed = "";
let length = hacker2.length - 1;

for (let i = length; i>= 0; i--){
 navigatorReversed += hacker2[i];
}
 console.log (navigatorReversed);
