// Iteration 1: Names and Input
let hacker1 = "Batman";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "The Benevolent Dictator For Life";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
// Conditionals
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker1Length < hacker2Length) {
  console.log(
    `It seems the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1Length} characters.`
  );
}

// Iteration 3: Loops
// Name to uppercase
let name = "";
for (let i = 0; i <= hacker1.length - 1; i++) {
  let letter = hacker1[i];
  name += letter + " ";
}
console.log(name.toUpperCase());

// Reverse name
let name2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  let letter = hacker2[i];
  name2 += letter;
}
console.log(name2);

// Comparing Names
if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log("What?! You both have the same name?");
}

// Bonus
// Lorem Ipsum

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut cursus orci. Cras faucibus hendrerit urna vel interdum. Pellentesque varius sem in venenatis lacinia. In hac habitasse platea dictumst. Vivamus non mi ut risus pretium pulvinar sed quis mi. Quisque a vulputate erat. Aenean rhoncus ipsum in quam mollis tincidunt. Fusce pulvinar lectus nec lorem imperdiet, sed vulputate mauris porta.

Donec vitae consectetur elit. Vestibulum aliquet congue ante eu rutrum. Aliquam et ullamcorper diam. Morbi euismod velit quis tortor bibendum, vel sagittis magna auctor. Sed in sem et risus efficitur ultrices sollicitudin ac nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin scelerisque, augue vitae dignissim venenatis, nunc urna pulvinar ipsum, id bibendum orci justo id eros. Donec vitae lectus quis neque aliquet facilisis. Nam aliquam tempor ex, luctus congue elit commodo nec. Suspendisse nec neque eget purus lacinia dapibus nec eu enim. Nullam porttitor ultrices fringilla. Proin tristique lacus felis, sed porta nibh sodales viverra. Nullam eget tempor quam.

Praesent molestie ultrices libero in rhoncus. Duis in sollicitudin diam. Maecenas interdum malesuada enim, in iaculis nisl convallis vel. Ut vehicula nec nisi sed ornare. Quisque laoreet vitae felis a condimentum. Phasellus iaculis ut erat sit amet ultrices. Vestibulum vitae metus sodales, luctus nulla nec, ultricies augue. Morbi id diam quis ante vulputate ultrices. In tempor laoreet dui, quis imperdiet massa varius eu. Donec nec odio vitae ligula varius tempor. Donec non justo ut dui pretium hendrerit. In finibus fringilla sollicitudin.
`;
let textWithoutWhiteSpace = longText.split(" ");
console.log(textWithoutWhiteSpace);
console.log(textWithoutWhiteSpace.length);

const etArray = [];
textWithoutWhiteSpace.map((word) => {
  if (word === "et") {
    etArray.push(word);
  }
});

console.log(etArray);
console.log(etArray.length);

let phraseToCheck = "Food";
let phraseToCheckReverse = "";

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  let letter = phraseToCheck[i];
  phraseToCheckReverse += letter;
  phraseToCheckReverse = phraseToCheckReverse.toLowerCase();
}

if (phraseToCheck === phraseToCheckReverse) {
  console.log("The phrase is a Palindrome");
} else {
  console.log("The phrase is not a Palindrome");
}
