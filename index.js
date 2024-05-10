// Iteration 1: Names and Input
const hacker1 = "Onur";
console.log(`The driver's name is : ${hacker1}`);
const hacker2 = "Can";
console.log(`The navigator's name is : ${hacker2}`);

const hacker1 = "Onur"; 
const hacker2 = "Canaa"; 
console.log(`"This driver's name is ${hacker1}`)
console.log(`"This navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length)  { 
    console.log(` " The driver has the longest name, it has ${hacker1.length} characters."`)

}else if (hacker1.length < hacker2.length) { 
    console.log(` " The driver has the longest name, it has ${hacker2.length} characters."`)
}else { 
    console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!."`)
}
// Iteration 3: Loops

let newDriverName = "";
const driver = hacker1;

for (let i = 0; i < driver.length; i++) {
  if (i < driver.length -1) {
    newDriverName += driver[i].toUpperCase() + " ";
  } else {
    newDriverName += driver[i].toUpperCase();
  }
}

console.log("newDriverName", newDriverName);
