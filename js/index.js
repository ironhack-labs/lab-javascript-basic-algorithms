// Iteration 1: Names and Input
//1.1 create the hacker1 variable
let hacker1 = 'Tom';
//1.2 print the driver's name
console.log(`This driver's name is ${hacker1}.`);
//1.3 create the hacker2 variable
let hacker2 = 'Jerry';
//1.4 print the navigator's name
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
//2.1 print the string depending on the length of their names.
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

// let hacker1Arr =[];
// for (let i=0; i<hacker1.length; i++) {
//   hacker1Arr.push(hacker1[i].toUpperCase());
// }
// console.log(hacker1Arr.join(' '))

//3.1 create new variable called newHacker1 and store the character separated by space and in Capitals
let newHacker1 = '';
for (let i = 0; i<hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase()+' ';
}
console.log(newHacker1);



// let hacker2Arr =[];
// for (let i = hacker2.length-1; i>-1; i--) {
//   hacker2Arr.push(hacker2[i]);
// }
// console.log(hacker2Arr.join(''));


//3.2 create the new variable called newHacker2 and store the character in reverse order.
let newHacker2 = '';
for (let i = hacker2.length-1; i > -1; i--) {
  newHacker2 += hacker2[i];
}
console.log(newHacker2);

//3.3 use localeCompare method to compare two string by lexicographic order.
if (hacker1.localeCompare(hacker2) < 0) {
  console.log('The driver\'s name goes first.');
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}

//#### Bonus1 !

//B1.1 use mode_modules to create lorem ipsum in JS
let loremIpsum = require('lorem-ipsum');
let outPut = loremIpsum({
  count: 3                      // Number of words, sentences, or paragraphs to generate.
, units: 'paragraphs'            // Generate words, sentences, or paragraphs.
, sentenceLowerBound: 5         // Minimum words per sentence.
, sentenceUpperBound: 15        // Maximum words per sentence.
, paragraphLowerBound: 3        // Minimum sentences per paragraph.
, paragraphUpperBound: 7        // Maximum sentences per paragraph.
, format: 'plain'               // Plain text or html
, random: Math.random           // A PRNG function. Uses Math.random by default
});
console.log(outPut);

//B1.2 use the space string :' ' to check how many words
let wordNum = 3;
for (let i = 0; i<outPut.length; i++) {
  if(outPut[i]===' ') {
    wordNum++
  }
}
console.log(wordNum);

//B1.3 use the 'et' string and substr method to test how many 'et' word we have
let etNum = 0;
for (let i=0; i < outPut.length; i++) {
  if(outPut.substr(i,4)===' et '|| outPut.substr(i,4)===' et.') {
    etNum++;
  }
}
 for(let i=0; i<outPut.length; i++) {
   if(outPut.substr(i,3)==='Et '){
     etNum++;
   }
 } 
console.log(etNum);

//#### bonus 2

// B2.1 clean the phrase string to keep the word left only.
let phraseToCheck = 'hsu sosn ssos .,ndu';
phraseToCheck = phraseToCheck.replace(/[^\w]|_/g,'');
//console.log(phraseToCheck);

//B2.2 make a new variable to change the character order in reverse.
let newPhrase = '';
for(let i =phraseToCheck.length-1; i > -1; i--) {
  newPhrase += phraseToCheck[i]
}
//console.log(newPhrase);

//B2.3 test if the phrase is a Palindrome phrase.
if(newPhrase === phraseToCheck) {
  console.log('This phrase is a Palindrome phrase.')
} else {
  console.log('This phrase is not a Palindrome phrase.')
}








