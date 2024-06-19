// Iteration 1: Names and Input
const hacker1 = "Alicia";
const hacker2 = "Alex";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
function separateAndUpperCase(arg1) {
  let result;
  let UpperCaseName = arg1.toUpperCase();
  for (let i = 0; i < arg1.length; i++) {
    result = UpperCaseName.split(""); // giving a empty string "" to the split() method for separate the letters with nothing "" :))))
  }
  return result;
}

console.log(separateAndUpperCase(hacker1));
console.log(separateAndUpperCase(hacker2));

//3.2
function reverseWords(arg) {
  let reverseLetters = "";
  for (let i = arg.length - 1; i >= 0; i--) {
    reverseLetters += arg[i];
  }
  return reverseLetters;
}
console.log(reverseWords(hacker1));
console.log(reverseWords(hacker2));

//3.3

function loxiGraphic(arg1, arg2) {
  const checkOrder1 = arg1.split("").sort().join(""); //i am using split method for separate the strings with empty "" than sort method,
  const checkOrder2 = arg2.split("").sort().join(""); // than join method with empty "" for concatination the sorted strings

  if (checkOrder1 > checkOrder2) {
    return "The driver's name goes first.";
  } else if (checkOrder1 < checkOrder2) {
    return "Yo, the navigator goes first, definitely.";
  } else {
    return "What?! You both have the same name?";
  }
}
console.log(loxiGraphic(hacker1, hacker2));
