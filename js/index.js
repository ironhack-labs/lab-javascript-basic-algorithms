// Iteration 1: Names and Input
let hacker1 = "Andrew";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Aleksandra";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if(hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops

let capitalName = '';

for(let value of hacker1) {
capitalName += value.toUpperCase() + ' ';
}

console.log(capitalName);

//Iteration 3.2

let backwardsName = '';

for(let i = hacker2.length - 1; i >= 0; i--) {

backwardsName += hacker2[i];
}

console.log(backwardsName);

//Iteration3.3

for(let i = 0; i < hacker1.length; i++) {

if(hacker1[i] < hacker2[i]) {
  console.log(`The driver's name goes first.`)
  break;
} else if(hacker2[i] < hacker1[i]) {
  console.log(`Yo, the navigator goes first definitely.`)
  break;

} else if(hacker1[i] === hacker2[i] && hacker1.length !== hacker2.length){
  continue;
} else {
  console.log(`the same name`);
  break;
}

}