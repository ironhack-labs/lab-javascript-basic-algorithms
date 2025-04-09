// Iteration 1: Names and Input
let hacker1 = "Chris";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Jesus";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driver1 = hacker1.length;
let driver2 = hacker2.length;

if (driver1 > driver2) {
  console.log(`The driver has the longest name, it has ${driver1} characters.`);
} else if (driver1 < driver2) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${driver1} characters`);
}
// Iteration 3: Loops

let driverName = "John";
for (let i = 0; i < driverName.length; i++) {
  console.log(driverName[i]);
}
// recursive string methods, there are 3 of them but these two are weird. the worst is the ternary that really confused me.
function reverseJohn(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseJohn("john"));

function reverseString(str) {
  return str === "" ? "" : reverseString(str.slice(1)) + str.charAt(0);
}

console.log(reverseString("john"));

// Bonus below
let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mauris elit, vehicula at est ut, malesuada pharetra tortor. Praesent molestie urna sit amet metus convallis fermentum tempus id eros. Nam at ullamcorper justo. Ut a nulla id magna tincidunt faucibus ut vel nulla. Mauris eleifend erat vitae dignissim convallis. Phasellus vitae facilisis est. Praesent leo est, congue a sem eget, blandit sollicitudin urna. Suspendisse iaculis id turpis ut facilisis. Praesent tincidunt erat tortor, vitae finibus quam volutpat sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed diam sapien, consectetur eu dolor in, interdum finibus felis. In suscipit purus eu sapien consectetur accumsan. Aenean ultrices, justo et sollicitudin malesuada, urna mi tristique ex, a pellentesque metus dolor ut augue. Aenean fermentum tempus venenatis. Aenean a libero massa. Etiam elementum, nunc sit amet condimentum faucibus, neque mi ultrices dui, nec aliquam tellus urna a nulla. Sed facilisis est sodales, scelerisque lectus in, tempor arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam nisi risus, efficitur ut ipsum vitae, egestas interdum lacus. Phasellus interdum mi ut ante gravida, et sollicitudin elit venenatis. In ac risus neque. Aenean id lacus pharetra nunc venenatis semper. Donec quis lacus nec eros scelerisque feugiat. Praesent vestibulum dapibus magna suscipit auctor. Phasellus scelerisque id erat vitae ornare. Quisque iaculis accumsan lorem id posuere. Donec velit nisl, bibendum at sapien sit amet, rutrum rhoncus nisi. Cras pellentesque, lacus et efficitur bibendum, risus urna pretium magna, et elementum odio purus in dolor. Aliquam vestibulum malesuada nibh, vel ornare magna accumsan quis. Curabitur rutrum libero ut ultrices egestas.";

// attempt one fails because it doesnt count the word but space but still funny.
longTextNumber = longText.split(" ").length;
console.log(longTextNumber);

//using regex thingy (it just splits the string bz any number of spaces tabs and newlines) Had to do this weird stuff in case there are more spaces or tabs between lines.
longerTextNumber = longText.trim().split(/\s+/).length;
console.log(longerTextNumber);

//bonus latin thingy

function countEt(text) {
  let count = 0;
  let words = text.toLowerCase().split(" ");

  for (let word of words) {
    if (word === "et") {
      count++;
    }
  }

  return count;
}

console.log(countEt(longText));

// Bonus 2 thing
let phrase = "A man, a plan, a canal, Panama!";
let lowerCasePhrase = phrase.toLowerCase();
let cleanPhrase = "";

for (let i = 0; i < lowerCasePhrase.length; i++) {
  let char = lowerCasePhrase[i];
  if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
    cleanPhrase += char;
  }
}

let reversedPhrase = "";
for (let i = cleanPhrase.length - 1; i >= 0; i--) {
  reversedPhrase += cleanPhrase[i];
}
if (cleanPhrase === reversedPhrase) {
  console.log("It's a palindrome!");
} else {
  console.log("It is not a palindrome.");
}

//I am so confused with these regex operators you can use in replace.
/*
let phrase = "Amor, Roma";
let cleanPhrase = phrase.toLowerCase().replace(/[^a-z0-9]/g, "");
let reversePhrase = cleanPhrase.split("").reverse().join("");

if (cleanPhrase === reversePhrase) {
  console.log("It's a palindrome!");
} else {
  console.log("It is not a palindrome.");
}
*/
