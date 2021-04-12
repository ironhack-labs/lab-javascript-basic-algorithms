console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1 = "DriverName"
var nhacker1 = hacker1.length
console.log(`"The driver name is ${hacker1}"`);
let hacker2 = "NavigatorsName"
var nhacker2 = hacker2.length 
console.log(`"The navigator name is ${hacker2}"`);
console.log(`${nhacker2}`);
// Iteration 2: Conditionals
if(nhacker1 > nhacker2){ // AL SER FALSO, NO SE EJECUTA LO DE LAS LLAVES. SI ES VERDADERO SÍ SE EJECUTA
    console.log(`"The driver has the longest name, it has ${nhacker1}"`);
} else if(nhacker1 < nhacker2){
    console.log(`"The navigator has the longest name, it has ${nhacker2}"`);
}else {
    console.log(`"Wow, you both have equally long names, ${nhacker1} characters!"`);
}
console.log('${hacker1}'.localeCompare('${hacker2}')); // -1
// Iteration 3: Loops