console.log("I'm ready!");

// Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.

let hacker1 = `Jillian`;

//1.2 Print `"The driver's name is XXXX"`.

console.log(`"The driver name is" ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = `Google`;

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`"The navigator's name is" ${hacker2}`);


// Iteration 2: Conditionals

//2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.
let i=0;
    
if (hacker1.length > hacker2.length){
        console.log(`The driver has the longest name, it has: ${hacker1.length} characters`);

    } else if (hacker1.length < hacker2.length){
        console.log(`It seems that the navigator has the longest name, it has: ${hacker2[i]} characters`);

    } else if (hacker1.length === hacker2.length){
        console.log(`"Wow, you both have equally long names, ${hacker1[i]} characters!."`)  

    }
//Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?
    

const myString = hacker1;
const splittedString = myString.split('');
const stringWithSpaces = splittedString.join(' ');
const upperCaseStringWithSpaces = stringWithSpaces.toUpperCase();
console.log(upperCaseStringWithSpaces);

function reverseString(s){
    return s.split("").reverse().join("");
}
let result = reverseString(`${hacker2}`);
console.log(result);


let items = [ hacker1, hacker2];
items.sort(function (a, b) {


if (a > b){
  console.log("The driver's name goes first.")
} else if (a < b ){
  console.log("Yo, the navigator goes first definitely.")
} else if(a === b ){
  console.log("What?! You both have the same name?")
}
  return a.localeCompare(b);
});

console.log(items);