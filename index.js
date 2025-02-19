// Iteration 1: Names and Input
//1.1
let hacker1 = "Michael";
// 1.2
console.log(`The driver's name is ${hacker1}`);
// 1.3
let hacker2 = "Nikki";
// 1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
// 2.1
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
} else {
  console.log(`I'm not sure if these are names!`);
}

// Iteration 3: Loops
// 3.1
let nameFormated = "";
for (let i = 0; i < hacker1.length; i++) {
  nameFormated += hacker1[i] + " ";
}
console.log(nameFormated.trim().toUpperCase());
// 3.2
let nameFormatedReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  nameFormatedReverse += hacker1[i];
}
console.log(nameFormatedReverse);
// 3.3 Fist solution
let teamNames = [];
teamNames.push(hacker1, hacker2);
teamNames.sort();
if (teamNames[0] === teamNames[1]) {
  console.log("What?! You both have the same name?");
} else if (teamNames[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (teamNames[0] === hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}
// 3.3 Second solution (FASTER)
if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
}

// Bonus 1: Lorem Ipsum
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus efficitur dolor vel rutrum. Curabitur pulvinar ligula vitae purus consectetur ullamcorper. Pellentesque arcu nisl, fringilla at tincidunt at, suscipit at erat. Maecenas at mi ut nunc imperdiet vehicula ac sit amet eros. Donec cursus lacus gravida ante pharetra scelerisque. Aenean scelerisque feugiat iaculis. Aliquam vel orci quis ex porttitor gravida. Phasellus placerat posuere ligula vitae eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pretium nunc consectetur nulla fringilla viverra. Etiam eu nibh ac mi volutpat tempus at et massa. Maecenas ut magna nulla.Vestibulum id massa vitae libero aliquam tristique. Donec auctor nisl lobortis nisi interdum facilisis. Quisque a blandit orci, at malesuada nibh. Vestibulum congue viverra justo et malesuada. Sed nec orci ullamcorper neque dictum fermentum. Nulla mattis, odio at interdum gravida, justo tellus vestibulum risus, sed porta lorem felis eu nibh. Suspendisse nec diam a velit vehicula egestas. Integer eu felis ullamcorper lacus aliquet tempus vitae non mi. Mauris nisl felis, blandit et volutpat id, aliquam eu lacus. Curabitur in diam nec lacus imperdiet fermentum. Praesent fringilla eu eros eu faucibus. Phasellus bibendum purus eget enim mollis sollicitudin. Nulla lacus velit, pellentesque vel ipsum vel, suscipit ullamcorper tellus.Etiam sagittis sapien nisl, vestibulum tempor massa commodo non. Fusce aliquam pharetra eros, sed faucibus eros. Proin nec finibus arcu, ac varius nibh. Duis ligula arcu, gravida quis imperdiet at, rutrum sed ligula. Proin tortor quam, gravida sed luctus sed, scelerisque in ex. Etiam in posuere nisl, sit amet convallis leo. Vestibulum enim dolor, euismod luctus magna non, faucibus feugiat libero. Nam odio justo, volutpat non faucibus et, sollicitudin sit amet nulla. Sed commodo viverra erat, non dapibus sapien fringilla sit amet. Sed quis mauris risus. Suspendisse porta neque a diam euismod, ut imperdiet felis pretium. In congue auctor lacus, a dignissim nisl. Vivamus sollicitudin dictum malesuada.";
// Count the number of words in the string
// Clean every word
const longTextClean = longText.replace(/[^a-zA-Z ]/g, "");
// Store them in an array and count them
const wordArray = longTextClean.split(" ");
console.log("Number of words : ", wordArray.length);
// Count the number of times the Latin word "et" appears
const result = wordArray.filter((word) => word === "et").length;
console.log(`The word 'et' appears ${result} time.`);

// Bonus 2: Palindrome
function checkPalindrome(phrase) {
  const phraseClean = phrase.toLowerCase().replace(/[^a-zA-Z]/g, "");
  let phraseCleanReverse = "";
  for (let i = phraseClean.length - 1; i >= 0; i--) {
    phraseCleanReverse += phraseClean[i];
  }
  if (phraseClean == phraseCleanReverse) {
    console.log("It's a palindrome");
    return true;
  } else {
    console.log("It's NOT a palindrome");
    return false;
  }
}

checkPalindrome("Amor, Roma");
