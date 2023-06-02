// Iteration 1
const hacker1 = "Andres";
  console.log(`The driver's name is, ${hacker1}`);

const hacker2 = "Sofia";
  console.log(`The navigator's name is ${hacker2}`);

// Iteration 2
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has", hacker1.length, "characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters.");
} else {
  console.log("Wow, you both have equally long names,", hacker1.length, "characters!");
}

// Iteration 3.1
let spacedName = "";
for (let i = 0; i < hacker1.length; i++) {
  spacedName += hacker1[i].toUpperCase() + " ";
}
console.log(spacedName.trim());

// Iteration 3.2
let reverseNav = "";
for (let i = hacker2.length-1; i >= 0 ; i--) {
  const char = hacker2[i];
  reverseNav += char;
  }
console.log(reverseNav);

// Iteration 3.3
console.log(hacker1.localeCompare(hacker2));
const lexicOrder = hacker1.localeCompare(hacker2);
if (lexicOrder < 0) {
  console.log(`${hacker1} goes first`);
} else if (lexicOrder > 0) {
  console.log(`Yo, ${hacker2} goes first, definitely.`);
} else {
  console.log('What?! You both have the same name?');
}
//Iteration 3.3 (option2)
if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else { console.log (`What?! You both have the same name?`)
}

// Bonus 1
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae libero vitae lorem rutrum sodales eu a nulla. Cras semper, eros non sollicitudin sagittis, magna lorem iaculis lectus, non viverra nibh dui et orci. Nulla facilisi. In imperdiet neque sit amet euismod lacinia. Aenean pretium tincidunt felis et aliquam. Cras tempor eros in nisi lacinia hendrerit. Fusce sed purus vel justo gravida viverra. Integer semper vel neque vitae porta. Quisque commodo elementum tincidunt. Curabitur mollis sem in dolor iaculis, at tempor leo ornare.

Maecenas ac lorem vitae ligula pellentesque iaculis. Nunc eget dolor a ligula accumsan feugiat et eu lacus. Nulla pharetra fringilla mi, ac suscipit mi eleifend sit amet. Nulla mauris ante, dignissim non maximus nec, ultricies ac mi. Mauris a orci condimentum, dapibus arcu quis, mollis urna. Phasellus sit amet ultricies sapien. Duis iaculis eros sagittis ultricies tincidunt. Nunc ut finibus metus, ac hendrerit arcu.

Morbi metus magna, tempor id purus scelerisque, laoreet egestas turpis. Quisque id massa ac diam dapibus luctus. Suspendisse potenti. Integer eu ex et urna tincidunt efficitur ut eget orci. Proin arcu enim, dictum eu elit at, iaculis viverra nunc. Suspendisse ut auctor ligula, eget condimentum justo. Aenean venenatis lorem maximus nunc tincidunt accumsan.`;
  //part1
let countedWords = 0;
for (let i= 0; i <=longText.length ; i++) {
  const numSpaces = longText[i];
    if (numSpaces == " ") {
    countedWords +=1;
  }
}
console.log(`There are ${countedWords+1} words`)
  
  //part2
const searchStr = 'et';
let count = 0;
let index = -1;
while ((index = longText.indexOf(searchStr, index + 1)) !== -1) {
  count++;
}
console.log("Occurrences of 'et': " + count);

//Bonus 1 part 2 (option2)
let etWords = 0;
for (let i= 0; i <=longText.length ; i++) {
  const numofEt = longText[i] + longText[i+1] + longText[i+2] + longText[i+3];
    if (numofEt === " et ") {
    etWords +=1;
  }
}
console.log(`The word "et" appears ${etWords} times`)

// Bonus 2
let phraseToCheck = "¡Un hombre, un plan, un canal, Panamá!";
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^a-z0-9]/g, '');
let isPalindrome = true;
for (let i = 0; i < Math.floor(cleanedPhrase.length / 2); i++) {
  if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("La cadena es un palíndromo.");
} else {
  console.log("La cadena no es un palíndromo.");
}

//Bonus 2 (option2)
phraseFormated = phraseToCheck.toLowerCase().replace(/\s/g,"");
phraseReverse = phraseFormated.split("").reverse().toString();

for (var i = 0; i < ((phraseReverse.length)-1); i++) {
  phraseReverse=phraseReverse.replace(",","");
};
if(phraseFormated==phraseReverse){
  console.log (`"${phraseToCheck}" is a palindrome`);
} else{
  console.log(`"${phraseToCheck}" is not a palindrome`);
}

// Ana, Álvaro y Andrés :)