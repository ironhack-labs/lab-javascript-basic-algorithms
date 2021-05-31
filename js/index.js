// Iteration 1: Names and Input

console.log(`Beginning of Iteration 1`);
let hacker1 = 'Hanlin';
// hacker1 = 'Alexa'; 
console.log(`The driver’s name is ${hacker1}`);
const hacker2 = 'Alex';
console.log(`The navigator’s name is ${hacker2}`);

// Iteration 2: Conditionals

console.log(`\nBeginning of Iteration 2`);

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops

console.log(`\nBeginning of Iteration 3`);

// Instructions: 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let createdName = "";

for (let i = 0; i < hacker1.length; i++) {
  createdName += `${hacker1[i].toUpperCase()} `
}
console.log("Driver's name in capitals and separated by space: " + createdName);

// Instructions: 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log("Navigator's name in reversed order: " + reversedName);

// Instructions: 3.3 Depending on the lexicographic order of the strings, print:

let hasPrinted = false;

if (hacker1 === hacker2){
  console.log("What?! You both have the same name?");
  hasPrinted = true;
}

else { // The names are not the same
  let shorterName = "";

  if (hacker1.length < hacker2.length) { // Driver has a shorter name
    shorterName = hacker1;
  }
  else { // Navigator has a shorter name
    shorterName = hacker2;
  }

  for (let i = 0; i < shorterName.length; i++) {
    if (hacker1[i] < hacker2[i]) {
      console.log('The driver’s name goes first.');
      hasPrinted = true;
      break;
    }
    else if (hacker1[i] > hacker2[i]) {
      console.log('Yo, the navigator goes first definitely.');
      hasPrinted = true;
      break;
    }
  }
  
  /* If names are not the same and all the letters analysed were the same
  (for instance comparing Alex and Alexa), then the shortest name appears first
  on the lexicographic order */
  if (hasPrinted === false){
    if (hacker1.length < hacker2.length) {
      console.log('Difficult case! But the driver’s name goes first.');
    }
    else {
      console.log('Difficult case! But yo, the navigator goes first definitely.');
    }
  }
}

// Bonus 1

console.log(`\nBeginning of Bonus 1`);

/* I had to add an extra space before each line break otherwise it wouldn't
count two of the words */
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis vitae nibh volutpat malesuada. Fusce ut convallis lorem, sed sagittis tortor. Nulla sed augue pellentesque, fringilla arcu at, cursus neque. Vivamus urna urna, faucibus non consectetur at, laoreet nec sapien. Vestibulum faucibus vulputate nunc, nec ultrices eros porttitor sed. Aliquam consectetur placerat tempus. Vivamus sed consectetur odio, eu porttitor tortor. Sed vitae odio id orci pretium aliquet vitae eget metus. Phasellus viverra enim ut nisl efficitur, nec condimentum arcu elementum. Sed viverra mi vitae varius aliquam. Suspendisse orci metus, porttitor sit amet ipsum porta, ultricies venenatis arcu. Donec quis eleifend tellus, in consequat nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 

Maecenas placerat accumsan dapibus. Proin sodales enim ac diam dapibus, non laoreet mauris sollicitudin. Phasellus sem libero, pulvinar a sem a, dignissim convallis massa. Nullam efficitur quis sem quis rutrum. Praesent luctus lectus nec orci mattis pretium. Duis pulvinar efficitur velit vitae blandit. Aenean euismod ipsum vel neque facilisis cursus. Sed lobortis elementum leo vel aliquam. Ut non leo risus. Cras bibendum dui nisi, eget ornare elit viverra vitae. Phasellus eu molestie mauris. Morbi at odio finibus, vulputate turpis ac, vehicula tellus. Nam commodo eget turpis nec elementum. Aenean a tempus felis. Suspendisse luctus eu nibh a dapibus. 

Nam ipsum sapien, facilisis sit amet libero id, rhoncus imperdiet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut pulvinar, ipsum quis rutrum dignissim, nulla risus auctor justo, vel euismod dolor mi id felis. Proin lectus est, porttitor fringilla varius in, fermentum eu nisl. Integer vel elit sed odio lobortis venenatis congue sed metus. Nullam aliquam elementum lectus sed malesuada. Fusce volutpat urna non nulla vestibulum venenatis. Nunc eget diam quis sem convallis porttitor. Duis nec feugiat elit, sit amet rutrum ligula. Phasellus sed lectus vel arcu bibendum mollis. Duis ac mollis felis, ac feugiat tortor. Curabitur ipsum est, condimentum in rhoncus vitae, tincidunt in leo. Cras at viverra neque, sollicitudin mattis lectus.`;

// Instructions: Make your program count the number of words in the string.
let sizeOfText = text.split(' ').length;
console.log(`Text has ${sizeOfText} words`);

// Instructions: Make your program count the number of times the Latin word et appears.
let etCounter = text.split(' et ').length -1;
console.log(`Text Latin word 'et' appears ${etCounter} times`);

// Bonus 2

console.log(`\nBeginning of Bonus 2`);

/* Instructions: Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome */

let phraseToCheck = "Amor, Roma";

cleanedPhraseToCheck = phraseToCheck.replace(/\W/ig, ""); // Removes all non-alphanumeric characters
cleanedPhraseToCheck =  cleanedPhraseToCheck.toLowerCase();
console.log("Original, cleaned sentence is: " + cleanedPhraseToCheck);

// Reverses the sentence
let reversedPhrase = "";
for (let i = cleanedPhraseToCheck.length - 1; i >= 0; i--) {
  reversedPhrase += cleanedPhraseToCheck[i];
}
console.log("Reverted sentence is: " + reversedPhrase);

// Compare original and reversed sentences for the verdict
if (cleanedPhraseToCheck === reversedPhrase) {
  console.log(`The sentence '${phraseToCheck}' is a palindrome!`);
}
else {
  console.log(`The sentence '${phraseToCheck}' is NOT a palindrome! How about trying 'Socorram-me, subi no onibus em Marrocos!'?`);
}