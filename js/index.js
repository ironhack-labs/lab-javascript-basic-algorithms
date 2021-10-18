// Iteration 1: Names and Input
const hacker1 = "Giorgi"
const hacker2 = "Axel"

console.log(`The driver's name is ${hacker1}.`)
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}else if(hacker1.length > hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}



// Iteration 3: Loops

// 3.1

name = ""
for (let i = 0; i < hacker1.length; i ++){
    name += hacker1[i].toUpperCase() + " "    
}
console.log(name)

// 3.2

reverseName = ""
for (let i = hacker2.length - 1; i >= 0; i --){
    reverseName += hacker2[i]  
}

console.log(reverseName)

// 3.3

if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
}else if (hacker1 > hacker2){
    console.log("Yo, the navigator goes first definitely")
}else {
    console.log("What?! You both have the same name?")
}


// Bonus 1

textOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

splitText = textOne.split(" ")

console.log(splitText.length)
count = 0
for (let i = 0; i < splitText.length; i++){
    if (splitText[i] == "et"){
        count ++
    }
}
console.log(count)


// Bonus 2

let cleanPhrase = ""
function clean(str){ 
    for (let i = 0; i <= str.length - 1; i++){
        switch (str[i]) {
            case "?":
            case ",":
            case "'":
            case "!":
            case " ":
                break;
            default:
                cleanPhrase += str[i]

        }
    
    }
    cleanPhraseLower = cleanPhrase.toLowerCase()
    return cleanPhraseLower
}



function palindrome(str) {
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }

// Enter the phrase here
let phraseToCheck = "No 'x' in Nixon"  


if (palindrome(clean(phraseToCheck)) == true){
    console.log("A palindrome")
}else{
    console.log("Not a palindrome")
}