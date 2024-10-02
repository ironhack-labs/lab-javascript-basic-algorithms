// Iteration 1: Names and Input

// The driver's name
const hacker1 = "Estelle";
console.log(`The driver's name is ${hacker1}`);

// The navigator's name
const hacker2 = "Fiona";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters`
  );
} else hacker1.length === hacker2.length;
console.log(
  `Wow, you both have equally long names, ${hacker2.length} characters!`
);

// Iteration 3: Loops

// 3.1 The driver's name in capital letters & separated by space
let space = "";

/*console.log(
  "CAPITAL WITH SPACES => ",
  hacker1.toUpperCase().split("").join(" ");*/

for (let i = 0; i < hacker1.length; i++) {
  space += hacker1[i].toLocaleUpperCase() + " ";
}

space = space.trim();
console.log(space);

// 3.2 The navigator's name in reverse order

/*let reversed = hacker2.split("").reverse().join("");
console.log(reversed);*/
let reversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed += hacker2[i];
}
console.log(reversed);

// 3.3 Lexicographic order

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue ex magna, vel iaculis nulla sagittis non. Nullam eget mi ultrices, placerat augue vitae, consequat lorem. Vivamus vel ipsum ac sapien consequat condimentum ut id felis. Fusce vel mauris aliquet, fermentum mauris et, molestie ex. Aliquam in tortor at diam vestibulum sollicitudin. Fusce non velit orci. Donec cursus sem id ligula dapibus hendrerit. Quisque tristique urna ut risus hendrerit, varius egestas leo pretium. Donec aliquet erat purus, sed sodales sapien sagittis vitae. Pellentesque sed nibh tortor. Ut vel odio sit amet nulla tincidunt vulputate quis a est. Aliquam erat volutpat. Phasellus euismod bibendum enim, eu semper mi aliquam non. Phasellus mattis nisl eu nibh facilisis maximus. Quisque at turpis diam. Etiam finibus nibh at libero aliquet, non mattis orci consectetur. Aenean volutpat ex turpis, vel tempus nibh vehicula id. Aenean sit amet purus lacinia, tincidunt quam non, pretium mauris. Maecenas velit ligula, imperdiet nec sapien quis, porta bibendum ipsum. Suspendisse consequat eu nisi ut vestibulum. Phasellus dui orci, aliquet eget varius ac, tincidunt vitae sapien. Cras et nisi quis ex fringilla blandit non in sapien. Nunc a pulvinar arcu. Nulla fermentum nisl at enim posuere malesuada. In non nunc eu urna auctor pharetra eu quis odio. Nulla vel fermentum purus, quis ullamcorper leo. Mauris est eros, sollicitudin at nibh quis, pulvinar tristique sapien. Praesent pretium, orci at cursus interdum, nisl nisi efficitur mi, id consequat neque risus eu purus. Mauris sed erat id nibh hendrerit tristique. Nulla laoreet turpis suscipit, elementum eros bibendum, elementum ligula. Sed non semper ante.";

function wordCount(longText) {
  let count = 0;
  let check = false;
  for (let i = 0; i < longText.length; i++) {
    if (longText[i] !== " " && !check) {
      count++;
      check = true;
    } else if ((longText[i] = " ")) {
      check = false;
    }
  }
  return count;
}

console.log(wordCount(longText));

// Bonus 2

/*let reversed = hacker2.split("").reverse().join("");
console.log(reversed);*/

const phraseToCheck = "race car";

let palindrome = phraseToCheck.trim().split("").reverse().join("");

console.log(palindrome);

if (phraseToCheck === palindrome) {
  console.log(` ${phraseToCheck} is a palindrome`);
} else {
  console.log(` ${phraseToCheck} is not a palindrome`);
}
