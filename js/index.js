// Iteration 1: Names and Input
const hacker1 = 'Pepe';
console.log(`The driver\'s name is ${hacker1}`);
const hacker2 = 'Mari';
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals
const hacker1 = 'PepeLu'
console.log(`The driver\'s name is ${hacker1}`);
const hacker2 = 'MariLo'
console.log(`The navigator\'s name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let formattedHacker1 = '';
for (let i = 0; i < hacker1.length; i++) {
   formattedHacker1 += `${hacker1[i].toUpperCase()} `;
}
console.log(formattedHacker1);

let reverseHacker1 = '';
for (var i = hacker1.length - 1; i >= 0; i--) { 
  reverseHacker1 += hacker1[i]; 
}
console.log(reverseHacker1);

if (hacker1.localeCompare(hacker2) < 0){
  console.log('The driver\'s name goes first.');
  } else if (hacker1.localeCompare(hacker2) > 0) {
  console.log('Yo, the navigator goes first definitely.');
  } else {
  console.log('What?! You both have the same name?');
}

//Bonus 1
const text = 'Lorem et ipsum dolor et sit amet et.';
//counting words
let words = 1;
for (var i = 0; i < text.length; i++) {
  if (text[i] === ' ') { 
    words += 1; 
  }
}
//counting specific word "et"
let ets = 0;
for (var i = 0; i < text.length; i++) {
  if (text[i-1] === ' ' && text[i] ==='e' && text[i+1] === 't') { 
    ets += 1; 
  }
}
console.log(ets);