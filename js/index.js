// Iteration 1: Names and Input
// Completed this home alone due to bank holiday so no real driver and navigator in my case.
const hacker1 = "David V",
  hacker2 = "David V";
console.log(
  `The driver's name is ${hacker1}. The navigator's name is ${hacker2}. They're the same person.`
);

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
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space, and in capitals.
let hacker1String = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1String += hacker1[i] + " ";
}

console.log(hacker1String.toUpperCase());

// 3.2 Print all the characters of the navigator's name, in reverse order.
let hacker2String = "";

for (let i = hacker2.length - 1; i > -1; i--) {
  hacker2String += hacker2[i];
}

console.log(hacker2String);

// 3.3
if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`The driver's name goes first.`);
}

// Bonus 1
const loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis eros vulputate, interdum turpis ac, cursus neque. Aenean maximus est urna, vitae fringilla elit ultrices eget. Nulla a urna at nunc maximus scelerisque. Morbi et ex ante. Integer mollis ex eget neque pellentesque, vitae euismod sem bibendum. Praesent maximus fermentum lacus, nec tempus felis pretium eget. Suspendisse tellus tortor, luctus eget velit a, malesuada varius nisl. Quisque eu sagittis augue. Proin vehicula urna lacus, vel volutpat eros sagittis eu. Maecenas eget consequat eros, in dapibus mi. Donec porta magna quis dolor rutrum hendrerit. Maecenas ornare purus ut consequat tincidunt. Sed sed feugiat massa. Sed fringilla velit eget sem lobortis elementum. Etiam tempor urna eleifend ipsum luctus, ut convallis eros facilisis. Sed nec mi ut risus elementum ullamcorper. Praesent porta vitae dui ut pharetra. Duis volutpat viverra tellus, sed lacinia erat scelerisque sit amet. Nullam condimentum nulla eu mi finibus, vel mattis risus euismod. Nulla egestas, ex et condimentum pellentesque, odio urna laoreet quam, id tincidunt sem erat in purus. Vivamus at diam nulla. Nunc iaculis dictum nunc eu dictum. Pellentesque laoreet eros sed tincidunt maximus. Sed molestie laoreet posuere. Praesent purus leo, viverra ut vestibulum eget, dignissim sit amet tortor. Sed ultricies venenatis accumsan. Morbi tristique metus eget tristique varius. Suspendisse vehicula, orci non tincidunt lobortis, ligula lectus fringilla nibh, a finibus urna nulla non neque. Nullam eu gravida sapien. Suspendisse et velit nec magna vulputate rutrum. Integer tincidunt malesuada eros sed hendrerit. Aliquam id felis tristique, posuere nulla eget, hendrerit magna.";

console.log(`There are ${loremIpsum.split(" ").length} words in the sentence.`);

let startOfString = 0,
  counter = 0,
  i = 0;

while (loremIpsum.indexOf(" et ", startOfString) !== -1) {
  i = loremIpsum.indexOf(" et ", startOfString);
  startOfString = i + 2;
  counter++;
}

if (counter !== 0) {
  console.log(`There are ${counter} "et's" in the sentence.`);
} else {
  console.log(`There is no 'et' in the sentence.`);
}

// Bonus 2
let phraseToCheck = "never odd or even";
phraseToCheck = phraseToCheck.replace(/\s/g, "");

let stringBackwards = "";

for (let i = phraseToCheck.length - 1; i > -1; i--) {
  stringBackwards += phraseToCheck[i];
}

if (phraseToCheck === stringBackwards) {
  console.log(`Passed string is a palindrome.`);
} else {
  console.log(`Passed string is NOT a palindrome.`);
}
