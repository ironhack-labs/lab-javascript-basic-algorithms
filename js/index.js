// Iteration 1: Names and Input

const hacker1 = "Shirin";
console.log(`The Drivers name is ${hacker1}`);
const hacker2 = "someone"
console.log(`The hacker's name is ${hacker2}`);

// Iteration 2: Conditional
const driverslength = hacker1.length;
const navigatorslength = hacker2.length;

if (driverslength > navigatorslength) {
    console.log(`The driver has the longest name, it has ${driverslength} characters.`)
}
else if (navigatorslength > driverslength) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorslength} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${driverslength | navigatorslength} characters!`)
}


// Iteration 3: Loops
let res = "";
for (let i = 0; i <= driverslength; i++) {
    res += hacker1.slice(i, i + 1) + " ";
}
console.log(res.toUpperCase());

let res2 = "";
for (let i = driverslength; i >= 0; i--) {
    res2 += hacker1.slice(i - 1, i)
}
console.log(res2)

const order = (hacker1.localeCompare(hacker2))
if (order === -1) { console.log(`The driver's name goes first.`) }
else if (order === 1) { console.log(`Yo, the navigator goes first definitely.`) }
else { console.log(`What?! You both have the same name?`) }