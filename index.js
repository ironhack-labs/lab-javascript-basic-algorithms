// Iteration 1: Names and Input
let hacker1 = "Sebastião";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Carlos";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;
if (driverLength > navigatorLength) {
  console.log(
    `The driver has the longest name, it has ${driverLength} characters.`
  );
} else if (navigatorLength > driverLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driverLength} characters!`
  );
}

// Iteration 3: Loops
let nameToPrint = "";
for (let index = 0; index < hacker1.length; index++) {
  nameToPrint += hacker1[index].toUpperCase() + " ";
}
console.log(nameToPrint);

// Reverse Driver Name
let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i];
}
console.log(reverseName);

// Lexicographic order
console.log(hacker1.localeCompare(hacker2));
console.log(hacker2.localeCompare(hacker1));
let LexicographicOrder = hacker1.localeCompare(hacker2);
if (LexicographicOrder === -1) {
  console.log("The driver's name goes first.");
} else if (LexicographicOrder === 1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacus quam, tristique sed enim vel, sodales finibus lectus. Curabitur fringilla euismod fringilla. Duis vel luctus enim. Nunc eu sollicitudin metus, sit amet tincidunt purus. Mauris dui lacus, tempus a purus quis, ultricies fringilla ante. Donec rutrum ligula sit amet sapien malesuada, vel hendrerit dolor gravida. Vestibulum turpis urna, fermentum nec est ut, eleifend facilisis augue.
Aenean consectetur lorem lorem, sed vestibulum ipsum sagittis sed. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean consequat sollicitudin orci vel congue. Nulla at vehicula lectus, et pulvinar lorem. Phasellus sed condimentum augue, et pretium orci. Curabitur ullamcorper leo at condimentum eleifend. Nulla in nunc id justo fringilla molestie eu sed arcu. Nulla iaculis, erat a aliquam pretium, magna velit interdum felis, vitae consequat mi enim at risus. Vestibulum eu eleifend nisl, vel euismod elit. Maecenas venenatis ligula nec fermentum tincidunt. Vivamus venenatis eu massa sed pretium. Nunc id eros interdum, elementum nulla quis, eleifend ante. Pellentesque hendrerit risus sit amet est feugiat, eget vehicula lectus porttitor. Suspendisse consequat ex justo, eget vulputate ligula malesuada at. Phasellus eu massa bibendum, condimentum sapien ut, tempor nulla.
Nullam in ex at dolor ultrices vulputate ut ac massa. Pellentesque ut scelerisque nisi. Donec semper condimentum iaculis. Vestibulum at mi pulvinar, mollis lacus laoreet, mattis odio. Vestibulum faucibus eu metus vel malesuada. Morbi eu feugiat tortor, eu aliquam lacus. Donec non magna ac ex malesuada elementum. Nunc pretium purus vulputate mi pellentesque tristique. Integer vel justo velit. Suspendisse iaculis scelerisque velit in consectetur. Suspendisse interdum gravida odio vel rutrum. Sed ultrices, elit non fermentum vehicula, turpis augue cursus eros, sed sollicitudin sem justo in turpis. Nulla varius sit amet metus eget semper. Fusce ac magna scelerisque lacus auctor rhoncus. In egestas sem ut lorem fermentum, nec suscipit mi eleifend.`;

let countWords = 0;
for (let j = 0; j < longText.length; j++) {
  if (longText[j] === " ") {
    countWords += 1;
  }
}
console.log(countWords);

let countEt = 0;
for (let k = 0; k < longText.length; k++) {
  if (
    longText[k] === "e" &&
    longText[k + 1] === "t" &&
    longText[k + 2] === " "
  ) {
    countEt += 1;
  }
}
console.log(countEt);

// function checkPalindrome(word) {
//   wordFormatted = "";
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] !== " ") {
//       wordFormatted += word[i].;
//     }
//   }
//   console.log(wordFormatted);
// }
// checkPalindrome("A man, a plan, a canal, Panama");
