// Iteration 1: Names and Input
let hacker1 = "Noemi";
console.log("The driver's name is "+ hacker1);
console.log('The driver\'s name is ' +hacker1);
console.log


let hacker2 = "Marie";
console.log("The navigator's name is " + hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}characters`)
  }else if
    (hacker1.length < hacker2.length){
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }else{
      console.log(`Wow, you both have equally long names, ${hacker2.length} characters`)
  }

// Iteration 3: Loops
//Iteration 3.1:

let value = "John";

let chars = value.split('');

let newValue = "" ;

for(let i = 0; i < value.length;i++) {
  newValue += chars[i].toUpperCase() + ' ';
}

console.log(newValue);


//Iteration 3.2:

let startingValue = "";
for (let i = value.length-1; i >= 0; i--) {
  startingValue += value[i]
}

console.log(startingValue);



//Iteration 3.3:

const oneUpper = hacker1.toUpperCase();
const twoUpper = hacker2.toUpperCase();

let compared = oneUpper.localeCompare(twoUpper)

if(compared < 0) {
  console.log(`The driver's name goes first`)
  } else if (compared > 0 ) {
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("SAY WHAAAAT?")
  }