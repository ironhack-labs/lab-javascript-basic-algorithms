// Iteration 1: Names and Input

const hacker1 = "Hugo";
  console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Samantha";
  console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
    else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length + 1} characters characters`);
    }
      else if (hacker1.length == hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length +1 } characters!`)
      }

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase());
    }
    
    for (let i = hacker1.length - 1; i >= 0; i--) {
    console.log(hacker1[i]);
    }
    
    if (hacker1.slice(1) > hacker2.slice(1)) {
      console.log("The driver's name goes first.");
    }
      else if (hacker1.slice(1) < hacker2.slice(1)) {
      console.log("Yo, the navigator goes first, definitely.");
      }
      else if (hacker1.slice(1) == hacker2.slice(1)) {
      console.log("What?! You both have the same name?");
      }