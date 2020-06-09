// Iteration 1: Names and Input
let hacker1 = 'valerie';
console.log(`The driver's name is ${hacker1}`)

let hacker2 = 'peter';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`);
} else if(hacker1.length = hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length}!`)
}

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

function reverseString(str) {
  var newString = '';
  for(var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString(hacker1))

function strcmp(hacker1, hacker2) {
    if (hacker1.localeCompare(hacker2) === 1) {
      console.log(`Yo, the navigator goes first definitely.`);
    } else if (hacker1.localeCompare(hacker2) === -1) {
      console.log(`The driver's name goes first.`);
      } else if (hacker1.localeCompare(hacker2) === 0) {
        console.log(`What?! You both have the same name?`);
    }
  }
  console.log(strcmp(hacker1, hacker2))