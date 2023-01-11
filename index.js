// Iteration 1: Names and Input

const hacker1 = "John";
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = "Paul";
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hacker1.length === hacker2.length) {
    const nameLength = hacker1.length;
    console.log(`Wow, you both have equally long names, ${nameLength} characters!`);
} else if (hacker1.length > hacker2.length) {
    const nameLength = hacker1.length;
    console.log(`The driver has the longest name, it has ${nameLength} characters.`)
} else {
    const nameLength = hacker2.length;
    console.log(`It seems that the navigator has the longest name, it has ${nameLength} characters.`);
};

// Iteration 3: Loops

// 3.1
let uCaseDriversMap = [];
for (let i = 0; i < hacker1.length; i++) {
    if (i === hacker1.length - 1) {
        uCaseDriversMap.push(hacker1.toUpperCase()[i]);
        break;
    };
    uCaseDriversMap.push(hacker1.toUpperCase()[i]);
    uCaseDriversMap.push(' ');
};

console.log(uCaseDriversMap.join(''));

// 3.2
let navsMap = [];
for (let i = 0; i < hacker2.length; i++) {
    navsMap.unshift(hacker2[i]);
}

console.log(navsMap.join(''));

// 3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
}else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.");
}else{
    console.log("What?! You both have the same name?");
};

