// Iteration 1: Names and Input
const hacker1 = "José";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "María";
console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2 > hacker1) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
console.log(hacker1.toUpperCase().split("").join(" ")); // J O S É

console.log(hacker1.split("").reverse().join("")); // ésoJ

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar dolor sed blandit pharetra. Duis auctor dictum dui a congue. Sed sollicitudin tincidunt mollis. Cras rhoncus nec turpis eu vehicula. Aenean vestibulum, lectus id egestas aliquam, turpis massa eleifend lectus, a tristique nisl mi non mi. Proin ullamcorper mattis eros sit amet venenatis. In at orci vel augue tempor varius at ut magna. Praesent in sodales augue. Nunc mollis viverra ullamcorper. Fusce faucibus molestie tellus, cursus luctus felis. Curabitur in diam at leo posuere mollis eu quis enim. Fusce tincidunt commodo ante id accumsan. Pellentesque finibus volutpat magna sodales rhoncus. Praesent ut arcu dui. Suspendisse potenti. Morbi risus felis, tristique quis purus euismod, ullamcorper sodales ligula. In ut ligula nibh. Aliquam et placerat orci, et interdum felis. Nunc lacinia dictum placerat. Donec imperdiet pharetra lectus. Vestibulum molestie consequat imperdiet. Duis pretium lacus quis auctor vestibulum. Curabitur quis rutrum ipsum. Fusce vel lacus quam. Aliquam consectetur posuere consequat. Nam vitae volutpat purus. Sed mattis felis vitae dolor vehicula, in ullamcorper purus pretium. Nunc porta urna eros, nec faucibus nibh rhoncus id. Nam ut nisl convallis, dapibus enim sed, iaculis lacus. Suspendisse nec urna dui. Sed mattis mattis ullamcorper. Nulla nec neque tincidunt, euismod erat et, hendrerit lorem. Nunc in odio massa.";

let wordsInLongText = longText.split(" ").length;
console.log(`The text has ${wordsInLongText} words`);

let textToArray = longText.split(" ");
let etCount = 0;

for (let i = 0; i < textToArray.length; i++) {
  if (textToArray[i] === "et") {
    etCount++;
  }
}

console.log(`The word 'et' appears ${etCount} times in the text.`);
