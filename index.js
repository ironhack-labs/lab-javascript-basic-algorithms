// Iteration 1: Names and Input
let hacker1 = "Courtneey";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jonathan";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driver = hacker1.length;
let navigator = hacker2.length;
let character3 = hacker1.length + hacker2.length;

if(driver > navigator){
  console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (driver < navigator){
  console.log(`It seems that the navigator has the longest name it has ${character2} charcaters`);
} else {
  console.log(`Wow, you both have equally long names, ${character3} characters!`);
}

// Iteration 3: Loops
let i = 0
while(i <= driver){
  const captLetter = hacker1.toUpperCase();
  console.log(captLetter[i]);
  i++;
}


const backwards = navigator - 1;

for (let i = backwards; i >= 0; i--){
  const backwardsNav = hacker2[i];
  console.log(backwardsNav);
}


if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }


  //BONUS FEATURES
//PART 1

const longText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;


let counterSpace = 0;
let counterEt = 0;

let countText = longText.slice(0);
let position = 0;

while (position !== -1) {
  position = countText.indexOf(' ');
  countText = countText.slice(position + 1);
  counterSpace++;
}

position = 0;
countText = longText.slice(0);

while (position !== -1) {
  position = countText.indexOf(' et ');
  countText = countText.slice(position + 3);
  if (position !== -1) {
    counterEt++;
  }
}

console.log(counterSpace);
console.log(counterEt);

//PART 2

const phrase = "Was it a car or a cat I saw?";
let phraseNoPunc = phrase.slice(0);
phraseNoPunc = phrase.replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
phraseNoPunc = phraseNoPunc.replace(/\s/g, '');
let phraseUpper = [];


for (let i=0; i < phraseNoPunc.length; i++){

  phraseUpper += phraseNoPunc[i].toUpperCase() 
}

let phraseToCheck=[];
for (let i=phraseUpper.length-1; i>=0; i--){
  phraseToCheck += phraseUpper[i]
}

if (phraseToCheck === phraseUpper){
  console.log("It's a Palindrome!")
}
else {
  console.log("It's not a Palindrome...")
}