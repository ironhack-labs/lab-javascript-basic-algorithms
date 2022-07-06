// Iteration 1: Names and Input
//
let hacker1 = "Adriana";
console.log(`The driver name is ${hacker1}.`);
let hacker2 = "Philip";
console.log(`The navigator name is ${hacker2}.`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let hacker1Upper = hacker1.toUpperCase();
let hacker1WithSpace = '';
for (let i = 0 ; i < hacker1Upper.length ; i++) {
    hacker1WithSpace += `${hacker1Upper[i]} `;
}
console.log(hacker1WithSpace);

let hacker2Reversed = '';
for(let i = hacker2.length-1; i >= 0; i--){
    hacker2Reversed += `${hacker2[i]}`;
} console.log(hacker2Reversed);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo the navigator goes first definitely");
} else {
    console.log("What?! You both have the same name?");
}

let wordCount = 0;
for (let i = 0 ; i < loremIpsum.length ; i++) {
    if (loremIpsum[i] === " ") {
        wordCount += 1;
    } else if (loremIpsum[i] === ", ") {
        wordCount -= 1;
    } else if (loremIpsum[i] === ". ") {
        wordCount -= 1;
    } else if (loremIpsum[i] === "; ") {
        wordCount -= 1;
    } else {
        continue;
    }
}
console.log(wordCount + 1);