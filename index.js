// Iteration 1: Names and Input
let hacker1 = "Miguel";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Elias";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let nameFormated = "";

for (let i = 0; i <= hacker1.length - 1; i++) {
    let charWithSpace = hacker1[i].toUpperCase() + " ";
    nameFormated += charWithSpace; 
}
console.log(nameFormated);

let reversedNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigator += hacker2[i];
}
console.log(reversedNavigator);

if (hacker2.localeCompare(hacker1) === 1) {
    console.log("The driver's name goes first.");
} else if (hacker2.localeCompare(hacker1) === -1) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//Bonus 1:
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at dolor vitae ligula ultrices interdum. Vestibulum auctor urna in ante sodales aliquam. Morbi pretium sapien quis lacus vehicula, eu scelerisque massa dignissim. Morbi quis laoreet orci. Aenean finibus varius congue. Morbi quis velit ut quam gravida blandit non eu ipsum. Etiam porttitor odio at dui tristique, sit amet ullamcorper neque aliquet. Sed vitae lobortis felis. Donec in lectus risus. Donec posuere facilisis nunc id vestibulum.

Donec eget purus scelerisque, euismod ante ultricies, gravida urna. Mauris fermentum consequat ante ut blandit. Nullam nisi ante, eleifend ac condimentum sed, lacinia eu sapien. Nunc luctus tempor sapien, a placerat ligula luctus ac. Vestibulum vel pharetra nunc. Nullam a est ultrices tellus convallis elementum quis id sapien. Nulla suscipit, lectus ac volutpat consequat, justo nulla gravida metus, eu finibus diam felis non sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras a neque mattis arcu mattis suscipit et vel dui.

Nulla iaculis in lorem et venenatis. Duis sed leo id purus vulputate malesuada. Donec venenatis viverra massa nec tincidunt. Proin nec pretium lacus, sit amet iaculis diam. Sed sit amet ornare quam. Suspendisse sodales ultricies pulvinar. Vivamus ultrices erat vitae sapien suscipit, sit amet auctor dolor mattis. Maecenas fermentum elementum congue. Sed et feugiat justo. Aenean diam arcu, mattis ac mollis at, sodales in augue. Aenean dignissim feugiat tellus, non bibendum ipsum vulputate sed. Vivamus sed egestas felis.`;

let charCount = 0;
for (let i = 0; i <= longText.length - 1; i++) {
    charCount += 1;
}
console.log(charCount);

let etCount = 0;
for (let i = 0; i <= longText.length - 1; i++) {
    if (longText[i] + longText[i + 1] === "et") {
        etCount += 1;
    }
}
console.log(etCount);

//Bonus 2:
let phraseToCheck = "No 'x' in Nixon";
let palindromeCheck = null;
let formatedPhrase = "";

for (let i = 0; i <= phraseToCheck.length - 1; i++) {
    let char = phraseToCheck[i];
    if (char === " " || char === "!" || char === "?" || char === "." || char === "," || char === "'") {
        continue;
    } else {
        formatedPhrase += phraseToCheck[i].toLowerCase();
    }
}

console.log(formatedPhrase);

let reversedPhrase = "";

for (let i = formatedPhrase.length - 1; i >= 0; i--) {
    reversedPhrase += formatedPhrase[i];
}

console.log(reversedPhrase)

if (formatedPhrase === reversedPhrase) {
    palindromeCheck = true;
} else {
    palindromeCheck = false;
}

console.log(palindromeCheck)