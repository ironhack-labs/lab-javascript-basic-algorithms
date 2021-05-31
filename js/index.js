// Iteration 1: Names and Input

let hacker1 = "Raoul";
let hacker2 = 'Phili';
console.log("The driver's name is " + hacker1)
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
// Assess length of each hacker's name
if (hacker1.length > hacker2.length) {
  console.log('The driver has the longer name, it has ' +  hacker1.length + ' characters');
  } else if (hacker2.length > hacker1.length) { 
    console.log('The navigator has the longer name, it has ' +  hacker2.length + ' characters') ;
  } else if (hacker1.length == hacker2.length) {
    console.log('Wow, you both have equally long names, they both have ' + hacker1.length + ' characters!'); 
  };

// Iteration 3: Loops
// Issue: cannot print the loop horizontally

for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i].toUpperCase() + " " );
}

for (let i = hacker1.length; i >= 0; i--) {
  console.log(hacker1[i] + " " );
}

