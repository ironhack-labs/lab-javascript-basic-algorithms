// Iteration 1: Names and Input
let hacker1 = "Antonio";
let hacker2 = "Fran";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
console.log(
  "-----------------------------------------------------------------"
);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `the driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker1.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

console.log(
  "-----------------------------------------------------------------"
);
// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let upperHacker1 = hacker1.toUpperCase();

let spacedHacker1 = "";
for (let i = 0; i < upperHacker1.length; i++) {
  spacedHacker1 += upperHacker1[i] + " ";
}
console.log(
  `Driver's name, separated by a space and in capitals --${spacedHacker1}--`
); // P E P I T O
console.log(
  "-----------------------------------------------------------------"
);
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let reversedNavigator = hacker2.split("").reverse().join("");
console.log(
  `The characters of the navigator's name, in reverse order --${reversedNavigator}--`
);
console.log(
  "-----------------------------------------------------------------"
);
// 3.3 Depending on the lexicographic order of the strings, print:
let bothNames = [hacker1, hacker2];
let bothNamesSorted = bothNames.sort();

if (bothNamesSorted[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (bothNamesSorted[0] === hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log(" What?! You both have the same name?");
}
console.log(
  "-----------------------------------------------------------------"
);
// ########################
// ##### Bonus 1: #########
// ########################

// Generate 3 paragraphs. Store the text in a variable type of string.
let loremParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa nibh, ultricies a ornare in, accumsan vitae sapien. Maecenas et cursus tortor. Aenean dapibus felis vitae diam posuere fringilla. Vestibulum bibendum eget ligula eget placerat. Nam efficitur mauris at venenatis rutrum. Pellentesque ac pharetra odio. Nullam sollicitudin, eros eu dignissim finibus, arcu erat gravida est, ut molestie dui lectus id augue. Vestibulum molestie ex et est congue, nec ullamcorper diam sollicitudin. Sed at accumsan ante, nec iaculis justo. Aenean sapien est, vestibulum non condimentum a, ultrices non ante. Nullam eget euismod metus, at placerat arcu. Fusce nec risus a nibh malesuada volutpat a sed ante. Duis id pretium magna, a mollis nunc. Mauris tincidunt sapien ligula, ut egestas ligula maximus in. Vestibulum facilisis at leo et suscipit. Aliquam lorem tortor, tincidunt non condimentum ac, aliquam vel quam. Aliquam quis arcu in nunc auctor viverra. Duis consequat justo non lectus tincidunt dapibus. Duis interdum scelerisque leo at facilisis. Duis nec dapibus felis. Vestibulum tristique ut lectus et laoreet. Cras leo ante, volutpat et vulputate eu, hendrerit eu orci. Fusce quis leo enim. Curabitur est lorem, scelerisque vitae enim eget, lacinia suscipit neque. Proin consequat sed lacus a suscipit. Mauris ipsum purus, viverra quis dolor at, ultrices vulputate orci. Pellentesque pharetra, dui id sodales aliquet, lacus urna accumsan ligula, commodo luctus urna risus sit amet ex. Nulla facilisi. Nullam vitae erat nec urna suscipit hendrerit sed ac lorem. Duis aliquet rutrum nunc vel dictum. Sed id varius nunc. Maecenas tristique est nibh. Curabitur ullamcorper mollis neque eget pharetra. Pellentesque maximus, eros a sollicitudin blandit, nisl nisl suscipit ante, ac suscipit tellus diam sed mi. Vestibulum facilisis hendrerit sem id scelerisque. Proin porta, erat eu viverra maximus, odio metus venenatis mauris, non ultrices sem urna condimentum turpis. Pellentesque elementum ornare velit id bibendum. ";

// Make your program count the number of words in the string.
let numberOfWords = loremParagraph.split(" ").length;
console.log(`the number of words: ${numberOfWords}`);

let words = loremParagraph.split(" ");

// Make your program count the number of times the Latin word et appears.

let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    count += 1;
  }
}
console.log(`number of times the Latin word et appears: ${count}`);
console.log(
  "-----------------------------------------------------------------"
);
// ########################
// ##### Bonus 2: #########
// ########################

let phraseToCheck = "race car";
phraseToCheckCleaned = phraseToCheck
  .replace(",", "")
  .replace(" ", "")
  .toLowerCase()
  .split("")
  .join("");

let reversedWord = phraseToCheckCleaned.split("").reverse().join("");

console.log(`phrase to check: ${phraseToCheck}`);
console.log(`phrase to check cleaned: ${phraseToCheckCleaned}`);
console.log(`reversed: ${reversedWord}`);

console.log(
  reversedWord === phraseToCheckCleaned
    ? "It is a Palindrome"
    : "It is not a Palindrome"
);
