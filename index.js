// Iteration 1: Names and Input


let hacker1 = "John"
console.log(`The driver's name is ${hacker1}`);


let hacker2 = "Maria"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if ( hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longst name. It has ${hacker2.length} characters`)
}
else if (hacker1.length === hacker2.length) {
  console.log('Wow, you both have equally long names, XX characters!')
}


/* Iteration 3: Loops*/

let newDriverName = "";
for (let i=0; i < hacker1.length; i++) {
newDriverName += hacker1[i].toUpperCase () + " ";
}

console.log(newDriverName) ;

let newNavigatorName = "";
for (let i=hacker2.length -1; i>=0; i--) {
  newNavigatorName += hacker2[i];
}
console.log(newNavigatorName)

if (hacker1>hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1<hacker2) {
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}

