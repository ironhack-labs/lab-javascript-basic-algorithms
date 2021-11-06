// Iteration 1: Names and Input
let hacker1 = "Arturo"

console.log(`"The driver's name is ${hacker1}"`)

let hacker2 = "Alejandro"

console.log(`"The navigator's name is ${hacker2}"`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {

    console.log(`"The driver has the longest name, it has ${hacker1.length} characters."`)
    }
    
    else if  (hacker1.length < hacker2.length) {
    
    console.log(`"It seems that the navigator has the longest name, it has ${hacker2.length} characters."`)
    
    }
    
    else {
    
    
      console.log(`"Wow, you both have equally long names, ${hacker1.length} characters!"`)
    }
    

// Iteration 3: Loops


let newDriversName = "";

for (let i=0; i < hacker1.length; i++) {

newDriversName += hacker1[i].toUpperCase() + " ";

}

console.log(newDriversName)


let newNavigatorsName = "";

for (i = hacker2.length - 1; i >= 0; i--) {

newNavigatorsName += hacker2[i];


}  


console.log(newNavigatorsName)

if (hacker1.localeCompare(hacker2) === - 1) {

  console.log(`"The driver's name goes first"`)

}

else if (hacker1.localeCompare(hacker2) === 1) {

console.log(`"Yo, the navigator goes first definetly"`)

}

else {

console.log(`"What?! You both have the same name?"`)

}