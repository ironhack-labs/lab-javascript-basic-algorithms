// Iteration 1: Names and Input
const hacker1 = 'Carina';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Someone';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function biggerName(hacker1, hacker2) {
    if (hacker1.length > hacker2.length) {
        return `${hacker1} is bigger than ${hacker2} because it has ${hacker1.length} characters`;
    } else if (hacker2.length > hacker1.length) {
        return `${hacker2} is bigger than ${hacker1} because it has ${hacker2.length} characters`;
    } else hacker1.length === hacker2.length;
    {
        return `both have equally long names, with ${
            hacker1.length || hacker2.length
        } characters!`;
    }
}
console.log(biggerName(hacker1, hacker2));

// Iteration 3: Loops
//3.1:
let spaceBetween = ' ';
for (let i = 0; i < hacker1.length; i++) {
    spaceBetween += hacker1[i].toUpperCase() + ' ';
}
console.log(spaceBetween);
//3.2:
let reverseNavigator = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseNavigator += hacker2[i];
}

console.log(reverseNavigator);
//3.3:
let firstName;

for (let i = 0; i < Math.min(hacker1.length, hacker2.length); i++) {
    if (hacker1[i] < hacker2[i]) {
        firstName = "The driver's name goes first.";
        break;
    } else if (hacker1[i] > hacker2[i]) {
        firstName = 'Yo, the navigator goes first, definitely';
        break;
    } else firstName === undefined;
    firstName = 'What?! You both have the same name?';
}
console.log(firstName);
