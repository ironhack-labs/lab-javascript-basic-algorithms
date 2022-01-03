// Iteration 1: Names and Input
let hacker1 = "Christian";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Preben"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverNameCap = "";
for (i = 0; i < hacker1.length; i++) {
driverNameCap += `${hacker1[i]} `;
}
console.log(`${driverNameCap.toUpperCase()}`);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorNameReverce = "";
for (i = hacker2.length - 1; i >= 0; i--) {
navigatorNameReverce += `${hacker2[i]} `;
}
console.log(navigatorNameReverce);

// 3.3 Depending on the lexicographic order of the strings, print:
switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log(`The driver's name goes first.`);
        break;
    case 1:
        console.log(`Yo, the navigator goes first definitely.`);
        break;
    default:
        console.log(`What?! You both have the same name?`);
        break;
}

// Bonus 1

let loremIpsum = "   Lorem ipsum \n dolor et sit et           amet     ";
console.log(`${loremIpsum}`);
//Make your program count the number of words in the string.
//Exclude the start and end spaces of a string. The following line of regex expression will remove the start and end spaces of the given string.
loremIpsum = loremIpsum.replace(/(^\s*)|(\s*$)/gi,"");
console.log(`${loremIpsum}`);

//Try to exclude a new line with a start spacing.
loremIpsum = loremIpsum.replaceAll("\n","");
console.log(`${loremIpsum}`);

//Try to reduce multiple spaces to a single space.
loremIpsum = loremIpsum.replace(/[ ]{2,}/gi," ");
console.log(`${loremIpsum}`);

console.log(`${loremIpsum.split(' ').length}`);

// Make your program count the number of times the Latin word et appears.

console.log(loremIpsum.match(/ et /g).length)

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// $ git add .
// $ git commit -m "done"
// $ git push origin master
C:\Users\DKCHKRSO\OneDrive - LEGO\Documents\IronHack\Week1_Day1_LAB1 - JavaScript Basic Algorithms\lab-javascript-basic-algorithms\js\index.js