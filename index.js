// Iteration 1: Names and Input
const hacker1 = "Phillip"
const hacker2 = "Gloria"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The hacker1 has the longest name, it has ${hacker1.length} characters`)}   
    else if(hacker1.length < hacker2.length){
        console.log(`The Navigator has the longest name, it has ${hacker2.length} characters`)
    }
    else if(hacker1.length === hacker2.length){
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}

// Iteration 3: Loops

let newDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
    if (i < hacker1.length) {
        newDriverName += hacker1[i].toUpperCase() + " ";
       }    
    }
    
console.log("newDriverName", newDriverName);

let reverseNavigator =""
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseNavigator += hacker2[i]
}

console.log("ReverseNavigatorName is", reverseNavigator);

let driverName    = "Phillip"
let navigatorName = "Gloria"

let compare = driverName.localeCompare(navigatorName)

if(compare == 1) { 
    console.log("The driver's name goes first. ")
}
    else if (compare == -1) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}



// Bonus 1

