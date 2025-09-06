// Iteration 1: Names and Input
let hacker1 = "Hector";
let hacker2 = "Maurice";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops

let spacedDriver = "";

for (let letter of hacker1){
    spacedDriver += letter.toUpperCase() + " ";
}
console.log(spacedDriver.trim());

let reversedNavegator = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  reversedNavegator += hacker2[i];
}
console.log(reversedNavegator);

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
}else if(hacker1 === hacker2){
   console.log(`What?! You both have the same name?`); 
}else{
    console.log(`I, the navigator goes first, definitely.`);
}


// Iteration 4: Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed pellentesque libero. 
Nam vitae scelerisque leo, vitae pretium dolor. Phasellus gravida malesuada urna, vel dignissim 
dolor tincidunt at. Mauris a orci eget tellus rutrum finibus vel et eu neque.

Donec et nulla vel metus lacinia blandit id euismod mauris. Curabitur convallis augue eget porttitor ultricies. 
Curabitur accumsan, magna sed dapibus auctor, ex felis congue nulla, non ornare ipsum orci non magna. Suspendisse vel 
lorem mollis, sagittis neque quis, facilisis elit. Suspendisse et consectetur luctus sapien, at egestas 
turpis tincidunt vitae.  

In scelerisque tellus sed et neque viverra congue et. Nulla eu lobortis sem. Vestibulum viverra viverra nunc 
id tincidunt. Phasellus tempor velit lorem, et venenatis nibh gravida. Quisque et pellentesque  velit at neque mollis finibus. `;

let wordCount = 0;
let betweenWord = false;
let etCount = 0;
let word = "";

for (let i = 0; i < longText.length; i++) {
  let character = longText[i];

  if (
    character !== " " &&
    character !== "\n" &&
    character !== "\t" &&
    character !== "." &&
    character !== "," &&
    character !== ";" &&
    character !== "?" &&
    character !== "!"
  ) {
    word += character;
    if (!betweenWord) {
      betweenWord = true;
      wordCount++;
    }
  } else {
    betweenWord = false;
    if (word.toLowerCase() === "et") {
      etCount++;
    }
    word = "";
  }
}
console.log(`world number: ${wordCount}`);
console.log(`'et' appears ${etCount} times.`);

// Iteration 4: Bonus 2
let phraseToCheck = "Amor, Roma";
let cleanWord = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  let charact = phraseToCheck[i].toLowerCase();

  if (
    (charact >= "a" && charact <= "z") || 
    (charact >= "0" && charact <= "9") || 
    charact === "á" || charact === "é" || charact === "í" ||
    charact === "ó" || charact === "ú" || charact === "ü" || charact === "ñ"
  ) {
    cleanWord += charact;
  } else {
    continue; 
  }
}

let palindrome = true;

for (let i = 0, j = cleanWord.length - 1; i < j; i++, j--) {
  if (cleanWord[i] !== cleanWord[j]) {
    palindrome = false;
    break;
  }
}

if (palindrome) {
  console.log(`"${phraseToCheck}" is a palindrome`);
} else {
  console.log(`"${phraseToCheck}" is not a palindrome`);
}
