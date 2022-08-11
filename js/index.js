// Iteration 1: Names and Input
let  hacker1 = prompt("The driver's name is:");
let hacker2 = prompt("The navigator's name is:");

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)
    }else{
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }


// Iteration 3: Loop

let result = hacker1.toUpperCase().split("").join(" ")
console.log(result)

    
 function reverseString(str) {
    let reverseArray = str.split("").reverse().join("")
    console.log(reverseArray)
 }
reverseString(hacker2)

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}