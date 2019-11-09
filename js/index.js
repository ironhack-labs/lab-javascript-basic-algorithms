// Iteration 1: Names and Input

console.log("I'm ready!");
let hacker1 = "Manuel";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Sofía";
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals

let driver = hacker1;
let navigator = hacker2;
function findTheLongest(str1, str2) {
  if (str1.length > str2.length) {
    return `The driver has the longest name, it has ${driver.length} characters.`;
  } else if (str1.length < str2.length) {
    return `It seems that the navigator has the longest name, it has ${navigator.length} characters.`;
  } else {
    return `Wow, you both have equally long names, ${driver.length} characters!`;
  }
}
console.log(findTheLongest(driver, navigator));

// Iteration 3: Loops

function printWhitEmphasis(str) {
  str = str.toUpperCase().split("");
  return str.join(" ");
}
console.log(printWhitEmphasis(driver));
function printReverse(str) {
  str = str.split("").reverse();
  return str.join("");
}
console.log(printReverse(navigator));
function lexicographicOrder(str1, str2) {
  if (str1.localeCompare(str2) < 0) {
    return `The driver\'s name goes first.`;
  } else if (str1.localeCompare(str2) > 0) {
    return `Yo, the navigator goes first definitely.`;
  } else {
    return `What?! You both have the same name?`;
  }
}
console.log(lexicographicOrder(driver, navigator));

// Bonus 1

let textLoremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet arcu, a hendrerit lorem. Maecenas euismod nisi massa, quis pulvinar ipsum rhoncus nec. Maecenas aliquet risus neque, ac semper arcu volutpat eget. Nulla vel urna a arcu consectetur molestie. Ut ornare ipsum vel nisi accumsan varius. Donec sit amet orci orci. Sed vulputate est eu mauris lobortis bibendum. Proin cursus porttitor hendrerit. Nulla lacinia sapien a sapien condimentum semper. Cras mollis fermentum consequat. Nam vel velit lobortis, molestie elit sed, tincidunt mauris. Vivamus a diam lobortis, mollis ante id, tristique ligula.

Vivamus vulputate porttitor diam vitae ultricies. Aenean id elit lacus. Donec dolor sapien, pharetra quis ex id, pretium placerat tortor. Mauris venenatis lobortis fermentum. Integer lectus metus, sodales nec nulla in, commodo imperdiet mauris. Maecenas malesuada eu quam sed molestie. Aliquam nec odio id turpis ornare imperdiet. Curabitur at aliquam urna. Vestibulum non nunc justo. Pellentesque tincidunt velit nec neque efficitur aliquam. Donec ut dolor sagittis, feugiat nulla maximus, efficitur ex. Proin quis ullamcorper dui, ut fringilla purus. Morbi efficitur ex nibh, ut elementum felis pretium congue. Proin dictum in justo id varius. Mauris id faucibus felis. Vestibulum dolor arcu, aliquam ultrices tortor ac, consectetur condimentum enim.

Aliquam eu nisi ornare, viverra magna quis, ornare nulla. Nunc ac pharetra sapien. Etiam at efficitur augue. Nam malesuada neque non magna tempus, sit amet posuere sapien dapibus. Proin congue, tortor vel porta auctor, metus dolor commodo lacus, eget varius eros lacus rhoncus neque. Vivamus rutrum faucibus arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum, magna et luctus dapibus, lorem ante interdum quam, vitae vulputate lectus sapien id libero. Phasellus faucibus cursus massa. Donec sit amet ante viverra, pharetra mi in, aliquam nunc. Proin dapibus, ex eu feugiat malesuada, dolor mauris iaculis massa, in gravida dolor nulla sed enim. Aliquam rhoncus posuere turpis et dictum. Pellentesque sodales sodales accumsan. Nullam eu tincidunt purus, non elementum neque.`;

let specificWord = "et";

function countingWords(str) {
  str = str.split(" ");
  return str.length;
}
console.log(`Total words: ${countingWords(textLoremIpsum)}`);

function countingSpecificWord(str, word) {
  str = str.toLowerCase().split(" ");
  var countWord = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === word) {
      countWord += 1;
    }
  }
  return countWord;
}
console.log(
  `Times that "et" appears: ${countingSpecificWord(
    textLoremIpsum,
    specificWord
  )}`
);

// Bonus 2

let answer = prompt("Can you give me an example of palindrome?");
let testString = "Amor, Roma";
function palindromeValidation(str) {
  str1 = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/ /g, "")
    .split("")
    .join("");
  str2 = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/ /g, "")
    .split("")
    .reverse()
    .join("");
  console.log(str1);
  console.log(str2);
  if (str1 === str2) {
    return `Great! "${str}"  Is a palindrome`;
  } else {
    return `Sorry... "${str}" Is not a palindrome`;
  }
}
console.log(palindromeValidation(answer));
