// Iteration 1: Names and Input
const hacker1 ='Ignacio';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Jennifer';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
      } else if (hacker1.length > hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
      } else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
      }


// Iteration 3: Loops
//3.1
const driverName = hacker1;
let result = '';
for(let i=0; i < driverName.length; i++){
  result += driverName[i].toUpperCase();
  if (i < driverName.length-1) {
    result += '';
  }
}


console.log(result);

//3.2
const invertir = hacker1.split('').reverse().join('');
console.log(invertir);

//3.3

const driverName2 = prompt('Enter the driver name  ');
const navigaName = prompt('Enter the navigator names  ');

if(hacker1 < hacker2){
  console.log('The driver name goes first.');
 } else if (driverName > navigaName) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}   

