// Iteration 1: Names and Input

console.log("--- ITERATION 1: ---");

const hacker1 = "claire";
console.log("The driver's name is " + hacker1);

const hacker2 = "fabian";
console.log("The navigator's name is " + hacker2);

console.log("--- --- --- --- ---");

// Iteration 2: Conditionals

console.log("--- ITERATION 2: ---");

const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

if (driverNameLength > navigatorNameLength) {
  console.log(
    `The driver has the longest name, it has ${driverNameLength} characters.`
  );
} else if (navigatorNameLength > driverNameLength) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${navigatorNameLength} characters!`
  );
}

console.log("--- --- --- --- ---");

console.log("--- ITERATION 3.1: ---");

// Iteration 3: Loops

// --- Iteration 3.1 ---

let driverNameUppercaseWithSpaces = "";

for (let i = 0; i < hacker1.length; i++) {
  driverNameUppercaseWithSpaces += hacker1[i].toUpperCase() + " ";
}

console.log(driverNameUppercaseWithSpaces);

console.log("--- ITERATION 3.2: ---");

// --- Iteration 3.2 ---

let navigatorNameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorNameReverse += hacker2[i];
}

console.log(navigatorNameReverse);

console.log("--- ITERATION 3.3: ---");

// --- Iteration 3.3 ---

const hackerNames = [hacker1, hacker2];

let hackerNamesSorted = hackerNames.sort();

if (hackerNamesSorted[0] === hacker1) {
  console.log("The driver's name goes first.");
} else if (hackerNamesSorted[0] === hacker2) {
  console.log("Yo, the navigator goes first, obviously!");
} else {
  console.log("How do you both have the same name?! That's so confusing!");
}
console.log(hackerNamesSorted);

console.log("--- --- --- --- ---");

// BONUS TIME!

// --- Bonus 1 ---

console.log("--- Bonus 1: ---");

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam arcu metus, suscipit nec pretium in, sollicitudin non purus. In cursus elit ac maximus luctus. Ut nunc tortor, auctor sed felis quis, fermentum accumsan enim. Nunc ante dui, dictum eget felis id, varius rhoncus felis. Etiam efficitur at sem pharetra fringilla. Sed commodo, lacus sed accumsan elementum, ex nibh scelerisque massa, id gravida eros ex nec erat. Ut eleifend egestas feugiat. Maecenas ut accumsan purus. Nulla vel vehicula ligula, sed sodales orci. Sed convallis turpis quis dui tempor venenatis. Suspendisse ac turpis et velit faucibus suscipit. Aenean malesuada cursus tellus lobortis malesuada. Sed rhoncus libero lobortis feugiat imperdiet. Morbi sed dui vitae ex euismod pretium ac non sem. Nulla sed rutrum felis, eu ultrices dolor. Curabitur in tristique purus. Donec volutpat odio arcu, eget ullamcorper ipsum gravida sed. In condimentum ante neque, at tincidunt mauris eleifend eget. Nam sed lacus dictum, tristique arcu et, porta massa. Fusce consectetur euismod mi, ut dignissim nisi varius ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi elementum purus ac facilisis mattis. Mauris molestie, sem ac lobortis tempus, justo sem congue elit, sit amet feugiat purus velit nec turpis. Pellentesque tempus vehicula metus sed aliquam. Pellentesque convallis sem at malesuada eleifend. Aliquam faucibus, diam ac porta posuere, arcu quam finibus nibh, vitae euismod lorem eros at mi. Vivamus condimentum nec arcu fringilla interdum. Suspendisse scelerisque sem urna, eu pulvinar turpis luctus id. Vestibulum laoreet nulla id purus auctor, posuere egestas arcu convallis. Etiam vel pulvinar nisi. Aliquam aliquet aliquam velit, in tincidunt diam facilisis et.";

function wordCount(longText) {
  return longText.split(" ").length;
}

console.log(
  "These 3 Paragraphs contain a grand total of " +
    wordCount(longText) +
    " words."
);

console.log("--- --- --- --- ---");

const s1 = "hello world, hello JavaScript!";
const et = "et";
const etCount = (longText.match(new RegExp(et, "g")) || []).length;

console.log(
  "The wort 'et' appears " +
    etCount +
    " times within those " +
    wordCount(longText) +
    " words."
);
