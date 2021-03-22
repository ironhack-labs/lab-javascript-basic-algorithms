// Iteration 1: Names and Input
var hacker1 = 'Lorgio';
var hacker2 = 'Diego';

console.log(`The driver's name is ${hacker1}`);

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log( `The Driver has the longest name, it has  ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log( `Yo, navigator got the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log( `You both got equally long names, ${hacker2.length} characters.`);
  }

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let name1 = ''; 

for (let i = 0; i < hacker1.length; i++) {
 name1 += hacker1[i]+ " ";  
};

console.log(name1.toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function reverse(name) {
    var result = "";
    for (var i = name.length - 1; i >= 0; i--)
      result += name[i];
    console.log(result);
  }
  reverse(hacker2);
  
  
/*3.3 Depending on the lexicographic order of the strings, print:
  - The driver's name goes first.
  - Yo, the navigator goes first definitely.
  - What?! You both have the same name?
  */
  
  
  if (hacker1 > hacker2) {
      console.log(`Yo, the navigator goes first definitely.`);
    } else if (hacker1 < hacker2) {
      console.log(`The driver's name goes first.`);
    } else {
      console.log(`What?! You both have the same name?`);
    } 