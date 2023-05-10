// Iteration 1: Names and Input

const hacker1 = "Susi Schneller"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Florian Finder"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

const checkNameLengthH1 = hacker1.length;
console.log(checkNameLengthH1);

const checkNameLengthH2 = hacker2.length;
console.log(checkNameLengthH2);

if (checkNameLengthH1 > checkNameLengthH2) {
  console.log(`The driver has the longest name, it has ${checkNameLengthH1} characters.`)
}
else if (checkNameLengthH1 < checkNameLengthH2) {
  console.log(`It seems that the navigator has the longest name, it has ${checkNameLengthH2} characters.`)
} 
else {
  console.log(`Wow, you both have equally long names, ${checkNameLengthH1} characters!.`)
}

// Iteration 3: Loops

let DriverSpaceName = ""

for (let i=0; i< hacker1.length; i++) {
  let char = hacker1[i].toUpperCase() + ' ';
  DriverSpaceName += char;
}

console.log(DriverSpaceName);



let NavSpaceName = ""

for (let i=hacker2.length; i>=0 ; i--) {
  let char = hacker2[i];
  NavSpaceName += char;
}

console.log(NavSpaceName);



let DriverVsNav = 'StringDriver'.localeCompare('StringNav');

if (DriverVsNav === 1) {
  console.log("The driver's name goes first.")
}
else if (DriverVsNav === -1) {
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}