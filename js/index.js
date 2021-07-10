// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
const hacker1 = "Lena";

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver\'s name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Navigator";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

/*
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
console.log(hacker1.toUpperCase().split("").join(" "));

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
console.log(hacker1.split("").reverse().join(""));

/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/
if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus Time!

// Bonus 1:

// Go to lorem ipsum generator and:

// Generate 3 paragraphs. Store the text in a variable type of string.
const randomParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat sapien, ullamcorper et rhoncus ac, dignissim et massa. Nam consectetur dapibus risus, porta mollis est tincidunt consectetur. Ut id tellus eu orci porttitor dignissim non vel nisl. Curabitur sed eleifend leo. Integer nisi eros, efficitur a mauris ac, euismod tempus velit. Ut tincidunt tortor magna. Sed ullamcorper urna eu odio pretium, nec porta augue vehicula. Sed feugiat nibh quam, id euismod ipsum feugiat sit amet. Duis semper pharetra tempor. Vivamus eget varius dolor, sit amet viverra sem. Maecenas lobortis egestas fermentum. Maecenas at enim in est ultricies porttitor a a elit. Aliquam diam orci, egestas nec auctor et, lobortis consectetur urna. Maecenas hendrerit facilisis vulputate. Aliquam eu lorem vitae dolor ultrices malesuada quis ut sem. Mauris semper lectus vitae mi suscipit molestie. Proin enim metus, consequat id turpis quis, convallis tincidunt ligula. Praesent varius malesuada semper. Cras sodales mattis fringilla. Nullam ullamcorper, dui non lobortis aliquet, elit eros molestie risus, vel fringilla eros tortor vel ligula. Curabitur neque sapien, blandit sed lacus et, mattis viverra risus. Donec placerat eleifend turpis ac vulputate. Vivamus ex est, ornare vel lectus suscipit, tristique lobortis massa. Donec at facilisis nulla, vitae venenatis lacus. Suspendisse potenti. Fusce ultricies vestibulum dolor, eget cursus urna commodo quis. Duis pellentesque metus a maximus convallis. Mauris bibendum felis ipsum, et convallis metus laoreet ut. Etiam a imperdiet nunc, ut pellentesque sem. Curabitur enim massa, efficitur at finibus eu, rutrum non ligula. Vestibulum luctus tempus malesuada. Duis vitae mauris ut nibh consectetur fringilla at bibendum lacus. Morbi eu quam semper, rutrum libero at, interdum enim. Nunc vel nunc ut odio interdum hendrerit sed nec libero. Aliquam pulvinar erat vitae cursus laoreet. Nam et urna turpis. Pellentesque porttitor, purus ut consectetur convallis, sem enim iaculis orci, nec varius lectus ipsum vitae metus. In non commodo quam. Aliquam non velit vel nisl tempus auctor. Nam nec diam rhoncus, luctus nibh ullamcorper, euismod magna. Nunc molestie felis mi, sit amet dictum diam ultrices pretium. Donec non volutpat metus, vel porttitor nibh.";

// Make your program count the number of words in the string.

// Make your program count the number of times the Latin word et appears.

// Bonus 2:

// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.
// const phraseToCheck = 'taco cat';

// Problema encontrado: a contagem começa no 0.
// let reversePhrase = phraseToCheck.slice(phraseToCheck.length*(-1), -1);

// let fowardPhrase = phraseToCheck.slice(0, phraseToCheck.length);
