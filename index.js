// Iteration 1: Names and Input
let hacker1 = "Claudia"
let hacker2 = "Claudia"
console.log(`The driver's name is ${hacker1} `)
console.log(`The navigator's name is ${hacker2}`)

// The navigator's name is YYYY



// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name. It has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}
// Iteration 3: Loops

// Step 1: let i = 0 (ONLY HAPPENS ONCE)
// Step 2: i < hacker1.length
// Step 3: console.log(i)
// Step 4: i++


// Iteration 1:
// i = 0
// i < 7  --> 0 < 7
// console.log(i)
// i++  --> 0 = 0 + 1
// Now i = 1



let hacker1Separated = "" 

// i = 0:
//          hacker1Seperated = "" + "C"
//          hacker1Seperated = "C"

// i = 1:
//          hacker1Seperated = "C" + "l"
//          hacker1Seperated = "Cl"

// i = 2:
//          hacker1Seperated = "Cl" + "a"
//          hacker1Seperated = "Cla"

for (let i = 0; i < hacker1.length; i++){
    if (i !== hacker1.length - 1) {
        hacker1Separated += hacker1[i].toUpperCase() + " "
    }
    else {
        hacker1Separated += hacker1[i].toUpperCase()
    }
    
    // Same as: hacker1Seperated = hacker1Seperated + hacker[i]
}

// ANSWER TO 3.1
console.log(hacker1Separated)


// Question 3.2
let hacker2Reverse = ""
for (let i = hacker2.length -1; i >= 0; i--){
    hacker2Reverse += hacker2[i]
}
// ANSWER TO 3.2
console.log(hacker2Reverse)



// Question 3.3
let hacker1Count = 0
let hacker2Count = 0
for (let i = 0; i < hacker1.length; i++) {
    hacker1Count += hacker1.toLowerCase().charCodeAt(i)
    hacker2Count += hacker2.toLowerCase().charCodeAt(i)
    if (hacker1Count < hacker2Count) {
        console.log("The driver's name goes first.")
        break;
    }
    else if (hacker1Count > hacker2Count) {
        console.log("Yo, the navigator goes first, definitely.")
        break;
    } 
}

if (hacker1Count === hacker2Count) {
    console.log("What?! You both have the same name?")
}





