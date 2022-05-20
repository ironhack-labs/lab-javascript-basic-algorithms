// Iteration 1: Names and Input
hacker1 = "Guillermo";
console.log("The driver's name is " + hacker1);
hacker2 = "Tony";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      "characters."
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + "characters!"
  );
} else {
  console.log("oops something went wrong!");
}
// Iteration 3: Loops
//Iteration 3.1
let nameWithSpace = "";
for (let i = 0; i < hacker1.length; i++) {
  nameWithSpace += hacker1[i] + " ";
}
console.log(nameWithSpace.toUpperCase());

//Iteration 3.2
let newString = "";
for (let j = hacker1.length - 1; j >= 0; j--) {
  newString += hacker1[j]; // or newString = newString + str[i];
}
console.log(newString);

//Iteration 3.3
const alphabet = "abcdefghijklmnopqrstuvwxyz";
for (let k = 0; k < alphabet.length; k++) {
  if (alphabet[k].toUpperCase() === hacker1[0]) {
    console.log("The driver's name goes first.");
    {
      break;
    }
  } else if (alphabet[k].toUpperCase() === hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
    {
      break;
    }
  } else if (alphabet[k].toUpperCase() === hacker1[0] && hacker2[0]) {
    console.log("What?! You both have the same initial?");
    {
      break;
    }
  }
}
