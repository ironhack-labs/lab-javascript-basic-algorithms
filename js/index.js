// Iteration 1: Names and Input

const driver = prompt("What's your name?");
const navigator = prompt("What's your name?");


console.log(`The drivers name is ${driver}`);

console.log(`The navigators name is ${navigator}`);


// Iteration 2: Conditionals

if (driver.length > navigator.length) {
    console.log(`The driver has the longest name it has ${driver.length} characters`)
} else if (driver.length < navigator.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters`)
}
else {
    console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}
// Iteration 3: Loops
console.log(driver.toUpperCase().split("").join(" "))
console.log(driver.split("").reverse().join(""))

// BONUS
if (driver < navigator) {
    console.log('The drivers name goes first')
}
if (driver > navigator) {
    console.log('Yo, the navigator goes first definitely')
}
if (driver === navigator) {
    console.log('What?! You both have the same name?')
}