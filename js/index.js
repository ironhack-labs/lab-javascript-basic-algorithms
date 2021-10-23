// Iteration 1: Names and Input
// 
/*1.1 Create a variable `hacker1` with the driver's name.

1.2 Print `"The driver's name is XXXX"`.

1.3 Create a variable `hacker2` with the navigator's name.

1.4 Print `"The navigator's name is YYYY"`.*/

let hacker1 = 'Julien';
//console.log("The driver's name is " + hacker1);
let hacker2 = 'Olenka';
//console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals

let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1 > length2) {
  console.log(`The driver has the longest name, it has ${length1} characters.`);
} else if (length1 < length2) {
  console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${length1} characters.`);
}

// Iteration 3: Loops

//Print all the characters of the driver's name, separated by a space and [in capitals]
//at first make name in upper case and save in a new variable
let upperCased = hacker1.toUpperCase();
console.log(upperCased);

//separating characters by a space

const splittedName = upperCased.split('');
const spacedName = splittedName.join(' ');
console.log(spacedName);

//Print all the characters of the navigator's name, in reverse order. 
let newString = "";
    for (let i = hacker1.length - 1; i >= 0; i--) {
        newString += hacker1[i];
    }
    console.log(newString);

    //lexicographic order
    let compared = hacker1.localeCompare(hacker2);
if (compared < 0) {
  console.log(`The driver's name goes first.`);
}
if (compared > 0) {
  console.log(`Yo, the navigator goes first definitely.`);
} 
if (compared = 0) {
console.log(`What?! You both have the same name?`);
}