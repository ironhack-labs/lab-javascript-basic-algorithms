// Iteration 1: Names and Input
hacker1 = `Andres`;
hacker2 = `Francisco`;

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has XX characters.");
}
else if (hacker2.length > hacker1.length){
    console.log("It seems that the navigator has the longest name, it has XX characters.");
}
else {
    console.log("Wow, you both have equally long names, XX characters!");
}
// Iteration 3: Loops

let printName = hacker1.toUpperCase().split("").join(" ");
console.log(printName);

function reverseString(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("Andres"));