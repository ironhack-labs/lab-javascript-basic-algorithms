// Iteration 1: Names and Input
const hacker1 = "Isaac";
const hacker2 = "Melvin";

console.log(`The driver's name is ${hacker1}`)
console.log(`The driver's name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length){
  `Wow, you both have equally long names, ${hacker1.length} characters!`
}

// Iteration 3: Loops

console.log(hacker2.toUpperCase().split("").join(" "));

console.log(hacker2.split("").reverse().join(""));

var lexical = hacker1.localeCompare(hacker2)
if (lexical == -1) {
  console.log(`The driver's name goes first.`);
} else if (lexical == 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (lexical == 0) {
  console.log(`What?! You both have the same name?`);
};

// Bonus

const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi saepe, expedita maxime vitae qui aliquid natus earum ea aspernatur eveniet modi pariatur deleniti laboriosam quisquam aut perspiciatis quo cupiditate! Exercitationem ipsum aut eveniet nisi aliquid iste. In quam corrupti consectetur repudiandae perspiciatis quis ea voluptatem, qui iste id deserunt vel labore animi quia itaque mollitia deleniti nostrum at quasi? Sint dicta dolores deserunt nulla sit quibusdam, accusamus reprehenderit magni ipsam cumque quis quas soluta fugiat. Aliquid perferendis, ab molestias omnis repudiandae, non minus enim, ipsam quod inventore sit est."

console.log(lorem.split(" ").length);

console.log(lorem.match(/et/g).length);

// Bonus 2

var phraseToCheck = "Amor, Roma";
var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function removePunctuation() {
  phraseToCheck = phraseToCheck.replace(regex, '');
}

removePunctuation(phraseToCheck);

if (phraseToCheck.toLowerCase() == phraseToCheck.toLowerCase().split("").reverse().join("")) {
  console.log("awhh yes, it's a palendrome");
} else {
  console.log("naww, it's not a palendrome");
};