// Names and Input
// My Name
var hacker1 = "michael";

console.log("The driver's name is " + hacker1);

// Partner Name
var hacker2 = prompt("Please enter the navigator's name");

console.log("The navigator's name is " + hacker2);

//Conditionals
//Conditional Statement looking for Longer name
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters") 
  } else if (hacker2.length > hacker1.length) {
      console.log("Yo, navigator has the longest name, it has " + hacker2.length + " characters")
    } else {
      console.log("wow, you both have equally long names, " + hacker1.length || hacker2.length + " characters!!")
    }
    
  // Loops for Printing Names
  console.log();
  
    for (var i = 0; i < hacker1.length; i++) {
      console.log(hacker1[i].toUpperCase() + " ")
    }
    
    console.log();
    
  for (var i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i]);
  }
  
  console.log();
  
  // Task 8. not sure how to run the code.
  for (var i = 0; i < hacker1.length && hacker2.length; i++) {
  
    if (hacker1[0] < hacker2[0]) {
      console.log("The driver's name goes first")
    } else if (hacker1[0] > hacker2[0]) {
      console.log("Yo, the navigator goes first definitely");
    } else {
      console.log("What?! You both got the same name?");
    }
    
}