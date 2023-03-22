// Iteration 1: Names and Input
let hacker1="Mark";
console.log(`The drivers name is ${hacker1}`);

console.log(hacker1.length);

let hacker2="Sofia";
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has longer name ,it has ${hacker1.length} characters!`)
  }
  else if(hacker2.length>hacker1.length){
    console.log(`The navigator has tha longest name ,it has ${hacker2.length}characters!`)
  }
  else{
    console.log(`Ẁow,both have equally long names,${hacker1.length} characters!`)}
// Iteration 3: Loops
let output=""

for (let i = 0; i < hacker1.length; i++) {
  output += hacker1.charAt(i).toUpperCase() +" ";
}
console.log(output)


let reserveOutput=""
for(let i=hacker2.length-1;i>=0;i--)
 {
   reserveOutput+=hacker2.charAt(i)
 }
console.log(reserveOutput)

if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`)
  }
 else if (hacker1.localeCompare(hacker2) > 0) 
   {
    console.log(`Yo, the navigator goes first, definitely.`);
  }
 else {
  console.log(`What?! You both have the same name?`);
}