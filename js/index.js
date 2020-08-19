// Iteration 1: Names and Input
const hacker1 = "Niko";
console.log("The driver's name is " + hacker1);
const hacker2 = "Juan";
console.log("The navigator's name is " + hacker1);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longer name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!"
  );
}

// Iteration 3: Loops
let result1 = "";
for (let i = 0; i < hacker1.length; i++) {
  result1 += hacker1.charAt(i) + " ";
}

console.log(result1.toUpperCase().trim());

let result2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  result2 += hacker2.charAt(i);
}

console.log(result2);

let sortedArray = [hacker1, hacker2];
sortedArray.sort();

if (hacker1.localeCompare(hacker2) == -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?")
}

/*

Anthony's Method

for(i=0; i<hacker1.length;i++){
  if(hacker1 == hacker2){
    console.log('What?! You both have the same name?')
    break;
  } else if(hacker1[i]<hacker2[i]){
    console.log("The driver's name goes first.")
    break;
  } else if(hacker2[i]<hacker1[i]){
    console.log("Yo, the navigator goes first definitely.")
    break;
  }
}
*/
