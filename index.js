// Iteration 1 

// 1.1 Create a variable hacker1 with the driver's name.
const hacker1 = "Driver";

// 1.2 Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

// 1.3 Create a variable hacker2 with the navigator's name.
const hacker2 = "Navigator";

// 1.4 Print "The navigator's name is YYYY".
console.log("The navigator's name is " + hacker2);

//Iteration 2 

// 2.1 Compare the lengths of hacker1 and hacker2's names
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

//Iteration 3 

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters
const spacedDriverName = hacker1.toUpperCase().split('').join(' ');
console.log(spacedDriverName);

// 3.2 Print all the characters of the navigator's name in reverse order
const reversedNavigatorName = hacker2.split('').reverse().join('');
console.log(reversedNavigatorName);

// 3.3 Depending on the lexicographic order of the strings, print
if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?"); 
}

