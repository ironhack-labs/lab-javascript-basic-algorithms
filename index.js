/* 
{}
Iteration 1: Names and Input

1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
Iteration 2: Conditionals

2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
Iteration 3: Loops

3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

    The driver's name goes first.
    Yo, the navigator goes first, definitely.
    What?! You both have the same name?

Bonus Time!
Bonus 1:

Go to the lorem ipsum generator website and:

    Generate 3 paragraphs. Store the text in a new string variable named longText.
    Make your program count the number of words in the string.
    Make your program count the number of times the Latin word et appears.

Bonus 2:

Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

    "A man, a plan, a canal, Panama!"
    "Amor, Roma"
    "race car"
    "stack cats"
    "step on no pets"
    "taco cat"
    "put it up"
    "Was it a car or a cat I saw?" and "No 'x' in Nixon".

IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.

Happy coding! ❤️
 */

// Iteration 1: Names and Input
const hacker1 = "Gabriele";
console.log("The driver's name is " + hacker1);
const hacker2 = "Yarin";
console.log("the navigator's name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}
// Iteration 3: Loops
let capitalized = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalized += hacker1[i].toUpperCase() + " ";
}
console.log(capitalized);

let backword = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  backword += hacker2[i];
}
console.log(backword);

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida nibh sed libero dapibus, nec rhoncus orci tempor. Cras ullamcorper, dolor nec sollicitudin tincidunt, nibh felis commodo nulla, non venenatis neque dolor at nibh. Proin id efficitur neque. Vivamus sodales, nunc a gravida pharetra, nibh nisl fermentum ligula, eu posuere neque mauris sed lectus. Curabitur volutpat massa sit amet tellus tempor, eu dapibus quam bibendum. Quisque blandit sapien et risus congue tempor. Vivamus quis porttitor nibh. Aenean efficitur sit amet dui scelerisque tincidunt. In condimentum eros eu arcu laoreet, sed ullamcorper eros accumsan. Aenean vitae metus imperdiet, rhoncus lorem in, venenatis nisl. Aliquam augue nibh, laoreet sagittis neque ac, blandit varius nunc. Ut volutpat quam consectetur nisl lobortis, et aliquam ligula blandit. Etiam sagittis consectetur ultricies. Curabitur a suscipit nulla. Sed massa lorem, scelerisque eget iaculis vitae, viverra ut odio.
Etiam id neque ut massa eleifend egestas. Integer dapibus turpis vitae arcu sagittis, non vulputate odio fringilla. Donec blandit vitae nisl et venenatis. Sed iaculis maximus nisl at scelerisque. Nunc pulvinar nisl in lorem venenatis, id tincidunt enim euismod. Aliquam aliquet convallis odio in commodo. Proin ut commodo mi, vel tempor dolor. Pellentesque id malesuada arcu. In imperdiet arcu eget viverra scelerisque. Curabitur tincidunt auctor ornare. Etiam eu porttitor nisl, non molestie lectus.
Nunc sed felis nisi. Phasellus mi leo, commodo sed ultrices sit amet, dignissim at justo. Nullam euismod, mauris ut varius facilisis, tellus mi porttitor massa, nec mattis nisl tortor nec eros. Aliquam mattis vestibulum nunc, vitae cursus diam ullamcorper vitae. Praesent sit amet nulla ante. Integer consectetur arcu vel urna pretium viverra. Curabitur id augue facilisis, aliquam sapien vitae, luctus lorem. Sed convallis tellus libero, id feugiat enim luctus eu. Aliquam pretium tincidunt felis, et euismod orci tincidunt luctus. Vestibulum eleifend, nunc ac elementum suscipit, ex risus faucibus augue, a dictum metus est non neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce a lectus mi. Suspendisse massa nulla, malesuada vehicula rhoncus nec, iaculis sed libero. Donec scelerisque sit amet turpis sed dapibus`;
let words = 1;
for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " " || longText[i] === "\n") {
    words++;
  }
}
console.log(words);

let et = 0;
for (let i = 0; i < longText.length; i++) {
  if (
    longText[i] === " " &&
    longText[i + 1] === "e" &&
    longText[i + 2] === "t" &&
    longText[i + 3] === " "
  ) {
    et++;
  }
}
console.log(et);

let phraseToCheck = "No 'x' in Nixon";
let smallPhrase = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
let backword2 = "";
for (let i = smallPhrase.length - 1; i >= 0; i--) {
  backword2 += smallPhrase[i];
}
if (backword2 == smallPhrase) {
  console.log("yay");
} else {
  console.log("noooooo");
}
