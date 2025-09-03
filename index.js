// Iteration 1: Names and Input
const hacker1 = "The driver's name is ${hacker1name}";
const hacker2 = "The navigator's name is ${hacker2name}";
let hacker1name = "John";
let hacker2name = "John";
// Iteration 2: Conditionals
if (hacker1name.length > hacker2name.length) {
  console.log("The driver has the longest name, it has XX characters.");
} else if (hacker1name.length < hacker2name.length) {
  console.log(
    "It seems that the navigator has the longest name, it has XX characters."
  );
} else if (hacker1name.length === hacker2name.length) {
  console.log("Wow, you both have equally long names, XX characters!");
}
// Iteration 3: Loops

// 3.1
for (let i = 0; i < hacker1name.length; i += 1) {
  console.log(hacker1name[i].toUpperCase() + " ");
}
// 3.2
for (let i = hacker2name.length - 1; i >= 0; i -= 1) {
  console.log(hacker2name[i]);
}
// 3.3
if (hacker1name < hacker2name) {
  console.log("${hacker1name} goes first.");
} else if (hacker1name > hacker2name) {
  console.log("${hacker2name} goes first definitely.");
} else if (hacker1name === hacker2name) {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor ac dui eu suscipit. Morbi quam sapien, faucibus ut congue sit amet, eleifend non mauris. Fusce in consectetur nisi. Nunc varius, turpis eu pharetra tempus, nulla libero lobortis nibh, non sodales arcu est vel libero. Integer in cursus ipsum, vel tincidunt ante. Nam sed mattis felis. Morbi rhoncus faucibus venenatis. Donec vulputate velit elit, sit amet pellentesque sem posuere nec. Vivamus ultrices maximus tempor. Nullam fermentum aliquet risus quis accumsan.

Sed mauris justo, consequat vitae pharetra vitae, blandit non erat. Sed dignissim rutrum diam, et facilisis ipsum sagittis sit amet. Donec quam turpis, finibus vel sapien ac, ultrices vestibulum leo. Pellentesque nec libero id nibh euismod pellentesque. Donec fermentum pharetra ante, non tristique quam commodo non. Phasellus vitae tincidunt elit. Nunc vulputate suscipit laoreet. Quisque condimentum in urna eget porta. Nunc mi augue, aliquet vehicula vulputate in, bibendum finibus eros.

Etiam interdum metus non felis elementum consequat. Vestibulum non pretium sem, vel interdum turpis. Aenean vitae congue arcu. Proin dapibus finibus ligula, in pharetra tortor bibendum eu. In ultricies, eros ac sollicitudin molestie, arcu neque lacinia nibh, scelerisque ornare arcu augue varius diam. Nulla maximus tortor justo, non condimentum enim sollicitudin sit amet. Mauris ullamcorper orci risus, vitae interdum ante elementum eu. Vestibulum suscipit fringilla rutrum. Integer vulputate nulla at mi commodo, eget dignissim nisl rhoncus. Nunc sit amet tristique sem. Vestibulum scelerisque sed velit eu luctus. Cras tincidunt lectus vel bibendum bibendum.`;

let longTextNoSpaces = longText.trim().split(/\s+/).length;

let wordNumb = longTextNoSpaces;

console.log(wordNumb);

let etRepNum = longText.match(/\bet\b/g);

let etCounter = etRepNum ? etRepNum.length : 0;

console.log(etCounter);

// Bonus 2

phraseToCheck = "Amor, Roma";
let cleanPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  let char = phraseToCheck[i].toLowerCase();
  if (char >= "a" && char <= "z") {
    cleanPhrase += char;
  }
}
let isPalindrome = true;
for (let i = 0; i < cleanPhrase.length; i++) {
  let j = cleanPhrase.length - 1 - i;
  if (i >= j) {
    break;
  }
  if (cleanPhrase[i] !== cleanPhrase[j]) {
    isPalindrome = false;
    break;
  }
}
if (isPalindrome) {
  console.log("It is a palindrome!");
} else {
  console.log("Not a palindrome.");
}
