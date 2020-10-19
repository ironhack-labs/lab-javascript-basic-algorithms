// Iteration 1: Names and Input

const hacker1 = "Felix";
console.log(`The drivers name is ${hacker1}`);

const hacker2 = "Mahmut";
console.log(`The navigators name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
console.log(`${hacker1} has the longer name and it has ${hacker1.length} characters`) } else if (hacker1.length < hacker2.length) {
console.log (`${hacker2} has the longer name and it has ${hacker2.length} characters`)
} else {
console.log(`You both have equaly long names, and it has ${hacker1.length} characters.`)
}

// Iteration 3: Loops
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
    if("") {
      driverName += hacker1[i].toUpperCase()
    }
    else {
    driverName += " "+ hacker1[i]
    }
  }
  console.log(driverName);
  
  let navigatorName = "";
for (let i=hacker2.length; i > 0; i--) {
   navigatorName += hacker2[i-1]
}
console.log(navigatorName);



if(hacker1.toLowerCase() < hacker2.toLowerCase()) {
  console.log(`${hacker1} comes first`);
} else if (hacker1.toLowerCase() > hacker2.toLowerCase()) {
  console.log(`${hacker2} goes first definitely`);
} else {
  console.log ("What?! You both have the same Name?");
}