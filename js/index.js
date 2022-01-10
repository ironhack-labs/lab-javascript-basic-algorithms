// Iteration 1: Names and Input
// 
var hacker1 = 'John';

console.log(hacker1);

var hacker2 = 'Alex';

console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

while (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

// 3.1.

const hacker1 = 'John';
const splittedString = hacker1.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);


// 3.2.


function reverse(hacker1){
let store = ""
let store2 = ""

for(let i = hacker1.length / 2; i >= 0; i--){
  if(hacker1.length % 2 !== 0) {
     store += hacker1.charAt(i) 
     store2 += hacker1.slice((hacker1.length / 2) + 1, hacker1.length).charAt(i)
  } else {
      store += hacker1.charAt(i-1) 
      store2 += hacker1.slice((hacker1.length / 2), hacker1.length).charAt(i)
    }
  
}
return store2 + store
}

console.log(reverse(hacker1))



//3.3.

let hacker2 = 'Alex'
    
if (hacker1[0] < navigator[0]) {
  console.log(`${hacker1} goes first.`) 
} else if (hacker1[0] == hacker2[0]) {
    console.log('What?! You both have the same name?')
  } else {
    console.log(`Yo, ${hacker2} goes first definitely.`)
  }
