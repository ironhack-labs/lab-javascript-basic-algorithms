// Iteration 1: Names and Input

let hacker1 = "Diana";
console.log(`The drivers name is ${hacker1}`);
let hacker2 = "Alex";
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops
//3.1

console.log(hacker1.toUpperCase().split("").join(" "));

//3.2
function reverseStr(hacker2) {
  var splitString = hacker2.split("");
  var reverseArr = splitString.reverse();
  var joinArr = reverseArr.join("");
  return joinArr;
}

reverseStr(hacker2);

//3.3

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
