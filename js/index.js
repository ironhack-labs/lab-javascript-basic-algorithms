// Iteration 1: Names and Input

console.log("I'm ready!");
let hacker1 = "Manuel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Sofía";
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

let driver = hacker1;
let navigator = hacker2;
function findTheLongest(str1, str2) {
  if (str1.length > str2.length) {
    return `The driver has the longest name, it has ${driver.length} characters.`;
  } else if (str1.length < str2.length) {
    return `It seems that the navigator has the longest name, it has ${navigator.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${driver.length} characters!`;
  }
}
console.log(findTheLongest(driver, navigator));

// Iteration 3: Loops

function printWhitEmphasis(str) {
  str = str.toUpperCase().split("");
  return str.join(" ");
}
console.log(printWhitEmphasis(driver));
function printReverse(str) {
  str = str.split("").reverse();
  return str.join("");
}
console.log(printReverse(navigator));
function lexicographicOrder(str1, str2) {
  if (str1.localeCompare(str2) < 0) {
    return `The driver\'s name goes first.`;
  } else if (str1.localeCompare(str2) > 0) {
    return `Yo, the navigator goes first definitely.`;
  } else {
    return `What?! You both have the same name?`;
  }
}
console.log(lexicographicOrder(driver, navigator));
