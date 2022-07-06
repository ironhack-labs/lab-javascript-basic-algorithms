
// Iteration 1
let hacker1 = "luisa"
console.log("The driver's name is", hacker1);
let hacker2 = "majid"
console.log("The navigator's name is", hacker2);
 

// Iteration 2
if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log('Wow, you both have equally long names!');
}


// Iteration 3
let capitalName = "";
let lowercaseName = "";

for(let i = 0; i< hacker1.length; i++) {
  console.log(hacker1[i]);
}
for(let i = hacker2.length-1; i>= 0; i--) {
  console.log(hacker2[i]);
}
console.log(lowercaseName)
if(hacker1 < hacker2){
  console.log("The driver's name goes first.")
} else if (hacker1 > hacker2){
  console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}