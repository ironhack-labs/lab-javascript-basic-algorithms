// Iteration 1: Names and Input

let hacker1 = 'Gabriel';
console.log("The driver's name is " + hacker1);

let hacker2 = 'Vinicius';
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let driver = 'Gabriel';
let navigator = 'Vinicius';

if (driver.length > navigator.length) {
  console.log(`The ${driver} has the longest name, it has ${driver.length} characters.`);
} else if (driver.length < navigator.length) {
  console.log(`It seems that the ${navigator} has the longest name, it has ${navigator.length} characters.`);
} else {
  console.log(`Wow, you both have equally long names, ${navigator.length} characters!`);
}

let arr = [driver , navigator];
for(i=0; i < arr.length -1; i++){
if(driver.localeCompare(navigator) > 0){
console.log("The driver's name goes first.");
}else if(driver.localeCompare(navigator) < 0){
console.log('Yo, the navigator goes first definitely.');
}else {
console.log("What?! You both have the same name?");
}
} 


// Iteration 3: Loops

let name = 'Vincius'
let result = name.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(result);

function reverseString(name){
    return name.split("").reverse().join("");
}
reverseString('Vinicius');
