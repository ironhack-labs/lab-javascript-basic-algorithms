// Iteration 1: Names and Input
let hacker1 =  `Frankie`;
console.log(`The drivers name is ${hacker1}.`);
let hacker2 = `Khrystyna`;
console.log(`The navigators name is ${hacker2}.`);

// Iteration 2: Conditionals
//Iteration 2
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length}.`)
}
else {
    console.log("Oh we couldn't count the characters, did you really enter two names as strings?!")
};

// Iteration 3: Loops
//Iteration 3.1
let driverNameSpace = ” “;
for (let i = 0; i < hacker1.length; i++) {
    driverNameSpace = driverNameSpace + hacker1[i].toUpperCase()+ ” “;
}
console.log(driverNameSpace);
//Iteration 3.2
let navigatorBackwards = ” “;
for (let i = hacker2.length-1; i > -1; i-- ) {
    navigatorBackwards = navigatorBackwards + hacker2[i];
}
console.log(navigatorBackwards);
//Iteration 3.3
if (hacker1 < hacker2) {
    console.log(“The driver’s name goes first.“);
} else if (hacker1 > hacker2) {
    console.log(“Yo the navigator goes first definitely.“);
} else {
    console.log(“What?! You both have the same name.“)
}