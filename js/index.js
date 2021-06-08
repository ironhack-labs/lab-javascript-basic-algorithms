// Iteration 1: Names and Input
let hacker1 = "Natasha";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Bob";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
driverNameLength = hacker1.length
navigatorNameLength = hacker2.length
if (driverNameLength > navigatorNameLength) {
  console.log (`The driver has the longest name, it has ${driverNameLength} characters`);
}
else if (hacker1.length < hacker2.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, XX characters!`);
}

// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
 
let newDriverName = ' '; //this is the original driver's name, but with the characters separated by spaces and in capital letters, so javascript will have to recognize it as a technically new name (but it's really just the old name with fancy commands, but we have to define the name in a new way because of this, hence "newDriverName")
let driverUpperCase = hacker1.toUpperCase();

for (let i=0; i < hacker1.length; i++) {
   console.log(newDriverName += driverUpperCase[i] + ' ');
}

console.log(newDriverName);