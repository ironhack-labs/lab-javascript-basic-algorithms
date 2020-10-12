// Iteration 1: Names and Input
//1.1 
let hacker1 = "Martin";
//1.2
console.log(`The driver's name is ${hacker1}.`);
//1.3
let hacker2 = "Joaquim"; 
//1.4
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

// 3.1 
let newHacker1 = hacker1.split("").toUpperCase();
console.log(newHacker1); 



//3.2
let newHacker2 = hacker2.reverse();
console.log(newHacker2);

//3.3

if(hacker1.toUpperCase().localeCompare(hacker2.toUpperCase()) > 1) {
  console.log('hacker 1 is bigger');
} else if(hacker1.toUpperCase().localeCompare(hacker2.toUpperCase()) < 0) {
    console.log('hacker 2 is bigger');
} else {
    console.log('they are the same');
}
