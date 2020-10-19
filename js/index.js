// Iteration 1: Names and Input
const hacker1 = "Anna";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Karina";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
  } else if ((hacker2.length > hacker1.length)) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`)
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  };

// Iteration 3: Loops
// task 3.1

function upperCase(name) {
    let endResult = "";
  
    for (let i = 0; i < name.length; i++) {
      endResult = endResult + name[i] + " "
    };
    
    return endResult.toUpperCase();
  };
  
  upperCase(hacker1);
  
  // task 3.2
  function reverse(name) {
    let endResult = "";
    
    for (let i = name.length-1; i >= 0; i--) {
      endResult = endResult + name[i];
    };
    return(endResult);
  };
  
  reverse(hacker1);
  
  // task 3.3
  function alphabetical(name, name2) {
    let alphabeticalOrder = name.localeCompare(name2);
    if (alphabeticalOrder === -1) {
      return "The driver's name goes first.";
    } else if (alphabeticalOrder === 1) {
      return "Yo, the navigator goes first definitely.";
    } else {
      return "What?! You both have the same name?";
    }
  };
  
  console.log(alphabetical(hacker1, hacker2));