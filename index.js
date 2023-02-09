// Iteration 1: Names and Input

let hacker1 = 'Paul';
console.log (`The driver's name is ${hacker1}`);

let hacker2 = "Simon";
console.log (`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals 
if (hacker1.length > hacker2.length) {
  console.log(`the driver's has the longer name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`) 
}else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let hacker1UpperCase = "";

for (let i=0; i < hacker1.length; i++) {
  hacker1UpperCase += `${hacker1[i].toUpperCase()} `
}
console.log(hacker1UpperCase)

let hacker2Reverse = "";
for (let i= hacker2.length -1; i >=0; i--) {
  hacker2Reverse += hacker2[i]
}
console.log(hacker2Reverse)
