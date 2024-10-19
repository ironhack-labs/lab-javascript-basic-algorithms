// Iteration 1: Names and Input
const hacker1 = 'Andreia';
console.log(`The driver's name is ${hacker1}`);


const hacker2 = 'Gonçalo';
console.log(`The navigator's name is ${hacker2}`);





// Iteration 2: Conditionals

        if (hacker1.length > hacker2.length) {

            console.log("the driver's name has the longest name, it has XX characters.");

        }
        else if  (hacker2.length > hacker1.length ) {

            console.log("It seems that the navigator has the longest name, it has XX characters.");

        }
        
        else {

            console.log("Wow, you both have equally long names, XX characters.");
        }
    





// Iteration 3: Loops

let printName = hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(printName);

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Andres"));


if (hacker1 > hacker2) {
    console.log("the driver's name goes first");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else { 
    console.log("What?! You both have the same name?");
}




// Bonus1:
function wordsLen(longText) {
    const array = longText.trim().split(/\s+/);
    return array.length;
}


let longText = ("Sed tincidunt nisi eget neque molestie, et euismod risus congue. ");

console.log("word count:", wordsLen(longText));




