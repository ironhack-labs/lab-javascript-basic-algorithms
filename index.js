// Iteration 1: Names and Input
let hacker1 = "Erik";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Davinia";
console.log(`'The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
};
// Iteration 3: Loops
let driverUpper = "";
for(let i = 0; i < hacker1.length; i++) {
  driverUpper+=hacker1[i] + " ";
}
console.log(driverUpper.toUpperCase().trimEnd());
let navigatorReverse = "";
for(let i = hacker2.length -1; i >= 0; i--) {
  navigatorReverse+=hacker2[i];
}
console.log(navigatorReverse);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();
if(hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?");
}
// Bonus
let longText = "Lorem Ipsum is simply dummy text of the printing and typesetetetetetetting industry. Lorem Ipsum has been the industry's standard dummy text ever et sience the 1500s, when an unknown printer took a galley of type and scramb";
let count= 0;
for(let i =0; i < longText.length; i++) {
  if(longText[i] === "e" && longText[i + 1] === "t") {
     count++;
     }
}
console.log(count);




















