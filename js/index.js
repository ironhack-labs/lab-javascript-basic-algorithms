// Iteration 1: Names and Input
const hacker1 = "Antonio";
const hacker2 = "Julio";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)
}

// Iteration 3: Loops
let hacker1Upper = hacker1.toUpperCase();
let hacker1New = "";
let hacker2New = "";

for (let i = 0; i < hacker1Upper.length; i++) {
  hacker1New += hacker1Upper[i] + " ";
}
console.log(hacker1New);

for (let i = hacker2.length-1; i >= 0; i--) {
  hacker2New += hacker2[i];
}
console.log(hacker2New);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
}
else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
}
else {
  console.log("What? You both have the same name?");
}

// BONUS 1
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in volutpat neque. Praesent neque arcu, viverra eu pellentesque quis, congue ac elit. Cras sollicitudin odio libero, et lacinia diam facilisis eget. Vivamus aliquam dolor turpis, eleifend placerat dolor varius laoreet. Ut elementum vehicula quam. Suspendisse pellentesque eleifend purus. Cras posuere a magna sit amet faucibus. Proin sodales hendrerit blandit. Fusce in rutrum purus. Etiam ullamcorper ante orci, vitae tempus enim consectetur nec. Vestibulum pulvinar sem sagittis eros lacinia molestie. Quisque dapibus ligula est, et tempus orci gravida ac. Nunc interdum mauris ac volutpat tincidunt. In tincidunt felis a ex condimentum auctor. Maecenas tempor egestas purus vitae convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc egestas orci in neque molestie bibendum. Proin vel mi ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam dictum blandit iaculis. Aenean euismod dui orci, non rhoncus nibh finibus eget. Nam interdum lectus eget consequat molestie. Sed pharetra ipsum id nisl fringilla faucibus. Pellentesque id massa est. Curabitur commodo metus id laoreet iaculis. Mauris a justo vel nibh posuere eleifend. Aliquam tortor quam, malesuada in tempus sed, maximus eu justo. Nullam metus velit, feugiat a sem in, fermentum gravida sapien. Nulla facilisi. Nam sagittis volutpat posuere. Donec quis eros vel risus lobortis gravida. Maecenas et enim libero. Sed sed ornare nisl.";

let loremArray = lorem.split(" ");

console.log(loremArray.length);

let etCount = 0;

for (let word of loremArray) {
  if (word === 'et') {
    etCount++;
  }
}

console.log(etCount);

// BONUS 2
let phraseToCheck = "A man, a plan, a canal, Panama!".toLowerCase()
let phraseArray = phraseToCheck.toLowerCase();
let newArr = [];

for (let i = 0; i < phraseArray.length; i++) {
    if (
        phraseArray[i] !== ' ' &&
        phraseArray[i] !== '!' &&
        phraseArray[i] !== ',' &&
        phraseArray[i] !== "'" &&
        phraseArray[i] !== '?'
    ) {
        newArr.push(phraseArray[i]);
    }
}

let phraseReversed = newArr.reverse().join("");

if (newArr.join("") === phraseReversed) {
  console.log("It is a palindrome");
}
else {
  console.log("Not a palindrome");
}