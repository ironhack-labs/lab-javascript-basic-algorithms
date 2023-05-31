// Iteration 1: Names and Input
let hacker1 = "Roman";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ben";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let chars1 = hacker1.length;
let chars2 = hacker2.length;

if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${chars1} characters!`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${chars1} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${chars2} characters.`);
}

// Iteration 3: Loops
let printChars = '';
let countChars = 0;

for (let i = 0; i < hacker1.length; i++) {
  countChars = hacker1[i];
  printChars += `${countChars} `;
}
const upperCased = printChars.toUpperCase();
console.log(upperCased);

let wordReversed = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
  const charReversed = hacker2[i];
  wordReversed += charReversed;
}
console.log(wordReversed);

if(hacker1.localeCompare(hacker2) === 1){
  console.log("The driver's name goes first.");
} else if(hacker1.localeCompare(hacker2)=== -1){
  console.log("Yo, the navigator goes first, definitely.")
} else if (hacker1.localCompare(hacker2)=== 0){
  console.log("What?! You both have the same name?");
}

let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lacinia finibus nisl, at iaculis mauris efficitur sit amet. Vestibulum interdum, lectus eu porttitor tempus, turpis urna scelerisque elit, non faucibus sem sem imperdiet justo. Etiam ac ullamcorper lorem. Morbi eu consectetur purus. Donec a varius est. Vivamus sit amet feugiat massa. Sed auctor consectetur velit, in facilisis lorem rutrum nec. Morbi lorem tellus, tempus et enim sed, consectetur vestibulum justo. Phasellus at accumsan augue. Ut malesuada sed libero nec finibus. Phasellus efficitur risus ultrices, porttitor lectus sit amet, sodales orci. Praesent id sagittis mauris. Cras faucibus vestibulum diam ut aliquet. Nunc at efficitur dolor. Nunc blandit tempus cursus. Nulla facilisi. Pellentesque quis rutrum eros. Nullam consectetur id purus at gravida. Proin cursus feugiat felis, vel lobortis lacus rhoncus et. Mauris faucibus pellentesque est in dictum. Suspendisse purus nisi, ultrices vitae consectetur nec, congue sed nisi. Aliquam mollis, odio et tincidunt sollicitudin, ante erat pellentesque risus, at sodales sem dui vulputate quam. Morbi nec risus eu massa auctor convallis. Curabitur ut aliquam nisl. Donec a posuere eros, non aliquet neque. Nunc vel justo bibendum, pellentesque nibh sit amet, suscipit dui. Suspendisse dignissim molestie sapien ac fermentum. Donec tincidunt, sapien vel dapibus vestibulum, sem turpis porta magna, vel elementum orci metus id mi. Suspendisse a nisl pharetra neque maximus facilisis ut quis nisl. In eu dolor sem. Duis ullamcorper, dui molestie malesuada gravida, risus est varius eros, quis maximus magna nulla sed dolor. Donec vel tincidunt ligula. Etiam at risus laoreet, efficitur enim a, rhoncus erat. Phasellus vulputate congue tellus, et consectetur nibh posuere pellentesque. Proin vel libero arcu. Quisque in elit neque. Morbi vel sollicitudin justo. Proin odio orci, aliquam id pharetra non, ullamcorper et lectus. Proin elementum id felis non congue.'

// counting words in a string
const words = longText.split(" ");
let wordCounter = 0;

for (let i = 0; i < words.length; i++){
  wordCounter++;
}
console.log(wordCounter);

let et = 0;
for (let i = 0; i < words.length; i++){
  
  if(words[i] === "et"){
    et++;
  }
}
console.log(et);

let phraseToCheck = 'anna anna';
let reversedPhrase = '';

for (let i = phraseToCheck.length - 1; i >= 0; i--){
  reversedPhrase += phraseToCheck[i];
}
if(reversedPhrase === phraseToCheck){
    console.log('It is a Palindrome');
  } else {
    console.log('It is NOT a Palindrome');
  }







