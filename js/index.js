// Iteration 1: Names and Input
let hacker1 = "Elena";
console.log("The driver's name is " + hacker1);

let hacker2 = "Chrome";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length  + " characters.");
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has "+  hacker2.length  + " characters.");
} else if (hacker1.length = hacker2.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let spaceName = ' ';
for (let i = 0; i < hacker1.length; i++) {
  spaceName =spaceName + hacker1[i].toUpperCase() + ' ';
}
console.log(spaceName)

let reverseName = '';
for(let i = hacker2.length -1; i >= 0; i--) {
  reverseName = reverseName + hacker2[i];
}
console.log(reverseName);

let orderName = hacker1.localeCompare(hacker2);
if(orderName === -1) {
  console.log("The driver's name goes first.")
} else if (orderName === 1){
  console.log("Yo, the navigator goes first definitely.")
}else if (orderName === 0){
  console.log("What?! You both have the same name?")
}


// Bonus 1


// Bonus 2

