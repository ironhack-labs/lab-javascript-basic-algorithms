// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Manuel Carrillo";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Jose Rascon";

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The Navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!

if (hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// === Iteration 3: Loops ===
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals
// Option 1 - Loop
for (i = 0; i < hacker1.length; i++){
  console.log(hacker1[i].toUpperCase());
}
// Option 2 (no loop)
console.log(hacker1.split('').join(' ').toUpperCase())

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e.
// Option 1 - Loop
for (i = hacker2.length -1; i >= 0; i--){
  console.log(hacker2[i]);
}
// Option 2 (no loop)
console.log(hacker2.split('').reverse().join(''));

// 3.3 Depending on the lexicographic order of the strings, print:
if (hacker1.localeCompare(hacker2) === -1){
  console.log(`${hacker1} goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1){
  console.log(`Yo, ${hacker2} goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Option 2 with switch
switch (hacker1.localeCompare(hacker2)){
  case -1:
    console.log(`${hacker1} goes first.`);
    break;
  case 1:
    console.log(`Yo, ${hacker2} goes first definitely.`);
    break;
  case 0:
    console.log(`What?! You both have the same name?`);
    break;
}


// === BONUS 1 ===
// Store the text in a variable type of string.
let loremImpsul = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis finibus justo sit amet diam consectetur sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sed consectetur risus. Donec vitae turpis tristique, ultricies augue ut, pretium nibh. Cras condimentum felis ipsum, ut faucibus nulla lobortis ut. Duis vitae eros ut tellus posuere feugiat. Quisque blandit urna nec nunc euismod, ac commodo dui aliquam. Nullam ut ante placerat, tincidunt justo quis, pellentesque dolor. Sed laoreet eros sed fermentum tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus commodo nunc in arcu fermentum, et sollicitudin justo elementum. Donec elit lectus, sodales a diam quis, porta ultricies enim. Mauris vitae nunc nunc. Vivamus quis odio ut nibh iaculis molestie vel iaculis orci. Ut ac sagittis ex. Sed id aliquet lacus. Vestibulum fermentum risus nisi, quis posuere risus consectetur sed. Etiam maximus, orci vulputate dignissim pulvinar, metus sem placerat sapien, id euismod lectus mauris at tortor. Praesent vitae aliquam felis. Cras interdum, mauris ac ornare maximus, justo est rhoncus lorem, posuere porta lorem lorem ut augue. Sed efficitur dui quis enim rutrum lacinia. Nulla at sem arcu. Proin suscipit eget erat mattis placerat. Praesent molestie sit amet dolor sed convallis. Morbi vitae lacus egestas, commodo odio vel, tempus elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor sollicitudin libero non vehicula. Nullam eu cursus tortor et, ut laoreet erat. Nullam sed euismod purus, et pharetra sapien. Ut nec tortor quis nibh mollis molestie. Phasellus vel sagittis risus, et ut maximus quam. Curabitur sit amet nulla in tellus mattis porta. Praesent et mollis felis, eu semper lacus. Curabitur lacinia malesuada nisl a placerat. Mauris eu nunc imperdiet et, commodo purus eget, vulputate nisi. Aliquam convallis pretium libero. Integer vel orci at metus bibendum ornare eu et ac nisi. Duis bibendum non orci faucibus aliquet. Cras placerat ipsum id venenatis vehicula. Aliquam at suscipit erat, nec porttitor enim. Morbi at rhoncus sem. Phasellus eleifend, massa non tristique rutrum, elit elit posuere lectus, nec laoreet neque felis lobortis nisl. et,";

// Count the number of words in the string
let wordsCount = loremImpsul.split(' ').length;
console.log(`The number of words at 'text' string is ${wordsCount}`);

// Count the number of times the Latin word et appears.
let loremArray = loremImpsul.replace(/\./g, '').replace(/\,/g, '').split(' ');
let etCount = 0;

for (i = 0; i < loremArray.length; i++){
  if (loremArray[i] === 'et'){
    etCount += 1;
  }
}
console.log(etCount);


// === BONUS 2 ===
// Write a code that will check if the value we assigned to this variable is a Palindrome.

// Option 1 (No Loop)
let phraseToCheck = "taco cat";
// Delete all non-alphanumeric characters
let phraseToCheckClean = phraseToCheck.replace(/[\W_]/g, '').toLowerCase();

let phraseToCheckReverse = phraseToCheckClean.split('').reverse().join('');

// Check if phraseToCheck is a Palindrome
if (phraseToCheckClean === phraseToCheckReverse){
   console.log(`"${phraseToCheck}" is a Palindrome`);
} else {
  console.log(`"${phraseToCheck}" is not a Palindrome`);
}


// Option 2 with Loop
let phraseCheck = 'put t up';
phraseCheck = phraseCheck.replace(/[\W_]/g, '').toLowerCase();

let count = 0;
for (let i = 0; i < phraseCheck.length /2; i++) {
  if (phraseCheck[i] !== phraseCheck[phraseCheck.length -1 -i]){
        console.log ('NO');
      }else{
        count += 1;
      }
}

if (count === phraseCheck.length /2){
  console.log(`"${phraseCheck}" is a Palindrome`)
} else {
  console.log(`"${phraseCheck}" is not a Palindrome`)
}