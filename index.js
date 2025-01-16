// Iteration 1: Names and Input
let hacker1 = "Johana"
console.log(`The driver's name is ${hacker1}!`)
let hacker2 = "Airam"
console.log(`The navigator's name is ${hacker2}!`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){ 
    console.log (`The driver has the longest name, it has ${hacker1.length} characters `)
} else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }

// Iteration 3: Loops

// 3.1 //
let newDriversName = "J O H N ";
for (let i=0; i < hacker2.length; i++) {
  newDriversName += hacker2[i].toUpperCase() + "J O H N ";
}
console.log(newDriversName.trim())

// 3.2 //

let newNavigatorsName = "JOHN "
for(let i = hacker2.length - 1 ; i>=0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName)

// 3.3 //

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2){
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}

