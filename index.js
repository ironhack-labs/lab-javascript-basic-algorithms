// Iteration 1: Names and Input
let hacker1 = "Michael";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Marcus";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} // first conditional for the driver
    else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
    else {
    console.log(`Wow, you both have equally long names, ${hacker1.length}`);
}

// Iteration 3: Loops

let spacedChar = "";

for (let i = 0; i < hacker1.length; i++) { 
    spacedChar += hacker1[i] + " ";
}
const result1 = spacedChar.toUpperCase();
console.log(result1);


let spacedChar2 = "";

for (let j = hacker2.length - 1; j >= 0; j--) { 
    spacedChar2 += hacker2[j] + " ";
}
const result2 = spacedChar2;
console.log(result2);

const finalSort = [result1, result2];
    finalSort.sort(function(a, b) {
         comp = a.localeCompare(b);
         return comp;
     });
console.log(finalSort);

if (finalSort[0] === result1) {
    console.log(`The driver's name goes first.`)
}
    else if (finalSort[0] === result2) {
        console.log(`Yo, the navigator goes first, definitely.`)
    }
    else if (result1 === result2) {
        console.log(`What?! You both have the same name?`)
    }


