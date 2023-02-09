// Iteration 1: Names and Input

let hacker1 = "Aina";
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Pol";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

const driver = "Aina";
let navigator = "Pol";

let upperCaseDriver = "";
for (let i = 0; i < driver.length; i++) {
upperCaseDriver += driver[i].toUpperCase() + " ";
}
console.log(upperCaseDriver);

let reverseNavigator = "";
for (let i = navigator.length - 1; i >= 0; i--) {
reverseNavigator += navigator[i];
}
console.log(reverseNavigator);

if (driver < navigator) {
console.log("The driver's name goes first.");
} else if (navigator < driver) {
console.log("Yo, the navigator goes first definitely.");
} else {
console.log("What?! You both have the same name?");
}

// Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut lobortis eros. Vestibulum ullamcorper ornare est quis consequat. Suspendisse luctus rutrum lorem, sit amet posuere ex posuere non. Aenean nec porta nibh. Mauris sed lorem imperdiet, feugiat enim sit amet, faucibus erat. Quisque at lacinia lorem. Praesent ultricies laoreet arcu, mollis bibendum urna mattis vel. Cras sed volutpat purus. Vivamus pellentesque arcu id interdum tristique. Suspendisse quis laoreet nisi, eu tincidunt lectus. In sed maximus mauris, maximus aliquam tortor. Nunc at sodales dui.

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sed sapien purus. Nunc ante est, rhoncus vel elementum id, dictum eget sapien. Etiam massa diam, accumsan in porttitor in, mollis quis mauris. Morbi aliquam ligula quis pharetra ultrices. Nam nunc urna, scelerisque non nibh at, cursus molestie ligula. Pellentesque auctor faucibus purus, a placerat ipsum faucibus a. Praesent facilisis metus nec turpis commodo lacinia. Curabitur diam tellus, viverra rhoncus elit vel, tristique condimentum sapien. Sed ullamcorper est in dolor interdum fringilla. Fusce sit amet justo eget mi lobortis elementum.

Aenean eget tellus vitae odio eleifend tincidunt. Duis vel egestas risus. Duis vulputate, augue quis ultrices ullamcorper, sapien velit feugiat ligula, at vehicula velit quam sit amet dui. Duis elementum tortor non risus eleifend, quis iaculis mauris sagittis. Mauris nunc metus, euismod sodales fringilla in, accumsan a felis. Maecenas eu rhoncus justo, ac faucibus mauris. Nunc rhoncus augue eget sollicitudin vestibulum. Ut iaculis ante ante, varius blandit mauris placerat non. Aliquam quis dolor dignissim, viverra eros a, accumsan nisl. Duis in ultrices mauris. Donec pulvinar felis in tincidunt fermentum. In nec enim facilisis libero tempus elementum.`;

const wordCount = longText.split(" ").length;
console.log(`The number of words is ${wordCount}.`);

let etCount = 0;
let index = longText.indexOf("et");
while (index != -1) {
  etCount++;
  index = longText.indexOf("et", index + 1);
}
console.log(`The number of times the Latin word et appears is ${etCount}.`);

// Bonus 2:

let phraseToCheck = "tacocat";
function palindrome(phrase) {
    let len = phrase.length;
    for (let i = 0; i < len/2; i++) {
        if (phrase[i] !== phrase[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

if (palindrome(phraseToCheck)) {
    console.log(`"${phraseToCheck}" is a palindrome!`);
} else {
    console.log(`"${phraseToCheck}" is not a palindrome.`);
}