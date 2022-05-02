// Iteration 1: Names and Input
let hacker1 = "Kat"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "David"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let navLength = hacker2.length
console.log(`It seems that the navigator has the longest name, it has ${navLength} characters.`)

// Iteration 3: Loops

let uppercased = hacker1.toUpperCase();
let driverOutput = `${uppercased[0]} ${uppercased[1]} ${uppercased[2]}`
console.log(driverOutput);

let output = hacker2.split(""); 

let reversed = [output[4], output[3], output[2], output[1], output[0]];
let navOutput = `${reversed[0]}${reversed[1]}${reversed[2]}${reversed[3]}${reversed[4]}`;
console.log(navOutput);

if (hacker1<hacker2) { 
    console.log("The driver's name goes first.");
}
else if (hacker1>hacker2) { 
    console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1 === hacker2) { 
    console.log("What?! You both have the same name?");
}

