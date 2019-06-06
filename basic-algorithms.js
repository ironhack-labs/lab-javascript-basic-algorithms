// Names and Input

let hacker1 = "Olga";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = window.prompt("What is your name?");
console.log(`The navigators's name is ${hacker2}`);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `Yo, navigator got the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both got equally long names, ${hacker1.length} characters!!`
  );
}

let hacker1UpperCase = hacker1.toUpperCase();
let hacker1UpperCaseSpaced = "";
for (var i = 0; i < hacker1UpperCase.length; i++) {
  hacker1UpperCaseSpaced = hacker1UpperCaseSpaced.concat(
    hacker1UpperCase.charAt(i),
    " "
  );
}
console.log(hacker1UpperCaseSpaced);

let hacker2Reverse = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reverse += hacker2[i];
}
console.log(hacker2Reverse);

//Lexicographic order

let order = hacker1.localeCompare(hacker2);
if (order < 0) {
  console.log(`The driver's name goes first`);
} else if (order > 0) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both got the same name?`);
}

// Palindrome

let userSentence = window.prompt("Your sentence");
let userSentenceNoSpaces = userSentence
  .replace(/ /g, "")
  .replace(/\./g, "")
  .replace(/,/g, "")
  .replace(/!/g, "")
  .replace(/\?/g, "")
  .replace(/\"/g, "")
  .replace(/\'/g, "")
  .toLowerCase();
let sentenceReverse = "";
for (var i = userSentenceNoSpaces.length - 1; i >= 0; i--) {
  sentenceReverse += userSentenceNoSpaces[i];
}
if (userSentenceNoSpaces == sentenceReverse) {
  console.log(`"${userSentence}" is a palindrome.`);
} else {
  console.log(`"${userSentence}" is not a palindrome.`);
}

// Lorem ipsum generator

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis mattis ornare. Morbi nisi ligula, lobortis at urna vel, rutrum vulputate dui. Curabitur suscipit pulvinar nibh. Phasellus sed lobortis urna. In ac enim eget dui dignissim interdum a quis quam. Mauris interdum mauris quis pharetra sodales. Vestibulum vitae ullamcorper nisi, ut aliquam enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas et felis at justo pulvinar fringilla eget ac leo.

Aliquam mattis venenatis velit, vel sagittis ligula molestie in. Donec vehicula velit sed blandit egestas. Fusce vestibulum eleifend turpis et sollicitudin. Aenean interdum iaculis sapien in laoreet. Praesent ut lacus ac purus aliquam vestibulum vel eu mauris. Duis pharetra mattis risus id suscipit. Nulla tempus nisi vitae auctor sagittis. Phasellus eu ligula scelerisque, fermentum quam ac, varius enim. Pellentesque cursus tempor est at dictum. In eget massa sit amet neque elementum molestie. Aenean viverra placerat metus vitae tempor. Integer in pharetra risus. Morbi lectus ipsum, vulputate quis pellentesque vitae, dictum nec tortor. Nullam rutrum, ante eu ultrices cursus, neque arcu lacinia velit, eu efficitur quam lectus nec libero. Phasellus hendrerit nisi turpis, non faucibus nibh dictum vitae. Fusce sodales laoreet erat posuere viverra.

Nullam ullamcorper, odio non feugiat malesuada, felis quam tempor sem, sit amet varius ex tellus in nisi. Vivamus vel quam semper quam vestibulum rutrum. Mauris placerat tempus hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In in enim rutrum erat varius accumsan sit amet a libero. Vestibulum a convallis nisl. Nullam eget tempor nibh. Integer sit amet lacinia odio. Vestibulum lorem neque, feugiat vitae consectetur eget, interdum non mauris. Mauris sit amet consequat sem. Suspendisse aliquam sapien vitae libero dapibus, vitae auctor quam ultricies. Integer iaculis nibh vel vulputate consequat. Nam sem lectus, mattis sed commodo a, condimentum in lectus.`;

let loremSpaces = loremIpsum.split(" ");
let wordsNumber = loremSpaces.length;
console.log(wordsNumber);

let loremEt = loremIpsum.split(" et ");
let etNumber = loremEt.length - 1;
console.log(etNumber);
