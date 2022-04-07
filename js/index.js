
console.log("i am fucking ready")

// Iteration 1: Names and Input

let hacker1 = "Baris"  // driver

console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Baris"  // navigator

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

let lengthHacker1 = hacker1.length;
let lengthHacker2 = hacker2.length;


if (lengthHacker1>lengthHacker2){
    console.log(`The driver has the longest name, it has ${lengthHacker1} characters.`)
} else if(lengthHacker1<lengthHacker2){
console.log(`It seems that the navigator has the longest name, it has ${lengthHacker2} characters.`)
} else{
    console.log(`Wow, you both have equally long names, ${lengthHacker2} characters!`)
}


// Iteration 3: Loops

//3.1

let driver = (hacker1.toUpperCase()).split("");

let resultado =[];

for (i=0;i<driver.length;i++){
  
let texto = "";
  
  if(i <driver.length-1){
  texto = (`${driver[i]}`+ " ")
  resultado.push(texto);}
  
   else {
    resultado.push(driver[i])
  }
}

let resultadoFinal = resultado.join("")
console.log(resultadoFinal);

//3.2

let arrayNavigator = hacker2.split("")
let reverseArrayNavigator = arrayNavigator.reverse("");
let reverseNavigator = reverseArrayNavigator.join("")
console.log(reverseNavigator);

//3.3

if(hacker1 < hacker2){
console.log("The driver's name goes first.")
} else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely.")}
    else {
console.log("What?! You both have the same name?")
    }

