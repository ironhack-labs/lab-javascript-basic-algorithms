// Iteration 1: Names and Input

let hacker1 = "Leonidas";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "lulio C";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let name1Length = hacker1.length;
let name2Length = hacker2.length;
if(name1Length > name2Length){
    console.log(`The driver has the longest name, it has ${name1Length} characters.`)
} else if (name1Length < name2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${name2Length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${name2Length} characters!`)
};


// Iteration 3: Loops

    
let array = [];
let array2= [];

for (i=0; i < hacker1.length; i++) {
    array.push(hacker1[i])
}

for (i=0; i < hacker2.length; i++) {
    array2.push(hacker2[i])
}

const newName = array;
const newName2 = array2;
const isCapital = newName.join(' ').toUpperCase();

const reverse = (newName2.reverse()).join('')


console.log(isCapital);
console.log(reverse);


/*const sorted = [ hacker1, hacker2].sort()

if(sorted[0] == hacker1) {
    console.log(`The driver's name goes first.`)
} else if (sorted[0] == hacker2 && hacker1 != hacker2) {
    console.log(`Yo, the navigator goes first, definitely.`)
} else if (hacker2===hacker1) {
    console.log(`What?! You both have the same name?`)
} else {
    console.log("")
}*/

if (hacker1 < hacker2){
    console.log(`The driver's name goes first.`)}
    
    else if (hacker2 < hacker1) {
    console.log(`Yo, the navigator goes first, definitely.`)}
    else {
    console.log(`What?! You both have the same name?`)
    }


