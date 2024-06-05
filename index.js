// Iteration 1: Names and Input

let hacker1 = "Edgars"

console.log(`The driver's name is ${hacker1}.`);

let hacker2 = "Hanna"

console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
else {
    console.log("Invalid input.")
}

// Iteration 3: Loops

// 3.1
let newHacker1 = ""
for (let i = 0; i < hacker1.length; i++){

    newHacker1 += hacker1[i].toUpperCase() + " ";   
    }

    console.log(newHacker1);

// 3.2
let reversedHacker1 = ""
for (let i = hacker1.length-1; i >= 0; i--){
    
    reversedHacker1 += hacker1[i];   
    }
    
    console.log(reversedHacker1);

// 3.3
if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.")
}
else if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 0) {
    console.log("What?! You both have the same name?")
}
else {
    console.log("Ivalid input.")
}

// Bonus 1

// 1.1
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sodales metus a tincidunt. Donec fringilla est libero, at lobortis tortor aliquam vel. In euismod et arcu et bibendum. Fusce ac sem sed sapien euismod mattis. Sed ac auctor justo, at varius justo. Nullam elit risus, auctor vel bibendum eget, ultricies id diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus id elit ultrices, ultrices sem at, tempor odio. Donec aliquam ipsum odio, et finibus lacus volutpat a. Suspendisse lacinia bibendum diam non pretium. Aliquam sit amet eros diam. Nulla facilisi. Sed varius volutpat justo, id dapibus odio consectetur ut. Morbi ipsum sem, finibus nec tristique nec, cursus ac lorem. Cras in malesuada lacus. Duis et commodo nibh. Nulla ultrices nunc magna, egestas hendrerit ipsum auctor vitae. Vestibulum auctor porttitor bibendum. Morbi eget enim enim. Pellentesque iaculis tempor sem, sed lobortis sapien aliquam eget. Vivamus et euismod magna. Vestibulum massa nunc, euismod a laoreet sed, consectetur eget ipsum. In non tincidunt sem. Praesent ac fringilla tellus, ac convallis mauris. Aliquam dapibus tempor ligula ullamcorper aliquam. Donec vel diam quis augue lobortis vulputate suscipit a nunc. Integer justo ligula, tincidunt in sem ut, suscipit mollis nisi. Vivamus sed sollicitudin elit, vel tincidunt ante. Pellentesque sagittis maximus mi sit amet posuere. In mi ligula, euismod eget feugiat eget, ultricies volutpat nibh.`;

let words = longText.split(' ');

let wordCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].trim() !== '') {
        wordCount++;
    }
}

// 1.2
let targetWord = 'et';
let etCount = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].trim() === targetWord) {
        etCount++;
    }
}

console.log("Word count:", wordCount);
console.log("Occurrences of 'et':", etCount);

// Bonus 2

function isPalindrome(phrase) {

    phrase = phrase.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    for (let i = 0; i < Math.floor(phrase.length / 2); i++) {
        if (phrase[i] !== phrase[phrase.length - 1 - i]) {
            console.log("The phrase is not a palindrome");
        }
    }
    console.log("The phrase is a palindrome");
}

isPalindrome("Hannah");
