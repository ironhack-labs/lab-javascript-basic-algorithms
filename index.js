// Iteration 1: Names and Input
let hacker1 = "XXXX";
console.log("The driver's name is ", hacker1);

let hacker2 = "YYY";
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has ",
    hacker1.length,
    " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has",
    hacker2.length,
    "characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names",
    hacker1.length,
    "characters!"
  );
}

// Iteration 3: Loops
let newDriver = "";
hacker1 = "John";
for (let i = 0; i < hacker1.length; i++) {
  newDriver += hacker1[i] + " ";
}

console.log(newDriver.toUpperCase());

let newNavigator = "";
hacker2 = "John";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigator += hacker2[i];
}
console.log(newNavigator);

let a = hacker1;
let b = hacker2;
if (a.localeCompare(b) === -1) {
  console.log("The driver's name goes first.");
} else if (a.localeCompare(b) === 0) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.");
}

//Bonus 1:

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id massa lobortis orci maximus consequat. Vivamus ac magna varius, ultricies purus et, pellentesque est. Aenean semper quam eget neque egestas sodales. Quisque nec risus tellus. In hac habitasse platea dictumst. Proin neque urna, mattis sed lacinia a, varius sed nulla. Praesent porta elit a semper vestibulum. Donec ullamcorper ac orci semper aliquam. Maecenas magna velit, mollis sit amet diam eget, suscipit venenatis eros. Duis eleifend interdum sem eget aliquet. Donec aliquet, nibh ut porta congue, ligula turpis pharetra nibh, placerat sodales risus lacus in est. \nSuspendisse bibendum, odio in pharetra finibus, augue neque efficitur erat, at fringilla ante mi vitae nisl. Nulla id enim consequat eros placerat eleifend. Suspendisse purus arcu, condimentum eu dictum eget, interdum tincidunt purus. Sed odio urna, venenatis vitae volutpat et, scelerisque at tellus. Nullam vulputate ac elit ut gravida. Phasellus non urna quis justo ultrices congue. Sed vulputate efficitur laoreet. Ut dignissim aliquam luctus. Integer at lacus velit. Donec commodo dapibus molestie.\n Quisque a suscipit mauris. Nulla sed dui tellus. Sed dolor arcu, faucibus a consequat quis, fringilla id sem. Mauris ac ornare mauris. Nam tincidunt neque et lectus dapibus rhoncus. Aenean sed nunc ex. Proin laoreet dolor ut mollis molestie. Suspendisse scelerisque mi eu sem mattis, consequat dapibus erat maximus. Maecenas aliquam magna elit, vitae feugiat eros porttitor vel.";

let count = 1;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] == " ") {
    count++;
  }
}
console.log(count);

let countEt = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    (longText[i] == "e" &&
      longText[i + 1] == "t" &&
      longText[i - 1] == " " &&
      longText[i + 2] == " ") ||
    (longText[i] == "e" &&
      longText[i + 1] == "t" &&
      longText[i - 1] == " " &&
      longText[i + 2] == ",")
  ) {
    countEt++;
  }
}
console.log(countEt);

let phraseToCheck = "Was it a car or a cat I saw?";

let phraseNoSpace = "";

for (let i = 0; i < phraseToCheck.length; i++) {
  if (
    phraseToCheck[i] !== " " &&
    phraseToCheck[i] !== "," &&
    phraseToCheck[i] !== "!" &&
    phraseToCheck[i] !== "?"
  ) {
    phraseNoSpace += phraseToCheck[i];
  }
}

let phraseReverse = "";

for (let i = phraseNoSpace.length - 1; i >= 0; i--) {
  phraseReverse += phraseNoSpace[i];
}

if (phraseReverse.toLowerCase() === phraseNoSpace.toLowerCase()) {
  console.log("It is a Palindrome!!!!!!!!");
} else {
  console.log("It is not a Palindrome.");
}
