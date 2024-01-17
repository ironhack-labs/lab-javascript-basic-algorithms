// Iteration 1: Names and Input
let hacker1 = "Juan";
console.log("The driver's name is " + hacker1);

let hacker2 = "Diana";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`,
  );
  
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`,
  );
  
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`,
  );
}


// Iteration 3: Loops
let hacker1Capitalized = "";

for (let i = 0; i < hacker1.length; i++) {
  hacker1Capitalized += hacker1[i].toUpperCase() + " ";
}

console.log(hacker1Capitalized);

let hacker2Reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Reversed += hacker2[i];
}

console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
  
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
  
} else {
  console.log("What?! You both have the same name?");
}


// Bonus 1: 
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc vel scelerisque sodales, nunc augue sagittis nunc, at mollis erat nisl vitae nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam auctor, nunc vel scelerisque sodales, nunc augue sagittis nunc, at mollis erat nisl vitae nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam auctor, nunc vel scelerisque sodales, nunc augue sagittis nunc, at mollis erat nisl vitae nunc. Vestibulum ante`;

let loremIpsumWordsCount = loremIpsum.match(/\bet\b/gi);

console.log(loremIpsumWordsCount.length);

// Bonus 2
let palindrome = "Amor, Roea";
let isPalindrome = true;
let cleanedPalindrome = palindrome.replace(/[^a-zA-Z]/g, "").toLowerCase();
console.log(cleanedPalindrome);
for (let i = 0; i < cleanedPalindrome.length / 2; i++) {
    if (cleanedPalindrome[i] !== cleanedPalindrome[cleanedPalindrome.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log("It's a palindrome");
} else {
    console.log("It's not a palindrome");
}