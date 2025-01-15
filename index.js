// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
// 1.2 Print "The driver's name is XXXX".
// 1.3 Create a variable hacker2 with the navigator's name.
// 1.4 Print "The navigator's name is YYYY".

const hacker1 = `Victor`;
const hacker2 = `Gerwin`;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

let count = 0;
let spelledName = "";

for (let i = 0; i < hacker1.length; i++) {
    count += 1;
    spelledName += hacker1[i].toUpperCase() + " ";
}

console.log(spelledName);

let reversedName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log(reversedName);

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium in dui vitae eleifend. Nam tristique augue tellus. Maecenas vel tellus nec lorem gravida pharetra sed a magna. Etiam pharetra orci sit amet lorem ullamcorper venenatis. Nullam a odio hendrerit, luctus metus sit amet, faucibus enim. Praesent a placerat ipsum. Duis pharetra elementum mattis. Vivamus neque mauris, eleifend at elit ut, mollis commodo enim. Mauris egestas nisi arcu, vel cursus lacus interdum eget.

Cras viverra mi enim, at accumsan nunc ultricies in. Etiam consectetur erat at nisl lacinia, et suscipit arcu scelerisque. Fusce tristique finibus dolor, non lobortis lectus interdum sit amet. Donec vitae nisi vestibulum, hendrerit purus quis, interdum erat. Nulla sit amet pulvinar orci. Integer nisl nisl, fermentum in pulvinar eu, facilisis non tellus. Proin rutrum, nibh id molestie semper, lacus nisl porta turpis, in vulputate sem ante sed nunc. Donec ac mi quam. Duis ullamcorper iaculis ligula, eu blandit ipsum porttitor eget. Vestibulum varius sodales turpis, a consequat sem. Nunc fermentum euismod posuere. Pellentesque lectus urna, feugiat et tristique nec, efficitur non nisi. Donec accumsan tempus quam. Nulla auctor lobortis aliquam.

Nulla aliquet porttitor metus ut iaculis. Phasellus varius lectus a porta lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi dui metus, convallis vel libero nec, commodo gravida purus. Nulla dapibus dui dolor, et dapibus risus laoreet nec. Fusce commodo metus sit amet dapibus dignissim. Vestibulum dictum ligula vitae nisl commodo, et laoreet ipsum mollis. Etiam quis convallis augue, sed gravida nulla. In commodo justo in enim efficitur gravida. Mauris ullamcorper nibh facilisis eros facilisis, ac vestibulum turpis dignissim. Nunc tincidunt luctus nibh vitae placerat. Nulla sit amet convallis eros. Sed urna augue, mattis vel arcu ut, dignissim suscipit nulla. Morbi fringilla risus arcu, in porttitor nulla auctor vel. Praesent blandit neque at dictum fermentum.`

let wordCount = 3;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        wordCount += 1;
    }
}

console.log(wordCount);

let phraseToCheck = "race car";
let isPalindrome = false;

for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === phraseToCheck[phraseToCheck.length - i]) {
        isPalindrome=true;
    } else {
        isPalindrome=false;
        break;
    }
}

console.log (isPalindrome);