// Iteration 1: Names and Input

const hacker1 = "Alba"
const hacker2 = "Laura"

console.log ("The drivers name is " + hacker1)
console.log ("The navigators name is " + hacker2)

// Iteration 2: Conditionals
const len1 = hacker1.length;
const len2 = hacker2.length;

if (len1 > len2) {
    console.log ("The driver has the longest name, it has " + len1 + "characters");
  } else if (len1 < len2) {
    console.log("It seems that the navigator has the longest name, it has " + len2 + "characters");
  }  else {
    console.log("Wow, you both have equally long names, " + len1 + "characters");
  }

// Iteration 3: Loops
let separateLetters = '';
for (let i = 0; i< hacker1.length; i++){
  separateLetters += hacker1[i] + " "
}
  console.log (separateLetters)


let reverseLetters = '';
for (let i = hacker2.length -1 ; i >=0 ; i--){
  reverseLetters += hacker2[i]
}
  console.log (reverseLetters)

  if (hacker1>hacker2) {
    console.log ("The driver's name goes first.")
  } else if (hacker1<hacker2) {
    console.log ("Yo, the navigator goes first definitely.")
  } else {
    console.log ("What?! You both have the same name?")
  }