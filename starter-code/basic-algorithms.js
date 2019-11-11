<<<<<<< HEAD
=======
// Names and Input

let hacker1 = "Javi";
console.log("The driver name is", hacker1);

let hacker2 = prompt("What's your name?");
console.log("The navigator name is", hacker2);

//Conditionals

//Conditionals

let l1 = hacker1.length;
let l2 = hacker2.length;

if (l1 > l2) {
  console.log("The Driver has the longest name, it has", l1, "characters");
} else if (l1 < l2) {
  console.log("Yo, navigator got the longest name, it has", l2, "characters");
} else {
  console.log("wow, you both got equally long names", l1, "characters!!");
}

//Conditionals

// Loops

//Iteration 6

let upperCase = hacker1.split(/(?=[a-z])/).join(" ");

console.log(upperCase.toUpperCase());

//Iteration 7

console.log(
  hacker2
    .split(/(?=[a-z])/)
    .reverse()
    .join("")
);

//Iteration 8

for (let i = 0; i < 1; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both got the same name?");
    break;
  } else if (hacker1[0] <= hacker2[0]) {
    i++;

    console.log("The driver's name goes first");
  } else if (hacker1[0] >= hacker2[0]) {
    i++;

    console.log("Yo, the navigator goes first definitely");
  }
}

// Lorem ipsum generator
>>>>>>> develop
