// Iteration 1: Names and Input
var hacker1= "Katie";
console.log("the driver's name is " + hacker1);
var hacker2= "Bram";
console.log ("the navigator's name is " + hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) {
    console.log ("It seems that the navigator has the longest name, it has " + hacker2.length + " characters");
} else if (hacker1.length === hacker2.length) {
    console.log ("Wow, you both have equally long names " + hacker1.length + " characters");
}

// Iteration 3: Loops
var driver = "";
for (var char of hacker1) {
    driver = driver + char.toUpperCase() + " ";
}
console.log(driver);

var reverseDriver="";
for (let counter=hacker1.length; counter > 0; counter--) { //counter is equal to hacker 1 because if the name changes it can change as well
    reverseDriver += (hacker1[counter -1]); //array's first item is zero. not one so subtract one 
    
} 
console.log(reverseDriver);



if (hacker1.localeCompare(hacker2) === -1) { //googled "javascript lexicographic compare" , thats where I found localeCompare
  console.log(' The drivers name goes first.'); 
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log('Yo, the navigator goes first definitely.');
} else {
  console.log('What?! You both have the same name?');
}