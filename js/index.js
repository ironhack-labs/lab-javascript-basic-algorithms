// Iteration 1: Names and Input

let hacker1 = "Saul"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mark"
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops

let hacker1Capitalized = hacker1.toUpperCase();
hacker1Capitalized = hacker1Capitalized.split("").join(" ");
console.log(hacker1Capitalized);

let hacker2Array = hacker2.split('');
console.log(hacker2Array.reverse().join(""));

let alphOrder = hacker1.localeCompare(hacker2);

switch (alphOrder) {
  case -1:
    console.log(`The driver's name goes first.`)
    break;
  case 1:
    console.log(`Yo, the navigator goes first definitely.`)
    break;
  case 0:
    console.log(`What?! You both have the same name?`)
    break;


// Bonus 1

let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum orci et mi imperdiet, in tristique nulla pellentesque. Suspendisse facilisis sapien sagittis, sollicitudin tortor nec, eleifend nulla. Quisque at mauris nec quam luctus placerat. Mauris faucibus felis eget pharetra varius. 

Nam at lacus non dolor sodales interdum. Sed molestie rutrum ligula, ut cursus ipsum congue nec. Nunc finibus urna justo, sed vehicula lacus iaculis vel. Donec vitae lacus sed eros bibendum tristique a varius sem. 

Mauris et gravida metus, in semper felis. Phasellus id magna nec quam laoreet maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus.`

let paragraphArray = paragraph.split(" ");
console.log(paragraphArray.length);