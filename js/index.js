// Iteration 1: Names and Input
const hacker1 = "Laura";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Adrià";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const len1 = hacker1.length;
const len2 = hacker2.length;
if (len1 > len2) {
  console.log(`The driver has the longest name, it has ${len1} characters.`);
} else if (len1 < len2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${len2} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${len1} characters!.`);
}

// Iteration 3: Loops
// 3.1
let hacker1cap = "";
let i = 0;
while (i < hacker1.length) {
  hacker1cap = hacker1cap + hacker1.charAt(i).toUpperCase();
  i = i + 1;
  if (i < hacker1.length) {
    hacker1cap = hacker1cap + " ";
  }
}
console.log(hacker1cap);

// 3.2
let hacker2rev = "";
for (let i = len1 - 1; i >= 0; i--) {
  hacker2rev = hacker2rev + hacker2.charAt(i);
}
console.log(hacker2rev);

// 3.3
let resolved = false;
for (let i = 0; i < len1 && i < len2; i++) {
  const h1char = hacker1.charAt(i).toLowerCase();
  const h2char = hacker2.charAt(i).toLowerCase();
  if (h1char < h2char) {
    console.log("The driver's name goes first.");
    resolved = true;
    break;
  } else if (h1char > h2char) {
    console.log("Yo, the navigator goes first definitely.");
    resolved = true;
    break;
  }
}

if (!resolved) {
  if (hacker1.length === hacker2.length) {
    console.log("What?! You both have the same name?");
  } else if (hacker1.length < hacker2.length) {
    console.log("The driver's name goes first.");
  } else {
    console.log("Yo, the navigator goes first definitely.");
  }
}

//Bonus 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a velit facilisis tortor suscipit porttitor. Morbi mauris erat, elementum eget congue eu, suscipit ac sem. Maecenas metus dolor, facilisis et consequat quis, aliquet nec sapien. Aliquam erat volutpat. Mauris tincidunt sodales ligula at luctus. Aliquam dolor mi, malesuada non porta quis, pretium vel lacus. Aenean consequat quam enim, ut dignissim velit egestas non. Nullam porta mattis mollis. Nunc nec ex quis odio dapibus lobortis. Fusce a odio metus. Etiam ipsum est, finibus eu feugiat a, pellentesque sit amet enim. Sed ac dapibus mi. Proin ut feugiat arcu. Vestibulum in aliquam turpis. Donec velit nibh, pulvinar sit amet arcu ac, laoreet congue mauris.

Nam hendrerit felis neque, vel congue justo vestibulum euismod. Suspendisse condimentum rutrum ante eget tristique. Fusce enim enim, aliquam sit amet finibus nec, egestas id ligula. Duis consectetur mauris lacinia nibh consequat pulvinar. Etiam ut sagittis ante, sed lacinia arcu. Nullam vulputate sollicitudin purus, quis tempus turpis porttitor eu. Aenean ornare non lectus a commodo. Nullam suscipit est odio, quis ultricies tellus ullamcorper in. Aliquam ultrices nulla a nisi laoreet, eget efficitur lacus porttitor. Praesent semper, quam ut luctus tempus, augue ligula molestie est, eget feugiat enim augue a tortor. Ut vulputate quam metus, congue tempus magna convallis a. Etiam vulputate libero sed felis faucibus malesuada. Aenean aliquet vel turpis id aliquam. Praesent sodales viverra finibus. Nam dolor dui, ullamcorper sit amet eleifend eget, ultrices varius elit. Quisque et accumsan lorem.

Nulla id ex est. In egestas, tortor sed sollicitudin placerat, diam augue porttitor arcu, in luctus eros augue ac felis. Aliquam mi augue, consectetur quis enim non, interdum sodales nibh. Sed fringilla ultricies justo, sit amet viverra lacus malesuada nec. Praesent vulputate sodales ante et volutpat. Suspendisse commodo dictum felis, vitae accumsan libero viverra a. Proin aliquet tristique quam non facilisis. Nunc a libero purus. Suspendisse vel lorem ut ligula ultrices laoreet.`;

// lorem =
//   "Pessimism isn't that bad. You're either right or pleasantly surprised.  como ";

let wordCount = 0;
let wordStart = false;

for (let i = 0; i < lorem.length - 1; i++) {
  const currentChar = lorem.charAt(i);
  if (currentChar === " " || currentChar === "\n") {
    wordStart = false;
  } else if (!wordStart) {
    wordStart = true;
    wordCount = wordCount + 1;
  }
}

console.log(`Number of words: ${wordCount}`);
