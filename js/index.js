console.log("I'm ready!");

// Iteration 1: Names and Input
let hacker1 = "Iury";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ghost";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the `);
} else if (hacker1.length == hacker2.length) {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
} else {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
}

// Iteration 3: Loops
//3.1
console.log(`${hacker1.toUpperCase().split("").join(" ")}`);

//3.2
console.log(`${hacker2.split("").reverse().join("")}`);

//3.3
if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1

let paragraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque varius pharetra dui, aliquam venenatis sem rutrum sed. Quisque sodales hendrerit tellus ac congue. Duis elementum diam a nibh egestas, eu laoreet felis euismod. Vestibulum hendrerit ipsum augue, a pretium eros lacinia vel. Suspendisse id arcu diam. Quisque finibus, elit sit amet varius tristique, purus lacus scelerisque mauris, quis sollicitudin ligula diam eget quam. Aenean sollicitudin commodo ligula, eget imperdiet neque vulputate ac. Curabitur ut aliquam mi, vitae suscipit augue. Aliquam sit amet velit eget ipsum vulputate interdum tincidunt consectetur neque. Suspendisse a eleifend dolor, in mattis diam. Sed consequat blandit fringilla. Morbi iaculis mi et quam rhoncus, ut finibus turpis commodo. Cras imperdiet lacus quis mi egestas venenatis.
Phasellus dignissim, arcu ac elementum malesuada, odio metus laoreet justo, et posuere neque tortor vel tortor. Pellentesque non vulputate neque. Sed porttitor lorem quis nulla vehicula, non suscipit ipsum vulputate. Praesent tellus leo, ultrices in suscipit sed, laoreet sagittis est. Ut ut sem eu nisi cursus faucibus. Nullam et dignissim diam. Duis quis erat ut tortor imperdiet rutrum in tristique neque. Morbi vitae consectetur mi, et bibendum sapien. Aliquam mi odio, elementum quis efficitur id, posuere id felis. Sed at orci eros. Nulla luctus nulla magna, vel fermentum risus pharetra quis.
Nulla varius, augue sit amet efficitur sollicitudin, arcu eros egestas purus, id porttitor velit eros a mauris. Fusce suscipit nibh eu orci posuere, vel aliquet urna tristique. Phasellus elit lectus, congue ultricies scelerisque et, viverra eget magna. Maecenas nec rutrum sem. Proin consequat turpis sed turpis finibus rhoncus. Nullam laoreet quis est at sollicitudin. Donec eu commodo nulla. Fusce laoreet leo ac neque scelerisque mollis.`;

let words = "";
let numberOfParagraphs = 3;

for (let i = 0; i < paragraphs.length; i++) {
  if (paragraphs[i - 1] == " ") {
    words++;
  }
}
console.log(`The text has: ${words + numberOfParagraphs} words.`);

let count = "";
for (let i = 0; i < paragraphs.length; i++) {
  if (
    paragraphs[i] == " " &&
    paragraphs[i + 1] == "e" &&
    paragraphs[i + 2] == "t"
  ) {
    count++;
  }
}
console.log(`The word 'et' appears: ${count} times in the text.`);
