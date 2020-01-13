// Iteration 1: Names and Input
var hacker1 = "Henriette";
var hacker2 = "Non-existent";
console.log(`${hacker1} is both driver and navigator in this case`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) { 
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  }
  else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }


// Iteration 3: Loops
for (var i = 0; i < hacker1.length; i++){
    console.log(hacker1[i].toUpperCase() + ".");
 }


 var hacker2 = "Non-existent";

 for (var i = hacker2.length; i >= 0; i--) {
   console.log(hacker2[i]);
 }


 // BONUS: Word Count

 var myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
 var total = 0;
 
 
 for (var i = 0; i < myText.length; i++) {
   if (myText[i] === " ") {
     total++;
     console.log(total);
   }
 }