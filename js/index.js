// Iteration 1: Names and Input
let hacker1 = "Fernando"
console.log("The driver's name is " + hacker1)

let hacker2 = "Alejandro"
console.log("The navigator's name is " + hacker2)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker2.length + " characters.")
}else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.")
} else {
    console.log("Wow, you both have equally long names, XX characters!.")
}

// Iteration 3: Loops

let driversName = hacker1.toUpperCase().split("").join(" ");
console.log(driversName)


let navName = "";
for(var i=hacker2.length; i>=0; i--){

    navName += hacker2[i] 
}
console.log(navName)

if(hacker1.localeCompare(hacker2) === -1) {
  console.log("drivers name goes first")
}else if (hacker2.localeCompare(hacker1) === -1) {
  console.log("Yo, the navigator goes first definitely")
}else {
  console.log("What?! You both have the same name?")
}