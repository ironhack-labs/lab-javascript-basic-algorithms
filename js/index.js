// Iteration 1: Names and Input
let hacker1 = "Peter";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mary";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let hacker1Capitalized = "";

for(let i = 0; i < hacker1.length; i += 1){
    hacker1Capitalized += `${hacker1[i].toUpperCase()} `;
}
console.log(hacker1Capitalized);

let hacker2Inverse = "";

for(let i = hacker2.length-1; i >= 0; i -= 1){
    hacker2Inverse += `${hacker2[i]}`;
}
console.log(hacker2Inverse);


//Lexicographic Order
if(hacker1.localeCompare(hacker2) === -1){
    console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1){
    console.log("Yo, the navigator goes first definitely");
} else{
    console.log("What?! You both have the same name?");
}