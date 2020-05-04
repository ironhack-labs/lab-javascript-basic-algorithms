// Names and Input
// 1. Create a variable hacker1 with the driver's name
let hacker1 = "Nardo";

// 2. Print "The driver's name is XXXX"
console.log(`The driver's name is ${hacker1}`);

// 3. Create a variable hacker2 and ask the user for the navigator's name
let hacker2 = prompt("Anne");

// 4. Print "The navigator's name is YYYY"
console.log(`The navigator's name is ${hacker2}`);

// Conditions
// 5. Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
// Yo, navigator got the longest name, it has XX characters or
// wow, you both got equally long names, XX characters!!

if (hacker1.length > hacker2.length){
    console.log(`The ${hacker1} has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, ${hacker2} has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker2.length} characters`);
}

// Loops
// 6. Print all the characters of the driver 's name, separated by a space and in capitals ie. "J O H N"
let driverUpperCases = "";
for (let i = 0; i < hacker1.length; i++){
    driverUpperCases += hacker1[i] + " ";
}
console.log(driverUpperCases);

// 7. Print all the characters of the navigator 's name, in reverse order. ie. "nhoJ"
let navigatorReverse = " ";
for (let i = hacker2.length; i >= 0; i--) {
    navigatorReverse += hacker2[i];
}

console.log(navigatorReverse);
// 8. Depending on the lexicographic order of the strings, print:
//  The driver 's name goes first
//  Yo, the navigator goes first definitely
//  What ? !You both got the same name ?

if (hacker1[0] < hacker2[0]) {
    console.log(`The driver 's name ${hacker1} goes first`);
} else if (hacker1[0] > hacker2[0]) {
    console.log(`Yo, the ${hacker2} goes first definitely`);
} else if (hacker1 === hacker2) {
    console.log(`What ? !You both got the same name ?`);
}