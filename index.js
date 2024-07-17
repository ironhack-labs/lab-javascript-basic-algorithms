// Iteration 1: Names and Input
const hacker1 = "Casper"
console.log (`The driver's name is ${hacker1}`)
const hacker2 = 'Anna';
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
}
if(hacker2.length>hacker1.length){
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
if(hacker2.length === hacker1.length){
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


// Iteration 3: Loops
let capName = ""
for(let i=0; i<hacker1.length; i++){
    capName += hacker1[i].toUpperCase() + " ";
}
console.log(capName);

let revName = ""
for(let i=hacker2.length -1; i>=0; i--){
    revName += hacker2[i]
}
console.log (revName)


if(hacker1.localeCompare(hacker2)<0){
    console.log("The driver's name goes first.")
} else if(hacker1.localeCompare(hacker2)>0){
    console.log("Yo, the navigator goes first, definitely.")
} else {
    console.log("What?! You both have the same name?")
}



// BONUS 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
let wordCount = 1;
for(let i=0; i<longText.length; i++){
    if(longText[i] === " "){
        wordCount += 1;
    }
}
console.log(wordCount)


let etCount = 0
for(let i=0; i<longText.length; i++){
    if(longText[i] === "e" && longText[i+1] === "t"){
        etCount += 1;
    }
}
console.log(etCount);