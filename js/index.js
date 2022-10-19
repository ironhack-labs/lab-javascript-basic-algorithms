// Iteration 1: Names and Input
const hacker1 = "Joel Alves Pereira";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Juliano Hausen Oliveira da Costa";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const lenName = (name) => name.length;

const driverIsLonger = (len) =>
  `The driver has the longest name, it has ${len} characters.`;
const navigatorIsLonger = (len) =>
  `It seems that the navigator has the longest name, it has ${len} characters.`;
const sameLength = (len) =>
  `Wow, you both have equally long names, ${len} characters!`;

if (lenName(hacker1) > lenName(hacker2))
  console.log(driverIsLonger(lenName(hacker1)));
else if (lenName(hacker1) < lenName(hacker2))
  console.log(navigatorIsLonger(lenName(hacker2)));
else {
  console.log(sameLength(lenName(hacker1)));
}

// Iteration 3: Loops
let firtHackersName = '';
for (const letter of hacker1.split(" ")[0].toUpperCase()) {
    if (firtHackersName.length === 0){
        firtHackersName += letter;
    }else {
        firtHackersName = ${firtHackersName} ${letter};
    }
}
console.log(firtHackersName)

console.log(hacker2.split("").reverse().join(""))


if (hacker1 > hacker2){
    console.log("The driver's name goes first.")
} else if (hacker2 > hacker1){
    
    console.log('Yo, the navigator goes first definitely.')
} else {
    console.log('What?! You both have the same name?')
}