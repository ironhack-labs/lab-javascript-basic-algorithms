console.log("I'm ready!")
// Iteration 1: Names and Input
//Name of the driver
let hacker1 = 'Clark';
console.log("The Driver's name is "+ hacker1)

//Name of the navigator
let hacker2 = 'David'
console.log("The navigator's name is "+ hacker2)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has XX characters.")
} else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has XX characters.")
} else {
    console.log("Wow, you both have equally long names, XX characters!")
}

// Iteration 3: Loops
//3.1
let s = ""
for (elem in hacker1) {
    s += hacker1[elem].toUpperCase();
    s += " ";
}
result = s.trim()

//3.2
let reversed = ""
for (i = 0; i < hacker2.length; i++) {
    reversed += hacker2[hacker2.length-1-i]
}
console.log("Reversed navigator's name : "+ reversed)

//3.3
let arrayNames = [hacker1, hacker2]
arrayNames.sort()

if (arrayNames[0] === hacker1 && hacker1 != hacker2) {
    console.log("The driver's name goes first.")
} else if (arrayNames[0] === hacker2 && hacker1 != hacker2) {     
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus time

let str = "Mauris in dignissim enim. Ut in leo diam. Ut vel felis tristique, tincidunt sem vitae, sodales elit. Cras sit amet lacinia elit. In pulvinar metus lacus, congue mollis quam ullamcorper at. Aliquam nibh eros, hendrerit sit amet commodo sit amet, vulputate et lectus. Nam id lorem congue, faucibus ligula eu, iaculis ante. Nulla vitae est sagittis, hendrerit urna et, mollis felis. Donec est neque, vestibulum sed ultrices ut, rutrum hendrerit ligula."
let str2 = str.replace(/[^a-zA-Z ]/g, "") //get rid of the commas and dots

console.log(str2)

let splittedArray = str2.split(' ') //transform the string into an array
//console.log(splittedArray)
console.log("The number of words of the paragraph is: "+ splittedArray.length)
let numberofEt = 0
for (elem in splittedArray) {
    //console.log(splittedArray[elem].toLowerCase())
    if (splittedArray[elem].toLowerCase() === 'et') { 
        numberofEt += 1
    }
}

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

let phrasetoCheck = "stack cats"
let formatedStr = phrasetoCheck.replace(" ","")

for (let i = 0; i<formatedStr.length; i++){
    console.log(formatedStr[i],formatedStr[formatedStr.length-1-i])
    
    if(formatedStr[i] != formatedStr[formatedStr.length-1-i]) {
        console.log("Not palyndrom")
        break;
    }
}

