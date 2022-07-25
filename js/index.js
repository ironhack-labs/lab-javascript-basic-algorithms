// Iteration 1: Names and Input

let hacker1 = 'Janna';
let hacker2 = 'Janna';

console.log(hacker1);
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

let newDriverName = '';
let newNavigatorName = '';

for (let i = 0; i < hacker1.length; i++) {
        newDriverName += hacker1[i].toUpperCase() + ' ';
}

console.log(newDriverName);

for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);

for (let i = 0; i < hacker1.length; i++) {
    for (let j = 0; j < hacker2.length; j++) {
        if (hacker1[i] > hacker2[j]) {
            console.log(`${hacker2} goes first`);
            break;
        } else if (hacker1[i] < hacker2[j]) {
            console.log(`${hacker1} goes first definitely`);
            break;
        } else if (hacker1[i] === hacker2[j]) {
            console.log(`What?! You both have the same?`);
            break;
        } else {
            break;
        }
    }
    break;
}

/* if (hacker1[i] > hacker2[j]) {
    console.log(`${hacker2} goes first`);
    break;
} else if (hacker1[i] < hacker2[j]) {
    console.log(`${hacker1} goes first definitely`);
    break;
} else {
    console.log(`What?! You both have the same?`);
    break;
}
*/