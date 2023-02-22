// Iteration 1: Names and Input
let hacker1 = "alexandre";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "sotiris";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let nameSpaceCapital = "";
for (let i = 0; i < hacker1.length; i++) {
  const char = hacker1[i];
  //console.log(`char ${char}`);
  nameSpaceCapital += char + " ";
  //console.log(`nameSpaceCapital ${nameSpaceCapital}`);
}
const Caps = nameSpaceCapital.toUpperCase();
console.log(Caps);



let nameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  const reverseChar = hacker2[i];
  nameReverse += reverseChar;
}
const removeLetter = nameReverse.slice(0, hacker2.length - 1);
const lastCharUpper = hacker2[0].toUpperCase();
nameReverse = removeLetter + lastCharUpper
console.log(nameReverse);

//const result = user1.localeCompare('bob');
switch (hacker1.localeCompare(hacker2)){
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
    break;
}