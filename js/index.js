// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops

let hacker1 = 'giorgia'
console.log(`the driver's name is ${hacker1}`);

let hacker2 = 'rowan'
console.log (`the navigator's name is ${hacker2}`);

if (hacker1.length>hacker2.length) {
  console.log(`the driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length<hacker2.length) {
console.log(`it seems like the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
console.log(`what?! you both have equally long names ${hacker1.length}characters`);
}

let hacker1U = hacker1.toUpperCase()
let result = ' '

for (let i=0; i<hacker1.length; i++) { 
  result+=' ' + hacker1U[i]
} 
console.log(result);

let reverseName = ''

for (let i=hacker1.length-1; i>-1; i--){
  reverseName+= hacker1[i];
}
console.log(reverseName);

//if (hacker1<hacker2) {
  //console.log("The driver's name goes first");
//} else if (hacker1>hacker2) {
  //console.log("Yo, the navigator goes first definitely.");
//} else {
  //console.log("What?! You both have the same name?");
//}

function order(hacker1, hacker2) {
    return hacker1<hacker2 ? "The driver's name goes first"
         : hacker1>hacker2 ? "Yo, the navigator goes first definitely."
         : "What?! You both have the same name?"
}

console.log(order (hacker1, hacker2));