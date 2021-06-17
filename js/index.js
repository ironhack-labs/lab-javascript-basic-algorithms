// =======> Iteration 1: Names and Input <===========
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Michael'

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The drivers name is  ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Kyle"

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigators name is ${hacker2}`)







//=========> Iteration 2: Conditionals <<=========

// 2.1. Depending on which name is longer, print:
//- The driver has the longest name, it has XX characters. or
//- It seems that the navigator has the longest name, it has XX characters. or
//- Wow, you both have equally long names, XX characters!.

if (hacker1.length > hacker2.length) {

    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if (hacker1.length < hacker2.length) {

    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else console.log(`Wow,you both have equally long names, ${hacker2.length} characters`)












//============= >Iteration 3: Loops <<===========

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driverName = '';

for (let i = 0; i < hacker1.length; i++) {
    driverName += hacker1[i].toUpperCase();

    if (i !== hacker1.length - 1) driverName += " "
}

console.log(`driverName: ${driverName}`);

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

let driverNameReverse = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
    driverNameReverse += hacker1[i];

    if (i !== hacker1.length - 1) driverNameReverse += ""
}

console.log(`driverNameReverse: ${driverNameReverse}`);




//3.3 Depending on the lexicographic order of the strings, print:

if (hacker1 < hacker2) console.log('The drivers name goes first');
else if (hacker1 > hacker2) console.log(' Yo, the navigator goes first');
else console.log(' Yo, You both have same names');

//- The driver's name goes first.
//- Yo, the navigator goes first definitely.
//- What?! You both have the same name?