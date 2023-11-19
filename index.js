// Iteration 1: Names and Input
let hacker1 = "Sandra"
console.log('The driver´s name is', hacker1)
let hacker2 = "Byron"
console.log('The navegator´s name is', hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log('The driver has the longest name, it has', hacker1.length, 'characters')
}

else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navegator has the longest name, it has', hacker2.length, 'characters')
}

else if (hacker1.length = hacker2.lenght) {
    console.log('Wow, you both have equally long names,', hacker1.lenght, 'characters')
}

// Iteration 3: Loops

let uppercase = '';

for (let i = 0; i < hacker1.length; i++) {
    const char = hacker1[i].toUpperCase();
    uppercase += char + ' ';
}
console.log(uppercase);

let wordReversed = '';
for (let i = hacker1.length - 1; i >= 0; i--) {
    const char = hacker1[i];
    wordReversed += char;
}
console.log(wordReversed);

