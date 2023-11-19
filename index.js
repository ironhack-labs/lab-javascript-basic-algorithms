// Iteration 1: Names and Input

const hacker1 = "Mauli";
console.log(`The drivers's name is ${hacker1}`);

const hacker2 = "Banashree";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The ${hacker1} has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The ${hacker2} has ${hacker2.length} characters`);
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" "));
let splitString = hacker1.split("");
let reverseArray = splitString.reverse();
let newString = reverseArray.join("");
console.log(newString);

// //
let arr = ["Mauli", "banshree", "apples"];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr);