// Iteration 1: Names and Input
let hacker1 = 'Pedro';
let hacker2 = 'Peter';

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals

function longerName() {
    if (hacker1.length == hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    } else if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`)
    } else {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }
}

longerName();

// Iteration 3: Loops

// 3.1 //

function sepName() {
    let name = hacker1.toLocaleUpperCase();
    let resName = name.split('').join(' ');
    console.log(resName);
}

sepName();

// 3.2 //

function backName() {
    let name = hacker2;
    let newName = name.split('').reverse().join('');
    console.log(newName);
}
backName();

// 3.3 //

function compare() {
    var game = hacker1.localeCompare(hacker2);
    if (game === -1) {
        console.log("The driver's name goes first.")
    } else if (game === 1) {
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
}
compare();