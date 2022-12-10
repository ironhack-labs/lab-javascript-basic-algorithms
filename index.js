

// Iteration 1: Names and Input
let hacker1 = prompt("enter the driver's name")
console.log("The driver's name is " + hacker1)
let hacker2 = prompt("enter the navigator's name")
console.log("The navigators's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) 
{
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}
else if (hacker2.length > hacker1.length) 
{
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}
else
{
  console.log("Wow, you both have equally long names, " + hacker2.length + "characters!")
}

// Iteration 3: Loops
console.log("this is driver's name in capital:" + hacker1.toUpperCase().split("").join(" "))
console.log("this is investigator name reversed:"+ hacker2.split('').reverse().join(''))

// I don't know how to do the Lexicographic order using Loops?