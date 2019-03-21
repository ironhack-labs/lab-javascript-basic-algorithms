// Names and Input

var hacker1 = "Juan";

console.log("The drivers name is " + hacker1);

var hacker2 = "Antonio";

console.log("The navigator's name is " + hacker2);

//Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The Driver has the longest name, it has " + hacker1.length + " characters"
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "Yo, navigator got the longest name, it has " +
      hacker2.length +
      " characters"
  );
} else {
  console.log(
    "wow, you both got equally long names " +
      hacker1.length +
      hacker2.length +
      "characters!!"
  );
}

//Part 1:

var result = []; // create an empty array
for (let index = 0; index < hacker1.length; index++) {
  result.push(hacker1[index] + " "); // loop through each character and add a space after each letter
}
console.log(result.join("").toUpperCase());
// .join transforms the array (result) into a string and .toUpperCase capitalizes all letters inside the string
// .toUpperCase is a string function
for (let index = 0; index > hacker2.length; index++) {
  console.log("The drivers name is " + hacker2);
}

//Part 2:
var result = [];
for (let index = 0; index < hacker2.length; index++) {
  result.push(hacker2[index] + " ");
}
console.log(result.join("").toUpperCase());

for (let index = 0; index > hacker2.length; index++) {
  console.log("The drivers name is " + hacker2);
}

console.log(hacker2.split(""));

/*8. Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print:

- `The driver's name goes first`
- `Yo, the navigator goes first definitely`
- `What?! You both got the same name?`
*/

if (hacker1.localeCompare < hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare > hacker2) {
  console.log("Yo, the navigator goes first definitely");
} else if ((hacker1.localeCompare = hacker2)) {
  console.log("What?! You both got the same name?");
}

/*9. Ask the user for a new string and check if it's a [Palindrome](https://en.wikipedia.org/wiki/Palindrome). Examples of palindromes:

   - "A man, a plan, a canal, Panama!"
   - "Amor, Roma"
   - "race car"
   - "stack cats"
   - "step on no pets"
   - "taco cat"
   - "put it up"
   - "Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/

var Palindrome = prompt("Write your name here ! ");

if (
  Palindrome.replace(/ /g, "") ===
  Palindrome.split("")
    .reverse()
    .join("")
    .replace(/ /g, "")
) {
  console.log("Correct my sir !");
} else {
  console.log("Try again to get your name right !");
}

/*10. Lorem ipsum generator*/
