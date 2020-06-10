// Iteration 1: Names and Input

var hacker1 = "Chakib";

console.log(`the driver's name is ${hacker1}`);

var hacker2 = "Audrey";

console.log(`the navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} caracters.}`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} caracters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// Iteration 3: Loops
let newDriversName = "";
for (let i = 0; i < hacker1.length; i++) {
  newDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(newDriversName);

let reversedName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
}
console.log(reversedName);

console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The drivers's name (${hacker1}) goes first`);
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator (${hacker2}) goes first definitely`);
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1

let loremParagraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed sapien dui. Integer quis nunc a eros aliquet finibus eu in enim. Nunc ullamcorper lorem tincidunt, convallis felis nec, efficitur elit. Maecenas sagittis, dolor ac vestibulum finibus, ipsum dui sodales eros, vel commodo sem risus et felis. Integer lacinia velit id vestibulum luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel sapien non turpis scelerisque rutrum ac a neque. Donec eu dictum risus. Donec dignissim hendrerit enim, in sodales felis convallis eget. Ut laoreet efficitur nibh nec consequat. Donec porta vitae elit a accumsan. Nullam dapibus tincidunt turpis id viverra. Phasellus euismod placerat mauris sodales mollis. Praesent tincidunt orci at dolor tincidunt, in tristique neque elementum. Nulla placerat augue at tristique commodo. Ut metus est, iaculis eu mollis quis, convallis a quam. Nunc suscipit elit et massa mollis elementum. Sed tempor, diam ut scelerisque vulputate, nibh libero molestie dui, in interdum odio turpis sit amet augue. Maecenas in elementum odio. Nulla convallis lacus in erat ultrices varius. Duis ut sodales erat, a ornare dolor. Duis nec eros nec tellus vehicula convallis. Morbi commodo venenatis nibh sit amet interdum. Pellentesque aliquet euismod bibendum. Sed quam libero, semper pellentesque luctus sit amet, pretium nec quam. Aliquam ac accumsan nulla.Nulla facilisis ante lorem, eu porta justo varius eu. Vivamus auctor dignissim felis, quis cursus augue sollicitudin non. Nulla et egestas nisi, quis bibendum nisl. Pellentesque sodales, mauris id imperdiet luctus, velit dui bibendum turpis, et sagittis nulla neque ut neque. Aliquam sit amet tortor id quam varius interdum. Quisque nulla turpis, sagittis tristique mollis sit amet, suscipit eget odio. Nunc vestibulum diam at est dapibus venenatis. Maecenas et lacus eu enim tempus facilisis vel sit amet nulla. Vestibulum sodales tellus non nisl suscipit sodales. Quisque eget volutpat nisl, in dignissim libero. In hac habitasse platea dictumst. Nullam eget tempor augue, vitae tristique nibh.";
// We found 317 words

// Method One

function wordCount(str) {
  let myTotal = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      myTotal++;
    }
  }
  myTotal++;
  console.log(myTotal);
}

// wordCount(oneString);

// Method Two

function countWords(str) {
  var count = 0;
  var words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    // inner loop -- do the count
    if (words[i] != "") count += 1;
  }
  console.log(count);
  console.log(Array.isArray(words));
}

countWords(loremParagraph);

function countEt(str) {
  let count = 0;
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "et") {
      count++;
    }
  }
  console.log("count " + count);
  console.log(words);
}

countEt(loremParagraph);

// the word "et" appears 7 times

/* Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes: */

let phraseToCheck = "ce nest pas un palindrome";

console.log(phraseToCheck.split(" ").join("").toLowerCase());

function isPalindrome(someString) {
  let motUn = someString.split(" ").join("").toLowerCase();
  console.log("Mot 1: " + motUn);
  let motDeux = "";
  for (let i = motUn.length - 1; i >= 0; i--) {
    motDeux += `${motUn[i]}`;
  }
  console.log("Mot 2 : " + motDeux);
  if (motUn === motDeux) {
    console.log("Your sentence is a palindrome!");
  } else {
    console.log("This is not a palindrome.");
  }
}

isPalindrome(phraseToCheck);
