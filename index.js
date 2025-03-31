// Iteration 1: Names and Input

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function compareNames(name1, name2) {
  if (name1.length > name2.length) {
    console.log(
      `The driver has the longest name, it has ${name1.length} characters.`
    );
  } else if (name2.length > name1.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${name2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${name1.length} characters!`
    );
  }
}

// Iteration 3: Loops
hacker1.toLocaleUpperCase();
console.log(hacker1.toUpperCase());
console.log(hacker2.toUpperCase());

let reversedHacker1 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedHacker1 += hacker1[i];
}
console.log(reversedHacker1);

let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}
console.log(reversedHacker2);

function lexicographicOrder(hacker1, hacker2) {
  if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1.localeCompare(hacker2) > 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
  } else {
    console.log(`What?! You both have the same name?`);
  }
}
lexicographicOrder(hacker1, hacker2);

// Bonus 1: palindrome
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

let palindrome = (str) => {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
};

console.log(palindrome(text) ? "It's a palindrome!" : "It's not a palindrome.");    
