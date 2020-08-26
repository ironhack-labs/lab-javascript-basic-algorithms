// Iteration 1: Names and Input

var hacker1 = "Nicolas";
console.log(`1.2 : The driver's name is ${hacker1}`);

var hacker2 = "Fabien";
console.log(`1.4 : The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `2.1 : The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `2.1 : It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `2.1 : Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

// Iteration 3: Loops{}

var newDriversName = "";

for (let i = 0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}

console.log(`3.1 : ${newDriversName}`);

var newNavigatorsName = "";

function reverseString(str) {
  for (var i = str.length - 1; i >= 0; i--) {
    newNavigatorsName += str[i];
  }

  return newNavigatorsName;
}

newNavigatorsName = reverseString(hacker2);

console.log(`3.2 : ${newNavigatorsName}`);
