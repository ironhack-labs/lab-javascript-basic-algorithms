// Iteration 1: Names and Input
let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Susan";
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
 
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)

} else if(hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

} else {
  console.log(`Wow, you both have eqauly names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops
let a = "";
for(let i = 0; i< hacker1.length; i++){
  a += hacker1[i].toUpperCase() + " ";
}
console.log(a);

var b = '';
for (x = hacker2.length; x >= 0; x--) {
    b += hacker2[x];
}

console.log(b)