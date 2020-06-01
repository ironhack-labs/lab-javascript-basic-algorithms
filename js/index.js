// Iteration 1: Names and Input

let hacker1 = 'Tom';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Eliott';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let length1 = hacker1.length;
let length2 = hacker2.length;

if (length1 > length2) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}

else if (length1 < length2) 

{
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
}

else {
  
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);

}

// Iteration 3: Loops

let name1Upper = hacker1.toUpperCase();
console.log(name1Upper);

let name2Upper = hacker2.toUpperCase();
console.log(name2Upper);

let spaceName1 = name1Upper.split('').join(' '); 
console.log(spaceName1);

let spaceName2 = name2Upper.split('').join(' '); 
console.log(spaceName2);

let sliceName1 = hacker1.slice(0,4);
console.log(sliceName1);

let sliceName2 = hacker2.slice(0,4);
console.log(sliceName1);

for 
(i = hacker1.length; i >= 0; i--) {
console.log(name1Upper[i]);
}

let stringHacker1 = "";
for 
(i = hacker1.length - 1; i >= 0; i--) {
stringHacker1 += sliceName1[i];
}

console.log(stringHacker1);


for (i = 0; i <= hacker1.length; i++) {
let compare = hacker1[i].localeCompare(hacker2[i]);
switch(compare) {
  case 1: 
  console.log("Yo, the navigator goes first definitely.");
  i = hacker1.length +1;
      break;
 case -1:
   console.log("The driver's name goes first.");
  i = hacker1.length +1;
  default:
   console.log("What?! You both have the same name?");
}
}
