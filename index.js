// Iteration 1: Names and Input
const hacker1 = "Goncalo";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Fabio";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let upperName = "";
for (let i = 0; i < hacker1.length; i++){
    upperName += hacker1[i].toUpperCase();
    if (i<hacker1.length -1){
        upperName +=" ";
    }
}
console.log(upperName);

let reverseName = "";
for (let i = hacker2.length -1; i >= 0 ; i--){
    reverseName += hacker2[i];
}

console.log(reverseName);

if (hacker1 > hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 < hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`);
}
 else {
    console.log(`What?! You both have the same name?`);
}


// Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit nisi eu ullamcorper interdum. Nulla facilisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam id mauris ut massa accumsan imperdiet. Vestibulum ac maximus ligula. Nulla vitae tortor congue, vehicula ipsum sed, pellentesque diam. Nullam leo enim, volutpat vitae mi non, molestie faucibus purus. Pellentesque posuere maximus libero, cursus porta neque elementum ac. Donec ut metus sed eros maximus imperdiet pretium et neque. Sed feugiat mi a nisi luctus sagittis.

Praesent interdum placerat faucibus. Nunc accumsan nulla nec sodales porta. Curabitur cursus lacus sem, vitae luctus sem laoreet a. Proin tristique faucibus turpis ac auctor. Nullam pharetra egestas lectus, vel finibus erat mollis id. Sed placerat vitae odio a finibus. Duis at mattis tortor.

Pellentesque porttitor cursus pharetra. Cras et dolor sit amet eros lobortis aliquet. Nullam sit amet mattis felis. Nam ac luctus ligula. Proin finibus sed quam quis lobortis. Donec facilisis augue nec est dignissim, id molestie ligula porta. Donec sagittis in sem in accumsan. Ut elementum viverra aliquet. Cras in malesuada lacus.`
 
let words = 0;
let etCount = 0;

let splittedParagraph = longText.split(' ');

for (let i=0; i < splittedParagraph.length; i++) {
  if (splittedParagraph[i].includes('\n')) {
    words++
  } else if (splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
 }

console.log('words =', words);
console.log('et count =', etCount); 

// Bonus 2:

let phraseToCheck = "race car";
let cleanedString = "";               
let isPalindrome = true;              

for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();         
  if (char >= 'a' && char <= 'z') {              
    cleanedString += char;                   
  }
}

for (let i = 0; i < cleanedString.length / 2; i++) {
  if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
    isPalindrome = false;                              
    break;                                               
  }
}

if (isPalindrome) {
  console.log('String is a palindrome');
} else {
  console.log('Not a palindrome');
}  

//////////////

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split('').reverse().join('');

if (stringToCheck === reversedString) {
  console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
} 