// Iteration 1: Names and Input

const hacker1 = "David";
const hacker2 = "Sara";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters

let hackerSpace = "";

for (let i = 0; i < hacker1.length; i++) {
  const hacker1Char = hacker1[i].toUpperCase();
  hackerSpace += hacker1Char;

  if (i < hacker1.length - 1) {
    hackerSpace += " ";
  }
}

console.log(hackerSpace);

// 3.2 Print all the characters of the navigator's name in reverse order

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  const hacker2Char = hacker2[i];
  reverseName += hacker2Char;
}

console.log(reverseName);

// 3.3 Depending on the lexicographic order of the strings, print

const comparison = hacker1.localeCompare(hacker2);
if (comparison < 0) {
  console.log("The driver's name goes first.");
} else if (comparison > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus Time!

// Bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper ligula sit amet iaculis accumsan. 
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
Proin dolor tortor, convallis sed pharetra ut, viverra nec quam. Fusce in interdum augue, a pulvinar nibh. 
Aenean fringilla nisl vel porta mollis. Maecenas nec accumsan leo, in imperdiet ipsum. In sit amet urna eu 
leo accumsan lobortis sit amet eu velit. Sed consectetur lacinia arcu, id porttitor purus porttitor non. 
Nam maximus dignissim mauris at vestibulum. Praesent a ante a turpis elementum finibus. 
Mauris porta massa vitae velit sodales consectetur. Maecenas blandit orci et nunc tempus, sed pharetra 
mauris laoreet. Fusce bibendum a lectus et pellentesque.
Aenean eleifend dolor eros, vitae blandit odio semper eget. Phasellus ut neque laoreet, dignissim dolor sit 
amet, fermentum risus. Vestibulum dignissim, velit id pellentesque venenatis, felis orci mollis ex, ac tincidunt 
lacus lectus vitae purus. Quisque rutrum rutrum ante, et porta magna finibus ac. Cras sem nisi, egestas 
pellentesque pellentesque sed, porta sed nunc. In sollicitudin tellus in malesuada condimentum. Suspendisse 
elementum mauris non lobortis sagittis. Vivamus urna odio, venenatis non enim quis, viverra vestibulum eros. 
Nunc eros metus, aliquam id diam a, sagittis aliquet quam. Orci varius natoque penatibus et magnis dis parturient 
montes, nascetur ridiculus mus. Sed sodales et arcu ac dapibus. Cras non mauris nec metus sagittis convallis 
sed nec velit. Aenean erat velit, mattis non interdum in, sodales non lorem. Aliquam finibus urna sit amet erat 
efficitur tempor. Phasellus ut ante molestie, mattis tortor nec, viverra lacus. Nullam molestie cursus ex, sed 
sollicitudin enim egestas sagittis.
Sed vel finibus dolor. Maecenas ante ipsum, tristique eget suscipit nec, pharetra id nibh. Praesent vehicula leo 
a massa consequat, vitae vestibulum est malesuada. Praesent id ex iaculis, feugiat lectus ac, lacinia purus. 
Nam id nisl quis turpis ultricies sollicitudin vitae auctor dolor. Sed iaculis ligula in volutpat sodales. Donec 
ligula nulla, vehicula quis nunc sit amet, hendrerit dapibus enim. Nulla pharetra nisi in metus aliquet ultrices. 
Nam volutpat vel nulla et ullamcorper. Quisque volutpat rutrum nunc at vestibulum.`;

// Count words

const words = longText.split(" ");
const wordCount = words.length;

console.log(wordCount);

// Count number of "et"

let etCount = 0;

for (let i = 0; i < longText.length - 1; i++) {
  const char = longText[i];
  const nextChar = longText[i + 1];

  if (char === "e" && nextChar === "t") {
    etCount++;
  }
}

console.log(etCount);

// Bonus 2

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Ignore non-alphabetic characters from the start
    let leftChar = str[left].toLowerCase();
    while (left < right && !(leftChar >= "a" && leftChar <= "z")) {
      left++;
      leftChar = str[left].toLowerCase();
    }

    // Ignore non-alphabetic characters from the end
    let rightChar = str[right].toLowerCase();
    while (left < right && !(rightChar >= "A" && rightChar <= "z")) {
      right--;
      rightChar = str[right].toLowerCase();
    }

    // Compare the characters
    if (leftChar !== rightChar) {
      return false;
    }

    // Move towards the center
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("This is not a palindrome")); // false
