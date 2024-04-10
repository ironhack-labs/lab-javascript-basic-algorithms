// Iteration 1: Names and Input
let hacker1 ="Alfonso"
console.log(`The driver's name is ${hacker1}`)
let hacker2 ="Nacho"
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length ){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

//3.1

let hell = ""
for (let i = 0; i < hacker1.length; i++){

    hell= hell + hacker1[i].toUpperCase() + " "
    
}
console.log(hell)

//3.2

let nameReverse=""
for (let i = hacker2.length - 1; i >= 0 ; i--){

   nameReverse= nameReverse + hacker2[i]
}
console.log(nameReverse);

//3.3

let countHacker1 = "";

for (let i = 0; i < hacker1.length ; i++)
  {
    countHacker1 = countHacker1 + hacker1[i];
    
  }


let countHacker2 = "";

for (let i = 0; i < hacker2.length ; i++)
  {
    countHacker2 = countHacker2 + hacker2[i];
    
  }


if (countHacker1 < countHacker2)
  {
    console.log ("The driver's name goes first.");
  }
else if (countHacker2 > countHacker1)
  {
    console.log ("Yo, the navigator goes first, definitely.");
  }
else {console.log ("What?! You both have the same name?");}