// Iteration 1: Names and Input

const hacker1 = 'Johnny Hackerman';
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Louie Robbero';
console.log(`The navigator's name is ${hacker2}.`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longer name. It has ${hacker1.length + 1} characters.`)
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name. It has ${hacker2.length + 1} characters.`)
} else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length + 1 || hacker2.length + 1} characters.`)
};


// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    console.log(`${hacker1[i].toUpperCase()}`)
};

for (value of hacker1) {
    console.log(value.toUpperCase())
}

for (value of hacker1) {
    console.log(hacker1.split('').reverse().join(''))
}


console.log(hacker2.localeCompare(hacker1))