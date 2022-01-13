// Iteration 1: Names and Input

let hacker1 = 'Andres'
let hacker2 = 'Hiba'

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function getLongerName() {
    if (hacker1.length > hacker2.length) {
        return `The driver has the longest name, it has ${hacker1.length} characters`;
    }
    else if (hacker1.length < hacker2.length) {
        return `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
    }
    else {
        return `Wow, you both have equally long names, ${hacker1.length} characters!`;
    }
}

console.log(getLongerName());

// Iteration 3: Loops

let arr = [];
for (let i = 0; i < hacker1.length; i++) {
    arr.push(hacker1[i].toUpperCase());
}

console.log(arr.join(" "));

let arrR = [];
for (let i = hacker1.length - 1; i >= 0; i--) {
    arrR.push(hacker1[i]);
}

console.log(arrR.join(''));