// Iteration 1: Names and Input
let hacker1 = "Carlos";
let hacker2 = "Cristhian";

let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1>length2){
  console.log (`The driver has the longest name, it has ${length1} characters`);
}else if (length2>length1){
  console.log(`It seems that the navigator has the longest name, it has ${length2} characters.`)
}else if (length1===length2){
  console.log(`Wow, you both have equally long names, ${length1} characters!`);
};
// Iteration 2: Conditionals

let driver = hacker1.toUpperCase();
let driverSeparated = driver.split('');
driver = driverSeparated;

let navigator = hacker2.split('');
let navigatorReverse = navigator.reverse();
navigator = navigatorReverse.join('');

console.log(driver[0]+' '+driver[1]+' '+driver[2]+' '+driver[3]+' '+driver[4]+' '+driver[5]);
console.log(`${navigator}`);

// Iteration 3: Loops

let primero = hacker1.localeCompare(hacker2);

if (primero===-1){
  console.log("The driver's name goes first.");
}else if (primero===1){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log('What?! You both have the same name?');
};
