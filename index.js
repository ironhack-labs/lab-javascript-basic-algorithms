// Iteration 1: Names and Input
const hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}.`)
const hacker2 = "Sophia";
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
const hacker1char = hacker1.length;
const hacker2char = hacker2.length;

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1char} characters.`);
}
else if (hacker1char < hacker2char) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2char} characters.`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1char} characters.`);
}

// Iteration 3: Loops
let hacker1Capitals = "";
for (i = 0; i < hacker1.length; i++) {
    hacker1Capitals += `${hacker1[i].toUpperCase()} `;
}
console.log(hacker1Capitals);

let hacker2Reverse = "";
for (i = hacker2.length - 1; i >= 0; i--) {
    const char = hacker2[i];
    hacker2Reverse += char;
}
console.log(hacker2Reverse);

const hacker1FirstChar = hacker1.slice(0, 1);
const hacker2FirstChar = hacker2.slice(0, 1);

if (hacker1FirstChar < hacker2FirstChar) {
    console.log("The driver's name goes first.")
} else if (hacker1FirstChar > hacker2FirstChar) {
    console.log("Yo, the navigator goes first, definitely.")
} else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
}

// Bonus 1:

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac molestie lacus. Sed at risus congue, tempus turpis a, tincidunt nibh. Fusce eget lobortis ex, et convallis ex. Mauris dolor magna, commodo sit amet gravida pretium, tincidunt vel odio. Nulla eros ex, euismod condimentum ornare non, posuere non ex. Duis non accumsan neque. Nam aliquet iaculis nibh, a viverra arcu suscipit in. Fusce tincidunt magna vulputate eros tincidunt volutpat.

Nulla id nibh eu leo porta scelerisque id in libero. Nam pretium ullamcorper enim, in tincidunt purus imperdiet sed. Sed nec mi nec massa pellentesque fermentum. Aliquam erat volutpat. Morbi convallis ut lacus vitae dictum. Suspendisse tincidunt libero eget lorem efficitur tristique. Sed orci metus, ullamcorper nec ornare eu, hendrerit et ex. Fusce pharetra ligula est, commodo scelerisque enim ultricies et. In luctus porttitor urna, in luctus lorem bibendum vitae. Nam efficitur eros quis turpis ornare consequat. Quisque at aliquet justo. Phasellus mollis ullamcorper commodo.

Aliquam quam nisl, cursus malesuada lacus mattis, consequat vehicula quam. Praesent purus velit, suscipit eu ultrices non, imperdiet a dolor. Fusce dapibus ut nunc vitae suscipit. Praesent a suscipit diam, eu aliquet dui. Integer malesuada convallis magna ut volutpat. Nullam auctor sapien nec turpis ultricies, at porta nisi consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed convallis nisi eu quam ullamcorper iaculis. Donec sollicitudin nulla quis lacus tempor maximus. Sed sed enim eu ante mollis feugiat vitae eu sapien. Donec rhoncus urna lacinia justo accumsan, vel hendrerit dui consequat. Praesent rutrum massa ac velit luctus volutpat. Donec purus justo, consequat a mollis non, ullamcorper ut lorem.`

let countWord = 0;
for (i = 0; i < longText.length; i++) {
    const whiteSpace = " ";
    const endOfPhrase = ".";
    if (whiteSpace || endOfPhrase) {
        countWord++;
    }
}
console.log(countWord);

let countEt = 0;
for (i = 0; i < longText.length; i++) {
    const twoChars = " " + longText[i] + longText[i + 1] + " ";
    if (twoChars === " et ") {
        countEt++;
    }
}

console.log(countEt);

// Bonus 2
const phraseToCheck = "put it up";
let phraseReverse = "";
for (i = phraseToCheck.length - 1; i >= 0; i--) {
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        phraseReverse += phraseToCheck[i];
    }
}
console.log(phraseReverse);

let phraseToCheckWithoutSpace = "";
for (i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " ") {
        continue;
    } else {
        phraseToCheckWithoutSpace += phraseToCheck[i];
    }
}

if (phraseReverse === phraseToCheckWithoutSpace) {
    console.log("'put it up' is a palindrome.")
} else {
    console.log("'put it up' is not a palindrome.")
}
