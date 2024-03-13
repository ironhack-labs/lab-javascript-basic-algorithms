// Iteration 1: Names and Input
const hacker1 = "Mirko";
const hacker2 = "Mirkolino";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
}

// Iteration 3: Loops
// Iteration 3.1
let fullNameDriver = "";

for (let i = 0; i < hacker1.length; i++) {
  let char = hacker1[i].toUpperCase();
  fullNameDriver += char + " ";
}

console.log(fullNameDriver);

// Iteration 3.2

let fullNameNavigator = "";

for (let j = hacker2.length - 1; j >= 0; j--) {
  let char = hacker2[j];
  fullNameNavigator += char;
}

console.log(fullNameNavigator);

// Iteration 3.3

for (let k = 0; k < hacker1.length; k++) {
  if (hacker1[k] < hacker2[k]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker1[k] > hacker2[k]) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else if (hacker1 === hacker2)
    console.log("What?! You both have the same name?");
}

// BONUS 1
let countWords = 0;
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros justo, fringilla egestas tortor et, rhoncus aliquet arcu. Nunc mi libero, euismod eget condimentum eget, molestie vel quam. Nullam venenatis non lacus vitae placerat. Suspendisse facilisis sit amet erat vitae dapibus. Ut turpis nisl, ultricies quis nisl eget, mattis tempor ligula. Mauris ante massa, tempus a elementum ac, sodales ac nisi. Nam placerat, ligula eget eleifend maximus, turpis eros rhoncus urna, sed bibendum est justo non tortor.

Pellentesque risus dolor, ullamcorper in aliquam sed, dapibus non felis. Mauris tempor magna sed nulla luctus vestibulum. Nam augue nibh, vestibulum vitae nisl quis, porta condimentum lacus. Nunc ut turpis eget metus convallis mollis. In hac habitasse platea dictumst. Nam scelerisque purus ac molestie sollicitudin. Praesent condimentum magna sed nulla consectetur iaculis. Quisque sapien augue, bibendum vel convallis venenatis, porttitor eu quam. Curabitur vitae auctor erat. Phasellus tempor diam sed elit dapibus dapibus. Duis nec elit quis mauris porttitor cursus. Mauris non lectus venenatis, pulvinar sem dictum, feugiat justo. Curabitur fermentum, nisi vel sodales fringilla, lectus enim faucibus velit, ac mattis leo massa at quam. Proin blandit risus consequat, gravida ipsum eget, gravida lorem.

Maecenas pretium suscipit mauris, ullamcorper placerat libero molestie nec. Donec ac nibh luctus, luctus eros quis, malesuada nisi. Fusce vitae ligula libero. Nulla facilisi. Maecenas rutrum augue iaculis dignissim tempor. Aenean ullamcorper odio tortor, sollicitudin ornare orci semper eget. Suspendisse potenti. Nulla facilisi. Vivamus quis quam at ligula vulputate pretium. In tincidunt, nisl at accumsan tincidunt, est mauris imperdiet urna, ac dictum nibh ligula eu mi. Phasellus a eleifend odio bananas.`;

for (let i = 0; i < longText.length; i++) {
  let char = longText[i];
  if (char === " ") {
    countWords++;
  } else if (char === "\n") countWords++;
}

console.log(countWords);

// BONUS 2

let phraseToCheck = "A man, a plan, a canal, Panama!";

let phraseEdited = phraseToCheck.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

let phraseEditedBackwards = "";

for (let i = phraseEdited.length - 1; i >= 0; i--) {
  char = phraseEdited[i].toLowerCase();
  phraseEditedBackwards += char;
}

console.log(phraseEditedBackwards);

if (phraseEdited === phraseEditedBackwards) {
  console.log("That is a palindrome");
} else {
  console.log("Not a palindrome");
}
