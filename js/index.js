console.log("I'm ready!");


// Iteration 1: Names and Input
const hacker1 = "Tiago";
const driver = hacker1;
const hacker2 = "Victor";
const Navigator = hacker2;

//console.log(`The Navigator's name is ${hacker2}`);


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
console.log(result.toUpperCase());

let result2 = "";
for (let i = Navigator.length - 1; i >= 0; i--){
result2 = result2 + Navigator[i] + " ";
}
console.log(result2.toUpperCase())

if (driver<Navigator) {
    console.log(`The driver's name goes first`);
}   
    else if (driver>Navigator) {
    console.log(`Yo, the navigator goes first definitely`);
    }   
    else {
    console.log(`Yo, the navigator goes first definitely`);
    
}