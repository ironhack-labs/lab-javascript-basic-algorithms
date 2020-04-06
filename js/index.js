// Iteration 1: Names and Input
let driver = "Marcela";
let navigator = "Alba";

console.log(`The driver's name is ${driver}.`);
console.log(`The navigator's name is ${navigator}.`);

// Iteration 2: Conditionals
if (driver.length > navigator.length) {
    console.log(`${driver} has the longest name, with ${driver.length} characters,`);
  } else if (navigator.length > driver.length) {
    console.log(`${navigator} has the longest name, with ${navigator.length} characters,`);
  } else {
    console.log(`Wow, you both have equally long names, with ${driver.length} characters,`);
  }

// Iteration 3: Loops
let newArr = driver.split("");
let arrLow = navigator.split("");

for (i = 0; i < newArr.length; i++){
   newArr[i] = newArr[i].toUpperCase();  
}
console.log(newArr.join(" "));
console.log(arrLow.reverse().join(""));

let order = driver.localeCompare(navigator);

if (order == 1) {
    console.log(`${navigator}'s name goes first.`)
}
else if (order == 2) {
    console.log(`${driver}'s name goes first.`)
}
else {
    console.log(`What?! You both have the same name?`)
}