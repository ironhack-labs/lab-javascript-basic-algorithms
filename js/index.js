console.log("I'm ready!");


// Iteration 1: Names and Input
const hacker1 = "Tiago";
let driver = hacker1;
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Victor";
console.log(`The Navigator's name is ${hacker2}`);


if (hacker1.length<hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker2.length} characters`);
}   
    else if (hacker1.length>hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters`);
    }   
    else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let result = "";
for (let i = 0; i < driver.length; i++){
result = result + driver[i] + " ";
}
console.log(result.toUpperCase())