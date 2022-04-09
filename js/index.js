// Iteration 1: Names and Input
//comment nuevo para volver a hacer todo
//1.1 create a variable `hacker1` with the driver's name.
let hacker1 = 'Nancy';

//1.2 print `The driver's name is XXXX`
console.log(`The driver's name is ${hacker1}`);

//1.3 create a variable `hacker2` with the navigator's name.
let hacker2 = 'Valentin';

//1.4 print `The navigator's name is YYYY`
console.log(`The navigator's name is ${hacker2}`);





// Iteration 2: Conditionals
/* 
2.1 Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
-Wow, you both have equally long names, XX charcaters!.
*/
if (hacker1.length > hacker2.length){
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
console.log(`It seems that navigator has the longest name, it has ${hacker2.length} characters`)
} else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};





// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e
console.log(hacker1.toUpperCase().split("").join(' ')); 

//3.2 Print all the characters of the navigator's name, in reverse order.i.e."nhoJ"
console.log(hacker2.split('').reverse().join(''));

/* 
3.3 Depending on the lexicographic order of the strings, print:
-The driver's name goes first.
-Yo, the navigator goes first definitely.
-What?! You both have the same name?
*/
if (hacker1 < hacker2){
console.log("The driver's name goes first.")
} else if (hacker1 > hacker2){
console.log("Yo, the navigator goes first definitely")
} else {
console.log("What?! You both have the same name?")
};





//Bonus 1:

//Generate 3 paragraphs. Store the text in a variable type of string.
let paragraphs = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus porta neque at vulputate. In ac malesuada ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque quam velit, euismod in fermentum quis, faucibus non metus. Mauris leo ante, tempus eu elit vitae, efficitur tempor arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec rhoncus nec felis sit amet fringilla.

 Ut facilisis sagittis eros at aliquam. Nulla facilisi. Quisque efficitur lacus suscipit urna ultrices finibus. In suscipit tortor velit, quis tristique purus aliquam ut. Praesent id tincidunt enim. Donec scelerisque elit lorem, vel semper orci ultrices at. Phasellus ut orci accumsan, ultricies tortor ut, finibus massa. Donec velit massa, malesuada ac sem quis, luctus dictum libero. Nunc sodales, lorem id semper sodales, tellus nunc gravida dolor, vitae placerat mauris ipsum vel augue.

 Sed dapibus dignissim velit porta varius. Nullam felis magna, maximus sed eros ut, maximus egestas elit. Duis efficitur ut risus at luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra pulvinar nisl et pharetra. Pellentesque eget facilisis augue, in euismod arcu. Quisque efficitur dui a sapien venenatis ornare. Aliquam venenatis id diam vel convallis. Curabitur mattis ut ex et sodales. Proin placerat non lectus eu accumsan. Phasellus id blandit tortor. Nulla interdum, dui eget sollicitudin vulputate, metus risus commodo lorem, sit amet ornare velit elit non lectus. Nunc pulvinar nec mi et ullamcorper. Sed interdum accumsan augue, in faucibus enim tincidunt id. Etiam sed purus augue. Suspendisse varius laoreet dui, sit amet pulvinar tortor ultricies sit amet.
`

//Make your program count the number of words in the string.
let howManyWords = paragraphs.split(' ');

console.log(howManyWords.length);

//Make your program count the number of times the Latin word et appears.
let counter = 0;

for (let i = 0; i < howManyWords.length; i++){
  if (howManyWords[i] === 'et'){
    counter += 1
  }
}

console.log(counter);





//Bonus 2:
//Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

let phraseToCheck = "Never odd or even"
let forwardPhrase = ''
for (let i = 0; i < phraseToCheck.length; i++){
  switch(phraseToCheck[i]){
    case '!':
    case '?':
    case ',':
    case '.':
    case ' ':
    case '"':
    case "'":
      continue
  };
  forwardPhrase += phraseToCheck[i]
}

let backwardsPhrase = ''
for (let j = phraseToCheck.length -1; j >= 0; j--){
  switch(phraseToCheck[j]){
    case '!':
    case '?':
    case ',':
    case '.':
    case ' ':
    case '"':
    case "'":
      continue
  };
  backwardsPhrase += phraseToCheck[j]
}

if (forwardPhrase.toLowerCase() === backwardsPhrase.toLocaleLowerCase()){
console.log(`It's a Palindrome`)
} else {
console.log(`It's not a Palindrome`)
}
