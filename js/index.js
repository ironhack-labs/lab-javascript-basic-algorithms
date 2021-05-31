// Iteration 1: Names and Input
let hacker1 = "Raul Nogales"; // The Driver
let hacker2 = "PizzaBytes"; // The passenger
console.log(`The driver's name is ${hacker1}`);
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is ", hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The Driver has the longest name, it has ${hacker1.length} letters.`
  );
} else if (hacker1.length < hacker2.length) {
  "Yo, navigator got the longest name, it has " +
    hacker2.length +
    " characters.";
} else {
  console.log(`You both got equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let result = " ";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());

result = "";
for (letter of hacker1) {
  result += letter.toUpperCase() + " ";
}
console.log(result.trim());

result = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  result += hacker1[i].toUpperCase() + " ";
}
console.log(result.trim());

// Lorem ipsum generator
let loremIpsum =
  "Convallis elit erat vestibulum urna diam potenti nostra sollicitudin. Nullam sed nibh. Velit proin id. Placerat magna arcu. Arcu nibh tempor. Posuere parturient aenean gravida erat et. Viverra ut vivamus. Fermentum neque placerat. Phasellus pellentesque gravida suscipit tempus mattis in pellentesque lectus. Nunc diam eu. Justo amet sed euismod pellentesque pellentesque. Erat tellus nonummy risus nibh vel. Sit aliquam sodales a turpis sit. Eu nec id vel dui fusce sit vestibulum duis cras id mauris. Id velit duis diam dignissim ac nec varius orci tortor taciti nisl leo sed ultrices. Sapien placerat id.";

let trimmedLorem = loremIpsum.trim();

let wordsCount = 0;

for (character of trimmedLorem) {
  if (character === " ") wordsCount += 1;
}

console.log("The word count is: ", (wordsCount += 1));
