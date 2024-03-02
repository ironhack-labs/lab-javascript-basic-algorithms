// Iteration 1: Names and Input
const driver = "Adrian";
const navigator = "Michael";

console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);

// Iteration 2: Conditionals
if (driver.length > navigator.length){
    console.log(`The driver has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length){
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`);
} else if(driver.length === navigator.length){
    console.log(`Wow, you both have equally long names, ${navigator} characters!.`);
}

// Iteration 3: Loops
