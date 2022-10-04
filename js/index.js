// Iteration 1: Names and Input
//1.1
let hacker1 = "Anonymous"
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
let hacker2 = "Guacamaya"
//1.4
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
//2.1
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}characters.`);   
} else {
    console.log(`Wow, you both have equally long names, XX characters!`);
}


// Iteration 3: Loops
//3.1
let result = "";
for (const value of hacker1) {
    result = result + " " + value.toUpperCase();
}
console.log(result);

//3.2
for (let i = hacker2.length - 1; i >= 0; i--){
    console.log(hacker2[i]);
}

//3.3

