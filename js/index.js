// Iteration 1: Names and Input

// 1.1
let hacker1 = "Sherab";

//1.2
console.log(`The driver's name is ${hacker1}`);

//1.3
let hacker2 = "Juan";

//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

//2.1
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters`
  );
} else if (driverLength === navigatorLength) {
  console.log(
    `Wow, you both have equally long names, ${driverLength} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
  );
}
// Iteration 3: Loops

//3.1

let formattedDriverName = "";

for (const letter of hacker1) {
  formattedDriverName += letter.toUpperCase() + " ";
}

console.log(formattedDriverName);

//3.2

let reversedNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedNavigatorName += hacker2[i];
}

console.log(reversedNavigatorName);

//3.3

let shortestString;

driverLength <= navigatorLength
  ? (shortestString = hacker1)
  : (shortestString = hacker2);


for (let i = 0; i < shortestString.length; i++) {
  if (hacker1 === hacker2) {
    console.log(`What?! You both have the same name?`);
    break;
  } else if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name goes first.`);
    break;
  } else if (hacker1[i] > hacker2[i]) {
    console.log(`Yo, the navigator goes first definitely.`);
    break;
  }
}


//Bonus 1

//1.1

let loremParagraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat neque et nibh rutrum convallis. Praesent eu justo pretium, efficitur purus a, pulvinar urna. Praesent fringilla, turpis ac accumsan sollicitudin, leo tortor tempus diam, sit amet venenatis eros risus id turpis. Ut maximus eleifend felis, eu egestas nisi placerat a. Donec lacinia laoreet pharetra. Sed hendrerit est quis diam auctor suscipit. Ut posuere viverra tristique. Praesent fringilla sem purus, vel commodo erat bibendum et. Donec consectetur pharetra egestas. Nulla facilisi. Fusce fermentum urna neque, in dictum felis fermentum eget. Donec tempor metus in ligula tincidunt, sed condimentum urna suscipit. Curabitur hendrerit ante vel nunc tristique pulvinar. Quisque eu blandit libero, sit amet condimentum nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In bibendum massa arcu, nec mollis lectus pretium laoreet. Ut euismod mi in consectetur gravida. Mauris ipsum est, vulputate vel libero vel, tempus convallis est. Cras fringilla lacinia diam, vitae dignissim lorem bibendum quis. Fusce ac hendrerit leo. Sed scelerisque quam sem, sed ornare lacus rhoncus ut. Suspendisse lacinia dui in mauris feugiat, a facilisis quam rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum felis quis justo tristique accumsan. Duis ac augue est. Proin sed vestibulum lorem. Curabitur nunc leo, lobortis tincidunt tincidunt ac, luctus imperdiet mi. Mauris ut risus odio. Nunc commodo mi metus, ut porttitor odio vulputate interdum. Pellentesque odio ante, sodales quis metus at, pretium varius eros. Nulla facilisi. Curabitur condimentum ac augue et auctor. Ut vestibulum tincidunt pellentesque. Mauris elementum eros vitae porttitor malesuada. `;

let counter = 0;

for (const char of loremParagraph) {
  if (char === " ") counter++;
}

console.log(`The string has ${counter} words`);

//1.2

let etCounter = 0;

for (let i = 0; i < loremParagraph.length; i++) {
  if (loremParagraph.substring(i, i + 4) === " et ") etCounter++;
}

console.log(`The latin word 'et' appears ${etCounter} times`);

//Bonus 2

let phraseToCheck = `No 'x' in Nixon`;
phraseToCheck = phraseToCheck.toLowerCase();

const asciiA = 97;
const asciiZ = 122;

//We clear the original string of characters that are not alphabet letters
let cleanedPhraseToCheck = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  const asciiCode = phraseToCheck.charCodeAt(i);
  if (asciiCode >= asciiA && asciiCode <= asciiZ) {
    cleanedPhraseToCheck += phraseToCheck[i];
  }
}

// console.log(cleanedPhraseToCheck)

//We clear the original string of characters that are not alphabet letters and reverse it
let reversedPhrase = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  const asciiCode = phraseToCheck.charCodeAt(i);
  if (asciiCode >= asciiA && asciiCode <= asciiZ) {
    reversedPhrase += phraseToCheck[i];
  }
}

// console.log(reversedPhrase)

//We compare both final strings to check if they are equal
if (reversedPhrase === cleanedPhraseToCheck) {
  console.log(`${phraseToCheck} => is a palindrome`);
} else {
  console.log(`${phraseToCheck} => is NOT a palindrome`);
}
