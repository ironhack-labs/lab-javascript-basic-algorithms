
// Iteration 1: Names and Input
let hacker1 = 'Andrea';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Igor';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let longestName = '';
if (hacker1.length > hacker2.length) {
  longestName = hacker1;
  console.log(`The driver has the longest name, it has ${longestName.length} characters`);
} else if (hacker1.length < hacker2.length) {
  longestName = hacker2;
  console.log(`It seems that the navigator has the longest name, it has ${longestName.length} characters`);
} else {
  longestName = hacker1;
  console.log(`Wow, you both have equally long names, ${longestName.length} characters!`);
}

// Iteration 3: Loops
let hacker1WithSpaces = '';
for(let i = 0; i < hacker1.length; i++) {
  hacker1WithSpaces += hacker1.charAt(i);
  if (i == hacker1.length-1)
    break;
  hacker1WithSpaces += ' ';
}

console.log(hacker1WithSpaces.toUpperCase());

let hacker2Reversed = "";
for(let i = hacker2.length-1; i >=0 ; i--) {
    hacker2Reversed += hacker2.charAt(i);
}

console.log(hacker2Reversed);

for(let i = 0; i < longestName.length; i++) {
    if(hacker1.charAt(i) < hacker2.charAt(i)) {
        console.log(`The driver's name goes first.`);
        break;
    } else if(hacker1.charAt(i) > hacker2.charAt(i)) {
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    } else {
        if(i < longestName.length-1)
            continue;
        console.log(`What?! You both have the same name?`);
    }        
}