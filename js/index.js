// Iteration 1: Names and Input
let hacker1 = "Rick";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Morty";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker2.length == hacker1.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
    }

// Iteration 3: Loops
let driverCaps = '';
for (let i = 0; i < hacker1.length; i++) {
    
    driverCaps += hacker1.charAt(i).toUpperCase() + ' ';
    //console.log(hacker1.charAt(i));
}
console.log(driverCaps);

let navigatorCaps = '';
for (let i = hacker2.length; i >= 0; i--) {
    
    navigatorCaps += hacker2.charAt(i);
    //console.log(hacker2.charAt(i));
}
console.log(navigatorCaps);

if (hacker1.localeCompare(hacker2) == -1){
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (hacker1.localeCompare(hacker2) == 0) {
  console.log(`What?! You both have the same name?`);
}