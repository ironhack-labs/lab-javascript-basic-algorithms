
// Iteration 1: Names and Input
let hacker1 = "McQueen";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Cortana";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}`);

} else if(hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`);
} else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}


// Iteration 3: Loops
function printName(name) {
    let nameUpper = name.toUpperCase()
    let newName = ""
    for(let letters of nameUpper) {
        newName += `${letters} `
    }
    console.log(newName)
}

printName(hacker1)

function reverseName(name){
    let nameLower = name.toLowerCase()
    let nameLen = nameLower.length
    let newName = "" 
    for(i = nameLen-1; i >= 0; i--){
        newName += `${nameLower[i]}`
    }
    console.log(newName)
}                                                                                                                 
                                                                                                                                                                                                                                                                                                                                           
reverseName(hacker2)

function compareTo(name1, name2){
    if(name1.localeCompare(name2) < 0){
        console.log("The driver's name goes first.")
    } else if(name1.localeCompare(name2) > 0){
        console.log("Yo, the navigator goes first definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
}

compareTo(hacker1, hacker2)





