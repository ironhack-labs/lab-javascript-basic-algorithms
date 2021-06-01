// Iteration 1: Names and Input

1.1
const hacker1='hiler';

1.2
console.log("The driver's name is "  + hacker1);

1.3
const hacker2='Eli';

1.4
console.log("The driver's name is "  + hacker2);

// Iteration 2: Conditionals

2.1
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

3.1
let newDriver1 = "";
for(let i =0; i<hacker1.length; i++){
  newDriver1 += hacker1[i].toUpperCase() + " ";
}
console.log(newDriver1.trim());

3.2
let newNavigator1 ="";
for (var i = hacker2.length - 1; i >= 0; i--){
  newNavigator1 += hacker2[i];
}
console.log(newNavigator1);

3.3
if (hacker1 > hacker2) {
  console.log(`Hiler goes first.`);
}
else if (hacker1 < hacker2) {
  console.log(`Yo, Eli goes first definitely.`);
}
else if (hacker1 === hacker2) {
  console.log(`What?! You both have the same name?`);
}