// Iteration 1: Names and Input

let hacker1 = "Bruno";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Ricardo";
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

    // Print the characters of driver (hacker1 = "Bruno")
    // Separated by space and in capital letters

hacker1 = hacker1.toUpperCase();
let spacedHacker1 = "";
for (let i=0; i < hacker1.length; i++) {
    spacedHacker1 += hacker1[i]+" "; 
}

console.log(spacedHacker1);

    // print navigator name in reverse (hacker2 = "Ricardo")

let reverseHacker2 = "";
for (let i=hacker2.length-1; i>=0; i--) {
    reverseHacker2 += hacker2[i];
}

console.log(reverseHacker2);

    // Depending on the lexicographic order of the strings, print:
        //str1: The driver's name goes first.
        //str2: Yo, the navigator goes first, definitely.
        //str3: What?! You both have the same name?

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
} else { 
    console.log("What?! You both have the same name?");
}
    // im gettin the 2nd option even if both names are equal (?)



// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices dapibus tristique. Fusce mattis consequat ex, non eleifend nisl.";
let countWords = 0;
let etCount = 0;
for (i=0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        countWords++;
    }
    if (longText[i] && longText[i+1] === "et") {
        etCount++;
    }
}
countWords++; // adding 1 after the loop because this loop counts spaces
              // so there is always 1 more word;  
console.log(`There is ${countWords} words and ${etCount} "et" latin words`);


// Bonus 2

let phraseToCheck = "azul banana";
let palindrome = "";

for (i=phraseToCheck.length-1; i>=0; i--) {
    palindrome += phraseToCheck[i];
}

if (phraseToCheck === palindrome) {
    console.log("Its a palindrome!");
} else {
    console.log("It isnt a palindrome!");
}


