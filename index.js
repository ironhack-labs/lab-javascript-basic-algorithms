// Iteration 1: Names and Input
var hacker1 = "Jackie";
console.log(` The driver's name is ${hacker1}`);
var hacker2 = "James";
console.log( ` The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log( `The driver has the longest name ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
    console.log(` It seems that the navigator has the longest name ${hacker1.length} characters`);

}
else {
    console.log(`Wow, you both have equally long names`)
}
// Iteration 3: Loops

//---capital & Space---//
var updatedName = "";
for(let i = 0; i < hacker1.length; i++) {
     updatedName += hacker1[i].toUpperCase() + " ";
}
console.log(updatedName);

// const lastIndex = hacker1.length - 1;
// for ( let i = 0; i <= lastIndex; i++) {
//     const char = hacker1[i];
//     console.log(char);
// }


// ---reverse---//
let newName = "";
var lastChar = hacker1.length - 1;
for (let i = lastChar; i >= 0; i--) {
    newName += hacker1[i];
}
console.log(newName);
//---//

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

const result = hacker1.localeCompare(hacker2);

if (result < 0) {
  console.log("The driver's name goes first.");
} else if (result > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

