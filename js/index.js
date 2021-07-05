// Iteration 1: Names and Input

const hacker1 = "George";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jonathan";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `The navigator's name is longer, it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops

// 3.1

let driverNameInCapitals = hacker1.toUpperCase();
// console.log(driverNameInCapitals.split('').join(' ')); // short way to do it

let nameWithSpaces = "";
for (let i = 0; i < driverNameInCapitals.length; i++) {
  if (i === driverNameInCapitals.length - 1) {
    nameWithSpaces += driverNameInCapitals[i];
  } else {
    nameWithSpaces += driverNameInCapitals[i] + " ";
  }
}
console.log(nameWithSpaces);

// 3.2

let reverseName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i];
}
console.log(reverseName);

// 3.3.

// a.

// if (hacker1 < hacker2) {
//     console.log("The driver's name goes first.");
//   } else if (hacker1 > hacker2){
//     console.log("Yo, the navigator goes first definitely.");
//   } else {
//     console.log("What?! You both have the same name?")
//   }

// b.

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("Driver's name goes first")
  }
  else if (hacker1.localeCompare(hacker2) = 0){
    console.log("What?! You both have the same name?")
  }
  else {
    console.log("Yo, the navigator goes first definitely.")
  }

//////////////////////////

// BONUS
// Bonus 1.

let loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur erat leo, id convallis nibh pretium at. Sed et tempus arcu, sed volutpat mi. Ut consequat dui ac orci vehicula hendrerit. Maecenas non lacinia arcu. In in leo dapibus, aliquam augue a, dignissim nulla. Morbi eu augue vitae quam viverra tempor a non nisl. Sed vitae lectus rhoncus, aliquam leo non, ultrices neque. Etiam non efficitur dui.

Quisque viverra arcu in tellus malesuada elementum a vitae risus. Quisque ut scelerisque enim, a dictum enim. Morbi sed justo commodo, dictum massa at, aliquam dui. Nullam non metus lorem. Donec pulvinar dolor vel massa lobortis, ut vulputate dolor accumsan. Nulla iaculis dictum ipsum ac feugiat. Nulla sed purus fringilla, suscipit nisi vitae, rutrum ante. Ut cursus gravida sagittis. Donec sodales accumsan eros vitae posuere. Nam interdum massa non mauris varius faucibus. Suspendisse sodales pellentesque tincidunt. Ut sed scelerisque neque. Nulla et velit et nulla rutrum efficitur. Sed faucibus libero consequat nunc molestie blandit. In hac habitasse platea dictumst.

Duis dolor odio, consectetur id libero nec, rutrum venenatis libero. Proin dapibus auctor odio vitae fermentum. Morbi lacinia elit vitae sem posuere, ut imperdiet nibh maximus. Curabitur luctus cursus vehicula. Proin aliquam efficitur magna. Aliquam fringilla, dui at pellentesque consectetur, ipsum justo condimentum sapien, nec ultrices enim justo ut erat. Nullam condimentum luctus diam, eu semper odio porta eget. Ut in facilisis lectus. Aliquam erat volutpat. Pellentesque sed tortor non magna ornare dictum eu sit amet ex. Integer a rutrum lacus. Vivamus ex sapien, congue at accumsan in, ultrices quis mauris. Donec sodales scelerisque mauris non sagittis. Curabitur tristique blandit quam, non ultrices nunc commodo eu.`;

function WordCounter (text) {
	let words = text.split(" ").length;
	return words;
}
console.log(WordCounter(loremIpsumText))

console.log(loremIpsumText.split("et").length - 1);