// Iteration 1
var hacker1 = "hanna";
console.log("The driver's name is " + hacker1);
var hacker2 = "andrew";
console.log("The navigator's name is " + hacker2);

// Iteration 2

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both got equally long names, ${hacker1.length} characters!`);
}

var string = ""
for (let i = 0; i < hacker1.length; i++) {
    string += hacker1[i] + " ";
}
string1 = string.toUpperCase();
console.log(string1);

var revstring2 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    revstring2 += hacker1[i] + " ";
}
console.log(revstring2);

// Iteration 3

var hacker1u = hacker1.toUpperCase();
var hacker2u = hacker2.toUpperCase();
if (hacker1u > hacker2u) {
    console.log("Hacker 2 comes first");
} else if (hacker1u < hacker2u) {
    console.log("Hacker 1 comes first");
} else {
    console.log("You have the same name")
}

// Bonus

var phrase = "this is an new et and et and had et et et eet ettte gf dfhud fdhubv d";
let wordsSplit = phrase.split(" ");

function countingString(phrase) {
    let wordCount = 1
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === " ") {
            wordCount++
        }
    }
    console.log(`This Paragraph contains ${wordCount} words`);
}

function comparing(phrase) {
    let countingEt = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (wordsSplit[i] === "et") {
            countingEt++
        }
    }
    console.log(`There are ${countingEt} instances of ET in this Paragraph`);
};
countingString(phrase)
comparing(phrase);