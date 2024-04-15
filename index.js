// Iteration 1: Names and Input
let hacker1 = "Xavi";
console.log("The driver's name is " + hacker1);

let hacker2 = "Haku";
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has" + hacker1.length + " characters."
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

/*3.1*/
// console.log(hacker1.toUpperCase().split("").join(" "));

let result = "";

for (let i = 0; i < hacker1.length; i++) {
  result += hacker1[i].toUpperCase() + " ";
}

console.log(result.trim());


/*3.2*/

let reversed = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reversed = reversed + hacker2[i];
}

console.log(reversed);

// console.log(hacker2.split("").reverse().join(""))


/*3.3*/


for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] < hacker2[i]) {
    result = "The driver's name goes first.";
    break;
  } else if (hacker1[i] > hacker2[i]) {
    result = "Yo, the navigator goes first, definitely.";
    break;
  }
}

if (result === "") {
  if (hacker1.length < hacker2.length) {
    result = "The driver's name goes first.";
  } else if (hacker1.length > hacker2.length) {
    result = "Yo, the navigator goes first, definitely.";
  } else {
    result = "What?! You both have the same name?";
  }
}

console.log(result);