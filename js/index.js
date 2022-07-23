console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "Aitor";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Diego";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the lognest name, its has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length}.`);
}

// Iteration 3: Loops
let newDriverName = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriverName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriverName.trim());

let newNavigatorsName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat nunc id gravida cursus. Donec pretium augue a fermentum posuere. Ut quis vestibulum quam, quis vulputate dolor. Mauris rhoncus sed enim at placerat. Sed luctus in orci non bibendum. Ut aliquam enim orci, id feugiat odio tempor sed. Nulla sodales dolor risus, eu gravida diam malesuada dapibus. Vivamus ut mi nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget volutpat lorem. Integer sit amet malesuada ante. Maecenas non egestas leo, non ultrices velit. Maecenas sit amet semper est, sit amet dignissim libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer lobortis cursus odio vel sodales.

Cras sagittis, velit quis lobortis auctor, nulla turpis vestibulum felis, et ornare augue risus sit amet massa. Curabitur sagittis libero in ex lacinia consectetur. Nunc tristique, leo ac viverra mollis, enim felis congue tortor, sed molestie lorem ex pulvinar ex. Donec nec lacinia velit. Proin lobortis nisl a sapien efficitur molestie. Morbi egestas, eros sed pretium semper, quam nisl fringilla arcu, sed maximus nunc ligula eget massa. Pellentesque condimentum sapien vitae nisl aliquam pulvinar.

Duis maximus dolor tellus, eget tempus est varius et. Nullam justo neque, bibendum eget est ut, faucibus fringilla tortor. Morbi ornare mauris at lobortis ullamcorper. Duis auctor ac metus vel laoreet. Etiam consectetur, nibh quis semper dignissim, ipsum erat blandit lorem, at dignissim enim neque vitae tellus. Pellentesque in risus urna. Nunc enim magna, tincidunt ac nisl et, elementum feugiat nisl. Quisque dignissim turpis nunc, at consequat ex sodales non. Aliquam sagittis in massa vel maximus.`;

// inicialización de las variables
let words = 0;
let etCount = 0;

// convertimos el párrafo en un array de palabras
let splittedParagraph = paragraph.split(" ");

for (let i = 0; i < splittedParagraph.length; i++) {
  if (splittedParagraph[i].includes("\n")) {
    words++;
  } else if (splittedParagraph[i] === "et" || splittedParagraph[i] === "et.") {
    etCount++;
  }
  words++;
}

console.log("words -->", words);
console.log("et count  -->", etCount);

let stringToCheck = "A man, a plan, a canal, Panama!";
stringToCheck = stringToCheck.replace(/[ ,!.]/g, "").toLowerCase();

let reversedString = stringToCheck.split("").reverse().join("");

if (stringToCheck === reversedString) {
  console.log("String is a palindrome");
} else {
  console.log("Not a palindrome");
}
