// Iteration 1: Names and Input
const hacker1 = 'Marlena';
console.log(`The driver's name is ${hacker1}`);
const hacker2 = 'Gilad';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let hackerType = 'driver';
let hackerLength = hacker1.length;
if (hacker1.length<hacker2.length) {
  hackerType = 'navigator';
  hackerLength = hacker2.length;
  console.log(`The ${hackerType} has the longest name, it has ${hackerLength} characters`);
} else if (hacker1.length==hacker2.length){
  console.log(`Wow, you both have equally long names, ${hackerLength} characters`);
}

// Iteration 3: Loops
let driverSep=hacker1[0].toUpperCase();
for (let i=1; i<hacker1.length;i++){
    driverSep += ' ' + hacker1[i].toUpperCase();
}
console.log(driverSep);
let navSep='';
for (let i=(hacker2.length-1); i>=0;i--){
    navSep += hacker1[i];
}
console.log(navSep);

if (hacker1>hacker2){
    console.log(`The driver's name goes first`);
} else if (hacker1<hacker2){
    console.log(`Yo, the navigator first definitely`);
}
    else {
        console.log(`What? We both have the same name!`);
    }

