

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
 // console.log("this is driver's name in capital:" + hacker1.toUpperCase().split("").join(" "))
 // console.log("this is investigator name reversed:"+ hacker2.split('').reverse().join(''))
 // Create an empty string to store the modified name
let driverName = "";
 // Use a for loop to iterate over the characters in the name
for (let i = 0; i < hacker1.length; i++) {
  // Get the character at the current position in the string
  let char = hacker1.charAt(i);
  // Convert the character to uppercase and add it to the result string
  driverName += char.toUpperCase() + " ";
}
 // Print the modified name
console.log("The driver's name is " + driverName);

 // Create an empty string to store the reversed name
let navigatorName = "";

 // Use a for loop to iterate over the characters in the name in reverse
for (let i = hacker2.length - 1; i >= 0; i--) {
// Get the character at the current position in the string
  let char = hacker2.charAt(i);

// Add the character to the result string
  navigatorName += char;
}

// Print the reversed name
console.log("The navigator's name in reverse is " + navigatorName);