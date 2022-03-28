// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Jawid";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mafalda";
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`) 
} else if (hacker1.length===hacker2.length) {
  console.log(`You both have equally long names, ${hacker1.length} characters!`)
} else if (hacker2.length>hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}


// Iteration 3: Loops

const result = hacker1.split('' ).join(' ')
console.log(result.toUpperCase());

const result2 = hacker2.split("").reverse().join("")
console.log(result2)

if(hacker1.localeCompare(hacker2)<0) {
    console.log("The driver's name goes first.")
  } else if (hacker2.localeCompare(hacker1)<0) {
    console.log("Yo, the navigator goes first definitely.")
  } else if (hacker2.localeCompare(hacker1)===0){
    console.log("What?! You both have the same name?")
     }