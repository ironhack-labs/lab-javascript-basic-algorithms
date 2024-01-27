console.log("I'm ready!");

// Iteration 1: Names and Input
let hackerOne = "andres";
console.log(`The driver's name is ${hackerOne}`);

let hackerTwo = "pepe";
console.log(`The navigator's name is ${hackerTwo}`);

// Iteration 2: Conditionals
if (hackerOne.length > hackerTwo.length) {
    console.log(`The driver has the longest name, it has ${hackerOne.length} characters`);
  }
  else if (hackerOne.length > hackerTwo.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hackerTwo.length} characters`);
  }
  
  else {
    console.log(`Wow, you both have equally long names, ${hackerOne.length} characters`);
  }
// Iteration 3: Loops

let newDriversName = "";
for(let i=0; i < hackerOne.length; i++) {
  newDriversName += hackerOne[i].toUpperCase() + " ";
}
console.log(newDriversName.trim());

let newNavigatorsName = "";
for(let i = hackerTwo.length - 1; i >= 0; i--) {
  newNavigatorsName += hackerTwo[i];
}
console.log(newNavigatorsName);

// bonus 1:

const paragraph = `Mythologia Graeca est fabularum et fabularum quae pars antiquae culturae Graeciae est. Hae fabulae involvunt deos deasque Olympi, ac heroes et creatura fabulosa. Mythologia Graeca fons est litterarum, artis et philosophiae per saeculorum decursum.

Fabulae Graecae sunt fabulae quae originem mundi et hominum explicant, necnon res naturales et experientias hominum. Hae fabulae attrahenti characteribus referti sunt ut Iovem, Aphrodite, Herculem et Medusam. Mythologia Graeca etiam themata universalia appellat, sicut amor, bellum, proditio, et sapientiae inquisitio.

Mythologia Graeca perpetuum legatum reliquit in cultura occidentali. Horum fabulae in fabulas, membranas et libros adaptatae sunt, ac hodie perscrutari et aestimari pergunt. Mythologia Graeca nobis praebet singularem cognitionem mentis et opinionibus veteris Graeciae, nosque invitat ad cogitandum de mysteriis vitae et universitatis.`

let words = 0;
let etCount = 0;

let splittedParagraph = paragraph.split(' ');

for (let i=0; i < splittedParagraph.length; i++) {
  if(splittedParagraph[i].includes('\n')) {
    words++
  } else if(splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
 }

console.log('words -->', words);
console.log('et count  -->', etCount);

// bonus 2:

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}