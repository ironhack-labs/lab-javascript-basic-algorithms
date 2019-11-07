// Iteration 1: Names and Input
let hacker1 = "Luigi";
console.log("The driver's name is", hacker1);

let hacker2 = "Google Chrome";
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
let msg;
if (hacker1.length > hacker2.length) {
  msg = `The driver has the longest name, it has ${hacker1.length} characters.`
} else if (hacker1.length < hacker2.length) {
  msg = `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
}
else {
  msg = `Wow, you both have equally long names, ${hacker1.length} characters!`
}

// Iteration 3: Loops
function splitLetters(str) {
  let i = 0;
  let chain = str[i];

  do {
    i++;
    if (str[i] !== ' ') chain += ' ' + str[i];
  } while (i < str.length-1);

  return chain;
}

console.log(splitLetters(hacker1.toUpperCase()));
console.log(hacker2.split('').reverse().join(''));

if (hacker1 < hacker2) {
  msg = "The driver's name goes first.";
} else if (hacker1 > hacker2) {
  msg = "Yo, the navigator goes first definitely.";
} else {
  msg = "What?! You both have the same name?";
}
console.log(msg);
