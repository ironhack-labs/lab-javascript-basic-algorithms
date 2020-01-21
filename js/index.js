// Iteration 1: Names and Input
//Q1

let hacker1 = "Dan";
console.log(hacker1);

let hacker2 = "Filipe";
console.log(hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}


else if (hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
}

else {
  console.log("Wow, you both have equally long names, "+ hacker1.length + " characters!")
}

// Iteration 3: Loops


Done 3.1 & 3.2
console.log(hacker1.toUpperCase().split("").join(" "));
 
let result =""
let letter =""
for (let i = hacker1.length - 1; i >= 0; i--) {
  letter = hacker1[i]
  result += letter
}

console.log("Final result: ", result)

