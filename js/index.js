// Iteration 1: Names and Input
const hacker1 = "João"; //driver
const hacker2 = "Vincent"; //navigator
console.log("The driver's Name is: " + hacker1);
console.log("The navigators' Name is: " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
let hacker1Uppercase = "";
for (let i = 0; i < hacker1.length; i++) {
  hacker1Uppercase += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1Uppercase);

let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1:

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eros erat, vulputate bibendum ex vitae, pharetra bibendum sapien. Pellentesque urna sem, condimentum nec rutrum sit amet, accumsan vitae ante. Proin imperdiet volutpat massa sed consectetur. Phasellus leo dolor, dapibus at placerat non, scelerisque et mauris. Fusce finibus quam nunc, vel sollicitudin orci condimentum sed. Quisque aliquam sem sem, in placerat ex suscipit et. Vivamus ut metus eget mi commodo viverra. Fusce et purus efficitur, porta enim quis, posuere risus. Nunc accumsan tortor ut nulla laoreet, a mollis metus condimentum. Vivamus vestibulum vehicula elementum. Pellentesque semper eros ac lacus sagittis, sit amet molestie leo luctus. Nam in dictum erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer a vulputate odio. Proin a mollis augue, quis facilisis magna.Phasellus ac pellentesque magna. Cras non elit ultrices, efficitur ligula quis, feugiat eros. Vestibulum sollicitudin ante vel magna rutrum eleifend. Cras sit amet elit at lacus rhoncus dignissim nec quis purus. Suspendisse et placerat lectus. Etiam tortor nunc, tincidunt a maximus sit amet, vestibulum vitae nisi. Fusce vel nunc egestas, laoreet sem vitae, consectetur ante. Sed ut turpis eget leo congue pharetra finibus nec eros. Aenean scelerisque erat ac ligula volutpat varius. Nullam eu elit mauris. Pellentesque sagittis convallis augue. Praesent orci risus, finibus ultricies faucibus vitae, scelerisque a sapien.Nulla pretium libero turpis, scelerisque tristique eros viverra vitae. Mauris egestas turpis id metus rutrum, id tincidunt sapien convallis. Sed et augue sed erat tempor lobortis. Praesent at lacus non magna mattis tincidunt sit amet at elit. Ut a diam eros. Proin congue urna nibh, sit amet facilisis felis scelerisque at. Donec nibh lacus, laoreet fringilla placerat in, elementum et leo. Etiam sodales augue at justo laoreet, eget dapibus purus ultricies. Cras nunc enim, tempus at nisl eu, laoreet sagittis enim. Donec scelerisque eleifend dolor. Praesent sed urna tristique, tristique odio sit amet, suscipit purus. Duis congue tellus quis finibus dapibus. Nulla eget commodo augue, sed dignissim mi. Maecenas pharetra ante quis laoreet ullamcorper.";
let countWords = text.split(" ");
console.log(countWords.length);

let etCount = 0;
for (i = 0; i < countWords.length; i++) {
  if (countWords[i] === "et") {
    etCount += 1;
  } else {
    etCount += 0;
  }
}
console.log(etCount);

// Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseWithoutSpaces = phraseToCheck
  .replaceAll(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
  .replaceAll(" ", "")
  .toLowerCase();

let phraseWithoutSpacesReverse = "";
for (let i = phraseWithoutSpaces.length - 1; i >= 0; i--) {
  phraseWithoutSpacesReverse += phraseWithoutSpaces[i];
}

if (phraseWithoutSpacesReverse === phraseWithoutSpaces) {
  console.log("Is a Palindrome!");
} else {
  console.log("Is not a Palindrome!");
}
