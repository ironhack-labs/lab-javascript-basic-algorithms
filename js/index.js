// Iteration 1, 2, 3.1, 3.2 and start of 3.3 done in class with Mahmut. Bonus done the next day alone. 

// Iteration 1: Names and Input
const hacker1 = "Marcella";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Mahmut";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
/* 2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. */

const driverNameLength = hacker1.length;
const navigatorNameLength = hacker2.length;

 if(driverNameLength > navigatorNameLength) {
   console.log( `The driver has the longest name, it has ${driverNameLength} characters`)
 } else if (navigatorNameLength > driverNameLength) {
   console.log(`It seems that the navigator has the longest name, it has ${navigatorNameLength} characters.`)
 } else {
   console.log(`Wow, you both have equally long names, ${driverNameLength} characters!.`)
 }


// Iteration 3: Loops
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverName = "";
for(let i = 0; i < hacker1.length; i++){
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let navigatorName = "";
for (let i = hacker2.length-1 ; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

// First solution 
if(hacker1.localeCompare(hacker2) === -1 ){
 
  console.log(hacker1.localeCompare(hacker2));
  console.log(hacker2.localeCompare(hacker1));

  console.log(`The driver's name goes first.` )
} else if (hacker1.localeCompare(hacker2) === 1 ) {
  console.log(`Yo, the navigator goes first definitely.` )
} else {
  console.log(`What?! You both have the same name?`)
}

// second solution (practicing with the switch statement)
switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log(`The driver's name goes first.` )
    break
  case 1:
    console.log(`Yo, the navigator goes first definitely.` )
    break
  case 0:
    console.log(`What?! You both have the same name?`)
    break;
}
