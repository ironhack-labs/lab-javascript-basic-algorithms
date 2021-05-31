// Iteration 1: Names and Input
const hacker1 = "Nelly";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Irina";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops

// console.log(hacker1.toUpperCase().split("").join(" ").toString());

//3.1
let result = "";
for (let i = 0; i < hacker1.length; i++) {
  result += `${hacker1.charAt(i)} `;
}

console.log(result);

//3.2
let reverse = "";

for (let i = hacker1.length; i--; ) {
  reverse += `${hacker1[i]} `;
}
console.log(reverse);

// Bonus 1

//Generate 3 paragraphs. Store the text in a variable type of string.
let paragraphs =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec nisi vitae dui interdum faucibus sed in ante. Sed risus lectus, malesuada non dignissim quis, blandit vel neque. Suspendisse potenti. Curabitur maximus facilisis dolor eu semper. Aliquam erat volutpat. Sed neque urna, congue eget venenatis a, rutrum quis nisi. Proin eget purus libero. Nulla tincidunt sem sit amet ante lobortis ullamcorper. Ut non cursus nisl. Fusce quis velit sit amet tortor porta tincidunt. In hac habitasse platea dictumst. Duis in pellentesque justo. Praesent auctor dui vel urna tincidunt aliquam. Aliquam nulla lectus, venenatis sed sem sed, dictum fringilla erat. Nunc tristique nunc a consequat faucibus. Morbi eget tempus tortor, quis dictum erat. Aenean a nunc in arcu ornare consequat eget nec ex. Donec ac gravida odio. Mauris luctus maximus molestie. Suspendisse maximus porta tellus. Nam in ipsum eget ligula posuere volutpat. Maecenas vitae posuere felis. Vivamus vitae finibus dui. Pellentesque sit amet erat commodo leo mollis volutpat. Integer vehicula blandit metus consequat ultricies. Nulla bibendum augue odio, quis malesuada orci semper vitae. Morbi elit ligula, efficitur sed augue scelerisque, condimentum maximus arcu. Aliquam erat magna, dignissim vitae nulla eleifend, fermentum mattis libero. Maecenas accumsan varius ex et mollis. Phasellus dictum elit in odio lacinia, sed auctor tortor rhoncus. Nulla ut nibh in nisl malesuada fermentum. Curabitur fermentum lectus et aliquam sodales. Morbi cursus purus iaculis nibh pretium, vitae varius velit feugiat. Nulla lobortis auctor rhoncus. Pellentesque lobortis pharetra rhoncus. ";

console.log(paragraphs.length);

//Make your program count the number of words in the string.
let words = 0;

for (let i = 0; i < paragraphs.length; i++) {
  if (paragraphs[i] == " ") {
    words++;
  }
}
console.log(`Number of words: ${words}`);

//Make your program count the number of times the Latin word et appears.
let etnumber = 0;

for (let i = 0; i < paragraphs.length; i++) {
  if (
    paragraphs[i] === " " &&
    paragraphs[i + 1] === "e" &&
    paragraphs[i + 2] === "t" &&
    paragraphs[i + 3] === " "
  ) {
    etnumber++;
  }
}
console.log(`Number of the word ET: ${etnumber}`);
