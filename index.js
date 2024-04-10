// Iteration 1: Names and Input
hacker1 = "Mab";
hacker2 = "Marie";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
let result = "";
let result2 = "";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

for (let j = hacker2.length - 1; j >= 0; j--) {
  result2 += hacker2[j];
}
console.log(result2);

for (let k = 0; k <= hacker2.length - 1; k++) {
    if (hacker1[k] > hacker2[k]) {
    order = `Yo, the navigator goes first, definitely.`;
    break;
  } else if (hacker2[k] > hacker1[k]) {
    order = `The driver's name goes first`;
    break;
  } else if ((hacker1[k] === hacker2[k])) {
    continue;
  } else {
    order = `What?! You both have the same name?`;
  }
;
}
console.log(order);


const phrasetoCheck = "stack cats"

if (phrasetoCheck.replace(" ", "") === phrasetoCheck.toLowerCase().replace(" ", "").split('').reverse().join("")) {
  console.log("it is a palindrome")
}
else {
  console.log("it is not a palindrome")
}

