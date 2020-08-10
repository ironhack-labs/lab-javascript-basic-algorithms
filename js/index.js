// Iteration 1: Names and Input
let hacker1 = 'Roxanne'; 
console.log(`The drivers name is ${hacker1}`); 

let hacker2 = 'Sophia';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters`);
}
else if (hacker1.length < hacker2.length) {
console.log (`It seems that the navigator has the longest name. It has ${hacker2.length} characters`);
}
else {
    console.log(`Wow you both have equally long names, ${hacker1.length}characters`);
}


// Iteration 3: Loops
//upperCase
upperCased = hacker1.toUpperCase();
console.log(upperCased);
let space='';

for (let i = 0 ; i <= upperCased.length; i++) {
    space+= upperCased.charAt(i) + ' ';
}
console.log(space);

//reversed order
let reversedName = '';

for (let i = hacker2.length-1; i>=0; i--) {
    reversedName += hacker2[i];
}

console.log(reversedName);

//Lexicographic order


if (hacker1.localeCompare(hacker2) == -1) {
    console.log(`The drivers's name goes first`);
}
else if (hacker1.localeCompare(hacker2) == 1) {
    console.log('Yo, the navegator goes first definitely');
}
else {
    console.log('What?! You both have the same name');
}



