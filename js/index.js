// Iteration 1: Names and Input

let hacker1 = "Ivan";

console.log("The driver's name is", hacker1);

let hacker2 = "Esteban";

console.log("The driver's name is", hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has",
    hacker1.length,
    "characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has",
    hacker2.length,
    "characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names,",
    hacker1.length,
    "characters!"
  );
}

// Iteration 3: Loops

let counter = "";
for (i = 0; i < hacker1.length; i++) {
  counter += hacker1[i].toUpperCase() + " ";
}

let reverseCounter = "";
for (i = hacker2.length; i >= 0; i--) {
  reverseCounter += hacker2[i];
}

if (hacker1 < hacker2) {
  console.log("The driver´s name goes first");
} else if (hacker1 > hacker2) {
  console.log("The navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}

// BONUS

let loren =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tempor purus at dictum venenatis. Nullam commodo ligula quis condimentum venenatis. Mauris et mi sollicitudin, tempus velit et, posuere mauris. Duis porta mauris et risus molestie, vestibulum molestie odio commodo. In finibus urna vel vehicula gravida.";
("Pellentesque tincidunt, erat accumsan sollicitudin sollicitudin, orci diam commodo tellus, vel euismod tortor quam sed risus. Nullam mattis erat quis nunc placerat semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id ex augue. Etiam condimentum tellus lacus, condimentum tempor leo congue et. Vivamus imperdiet enim diam, nec eleifend libero hendrerit quis. Ut at mollis lacus. Duis condimentum augue fringilla luctus cursus.");
("Suspendisse lacinia risus sit amet imperdiet ultricies. Integer faucibus ligula ut erat vehicula volutpat et a odio. Curabitur ac diam et lorem faucibus egestas nec ac ipsum. Integer nulla tortor, laoreet vitae tortor eu, malesuada vehicula elit. Nullam non quam tellus. Nunc pulvinar urna eget odio luctus, at scelerisque ex cursus. Phasellus sit amet nunc id purus ornare faucibus. Maecenas vel mauris vitae enim rhoncus dictum. Cras finibus malesuada dignissim.");

let lorenSplit = loren.split(" ");
console.log(lorenSplit.length);

wordsCounter = 0;
for (i = 0; i < lorenSplit.length; i++) {
  if (lorenSplit[i] === "et") {
    wordsCounter++;
  }
console.log(wordsCounter);
