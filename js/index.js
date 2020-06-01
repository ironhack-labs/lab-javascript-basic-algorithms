// Iteration 1: Names and Input
const hacker1 = `marco`;
console.log(`The driver's name is ${hacker1}`);

const hacker2 = `pauline`;
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops
//3.1
let upperCased = hacker1.toUpperCase();
let spacedLetters = "";

for(let i=0;i<upperCased.length;i++){
    spacedLetters+= upperCased[i] + " ";
}

console.log(spacedLetters)

//3.2
  let reverseNavigator = "";

  for(let j = hacker2.length- 1; j > -1; j--) {
    reverseNavigator += hacker2[j];
  }
  console.log(reverseNavigator)

//3.3
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let k = 0; k < hacker1.length; k++) {
    if (alphabet.indexOf(hacker1[k]) < alphabet.indexOf(hacker2[k])) {
      console.log("The driver's name goes first.");
      break;
    } else if (alphabet.indexOf(hacker2[k]) < alphabet.indexOf(hacker1[k])) {
      console.log("Yo, the navigator goes first definitely.");
      break;
    } else {
      console.log("What?! You both have the same name?");
    }
  }