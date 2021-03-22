// Iteration 1: Names and Input
let hacker1 = "Alonso";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Fernando Alonso";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let result = "  ";
for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result);

let reverseResult = " ";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseResult += hacker1[i];
}
console.log(reverseResult);

if (hacker1[0] < hacker2[0]) {
  console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

let someText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras blandit blandit lectus non venenatis. Cras id nunc quis diam mattis faucibus. Duis tempus leo vitae iaculis vulputate. Donec nunc orci, sagittis nec risus non, lacinia placerat nibh. Sed lacinia nunc eget est placerat malesuada. Sed venenatis eget eros ut fermentum. Etiam porta lorem quis fringilla pulvinar. Nunc eu turpis in turpis interdum posuere nec in sem. Proin luctus eget arcu ac imperdiet. Sed quis lacus egestas, sollicitudin lacus et, sagittis ante. Vivamus risus velit, ultricies ut nisi a, pharetra posuere libero. Maecenas lacus neque, ullamcorper eu sollicitudin vel, rhoncus eget ante. Vestibulum ac bibendum purus, nec laoreet felis. Morbi urna felis, finibus vel justo sit amet, porta mollis urna. Pellentesque fringilla dolor sit amet venenatis porttitor. Aliquam pretium justo id scelerisque dignissim. Vivamus hendrerit gravida eros, et fringilla augue rutrum ut. Sed semper convallis elit, ut cursus ipsum maximus non. Maecenas interdum pretium magna. Nam in est id arcu congue feugiat quis imperdiet erat. Nunc lacus neque, lobortis sit amet augue eget, euismod hendrerit nulla. Aenean quis fringilla nunc. Suspendisse eros purus, aliquam eu condimentum et, suscipit in lectus. Vivamus in venenatis velit. Sed eu tellus lacinia, tristique justo quis, faucibus quam. Vestibulum est urna, bibendum id dui quis, ultricies blandit nisi. Nunc condimentum metus eu malesuada cursus. Curabitur id tincidunt libero. Nam laoreet eleifend sem in scelerisque. Vivamus blandit malesuada sem, et interdum velit fringilla a. Quisque ullamcorper tellus vel nisi tempus elementum ac et sapien. Phasellus vehicula porttitor orci, nec ornare odio ornare sed. Phasellus ac dolor vel dolor molestie lacinia. Donec vitae feugiat est. Nulla interdum luctus luctus. Quisque suscipit sapien tortor, vitae venenatis ante egestas quis. Phasellus sit amet est a risus venenatis dapibus.";

function countStr(someText) {
  return someText.split(" ").length;
}
console.log(countStr(someText));

// OR

let i = 1;
for (letter in someText) {
  if (someText[letter] === " ") {
    i++;
  }
}
console.log(i);

function counterWord(someString, word) {
  return someString.split(word).length - 1;
}
console.log(counterWord(someText, "ed"));

//Bonus 2

let phraseToCheck = "Amor, Roma";

function ifPalindrome(str) {
  str = str.toLowerCase().replace(",", "").replace(" ", "");
  let reverseResult = str.split("").reverse().join("");
  if (str === reverseResult) {
    console.log("True");
  } else {
    console.log("False");
  }
}
ifPalindrome(phraseToCheck);
