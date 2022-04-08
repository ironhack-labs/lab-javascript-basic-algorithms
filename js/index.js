// Iteration 1: Names and Input
let hacker1; 
  hacker1 = "David2"
console.log("The driver's name is", hacker1)
  hacker2 = "Mapy"
console.log("The navigator's name is", hacker2)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  } 

// Iteration 3: Loops
switch(hacker1.localeCompare(hacker2)){
    case -1:
      console.log("The driver's name goes first.");
    break;
    case 1:
      console.log("Yo, the navigator goes first definitely.");
    break;
    case 0:
      console.log("What?! You both have the same name?");
    break;
  }
