// console.log("I'm ready!");
let hacker1 = "Helena";
console.log("The driver's name is " + hacker1);

let hacker2 = "Denise";
console.log("The navigator's name is " + hacker2);


// iteration 2: conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`); 
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);  
} else if (hacker1.length == hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// iteration 3: loops
//3.1
let spaces= hacker1.toUpperCase(); 
console.log(` ${spaces.charAt(0)} ${spaces.charAt(1)} ${spaces.charAt(2)} ${spaces.charAt(3)} ${spaces.charAt(4)} ${spaces.charAt(5)} `);
//3.2
console.log(`${hacker2.charAt(5)}${hacker2.charAt(4)}${hacker2.charAt(3)}${hacker2.charAt(2)}${hacker2.charAt(1)}${hacker2.charAt(0)}`);
//3.3
let myArray = [hacker1, hacker2]
myArray.sort();

if (myArray[0] == hacker1) {
  console.log("The driver's name goes first.");
} else if (myArray[0] == hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?")
}

//BONUS not done bc early bed time to recover energy for the rest of the week! 
