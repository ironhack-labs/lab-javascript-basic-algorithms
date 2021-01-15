// Iteration 1: Names and Input

let hacker1 = 'Paulinha';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Nobody';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
    else {
      if (hacker2.length > hacker1.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
      }
      else {
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
      }
    }


// Iteration 3: Loops

// Print all the characters of the driver's name, separated by a space and in capitals

console.log(hacker1.toUpperCase().split('').join(' '));

/* Using the loop method 

let hacker1WithSpaces = '';
for (let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1[i].toUpperCase()+' ';
}

console.log(hacker1WithSpaces.trim());
*/

// Print all the characters of the navigator's name, in reverse order.

let hacker2Reversed = '';

for (let i = hacker2.length - 1; i>=0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

// Checking the lexicographic order of the strings

if (hacker1.localeCompare(hacker2) === 0) {
    console.log('What?! You both have the same name?');
} else {
  if (hacker1.localeCompare(hacker2) < 0) {
   console.log(`The driver's name goes first.`); 
  } else {
    console.log(`Yo, the navigator goes first definitely.`); 
  }
}

// Bonus 1

