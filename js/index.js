// Iteration 1: Names and Input
//
let hacker1 = "Andrea";
console.log("The driver's name is " +hacker1);

let hacker2 = "Google";
console.log("The navigator's name is " +hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " +hacker1.length+ " characters.")
} else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else if (hacker1.length === hacker2.length){
    console.log("Wow, you both have equally long names, " +hacker1.length+ " characters!.");
}
  

// Iteration 3: Loops
// Bucles
let newName = "";
for (let i=0; i<hacker1.length; i++) {
  if (i != hacker1.length-1) {
      newName = newName + hacker1[i].toUpperCase()+" ";
  } else {
      newName = newName + hacker1[i].toUpperCase();
  }
}
console.log(newName);


let reverseNavi = "";
for (let i = hacker2.length-1; i >= 0; i--) {
  reverseNavi = reverseNavi + hacker2[i];
}
console.log(reverseNavi);


// funcion localeCompare()
let resultado = "";
if (hacker1.localeCompare(hacker2) === -1) {
  resultado = "The driver's name goes first.";
} else if (hacker1.localeCompare(hacker2) === 1) {
  resultado = "Yo, the navigator goes first definitely.";
} else if (hacker1.localeCompare(hacker2) === 0) {
  resultado = "What?! You both have the same name?";
}

console.log(resultado);

/*
let resultado = "";

for (let i=0; i<hacker1.length; i++) {
  for (let j=0; j<hacker2.length; j++) {
      if (hacker1[0] < hacker2[0]) {
        resultado = "The driver's name goes first.";
      } else if (hacker1[0] > hacker2[0]) {
        resultado = "Yo, the navigator goes first definitely.";
      } else if (hacker1[0] === hacker2[0]) {
        if (hacker2[i] === hacker1[i]) {
          resultado = "What?! You both have the same name?";
        }
      }
  }
}
console.log(resultado);
*/

