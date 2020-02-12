// Iteration 1: Names and Input


// Iteration 2: Conditionals


// Iteration 3: Loops
console.log("I'm ready");

let hacker1 = 'Hugo';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Someone';
console.log(`The navigator's name is ${hacker2}`);

//trying to find the largest .lenght

let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if(hacker1Length > hacker2Length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.")
}else if(hacker2Length > hacker1Length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}else{
  console.log("Wow, you both have equally long names, " +hacker1.length + " characters!.")
}

/*Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

console.log(hacker1.toUpperCase().split("").join(" "));