// Names and Input

let hacker1 = "Gabriela"
console.log("The driver's name is " + hacker1)

let hacker2 = prompt ("¿Cuál es tu nombre?")
console.log("The navigator's name is " + hacker2)

// Condicionales 

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters." )
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters.")
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!" )
  }

// Loops 
let result = ""
for (i = 0; i < hacker1.length; i++){
  result += (hacker1[i] + " ")
}
console.log(result.toUpperCase())

// loop reverse string 
function reverseString(x) {
  let resp = x.split("").reverse().join(""); 
  console.log(resp)
}
reverseString(hacker2);

// qué va primero? hacker 1 o hacker 2? 

function compareNames (hacker1, hacker2) {
  let compare = hacker1.localeCompare(hacker2);
  
  if (compare === -1){
    console.log("The driver's name goes first")
  } else if (compare === 1) {
    console.log("Yo, the navigator goes first definitely")
  } else {
    console.log("What? You both got the same name?")
  }
}

compareNames(hacker1, hacker2);

// Bonus time: perdón, no pudimos con los palíndromos :( 