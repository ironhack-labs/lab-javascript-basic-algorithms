// Iteration 1: Names and Input
const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Jane";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// Iteration 3: Loops

//easier
console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker1.split("").reverse().join(""));

//loops
let uppercaseWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
  uppercaseWithSpaces += hacker1[i].toUpperCase(); // Convert each character to uppercase
  if (i < hacker1.length - 1) {
    uppercaseWithSpaces += " "; // Add a space after each character except the last one
  }
}
console.log(uppercaseWithSpaces);

// Second task: Print the string reversed
let reversedString = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedString += hacker1[i]; // Add characters starting from the end
}
console.log(reversedString);

//Bonus 1
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales, massa aliquet mollis congue, arcu elit faucibus nisl, nec gravida lectus mauris efficitur justo. Vestibulum tempor libero quam, quis sodales arcu dictum sit amet. Ut nec magna mattis, placerat est ac, sollicitudin tellus. Quisque finibus tortor rhoncus volutpat ultrices. Praesent auctor egestas lacus eu ullamcorper. Nam at tortor tortor. Etiam congue ex metus, ac porta nulla pulvinar a. Vivamus blandit semper tellus et rutrum. Donec venenatis, lectus et egestas blandit, ipsum lorem tincidunt nisi, vitae rutrum ante tellus ac nisi. Morbi id purus sem. Donec lobortis tortor eget enim scelerisque consequat. Quisque sit amet nisl laoreet, cursus felis eu, ultricies enim. Sed accumsan leo ac enim molestie, vel molestie lacus pellentesque. Vestibulum nec fermentum quam, id auctor lorem. Sed posuere enim in est interdum sollicitudin. Mauris mollis ante massa, in aliquam est placerat ac. Nullam porttitor nec erat sit amet semper. Maecenas vel urna ac turpis tempus rutrum at ut quam.Etiam volutpat accumsan quam non pulvinar. Vivamus ullamcorper eu orci et ullamcorper. Suspendisse imperdiet nisi id turpis venenatis sodales. Fusce tempor nisl eros, elementum ultricies sem finibus eget. Morbi luctus dictum risus, luctus iaculis sem tincidunt tristique. Pellentesque convallis, mauris finibus tincidunt elementum, justo nunc bibendum magna, a sagittis dolor massa sed enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc et ipsum purus. Nullam sagittis pretium nunc non eleifend. Praesent finibus ullamcorper mauris non congue. Pellentesque mollis arcu elit, eget mattis massa mattis nec.";
console.log(longText.split(" ").length);
console.log(longText.split("et").length - 1);

//Bonus 2 - Palindrome
const phraseToCheck = "Anna";
//preprocessing Data
const processedString = phraseToCheck.toLowerCase();
console.log(phraseToCheck);
console.log(processedString);

//with function

//without a function
for (let i = 0; i < processedString.length; i++) {
  if (processedString[i] !== processedString[processedString.length - 1 - i]) {
    console.log("This is not a palindrome");
    break;
  }
  if (i === processedString.length - 1) {
    console.log("This is a palindrome");
  }
}
