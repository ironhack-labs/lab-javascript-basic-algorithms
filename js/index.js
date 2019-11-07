// Iteration 1: Names and Input


// Iteration 2: Conditionals


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