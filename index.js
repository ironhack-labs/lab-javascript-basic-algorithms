/*Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY". */

let hacker1 = "John";
console.log(`The drivers name is ${hacker1}`);

let hacker2 = "Patric";
console.log(`The navigator's name is ${hacker2}`);

// ------------------------------------------------------------------

/*Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters! */

// console.log(hacker1.trim().length);

const driverNameLength = hacker1.trim().length;
console.log(driverNameLength);

const navigatorNameLength = hacker2.trim().length;
console.log(navigatorNameLength);

if (driverNameLength > navigatorNameLength) {
  console.log(
    `The driver has the longest name, it has ${driverNameLength} characters.`
  );
} else if (driverNameLength < navigatorNameLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`
  );
} else {
  console.log("Wow, you both have equally long names, XX characters! ");
}

/**Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".*/

let newNameForDriver = "";

for (let i = 0; i < hacker1.length; i++) {
  newNameForDriver += hacker1[i].toUpperCase() + " ";
}
console.log(newNameForDriver.split("").join(""));

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".
let newNameForNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  newNameForNavigator += hacker2[i];
}
console.log(newNameForNavigator);

/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name? */

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// -------------------------------------------------------------------------------

/*Bonus :
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum rutrum nibh, ac efficitur augue consequat eu. Curabitur et luctus libero. Phasellus sit amet facilisis arcu. Sed auctor orci libero, in ultricies justo consequat vitae. Suspendisse vel lectus sit amet lacus aliquet laoreet. Vivamus justo elit, convallis quis accumsan facilisis, gravida vitae tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sed scelerisque ligula. Duis id ex sed diam convallis porttitor id sit amet magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut massa aliquet, auctor sapien nec, semper eros.

Etiam condimentum rutrum arcu a sagittis. Quisque auctor mi sit amet nunc ornare fermentum. Mauris consequat ultrices volutpat. Donec nec finibus eros. Sed vel accumsan nulla. Nullam vitae elit commodo, mattis arcu id, tincidunt mi. Sed volutpat nulla a bibendum pretium.

Suspendisse eleifend, quam in lobortis vestibulum, odio augue facilisis lectus, ut semper elit neque ac sapien. Maecenas a est placerat augue consectetur tincidunt. Praesent auctor, tortor non varius ultrices, risus magna gravida nulla, vitae suscipit purus turpis et elit. Nam mauris est, hendrerit vitae euismod sit amet, egestas sit amet justo. Vivamus dapibus a leo ac sollicitudin. Donec fringilla ac arcu eu molestie. Aliquam bibendum venenatis gravida. Integer dapibus placerat sapien vulputate auctor. Nulla tincidunt vestibulum elit. Ut at malesuada leo, sit amet fermentum est. Duis sit amet libero quis mi fringilla condimentum. Maecenas fringilla tellus ac enim finibus viverra. Proin a posuere ex.`;

let words = 0;
let etCount = 0;

let splittedParagraph = paragraph.split(" ");

for (let i = 0; i < splittedParagraph.length; i++) {
  if (splittedParagraph[i].includes("\n")) {
    words++;
  } else if (splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
}

console.log("words ===>", words);
console.log("et count  ===>", etCount);
