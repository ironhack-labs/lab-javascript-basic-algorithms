// // Iteration 1: Names and Input
const hacker1 = 'justin';
const hacker2 = 'batuhan';

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// // Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// // Iteration 3: Loops
let driver = 'justin';
let capitalised = driver.toUpperCase();
let split = capitalised.split("").join(" ");

console.log(split);


let backWards = '';

for(let i = driver.length - 1; i >= 0; i--){
    if(i === 0){
       backWards += driver[i].toUpperCase()
    }else{

        backWards += driver[i];
    }
}

// backWards = driver.split("").reverse().join("") 

console.log(backWards);


if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log(`Yo, the navigator goes first, definitely.`);
} else {
    console.log(`What?! You both have the same name?`);
}