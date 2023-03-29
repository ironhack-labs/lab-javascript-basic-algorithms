// Iteration 1: Names and Input
let hacker1 = "Lee";
let hacker2 = "Justin";
let spacedName = '';
let reverseName = '';

console.log("The driver's name is " +hacker1 +".");
console.log("The navigator's name is " +hacker2 +".");

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}

 else if(hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has " +hacker2.length + " characters.")
}

else {
  console.log("Wow, you both have equally long names, " +hacker1.length + " characters.")
};

// Iteration 3: Loops

for(x=0; x < hacker1.length; x++) {
  spaceName = hacker1[x].toUpperCase() + " ";
  spacedName += spaceName;
}
console.log(spacedName);

for(x=hacker2.length -1; x >= 0 ; x--) {
  reverseName += hacker2[x];
}
console.log(reverseName);


if (hacker1[0]<hacker2[0]){
  console.log("The driver's name goes first")
} else if (hacker1[0]>hacker2[0]){
  console.log("Yo, the navigator goes first, definitely.")
} else{
  console.log("What?! You both have the same name?")
}