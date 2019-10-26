console.log("I am ready!");

//Iteration 1: Names and Input
const hacker1 = "Evgeny";
const hacker2 = "Michaela";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has 6 characters!");
} else if (hacker2.length > hacker1.length) {
  console.log(
    "Yoooo, the Navigator has the longest name, it has 8 characters!"
  );
} else console.log("What?! You both got equally long names!");

//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

//let hacker1Name = hacker1.split("");
//console.log(hacker1Name);

// let hacker1NameAllCapitals = "";
// for (i = 0; i < hacker1Name.length; i++) {
//   console.log(hacker1Name[i].toUpperCase().toString());
//   console.log(hacker1NameAllCapitals);
// }

let hacker1AllCapitals = "";
for (i = 0; i < hacker1.length; i++) {
  //console.log(hacker1[i].toUpperCase().toString());
  hacker1AllCapitals += hacker1[i].toUpperCase().toString() + " ";
}
console.log(hacker1AllCapitals);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let hacker1NameReversed = hacker1
  .split("")
  .reverse("")
  .join("");
console.log(hacker1NameReversed);

//3.3 Depending on the lexicographic order of the strings, print: - The driver's name goes first. - Yo, the navigator goes first definitely. - What?! You both got the same name?
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both got the same name?");
} else {
  console.log("I'm not sure what you want to do, guys.");
}

// Bonus Time!
// Generate 3 paragraphs. Store the text in a variable type of string.
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt id elit pulvinar viverra. Sed nulla ligula, posuere tempus urna a, venenatis tincidunt nisl. Etiam vestibulum egestas nunc, non egestas arcu fringilla malesuada. Etiam magna dui, tristique ut dui sit amet, varius auctor nulla. Praesent ac sem purus. Nullam vehicula lobortis blandit. Vestibulum rhoncus ante tempus libero placerat, eget volutpat velit viverra. Nullam bibendum lobortis mi, sed ultrices erat mattis id. Fusce nec ex nec justo vestibulum euismod. Integer tincidunt sit amet erat eu feugiat. Donec orci elit, posuere et sem et, dignissim egestas mauris.

Morbi id dui et massa volutpat commodo. Curabitur pretium tellus et justo commodo, vel cursus erat ornare. Aliquam ac eros a ipsum vulputate hendrerit sit amet sit amet neque. Donec justo augue, pretium nec mattis a, placerat quis nunc. Aliquam congue nulla et nulla gravida lacinia. Ut scelerisque, nisl eu finibus tincidunt, libero elit fermentum dui, sed dapibus erat leo eu nisl. Nam eget elit dapibus, elementum diam ut, pellentesque tortor. Etiam quis vulputate nisi, quis convallis turpis. Vivamus non nisl neque. Proin et neque auctor, dapibus dolor et, tempor metus. Proin convallis consectetur felis ut molestie. Aenean feugiat, lacus id condimentum malesuada, lacus nulla consequat mi, tempor tristique enim nunc ac ligula. Ut nec elit et dui lobortis rhoncus. In gravida congue metus, vitae sagittis lacus faucibus sed. Nulla blandit posuere velit et viverra. Cras convallis pulvinar velit vel tincidunt.

Aenean ultrices fringilla mi sed condimentum. Integer euismod, lectus vitae tincidunt porta, metus urna hendrerit tellus, nec fringilla mi metus a elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec quis orci placerat, auctor ante varius, finibus urna. Aenean nec volutpat sem, sit amet auctor nisi. Mauris scelerisque enim ut nulla fermentum, sed placerat diam tempus. Mauris ex tellus, viverra vel posuere at, luctus sed erat. Donec sollicitudin pretium convallis. Duis eros ex, efficitur quis mattis eu, mattis quis risus. Suspendisse id nunc ut metus mattis rutrum. Suspendisse pharetra non nulla in tristique. Integer quis venenatis nulla. Nullam odio nunc, pharetra elementum lorem ut, venenatis auctor lectus. Pellentesque rhoncus, quam non semper varius, nisl massa volutpat ante, in mollis massa tortor nec lorem.`;
console.log(loremIpsum);

// Make your program count the number of words in the string.
function wordCount(loremIpsum) {
  return loremIpsum.split(" ").length;
}
console.log(wordCount(loremIpsum));

// Make your program count the number of times the Latin word et appears.
let etWord = " et ";
let countEtWord = loremIpsum.split(etWord).length - 1;
console.log(countEtWord);
