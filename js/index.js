// Iteration 1: Names and Input
let hacker1 = "Sophie";
console.log(`The driver is ${hacker1}`);
let hacker2 = "Ceyda";
console.log(`The navigator is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
var nameSeparatedBySpace = "";
for (let i = 0; i < hacker1.length; i++) {
  nameSeparatedBySpace += hacker1[i].toUpperCase() + " ";
}
console.log(nameSeparatedBySpace);

//3.2
var navigatorNameReversed = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

//3.3
if (hacker1.localeCompare(hacker2) >= 1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
} else if (hacker1.localeCompare(hacker2) <= -1) {
  console.log("Yo, the navigator goes first definitely.");
}

// Bonus 1
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut tellus eget dolor iaculis fermentum in sed mi. Donec commodo ipsum mauris, vel imperdiet ligula imperdiet non. Duis hendrerit ex sit amet elit ultricies fermentum. Aliquam fermentum est eu sapien vulputate pretium. Integer elit libero, vehicula ut porttitor in, laoreet in tellus. Curabitur bibendum tortor ut orci egestas viverra. Donec congue posuere ex ac convallis. Phasellus laoreet luctus justo in viverra. Aliquam porttitor auctor magna, a gravida orci bibendum nec. Pellentesque malesuada facilisis sem, sit amet imperdiet dui ornare id. In sollicitudin, nulla vitae vehicula posuere, risus ante tempor nibh, at facilisis lectus eros nec eros.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis feugiat dui vel viverra tincidunt. Vestibulum ac nulla fermentum dolor tincidunt venenatis quis sit amet magna. Ut sit amet dictum neque, hendrerit laoreet urna. Phasellus viverra odio lacus. Nam tempor dignissim neque eu sollicitudin. Duis pretium risus et quam pulvinar, non vehicula nulla egestas. Aliquam laoreet tortor nulla, at aliquet justo feugiat vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque consectetur odio a massa molestie, non feugiat metus posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin at nisi orci.

Sed faucibus risus blandit odio mattis accumsan. Vivamus cursus, erat nec pretium posuere, nunc justo fermentum sem, quis iaculis magna ligula in lacus. Etiam vel ligula leo. Nunc quis nunc eu velit molestie aliquet eu et orci. Nulla luctus auctor molestie. Nullam eu erat id odio viverra ullamcorper ac quis eros. Maecenas congue libero et commodo lobortis. Integer nec malesuada libero, id venenatis nibh. Maecenas cursus turpis id aliquam bibendum. Maecenas viverra mi lorem. Ut vitae dui vitae magna venenatis molestie at ut erat. Phasellus blandit egestas tempus. Proin vehicula volutpat elit, at dictum justo placerat eget. In hac habitasse platea dictumst.`;
// Number of words
let numberOfWordsArray = loremIpsum.split(" ");
let cleanedWordsArray = [];
numberOfWordsArray.forEach(word => {
  if(word !== " ") { // Removing double spaces
    cleanedWordsArray.push(word);
  }
})
console.log(cleanedWordsArray.length);

// Number of words containing Et
let wordsWithEt = 0;
for (let x = 0; x < cleanedWordsArray.length; x++) {
    if (cleanedWordsArray[x].includes("et")) {
      wordsWithEt++;
  }
}
console.log(wordsWithEt);

// Bonus 2
let phraseToCheck = "race car";
let phraseToCheckCleaned = "";
let reversedPhrase = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if(phraseToCheck[i] === ' ' || phraseToCheck[i] === ',') {
    continue;
  }
  phraseToCheckCleaned += phraseToCheck[i];
}

for (let i = phraseToCheckCleaned.length-1; i >= 0; i--) {
  reversedPhrase += phraseToCheckCleaned[i];
}

if(phraseToCheckCleaned === reversedPhrase) {
  console.log(phraseToCheckCleaned + " === " + reversedPhrase);
  console.log("PALINDROME!!!");
}