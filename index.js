console.log("I'm Ready");

//Interation: Names and Input

let hacker1 = "João";
console.log("The driver's name is", hacker1);

let hacker2 = "Mary Jane";
console.log("The navigator's name is", hacker2);

//interation: conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `the driver has the longest name, it has ${hacker1.length} characters!`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters!`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// ---------------------------------->
let driverUpperCase = " ";
for (let i = 0; i < hacker1.length; i++) {
  driverUpperCase += hacker1[i] + " ";
}
console.log(driverUpperCase.toUpperCase());

let navigatorBackwards = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorBackwards += hacker2[i];
}
console.log(navigatorBackwards);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
