let hacker1 = 'Humberto';
// console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Carlos';
// console.log(`The navigator's name is ${hacker2}`);

  if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
  }
  else if (hacker1.length = hacker2.length) {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
  }

// Make letters uppercase and add space between letters  
console.log (hacker1.toUpperCase().split('').join(' '));

// Print navigator's name backwards
console.log (hacker2.split('').reverse().join(''));

// lexicographic order
let compare = hacker1.localeCompare(hacker2);

if (compare == 1) {
  console.log (`Yo, the navigator goes first definitely.`);
}
else if (compare == -1) {
  console.log (`The driver's name goes first.`);
}
else {
  console.log (`What?! You both got the same name?`);
}