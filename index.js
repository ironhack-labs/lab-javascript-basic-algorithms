// Iteration 1: Names and Input


let hacker1 = "John";
let hacker2 = "Lara"; 

console.log("The driver's name is" + " " + hacker1)
console.log("The navigator's name is" + " " + hacker2)

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)

}else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters. `)
}

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

for ( let i = 0; i < hacker1.length; i++){
     console.log(hacker1[i].toUpperCase() + " ");

}

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ"

for (let i = hacker1.length - 1; i >= 0 ; i--){
    console.log(hacker1[i])
}

//3.3 Depending on the lexicographic order of the strings, print:



if (hacker1 === hacker2){
    console.log("What?! You both have the same name?")
} else if (hacker1 < hacker2){
    console.log("The driver's name goes first.")
} else{
    console.log("Yo, the navigator goes first, definitely.")
}


//Bonus 1



var longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const longTextArr = longText.split(" ")
console.log(longTextArr.length);
console.log(longTextArr)

var etCounter = 0;

for( let i=0; i<longTextArr.length; i++){
    if (longTextArr[i].toLowerCase()=== "et"){
        etCounter += 1
    }
}
console.log(etCounter);

//Bonus 2 

var phraseToCheck = "A man, a plan, a canal, Panama!"

const phraseLower = phraseToCheck.toLowerCase()
console.log(phraseLower)

