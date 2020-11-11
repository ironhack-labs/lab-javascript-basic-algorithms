//Iteration 1
var hacker1 = "Charlotte";
console.log(`The driver's name is ${hacker1}`);

var hacker2 = "Ann";
console.log(`The navigator's name is ${hacker2}`);

//Iteration2

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length}  characters!`
  );
}

//Iteration 3.1

var newDriver = " ";

for (let i = 0; i < hacker1.length; i++) {
  let letter = hacker1[i];
  newDriver = newDriver + letter + " ";
}
console.log(newDriver.toUpperCase());

//Iteration 3.2

var newNavigator = " ";

for (let i = hacker2.length - 1; i >= 0; i--) {
  let letter2 = hacker2[i];
  newNavigator = newNavigator + letter2 + " ";
}
console.log(newNavigator);

//Iteration 3.3

var a = hacker2.localeCompare(hacker1);

if (a === 1) {
  console.log("The driver's name goes first.");
} else if (a === -1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
