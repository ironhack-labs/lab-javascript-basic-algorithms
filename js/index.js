// Iteration 1: Names and Input
let hacker1 = "Jordi";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Leandro";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let letterNum = hacker1.length - hacker2.length;

if (letterNum > 0) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (letterNum < 0) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if ((letterNum = 0)) {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!`
  );
}

/* switch (letterNum) {
  case  > 0:
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  break;
  case (hacker1.length < hacker2.length):
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  break;
  case (hacker1.length = hacker2.length):
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
  break;
 }
 */

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a // space and in capitals i.e.
let hacker1Letters = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Letters += hacker1[i] + " ";
}
console.log(hacker1Letters.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse
// order. i.e

let hacker2Letters = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Letters += hacker2.charAt(i);
}
console.log(hacker2Letters);

//3.3 Depending on the lexicographic order of the strings, print:

let letters = hacker1.localeCompare(hacker2);

switch (letters) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 0:
    console.log("What?! You both have the same name?");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
}

// Bonus 1

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque mi, consectetur vitae bibendum et, interdum non elit. Aliquam maximus egestas mauris. Integer nulla lectus, tristique nec iaculis quis, egestas eu risus. Duis nec pulvinar elit, elementum mollis enim. Praesent pretium ante ut nisi molestie, non auctor ante rutrum. Proin nunc nunc, faucibus et vestibulum et, pretium id arcu. Praesent eget tortor id odio iaculis fringilla mattis eget nunc. Vivamus vitae mattis mauris.
Aenean rutrum sed ex quis congue. Cras at elit elit. Maecenas metus tortor, tincidunt gravida risus a, semper consequat metus. Pellentesque et augue eros. Sed vitae tincidunt ex. Fusce et dui porta, mattis orci quis, congue mi. Duis tincidunt, sapien ac convallis dictum, urna sem blandit ex, in varius nulla arcu ac enim.
Aliquam sed euismod orci. Aenean aliquam risus a urna tempor, at posuere lacus efficitur. Cras non vestibulum eros. Mauris tincidunt leo viverra, rhoncus nunc id, facilisis nibh. Nam maximus sed nibh ut lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis luctus arcu justo, nec porttitor sapien auctor vitae. Aliquam vulputate enim non risus finibus, vestibulum interdum justo dignissim. Aenean lorem nulla, euismod vel pharetra vel, feugiat vel velit. Ut et lacus vitae mauris viverra dignissim. Sed vel ligula dui. Nulla bibendum mauris vel nibh iaculis tempus. Vestibulum dignissim neque eu nisl molestie euismod. Morbi commodo, risus et suscipit convallis, arcu massa dapibus nunc, molestie blandit sapien ante ac arcu.`;

let countWord =
  lorem.split(" ").length +
  lorem.split(".  ").length +
  lorem.split(".\n").length;

console.log(countWord);
// Bonus 2
let phraseToCheck = "amor roma";
let phrase = "";
let phraseReverse = "";

for (let j = 0; j < phraseToCheck.length; j++) {
  phrase += phraseToCheck[j];
}
console.log(phrase);

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  phraseReverse += phraseToCheck[i];
}
console.log(phraseReverse);

if (phrase === phraseReverse) {
  console.log("Son palíndromos");
} else {
  console.log("No son palíndromos");
}
