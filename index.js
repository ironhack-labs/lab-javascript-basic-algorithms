// // Iteration 1: Names and Input
const hacker1 = "Szczepan";
console.log(`The driver's name is  ${hacker1}`);

const hacker2 = "Grzegorz";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker2.length === hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

}

// Iteration 3: Loops

//3.1 
let hacker1UpperCassed = "";

for (let i = 0; i < hacker1.length; i++) {
    
    const char = hacker1[i].toUpperCase();
    hacker1UpperCassed += char;
}

console.log(...hacker1UpperCassed);

//3.2
let reversedString = "";
let reversedString1 = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
  if (i == 0) {
    reversedString1 = reversedString + hacker1[i].toUpperCase();
  }
  reversedString += hacker1[i];
}
console.log(reversedString1);

// 3.3 The instruction said that this part is about loops but for now I can't find a solution that would make it work with loop.

// const hacker1 = "Szczepan"; > driver
// const hacker2 = "Grzegorz"; > navigator


    if (hacker1 > hacker2) {
        console.log(`The driver's name goes first.`);

    } else if (hacker1 < hacker2) {
        console.log(`Yo, the navigator goes first definitely.`);

    } else if (hacker1 === hacker2) {
        console.log(`What?! You both have the same name?`);


    
}

// I also tried to create a solution with a loop but it doesn't work properly and I don't think loop is needed here but this tasks is in the section which says it's loops.

// for (let i = 0; i < hacker1.length; i++) {

//     let compareStrings = hacker1.localeCompare(hacker2);

//     if (compareStrings = -1) {
//         console.log(`Yo, the navigator goes first definitely.`);

//     } else if (compareStrings = 1) {
//         console.log(`The driver's name goes first.`);

//     } else if (compareStrings = 0) {
//         console.log(`What?! You both have the same name?`);

//     }

// }




