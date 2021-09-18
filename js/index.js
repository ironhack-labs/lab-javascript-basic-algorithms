// Iteration 1: Names and Input

const hacker1 = "tom";
 console.log("The driver's name is " + hacker1);

const hacker2 = "joana";
 console.log("The navigator's name is " + hacker2);



// Iteration 2: Conditionals

let longerName;
let lengthOfHacker1 = hacker1.length;
let lengthOfHacker2 = hacker2.length;

if (lengthOfHacker1 > lengthOfHacker2) {
  longerName = lengthOfHacker1;
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
else if (lengthOfHacker1 < lengthOfHacker2) {
  longerName = lengthOfHacker2;
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else {
   console.log("Wow, you both have equally long names, " + hacker2.length + " characters!");  
}

// Iteration 3: Loops

let driverName = ""

for (let i=0; i<lengthOfHacker1; i++) 
{
  driverName += hacker1[i].toUpperCase() + " ";
}

console.log(driverName);



let navigatorName = "";

for (let i = lengthOfHacker2 - 1 ; i >= 0 ; i-- ) {
  navigatorName += hacker2[i];
}

console.log(navigatorName);

if(hacker1<hacker2)
{
  console.log("The driver's name goes first.");
}

else if (hacker2<hacker1)
{
  console.log("Yo, the navigator goes first definitely.");
}

else
{
  console.log("What?! You both have the same name?");
}