// Iteration 1: Names and Input
let hacker1 = "XXXX"
let hacker2 = "YYYY"

console.log(`The driver's name is ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has XX characters.")}

  else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has XX characters.")
  }
  else {
    console.log("Wow, you both have equally long names, XX characters!")
  }


// Iteration 3: Loops
let newName = " ";
hacker1 = "JOHN"
for (let i = 0;  i < hacker1.length;  i++){
  newName = newName + hacker1[i] + "  ";
}
console.log(newName.toUpperCase())


hacker2 = "John"
for (let i = hacker2.length -1; i >= 0; i--) {
  console.log(hacker2[i]);
}

if (hacker1.length > hacker2.length){
  console.log("The driver's name goes first")
}
else if (hacker1.length <hacker2.length){
  console.log("Yo, the navigator goes first definitely")
}
else{
  console.log("What?! You both have the same name?")
}