// Iteration 1: Names and Input
const hacker1 = "Joao Paulo";
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = "Helio";
console.log(`"The navigator's name is ${hacker2}"`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  }

// Iteration 3: Loops
let splittedString = hacker1.split('');
let stringWithSpaces = splittedString.join(' ');
let upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);


function reverse(s){ 
	var str = "";
	for(var i = s.length-1; i >= 0; i--)
	str+=s[i];
	return str;
}
console.log(reverse(hacker1));