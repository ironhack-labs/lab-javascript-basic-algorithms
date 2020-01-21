// Iteration 1: Names and Input
var hacker1 = 'Diogo';
console.log("The driver's name is " + hacker1);

var hacker2 = 'Aline';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops

var upperCaseVar = '';
for (i = 0; i < hacker1.length; i++) {
  upperCaseVar += hacker1[i].toUpperCase();
}
console.log(upperCaseVar.split('').join(' '));

var reverseString = '';
for (let j = hacker1.length - 1; j >= 0; j--) {
  reverseString += hacker1[j];
}
console.log(reverseString);
