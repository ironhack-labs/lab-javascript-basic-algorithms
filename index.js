// Iteration 1: Names and Input
let hacker1 = prompt("The drivers name is: ")

let hacker2 = prompt("The navigators name is:")

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
 
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
 
  } else (hacker1.length === hacker2.length);
   console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
 
 let newHacker1 = hacker1.split("");
 let upperName = '';
 for (let i = 0; i < newHacker1.length; i++) {
   upperName += newHacker1[i].toUpperCase() + ' ';
 }
 console.log(upperName)
 
 let reverseHacker2 = " ";
 for (let i = 0; i < hacker2.length; i++) {
   reverseHacker2 = hacker2[i] + reverseHacker2;
 }
 console.log(reverseHacker2)

// Iteration 3: Loops
let ordenHacker = " ";
for (let i = 0; i < hacker1.length; i++) {
  if (hacker1[i] !== hacker2[i]) {
    if (hacker1[i] < hacker2[i]) {
      console.log(`Yo, the driver's name goes first.`);
    } else {
      console.log(`${hacker2} Yo, the navigator name goes first definitely`);
    }
    break;
  }
  if (i === hacker1.length - 1) {
    console.log('What?! You both have the same name?')
  }
}