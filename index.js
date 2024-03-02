// Iteration 1: Names and Input
const driver = "adrian";
const navigator = "Michael";
let empty = " ";
let reversed= "";

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

for (let i = 0; i < driver.length; i++){
empty += driver.toUpperCase()[i] + " ";
if (empty.length === driver.length + 7){
    console.log(empty);
}

}
 
   
for (let i = driver.length-1 ; i >= 0; i--) {
  let single= driver[i];
  reversed += single;

}  console.log(reversed);
    
const driverFirstLetter = driver[0].toLowerCase();
const navigatorFirstLetter = navigator[0].toLowerCase();


if (driverFirstLetter < navigatorFirstLetter) {
    console.log("The driver's name goes first.");
} else if (driverFirstLetter > navigatorFirstLetter) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("Both names start with the same letter.");
}
 


