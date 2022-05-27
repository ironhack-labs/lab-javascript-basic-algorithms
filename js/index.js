console.log("I'm ready!");

// Iteration 1: Names and Input

const hacker1 = "Nico";
console.log("The driver's name is " + hacker1);
const hacker2 = "Asem";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
        "The driver has the longest name, it has" +
            hacker1.length +
            "characters."
    );
} else if (hacker2.length > hacker1.length) {
    console.log(
        "It seems that the navigator has the longest name, it has " +
            hacker2.length +
            "charachters"
    );
} else hacker2.length === hacker1.length;
{
    console.log("Wow, you both have equally long names");
}

// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driversNameCapitalLettersAndSeperated = "";
for (let i = 0; i < hacker1.length; i++) {
    driversNameCapitalLettersAndSeperated += hacker1[i].toUpperCase() + " ";
}
console.log(driversNameCapitalLettersAndSeperated);

// 3.2 Print all the characters of the navigator's name, in reverse order

let navigatorsNameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorsNameReverse += hacker2[i];
}
console.log(navigatorsNameReverse);

//3.3 Bring strings (names) in lexicographic order

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}
