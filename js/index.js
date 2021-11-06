// Iteration 1: Names and Input

let hacker1 = "mariaDriver";
console.log(`The driver´s name is ${hacker1}`);
let hacker2 = "roberNavigator";
console.log(`The navigator´s name is ${hacker2}`);

// 

// Iteration 2: Conditionals

let hacker1Characters = hacker1.length;
let hacker2Characters = hacker2.length;
//console.log(hacker1Characters)

if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1Characters} characters`);
} else if(hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2Characters} characters`);
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Characters} characters!`);
}

// Iteration 3: Loops