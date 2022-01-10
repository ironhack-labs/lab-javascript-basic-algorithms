// console.log("I'm ready!");
let hacker1 = "Helena";
console.log("The driver's name is" + hacker1);

let hacker2 = "Denise";
console.log("The navigator's name is" + hacker2);


// iteration 2: conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`); 
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);  
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

