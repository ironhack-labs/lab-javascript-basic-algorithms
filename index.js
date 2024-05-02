// Iteration 1: Names and Input
let hacker1 = "Claudia"
console.log("The drivers name is " + hacker1)
console.log(`The driver's name is ${hacker1} `)

// The navigator's name is YYYY
let hacker2 = "Claudia"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
let hacker1Length = hacker1.length
let hacker2Length = hacker2.length

if (hacker1Length > hacker2Length) {
    console.log(`The driver has the longest name. It has ${hacker1Length} characters.`)
}
else if (hacker1Length < hacker2Length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2Length} characters.`)
}
else {
    console.log (`Wow, you both have equally long names, ${hacker1Length} characters!`)
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
    if (i != hacker1.length - 1) {
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
    // let hacker1Count = 0
    // let hacker2Count = 0
   //  for (let i = 0; i < hacker1.length; i++) {
        // hacker1Count += hacker1.charCodeAt(i)
        //hacker2Count += hacker2.charCodeAt(i)
        //if (hacker1Count < hacker2Count) {
           // console.log("The driver's name goes first.")
            //break;
        //}
        //else if (hacker1Count > hacker2Count) {
            // console.log("Yo, the navigator goes first, definitely.")
            //break;
        //} 
    //}
    //if (hacker1Count === hacker2Count) {
        //console.log("What?! You both have the same name?")
    //}

    let spaced = ''

for (let i = 0; i < hacker1.length; i++) {
    if (i !== hacker1.length - 1) {
        spaced += `${hacker1[i]} `
    } else {
        spaced += `${hacker1[i]}`
    }
}

console.log(spaced)

let reversed = ''

for (let i = hacker2.length - 1; i >=0; i--) {
    reversed += hacker2[i]
}

console.log(reversed)

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.")
} else if (hacker2.localeCompare(hacker1) < 0) {
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}
