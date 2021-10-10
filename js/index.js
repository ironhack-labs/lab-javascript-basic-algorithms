// Iteration 1: Names and Input
var hacker1="Jaimita";
console.log("The driver's name is "+ hacker1);
var hacker2="Jane Doe";
console.log("The navigator's name is "+ hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
console.log("The driver has the longest name, it has " + hacker1.length + " characters")
} else if (hacker1.length < hacker2.length) {
console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
  } else {
console.log("Wow, you both have equally long names, " + hacker1.length + " characters!")
}

// Iteration 3: Loops
let hacker1big = "";
for (let i = 0; i < hacker1.length; i++){
  hacker1big = hacker1big + hacker1[i].toUpperCase() + " ";
} console.log(hacker1big);

let hacker2inverse = "";
for(let j = hacker2.length -1; j >= 0; j--){
  hacker2inverse = hacker2inverse + hacker2[j];
}console.log(hacker2inverse);



if (hacker1<hacker2) {
    console.log("The driver's name goes first")
  } else if (hacker1>hacker2) {
    console.log("Yo, the navigator goes first definitely.")
  } else if(hacker1=hacker2) {
    console.log("What?! You both have the same name? ")
  }