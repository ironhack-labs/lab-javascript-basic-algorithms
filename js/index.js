// interation 1

const hacker1 = "Marcel"
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Rosana"
console.log(`The navigator's name is ${hacker2}`);

// iteration 2

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name. It has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name. It has ${hacker2.length} characters.`)
} else {
  console.log(`Wow. You both have equally long names - ${hacker1.length} characters.`)
}

// iteration 3

let hackerUpperCase = '';
for (let i = 0; i < hacker2.length; i++) {
 const letter = hacker2[i].toUpperCase();
  hackerUpperCase+= `${letter} `
}
console.log(hackerUpperCase);

let hackerReverse = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
  const letterReversed = hacker1[i];
  hackerReverse+= `${letterReversed}`;
}
console.log(hackerReverse);

let hacker1Letter1 = hacker1[0];
let hacker2Letter1 = hacker2[0];

if (hacker1Letter1 > hacker2Letter1) {
  console.log("The driver's name goes first")
} else if (hacker2Letter1 > hacker1Letter1) {
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}
