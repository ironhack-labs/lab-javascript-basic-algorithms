// Iteration 1: Names and Input
//1.1
var hacker1 = 'Bobby';
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
var hacker2 = 'Charles';
//1.4
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
//3.1 
var name = `${hacker1.split('').join(' ')}`;
var uppercased = name.toUpperCase();
  console.log(uppercased);
//3.2
var str = (`${hacker2}`);
var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
console.log(newString);
//3.3
if (`${hacker1}` > `${hacker2}`) {
    console.log("The driver's name goes first.");
} else if (`${hacker1}` < `${hacker2}`) {
    console.log("Yo, the navigator goes first definitely");
} else if (`${hacker1}` === `${hacker2}`) {
    console.log("What, you both have the same name?");
}





// Iteration 3: Loops