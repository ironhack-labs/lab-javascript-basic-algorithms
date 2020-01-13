//Iteration 1: Names and Input

//1.1 Create a variable `hacker1` with the driver's name.
var hacker1 = "Bartolo"

//1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);

//1.3 Create a variable `hacker2` with the navigator's name.
var hacker2 = "Paco"

//1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has XX characters.")
}
else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has XX characters.")
}
else {
  console.log("Wow, you both have equally long names, XX characters!")
}

//Iteration 3: Loops

//Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
for (let i=0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase())
}

//Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString(hacker2);

//Depending on the lexicographic order of the strings, print:
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.")
}
else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
}