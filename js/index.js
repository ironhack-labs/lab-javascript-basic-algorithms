// Iteration 1: Names and Input
let hacker1, hacker2;

hacker1 = "Ana";
hacker2 = "Pablo";

console.log("The driver's name is "+ hacker1)
console.log("The navigator's name is "+ hacker2)

// Iteration 2: Conditionals

let hacker1Len, hacker2Len;

hacker1Len = hacker1.length;
hacker2Len = hacker2.length;

if (hacker1Len > hacker2Len) {
    console.log("The driver has the longest name, it has " + hacker1Len + " characters." );
} else if (hacker1Len == hacker2Len) {
    console.log("Wow, you both have equally long names, " + hacker1Len + " characters!" );
} else {
    console.log("It seems that the navigator has the longest name, it has " + hacker2Len + " characters." );
} 

// Iteration 3: Loops

let capsName, reversedName 

capsName = hacker1.toUpperCase().split("").join(" ");
reversedName = hacker1.split("").reverse().join("");

console.log(capsName)
console.log(reversedName)


function lexOrder (name1, name2) {

    let comparison = name1.localeCompare(name2);

    if (comparison < 0) {
        return "The driver's name goes first.";
    } else if (comparison == 0) {
        return "What?! You both have the same name?";
    } else {
        return "Yo, the navigator goes first definitely.";
    }
}
// Function tests
// --------------
// console.log(lexOrder("Ana", "Pablo"))
// console.log(lexOrder("Zola", "Pablo"))
// console.log(lexOrder("Ana", "Ana"))

console.log(lexOrder(hacker1, hacker2))