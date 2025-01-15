// Iteration 1: Names and Input
let hacker1 = "Mark";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Jhonny";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} chracaters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, you both have ${hacker1.length} characters`
  );
}

// Iteration 3: Loops

//3.1
hackerName = " ";

for (let i = 0; i < hacker1.length; i++) {
  hackerName += hacker1[i].toUpperCase() + " ";
}
console.log(hackerName);

//3.2
navigatorName = " ";

for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);

//3.3
let check = hacker1.localeCompare(hacker2);
console.log(check);
/* a.localeCompare(b) - si el nombre a va antes que el nombre b, 
me devuelve un numero negativo, si el nombre a va despues que el nombre b,
me devuelve un numero positivo */

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first.");
} else if (check > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
