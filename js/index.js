// Iteration 1: Names and Input
let hacker1 = 'Billybob';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Jimbob';
console.log(`The navigator's name is ${hacker2}`)

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
let allHackers = '';
allHackers += hacker1.toUpperCase().split('').join(' ');
allHackers += ' ' + hacker2.split("").reverse().join("");
console.log(allHackers);

if (hacker1.localeCompare(hacker2) < 0 ) {
    console.log("The driver's name goes first.");
  }
  else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first definitely.")
  }
  else {
    console.log("What?! You both have the same name?")
  }
//
// Iteration 2: Conditionals


// Iteration 3: Loops
