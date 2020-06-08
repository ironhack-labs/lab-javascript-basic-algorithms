// Iteration 1: Names and Input
let hacker1 = 'John';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Mike';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator ${hacker1} has the longest name,, it has ${hacker2.length} characters`);
} else {
    console.log('Wow, you both have equally long names, ${hacker2.length} characters!');
}

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() + " ");
}
for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
}
let same = 0
for (let i = 0; i < hacker1.length; i++) {

    if (hacker1[i] > hacker2[i]) {
        console.log('The driver name goes first');
        break;
    }
    if (hacker1[i] < hacker2[i]) {
        console.log('Yo, the navigator goes first definitely.');
        break;
    } else {
        same++
    }
}
if (same == hacker1.length) console.log('What?! You both have the same name?');

function palindrome(str) {
    let str1 = str.toLowerCase().replace(/[\W_]/g, '');
    let str2 = str1.split('').reverse().join('');
    if (str1 === str2) console.log('The variable is a Palindrome');
    else console.log("The variable is not a Palindrome");
}