// Iteration 1: Names and Input
const hacker1='Hiler';
console.log("The driver's name is" + ' ' + hacker1);

const hacker2='Eli';
console.log("The navigator's name is" + ' ' + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  
  else if (hacker1.length < hacker2.length) {
    console.log('It seems that the navigator has the longest name, it has ${hacker2.length} characters.');
  }
  
  else if (hacker1.length === hacker2.length) {console.log('Wow, you both have equally long names!');
  }

// Iteration 3: Loops
let newDriver1 = "";
for(let i = 0; i < hacker1.length; i++){
  newDriver1 += hacker1[i].toUpperCase() + " ";
}
console.log(newDriver1.trim());

let newNavigator1 = "";
for (var i = hacker2.length - 1; i >= 0; i--){
 newNavigator1 += hacker2[i];
}
console.log(newNavigator1);

if (hacker1 > hacker2) {
  console.log(`Hiler goes first.`);
}

else if (hacker1 < hacker2) {
  console.log(`Yo, Eli goes first definitely.`);
}

else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}
