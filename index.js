
let hacker1 = "josh";
let hacker2 = "bob";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(hacker1);
}
  else if(hacker2.length > hacker1.length){
    console.log(hacker2);
}
else {
  console.log("both hackers are same length");
}


// Iteration 3: Loops

for(let i=0; i < hacker1.length; i++) {
  hacker2 += hacker1[i].toUpperCase() + " ";
}
console.log(hacker1.trim());
