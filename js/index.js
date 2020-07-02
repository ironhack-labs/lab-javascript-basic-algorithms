console.log("I'm ready!");
// Iteration 1: Names and Input
const driver = 'John'
console.log(`The driver's name is ${driver}.`);
const navigator = 'Joe'
console.log(`The navigator's name is ${navigator}.`);

// Iteration 2: Conditionals
if ((driver.length) < (navigator.length))
{
  console.log(`It seems that the navigator has the longest name, it has  ${navigator.length} characters.`);
}
else if ((driver.length) > (navigator.length))
{
  console.log(`The driver has the longest name, it has ${driver.length} characters.`);
}
else {
console.log(`Wow, you both have equally long names, ${driver.length} characters!`);
}

// Iteration 3: Loops
let driverCapitalized = driver.toUpperCase();
console.log(driverCapitalized.split(""));

let driverFinal = ''
for (let i = 0; i < driverCapitalized.length; i+=1){ 
  driverFinal += driverCapitalized.charAt(i) + ' ';
}
console.log(driverFinal);

//Iteration 3.2: Loops
console.log(navigator.split("").reverse());


let naviFinal = ''
for (let i = navigator.length -1; i >=0;i--){
  naviFinal += navigator.charAt(i)+ ' ';
}
console.log(naviFinal);


//Iteration 3.3: Loops

if (driver.localeCompare(navigator)===1){
  console.log(`Yo, the navigator goes first definitely.`);
}
else if (driver.localeCompare(navigator)===-1){
  console.log(`The driver's name goes first.`);
}
else if (driver.localeCompare(navigator)=== 0)
{ 
  console.log(`What?! You both have the same name?`);
}