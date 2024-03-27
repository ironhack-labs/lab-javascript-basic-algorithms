// Iteration 1: Names and Input
let hacker1 = "Pepe";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Peppy, aka the one and only or the happy-peppy";
console.log(`The driver's name is ${hacker2}`)



// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let nameWithSpaciationCapital ='';

for(let i = 0; i < hacker1.length; i++){
    let nameCapital = hacker1[i].toUpperCase();
   for(let j = 0; j < nameCapital.length; j++){
    nameWithSpaciationCapital += nameCapital[j]+ ' '
   }
}
console.log(nameWithSpaciationCapital)

//3.2
let reverseName = '';

for(let i = hacker2.length; i >= 0 ; i--){
    reverseName += hacker2[i]
}
console.log(reverseName)

//3.3
for(let i = 0; i < 1; i++){
        if(hacker1.localeCompare(hacker2) < 0){
            console.log("The driver's name goes first.")
        } else if (hacker1.localeCompare(hacker2) > 0){
            console.log("Yo, the navigator goes first, definitely.")
        } else {
            console.log("What?! You both have the same name?")
        }
    }


//Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
for(let i = 0; i < 1; i++){
    console.log(longText.length);

}

for(let i = 0; i < longText.length; i++){
    console.log(i)
}
let etCounter = '';

for(let i = 0; i < longText.length; i++){
  let checkChars = longText[i] + longText[i + 1]
    if(checkChars === "et"){
         etCounter++ ;
    }
}
console.log(`We found: ${etCounter} et`)


// Exercise not completed in time 
