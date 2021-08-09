// Iteration 1: Names and Input
const hacker1 = "Paul"
console.log("The navigator's name is " + hacker1);

const hacker2 = "Keoxx"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }
  

// Iteration 3: Loops
let newDriver = "";


for (let i = 0 ; i < hacker1.length;i++){
    if(i < hacker1.length - 1){
        newDriver += hacker1[i].toUpperCase() + " ";
    }else{
        newDriver += hacker1[i].toUpperCase();
    }
}
console.log(newDriver);


var newNavigatorName = "";

for (var i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorName += hacker2[i];
}

console.log(newNavigatorName);

