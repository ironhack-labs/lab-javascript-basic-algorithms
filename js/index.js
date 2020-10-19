// Iteration 1

const hacker1 = 'Sabine';
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Katie';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2

if (hacker1.length > hacker2.length){
  console.log(`the driver has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length < hacker2.length) {
  console.log(`it seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`wow you both have equaly long names ${hacker1.length} characters`)
} 

// Iteration 3


let driverUpperCase = '';

for (let i = 0; i < hacker1.length; i++){

driverUpperCase += hacker1[i].toUpperCase() + ' '
           
  }
console.log(driverUpperCase);


let navigatorBackwards = '';

for (let i =hacker2.length -1; i >= 0; i--){
  navigatorBackwards += hacker2[i];
}

console.log(navigatorBackwards)
 
if (hacker1[0] > hacker2[0]){
  console.log(`The driver's name goes first`)
} else if(hacker1[0] < hacker2[0]) {
  console.log(`Yo the navigator's goes first definitely`) 
} else {
  console.log(`What?! you both have the same name?`)
}



