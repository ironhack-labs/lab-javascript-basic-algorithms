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

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet sapien finibus, dictum lectus vel, elementum justo. Donec aliquet dolor a tellus fermentum fringilla. Nullam sit amet felis in nisl finibus finibus eu vitae diam. Praesent mollis, lectus at laoreet rhoncus, orci odio tempor sapien, sit amet pharetra ante mauris a ipsum. Morbi pharetra tortor arcu, at sollicitudin orci aliquet in. Praesent laoreet quam eget ipsum venenatis porttitor. Suspendisse sit amet mattis ante. Nam non vehicula magna. Aenean a vestibulum augue. In convallis, erat nec ultricies hendrerit, tellus dolor mollis ligula, eget rhoncus mi lorem a risus. Etiam justo nisi, molestie imperdiet lacinia eu, tempor tristique nisl. Maecenas quis libero eget tortor suscipit consectetur. Phasellus a placerat elit.
Curabitur feugiat lorem a aliquet dignissim. Mauris quis rhoncus justo, sit amet tincidunt dolor. Donec dapibus, neque interdum laoreet lacinia, dolor ex consequat nulla, et pretium risus massa non nibh. Morbi at euismod nunc. Praesent a arcu vel lacus dapibus pharetra eget quis urna. Donec bibendum risus vel arcu porttitor, vel fermentum sem efficitur. Nulla rhoncus fringilla accumsan. Integer feugiat at purus id pellentesque. Sed sodales, lorem sit amet scelerisque posuere, tellus nisi lacinia lectus, id volutpat nulla lectus sit amet arcu. Vestibulum et eleifend ligula. Nam ullamcorper nisl ut leo porttitor maximus. Aliquam non est imperdiet, pretium ex ac, maximus sapien. Curabitur aliquam sit amet nisl sed condimentum. Phasellus imperdiet nisl libero, eu faucibus elit tempus nec.
Pellentesque mollis nibh justo, vitae pellentesque nisl placerat et. Sed tortor ex, tempor in nibh sed, facilisis tincidunt mauris. In mattis vitae magna id semper. Vivamus eget augue scelerisque, efficitur ante eu, egestas eros. Maecenas scelerisque lacinia mi sed aliquam. Vestibulum ut vehicula turpis. Aliquam vel semper augue. In pretium consequat venenatis. Cras eu sagittis erat, in fringilla elit. Vivamus enim odio, efficitur eu dictum sed, scelerisque quis velit. Quisque rhoncus congue libero ac consectetur. Ut dignissim dignissim leo, eget tempus tortor cursus ac.`;
console.log(lorem.split(" ").length + lorem.split("\n").length);

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
