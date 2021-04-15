// Iteration 1: Names and Input
let hacker1= "Ludwig";
let hacker2="Melisa";
console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
 else {
console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
 }
//iteration 2 ternary operator
 hacker1.length > hacker2.length ? console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) : (hacker2.length > hacker1.length ?console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) : console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`));
//Iteration 3 Loops
//Iteration 3.1 Capitals
let red="";
for (let i=0;i<hacker1.length;i++) {
  red+=(hacker1[i]+" ");
  console.log(hacker1[i]);
}
console.log(red.toUpperCase());
//Iteration 3.2 Reverse
let blue="";
for (let i=hacker2.length-1;i>=0;i--) {
  blue+=(hacker2[i]);
  console.log(hacker2[i]);
}
console.log(blue);
//Iteration 3.3//
const alphaList="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let hacker1Score="";
let hacker2Score="";
for (let j = 0; j < hacker1.toUpperCase().length; j ++) {
  for (let i = 0; i < alphaList.length; i ++) {
    if (hacker1[j].toUpperCase() === alphaList[i]) {
      hacker1Score += (i + ",");
      //console.log(`${hacker1[j]} is on ${i} of the list`)
    }
  }
}
//console.log(hacker1Score);
for (let k = 0; k < hacker2.toUpperCase().length; k ++) {
  for (let i = 0; i < alphaList.length; i ++) {
    if (hacker2[k].toUpperCase() === alphaList[i]) {
      hacker2Score += (i + ",");
     // console.log(`${hacker2[k]} is on ${i} of the list`)
    }
  }
}
//console.log(hacker2Score);
if (hacker1Score > hacker2Score) {
  console.log("The driver name comes first")
} else if (hacker1Score < hacker2Score) {
  console.log("The navigator name comes first")
} else {
  console.log("You both have the same nameeee")
}