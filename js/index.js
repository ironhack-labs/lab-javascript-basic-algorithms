// Iteration 1: Names and Input
// Iteration 1

let hacker1 = "Miguel"
console.log (`The drivers name is ${hacker1}`)
let hacker2 = "Martin Giura"
console.log (`The drivers name is ${hacker2}`)

// Iteration 2: Conditionals

function longerName(driver,navigator) {

    const hacker1 = driver;
    const hacker2 = navigator;
    
    if (hacker1.length > hacker2.length)
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
    
    if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker2.length}  characters!.`)
    }
    
    if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
      }
    }
    
    console.log(longerName("Miguel", "Martin"))

// Iteration 3: Loops
// 3.1

let driver = "Miguel"
driver = driver.toUpperCase()
let result = ""

for (i=0; i < driver.length; i++){
  let char = driver[i]
  result += `${char} ` 
}
console.log (result)

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

// Solucion posible 1 con Loop
let navigator = "Martin"
let result2 = ""

for (i=(navigator.length - 1); i >= 0; i--){
  let char2 = navigator[i]
  result2 += `${char2}`
}
console.log(result2)

// Solucion Posible 2 sin Loop

function reverseString(navigator) {
    return navigator.split("").reverse().join("");
}
console.log(reverseString("Martin"));

//3.3 Depending on the 'lexicographic order' of the strings, print:
let driver3 = "Miguel";
let navigator3 = "Martin";

if (navigator3.localeCompare(driver3) === -1) {
console.log("The drivers name goes first.");

if (navigator3.localeCompare(driver3) === 1) {
  console.log(" Yo, the navigator goes first definitely.");

} else {
  console.log("What?! You both have the same name?");
  }
}

