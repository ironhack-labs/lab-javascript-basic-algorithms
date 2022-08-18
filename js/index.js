// Iteration 1: Names and Input

let hacker1 = 'Andrew Hackerman';
console.log(`The driver's name is ${hacker1}.`);

let hacker2 = 'Chris Robbero';
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

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

console.log(hacker2)


if (hacker1.localeCompare(hacker2)) {
    console.log(`The driver's name goes first`)
} else if (hacker2.localeCompare(hacker1)) {
    console.log(`Yo, the navigators name goes first definetely.`)
} else {
    console.log('What?! Yoe u both have the same name?')
}