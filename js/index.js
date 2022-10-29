// Iteration 1: Names and Input

let hacker1 = "Pablito";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Tina";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

// 2.1. Depending on which name is longer, print:
// -The driver has the longest name, it has XX characters. or
// -It seems that the navigator has the longest name, it has XX characters. or
// -Wow, you both have equally long names, XX characters!.


if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has '+ hacker1.length + ' characters')
}    else if (hacker1.length < hacker2.length) {
            console.log('It seems that the navigator has the longest name, it has '+ hacker2.length + ' characters')
        }      else {
        console.log("Wow, you both have equally long names, '+ hacker1.length + ' characters!")
    }



// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"


let hacker1UpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    hacker1UpperCase += hacker1[i].toUpperCase()
    hacker1UpperCase += " "
}
console.log(hacker1UpperCase);


let hacker2Reverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    hacker2Reverse += hacker2[i];
    hacker2Reverse += " "
}
console.log(hacker2Reverse);




//3.3 Depending on the lexicographic order of the strings, print:
//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?

