console.log("I'm ready!");

let hacker1 = "Marie"
let hacker2 = "Anklin"

console.log("The driver´s name is " + hacker1)

console.log("The navigator´s name is " + hacker2)

let n = hacker1.length;
let b = hacker2.length; 

if (n > b) {
  console.log("The driver has the longer name, it has " + n + " characters.")
}

else if (b > n) {
  console.log("It seems that the navigator has the longest name, it has " + b + " characters.")
}

else {
  console.log("Wow, you both have equally long names, " + n +  " characters!")
}

let result = ""
for (let i = 0; i <= hacker1.length -1; i++) {
 result = result + hacker1[i].toUpperCase() + " ";
}
console.log(result) 

let reverseResult = ""
for (let i = hacker1.length -1; i >= 0; i--) {
 reverseResult = reverseResult + hacker1[i];
}
console.log(reverseResult)