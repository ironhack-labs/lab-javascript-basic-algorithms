
console.log("I'm ready!");
// Iteration 1: Names and Input//
const hacker1 = "Cameron";
console.log('The driver\'s name is', hacker1)
const hacker2 = "Benjamin";
console.log('The navigator\'s name is', hacker2)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " +
      hacker1.length +
      " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "WOW, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops
// 3.1
let orderedName = "";
for (letter of hacker1) {
  orderedName += letter.toUpperCase();
  orderedName += " ";
}
console.log(orderedName);
// 3.2
let orderedName2 = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  orderedName2 += hacker1[i];
}
console.log(orderedName2);
// 3.3
let foundOrder = false
for (let i = 0; i < hacker1.length-1; i++){
    if (hacker1[i] > hacker2[i]) {
        console.log('Yo, the navigator goes first definetly')
        foundOrder = true
        break;
    } else if (hacker1[i] < hacker2[i]){
        console.log('The driver\'s name goes first')
        foundOrder = true
        break;
    }
    } 
    if (hacker1.length == hacker2.length && foundOrder==false ){
        console.log('What?! You both have the same name?')
    }






// Bonus

