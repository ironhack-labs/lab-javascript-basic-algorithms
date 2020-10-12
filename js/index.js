//console.log ('Im ready');
// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = 'Mario'
const h1length=hacker1.length
const h1upper=hacker1.toUpperCase()
//1.2 Print `"The driver's name is XXXX"`.
console.log(hacker1, h1length)
//1.3 Create a variable `hacker2` with the navigator's name.
const hacker2 = 'Andretti'
const h2length=hacker2.length
//1.4 Print `"The navigator's name is YYYY"`.
console.log(hacker2, h2length)

// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
if (h1length > h2length) {
  console.log('The driver has the longest name');
//- It seems that the navigator has the longest name, it has XX characters. or
} else if (h1length < h2length) {
  console.log('It seems that the navigator has the longest name');
//- Wow, you both have equally long names, XX characters!.
} else {
  console.log('Wow, you both have equally long names');
}

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

//TEACHERS HINT:
//const name = "ana";
//for (let i = 0; i<name.length; i++) {
//  console.log(name[i]);
//}

var h1Array = [];
for(var i = 0; i < h1upper.length; ++i)
{
 h1Array.push(h1upper[i]);
}
var h1CapsString = h1Array.join(' ');
console.log(h1CapsString)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

var h2Array = [];
for(var i = h2length - 1; i >= 0; i--)
{
 h2Array.push(hacker2[i]);
}
var h2String = h2Array.join('');
console.log(h2String)

//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
if (hacker1.localeCompare(hacker2) === -1) {
  console.log ("The driver's name goes first.")
}
//- Yo, the navigator goes first definitely.
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log ("Yo, the navigator goes first definitely.")
}
//- What?! You both have the same name?
else {
  console.log ("What?! You both have the same name?")
} 