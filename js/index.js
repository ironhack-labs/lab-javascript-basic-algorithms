//1.

let hacker1 = "Bob";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Dirk";
console.log(`The navigator's name is ${hacker2}`);



if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  
} else if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
  
} else if (hacker1.length < hacker2.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters!`)
}

//2.

let driverCapitalized = "";
let navigatorReversed = ""; 

for (let i = 0; i < hacker1.length; i++) {
    driverCapitalized += hacker1[i].toUpperCase() + " "
  }
  console.log(driverCapitalized);

for (let y = hacker2.length - 1; y > 0 - 1; y--) {
  navigatorReversed += hacker2[y];
}
console.log(navigatorReversed);

//3.

const lexicOrder = hacker1.localeCompare(hacker2)
 if (lexicOrder === 1) {
   console.log(`The driver's name goes first.`)
 } else if (lexicOrder === -1) {
   console.log(`The driver's name goes first.`)
 } else {
   console.log (`What?! You both have the same name?`)
 }